define("amber-processingJS/Processing-Examples", ["amber/boot", "amber-processingJS/Processing-Core"], function($boot){
var smalltalk=$boot.vm,nil=$boot.nil,_st=$boot.asReceiver,globals=$boot.globals;
smalltalk.addPackage('Processing-Examples');
smalltalk.packages["Processing-Examples"].transport = {"type":"amd","amdNamespace":"amber-processingJS"};

smalltalk.addClass('ProcessingCircles', globals.PjsSketch, ['radius', 'x', 'y', 'nY', 'nX', 'roty', 'delay'], 'Processing-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3;
$1=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
_st($1)._override_with_("setup",(function(){
return smalltalk.withContext(function($ctx2) {
return self._setup();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["override:with:"]=1;
$2=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=2;
_st($2)._override_with_("draw",(function(){
return smalltalk.withContext(function($ctx2) {
return self._draw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
$ctx1.sendIdx["override:with:"]=2;
$3=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=3;
_st($3)._override_with_("mouseMoved",(function(){
return smalltalk.withContext(function($ctx2) {
return self._mouseMoved();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,3)})}));
_st(self._pjsInterface())._pjsSetup();
return self}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},globals.ProcessingCircles)})},
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a\x09self pjsInterface override: 'mouseMoved' with: [self mouseMoved].\x0a    \x0a    self pjsInterface pjsSetup.",
messageSends: ["override:with:", "pjsInterface", "setup", "draw", "mouseMoved", "pjsSetup"],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "delay",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@delay"];
return $1;
},
args: [],
source: "delay\x0a\x0a\x09^delay",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "delay:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@delay"]=aValue;
return self},
args: ["aValue"],
source: "delay: aValue\x0a\x0a\x09delay := aValue",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$5,$4,$8,$7,$6,$3,$1,$10,$13,$14,$12,$15,$11,$9,$17,$20,$21,$19,$18,$16,$22,$23,$24,$25,$26,$27,$28;
$2=self._radius();
$ctx1.sendIdx["radius"]=1;
$5=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
$4=_st($5)._processing();
$8=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=2;
$7=_st($8)._frameCount();
$6=_st($7).__slash((4));
$ctx1.sendIdx["/"]=1;
$3=_st($4)._sin_($6);
$1=_st($2).__plus($3);
$ctx1.sendIdx["+"]=1;
self._radius_($1);
$10=self._x();
$ctx1.sendIdx["x"]=1;
$13=self._nX();
$14=self._x();
$ctx1.sendIdx["x"]=2;
$12=_st($13).__minus($14);
$ctx1.sendIdx["-"]=1;
$15=self._delay();
$ctx1.sendIdx["delay"]=1;
$11=_st($12).__slash($15);
$ctx1.sendIdx["/"]=2;
$9=_st($10).__plus($11);
$ctx1.sendIdx["+"]=2;
self._x_($9);
$17=self._y();
$ctx1.sendIdx["y"]=1;
$20=self._nY();
$21=self._y();
$ctx1.sendIdx["y"]=2;
$19=_st($20).__minus($21);
$18=_st($19).__slash(self._delay());
$16=_st($17).__plus($18);
self._y_($16);
$22=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=3;
_st($22)._backgroundGray_((100));
$23=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=4;
_st($23)._fillValue1_value2_value3_((0),(121),(184));
$24=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=5;
_st($24)._strokeGray_((255));
$25=self._pjsInterface();
$26=self._x();
$27=self._y();
$28=self._radius();
$ctx1.sendIdx["radius"]=2;
_st($25)._ellipseX_y_width_height_($26,$27,$28,self._radius());
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.ProcessingCircles)})},
args: [],
source: "draw\x0a\x0a\x09self radius: (self radius + (self pjsInterface processing sin: (self pjsInterface frameCount / 4))).\x0a \x0a    self x: (self  x +((self nX - self x) / self delay)).\x0a    self y: (self y + ((self nY - self y) / self delay)).\x0a\x0a     self pjsInterface backgroundGray: 100.\x0a\x0a      self pjsInterface fillValue1: 0 value2: 121 value3: 184.\x0a\x0a      self pjsInterface strokeGray: 255.\x0a\x0a      self pjsInterface ellipseX: self x y: self y width: self radius height: self radius.",
messageSends: ["radius:", "+", "radius", "sin:", "processing", "pjsInterface", "/", "frameCount", "x:", "x", "-", "nX", "delay", "y:", "y", "nY", "backgroundGray:", "fillValue1:value2:value3:", "strokeGray:", "ellipseX:y:width:height:"],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._delay_((16));
self._radius_((50));
self._x_((0));
self._y_((0));
self._nX_((0));
self._nY_((0));
($ctx1.supercall = true, globals.ProcessingCircles.superclass.fn.prototype._initialize.apply(_st(self), []));
$ctx1.supercall = false;
return self}, function($ctx1) {$ctx1.fill(self,"initialize",{},globals.ProcessingCircles)})},
args: [],
source: "initialize\x0a\x09        \x0a    self delay: 16.\x0a\x09self radius: 50.0. \x0a\x09\x0a    self x: 0.\x0a    self y: 0.\x0a    self  nX: 0.\x0a    self  nY: 0.\x0a    \x0a    super initialize.",
messageSends: ["delay:", "radius:", "x:", "y:", "nX:", "nY:", "initialize"],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "mouseMoved",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
$1=_st($2)._mouseX();
self._nX_($1);
self._nY_(_st(self._pjsInterface())._mouseY());
return self}, function($ctx1) {$ctx1.fill(self,"mouseMoved",{},globals.ProcessingCircles)})},
args: [],
source: "mouseMoved\x0a\x0a\x09self nX: self pjsInterface mouseX.\x0a    self nY: self pjsInterface mouseY.",
messageSends: ["nX:", "mouseX", "pjsInterface", "nY:", "mouseY"],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "nX",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@nX"];
return $1;
},
args: [],
source: "nX\x0a\x0a\x09^nX",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "nX:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@nX"]=aValue;
return self},
args: ["aValue"],
source: "nX: aValue\x0a\x0a\x09nX := aValue",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "nY",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@nY"];
return $1;
},
args: [],
source: "nY\x0a\x0a\x09^nY",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "nY:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@nY"]=aValue;
return self},
args: ["aValue"],
source: "nY: aValue\x0a\x0a\x09nY := aValue",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "radius",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@radius"];
return $1;
},
args: [],
source: "radius\x0a\x0a\x09^radius",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "radius:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@radius"]=aValue;
return self},
args: ["aValue"],
source: "radius: aValue\x0a\x0a\x09radius := aValue",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "setup",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$5,$4,$3;
$1=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
_st($1)._strokeWeight_((10));
$2=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=2;
_st($2)._frameRate_((15));
$5=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=3;
$4=_st($5)._width();
$3=_st($4).__slash((2));
$ctx1.sendIdx["/"]=1;
self._x_($3);
self._y_(_st(_st(self._pjsInterface())._height()).__slash((2)));
self._nX_(self._x());
self._nY_(self._y());
return self}, function($ctx1) {$ctx1.fill(self,"setup",{},globals.ProcessingCircles)})},
args: [],
source: "setup\x0a\x0a  self pjsInterface strokeWeight: 10.\x0a  self pjsInterface frameRate: 15.\x0a self x: (self pjsInterface width / 2).\x0a  self y: (self pjsInterface height / 2).\x0a  self nX: self x.\x0a  self nY: self y.",
messageSends: ["strokeWeight:", "pjsInterface", "frameRate:", "x:", "/", "width", "y:", "height", "nX:", "x", "nY:", "y"],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "x",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@x"];
return $1;
},
args: [],
source: "x\x0a\x0a\x09^x",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "x:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@x"]=aValue;
return self},
args: ["aValue"],
source: "x: aValue\x0a\x0a\x09x := aValue",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "y",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@y"];
return $1;
},
args: [],
source: "y\x0a\x0a\x09^y",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);

