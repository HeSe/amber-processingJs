var path = require('path'),
    url = require('url'),
    _ = require('lodash'),
    findit = require('findit'),
    fs = require('fs');

function eachConfigFile(root, callback) {
    var result = {files: [], dirs: []};
    var find = findit(root, {followSymlinks: true});
    find.on('file', function (file, stat) {
        if (file.match(/\.amd\.json$/)) {
            result.files[file] = stat;
        }
    });
    find.on('directory', function (dir, stat, stop) {
        result.dirs[dir] = stat;
    });
    find.on('end', function () {
        callback(null, result);
    });
}

function transformShimDeps(json) {
    var shimmedList = json.shim && Object.keys(json.shim);
    if (!shimmedList) return;
    for (var i = 0; i < shimmedList.length; i++) {
        var shim = json.shim[shimmedList[i]];
        if (Array.isArray(shim)) {
            json.shim[shimmedList[i]] = {deps: shim};
        }
    }
}

function transformPaths(json, root, file, dirs) {
   if (json.paths) {
        var specifier = path.basename(file).replace(/\.amd\.json$/, "");
        var modulePath = specifier === "local" ? path.dirname(file) : dirs[specifier];
        var dir = (path.relative(root, modulePath).split(path.sep).join('/') || ".") + '/';
        transformPathArray(json.paths);
    }

    function transformPathArray(array) {
        var paths = Object.keys(array);
        for (var i = 0; i < paths.length; i++) {
            var key = paths[i];
            var pathValue = array[key];
            switch (typeof pathValue) {
                case "string":
                    array[key] = url.resolve(dir, pathValue) || ".";
                    break;
                case "object":
                    Array.isArray(pathValue) && transformPathArray(pathValue);
                    break;
            }
        }
    }
}

function isLessDeep(a, b) {
    var bDepth = b ? b.split(path.sep).length : Infinity;
    var aDepth = a ? a.split(path.sep).length : Infinity;
    return aDepth < bDepth;
}

function constructDirMap(dirs) {
    var result = {};
    for (var i = 0; i < dirs.length; i++) {
        var dir = dirs[i];
        var basename = path.basename(dir);
        if (isLessDeep(dir, result[basename])) {
            result[basename] = dir;
        }
    }
    return result;
}

function queoeOfFilesToProcess(files, dirMap) {
    var firstPass = [], secondPass = [];
    for (var i = 0; i < files.length; i++) {
        var file = files[i];
        var basename = path.basename(file);
        var specifier = basename.replace(/\.amd\.json$/, "");
        if (specifier == "" || specifier[0] == ".") {
            continue;
        } else if (specifier == "local") {
            firstPass.push(file);
        } else if (dirMap[specifier]) {
            secondPass.push(file);
        } else {
            throw new Error("No location for " + file);
        }
    }
    return  firstPass.concat(secondPass).reverse();
}

exports.produceConfigObject = function (root, callback) {
    root = path.resolve(root);
    eachConfigFile(root, function (err, filesAndDirs) {
        if (err) {
            callback(err);
            return;
        }

        var dirMap = constructDirMap(Object.keys(filesAndDirs.dirs));
        var queue;
        try {
            queue = queoeOfFilesToProcess(Object.keys(filesAndDirs.files), dirMap);
        } catch (e) {
            callback(e);
            return;
        }
        if (!queue.length) {
            callback(new Error("No .amd.json-type file found"));
            return;
        }
        var result = {};
        for (var i = 0; i < queue.length; i++) {
            var file = queue[i];
            var json = require(file);
            transformShimDeps(json);
            transformPaths(json, root, file, dirMap);
            _.merge(result, json, function (a, b) {
                return _.isArray(a) ? b.concat(a) : undefined;
            });
        }
        callback(null, result);
    })
};
