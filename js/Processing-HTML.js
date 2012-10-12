smalltalk.addPackage('Processing-HTML', {});
smalltalk.addClass('PjsSketchContainer', smalltalk.Widget, ['p', 'width', 'height', 'sketchClass', 'canvasId', 'pjsSketch'], 'Processing-HTML');
smalltalk.addMethod(
"_canvasId",
smalltalk.method({
selector: "canvasId",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@canvasId'], "_isNil", []);
    if (smalltalk.assert($1)) {
        self['@canvasId'] = "canvas1";
        self['@canvasId'];
    }
    return self['@canvasId'];
},
args: [],
source: "canvasId\x09\x0a\x0a\x09canvasId isNil ifTrue:[canvasId := 'canvas1'].\x0a\x0a\x09^canvasId",
messageSends: ["ifTrue:", "isNil"],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_canvasId_",
smalltalk.method({
selector: "canvasId:",
category: 'not yet classified',
fn: function (anId) {
    var self = this;
    self['@canvasId'] = anId;
    return self;
},
args: ["anId"],
source: "canvasId: anId\x09\x09\x0a\x0a\x09canvasId := anId",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@height'];
},
args: [],
source: "height\x09\x09\x0a\x0a\x09^height",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
category: 'not yet classified',
fn: function (aHInt) {
    var self = this;
    self['@height'] = aHInt;
    return self;
},
args: ["aHInt"],
source: "height: aHInt\x09\x09\x0a\x0a\x09height := aHInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_p",
smalltalk.method({
selector: "p",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@p'];
},
args: [],
source: "p\x09\x09\x0a\x0a\x09^p ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_pjsSketch",
smalltalk.method({
selector: "pjsSketch",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@pjsSketch'];
},
args: [],
source: "pjsSketch\x09\x09\x0a\x0a\x09^pjsSketch",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_renderOn_",
smalltalk.method({
selector: "renderOn:",
category: 'not yet classified',
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
},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09| canvas  sketchProc |\x0a    \x0a    canvas := html canvas.\x0a    canvas width: self width.\x0a    canvas height: self height.\x0a    canvas id: self canvasId.\x0a    \x0a    \x0a    sketchProc :=( [:processing |  < processing.draw = function() {}; > ] appendToJQuery: 'body' asJQuery ).\x0a\x0a\x09canvas := document getElementById: self canvasId.\x0a\x09\x09\x0a\x09< p =  new Processing(canvas, sketchProc); >.\x0a        \x0a      self startPjsSketch\x0a    \x0a    ",
messageSends: ["canvas", "width:", "width", "height:", "height", "id:", "canvasId", "appendToJQuery:", "asJQuery", "getElementById:", "startPjsSketch"],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_sketchClass",
smalltalk.method({
selector: "sketchClass",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@sketchClass'];
},
args: [],
source: "sketchClass\x09\x09\x0a\x0a\x09^sketchClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_sketchClass_",
smalltalk.method({
selector: "sketchClass:",
category: 'not yet classified',
fn: function (aPjsSketchSubClass) {
    var self = this;
    self['@sketchClass'] = aPjsSketchSubClass;
    return self;
},
args: ["aPjsSketchSubClass"],
source: "sketchClass: aPjsSketchSubClass\x09\x09\x0a\x0a\x09sketchClass := aPjsSketchSubClass",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_startPjsSketch",
smalltalk.method({
selector: "startPjsSketch",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@pjsSketch'] = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Smalltalk || Smalltalk, "_current", []), "_at_", [smalltalk.send(self, "_sketchClass", [])]), "_startWidth_height_", [smalltalk.send(self, "_width", []), smalltalk.send(self, "_height", [])]);
    return self;
},
args: [],
source: "startPjsSketch\x09\x09\x0a\x0a\x09pjsSketch := (Smalltalk current at: self sketchClass)  startWidth: self width height: self height",
messageSends: ["startWidth:height:", "width", "height", "at:", "sketchClass", "current"],
referencedClasses: ["Smalltalk"]
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@width'];
},
args: [],
source: "width\x09\x09\x0a\x0a\x09^width",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
category: 'not yet classified',
fn: function (aWInt) {
    var self = this;
    self['@width'] = aWInt;
    return self;
},
args: ["aWInt"],
source: "width: aWInt\x09\x09\x0a\x0a\x09width := aWInt",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketchContainer);


smalltalk.addMethod(
"_newWidth_height_sketchClass_",
smalltalk.method({
selector: "newWidth:height:sketchClass:",
category: 'not yet classified',
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
},
args: ["aWInt", "aHInt", "aSketchClass"],
source: "newWidth: aWInt height: aHInt sketchClass: aSketchClass\x0a\x0a\x09^self new \x0a    \x09width: aWInt; \x0a    \x09height: aHInt; \x0a        sketchClass:aSketchClass ;\x0a          appendToJQuery: 'body' asJQuery",
messageSends: ["width:", "new", "height:", "sketchClass:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.PjsSketchContainer.klass);

smalltalk.addMethod(
"_newWidth_height_sketchClass_canvasId_",
smalltalk.method({
selector: "newWidth:height:sketchClass:canvasId:",
category: 'not yet classified',
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
},
args: ["aWInt", "aHInt", "aSketchClass", "anId"],
source: "newWidth: aWInt height: aHInt sketchClass: aSketchClass canvasId: anId\x0a\x0a\x09^self new \x0a    \x09width: aWInt; \x0a    \x09height: aHInt; \x0a        sketchClass:aSketchClass; \x0a        canvasId: anId ;\x0a        appendToJQuery: 'body' asJQuery",
messageSends: ["width:", "new", "height:", "sketchClass:", "canvasId:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
smalltalk.PjsSketchContainer.klass);


