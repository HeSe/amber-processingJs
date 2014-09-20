define("amber-processingJS/Processing-HTML", ["amber/boot", "amber_core/Web"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Processing-HTML');
smalltalk.packages["Processing-HTML"].transport = {"type":"amd","amdNamespace":"amber-processingJS"};

smalltalk.addClass('PjsSketchContainer', globals.Widget, ['p', 'width', 'height', 'sketchClass', 'canvasId', 'pjsSketch'], 'Processing-HTML');
smalltalk.addMethod(
smalltalk.method({
selector: "canvasId",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=_st(self["@canvasId"])._isNil();
if(smalltalk.assert($1)){
self["@canvasId"]="canvas1";
self["@canvasId"];
};
$2=self["@canvasId"];
return $2;
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},globals.PjsSketchContainer)})},
args: [],
source: "canvasId\x09\x0a\x0a\x09canvasId isNil ifTrue:[canvasId := 'canvas1'].\x0a\x0a\x09^canvasId",
messageSends: ["ifTrue:", "isNil"],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "canvasId:",
protocol: 'not yet classified',
fn: function (anId){
var self=this;
self["@canvasId"]=anId;
return self},
args: ["anId"],
source: "canvasId: anId\x09\x09\x0a\x0a\x09canvasId := anId",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "height",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@height"];
return $1;
},
args: [],
source: "height\x09\x09\x0a\x0a\x09^height",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "height:",
protocol: 'not yet classified',
fn: function (aHInt){
var self=this;
self["@height"]=aHInt;
return self},
args: ["aHInt"],
source: "height: aHInt\x0a\x0a\x09height := aHInt",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "initProcessingInstance:withProc:",
protocol: 'not yet classified',
fn: function (canvas,sketchProc){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 p =  new Processing(canvas, sketchProc); ;
return self}, function($ctx1) {$ctx1.fill(self,"initProcessingInstance:withProc:",{canvas:canvas,sketchProc:sketchProc},globals.PjsSketchContainer)})},
args: ["canvas", "sketchProc"],
source: "initProcessingInstance: canvas withProc: sketchProc\x0a\x0a     < p =  new Processing(canvas, sketchProc); >",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "p",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@p"];
return $1;
},
args: [],
source: "p\x09\x09\x0a\x0a\x09^p",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "pjsSketch",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@pjsSketch"];
return $1;
},
args: [],
source: "pjsSketch\x09\x09\x0a\x0a\x09^pjsSketch",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
var canvas,sketchProc;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
canvas=_st(html)._canvas();
_st(canvas)._width_(self._width());
_st(canvas)._height_(self._height());
$1=canvas;
$2=self._canvasId();
$ctx1.sendIdx["canvasId"]=1;
_st($1)._id_($2);
sketchProc=_st((function(processing){
return smalltalk.withContext(function($ctx2) {
self._resetSetupFunction_(processing);
return self._resetDrawFunction_(processing);
}, function($ctx2) {$ctx2.fillBlock({processing:processing},$ctx1,1)})}))._appendToJQuery_("body"._asJQuery());
canvas=_st(document)._getElementById_(self._canvasId());
self._initProcessingInstance_withProc_(canvas,sketchProc);
self._startPjsSketch();
return self}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,canvas:canvas,sketchProc:sketchProc},globals.PjsSketchContainer)})},
args: ["html"],
source: "renderOn: html\x0a\x0a\x09| canvas  sketchProc |\x0a    \x0a    canvas := html canvas.\x0a    canvas width: self width.\x0a    canvas height: self height.\x0a    canvas id: self canvasId.\x0a    \x0a    sketchProc :=( [ :processing | self resetSetupFunction: processing.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 self resetDrawFunction: processing ] appendToJQuery: 'body' asJQuery ).\x0a\x0a\x09canvas := document getElementById: self canvasId.\x0a\x09\x09\x0a\x09self initProcessingInstance: canvas withProc: sketchProc.\x0a        \x0a    self startPjsSketch",
messageSends: ["canvas", "width:", "width", "height:", "height", "id:", "canvasId", "appendToJQuery:", "resetSetupFunction:", "resetDrawFunction:", "asJQuery", "getElementById:", "initProcessingInstance:withProc:", "startPjsSketch"],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "resetDrawFunction",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 Processing.draw = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"resetDrawFunction",{},globals.PjsSketchContainer)})},
args: [],
source: "resetDrawFunction\x0a \x09< Processing.draw = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "resetDrawFunction:",
protocol: 'not yet classified',
fn: function (aProcessing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aProcessing.draw = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"resetDrawFunction:",{aProcessing:aProcessing},globals.PjsSketchContainer)})},
args: ["aProcessing"],
source: "resetDrawFunction: aProcessing\x0a \x09< aProcessing.draw = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "resetSetupFunction",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.setup = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"resetSetupFunction",{},globals.PjsSketchContainer)})},
args: [],
source: "resetSetupFunction\x0a        < processing.setup = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "resetSetupFunction:",
protocol: 'not yet classified',
fn: function (aProcessing){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 aProcessing.setup = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"resetSetupFunction:",{aProcessing:aProcessing},globals.PjsSketchContainer)})},
args: ["aProcessing"],
source: "resetSetupFunction: aProcessing\x0a        < aProcessing.setup = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "sketchClass",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@sketchClass"];
return $1;
},
args: [],
source: "sketchClass\x0a\x0a\x09^sketchClass",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "sketchClass:",
protocol: 'not yet classified',
fn: function (aPjsSketchSubClass){
var self=this;
self["@sketchClass"]=aPjsSketchSubClass;
return self},
args: ["aPjsSketchSubClass"],
source: "sketchClass: aPjsSketchSubClass\x09\x09\x0a\x0a\x09sketchClass := aPjsSketchSubClass",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "startPjsSketch",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Smalltalk(){return globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
return smalltalk.withContext(function($ctx1) { 
self["@pjsSketch"]=_st(_st(_st($Smalltalk())._current())._at_(self._sketchClass()))._startWidth_height_(self._width(),self._height());
return self}, function($ctx1) {$ctx1.fill(self,"startPjsSketch",{},globals.PjsSketchContainer)})},
args: [],
source: "startPjsSketch\x09\x09\x0a\x0a\x09pjsSketch := (Smalltalk current at: self sketchClass)  startWidth: self width height: self height",
messageSends: ["startWidth:height:", "at:", "current", "sketchClass", "width", "height"],
referencedClasses: ["Smalltalk"]
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "width",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@width"];
return $1;
},
args: [],
source: "width\x09\x09\x0a\x0a\x09^width",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);

