define("amber-processingJs/Processing-HTML", ["amber/boot", "amber_core/Web"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Processing-HTML');
$core.packages["Processing-HTML"].transport = {"type":"amd","amdNamespace":"amber-processingJs"};

$core.addClass('PjsSketchContainer', $globals.Widget, ['p', 'width', 'height', 'sketchClass', 'canvasId', 'pjsSketch'], 'Processing-HTML');
$core.addMethod(
$core.method({
selector: "canvasId",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=$recv(self["@canvasId"])._isNil();
if($core.assert($1)){
self["@canvasId"]="canvas1";
self["@canvasId"];
};
$2=self["@canvasId"];
return $2;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"canvasId",{},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "canvasId\x09\x0a\x0a\x09canvasId isNil ifTrue:[canvasId := 'canvas1'].\x0a\x0a\x09^canvasId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:", "isNil"]
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "canvasId:",
protocol: 'not yet classified',
fn: function (anId){
var self=this;
self["@canvasId"]=anId;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anId"],
source: "canvasId: anId\x09\x09\x0a\x0a\x09canvasId := anId",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@height"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x09\x09\x0a\x0a\x09^height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "height:",
protocol: 'not yet classified',
fn: function (aHInt){
var self=this;
self["@height"]=aHInt;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHInt"],
source: "height: aHInt\x0a\x0a\x09height := aHInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "initProcessingInstance:withProc:",
protocol: 'not yet classified',
fn: function (canvas,sketchProc){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p =  new Processing(canvas, sketchProc); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initProcessingInstance:withProc:",{canvas:canvas,sketchProc:sketchProc},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["canvas", "sketchProc"],
source: "initProcessingInstance: canvas withProc: sketchProc\x0a\x0a     < p =  new Processing(canvas, sketchProc); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "p",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@p"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "p\x09\x09\x0a\x0a\x09^p",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "pjsSketch",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@pjsSketch"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsSketch\x09\x09\x0a\x0a\x09^pjsSketch",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "renderOn:",
protocol: 'not yet classified',
fn: function (html){
var self=this;
var canvas,sketchProc;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
canvas=$recv(html)._canvas();
$recv(canvas)._width_(self._width());
$recv(canvas)._height_(self._height());
$1=canvas;
$2=self._canvasId();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["canvasId"]=1;
//>>excludeEnd("ctx");
$recv($1)._id_($2);
sketchProc=$recv((function(processing){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
self._resetSetupFunction_(processing);
return self._resetDrawFunction_(processing);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({processing:processing},$ctx1,1)});
//>>excludeEnd("ctx");
}))._appendToJQuery_("body"._asJQuery());
canvas=$recv(document)._getElementById_(self._canvasId());
self._initProcessingInstance_withProc_(canvas,sketchProc);
self._startPjsSketch();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"renderOn:",{html:html,canvas:canvas,sketchProc:sketchProc},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["html"],
source: "renderOn: html\x0a\x0a\x09| canvas  sketchProc |\x0a    \x0a    canvas := html canvas.\x0a    canvas width: self width.\x0a    canvas height: self height.\x0a    canvas id: self canvasId.\x0a    \x0a    sketchProc :=( [ :processing | self resetSetupFunction: processing.\x0a\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09\x09 self resetDrawFunction: processing ] appendToJQuery: 'body' asJQuery ).\x0a\x0a\x09canvas := document getElementById: self canvasId.\x0a\x09\x09\x0a\x09self initProcessingInstance: canvas withProc: sketchProc.\x0a        \x0a    self startPjsSketch",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["canvas", "width:", "width", "height:", "height", "id:", "canvasId", "appendToJQuery:", "resetSetupFunction:", "resetDrawFunction:", "asJQuery", "getElementById:", "initProcessingInstance:withProc:", "startPjsSketch"]
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "resetDrawFunction",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 Processing.draw = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetDrawFunction",{},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetDrawFunction\x0a \x09< Processing.draw = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "resetDrawFunction:",
protocol: 'not yet classified',
fn: function (aProcessing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 aProcessing.draw = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetDrawFunction:",{aProcessing:aProcessing},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProcessing"],
source: "resetDrawFunction: aProcessing\x0a \x09< aProcessing.draw = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "resetSetupFunction",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.setup = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetSetupFunction",{},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetSetupFunction\x0a        < processing.setup = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "resetSetupFunction:",
protocol: 'not yet classified',
fn: function (aProcessing){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 aProcessing.setup = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetSetupFunction:",{aProcessing:aProcessing},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProcessing"],
source: "resetSetupFunction: aProcessing\x0a        < aProcessing.setup = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "sketchClass",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@sketchClass"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "sketchClass\x0a\x0a\x09^sketchClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "sketchClass:",
protocol: 'not yet classified',
fn: function (aPjsSketchSubClass){
var self=this;
self["@sketchClass"]=aPjsSketchSubClass;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsSketchSubClass"],
source: "sketchClass: aPjsSketchSubClass\x09\x09\x0a\x0a\x09sketchClass := aPjsSketchSubClass",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "startPjsSketch",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Smalltalk(){return $globals.Smalltalk||(typeof Smalltalk=="undefined"?nil:Smalltalk)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsSketch"]=$recv($recv($recv($Smalltalk())._current())._at_(self._sketchClass()))._startWidth_height_(self._width(),self._height());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startPjsSketch",{},$globals.PjsSketchContainer)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "startPjsSketch\x09\x09\x0a\x0a\x09pjsSketch := (Smalltalk current at: self sketchClass)  startWidth: self width height: self height",
referencedClasses: ["Smalltalk"],
//>>excludeEnd("ide");
messageSends: ["startWidth:height:", "at:", "current", "sketchClass", "width", "height"]
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@width"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x09\x09\x0a\x0a\x09^width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);

$core.addMethod(
$core.method({
selector: "width:",
protocol: 'not yet classified',
fn: function (aWInt){
var self=this;
self["@width"]=aWInt;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWInt"],
source: "width: aWInt\x09\x09\x0a\x0a\x09width := aWInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketchContainer);


$core.addMethod(
$core.method({
selector: "newWidth:height:sketchClass:",
protocol: 'not yet classified',
fn: function (aWInt,aHInt,aSketchClass){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._width_(aWInt);
$recv($2)._height_(aHInt);
$recv($2)._sketchClass_(aSketchClass);
$3=$recv($2)._appendToJQuery_("body"._asJQuery());
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWidth:height:sketchClass:",{aWInt:aWInt,aHInt:aHInt,aSketchClass:aSketchClass},$globals.PjsSketchContainer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWInt", "aHInt", "aSketchClass"],
source: "newWidth: aWInt height: aHInt sketchClass: aSketchClass\x0a\x0a\x09^self new \x0a    \x09width: aWInt; \x0a    \x09height: aHInt; \x0a        sketchClass:aSketchClass ;\x0a          appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "new", "height:", "sketchClass:", "appendToJQuery:", "asJQuery"]
}),
$globals.PjsSketchContainer.klass);

$core.addMethod(
$core.method({
selector: "newWidth:height:sketchClass:canvasId:",
protocol: 'not yet classified',
fn: function (aWInt,aHInt,aSketchClass,anId){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._width_(aWInt);
$recv($2)._height_(aHInt);
$recv($2)._sketchClass_(aSketchClass);
$recv($2)._canvasId_(anId);
$3=$recv($2)._appendToJQuery_("body"._asJQuery());
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWidth:height:sketchClass:canvasId:",{aWInt:aWInt,aHInt:aHInt,aSketchClass:aSketchClass,anId:anId},$globals.PjsSketchContainer.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWInt", "aHInt", "aSketchClass", "anId"],
source: "newWidth: aWInt height: aHInt sketchClass: aSketchClass canvasId: anId\x0a\x0a\x09^self new \x0a    \x09width: aWInt; \x0a    \x09height: aHInt; \x0a        sketchClass:aSketchClass; \x0a        canvasId: anId ;\x0a        appendToJQuery: 'body' asJQuery",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:", "new", "height:", "sketchClass:", "canvasId:", "appendToJQuery:", "asJQuery"]
}),
$globals.PjsSketchContainer.klass);

});