smalltalk.addMethod(
smalltalk.method({
selector: "y:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
self["@y"]=aValue;
return self},
args: ["aValue"],
source: "y: aValue\x0a\x0a\x09y := aValue",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles);


smalltalk.addMethod(
smalltalk.method({
selector: "overrideDraw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.draw = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideDraw",{},globals.ProcessingCircles.klass)})},
args: [],
source: "overrideDraw\x0a            < processing.draw = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._overrideSetup();
self._overrideDraw();
self._overrideMouseMoved();
return self}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},globals.ProcessingCircles.klass)})},
args: [],
source: "overrideFunctions\x0a\x0a\x09 self overrideSetup.\x0a\x09 self overrideDraw.\x0a\x09 self overrideMouseMoved.",
messageSends: ["overrideSetup", "overrideDraw", "overrideMouseMoved"],
referencedClasses: []
}),
globals.ProcessingCircles.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideMouseMoved",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.mouseMoved = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideMouseMoved",{},globals.ProcessingCircles.klass)})},
args: [],
source: "overrideMouseMoved\x0a                  < processing.mouseMoved = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideSetup",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.setup = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideSetup",{},globals.ProcessingCircles.klass)})},
args: [],
source: "overrideSetup\x0a             < processing.setup = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingCircles.klass);


