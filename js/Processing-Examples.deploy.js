smalltalk.addPackage('Processing-Examples', {});
smalltalk.addClass('ProcessingClock', smalltalk.PjsSketch, ['centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
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
    smalltalk.send(self, "_backgroundGray_", [224]);
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
    smalltalk.send(self, "_strokeWeight_", [aWeight]);
    myDX = smalltalk.send(self['@centerX'], "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_sin_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    myDY = smalltalk.send(self['@centerY'], "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_cos_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    smalltalk.send(self, "_lineX1_y1_x2_y2_", [self['@centerX'], self['@centerY'], myDX, myDY]);
    return self;
}
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.PjsSketch);
    self['@centerX'] = smalltalk.send(smalltalk.send(self, "_width", []), "__slash", [2]);
    self['@centerY'] = smalltalk.send(smalltalk.send(self, "_height", []), "__slash", [2]);
    self['@maxArmLength'] = smalltalk.send(smalltalk.Math || Math, "_min_or_", [self['@centerX'], self['@centerY']]);
    return self;
}
}),
smalltalk.ProcessingClock);



