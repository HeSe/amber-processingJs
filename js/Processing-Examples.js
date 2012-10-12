smalltalk.addPackage('Processing-Examples', {});
smalltalk.addClass('ProcessingClock', smalltalk.PjsSketch, ['centerX', 'centerY', 'maxArmLength'], 'Processing-Examples');
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
    smalltalk.send(self, "_backgroundGray_", [224]);
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
source: "draw\x0a\x0a  | now hoursPosition minutesPosition secondsPosition |  \x0a  \x0a  self backgroundGray: 224.\x0a  \x0a  now := Date new.\x0a  \x0a  \x22Moving hours arm by small increments\x22\x0a   hoursPosition := now hours \x5c\x5c 12 + now minutes / 60 / 12.\x0a   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.\x0a   \x0a   \x22Moving minutes arm by small increments\x22\x0a    minutesPosition := now minutes + now seconds / 60 / 60.\x0a    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.\x0a\x0a    \x22Moving hour arm by second increments\x22\x0a    secondsPosition := now seconds / 60.\x0a    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.\x0a",
messageSends: ["backgroundGray:", "new", "/", "+", "minutes", "\x5c\x5c\x5c\x5c", "hours", "drawArm:lengthScale:weight:", "seconds"],
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
    smalltalk.send(self, "_strokeWeight_", [aWeight]);
    myDX = smalltalk.send(self['@centerX'], "__plus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_sin_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    myDY = smalltalk.send(self['@centerY'], "__minus", [smalltalk.send(smalltalk.send(smalltalk.send(smalltalk.Math || Math, "_cos_", [smalltalk.send(smalltalk.send(aPosition, "__star", [2]), "__star", [smalltalk.send(smalltalk.Math || Math, "_PI", [])])]), "__star", [aLengthScale]), "__star", [self['@maxArmLength']])]);
    smalltalk.send(self, "_lineX1_y1_x2_y2_", [self['@centerX'], self['@centerY'], myDX, myDY]);
    return self;
},
args: ["aPosition", "aLengthScale", "aWeight"],
source: "drawArm: aPosition lengthScale: aLengthScale weight: aWeight\x0a\x09| myDX myDY |\x0a\x09self  strokeWeight: aWeight.\x0a\x0a\x09myDX := centerX \x0a\x09\x09\x09+ ((Math sin: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a\x09myDY := centerY \x0a\x09\x09\x09- ((Math cos: (aPosition * 2 * Math PI))\x0a\x09\x09\x09* aLengthScale * maxArmLength).\x0a            \x0a\x09self lineX1: centerX  y1: centerY x2: myDX y2: myDY \x0a",
messageSends: ["strokeWeight:", "+", "*", "sin:", "PI", "-", "cos:", "lineX1:y1:x2:y2:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self, "_initialize", [], smalltalk.PjsSketch);
    self['@centerX'] = smalltalk.send(smalltalk.send(self, "_width", []), "__slash", [2]);
    self['@centerY'] = smalltalk.send(smalltalk.send(self, "_height", []), "__slash", [2]);
    self['@maxArmLength'] = smalltalk.send(smalltalk.Math || Math, "_min_or_", [self['@centerX'], self['@centerY']]);
    return self;
},
args: [],
source: "initialize\x0a\x0a\x09super initialize.\x0a\x0a\x09centerX := self  width / 2.\x0a\x09centerY := self height / 2.\x0a\x09maxArmLength := Math min: centerX or: centerY.\x0a    \x0a    ",
messageSends: ["initialize", "/", "width", "height", "min:or:"],
referencedClasses: ["Math"]
}),
smalltalk.ProcessingClock);