smalltalk.addClass('ProcessingClock', globals.PjsSketch, ['centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
_st($1)._override_with_("setup",(function(){
return smalltalk.withContext(function($ctx2) {
return self._setup();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["override:with:"]=1;
$2=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=2;
_st($2)._override_with_("draw",(function(){
return smalltalk.withContext(function($ctx2) {
return self._draw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(self._pjsInterface())._pjsSetup();
return self}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},globals.ProcessingClock)})},
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a    \x0a    self pjsInterface pjsSetup.",
messageSends: ["override:with:", "pjsInterface", "setup", "draw", "pjsSetup"],
referencedClasses: []
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'not yet classified',
fn: function (){
var self=this;
var now,hoursPosition,minutesPosition,secondsPosition;
function $Date(){return globals.Date||(typeof Date=="undefined"?nil:Date)}
return smalltalk.withContext(function($ctx1) { 
var $3,$4,$2,$1,$7,$8,$6,$5;
_st(self._pjsInterface())._backgroundGray_((224));
now=_st($Date())._new();
$3=_st(_st(now)._hours()).__backslash_backslash((12));
$4=_st(now)._minutes();
$ctx1.sendIdx["minutes"]=1;
$2=_st($3).__plus($4);
$ctx1.sendIdx["+"]=1;
$1=_st($2).__slash((60));
$ctx1.sendIdx["/"]=2;
hoursPosition=_st($1).__slash((12));
$ctx1.sendIdx["/"]=1;
self._drawArm_lengthScale_weight_(hoursPosition,(0.5),(5));
$ctx1.sendIdx["drawArm:lengthScale:weight:"]=1;
$7=_st(now)._minutes();
$8=_st(now)._seconds();
$ctx1.sendIdx["seconds"]=1;
$6=_st($7).__plus($8);
$5=_st($6).__slash((60));
$ctx1.sendIdx["/"]=4;
minutesPosition=_st($5).__slash((60));
$ctx1.sendIdx["/"]=3;
self._drawArm_lengthScale_weight_(minutesPosition,(0.8),(3));
$ctx1.sendIdx["drawArm:lengthScale:weight:"]=2;
secondsPosition=_st(_st(now)._seconds()).__slash((60));
self._drawArm_lengthScale_weight_(secondsPosition,(0.9),(1));
return self}, function($ctx1) {$ctx1.fill(self,"draw",{now:now,hoursPosition:hoursPosition,minutesPosition:minutesPosition,secondsPosition:secondsPosition},globals.ProcessingClock)})},
args: [],
source: "draw\x0a\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  \x0a  self pjsInterface backgroundGray: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := now hours \x5c\x5c 12 + now minutes / 60 / 12.\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := now minutes + now seconds / 60 / 60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.",
messageSends: ["backgroundGray:", "pjsInterface", "new", "/", "+", "\x5c\x5c", "hours", "minutes", "drawArm:lengthScale:weight:", "seconds"],
referencedClasses: ["Date"]
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
protocol: 'not yet classified',
fn: function (aPosition,aLengthScale,aWeight){
var self=this;
var myDX,myDY;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$7,$8,$6,$5,$4,$3,$9,$13,$12,$11,$10;
$1=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
_st($1)._strokeWeight_(aWeight);
$2=self["@centerX"];
$7=_st(aPosition).__star((2));
$ctx1.sendIdx["*"]=4;
$8=_st($Math())._PI();
$ctx1.sendIdx["PI"]=1;
$6=_st($7).__star($8);
$ctx1.sendIdx["*"]=3;
$5=_st($Math())._sin_($6);
$4=_st($5).__star(aLengthScale);
$ctx1.sendIdx["*"]=2;
$3=_st($4).__star(self["@maxArmLength"]);
$ctx1.sendIdx["*"]=1;
myDX=_st($2).__plus($3);
$9=self["@centerY"];
$13=_st(_st(aPosition).__star((2))).__star(_st($Math())._PI());
$ctx1.sendIdx["*"]=7;
$12=_st($Math())._cos_($13);
$11=_st($12).__star(aLengthScale);
$ctx1.sendIdx["*"]=6;
$10=_st($11).__star(self["@maxArmLength"]);
$ctx1.sendIdx["*"]=5;
myDY=_st($9).__minus($10);
_st(self._pjsInterface())._lineX1_y1_x2_y2_(self["@centerX"],self["@centerY"],myDX,myDY);
return self}, function($ctx1) {$ctx1.fill(self,"drawArm:lengthScale:weight:",{aPosition:aPosition,aLengthScale:aLengthScale,aWeight:aWeight,myDX:myDX,myDY:myDY},globals.ProcessingClock)})},
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a\x09| myDX myDY |\x0a\x09self  pjsInterface strokeWeight: aWeight.\x0a\x0a\x09myDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x09myDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a            \x0a\x09self pjsInterface lineX1: centerX  y1: centerY x2: myDX y2: myDY",
messageSends: ["strokeWeight:", "pjsInterface", "+", "*", "sin:", "PI", "-", "cos:", "lineX1:y1:x2:y2:"],
referencedClasses: ["Math"]
}),
globals.ProcessingClock);

smalltalk.addMethod(
smalltalk.method({
selector: "setup",
protocol: 'not yet classified',
fn: function (){
var self=this;
function $Math(){return globals.Math||(typeof Math=="undefined"?nil:Math)}
return smalltalk.withContext(function($ctx1) { 
var $2,$1;
$2=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
$1=_st($2)._width();
self["@centerX"]=_st($1).__slash((2));
$ctx1.sendIdx["/"]=1;
self["@centerY"]=_st(_st(self._pjsInterface())._height()).__slash((2));
self["@maxArmLength"]=_st($Math())._min_or_(self["@centerX"],self["@centerY"]);
return self}, function($ctx1) {$ctx1.fill(self,"setup",{},globals.ProcessingClock)})},
args: [],
source: "setup\x0a\x0a   centerX  := self pjsInterface width / 2.\x0a\x09centerY := self pjsInterface height / 2.\x0a\x09maxArmLength := Math min: centerX or: centerY.",
messageSends: ["/", "width", "pjsInterface", "height", "min:or:"],
referencedClasses: ["Math"]
}),
globals.ProcessingClock);


smalltalk.addMethod(
smalltalk.method({
selector: "overrideDraw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.draw = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideDraw",{},globals.ProcessingClock.klass)})},
args: [],
source: "overrideDraw\x0a            < processing.draw = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingClock.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._overrideSetup();
self._overrideDraw();
return self}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},globals.ProcessingClock.klass)})},
args: [],
source: "overrideFunctions\x0a\x0a\x09 self overrideSetup.\x0a\x09 self overrideDraw.",
messageSends: ["overrideSetup", "overrideDraw"],
referencedClasses: []
}),
globals.ProcessingClock.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideSetup",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.setup = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideSetup",{},globals.ProcessingClock.klass)})},
args: [],
source: "overrideSetup\x0a             < processing.setup = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingClock.klass);


