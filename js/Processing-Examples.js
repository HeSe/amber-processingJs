smalltalk.addPackage('Processing-Examples', {});
smalltalk.addClass('ProcessingCircles', smalltalk.PjsSketch, ['radius', 'x', 'y', 'nY', 'nX', 'roty', 'delay'], 'Processing-Examples');
smalltalk.addMethod(
"_activateFunctions",
smalltalk.method({
selector: "activateFunctions",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["setup", function () {return smalltalk.send(self, "_setup", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["draw", function () {return smalltalk.send(self, "_draw", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["mouseMoved", function () {return smalltalk.send(self, "_mouseMoved", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_pjsSetup", []);
    return self;
},
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a\x09self pjsInterface override: 'mouseMoved' with: [self mouseMoved].\x0a    \x0a    self pjsInterface pjsSetup.",
messageSends: ["override:with:", "setup", "pjsInterface", "draw", "mouseMoved", "pjsSetup"],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_delay",
smalltalk.method({
selector: "delay",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@delay'];
},
args: [],
source: "delay\x0a\x0a\x09^delay",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_delay_",
smalltalk.method({
selector: "delay:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    self['@delay'] = aValue;
    return self;
},
args: ["aValue"],
source: "delay: aValue\x0a\x0a\x09delay := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_radius_", [smalltalk.send(smalltalk.send(self, "_radius", []), "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_processing", []), "_sin_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_frameCount", []), "__slash", [4])])])]);
    smalltalk.send(self, "_x_", [smalltalk.send(smalltalk.send(self, "_x", []), "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_nX", []), "__minus", [smalltalk.send(self, "_x", [])]), "__slash", [smalltalk.send(self, "_delay", [])])])]);
    smalltalk.send(self, "_y_", [smalltalk.send(smalltalk.send(self, "_y", []), "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_nY", []), "__minus", [smalltalk.send(self, "_y", [])]), "__slash", [smalltalk.send(self, "_delay", [])])])]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_backgroundGray_", [100]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_fillValue1_value2_value3_", [0, 121, 184]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_strokeGray_", [255]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_ellipseX_y_width_height_", [smalltalk.send(self, "_x", []), smalltalk.send(self, "_y", []), smalltalk.send(self, "_radius", []), smalltalk.send(self, "_radius", [])]);
    return self;
},
args: [],
source: "draw\x0a\x0a\x09self radius: (self radius + (self pjsInterface processing sin: (self pjsInterface frameCount / 4))).\x0a \x0a    self x: (self  x +((self nX - self x) / self delay)).\x0a    self y: (self y + ((self nY - self y) / self delay)).\x0a\x0a     self pjsInterface backgroundGray: 100.\x0a\x0a      self pjsInterface fillValue1: 0 value2: 121 value3: 184.\x0a\x0a      self pjsInterface strokeGray: 255.\x0a\x0a      self pjsInterface ellipseX: self x y: self y width: self radius height: self radius.",
messageSends: ["radius:", "+", "sin:", "/", "frameCount", "pjsInterface", "processing", "radius", "x:", "delay", "-", "x", "nX", "y:", "y", "nY", "backgroundGray:", "fillValue1:value2:value3:", "strokeGray:", "ellipseX:y:width:height:"],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_delay_", [16]);
    smalltalk.send(self, "_radius_", [50]);
    smalltalk.send(self, "_x_", [0]);
    smalltalk.send(self, "_y_", [0]);
    smalltalk.send(self, "_nX_", [0]);
    smalltalk.send(self, "_nY_", [0]);
    smalltalk.send(self, "_initialize", [], smalltalk.PjsSketch);
    return self;
},
args: [],
source: "initialize\x0a\x09        \x0a    self delay: 16.\x0a\x09self radius: 50.0. \x0a\x09\x0a    self x: 0.\x0a    self y: 0.\x0a    self  nX: 0.\x0a    self  nY: 0.\x0a    \x0a    super initialize.",
messageSends: ["delay:", "radius:", "x:", "y:", "nX:", "nY:", "initialize"],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_mouseMoved",
smalltalk.method({
selector: "mouseMoved",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_nX_", [smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_mouseX", [])]);
    smalltalk.send(self, "_nY_", [smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_mouseY", [])]);
    return self;
},
args: [],
source: "mouseMoved\x0a\x0a\x09self nX: self pjsInterface mouseX.\x0a    self nY: self pjsInterface mouseY.",
messageSends: ["nX:", "mouseX", "pjsInterface", "nY:", "mouseY"],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nX",
smalltalk.method({
selector: "nX",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@nX'];
},
args: [],
source: "nX\x0a\x0a\x09^nX",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nX_",
smalltalk.method({
selector: "nX:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    self['@nX'] = aValue;
    return self;
},
args: ["aValue"],
source: "nX: aValue\x0a\x0a\x09nX := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nY",
smalltalk.method({
selector: "nY",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@nY'];
},
args: [],
source: "nY\x0a\x0a\x09^nY",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nY_",
smalltalk.method({
selector: "nY:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    self['@nY'] = aValue;
    return self;
},
args: ["aValue"],
source: "nY: aValue\x0a\x0a\x09nY := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_radius",
smalltalk.method({
selector: "radius",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@radius'];
},
args: [],
source: "radius\x0a\x0a\x09^radius",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_radius_",
smalltalk.method({
selector: "radius:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    self['@radius'] = aValue;
    return self;
},
args: ["aValue"],
source: "radius: aValue\x0a\x0a\x09radius := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_setup",
smalltalk.method({
selector: "setup",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_strokeWeight_", [10]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_frameRate_", [15]);
    smalltalk.send(self, "_x_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_width", []), "__slash", [2])]);
    smalltalk.send(self, "_y_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_height", []), "__slash", [2])]);
    smalltalk.send(self, "_nX_", [smalltalk.send(self, "_x", [])]);
    smalltalk.send(self, "_nY_", [smalltalk.send(self, "_y", [])]);
    return self;
},
args: [],
source: "setup\x0a\x0a  self pjsInterface strokeWeight: 10.\x0a  self pjsInterface frameRate: 15.\x0a self x: (self pjsInterface width / 2).\x0a  self y: (self pjsInterface height / 2).\x0a  self nX: self x.\x0a  self nY: self y.",
messageSends: ["strokeWeight:", "pjsInterface", "frameRate:", "x:", "/", "width", "y:", "height", "nX:", "x", "nY:", "y"],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@x'];
},
args: [],
source: "x\x0a\x0a\x09^x ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    self['@x'] = aValue;
    return self;
},
args: ["aValue"],
source: "x: aValue\x0a\x0a\x09x := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@y'];
},
args: [],
source: "y\x0a\x0a\x09^y",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    self['@y'] = aValue;
    return self;
},
args: ["aValue"],
source: "y: aValue\x0a\x0a\x09y := aValue",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles);


