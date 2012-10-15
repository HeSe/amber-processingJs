smalltalk.addPackage('Processing-Examples', {});
smalltalk.addClass('ProcessingCircles', smalltalk.PjsSketch, ['radius', 'x', 'y', 'nY', 'nX', 'roty', 'delay'], 'Processing-Examples');
smalltalk.addMethod(
"_activateFunctions",
smalltalk.method({
selector: "activateFunctions",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["setup", function () {return smalltalk.send(self, "_setup", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["draw", function () {return smalltalk.send(self, "_draw", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["mouseMoved", function () {return smalltalk.send(self, "_mouseMoved", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_pjsSetup", []);
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_delay",
smalltalk.method({
selector: "delay",
fn: function () {
    var self = this;
    return self['@delay'];
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_delay_",
smalltalk.method({
selector: "delay:",
fn: function (aValue) {
    var self = this;
    self['@delay'] = aValue;
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
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
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
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
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_mouseMoved",
smalltalk.method({
selector: "mouseMoved",
fn: function () {
    var self = this;
    smalltalk.send(self, "_nX_", [smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_mouseX", [])]);
    smalltalk.send(self, "_nY_", [smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_mouseY", [])]);
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nX",
smalltalk.method({
selector: "nX",
fn: function () {
    var self = this;
    return self['@nX'];
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nX_",
smalltalk.method({
selector: "nX:",
fn: function (aValue) {
    var self = this;
    self['@nX'] = aValue;
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nY",
smalltalk.method({
selector: "nY",
fn: function () {
    var self = this;
    return self['@nY'];
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_nY_",
smalltalk.method({
selector: "nY:",
fn: function (aValue) {
    var self = this;
    self['@nY'] = aValue;
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_radius",
smalltalk.method({
selector: "radius",
fn: function () {
    var self = this;
    return self['@radius'];
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_radius_",
smalltalk.method({
selector: "radius:",
fn: function (aValue) {
    var self = this;
    self['@radius'] = aValue;
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_setup",
smalltalk.method({
selector: "setup",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_strokeWeight_", [10]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_frameRate_", [15]);
    smalltalk.send(self, "_x_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_width", []), "__slash", [2])]);
    smalltalk.send(self, "_y_", [smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_height", []), "__slash", [2])]);
    smalltalk.send(self, "_nX_", [smalltalk.send(self, "_x", [])]);
    smalltalk.send(self, "_nY_", [smalltalk.send(self, "_y", [])]);
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    return self['@x'];
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_x_",
smalltalk.method({
selector: "x:",
fn: function (aValue) {
    var self = this;
    self['@x'] = aValue;
    return self;
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    return self['@y'];
}
}),
smalltalk.ProcessingCircles);

smalltalk.addMethod(
"_y_",
smalltalk.method({
selector: "y:",
fn: function (aValue) {
    var self = this;
    self['@y'] = aValue;
    return self;
}
}),
smalltalk.ProcessingCircles);


smalltalk.addMethod(
"_overrideFunctions",
smalltalk.method({
selector: "overrideFunctions",
fn: function () {
    var self = this;
    processing.setup = function () {};
    processing.draw = function () {};
    processing.mouseMoved = function () {};
    return self;
}
}),
smalltalk.ProcessingCircles.klass);


smalltalk.addClass('ProcessingClock', smalltalk.PjsSketch, ['centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
smalltalk.addMethod(
"_activateFunctions",
smalltalk.method({
selector: "activateFunctions",
fn: function () {
    var self = this;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["setup", function () {return smalltalk.send(self, "_setup", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_override_with_", ["draw", function () {return smalltalk.send(self, "_draw", []);}]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_pjsSetup", []);
    return self;
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
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
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_drawArm_lengthScale_weight_",
smalltalk.method({
selector: "drawArm:lengthScale:weight:",
fn: function (aPosition, aLengthScale, aWeight) {
    var self = this;
    var myDX;
    var myDY;
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_strokeWeight_", [aWeight]);
    myDX = smalltalk.send(self['@centerX'], "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_sin_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    myDY = smalltalk.send(self['@centerY'], "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_cos_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_lineX1_y1_x2_y2_", [self['@centerX'], self['@centerY'], myDX, myDY]);
    return self;
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_setup",
smalltalk.method({
selector: "setup",
fn: function () {
    var self = this;
    self['@centerX'] = smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_width", []), "__slash", [2]);
    self['@centerY'] = smalltalk.send(smalltalk.send(smalltalk.send(self, "_pjsInterface", []), "_height", []), "__slash", [2]);
    self['@maxArmLength'] = smalltalk.send(smalltalk.Math || Math, "_min_or_", [self['@centerX'], self['@centerY']]);
    return self;
}
}),
smalltalk.ProcessingClock);


smalltalk.addMethod(
"_overrideFunctions",
smalltalk.method({
selector: "overrideFunctions",
fn: function () {
    var self = this;
    processing.setup = function () {};
    processing.draw = function () {};
    return self;
}
}),
smalltalk.ProcessingClock.klass);