smalltalk.addClass('ProcessingVector', globals.PjsSketch, ['v1', 'v2'], 'Processing-Examples');
smalltalk.addMethod(
smalltalk.method({
selector: "activateFunctions",
protocol: 'initialization',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2;
$1=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
_st($1)._override_with_("setup",(function(){
return smalltalk.withContext(function($ctx2) {
return self._setup();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)})}));
$ctx1.sendIdx["override:with:"]=1;
$2=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=2;
_st($2)._override_with_("draw",(function(){
return smalltalk.withContext(function($ctx2) {
return self._draw();
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,2)})}));
_st(self._pjsInterface())._pjsSetup();
return self}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},globals.ProcessingVector)})},
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a\x0a    self pjsInterface pjsSetup.",
messageSends: ["override:with:", "pjsInterface", "setup", "draw", "pjsSetup"],
referencedClasses: []
}),
globals.ProcessingVector);

smalltalk.addMethod(
smalltalk.method({
selector: "draw",
protocol: 'drawing',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
var $1,$2,$3,$4,$5,$6,$7;
$1=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=1;
$2=_st(self["@v1"])._x();
$ctx1.sendIdx["x"]=1;
$3=_st(self["@v1"])._y();
$ctx1.sendIdx["y"]=1;
_st($1)._ellipseX_y_width_height_($2,$3,(12),(12));
$ctx1.sendIdx["ellipseX:y:width:height:"]=1;
$4=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=2;
$5=_st(self["@v2"])._x();
$ctx1.sendIdx["x"]=2;
$6=_st(self["@v2"])._y();
$ctx1.sendIdx["y"]=2;
_st($4)._ellipseX_y_width_height_($5,$6,(12),(12));
$ctx1.sendIdx["ellipseX:y:width:height:"]=2;
_st(self["@v1"])._multVector_(self["@v2"]);
$7=self._pjsInterface();
$ctx1.sendIdx["pjsInterface"]=3;
_st($7)._ellipseX_y_width_height_(_st(self["@v1"])._x(),_st(self["@v1"])._y(),(24),(24));
_st(self._pjsInterface())._noLoop();
return self}, function($ctx1) {$ctx1.fill(self,"draw",{},globals.ProcessingVector)})},
args: [],
source: "draw\x0a\x0a  self pjsInterface ellipseX: v1 x y: v1 y width: 12 height: 12.\x0a  self pjsInterface ellipseX: v2 x y: v2 y width: 12 height: 12.\x0a  v1 multVector: v2.\x0a  self pjsInterface ellipseX: v1 x y: v1 y width: 24 height: 24.\x0a  \x0a  self pjsInterface  noLoop.",
messageSends: ["ellipseX:y:width:height:", "pjsInterface", "x", "y", "multVector:", "noLoop"],
referencedClasses: []
}),
globals.ProcessingVector);

