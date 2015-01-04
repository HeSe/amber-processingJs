define("amber-processingJs/Processing-Examples", ["amber/boot", "amber-processingJs/Processing-Core"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Processing-Examples');
$core.packages["Processing-Examples"].transport = {"type":"amd","amdNamespace":"amber-processingJs"};

$core.addClass('ProcessingCircles', $globals.PjsSketch, ['radius', 'x', 'y', 'nY', 'nX', 'roty', 'delay'], 'Processing-Examples');
$core.addMethod(
$core.method({
selector: "activateFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3;
$1=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$recv($1)._override_with_("setup",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["override:with:"]=1;
//>>excludeEnd("ctx");
$2=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=2;
//>>excludeEnd("ctx");
$recv($2)._override_with_("draw",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._draw();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["override:with:"]=2;
//>>excludeEnd("ctx");
$3=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=3;
//>>excludeEnd("ctx");
$recv($3)._override_with_("mouseMoved",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._mouseMoved();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)});
//>>excludeEnd("ctx");
}));
$recv(self._pjsInterface())._pjsSetup();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},$globals.ProcessingCircles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a\x09self pjsInterface override: 'mouseMoved' with: [self mouseMoved].\x0a    \x0a    self pjsInterface pjsSetup.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["override:with:", "pjsInterface", "setup", "draw", "mouseMoved", "pjsSetup"]
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "delay",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@delay"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "delay\x0a\x0a\x09^delay",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "delay:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@delay"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "delay: aValue\x0a\x0a\x09delay := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$5,$4,$8,$7,$6,$3,$1,$10,$13,$14,$12,$15,$11,$9,$17,$20,$21,$19,$18,$16,$22,$23,$24,$25,$26,$27,$28;
$2=self._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=1;
//>>excludeEnd("ctx");
$5=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$4=$recv($5)._processing();
$8=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=2;
//>>excludeEnd("ctx");
$7=$recv($8)._frameCount();
$6=$recv($7).__slash((4));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
$3=$recv($4)._sin_($6);
$1=$recv($2).__plus($3);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
self._radius_($1);
$10=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$13=self._nX();
$14=self._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$12=$recv($13).__minus($14);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["-"]=1;
//>>excludeEnd("ctx");
$15=self._delay();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["delay"]=1;
//>>excludeEnd("ctx");
$11=$recv($12).__slash($15);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$9=$recv($10).__plus($11);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=2;
//>>excludeEnd("ctx");
self._x_($9);
$17=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$20=self._nY();
$21=self._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$19=$recv($20).__minus($21);
$18=$recv($19).__slash(self._delay());
$16=$recv($17).__plus($18);
self._y_($16);
$22=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=3;
//>>excludeEnd("ctx");
$recv($22)._backgroundGray_((100));
$23=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=4;
//>>excludeEnd("ctx");
$recv($23)._fillValue1_value2_value3_((0),(121),(184));
$24=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=5;
//>>excludeEnd("ctx");
$recv($24)._strokeGray_((255));
$25=self._pjsInterface();
$26=self._x();
$27=self._y();
$28=self._radius();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["radius"]=2;
//>>excludeEnd("ctx");
$recv($25)._ellipseX_y_width_height_($26,$27,$28,self._radius());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.ProcessingCircles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x0a\x09self radius: (self radius + (self pjsInterface processing sin: (self pjsInterface frameCount / 4))).\x0a \x0a    self x: (self  x +((self nX - self x) / self delay)).\x0a    self y: (self y + ((self nY - self y) / self delay)).\x0a\x0a     self pjsInterface backgroundGray: 100.\x0a\x0a      self pjsInterface fillValue1: 0 value2: 121 value3: 184.\x0a\x0a      self pjsInterface strokeGray: 255.\x0a\x0a      self pjsInterface ellipseX: self x y: self y width: self radius height: self radius.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["radius:", "+", "radius", "sin:", "processing", "pjsInterface", "/", "frameCount", "x:", "x", "-", "nX", "delay", "y:", "y", "nY", "backgroundGray:", "fillValue1:value2:value3:", "strokeGray:", "ellipseX:y:width:height:"]
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._delay_((16));
self._radius_((50));
self._x_((0));
self._y_((0));
self._nX_((0));
self._nY_((0));
(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.ProcessingCircles.superclass.fn.prototype._initialize.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.ProcessingCircles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x09        \x0a    self delay: 16.\x0a\x09self radius: 50.0. \x0a\x09\x0a    self x: 0.\x0a    self y: 0.\x0a    self  nX: 0.\x0a    self  nY: 0.\x0a    \x0a    super initialize.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["delay:", "radius:", "x:", "y:", "nX:", "nY:", "initialize"]
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "mouseMoved",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._mouseX();
self._nX_($1);
self._nY_($recv(self._pjsInterface())._mouseY());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMoved",{},$globals.ProcessingCircles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseMoved\x0a\x0a\x09self nX: self pjsInterface mouseX.\x0a    self nY: self pjsInterface mouseY.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["nX:", "mouseX", "pjsInterface", "nY:", "mouseY"]
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "nX",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@nX"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nX\x0a\x0a\x09^nX",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "nX:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@nX"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "nX: aValue\x0a\x0a\x09nX := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "nY",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@nY"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "nY\x0a\x0a\x09^nY",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "nY:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@nY"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "nY: aValue\x0a\x0a\x09nY := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "radius",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@radius"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "radius\x0a\x0a\x09^radius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "radius:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@radius"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "radius: aValue\x0a\x0a\x09radius := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "setup",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$5,$4,$3;
$1=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$recv($1)._strokeWeight_((10));
$2=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=2;
//>>excludeEnd("ctx");
$recv($2)._frameRate_((15));
$5=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=3;
//>>excludeEnd("ctx");
$4=$recv($5)._width();
$3=$recv($4).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
self._x_($3);
self._y_($recv($recv(self._pjsInterface())._height()).__slash((2)));
self._nX_(self._x());
self._nY_(self._y());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.ProcessingCircles)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x0a  self pjsInterface strokeWeight: 10.\x0a  self pjsInterface frameRate: 15.\x0a self x: (self pjsInterface width / 2).\x0a  self y: (self pjsInterface height / 2).\x0a  self nX: self x.\x0a  self nY: self y.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeWeight:", "pjsInterface", "frameRate:", "x:", "/", "width", "y:", "height", "nX:", "x", "nY:", "y"]
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "x",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@x"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x0a\x09^x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "x:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@x"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "x: aValue\x0a\x0a\x09x := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "y",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@y"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x0a\x09^y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);

$core.addMethod(
$core.method({
selector: "y:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@y"]=aValue;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "y: aValue\x0a\x0a\x09y := aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles);


$core.addMethod(
$core.method({
selector: "overrideDraw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.draw = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideDraw",{},$globals.ProcessingCircles.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideDraw\x0a            < processing.draw = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles.klass);

$core.addMethod(
$core.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._overrideSetup();
self._overrideDraw();
self._overrideMouseMoved();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},$globals.ProcessingCircles.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideFunctions\x0a\x0a\x09 self overrideSetup.\x0a\x09 self overrideDraw.\x0a\x09 self overrideMouseMoved.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["overrideSetup", "overrideDraw", "overrideMouseMoved"]
}),
$globals.ProcessingCircles.klass);

$core.addMethod(
$core.method({
selector: "overrideMouseMoved",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.mouseMoved = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideMouseMoved",{},$globals.ProcessingCircles.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideMouseMoved\x0a                  < processing.mouseMoved = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles.klass);

$core.addMethod(
$core.method({
selector: "overrideSetup",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.setup = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideSetup",{},$globals.ProcessingCircles.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideSetup\x0a             < processing.setup = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingCircles.klass);


$core.addClass('ProcessingClock', $globals.PjsSketch, ['centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
$core.addMethod(
$core.method({
selector: "activateFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$recv($1)._override_with_("setup",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["override:with:"]=1;
//>>excludeEnd("ctx");
$2=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=2;
//>>excludeEnd("ctx");
$recv($2)._override_with_("draw",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._draw();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self._pjsInterface())._pjsSetup();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a    \x0a    self pjsInterface pjsSetup.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["override:with:", "pjsInterface", "setup", "draw", "pjsSetup"]
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
var now,hoursPosition,minutesPosition,secondsPosition;
function $Date(){return $globals.Date||(typeof Date=="undefined"?nil:Date)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $3,$2,$1,$6,$5,$4;
$recv(self._pjsInterface())._backgroundGray_((224));
now=$recv($Date())._new();
$3=$recv(now)._minutes();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["minutes"]=1;
//>>excludeEnd("ctx");
$2=$recv($3).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=2;
//>>excludeEnd("ctx");
$1=$recv($2).__plus($recv($recv(now)._hours()).__backslash_backslash((12)));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["+"]=1;
//>>excludeEnd("ctx");
hoursPosition=$recv($1).__slash((12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
self._drawArm_lengthScale_weight_(hoursPosition,(0.5),(5));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawArm:lengthScale:weight:"]=1;
//>>excludeEnd("ctx");
$6=$recv(now)._seconds();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["seconds"]=1;
//>>excludeEnd("ctx");
$5=$recv($6).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=4;
//>>excludeEnd("ctx");
$4=$recv($5).__plus($recv(now)._minutes());
minutesPosition=$recv($4).__slash((60));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=3;
//>>excludeEnd("ctx");
self._drawArm_lengthScale_weight_(minutesPosition,(0.8),(3));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["drawArm:lengthScale:weight:"]=2;
//>>excludeEnd("ctx");
secondsPosition=$recv($recv(now)._seconds()).__slash((60));
self._drawArm_lengthScale_weight_(secondsPosition,(0.9),(1));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{now:now,hoursPosition:hoursPosition,minutesPosition:minutesPosition,secondsPosition:secondsPosition},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  \x0a  self pjsInterface backgroundGray: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := now minutes / 60 + (now hours \x5c\x5c 12)  / 12.\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := now seconds / 60 + now minutes / 60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.",
referencedClasses: ["Date"],
//>>excludeEnd("ide");
messageSends: ["backgroundGray:", "pjsInterface", "new", "/", "+", "minutes", "\x5c\x5c", "hours", "drawArm:lengthScale:weight:", "seconds"]
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "drawArm:lengthScale:weight:",
protocol: 'not yet classified',
fn: function (aPosition,aLengthScale,aWeight){
var self=this;
var myDX,myDY;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$7,$8,$6,$5,$4,$3,$9,$13,$12,$11,$10;
$1=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$recv($1)._strokeWeight_(aWeight);
$2=self["@centerX"];
$7=$recv(aPosition).__star((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=4;
//>>excludeEnd("ctx");
$8=$recv($Math())._PI();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["PI"]=1;
//>>excludeEnd("ctx");
$6=$recv($7).__star($8);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=3;
//>>excludeEnd("ctx");
$5=$recv($Math())._sin_($6);
$4=$recv($5).__star(aLengthScale);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=2;
//>>excludeEnd("ctx");
$3=$recv($4).__star(self["@maxArmLength"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=1;
//>>excludeEnd("ctx");
myDX=$recv($2).__plus($3);
$9=self["@centerY"];
$13=$recv($recv(aPosition).__star((2))).__star($recv($Math())._PI());
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=7;
//>>excludeEnd("ctx");
$12=$recv($Math())._cos_($13);
$11=$recv($12).__star(aLengthScale);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=6;
//>>excludeEnd("ctx");
$10=$recv($11).__star(self["@maxArmLength"]);
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["*"]=5;
//>>excludeEnd("ctx");
myDY=$recv($9).__minus($10);
$recv(self._pjsInterface())._lineX1_y1_x2_y2_(self["@centerX"],self["@centerY"],myDX,myDY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"drawArm:lengthScale:weight:",{aPosition:aPosition,aLengthScale:aLengthScale,aWeight:aWeight,myDX:myDX,myDY:myDY},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a\x09| myDX myDY |\x0a\x09self  pjsInterface strokeWeight: aWeight.\x0a\x0a\x09myDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x09myDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a            \x0a\x09self pjsInterface lineX1: centerX  y1: centerY x2: myDX y2: myDY",
referencedClasses: ["Math"],
//>>excludeEnd("ide");
messageSends: ["strokeWeight:", "pjsInterface", "+", "*", "sin:", "PI", "-", "cos:", "lineX1:y1:x2:y2:"]
}),
$globals.ProcessingClock);

$core.addMethod(
$core.method({
selector: "setup",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Math(){return $globals.Math||(typeof Math=="undefined"?nil:Math)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$1=$recv($2)._width();
self["@centerX"]=$recv($1).__slash((2));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["/"]=1;
//>>excludeEnd("ctx");
self["@centerY"]=$recv($recv(self._pjsInterface())._height()).__slash((2));
self["@maxArmLength"]=$recv($Math())._min_or_(self["@centerX"],self["@centerY"]);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.ProcessingClock)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x0a   centerX  := self pjsInterface width / 2.\x0a\x09centerY := self pjsInterface height / 2.\x0a\x09maxArmLength := Math min: centerX or: centerY.",
referencedClasses: ["Math"],
//>>excludeEnd("ide");
messageSends: ["/", "width", "pjsInterface", "height", "min:or:"]
}),
$globals.ProcessingClock);


$core.addMethod(
$core.method({
selector: "overrideDraw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.draw = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideDraw",{},$globals.ProcessingClock.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideDraw\x0a            < processing.draw = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingClock.klass);

$core.addMethod(
$core.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._overrideSetup();
self._overrideDraw();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},$globals.ProcessingClock.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideFunctions\x0a\x0a\x09 self overrideSetup.\x0a\x09 self overrideDraw.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["overrideSetup", "overrideDraw"]
}),
$globals.ProcessingClock.klass);

$core.addMethod(
$core.method({
selector: "overrideSetup",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.setup = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideSetup",{},$globals.ProcessingClock.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideSetup\x0a             < processing.setup = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingClock.klass);


$core.addClass('ProcessingVector', $globals.PjsSketch, ['v1', 'v2'], 'Processing-Examples');
$core.addMethod(
$core.method({
selector: "activateFunctions",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$recv($1)._override_with_("setup",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._setup();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["override:with:"]=1;
//>>excludeEnd("ctx");
$2=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=2;
//>>excludeEnd("ctx");
$recv($2)._override_with_("draw",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._draw();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)});
//>>excludeEnd("ctx");
}));
$recv(self._pjsInterface())._pjsSetup();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},$globals.ProcessingVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a\x0a    self pjsInterface pjsSetup.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["override:with:", "pjsInterface", "setup", "draw", "pjsSetup"]
}),
$globals.ProcessingVector);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2,$3,$4,$5,$6,$7;
$1=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=1;
//>>excludeEnd("ctx");
$2=$recv(self["@v1"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=1;
//>>excludeEnd("ctx");
$3=$recv(self["@v1"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=1;
//>>excludeEnd("ctx");
$recv($1)._ellipseX_y_width_height_($2,$3,(12),(12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ellipseX:y:width:height:"]=1;
//>>excludeEnd("ctx");
$4=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=2;
//>>excludeEnd("ctx");
$5=$recv(self["@v2"])._x();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["x"]=2;
//>>excludeEnd("ctx");
$6=$recv(self["@v2"])._y();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["y"]=2;
//>>excludeEnd("ctx");
$recv($4)._ellipseX_y_width_height_($5,$6,(12),(12));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["ellipseX:y:width:height:"]=2;
//>>excludeEnd("ctx");
$recv(self["@v1"])._multVector_(self["@v2"]);
$7=self._pjsInterface();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsInterface"]=3;
//>>excludeEnd("ctx");
$recv($7)._ellipseX_y_width_height_($recv(self["@v1"])._x(),$recv(self["@v1"])._y(),(24),(24));
$recv(self._pjsInterface())._noLoop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.ProcessingVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a\x0a  self pjsInterface ellipseX: v1 x y: v1 y width: 12 height: 12.\x0a  self pjsInterface ellipseX: v2 x y: v2 y width: 12 height: 12.\x0a  v1 multVector: v2.\x0a  self pjsInterface ellipseX: v1 x y: v1 y width: 24 height: 24.\x0a  \x0a  self pjsInterface  noLoop.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ellipseX:y:width:height:", "pjsInterface", "x", "y", "multVector:", "noLoop"]
}),
$globals.ProcessingVector);

$core.addMethod(
$core.method({
selector: "setup",
protocol: 'initialization',
fn: function (){
var self=this;
function $PjsVector(){return $globals.PjsVector||(typeof PjsVector=="undefined"?nil:PjsVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._pjsInterface())._smooth();
self["@v1"]=$recv($PjsVector())._newX_y_z_((5),(10),(0));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["newX:y:z:"]=1;
//>>excludeEnd("ctx");
self["@v2"]=$recv($PjsVector())._newX_y_z_((15),(8),(0));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setup",{},$globals.ProcessingVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setup\x0a\x0a  self pjsInterface  smooth.\x0a\x0a  v1 :=  PjsVector newX: 5.0 y: 10.0 z: 0.0.\x0a  v2 :=  PjsVector newX: 15.0 y: 8.0 z: 0.0.",
referencedClasses: ["PjsVector"],
//>>excludeEnd("ide");
messageSends: ["smooth", "pjsInterface", "newX:y:z:"]
}),
$globals.ProcessingVector);

$core.addMethod(
$core.method({
selector: "v1",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@v1"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "v1\x0a\x0a\x09^v1",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingVector);

$core.addMethod(
$core.method({
selector: "v2",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@v2"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "v2\x0a\x0a\x09^v2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingVector);


$core.addMethod(
$core.method({
selector: "overrideDraw",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.draw = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideDraw",{},$globals.ProcessingVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideDraw\x0a            < processing.draw = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingVector.klass);

$core.addMethod(
$core.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._overrideSetup();
self._overrideDraw();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},$globals.ProcessingVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideFunctions\x0a\x0a\x09 self overrideSetup.\x0a\x09 self overrideDraw.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["overrideSetup", "overrideDraw"]
}),
$globals.ProcessingVector.klass);

$core.addMethod(
$core.method({
selector: "overrideSetup",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.setup = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideSetup",{},$globals.ProcessingVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideSetup\x0a             < processing.setup = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.ProcessingVector.klass);

});
