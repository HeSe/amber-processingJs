smalltalk.addPackage('Processing-HTML', {});
smalltalk.addClass('PjsSketchContainer', smalltalk.Widget, ['p', 'width', 'height', 'sketchClass', 'canvasId', 'pjsSketch'], 'Processing-HTML');
smalltalk.addMethod(
"_canvasId",
smalltalk.method({
selector: "canvasId",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@canvasId'], "_isNil", []);
    if (smalltalk.assert($1)) {
        self['@canvasId'] = "canvas1";
        self['@canvasId'];
    }
    return self['@canvasId'];
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_canvasId_",
smalltalk.method({
selector: "canvasId:",
fn: function (anId) {
    var self = this;
    self['@canvasId'] = anId;
    return self;
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    return self['@height'];
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
fn: function (aHInt) {
    var self = this;
    self['@height'] = aHInt;
    return self;
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_p",
smalltalk.method({
selector: "p",
fn: function () {
    var self = this;
    return self['@p'];
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_pjsSketch",
smalltalk.method({
selector: "pjsSketch",
fn: function () {
    var self = this;
    return self['@pjsSketch'];
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
fn: function (html) {
    var self = this;
    var canvas;
    var sketchProc;
    canvas = smalltalk.send(html, "_canvas", []);
    smalltalk.send(canvas, "_width_", [smalltalk.send(self, "_width", [])]);
    smalltalk.send(canvas, "_height_", [smalltalk.send(self, "_height", [])]);
    smalltalk.send(canvas, "_id_", [smalltalk.send(self, "_canvasId", [])]);
    sketchProc = smalltalk.send(function (processing) {return processing.draw = function () {};}, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    canvas = smalltalk.send(document, "_getElementById_", [smalltalk.send(self, "_canvasId", [])]);
    p = new Processing(canvas, sketchProc);
    smalltalk.send(self, "_startPjsSketch", []);
    return self;
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_sketchClass",
smalltalk.method({
selector: "sketchClass",
fn: function () {
    var self = this;
    return self['@sketchClass'];
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_sketchClass_",
smalltalk.method({
selector: "sketchClass:",
fn: function (aPjsSketchSubClass) {
    var self = this;
    self['@sketchClass'] = aPjsSketchSubClass;
    return self;
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_startPjsSketch",
smalltalk.method({
selector: "startPjsSketch",
fn: function () {
    var self = this;
    self['@pjsSketch'] = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [smalltalk.send(self, "_sketchClass", [])]), "_start", []);
    return self;
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
    var self = this;
    return self['@width'];
}
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
fn: function (aWInt) {
    var self = this;
    self['@width'] = aWInt;
    return self;
}
}),
smalltalk.PjsSketchContainer);


smalltalk.addMethod(
"_newWidth_height_sketchClass_",
smalltalk.method({
selector: "newWidth:height:sketchClass:",
fn: function (aWInt, aHInt, aSketchClass) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_width_", [aWInt]);
    smalltalk.send($2, "_height_", [aHInt]);
    smalltalk.send($2, "_sketchClass_", [aSketchClass]);
    $3 = smalltalk.send($2, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    $1 = $3;
    return $1;
}
}),
smalltalk.PjsSketchContainer.klass);

smalltalk.addMethod(
"_newWidth_height_sketchClass_canvasId_",
smalltalk.method({
selector: "newWidth:height:sketchClass:canvasId:",
fn: function (aWInt, aHInt, aSketchClass, anId) {
    var self = this;
    var $2, $3, $1;
    $2 = smalltalk.send(self, "_new", []);
    smalltalk.send($2, "_width_", [aWInt]);
    smalltalk.send($2, "_height_", [aHInt]);
    smalltalk.send($2, "_sketchClass_", [aSketchClass]);
    smalltalk.send($2, "_canvasId_", [anId]);
    $3 = smalltalk.send($2, "_appendToJQuery_", [smalltalk.send("body", "_asJQuery", [])]);
    $1 = $3;
    return $1;
}
}),
smalltalk.PjsSketchContainer.klass);