smalltalk.addMethod(
smalltalk.method({
selector: "setup",
protocol: 'initialization',
fn: function (){
var self=this;
function $PjsVector(){return globals.PjsVector||(typeof PjsVector=="undefined"?nil:PjsVector)}
return smalltalk.withContext(function($ctx1) { 
_st(self._pjsInterface())._smooth();
self["@v1"]=_st($PjsVector())._newX_y_z_((5),(10),(0));
$ctx1.sendIdx["newX:y:z:"]=1;
self["@v2"]=_st($PjsVector())._newX_y_z_((15),(8),(0));
return self}, function($ctx1) {$ctx1.fill(self,"setup",{},globals.ProcessingVector)})},
args: [],
source: "setup\x0a\x0a  self pjsInterface  smooth.\x0a\x0a  v1 :=  PjsVector newX: 5.0 y: 10.0 z: 0.0.\x0a  v2 :=  PjsVector newX: 15.0 y: 8.0 z: 0.0.",
messageSends: ["smooth", "pjsInterface", "newX:y:z:"],
referencedClasses: ["PjsVector"]
}),
globals.ProcessingVector);

smalltalk.addMethod(
smalltalk.method({
selector: "v1",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@v1"];
return $1;
},
args: [],
source: "v1\x0a\x0a\x09^v1",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingVector);

smalltalk.addMethod(
smalltalk.method({
selector: "v2",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@v2"];
return $1;
},
args: [],
source: "v2\x0a\x0a\x09^v2",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingVector);


smalltalk.addMethod(
smalltalk.method({
selector: "overrideDraw",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.draw = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideDraw",{},globals.ProcessingVector.klass)})},
args: [],
source: "overrideDraw\x0a            < processing.draw = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingVector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
self._overrideSetup();
self._overrideDraw();
return self}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},globals.ProcessingVector.klass)})},
args: [],
source: "overrideFunctions\x0a\x0a\x09 self overrideSetup.\x0a\x09 self overrideDraw.",
messageSends: ["overrideSetup", "overrideDraw"],
referencedClasses: []
}),
globals.ProcessingVector.klass);

smalltalk.addMethod(
smalltalk.method({
selector: "overrideSetup",
protocol: 'not yet classified',
fn: function (){
var self=this;
return smalltalk.withContext(function($ctx1) { 
 processing.setup = function() {}; ;
return self}, function($ctx1) {$ctx1.fill(self,"overrideSetup",{},globals.ProcessingVector.klass)})},
args: [],
source: "overrideSetup\x0a             < processing.setup = function() {}; >",
messageSends: [],
referencedClasses: []
}),
globals.ProcessingVector.klass);

});