smalltalk.addMethod(
"_overrideFunctions",
smalltalk.method({
selector: "overrideFunctions",
category: 'not yet classified',
fn: function () {
    var self = this;
    processing.setup = function () {};
    processing.draw = function () {};
    processing.mouseMoved = function () {};
    return self;
},
args: [],
source: "overrideFunctions\x0a\x0a\x09 < processing.setup = function() {}; >.\x0a\x09 < processing.draw = function() {}; >.\x0a      < processing.mouseMoved = function() {}; >.\x0a      ",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingCircles.klass);


smalltalk.addClass('ProcessingClock', smalltalk.PjsSketch, ['centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
"_activateFunctions",
smalltalk.method({
selector: "activateFunctions",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["setup", function () {return smalltalk.send(self, "_setup", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["draw", function () {return smalltalk.send(self, "_draw", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_pjsSetup", []);
    return self;
},
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'setup' with: [self setup].\x0a\x09self pjsInterface override: 'draw' with: [self draw].\x0a    \x0a    self pjsInterface pjsSetup.",
messageSends: ["override:with:", "setup", "pjsInterface", "draw", "pjsSetup"],
referencedClasses: []
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'not yet classified',
fn: function () {
    var self = this;
    var now;
    var hoursPosition;
    var minutesPosition;
    var secondsPosition;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_backgroundGray_", [224]);
    now = smalltalk.send(smalltalk.Date || Date, "_new", []);
    hoursPosition = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(now, "_hours", []), "_\\\\", [12]), "__plus", [smalltalk.send(now, "_minutes", [])]), "__slash", [60]), "__slash", [12]);
    smalltalk.send(self, "_drawArm_lengthScale_weight_", [hoursPosition, 0.5, 5]);
    minutesPosition = smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.send(now, "_minutes", []), "__plus", [smalltalk.send(now, "_seconds", [])]), "__slash", [60]), "__slash", [60]);
    smalltalk.send(self, "_drawArm_lengthScale_weight_", [minutesPosition, 0.8, 3]);
    secondsPosition = smalltalk.send(smalltalk.send(now, "_seconds", []), "__slash", [60]);
    smalltalk.send(self, "_drawArm_lengthScale_weight_", [secondsPosition, 0.9, 1]);
    return self;
},
args: [],
source: "draw\x0a\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  \x0a  self pjsInterface backgroundGray: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := now hours \x5c\x5c 12 + now minutes / 60 / 12.\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := now minutes + now seconds / 60 / 60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.\x0a",
messageSends: ["backgroundGray:", "pjsInterface", "new", "/", "+", "minutes", "\x5c\x5c\x5c\x5c", "hours", "drawArm:lengthScale:weight:", "seconds"],
referencedClasses: ["Date"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_drawArm_lengthScale_weight_",
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
category: 'not yet classified',
fn: function (aPosition, aLengthScale, aWeight) {
    var self = this;
    var myDX;
    var myDY;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_strokeWeight_", [aWeight]);
    myDX = smalltalk.send(self['@centerX'], "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_sin_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    myDY = smalltalk.send(self['@centerY'], "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_cos_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_lineX1_y1_x2_y2_", [self['@centerX'], self['@centerY'], myDX, myDY]);
    return self;
},
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a\x09| myDX myDY |\x0a\x09self  pjsInterface strokeWeight: aWeight.\x0a\x0a\x09myDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x09myDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a            \x0a\x09self pjsInterface lineX1: centerX  y1: centerY x2: myDX y2: myDY \x0a",
messageSends: ["strokeWeight:", "pjsInterface", "+", "*", "sin:", "PI", "-", "cos:", "lineX1:y1:x2:y2:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_setup",
smalltalk.method({
selector: "setup",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@centerX'] = smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_width", []), "__slash", [2]);
    self['@centerY'] = smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_height", []), "__slash", [2]);
    self['@maxArmLength'] = smalltalk.send(smalltalk.Math || Math, "_min_or_", [self['@centerX'], self['@centerY']]);
    return self;
},
args: [],
source: "setup\x0a\x0a   centerX  := self pjsInterface width / 2.\x0a\x09centerY := self pjsInterface height / 2.\x0a\x09maxArmLength := Math min: centerX or: centerY.",
messageSends: ["/", "width", "pjsInterface", "height", "min:or:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);


smalltalk.addMethod(
"_overrideFunctions",
smalltalk.method({
selector: "overrideFunctions",
category: 'not yet classified',
fn: function () {
    var self = this;
    processing.setup = function () {};
    processing.draw = function () {};
    return self;
},
args: [],
source: "overrideFunctions\x0a\x0a\x09 < processing.setup = function() {}; >.\x0a\x09 < processing.draw = function() {}; >.",
messageSends: [],
referencedClasses: []
}),
smalltalk.ProcessingClock.klass);