smalltalk.addMethod(
smalltalk.method({
selector: "width:",
protocol: 'not yet classified',
fn: function (aWInt){
var self=this;
self["@width"]=aWInt;
return self},
args: ["aWInt"],
source: "width: aWInt\x09\x09\x0a\x0a\x09width := aWInt",
messageSends: [],
referencedClasses: []
}),
globals.PjsSketchContainer);


smalltalk.addMethod(
smalltalk.method({
selector: "newWidth:height:sketchClass:",
protocol: 'not yet classified',
fn: function (aWInt,aHInt,aSketchClass){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._width_(aWInt);
_st($2)._height_(aHInt);
_st($2)._sketchClass_(aSketchClass);
$3=_st($2)._appendToJQuery_("body"._asJQuery());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWidth:height:sketchClass:",{aWInt:aWInt,aHInt:aHInt,aSketchClass:aSketchClass},globals.PjsSketchContainer.klass)})},
args: ["aWInt", "aHInt", "aSketchClass"],
source: "newWidth: aWInt height: aHInt sketchClass: aSketchClass\x0a\x0a\x09^self new \x0a    \x09width: aWInt; \x0a    \x09height: aHInt; \x0a        sketchClass:aSketchClass ;\x0a          appendToJQuery: 'body' asJQuery",
messageSends: ["width:", "new", "height:", "sketchClass:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.PjsSketchContainer.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "newWidth:height:sketchClass:canvasId:",
protocol: 'not yet classified',
fn: function (aWInt,aHInt,aSketchClass,anId){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$3,$1;
$2=self._new();
_st($2)._width_(aWInt);
_st($2)._height_(aHInt);
_st($2)._sketchClass_(aSketchClass);
_st($2)._canvasId_(anId);
$3=_st($2)._appendToJQuery_("body"._asJQuery());
$1=$3;
return $1;
}, function($ctx1) {$ctx1.fill(self,"newWidth:height:sketchClass:canvasId:",{aWInt:aWInt,aHInt:aHInt,aSketchClass:aSketchClass,anId:anId},globals.PjsSketchContainer.klass)})},
args: ["aWInt", "aHInt", "aSketchClass", "anId"],
source: "newWidth: aWInt height: aHInt sketchClass: aSketchClass canvasId: anId\x0a\x0a\x09^self new \x0a    \x09width: aWInt; \x0a    \x09height: aHInt; \x0a        sketchClass:aSketchClass; \x0a        canvasId: anId ;\x0a        appendToJQuery: 'body' asJQuery",
messageSends: ["width:", "new", "height:", "sketchClass:", "canvasId:", "appendToJQuery:", "asJQuery"],
referencedClasses: []
}),
globals.PjsSketchContainer.klass);

});
