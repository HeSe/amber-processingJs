amd-config-builder [![Travis CI Status](https://secure.travis-ci.org/herby/amd-config-builder.png)](https://travis-ci.org/#!/herby/amd-config-builder)
==================

Builds amd config for a project from configs of its components


For a bigger project, where you load modules using AMD< you face with the problem of building
a big `require.config` call encompassing all dependencies and shims. Whwnever you change something
about the structure of the project, this big structure inside the call need to be changed.

As an example: you use CodeMirror, a non-amd module in your project. You naturally use jQuery,
the AMD project with hardcoded id (because CodeMirror needs it). Plus, you have some more modules
(like es5-shim) in you `bower_components`, and you have some modules in your own app.

The premise of this project is to be able to specify pieces of AMD to-be-passed-into-`require.config`
object per component, that is, if the project has this structure:


```
  . <root>
  +-+ bower_components/
  | +-+ jquery/
  | | `-- jquery.min.js
  | +-+ codemirror/
  | | +-- codemirror.min.css
  | | `-- codemirror.min.js
  | `-+ require-css/
  |   `-- require-css.min.js
  +-- lib/
  | `-- ... some files
  `-- distinct-part/
    +-- vendor/
    | +-- foo/
    | | `-- ... files of foo vendor lib
    | `-- ... some other vendor libs
    `-- ... some more files
```

These files would be added:


```js
// <root>/local.amd.json
{
  "paths": {
    "my-app": "lib"
  }
}
```

```js
//<root>/jquery.amd.json
{
  "paths": {
    "jquery": "jquery.min"
  }
}
```

```js
//<root>/require-css.amd.json
{
  "paths": {
    "css": "require-css.min"
  }
}
```

```js
//<root>/codemirror.amd.json
{
  "paths": {
    "codemirror": "."
  },
  "shim": {
    "codemirror/codemirror.min": [ "jquery", "css!codemirror/codemirror.min" ]
  }
}
```


```js
//<root>/distinct-part/local.amd.json
{
  "paths": {
    "my-distinct": "."
  },
  "shim": {
    "my-distinct/vendor/foo": [ "codemirror/codemirror.min" ]
  }
}
```

The `local.amd.json` files describe the `require.config` part for the module at the directory where they are present, in this example for the `<root>` and `<root>/distinct-part`. The idea is, each library can supply its own `local.amd.json`, so the final config can be assembled. The `paths` part of `local.amd.json` is relative to the module it describes, that is, relative to its position.

The `name.amd.json` files describe the missing pieces of config for other dependencies, which do not supply their own one (or they do, but something should be added/overridden). The `name` is the name of the directory where the dependent library / module resides. Thus, `jquery.amd.json` describes config part of `<root>/bower_dependencies/jquery`, similarly for `codemirror.amd.json` and `require-css.amd.json`. Again, `paths` part is relative _to the module described_, that is, for `jquery.amd.json`, even if it is in `<root>`, the `pahts` part is resolved relative to `<root>/bower_components/jquery` directory.

Q: "What if there are more directories with name `name`?

A: "The one which is less deeper in the hierarchy wins. If there are more of them at the same depth, the result is undefined (probably on of them is used; maybe some hinting as to which one should be preferred can be added in the future)."

The result should be to look for all `.amd.json` files in the project and assemble all these files into one big `require.config` call:

```js
require.config({
  paths: {
    "my-app": "lib",
    "my-distinct": "distinct-part",
    "codemirror": "bower_components/codemirror",
    "jquery": "bower_components/jquery/jquery.min",
    "css": "bower_components/require-css/require-css.min"
  },
  shim: {
    "my-distinct/vendor/foo": [ "codemirror/codemirror.min" ],
    "codemirror/codemirror.min": [ "jquery", "css!codemirror/codemirror.min" ]
  }
});
```

This, saved to a file, can be used as-is as a script to set up requirejs (or other loader),
and it can as well be used as `mainConfigFile` for the requirejs optimizer.

API
----

**require('amd-config-builder').produceConfigObject(rootDir, function(err, result))**

This scans for the subtree of _rootDir_ and call the _callback_
with either the error or with _(null, configObject)_. The _configObject_
is what you put into `require.config` call.
All paths in _configObject_'s paths section that were not absolute / uri,
are relative to _rootDir_
