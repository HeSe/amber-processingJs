smalltalk.addPackage('Processing-Core', {});
smalltalk.addClass('PjsFont', smalltalk.Object, ['pjsFont'], 'Processing-Core');
smalltalk.addMethod(
"_initPjsFont",
smalltalk.method({
selector: "initPjsFont",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@pjsFont'] = new PFont;
    return self;
},
args: [],
source: " initPjsFont\x0a  \x0a    pjsFont := <new PFont() > \x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFont_smooth_",
smalltalk.method({
selector: "initPjsFont:smooth:",
category: 'not yet classified',
fn: function (font, smooth) {
    var self = this;
    self['@pjsFont'] = new PFont(font, smootht);
    return self;
},
args: ["font", "smooth"],
source: " initPjsFont: font smooth: smooth \x0a  \x0a    pjsFont := <new PFont(font, smootht) > \x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFont_smooth_charset_",
smalltalk.method({
selector: "initPjsFont:smooth:charset:",
category: 'not yet classified',
fn: function (font, smooth, charset) {
    var self = this;
    self['@pjsFont'] = new PFont(font, smooth, charset);
    return self;
},
args: ["font", "smooth", "charset"],
source: " initPjsFont: font smooth: smooth charset: charset\x0a  \x0a    pjsFont := <new PFont(font, smooth, charset) > \x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFont_smooth_charset_onInputStream_",
smalltalk.method({
selector: "initPjsFont:smooth:charset:onInputStream:",
category: 'not yet classified',
fn: function (font, smooth, charset, stream) {
    var self = this;
    self['@pjsFont'] = new PFont(font, smooth, charset, stream);
    return self;
},
args: ["font", "smooth", "charset", "stream"],
source: " initPjsFont: font smooth: smooth charset: charset onInputStream: stream\x0a  \x0a    pjsFont := <new PFont(font, smooth, charset, stream) > \x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFontOnInputStream_",
smalltalk.method({
selector: "initPjsFontOnInputStream:",
category: 'not yet classified',
fn: function (stream) {
    var self = this;
    self['@pjsFont'] = new PFont(stream);
    return self;
},
args: ["stream"],
source: " initPjsFontOnInputStream: stream\x0a  \x0a    pjsFont := <new PFont(stream) > \x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsFont);


smalltalk.addMethod(
"_list",
smalltalk.method({
selector: "list",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = PFont.list();
    return $1;
},
args: [],
source: "list\x0a  \x0a  ^<PFont.list();>\x0a  ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", []);
    smalltalk.send(instance, "_initPjsFont", []);
    return instance;
},
args: [],
source: "new\x0a\x0a\x09| instance |\x0a\x0a  instance := self new.\x0a  instance initPjsFont.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsFont"],
referencedClasses: []
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_",
smalltalk.method({
selector: "newFont:",
category: 'not yet classified',
fn: function (aFont) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_", [aFont]);
    return instance;
},
args: ["aFont"],
source: "newFont: aFont\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsFont:"],
referencedClasses: []
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_smooth_",
smalltalk.method({
selector: "newFont:smooth:",
category: 'not yet classified',
fn: function (aFont, aBool) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_smooth_", [aFont, aBool]);
    return instance;
},
args: ["aFont", "aBool"],
source: "newFont: aFont smooth: aBool\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont smooth: aBool.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsFont:smooth:"],
referencedClasses: []
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_smooth_charset_",
smalltalk.method({
selector: "newFont:smooth:charset:",
category: 'not yet classified',
fn: function (aFont, aBool, aCharSet) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_smooth_charset_", [aFont, aBool, aCharSet]);
    return instance;
},
args: ["aFont", "aBool", "aCharSet"],
source: "newFont: aFont smooth: aBool charset: aCharSet\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont smooth: aBool charset: aCharSet.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsFont:smooth:charset:"],
referencedClasses: []
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_smooth_charset_onInputStream_",
smalltalk.method({
selector: "newFont:smooth:charset:onInputStream:",
category: 'not yet classified',
fn: function (aFont, aBool, aCharSet, aStream) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_smooth_charset_onInputStream_", [aFont, aBool, aCharSet, aStream]);
    return instance;
},
args: ["aFont", "aBool", "aCharSet", "aStream"],
source: "newFont: aFont smooth: aBool charset: aCharSet onInputStream: aStream\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont smooth: aBool charset: aCharSet onInputStream: aStream.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsFont:smooth:charset:onInputStream:"],
referencedClasses: []
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newOnInputStream_",
smalltalk.method({
selector: "newOnInputStream:",
category: 'not yet classified',
fn: function (aStream) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsOnStream_", [aStream]);
    return instance;
},
args: ["aStream"],
source: "newOnInputStream: aStream\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsOnStream: aStream.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsOnStream:"],
referencedClasses: []
}),
smalltalk.PjsFont.klass);


smalltalk.addClass('PjsImage', smalltalk.Object, ['pjsImage'], 'Processing-Core');
smalltalk.addMethod(
"_blendImage_sX_sY_sW_sH_dX_dY_dW_dH_mode_",
smalltalk.method({
selector: "blendImage:sX:sY:sW:sH:dX:dY:dW:dH:mode:",
category: 'not yet classified',
fn: function (aPjsImage, aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_blend_sX_sY_sW_sH_dX_dY_dW_dH_mode_", [smalltalk.send(aPjsImage, "_pjsImage", []), aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode]);
    return self;
},
args: ["aPjsImage", "aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH", "aMode"],
source: "blendImage: aPjsImage sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode\x0a\x0a\x22BLEND - linear interpolation of colours: C = A*factor + B\x0a\x0aADD - additive blending with white clip: C = min(A*factor + B, 255)\x0a\x0aSUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)\x0a\x0aDARKEST - only the darkest colour succeeds: C = min(A*factor, B)\x0a\x0aLIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)\x0a\x0aDIFFERENCE - subtract colors from underlying image.\x0a\x0aEXCLUSION - similar to DIFFERENCE, but less extreme.\x0a\x0aMULTIPLY - Multiply the colors, result will always be darker.\x0a\x0aSCREEN - Opposite multiply, uses inverse values of the colors.\x0a\x0aOVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.\x0a\x0aHARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.\x0a\x0aSOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.\x0a\x0aDODGE - Lightens light tones and increases contrast, ignores darks. Called \x22\x22Color Dodge\x22\x22 in Illustrator and Photoshop.\x0a\x0aBURN - Darker areas are applied, increasing contrast, ignores lights. Called \x22\x22Color Burn\x22\x22 in Illustrator and Photoshop.\x22\x0a\x0a\x09pjsImage blend: aPjsImage pjsImage  sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode",
messageSends: ["blend:sX:sY:sW:sH:dX:dY:dW:dH:mode:", "pjsImage"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_blendSX_sY_sW_sH_dX_dY_dW_dH_mode_",
smalltalk.method({
selector: "blendSX:sY:sW:sH:dX:dY:dW:dH:mode:",
category: 'not yet classified',
fn: function (aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_blend_sY_sW_sH_dX_dY_dW_dH_mode_", [aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode]);
    return self;
},
args: ["aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH", "aMode"],
source: "blendSX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode\x0a\x0a\x22BLEND - linear interpolation of colours: C = A*factor + B\x0a\x0aADD - additive blending with white clip: C = min(A*factor + B, 255)\x0a\x0aSUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)\x0a\x0aDARKEST - only the darkest colour succeeds: C = min(A*factor, B)\x0a\x0aLIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)\x0a\x0aDIFFERENCE - subtract colors from underlying image.\x0a\x0aEXCLUSION - similar to DIFFERENCE, but less extreme.\x0a\x0aMULTIPLY - Multiply the colors, result will always be darker.\x0a\x0aSCREEN - Opposite multiply, uses inverse values of the colors.\x0a\x0aOVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.\x0a\x0aHARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.\x0a\x0aSOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.\x0a\x0aDODGE - Lightens light tones and increases contrast, ignores darks. Called \x22\x22Color Dodge\x22\x22 in Illustrator and Photoshop.\x0a\x0aBURN - Darker areas are applied, increasing contrast, ignores lights. Called \x22\x22Color Burn\x22\x22 in Illustrator and Photoshop.\x22\x0a\x0a\x09pjsImage blend: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode",
messageSends: ["blend:sY:sW:sH:dX:dY:dW:dH:mode:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_copyImage_sX_sY_sW_sH_dX_dY_dW_dH_",
smalltalk.method({
selector: "copyImage:sX:sY:sW:sH:dX:dY:dW:dH:",
category: 'not yet classified',
fn: function (aPjsImage, aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_copy_sx_sY_sW_sH_dX_dY_dW_dH_", [smalltalk.send(aPjsImage, "_pjsImage", []), aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH]);
    return self;
},
args: ["aPjsImage", "aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH"],
source: "copyImage: aPjsImage sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH\x0a\x0a\x09pjsImage copy: aPjsImage pjsImage sx: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH",
messageSends: ["copy:sx:sY:sW:sH:dX:dY:dW:dH:", "pjsImage"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_copySX_sY_sW_sH_dX_dY_dW_dH_",
smalltalk.method({
selector: "copySX:sY:sW:sH:dX:dY:dW:dH:",
category: 'not yet classified',
fn: function (aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_copy_sY_sW_sH_dX_dY_dW_dH_", [aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH]);
    return self;
},
args: ["aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH"],
source: "copySX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH\x0a\x0a\x09pjsImage copy:aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH",
messageSends: ["copy:sY:sW:sH:dX:dY:dW:dH:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_filter_",
smalltalk.method({
selector: "filter:",
category: 'not yet classified',
fn: function (aKind) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_filter_", [aKind]);
    return self;
},
args: ["aKind"],
source: "filter: aKind\x0a\x0a\x09\x22THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, or DILATE\x22\x0a\x0a\x09pjsImage filter: aKind ",
messageSends: ["filter:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_filter_param_",
smalltalk.method({
selector: "filter:param:",
category: 'not yet classified',
fn: function (aKind, aFloat) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_filter_param_", [aKind, aFloat]);
    return self;
},
args: ["aKind", "aFloat"],
source: "filter: aKind param: aFloat\x0a\x0a\x09pjsImage filter: aKind param: aFloat",
messageSends: ["filter:param:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_get",
smalltalk.method({
selector: "get",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_get", []);
    return $1;
},
args: [],
source: "get\x0a\x0a\x09^pjsImage get",
messageSends: ["get"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_getX_y_",
smalltalk.method({
selector: "getX:y:",
category: 'not yet classified',
fn: function (anXInt, anYInt) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_get_y_", [anXInt, anYInt]);
    return $1;
},
args: ["anXInt", "anYInt"],
source: "getX: anXInt y: anYInt\x0a\x0a\x09^pjsImage get: anXInt y: anYInt",
messageSends: ["get:y:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_getX_y_width_height_",
smalltalk.method({
selector: "getX:y:width:height:",
category: 'not yet classified',
fn: function (anXInt, anYInt, aWInt, aHInt) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_get_y_width_height_", [anXInt, anYInt, aWInt, aHInt]);
    return $1;
},
args: ["anXInt", "anYInt", "aWInt", "aHInt"],
source: "getX: anXInt y: anYInt width: aWInt height: aHInt\x0a\x0a\x09^pjsImage get: anXInt y: anYInt width: aWInt height: aHInt",
messageSends: ["get:y:width:height:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_height", []);
    return $1;
},
args: [],
source: "height\x0a\x0a\x09^pjsImage height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImage",
smalltalk.method({
selector: "initPjsImage",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@pjsImage'] = new PImage;
    return self;
},
args: [],
source: "initPjsImage\x0a  \x0a    pjsImage := <new PImage() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImage_",
smalltalk.method({
selector: "initPjsImage:",
category: 'not yet classified',
fn: function (img) {
    var self = this;
    self['@pjsImage'] = new PImage(img);
    return self;
},
args: ["img"],
source: "initPjsImage: img\x0a  \x0a    pjsImage := <new PImage(img) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImageWidth_height_",
smalltalk.method({
selector: "initPjsImageWidth:height:",
category: 'not yet classified',
fn: function (width, height) {
    var self = this;
    self['@pjsImage'] = new PImage(width, height);
    return self;
},
args: ["width", "height"],
source: "initPjsImageWidth: width height: height\x0a  \x0a    pjsImage := <new PImage(width, height) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImageWidth_height_format_",
smalltalk.method({
selector: "initPjsImageWidth:height:format:",
category: 'not yet classified',
fn: function (width, height, format) {
    var self = this;
    self['@pjsImage'] = new PImage(width, height, format);
    return self;
},
args: ["width", "height", "format"],
source: "initPjsImageWidth: width height: height format: format\x0a  \x0a    pjsImage := <new PImage(width, height, format) >",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_loadPixels",
smalltalk.method({
selector: "loadPixels",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_loadPixels", []);
    return self;
},
args: [],
source: "loadPixels\x0a\x0a\x09pjsImage loadPixels",
messageSends: ["loadPixels"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_maskArray_",
smalltalk.method({
selector: "maskArray:",
category: 'not yet classified',
fn: function (anIntArray) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_mask_", [anIntArray]);
    return self;
},
args: ["anIntArray"],
source: "maskArray: anIntArray\x0a\x0a\x09pjsImage mask: anIntArray ",
messageSends: ["mask:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_maskImage_",
smalltalk.method({
selector: "maskImage:",
category: 'not yet classified',
fn: function (aPjsImage) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_mask_", [smalltalk.send(aPjsImage, "_pjsImage", [])]);
    return self;
},
args: ["aPjsImage"],
source: "maskImage: aPjsImage\x0a\x0a\x09pjsImage mask: aPjsImage pjsImage ",
messageSends: ["mask:", "pjsImage"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_pixels",
smalltalk.method({
selector: "pixels",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_pixels", []);
    return $1;
},
args: [],
source: "pixels\x0a\x0a\x09^pjsImage pixels ",
messageSends: ["pixels"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_pjsImage",
smalltalk.method({
selector: "pjsImage",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@pjsImage'];
},
args: [],
source: "pjsImage\x0a\x0a\x09^pjsImage ",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_resizeWidth_height_",
smalltalk.method({
selector: "resizeWidth:height:",
category: 'not yet classified',
fn: function (aResizedWInt, aResizedHInt) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_resize_height_", [aResizedWInt, aResizedHInt]);
    return self;
},
args: ["aResizedWInt", "aResizedHInt"],
source: "resizeWidth: aResizedWInt height: aResizedHInt\x0a\x0a\x09pjsImage resize: aResizedWInt height: aResizedHInt",
messageSends: ["resize:height:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_save_",
smalltalk.method({
selector: "save:",
category: 'not yet classified',
fn: function (aFileNameString) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_save_", [aFileNameString]);
    return self;
},
args: ["aFileNameString"],
source: "save: aFileNameString\x0a\x0a\x09pjsImage save: aFileNameString",
messageSends: ["save:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_setX_y_color_",
smalltalk.method({
selector: "setX:y:color:",
category: 'not yet classified',
fn: function (anXInt, anYInt, aColorType) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_set_y_color_", [anXInt, anYInt, aColorType]);
    return self;
},
args: ["anXInt", "anYInt", "aColorType"],
source: "setX: anXInt y: anYInt color: aColorType\x0a\x0a\x09pjsImage set: anXInt y: anYInt  color: aColorType",
messageSends: ["set:y:color:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_setX_y_image_",
smalltalk.method({
selector: "setX:y:image:",
category: 'not yet classified',
fn: function (anXInt, anYInt, aPjsImage) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_set_y_image_", [anXInt, anYInt, smalltalk.send(aPjsImage, "_pjsImage", [])]);
    return self;
},
args: ["anXInt", "anYInt", "aPjsImage"],
source: "setX: anXInt y: anYInt image: aPjsImage\x0a\x0a\x09pjsImage set: anXInt y: anYInt  image: aPjsImage pjsImage",
messageSends: ["set:y:image:", "pjsImage"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_updatePixels",
smalltalk.method({
selector: "updatePixels",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_updatePixels", []);
    return self;
},
args: [],
source: "updatePixels\x0a\x0a\x09pjsImage updatePixels",
messageSends: ["updatePixels"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_updatePixelsX_y_width_height_",
smalltalk.method({
selector: "updatePixelsX:y:width:height:",
category: 'not yet classified',
fn: function (anUpperleftXCoordInt, anUpperleftYCoordInt, aWInt, aHInt) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_updatePixels_y_width_height_", [anUpperleftXCoordInt, anUpperleftYCoordInt, aWInt, aHInt]);
    return self;
},
args: ["anUpperleftXCoordInt", "anUpperleftYCoordInt", "aWInt", "aHInt"],
source: "updatePixelsX: anUpperleftXCoordInt y:  anUpperleftYCoordInt width: aWInt height: aHInt\x0a\x0a\x09pjsImage updatePixels: anUpperleftXCoordInt y:  anUpperleftYCoordInt width: aWInt height: aHInt",
messageSends: ["updatePixels:y:width:height:"],
referencedClasses: []
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_width", []);
    return $1;
},
args: [],
source: "width\x0a\x0a\x09^pjsImage width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.PjsImage);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", []);
    smalltalk.send(instance, "_initPjsImage", []);
    return instance;
},
args: [],
source: "new\x0a\x0a\x09| instance |\x0a\x0a  instance := self new.\x0a  instance initPjsImage.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsImage"],
referencedClasses: []
}),
smalltalk.PjsImage.klass);

smalltalk.addMethod(
"_newImage_",
smalltalk.method({
selector: "newImage:",
category: 'not yet classified',
fn: function (anImage) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsImage_", [anImage]);
    return instance;
},
args: ["anImage"],
source: "newImage: anImage\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsImage: anImage.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsImage:"],
referencedClasses: []
}),
smalltalk.PjsImage.klass);

smalltalk.addMethod(
"_newWidth_heigth_",
smalltalk.method({
selector: "newWidth:heigth:",
category: 'not yet classified',
fn: function (aWidth, aHeight) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsImageWidth_height_", [aWidth, aHeight]);
    return instance;
},
args: ["aWidth", "aHeight"],
source: "newWidth: aWidth heigth: aHeight\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsImageWidth: aWidth height: aHeight.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsImageWidth:height:"],
referencedClasses: []
}),
smalltalk.PjsImage.klass);

smalltalk.addMethod(
"_newWidth_heigth_format_",
smalltalk.method({
selector: "newWidth:heigth:format:",
category: 'not yet classified',
fn: function (aWidth, aHeight, aFormat) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsImageWidth_height_format_", [aWidth, aHeight, aFormat]);
    return instance;
},
args: ["aWidth", "aHeight", "aFormat"],
source: "newWidth: aWidth heigth: aHeight format: aFormat\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsImageWidth: aWidth height: aHeight format: aFormat.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsImageWidth:height:format:"],
referencedClasses: []
}),
smalltalk.PjsImage.klass);


smalltalk.addClass('PjsShape', smalltalk.Object, ['pjsShape'], 'Processing-Core');
smalltalk.addMethod(
"_addChild_",
smalltalk.method({
selector: "addChild:",
category: 'not yet classified',
fn: function (aWho) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_addChild_", [aWho]);
    return self;
},
args: ["aWho"],
source: "addChild: aWho\x0a\x0a\x09pjsShape addChild: aWho",
messageSends: ["addChild:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_beginContour",
smalltalk.method({
selector: "beginContour",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_beginContour", []);
    return self;
},
args: [],
source: "beginContour\x0a\x0a\x09pjsShape beginContour",
messageSends: ["beginContour"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_disableStyle",
smalltalk.method({
selector: "disableStyle",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_disableStyle", []);
    return self;
},
args: [],
source: "disableStyle\x0a\x0a\x09pjsShape disableStyle",
messageSends: ["disableStyle"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_enableStyle",
smalltalk.method({
selector: "enableStyle",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_enableStyle", []);
    return self;
},
args: [],
source: "enableStyle\x0a\x0a\x09pjsShape enableStyle",
messageSends: ["enableStyle"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_end",
smalltalk.method({
selector: "end",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_end", []);
    return self;
},
args: [],
source: "end\x0a\x0a\x09pjsShape end",
messageSends: ["end"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_endContour",
smalltalk.method({
selector: "endContour",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_endContour", []);
    return self;
},
args: [],
source: "endContour\x0a\x0a\x09pjsShape endContour",
messageSends: ["endContour"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_getChild_",
smalltalk.method({
selector: "getChild:",
category: 'not yet classified',
fn: function (anIndexOrTarget) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_getChild_", [anIndexOrTarget]);
    return $1;
},
args: ["anIndexOrTarget"],
source: "getChild: anIndexOrTarget\x0a\x0a\x09^pjsShape getChild: anIndexOrTarget",
messageSends: ["getChild:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_height", []);
    return $1;
},
args: [],
source: "height\x0a\x0a\x09^  pjsShape height",
messageSends: ["height"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_height_", [aValue]);
    return self;
},
args: ["aValue"],
source: "height: aValue\x0a\x0a\x09pjsShape height: aValue",
messageSends: ["height:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@pjsShape'] = new Shape;
    return self;
},
args: [],
source: "initialize\x0a\x0a\x09pjsShape := < new Shape() >",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_isVisible",
smalltalk.method({
selector: "isVisible",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_isVisible", []);
    return $1;
},
args: [],
source: "isVisible\x0a\x0a\x09^pjsShape isVisible",
messageSends: ["isVisible"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_pjsShape",
smalltalk.method({
selector: "pjsShape",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@pjsShape'];
},
args: [],
source: "pjsShape\x0a\x0a\x09^pjsShape",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_resetMatrix",
smalltalk.method({
selector: "resetMatrix",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_resetMatrix", []);
    return self;
},
args: [],
source: "resetMatrix\x0a\x0a\x09pjsShape resetMatrix",
messageSends: ["resetMatrix"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotate_",
smalltalk.method({
selector: "rotate:",
category: 'not yet classified',
fn: function (aFloatAngleInRadians) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotate_", [aFloatAngleInRadians]);
    return self;
},
args: ["aFloatAngleInRadians"],
source: "rotate: aFloatAngleInRadians\x0a\x09\x0a    pjsShape rotate: aFloatAngleInRadians",
messageSends: ["rotate:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotateX_",
smalltalk.method({
selector: "rotateX:",
category: 'not yet classified',
fn: function (aFloatAngle) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotateX_", [aFloatAngle]);
    return self;
},
args: ["aFloatAngle"],
source: "rotateX: aFloatAngle\x0a\x09\x0a    pjsShape rotateX: aFloatAngle",
messageSends: ["rotateX:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotateY_",
smalltalk.method({
selector: "rotateY:",
category: 'not yet classified',
fn: function (aFloatAngle) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotateY_", [aFloatAngle]);
    return self;
},
args: ["aFloatAngle"],
source: "rotateY: aFloatAngle\x0a\x09\x0a    pjsShape rotateY: aFloatAngle",
messageSends: ["rotateY:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotateZ_",
smalltalk.method({
selector: "rotateZ:",
category: 'not yet classified',
fn: function (aFloatAngle) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotateZ_", [aFloatAngle]);
    return self;
},
args: ["aFloatAngle"],
source: "rotateZ: aFloatAngle\x0a\x09\x0a    pjsShape rotateZ: aFloatAngle",
messageSends: ["rotateZ:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_scale_",
smalltalk.method({
selector: "scale:",
category: 'not yet classified',
fn: function (aFloatPercent) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_scale_", [aFloatPercent]);
    return self;
},
args: ["aFloatPercent"],
source: "scale: aFloatPercent\x0a\x09\x0a    pjsShape scale: aFloatPercent",
messageSends: ["scale:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_scaleX_y_",
smalltalk.method({
selector: "scaleX:y:",
category: 'not yet classified',
fn: function (aFloatPercentXAxis, aFloatPercentYAxis) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_scale_y_", [aFloatPercentXAxis, aFloatPercentYAxis]);
    return self;
},
args: ["aFloatPercentXAxis", "aFloatPercentYAxis"],
source: "scaleX: aFloatPercentXAxis y: aFloatPercentYAxis\x0a\x09\x0a    pjsShape scale: aFloatPercentXAxis  y: aFloatPercentYAxis",
messageSends: ["scale:y:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_scaleX_y_z_",
smalltalk.method({
selector: "scaleX:y:z:",
category: 'not yet classified',
fn: function (aFloatPercentXAxis, aFloatPercentYAxis, aFloatPercentZAxis) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_scale_y_z_", [aFloatPercentXAxis, aFloatPercentYAxis, aFloatPercentZAxis]);
    return self;
},
args: ["aFloatPercentXAxis", "aFloatPercentYAxis", "aFloatPercentZAxis"],
source: "scaleX: aFloatPercentXAxis y: aFloatPercentYAxis z: aFloatPercentZAxis\x0a\x09\x0a    pjsShape scale: aFloatPercentXAxis  y: aFloatPercentYAxis z: aFloatPercentZAxis",
messageSends: ["scale:y:z:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_setVisible_",
smalltalk.method({
selector: "setVisible:",
category: 'not yet classified',
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_setVisibile_", [aBoolean]);
    return self;
},
args: ["aBoolean"],
source: "setVisible: aBoolean\x0a\x0a\x09pjsShape setVisibile: aBoolean",
messageSends: ["setVisibile:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_translateX_y_",
smalltalk.method({
selector: "translateX:y:",
category: 'not yet classified',
fn: function (aFloatLeftRight, aFloatUpDown) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_translate_y_", [aFloatLeftRight, aFloatUpDown]);
    return self;
},
args: ["aFloatLeftRight", "aFloatUpDown"],
source: "translateX: aFloatLeftRight y: aFloatUpDown\x0a\x09\x0a    pjsShape translate: aFloatLeftRight y: aFloatUpDown",
messageSends: ["translate:y:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_translateX_y_z_",
smalltalk.method({
selector: "translateX:y:z:",
category: 'not yet classified',
fn: function (aFloatLeftRight, aFloatUpDown, aFloatForwarBackward) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_translate_y_z_", [aFloatLeftRight, aFloatUpDown, aFloatForwarBackward]);
    return self;
},
args: ["aFloatLeftRight", "aFloatUpDown", "aFloatForwarBackward"],
source: "translateX: aFloatLeftRight y: aFloatUpDown z: aFloatForwarBackward\x0a\x09\x0a    pjsShape translate: aFloatLeftRight y: aFloatUpDown z: aFloatForwarBackward",
messageSends: ["translate:y:z:"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_width", []);
    return $1;
},
args: [],
source: "width\x0a\x0a\x09^ pjsShape width",
messageSends: ["width"],
referencedClasses: []
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
category: 'not yet classified',
fn: function (aValue) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_width_", [aValue]);
    return self;
},
args: ["aValue"],
source: "width: aValue\x0a\x0a\x09pjsShape width: aValue",
messageSends: ["width:"],
referencedClasses: []
}),
smalltalk.PjsShape);



smalltalk.addClass('PjsSketch', smalltalk.Object, ['processing'], 'Processing-Core');
smalltalk.addMethod(
"_alpha_",
smalltalk.method({
selector: "alpha:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_alpha_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "alpha: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing alpha: aColor\x0a    \x0a   \x22Extracts the alpha value from a color..\x22",
messageSends: ["alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_arcX_y_width_height_start_stop_",
smalltalk.method({
selector: "arcX:y:width:height:start:stop:",
category: '2D primitives',
fn: function (aX, aY, aWidth, aHeight, aStart, aStop) {
    var self = this;
    smalltalk.send(self['@processing'], "_arc_y_width_height_start_stop_", [aX, aY, aWidth, aHeight, aStart, aStop]);
    return self;
},
args: ["aX", "aY", "aWidth", "aHeight", "aStart", "aStop"],
source: "arcX: aX y: aY width: aWidth height: aHeight start: aStart stop: aStop\x0a\x0a\x09processing arc: aX y: aY width: aWidth height: aHeight start: aStart stop: aStop",
messageSends: ["arc:y:width:height:start:stop:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_background_value2_value3_",
smalltalk.method({
selector: "background:value2:value3:",
category: 'color settings',
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
},
args: ["aValue1", "aValue2", "aValue3"],
source: "background: aValue1\x09value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value (depending on the current color mode)\x0a\x09value2 \x09int or float: green or saturation value (depending on the current color mode)\x0a\x09value3 \x09int or float: blue or brightness value (depending on the current color mode)\x22\x0a    \x0a\x09processing background: aValue1\x09value2: aValue2 value3: aValue3 \x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:value2:value3:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_background_value2_value3_alpha_",
smalltalk.method({
selector: "background:value2:value3:alpha:",
category: 'color settings',
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
},
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "background: aValue1\x09value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value (depending on the current color mode)\x0a\x09value2 \x09int or float: green or saturation value (depending on the current color mode)\x0a\x09value3 \x09int or float: blue or brightness value (depending on the current color mode)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aValue1\x09value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:value2:value3:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundColor_",
smalltalk.method({
selector: "backgroundColor:",
category: 'color settings',
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_", [aColor]);
    return self;
},
args: ["aColor"],
source: "backgroundColor: aColor\x0a\x09\x22color \x09color: any value of the color datatype\x22\x0a    \x0a\x09processing background: aColor \x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundColor_alpha_",
smalltalk.method({
selector: "backgroundColor:alpha:",
category: 'color settings',
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_alpha_", [aColor, anAlpha]);
    return self;
},
args: ["aColor", "anAlpha"],
source: "backgroundColor: aColor alpha: anAlpha\x0a\x09\x22color \x09color: any value of the color datatype\x0a    alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aColor alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundGray_",
smalltalk.method({
selector: "backgroundGray:",
category: 'color settings',
fn: function (aGrayValue) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_", [aGrayValue]);
    return self;
},
args: ["aGrayValue"],
source: "backgroundGray: aGrayValue\x0a\x09\x22gray \x09int or float: specifies a value between white and black\x22\x0a    \x0a\x09processing background: aGrayValue\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundGray_alpha_",
smalltalk.method({
selector: "backgroundGray:alpha:",
category: 'color settings',
fn: function (aGrayValue, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_alpha_", [aGrayValue, anAlpha]);
    return self;
},
args: ["aGrayValue", "anAlpha"],
source: "backgroundGray: aGrayValue alpha: anAlpha\x0a\x09\x22gray \x09int or float: specifies a value between white and black\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aGrayValue alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundHex_",
smalltalk.method({
selector: "backgroundHex:",
category: 'color settings',
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_", [aHex]);
    return self;
},
args: ["aHex"],
source: "backgroundHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a    alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aHex \x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundHex_alpha_",
smalltalk.method({
selector: "backgroundHex:alpha:",
category: 'color settings',
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_alpha_", [aHex, anAlpha]);
    return self;
},
args: ["aHex", "anAlpha"],
source: "backgroundHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a    alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aHex alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
messageSends: ["background:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_beginShape",
smalltalk.method({
selector: "beginShape",
category: 'vertex',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_beginShape", []);
    return self;
},
args: [],
source: "beginShape\x0a\x0a\x09processing beginShape\x0a    \x0a    \x22Using the beginShape() and endShape() functions allow creating more complex forms.\x0a    beginShape() begins recording vertices for a shape and endShape() stops recording. \x0a    The value of the MODE parameter tells it which types of shapes to create from the provided vertices. \x0a    With no mode specified, the shape can be any irregular polygon. \x0a    The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. \x0a    After calling the beginShape() function, a series of vertex() commands must follow. \x0a    To stop drawing the shape, call endShape(). \x0a    The vertex() function with two parameters specifies a position in 2D and the vertex() function with three parameters specifies a position in 3D. \x0a    Each shape will be outlined with the current stroke color and filled with the fill color. \x0a    Transformations such as translate(), rotate(), and scale() do not work within beginShape(). \x0a    It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()..\x22",
messageSends: ["beginShape"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_beginShape_",
smalltalk.method({
selector: "beginShape:",
category: 'vertex',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_beginShape_", [aMode]);
    return self;
},
args: ["aMode"],
source: "beginShape: aMode\x0a\x09\x22MODE \x09Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, QUAD_STRIP.\x22\x0a    \x0a\x09processing beginShape: aMode\x0a    \x0a    \x22Using the beginShape() and endShape() functions allow creating more complex forms.\x0a    beginShape() begins recording vertices for a shape and endShape() stops recording. \x0a    The value of the MODE parameter tells it which types of shapes to create from the provided vertices. \x0a    With no mode specified, the shape can be any irregular polygon. \x0a    The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. \x0a    After calling the beginShape() function, a series of vertex() commands must follow. \x0a    To stop drawing the shape, call endShape(). \x0a    The vertex() function with two parameters specifies a position in 2D and the vertex() function with three parameters specifies a position in 3D. \x0a    Each shape will be outlined with the current stroke color and filled with the fill color. \x0a    Transformations such as translate(), rotate(), and scale() do not work within beginShape(). \x0a    It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()..\x22",
messageSends: ["beginShape:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierDetail_",
smalltalk.method({
selector: "bezierDetail:",
category: 'curves',
fn: function (aDetailint) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierDetail_", [aDetailint]);
    return self;
},
args: ["aDetailint"],
source: "bezierDetail: aDetailint\x0a\x09\x22Sets the resolution at which Beziers display. The default value is 20. This function is only useful when using the P3D or OPENGL renderer as the default (JAVA2D) renderer does not use this information.\x22\x0a\x09processing bezierDetail: aDetailint",
messageSends: ["bezierDetail:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierPointA_b_c_d_t_",
smalltalk.method({
selector: "bezierPointA:b:c:d:t:",
category: 'curves',
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierPoint_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
},
args: ["anA", "aB", "aC", "aD", "aT"],
source: "bezierPointA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing bezierPoint: anA b: aB c: aC d: aD t: aT",
messageSends: ["bezierPoint:b:c:d:t:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierTangentA_b_c_d_t_",
smalltalk.method({
selector: "bezierTangentA:b:c:d:t:",
category: 'curves',
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierTangent_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
},
args: ["anA", "aB", "aC", "aD", "aT"],
source: "bezierTangentA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing bezierTangent: anA b: aB c: aC d: aD t: aT",
messageSends: ["bezierTangent:b:c:d:t:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierVertexCx1_cy1_cx2_cy2_x2_y2_",
smalltalk.method({
selector: "bezierVertexCx1:cy1:cx2:cy2:x2:y2:",
category: 'vertex',
fn: function (aCx1, aCy1, aCx2, aCy2, aX2, aY2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierVertex_cy1_cx2_cy2_x2_y2_", [aCx1, aCy1, aCx2, aCy2, aX2, aY2]);
    return self;
},
args: ["aCx1", "aCy1", "aCx2", "aCy2", "aX2", "aY2"],
source: "bezierVertexCx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2\x0a\x09\x22cx1 \x09The x-coordinate of 1st control point, either a float or int\x0a\x09cy1 \x09The y-coordinate of 1st control point, either a float or int\x0a\x09cz1 \x09The z-coordinate of 1st control point, either a float or int\x0a\x09cx2 \x09The x-coordinate of 2nd control point, either a float or int\x0a\x09cy2 \x09The y-coordinate of 2nd control point, either a float or int\x0a\x09cz2 \x09The z-coordinate of 2nd control point, either a float or int\x0a\x09x \x09The x-coordinate of anchor point, either a float or int\x0a\x09y \x09The y-coordinate of anchor point, either a float or int\x0a\x09z \x09The z-coordinate of anchor point, either a float or int\x22\x0a    \x0a\x09processing bezierVertex: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2",
messageSends: ["bezierVertex:cy1:cx2:cy2:x2:y2:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierVertexCx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_",
smalltalk.method({
selector: "bezierVertexCx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",
category: 'vertex',
fn: function (aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierVertex_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_", [aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2]);
    return self;
},
args: ["aCx1", "aCy1", "aCz1", "aCx2", "aCy2", "aCz2", "aX2", "aY2", "aZ2"],
source: "bezierVertexCx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2 x2: aX2 y2: aY2 z2: aZ2\x0a\x09\x22cx1 \x09The x-coordinate of 1st control point, either a float or int\x0a\x09cy1 \x09The y-coordinate of 1st control point, either a float or int\x0a\x09cz1 \x09The z-coordinate of 1st control point, either a float or int\x0a\x09cx2 \x09The x-coordinate of 2nd control point, either a float or int\x0a\x09cy2 \x09The y-coordinate of 2nd control point, either a float or int\x0a\x09cz2 \x09The z-coordinate of 2nd control point, either a float or int\x0a\x09x \x09The x-coordinate of anchor point, either a float or int\x0a\x09y \x09The y-coordinate of anchor point, either a float or int\x0a\x09z \x09The z-coordinate of anchor point, either a float or int\x22\x0a    \x0a\x09processing bezierVertex:  aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2 x2: aX2 y2: aY2 z2: aZ2",
messageSends: ["bezierVertex:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierX1_y1_cx1_cy1_cx2_cy2_x2_y2_",
smalltalk.method({
selector: "bezierX1:y1:cx1:cy1:cx2:cy2:x2:y2:",
category: 'curves',
fn: function (aX1, aY1, aCx1, aCy1, aCx2, aCy2, aX2, aY2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezier_y1_cx1_cy1_cx2_cy2_x2_y2_", [smalltalk.send(aX1, "_aX1", []), aY1, aCx1, aCy1, aCx2, aCy2, aX2, aY2]);
    return self;
},
args: ["aX1", "aY1", "aCx1", "aCy1", "aCx2", "aCy2", "aX2", "aY2"],
source: "bezierX1: aX1 y1: aY1 cx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor point\x0a\x09cx1, cy1, cz1 \x09int or float: coordinates for the first control point\x0a\x09cx2, cy2, cz2 \x09int or float: coordinates for the second control point\x0a\x09x2, y2, z2 \x09int or float: coordinates for the second anchor point\x22\x0a    \x0a\x09processing bezier: aX1 aX1 y1: aY1 cx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2",
messageSends: ["bezier:y1:cx1:cy1:cx2:cy2:x2:y2:", "aX1"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierX1_y1_z1_cx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_",
smalltalk.method({
selector: "bezierX1:y1:z1:cx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",
category: 'curves',
fn: function (aX1, aY1, aZ1, aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezier_y1_z1_cx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_", [aX1, aY1, aZ1, aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2]);
    return self;
},
args: ["aX1", "aY1", "aZ1", "aCx1", "aCy1", "aCz1", "aCx2", "aCy2", "aCz2", "aX2", "aY2", "aZ2"],
source: "bezierX1: aX1 y1: aY1 z1: aZ1 cx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2  x2: aX2 y2: aY2 z2: aZ2\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor point\x0a\x09cx1, cy1, cz1 \x09int or float: coordinates for the first control point\x0a\x09cx2, cy2, cz2 \x09int or float: coordinates for the second control point\x0a\x09x2, y2, z2 \x09int or float: coordinates for the second anchor point\x22\x0a\x0a\x09processing bezier: aX1 y1: aY1 z1: aZ1 cx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2  x2: aX2 y2: aY2 z2: aZ2",
messageSends: ["bezier:y1:z1:cx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_blendColor1_color2_mode_",
smalltalk.method({
selector: "blendColor1:color2:mode:",
category: 'color creating and reading',
fn: function (aColor1, aColor2, aMode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_blend_color2_mode_", [aColor1, aColor2, aMode]);
    return $1;
},
args: ["aColor1", "aColor2", "aMode"],
source: "blendColor1: aColor1 color2: aColor2 mode: aMode\x0a\x09\x22c1 \x09color: the first color to blend\x0a\x09c2 \x09color: the second color to blend\x0a\x09MODE \x09Either BLEND, ADD, SUBTRACT, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, or BURN\x22\x0a    \x0a\x09^processing blend: aColor1 color2: aColor2 mode: aMode\x0a    \x0a   \x22Blends two color values together based on the blending mode given as the MODE parameter. The possible modes are described in the reference for the blend() function.\x22",
messageSends: ["blend:color2:mode:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_blue_",
smalltalk.method({
selector: "blue:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_blue_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "blue: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing blue: aColor\x0a    \x0a   \x22 \x09Extracts the blue value from a color, scaled to match current colorMode(). \x0a   This value is always returned as a float so be careful not to assign it to an int value.\x0a\x09The blue() function is easy to use and undestand, but is slower than another technique. \x0a    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, \x0a    use a bit mask to remove the other color components. For example, the following two lines of code are equivalent:\x0a\x09float r1 = blue(myColor);\x0a\x09float r2 = myColor & 0xFF;\x22",
messageSends: ["blue:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_box_",
smalltalk.method({
selector: "box:",
category: '3D primitives',
fn: function (aSizeIntOrFloat) {
    var self = this;
    smalltalk.send(self['@processing'], "_box_", [aSizeIntOrFloat]);
    return self;
},
args: ["aSizeIntOrFloat"],
source: "box: aSizeIntOrFloat\x0a\x09\x22size \x09int or float: dimension of the box in all dimensions, creates a cube\x22\x0a    \x0a\x09processing box: aSizeIntOrFloat",
messageSends: ["box:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_boxWidth_height_depth_",
smalltalk.method({
selector: "boxWidth:height:depth:",
category: '3D primitives',
fn: function (aWidth, aHeight, aDepth) {
    var self = this;
    smalltalk.send(self['@processing'], "_box_height_depth_", [aWidth, aHeight, aDepth]);
    return self;
},
args: ["aWidth", "aHeight", "aDepth"],
source: "boxWidth: aWidth height: aHeight depth: aDepth\x0a\x09\x22width \x09int or float: dimension of the box in the x-dimension\x0a\x09height \x09int or float: dimension of the box in the y-dimension\x0a\x09depth \x09int or float: dimension of the box in the z-dimension\x22\x0a    \x0a\x09processing box: aWidth height: aHeight depth: aDepth",
messageSends: ["box:height:depth:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_brightness_",
smalltalk.method({
selector: "brightness:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_brightness_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "brightness: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing brightness: aColor\x0a    \x0a   \x22Extracts the brightness value from a color.\x22",
messageSends: ["brightness:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorGray_",
smalltalk.method({
selector: "colorGray:",
category: 'color creating and reading',
fn: function (aGray) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_", [aGray]);
    return $1;
},
args: ["aGray"],
source: "colorGray: aGray \x0a\x09\x22gray \x09int or float: number specifying value between white and blackl\x22\x0a    \x0a\x09^processing color: aGray \x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
messageSends: ["color:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorGray_alpha_",
smalltalk.method({
selector: "colorGray:alpha:",
category: 'color creating and reading',
fn: function (aGray, anAlpha) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_alpha_", [aGray, anAlpha]);
    return $1;
},
args: ["aGray", "anAlpha"],
source: "colorGray: aGray alpha: anAlpha\x0a\x09\x22gray \x09int or float: number specifying value between white and black\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09^processing color: aGray alpha: anAlpha\x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
messageSends: ["color:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorHex_",
smalltalk.method({
selector: "colorHex:",
category: 'color creating and reading',
fn: function (aHex) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_", [aHex]);
    return $1;
},
args: ["aHex"],
source: "colorHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x22\x0a    \x0a\x09^processing color: aHex\x0a    \x0a  \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
messageSends: ["color:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorHex_alpha_",
smalltalk.method({
selector: "colorHex:alpha:",
category: 'color creating and reading',
fn: function (aHex, anAlpha) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_alpha_", [aHex, anAlpha]);
    return $1;
},
args: ["aHex", "anAlpha"],
source: "colorHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09^processing color: aHex alpha: anAlpha \x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
messageSends: ["color:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_",
smalltalk.method({
selector: "colorMode:",
category: 'color settings',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_", [aMode]);
    return self;
},
args: ["aMode"],
source: "colorMode: aMode\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x22\x0a    \x0a\x09processing colorMode: aMode \x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
messageSends: ["colorMode:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_range1_range2_range3_",
smalltalk.method({
selector: "colorMode:range1:range2:range3:",
category: 'color settings',
fn: function (aMode, aRange1, aRange2, aRange3) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_range1_range2_range3_", [aMode, aRange1, aRange2, aRange3]);
    return self;
},
args: ["aMode", "aRange1", "aRange2", "aRange3"],
source: "colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x0a    range1 \x09int or float: range for the red or hue depending on the current color mode\x0a\x09range2 \x09int or float: range for the green or saturation depending on the current color mode\x0a\x09range3 \x09int or float: range for the blue or brightness depending on the current color mode\x22\x0a    \x0a\x09processing colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3\x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
messageSends: ["colorMode:range1:range2:range3:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_range1_range2_range3_range4_",
smalltalk.method({
selector: "colorMode:range1:range2:range3:range4:",
category: 'color settings',
fn: function (aMode, aRange1, aRange2, aRange3, aRange4) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_range1_range2_range3_range4_", [aMode, aRange1, aRange2, aRange3, aRange4]);
    return self;
},
args: ["aMode", "aRange1", "aRange2", "aRange3", "aRange4"],
source: "colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3 range4: aRange4\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x0a    range1 \x09int or float: range for the red or hue depending on the current color mode\x0a\x09range2 \x09int or float: range for the green or saturation depending on the current color mode\x0a\x09range3 \x09int or float: range for the blue or brightness depending on the current color mode\x0a    range4 \x09int or float: range for the alpha\x22\x0a    \x0a\x09processing colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3 range4: aRange4\x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
messageSends: ["colorMode:range1:range2:range3:range4:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_range_",
smalltalk.method({
selector: "colorMode:range:",
category: 'color settings',
fn: function (aMode, aRange) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_range_", [aMode, aRange]);
    return self;
},
args: ["aMode", "aRange"],
source: "colorMode: aMode range: aRange\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x0a    range \x09int or float: range for all color elements\x22\x0a    \x0a\x09processing colorMode: aMode range: aRange\x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
messageSends: ["colorMode:range:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorValue1_value2_value3_",
smalltalk.method({
selector: "colorValue1:value2:value3:",
category: 'color creating and reading',
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_value2_value3_", [aValue1, aValue2, aValue3]);
    return $1;
},
args: ["aValue1", "aValue2", "aValue3"],
source: "colorValue1: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x22\x0a    \x0a\x09^processing color: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a     \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
messageSends: ["color:value2:value3:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorValue1_value2_value3_alpha_",
smalltalk.method({
selector: "colorValue1:value2:value3:alpha:",
category: 'color creating and reading',
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return $1;
},
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "colorValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09 ^processing color: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
messageSends: ["color:value2:value3:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveDetail_",
smalltalk.method({
selector: "curveDetail:",
category: 'curves',
fn: function (aDetailint) {
    var self = this;
    smalltalk.send(self['@processing'], "_curverDetail_", [aDetailint]);
    return self;
},
args: ["aDetailint"],
source: "curveDetail: aDetailint\x0a\x09\x22Sets the resolution at which curves display. The default value is 20. This function is only useful when using the P3D or OPENGL renderer as the default (JAVA2D) renderer does not use this information.\x22\x0a\x09processing curverDetail: aDetailint",
messageSends: ["curverDetail:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curvePointA_b_c_d_t_",
smalltalk.method({
selector: "curvePointA:b:c:d:t:",
category: 'curves',
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_curvePoint_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
},
args: ["anA", "aB", "aC", "aD", "aT"],
source: "curvePointA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing curvePoint: anA b: aB c: aC d: aD t: aT",
messageSends: ["curvePoint:b:c:d:t:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveTangentA_b_c_d_t_",
smalltalk.method({
selector: "curveTangentA:b:c:d:t:",
category: 'curves',
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveTangent_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
},
args: ["anA", "aB", "aC", "aD", "aT"],
source: "curveTangentA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing curveTangent: anA b: aB c: aC d: aD t: aT",
messageSends: ["curveTangent:b:c:d:t:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveTightness_",
smalltalk.method({
selector: "curveTightness:",
category: 'curves',
fn: function (anIntOrFloat) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveTightness_", [anIntOrFloat]);
    return self;
},
args: ["anIntOrFloat"],
source: "curveTightness: anIntOrFloat\x0a\x09\x22Modifies the quality of forms created with curve() and curveVertex(). \x0a    The parameter squishy determines how the curve fits to the vertex points. \x0a    The value 0.0 is the default value for squishy (this value defines the curves to be Catmull-Rom splines) and the value 1.0 connects all the points with straight lines. \x0a    Values within the range -5.0 and 5.0 will deform the curves but will leave them recognizable and as values increase in magnitude, they will continue to deform.\x22\x0a    \x0a\x09processing curveTightness: anIntOrFloat",
messageSends: ["curveTightness:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveVertexX_y_",
smalltalk.method({
selector: "curveVertexX:y:",
category: 'vertex',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveVertex_y_", [aX, aY]);
    return self;
},
args: ["aX", "aY"],
source: "curveVertexX: aX y: aY\x0a\x09\x22x \x09The x-coordinate of the vertex, either a float or int\x0a\x09y \x09The y-coordinate of the vertex, either a float or int\x0a\x09z \x09The z-coordinate of the vertex, either a float or int\x22\x0a    \x0a\x09processing curveVertex: aX y: aY\x0a    \x0a    \x22Specifies vertex coordinates for curves. \x0a    This function may only be used between beginShape() and endShape() and \x0a    only when there is no MODE parameter specified to beginShape(). \x0a    The first and last points in a series of curveVertex() lines will be used to guide the beginning and \x0a    end of a the curve. A minimum of four points is required to draw a tiny curve between \x0a    the second and third points. \x0a    Adding a fifth point with curveVertex() will draw the curve between the second, third, and fourth points. \x0a    The curveVertex() function is an implementation of Catmull-Rom splines. \x0a    Using the 3D version of requires rendering with P3D or OPENGL (see the Environment reference for more information).\x22",
messageSends: ["curveVertex:y:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveVertexX_y_z_",
smalltalk.method({
selector: "curveVertexX:y:z:",
category: 'vertex',
fn: function (aX, aY, aZ) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveVertex_y_z_", [aX, aY, aZ]);
    return self;
},
args: ["aX", "aY", "aZ"],
source: "curveVertexX: aX y: aY z: aZ\x0a\x09\x22x \x09The x-coordinate of the vertex, either a float or int\x0a\x09y \x09The y-coordinate of the vertex, either a float or int\x0a\x09z \x09The z-coordinate of the vertex, either a float or int\x22\x0a    \x0a\x09processing curveVertex: aX y: aY z: aZ\x0a    \x0a    \x22Specifies vertex coordinates for curves. \x0a    This function may only be used between beginShape() and endShape() and \x0a    only when there is no MODE parameter specified to beginShape(). \x0a    The first and last points in a series of curveVertex() lines will be used to guide the beginning and \x0a    end of a the curve. A minimum of four points is required to draw a tiny curve between \x0a    the second and third points. \x0a    Adding a fifth point with curveVertex() will draw the curve between the second, third, and fourth points. \x0a    The curveVertex() function is an implementation of Catmull-Rom splines. \x0a    Using the 3D version of requires rendering with P3D or OPENGL (see the Environment reference for more information).\x22",
messageSends: ["curveVertex:y:z:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveX1_y1_x2_y2_x3_y3_x4_y4_",
smalltalk.method({
selector: "curveX1:y1:x2:y2:x3:y3:x4:y4:",
category: 'curves',
fn: function (aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4) {
    var self = this;
    smalltalk.send(self['@processing'], "_curve_y1_x2_y2_x3_y3_x4_y4_", [aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4]);
    return self;
},
args: ["aX1", "aY1", "aX2", "aY2", "aX3", "aY3", "aX4", "aY4"],
source: "curveX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor\x0a\x09x2, y2, z2 \x09int or float: coordinates for the first point\x0a\x09x3, y3, z3 \x09int or float: coordinates for the second point\x0a\x09x4, y4, z4 \x09int or float: coordinates for the second anchor\x22\x0a\x0a\x09processing curve: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4",
messageSends: ["curve:y1:x2:y2:x3:y3:x4:y4:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveX1_y1_z1_x2_y2_z2_x3_y3_z3_x4_y4_z4_",
smalltalk.method({
selector: "curveX1:y1:z1:x2:y2:z2:x3:y3:z3:x4:y4:z4:",
category: 'curves',
fn: function (aX1, aY1, aZ1, aX2, aY2, aZ2, aX3, aY3, aZ3, aX4, aY4, aZ4) {
    var self = this;
    smalltalk.send(self['@processing'], "_curve_y1_z1_x2_y2_z2_x3_y3_z3_x4_y4_z4_", [aX1, aY1, aZ1, aX2, aY2, aZ2, aX3, aY3, aZ3, aX4, aY4, aZ4]);
    return self;
},
args: ["aX1", "aY1", "aZ1", "aX2", "aY2", "aZ2", "aX3", "aY3", "aZ3", "aX4", "aY4", "aZ4"],
source: "curveX1: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2  x3: aX3  y3: aY3 z3: aZ3 x4: aX4 y4: aY4 z4: aZ4\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor\x0a\x09x2, y2, z2 \x09int or float: coordinates for the first point\x0a\x09x3, y3, z3 \x09int or float: coordinates for the second point\x0a\x09x4, y4, z4 \x09int or float: coordinates for the second anchor\x22\x0a\x0a\x09processing curve: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2  x3: aX3  y3: aY3 z3: aZ3 x4: aX4 y4: aY4 z4: aZ4",
messageSends: ["curve:y1:z1:x2:y2:z2:x3:y3:z3:x4:y4:z4:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
category: 'processing overrides',
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
},
args: [],
source: " draw\x0a \x0a \x09self subclassResponsibility",
messageSends: ["subclassResponsibility"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_ellipseMode_",
smalltalk.method({
selector: "ellipseMode:",
category: 'attributes',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_ellipseMode_", [aMode]);
    return self;
},
args: ["aMode"],
source: "ellipseMode: aMode\x0a\x09\x22MODE \x09Either CENTER, RADIUS, CORNER, or CORNERS.\x22\x0a    \x0a\x09processing ellipseMode: aMode",
messageSends: ["ellipseMode:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_ellipseX_y_width_height_",
smalltalk.method({
selector: "ellipseX:y:width:height:",
category: '2D primitives',
fn: function (aX, aY, aWidth, aHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_ellipse_y_width_height_", [aX, aY, aWidth, aHeight]);
    return self;
},
args: ["aX", "aY", "aWidth", "aHeight"],
source: "ellipseX: aX y: aY width: aWidth height: aHeight \x0a\x0a\x09processing ellipse: aX y: aY width: aWidth height: aHeight ",
messageSends: ["ellipse:y:width:height:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_endShape",
smalltalk.method({
selector: "endShape",
category: 'vertex',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_endShape", []);
    return self;
},
args: [],
source: "endShape\x0a\x0a\x09processing endShape\x0a    \x0a    \x22The endShape() function is the companion to beginShape() and may only be called after beginShape(). \x0a    When endshape() is called, all of image data defined since the previous call to beginShape() is written\x0a    into the image buffer. \x0a    The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).\x22",
messageSends: ["endShape"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_endShape_",
smalltalk.method({
selector: "endShape:",
category: 'vertex',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_endShape_", [aMode]);
    return self;
},
args: ["aMode"],
source: "endShape: aMode\x0a\x09\x22MODE \x09Use CLOSE to close the shape\x22\x0a    \x0a\x09processing endShape: aMode\x0a    \x0a    \x22The endShape() function is the companion to beginShape() and may only be called after beginShape(). \x0a    When endshape() is called, all of image data defined since the previous call to beginShape() is written\x0a    into the image buffer. \x0a    The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).\x22",
messageSends: ["endShape:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillColor_",
smalltalk.method({
selector: "fillColor:",
category: 'color settings',
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_", [aColor]);
    return self;
},
args: ["aColor"],
source: "fillColor: aColor \x0a\x09\x22color \x09color: any value of the color datatype\x22\x0a    \x0a\x09processing fill: aColor \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillColor_alpha_",
smalltalk.method({
selector: "fillColor:alpha:",
category: 'color settings',
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_alpha_", [aColor, anAlpha]);
    return self;
},
args: ["aColor", "anAlpha"],
source: "fillColor: aColor alpha: anAlpha\x0a\x09\x22color \x09color: any value of the color datatype\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing fill: aColor alpha: anAlpha \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillGray_",
smalltalk.method({
selector: "fillGray:",
category: 'color settings',
fn: function (aGray) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_", [aGray]);
    return self;
},
args: ["aGray"],
source: "fillGray: aGray \x0a\x09\x22gray \x09int or float: number specifying value between white and blackl\x22\x0a    \x0a\x09processing fill: aGray \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillGray_alpha_",
smalltalk.method({
selector: "fillGray:alpha:",
category: 'color settings',
fn: function (aGray, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_alpha_", [aGray, anAlpha]);
    return self;
},
args: ["aGray", "anAlpha"],
source: "fillGray: aGray alpha: anAlpha\x0a\x09\x22gray \x09int or float: number specifying value between white and black\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing fill: aGray alpha: anAlpha\x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillHex_",
smalltalk.method({
selector: "fillHex:",
category: 'color settings',
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_", [aHex]);
    return self;
},
args: ["aHex"],
source: "fillHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x22\x0a    \x0a\x09processing fill: aHex\x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillHex_alpha_",
smalltalk.method({
selector: "fillHex:alpha:",
category: 'color settings',
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_alpha_", [aHex, anAlpha]);
    return self;
},
args: ["aHex", "anAlpha"],
source: "fillHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing fill: aHex alpha: anAlpha \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillValue1_value2_value3_",
smalltalk.method({
selector: "fillValue1:value2:value3:",
category: 'color settings',
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
},
args: ["aValue1", "aValue2", "aValue3"],
source: "fillValue1: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x22\x0a    \x0a\x09processing fill: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:value2:value3:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillValue1_value2_value3_alpha_",
smalltalk.method({
selector: "fillValue1:value2:value3:alpha:",
category: 'color settings',
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
},
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "fillValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing fill: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
messageSends: ["fill:value2:value3:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_green_",
smalltalk.method({
selector: "green:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_green_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "green: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing green: aColor\x0a    \x0a   \x22 \x09Extracts the green value from a color, scaled to match current colorMode(). \x0a   This value is always returned as a float so be careful not to assign it to an int value.\x0a\x09The green() function is easy to use and undestand, but is slower than another technique. \x0a    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, \x0a    use the >> (right shift) operator with a bit mask. \x0a    For example, the following two lines of code are equivalent:\x0a\x09float r1 = green(myColor);\x0a\x09float r2 = myColor >> 16 & 0xFF;\x22",
messageSends: ["green:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_hue_",
smalltalk.method({
selector: "hue:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_hue_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "hue: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing hue: aColor\x0a    \x0a   \x22Extracts the hue value from a color.\x22",
messageSends: ["hue:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_initalizeFunctions",
smalltalk.method({
selector: "initalizeFunctions",
category: 'initialization',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_at_put_", ["draw", function () {return smalltalk.send(self, "_draw", []);}]);
    return self;
},
args: [],
source: "initalizeFunctions\x0a\x0a\x09processing at: 'draw' put: [self draw].",
messageSends: ["at:put:", "draw"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
category: 'initialization',
fn: function () {
    var self = this;
    self['@processing'] = Processing.instances[0];
    smalltalk.send(self, "_initalizeFunctions", []);
    return self;
},
args: [],
source: "initialize\x0a\x0a\x09processing := <Processing.instances[0]>.\x0a\x0a\x09self initalizeFunctions.",
messageSends: ["initalizeFunctions"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_lerpColor1_color2_amt_",
smalltalk.method({
selector: "lerpColor1:color2:amt:",
category: 'color creating and reading',
fn: function (aColor1, aColor2, aAMT) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_lerpColor_color2_amt_", [aColor1, aColor2, aAMT]);
    return $1;
},
args: ["aColor1", "aColor2", "aAMT"],
source: "lerpColor1: aColor1 color2: aColor2 amt: aAMT\x0a\x09\x22c1 \x09color: interpolate from this color\x0a\x09c2 \x09color: interpolate to this color\x0a\x09amt \x09float: between 0.0 and 1.0\x22\x0a    \x0a\x09^processing lerpColor: aColor1 color2: aColor2 amt: aAMT\x0a    \x0a   \x22Calculates a color or colors between two color at a specific increment. \x0a   The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, \x0a   0.1 is very near the first point, 0.5 is half-way in between, etc.\x22",
messageSends: ["lerpColor:color2:amt:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_lineX1_y1_x2_y2_",
smalltalk.method({
selector: "lineX1:y1:x2:y2:",
category: '2D primitives',
fn: function (aX1, aY1, aX2, aY2) {
    var self = this;
    smalltalk.send(self['@processing'], "_line_y1_x2_y2_", [aX1, aY1, aX2, aY2]);
    return self;
},
args: ["aX1", "aY1", "aX2", "aY2"],
source: "lineX1: aX1  y1: aY1 x2: aX2 y2: aY2 \x0a\x0a\x09processing line: aX1 y1: aY1 x2: aX2 y2: aY2 ",
messageSends: ["line:y1:x2:y2:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_lineX1_y1_z1_x2_y2_z2_",
smalltalk.method({
selector: "lineX1:y1:z1:x2:y2:z2:",
category: '2D primitives',
fn: function (aX1, aY1, aZ1, aX2, aY2, aZ2) {
    var self = this;
    smalltalk.send(self['@processing'], "_line_y1_z1_x2_y2_z2_", [aX1, aY1, aZ1, aX2, aY2, aZ2]);
    return self;
},
args: ["aX1", "aY1", "aZ1", "aX2", "aY2", "aZ2"],
source: "lineX1: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2\x0a\x0a\x09processing line: aX1 y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2",
messageSends: ["line:y1:z1:x2:y2:z2:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noFill",
smalltalk.method({
selector: "noFill",
category: 'color settings',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noFill", []);
    return self;
},
args: [],
source: "noFill\x0a\x09\x22Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen.\x22\x0a    \x0a\x09processing noFill",
messageSends: ["noFill"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noSmooth",
smalltalk.method({
selector: "noSmooth",
category: 'attributes',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noSmooth", []);
    return self;
},
args: [],
source: "noSmooth\x0a\x09\x22Draws all geometry with jagged (aliased) edges.\x22\x0a    \x0a\x09processing noSmooth",
messageSends: ["noSmooth"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noStroke",
smalltalk.method({
selector: "noStroke",
category: 'color settings',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noStroke", []);
    return self;
},
args: [],
source: "noStroke\x0a\x09\x22Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.\x22\x0a    \x0a\x09processing noStroke",
messageSends: ["noStroke"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_pointX_y_",
smalltalk.method({
selector: "pointX:y:",
category: '2D primitives',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_point_y_", [aX, aY]);
    return self;
},
args: ["aX", "aY"],
source: "pointX: aX y: aY \x0a\x0a\x09processing point: aX y: aY ",
messageSends: ["point:y:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_pointX_y_z_",
smalltalk.method({
selector: "pointX:y:z:",
category: '2D primitives',
fn: function (aX, aY, aZ) {
    var self = this;
    smalltalk.send(self['@processing'], "_point_y_z_", [aX, aY, aZ]);
    return self;
},
args: ["aX", "aY", "aZ"],
source: "pointX: aX y: aY z: aZ\x0a\x0a\x09processing point: aX y: aY z: aZ",
messageSends: ["point:y:z:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_processing",
smalltalk.method({
selector: "processing",
category: 'accessing',
fn: function () {
    var self = this;
    return self['@processing'];
},
args: [],
source: "processing\x0a \x0a \x09^processing",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_quadX1_y1_x2_y2_x3_y3_x4_y4_",
smalltalk.method({
selector: "quadX1:y1:x2:y2:x3:y3:x4:y4:",
category: '2D primitives',
fn: function (aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4) {
    var self = this;
    smalltalk.send(self['@processing'], "_quad_y1_x2_y2_x3_y3_x4_y4_", [aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4]);
    return self;
},
args: ["aX1", "aY1", "aX2", "aY2", "aX3", "aY3", "aX4", "aY4"],
source: "quadX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4\x0a\x0a\x09processing quad: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4",
messageSends: ["quad:y1:x2:y2:x3:y3:x4:y4:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectMode_",
smalltalk.method({
selector: "rectMode:",
category: 'attributes',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_rectMode_", [aMode]);
    return self;
},
args: ["aMode"],
source: "rectMode: aMode\x0a\x09\x22MODE \x09Either CENTER, RADIUS, CORNER, or CORNERS.\x22\x0a    \x0a\x09processing rectMode: aMode\x0a    \x0a    \x22Modifies the location from which rectangles draw. \x0a    The default mode is rectMode(CORNER), which specifies the location to be the upper left corner \x0a    of the shape and uses the third and fourth parameters of rect() to specify the width and height. \x0a    The syntax rectMode(CORNERS) uses the first and second parameters of rect() to set the location of \x0a    one corner and uses the third and fourth parameters to set the opposite corner. \x0a    The syntax rectMode(CENTER) draws the image from its center point and uses the third and \x0a    forth parameters of rect() to specify the image's width and height. \x0a    The syntax rectMode(RADIUS) draws the image from its center point and uses the third and #\x0a    forth parameters of rect() to specify half of the image's width and height. \x0a    The parameter must be written in \x22\x22ALL CAPS\x22\x22 because Processing is a case sensitive language. \x0a    Note: In version 125, the mode named CENTER_RADIUS was shortened to RADIUS.\x22",
messageSends: ["rectMode:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectX_y_width_height_",
smalltalk.method({
selector: "rectX:y:width:height:",
category: '2D primitives',
fn: function (aX, aY, aWidth, aHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_rect_y_width_height_", [aX, aY, aWidth, aHeight]);
    return self;
},
args: ["aX", "aY", "aWidth", "aHeight"],
source: "rectX: aX y: aY width: aWidth height: aHeight \x0a\x0a\x09processing rect: aX y: aY width: aWidth height: aHeight ",
messageSends: ["rect:y:width:height:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectX_y_width_height_radius_",
smalltalk.method({
selector: "rectX:y:width:height:radius:",
category: '2D primitives',
fn: function (aX, aY, aWidth, aHeight, aRadius) {
    var self = this;
    smalltalk.send(self['@processing'], "_rect_y_width_height_radius_", [aX, aY, aWidth, aHeight, aRadius]);
    return self;
},
args: ["aX", "aY", "aWidth", "aHeight", "aRadius"],
source: "rectX: aX y: aY width: aWidth height: aHeight radius: aRadius\x0a\x0a\x09processing rect: aX y: aY width: aWidth height: aHeight radius: aRadius",
messageSends: ["rect:y:width:height:radius:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectX_y_width_height_tlradius_trradius_brradius_blradius_",
smalltalk.method({
selector: "rectX:y:width:height:tlradius:trradius:brradius:blradius:",
category: '2D primitives',
fn: function (aX, aY, aWidth, aHeight, aTLRadius, aTRRadius, aBRRadius, aBLRadius) {
    var self = this;
    smalltalk.send(self['@processing'], "_rect_y_width_height_tlradius_trradius_brradius_blradius_", [aX, aY, aWidth, aHeight, aTLRadius, aTRRadius, aBRRadius, aBLRadius]);
    return self;
},
args: ["aX", "aY", "aWidth", "aHeight", "aTLRadius", "aTRRadius", "aBRRadius", "aBLRadius"],
source: "rectX: aX y: aY width: aWidth height: aHeight tlradius: aTLRadius  trradius: aTRRadius  brradius:  aBRRadius blradius: aBLRadius\x0a\x0a\x09processing rect: aX y: aY width: aWidth height: aHeight tlradius: aTLRadius  trradius: aTRRadius  brradius:  aBRRadius blradius: aBLRadius",
messageSends: ["rect:y:width:height:tlradius:trradius:brradius:blradius:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_red_",
smalltalk.method({
selector: "red:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_red_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "red: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing red: aColor\x0a    \x0a   \x22 \x09Extracts the red value from a color, scaled to match current colorMode(). \x0a   This value is always returned as a float so be careful not to assign it to an int value.\x0a\x09The red() function is easy to use and undestand, but is slower than another technique. \x0a    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, \x0a    use the >> (right shift) operator with a bit mask. \x0a    For example, the following two lines of code are equivalent:\x0a\x09float r1 = red(myColor);\x0a\x09float r2 = myColor >> 16 & 0xFF;\x22",
messageSends: ["red:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_saturation_",
smalltalk.method({
selector: "saturation:",
category: 'color creating and reading',
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_saturation_", [aColor]);
    return $1;
},
args: ["aColor"],
source: "saturation: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing saturation: aColor\x0a    \x0a   \x22Extracts the saturation value from a color.\x22",
messageSends: ["saturation:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_smooth",
smalltalk.method({
selector: "smooth",
category: 'attributes',
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_smooth", []);
    return self;
},
args: [],
source: "smooth\x0a\x09\x22Draws all geometry with smooth (anti-aliased) edges. \x0a    This will slow down the frame rate of the application, but will enhance the visual refinement.\x0a\x09Starting with release 0124, when using the default (JAVA2D) renderer, smooth() will also improve image quality of resized images.\x22\x0a    \x0a\x09processing smooth",
messageSends: ["smooth"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_sphere_",
smalltalk.method({
selector: "sphere:",
category: '3D primitives',
fn: function (aRadius) {
    var self = this;
    smalltalk.send(self['@processing'], "_sphere_", [aRadius]);
    return self;
},
args: ["aRadius"],
source: "sphere: aRadius\x0a\x09\x22radius \x09int or float: the radius of the sphere\x22\x0a    \x0a\x09processing sphere: aRadius",
messageSends: ["sphere:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_sphereDetail_",
smalltalk.method({
selector: "sphereDetail:",
category: '3D primitives',
fn: function (aRes) {
    var self = this;
    smalltalk.send(self['@processing'], "_sphereDetail_", [aRes]);
    return self;
},
args: ["aRes"],
source: "sphereDetail: aRes\x0a\x09\x22res \x09int: number of segments (minimum of 3) used per full circle revolution\x22\x0a    \x0a\x09processing sphereDetail: aRes",
messageSends: ["sphereDetail:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_sphereDetail_vres_",
smalltalk.method({
selector: "sphereDetail:vres:",
category: '3D primitives',
fn: function (aURes, aVRes) {
    var self = this;
    smalltalk.send(self['@processing'], "_sphereDetail_vres_", [aURes, aVRes]);
    return self;
},
args: ["aURes", "aVRes"],
source: "sphereDetail: aURes vres: aVRes\x0a\x09\x22ures \x09int: number of segments used longitudinally per full circle revolution\x0a\x09 vres \x09int: number of segments used latitudinally from top to bottom\x22\x0a    \x0a\x09processing sphereDetail: aURes vres: aVRes",
messageSends: ["sphereDetail:vres:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeCap_",
smalltalk.method({
selector: "strokeCap:",
category: 'attributes',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_strokeCap_", [aMode]);
    return self;
},
args: ["aMode"],
source: "strokeCap: aMode\x0a\x09\x22MODE \x09Either SQUARE, PROJECT, or ROUND.\x22\x0a    \x0a\x09processing strokeCap: aMode\x0a    \x0a    \x22Sets the style for rendering line endings. \x0a    These ends are either squared, extended, or rounded and specified with the \x0a    corresponding parameters SQUARE, PROJECT, and ROUND. The default cap is ROUND.\x0a\x09This function is not available with the P2D, P3D, or OPENGL renderers. \x0a    More information about the renderers can be found in the size() reference.\x22",
messageSends: ["strokeCap:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeColor_",
smalltalk.method({
selector: "strokeColor:",
category: 'color settings',
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_", [aColor]);
    return self;
},
args: ["aColor"],
source: "strokeColor: aColor \x0a\x09\x22color \x09color: any value of the color datatype\x22\x0a    \x0a\x09processing stroke: aColor \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeColor_alpha_",
smalltalk.method({
selector: "strokeColor:alpha:",
category: 'color settings',
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_alpha_", [aColor, anAlpha]);
    return self;
},
args: ["aColor", "anAlpha"],
source: "strokeColor: aColor alpha: anAlpha\x0a\x09\x22color \x09color: any value of the color datatype\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing stroke: aColor alpha: anAlpha \x0a    \x0a   \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeGray_",
smalltalk.method({
selector: "strokeGray:",
category: 'color settings',
fn: function (aGray) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_", [aGray]);
    return self;
},
args: ["aGray"],
source: "strokeGray: aGray \x0a\x09\x22gray \x09int or float: number specifying value between white and blackl\x22\x0a    \x0a\x09processing stroke: aGray \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeGray_alpha_",
smalltalk.method({
selector: "strokeGray:alpha:",
category: 'color settings',
fn: function (aGray, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_alpha_", [aGray, anAlpha]);
    return self;
},
args: ["aGray", "anAlpha"],
source: "strokeGray: aGray alpha: anAlpha\x0a\x09\x22gray \x09int or float: number specifying value between white and black\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing stroke: aGray alpha: anAlpha\x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeHex_",
smalltalk.method({
selector: "strokeHex:",
category: 'color settings',
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_", [aHex]);
    return self;
},
args: ["aHex"],
source: "strokeHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x22\x0a    \x0a\x09processing stroke: aHex\x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeHex_alpha_",
smalltalk.method({
selector: "strokeHex:alpha:",
category: 'color settings',
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_alpha_", [aHex, anAlpha]);
    return self;
},
args: ["aHex", "anAlpha"],
source: "strokeHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing stroke: aHex alpha: anAlpha \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeJoin_",
smalltalk.method({
selector: "strokeJoin:",
category: 'attributes',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_strokeJoin_", [aMode]);
    return self;
},
args: ["aMode"],
source: "strokeJoin: aMode\x0a\x09\x22MODE \x09Either MITER, BEVEL, or ROUND\x22\x0a    \x0a\x09processing strokeJoin: aMode\x0a    \x0a    \x22Sets the style of the joints which connect line segments. \x0a    These joints are either mitered, beveled, or rounded and specified with \x0a    the corresponding parameters MITER, BEVEL, and ROUND. The default joint is MITER.\x0a\x09This function is not available with the P2D, P3D, or OPENGL renderers. \x0a    More information about the renderers can be found in the size() reference.\x22",
messageSends: ["strokeJoin:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeValue1_value2_value3_",
smalltalk.method({
selector: "strokeValue1:value2:value3:",
category: 'color settings',
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
},
args: ["aValue1", "aValue2", "aValue3"],
source: "strokeValue1: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x22\x0a    \x0a\x09processing stroke: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:value2:value3:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeValue1_value2_value3_alpha_",
smalltalk.method({
selector: "strokeValue1:value2:value3:alpha:",
category: 'color settings',
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
},
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "strokeValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing stroke: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a   \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
messageSends: ["stroke:value2:value3:alpha:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeWeight_",
smalltalk.method({
selector: "strokeWeight:",
category: 'attributes',
fn: function (aWidth) {
    var self = this;
    smalltalk.send(self['@processing'], "_strokeWeight_", [aWidth]);
    return self;
},
args: ["aWidth"],
source: "strokeWeight: aWidth\x0a\x09\x22width \x09int or float: the weight (in pixels) of the stroke\x22\x0a    \x0a\x09processing strokeWeight: aWidth\x0a    \x0a    \x22Sets the width of the stroke used for lines, points, and the border around shapes. \x0a    All widths are set in units of pixels. \x0a    This function does not work with the P3D renderer (please see the size() reference for more information).\x22",
messageSends: ["strokeWeight:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_texture_",
smalltalk.method({
selector: "texture:",
category: 'vertex',
fn: function (aPjsImage) {
    var self = this;
    smalltalk.send(self['@processing'], "_texture_", [smalltalk.send(aPjsImage, "_pjsImage", [])]);
    return self;
},
args: ["aPjsImage"],
source: "texture: aPjsImage\x0a\x09\x22Sets a texture to be applied to vertex points. \x0a    The texture() function must be called between beginShape() and endShape() and before any calls to vertex().\x0a\x09When textures are in use, the fill color is ignored. Instead, \x0a    use tint() to specify the color of the texture as it is applied to the shape.\x22\x0a    \x0a\x09processing texture: aPjsImage pjsImage\x0a    ",
messageSends: ["texture:", "pjsImage"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_textureMode_",
smalltalk.method({
selector: "textureMode:",
category: 'vertex',
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_textureMode_", [aMode]);
    return self;
},
args: ["aMode"],
source: "textureMode: aMode\x0a\x09\x22MODE \x09either IMAGE or NORMALIZED\x22\x0a    \x0a\x09processing textureMode: aMode\x0a    \x0a    \x22Sets the coordinate space for texture mapping. \x0a    There are two options, IMAGE, which refers to the actual coordinates of the image, and NORMALIZED, \x0a    which refers to a normalized space of values ranging from 0 to 1. \x0a    The default mode is IMAGE. In IMAGE, if an image is 100 x 200 pixels, mapping the image onto the \x0a    entire size of a quad would require the points (0,0) (0,100) (100,200) (0,200). \x0a    The same mapping in NORMAL_SPACE is (0,0) (0,1) (1,1) (0,1).\x22",
messageSends: ["textureMode:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_triangleX1_y1_x2_y2_x3_y3_",
smalltalk.method({
selector: "triangleX1:y1:x2:y2:x3:y3:",
category: '2D primitives',
fn: function (aX1, aY1, aX2, aY2, aX3, aY3) {
    var self = this;
    smalltalk.send(self['@processing'], "_triangle_y1_x2_y2_x3_y3_", [aX1, aY1, aX2, aY2, aX3, aY3]);
    return self;
},
args: ["aX1", "aY1", "aX2", "aY2", "aX3", "aY3"],
source: "triangleX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3\x0a\x0a\x09processing triangle: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3",
messageSends: ["triangle:y1:x2:y2:x3:y3:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_",
smalltalk.method({
selector: "vertexX:y:",
category: 'vertex',
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_", [aX, aY]);
    return self;
},
args: ["aX", "aY"],
source: "vertexX: aX y: aY  \x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY \x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
messageSends: ["vertex:y:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_u_v_",
smalltalk.method({
selector: "vertexX:y:u:v:",
category: 'vertex',
fn: function (aX, aY, anU, aV) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_u_v_", [aX, aY, anU, aV]);
    return self;
},
args: ["aX", "aY", "anU", "aV"],
source: "vertexX: aX y: aY u: anU v: aV\x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY u: anU v: aV\x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
messageSends: ["vertex:y:u:v:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_z_",
smalltalk.method({
selector: "vertexX:y:z:",
category: 'vertex',
fn: function (aX, aY, aZ) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_z_", [aX, aY, aZ]);
    return self;
},
args: ["aX", "aY", "aZ"],
source: "vertexX: aX y: aY z: aZ \x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY z: aZ \x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
messageSends: ["vertex:y:z:"],
referencedClasses: []
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_z_u_v_",
smalltalk.method({
selector: "vertexX:y:z:u:v:",
category: 'vertex',
fn: function (aX, aY, aZ, anU, aV) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_z_u_v_", [aX, aY, aZ, anU, aV]);
    return self;
},
args: ["aX", "aY", "aZ", "anU", "aV"],
source: "vertexX: aX y: aY z: aZ u: anU v: aV\x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY z: aZ u: anU v: aV\x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
messageSends: ["vertex:y:z:u:v:"],
referencedClasses: []
}),
smalltalk.PjsSketch);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new", []);
    return $1;
},
args: [],
source: "start\x0a\x0a\x09^self new",
messageSends: ["new"],
referencedClasses: []
}),
smalltalk.PjsSketch.klass);


smalltalk.addClass('PjsVector', smalltalk.Object, ['pjsVector'], 'Processing-Core');
smalltalk.addMethod(
"_addVector1_vector2_target_",
smalltalk.method({
selector: "addVector1:vector2:target:",
category: 'not yet classified',
fn: function (aPjsVector1, aPjsVector2, aTargetVectorOrNull) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_add_vector2_target_", [smalltalk.send(aPjsVector1, "_pjsVector", []), smalltalk.send(aPjsVector2, "_pjsVector", []), aTargetVectorOrNull]);
    return self;
},
args: ["aPjsVector1", "aPjsVector2", "aTargetVectorOrNull"],
source: "addVector1: aPjsVector1 vector2: aPjsVector2 target: aTargetVectorOrNull\x0a\x0a\x09pjsVector add: aPjsVector1 pjsVector vector2: aPjsVector2 pjsVector target: aTargetVectorOrNull",
messageSends: ["add:vector2:target:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_addVector_",
smalltalk.method({
selector: "addVector:",
category: 'not yet classified',
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_add_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
},
args: ["aPjsVector"],
source: "addVector: aPjsVector\x0a\x0a\x09pjsVector add: aPjsVector pjsVector",
messageSends: ["add:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_addX_y_z_",
smalltalk.method({
selector: "addX:y:z:",
category: 'not yet classified',
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_add_y_z_", [aFloatX, aFLoatY, aFloatZ]);
    return self;
},
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "addX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09pjsVector add: aFloatX y: aFLoatY z: aFloatZ",
messageSends: ["add:y:z:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_array", []);
    return $1;
},
args: [],
source: "asArray\x0a\x0a\x09^pjsVector array",
messageSends: ["array"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_crossX_y_z_",
smalltalk.method({
selector: "crossX:y:z:",
category: 'not yet classified',
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(self['@pjsVector'], "_cross_y_z_", [aFloatX, aFLoatY, aFloatZ])]);
    return instance;
},
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "crossX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09| instance   |\x0a\x0a  instance := super new.\x0a   \x0a  instance initPjsVector: ( pjsVector cross: aFloatX y: aFLoatY z: aFloatZ).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsVector:", "cross:y:z:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_dist_",
smalltalk.method({
selector: "dist:",
category: 'not yet classified',
fn: function (aPjsVector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_dist_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return $1;
},
args: ["aPjsVector"],
source: "dist: aPjsVector \x0a\x0a\x09^pjsVector dist: aPjsVector pjsVector ",
messageSends: ["dist:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_div_",
smalltalk.method({
selector: "div:",
category: 'not yet classified',
fn: function (aScalarFloat) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_div_", [aScalarFloat]);
    return self;
},
args: ["aScalarFloat"],
source: "div: aScalarFloat\x0a\x0a\x09pjsVector div: aScalarFloat",
messageSends: ["div:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_divVector_",
smalltalk.method({
selector: "divVector:",
category: 'not yet classified',
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_div_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
},
args: ["aPjsVector"],
source: "divVector: aPjsVector \x0a\x0a\x09pjsVector div: aPjsVector pjsVector ",
messageSends: ["div:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_dot_",
smalltalk.method({
selector: "dot:",
category: 'not yet classified',
fn: function (aPjsVector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_dot_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return $1;
},
args: ["aPjsVector"],
source: "dot: aPjsVector \x0a\x0a\x09^pjsVector dot: aPjsVector pjsVector ",
messageSends: ["dot:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_dotX_y_z_",
smalltalk.method({
selector: "dotX:y:z:",
category: 'not yet classified',
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_dot_y_z_", [aFloatX, aFLoatY, aFloatZ]);
    return $1;
},
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "dotX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09^pjsVector dot: aFloatX y: aFLoatY z: aFloatZ",
messageSends: ["dot:y:z:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_get",
smalltalk.method({
selector: "get",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_get", []);
    return $1;
},
args: [],
source: "get\x0a\x0a\x09^pjsVector get",
messageSends: ["get"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_get_",
smalltalk.method({
selector: "get:",
category: 'not yet classified',
fn: function (aTarget) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_get_", [aTarget]);
    return $1;
},
args: ["aTarget"],
source: "get: aTarget\x0a\x0a\x09^pjsVector get: aTarget",
messageSends: ["get:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVector",
smalltalk.method({
selector: "initPjsVector",
category: 'not yet classified',
fn: function () {
    var self = this;
    self['@pjsVector'] = new PVector;
    return self;
},
args: [],
source: "initPjsVector\x0a\x0a\x09pjsVector := <new PVector(); >\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVector_",
smalltalk.method({
selector: "initPjsVector:",
category: 'not yet classified',
fn: function (aPVector) {
    var self = this;
    self['@pjsVector'] = aPVector;
    return self;
},
args: ["aPVector"],
source: "initPjsVector: aPVector\x0a\x0a\x09pjsVector := aPVector\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVectorX_y_",
smalltalk.method({
selector: "initPjsVectorX:y:",
category: 'not yet classified',
fn: function (x, y) {
    var self = this;
    self['@pjsVector'] = new PVector(x, y);
    return self;
},
args: ["x", "y"],
source: "initPjsVectorX: x y: y \x0a\x0a\x09pjsVector := <new PVector(x, y); >\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVectorX_y_z_",
smalltalk.method({
selector: "initPjsVectorX:y:z:",
category: 'not yet classified',
fn: function (x, y, z) {
    var self = this;
    self['@pjsVector'] = new PVector(x, y, z);
    return self;
},
args: ["x", "y", "z"],
source: "initPjsVectorX: x y: y z: z\x0a\x0a\x09pjsVector := <new PVector(x, y, z); >\x0a",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_limit_",
smalltalk.method({
selector: "limit:",
category: 'not yet classified',
fn: function (aMaxFloat) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_limit_", [aMaxFloat]);
    return self;
},
args: ["aMaxFloat"],
source: "limit: aMaxFloat\x0a\x0a\x09pjsVector limit: aMaxFloat",
messageSends: ["limit:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_mag",
smalltalk.method({
selector: "mag",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_mag", []);
    return $1;
},
args: [],
source: "mag\x0a\x0a\x09^pjsVector mag",
messageSends: ["mag"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_mult_",
smalltalk.method({
selector: "mult:",
category: 'not yet classified',
fn: function (aScalarFloat) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_mult_", [aScalarFloat]);
    return self;
},
args: ["aScalarFloat"],
source: "mult: aScalarFloat\x0a\x0a\x09pjsVector mult: aScalarFloat",
messageSends: ["mult:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_mult_vector_",
smalltalk.method({
selector: "mult:vector:",
category: 'not yet classified',
fn: function (aScalarFloat, aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_mult_vector_", [aScalarFloat, smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
},
args: ["aScalarFloat", "aPjsVector"],
source: "mult: aScalarFloat vector: aPjsVector\x0a\x0a\x09pjsVector mult: aScalarFloat vector: aPjsVector pjsVector",
messageSends: ["mult:vector:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_normalize",
smalltalk.method({
selector: "normalize",
category: 'not yet classified',
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_normalize", []);
    return self;
},
args: [],
source: "normalize\x0a\x0a\x09pjsVector normalize",
messageSends: ["normalize"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_pjsVector",
smalltalk.method({
selector: "pjsVector",
category: 'not yet classified',
fn: function () {
    var self = this;
    return self['@pjsVector'];
},
args: [],
source: "pjsVector\x0a\x0a\x09^pjsVector",
messageSends: [],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_setSource_",
smalltalk.method({
selector: "setSource:",
category: 'not yet classified',
fn: function (aFloatSourceArray) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_set_", [aFloatSourceArray]);
    return self;
},
args: ["aFloatSourceArray"],
source: "setSource: aFloatSourceArray\x0a\x0a\x09pjsVector set: aFloatSourceArray",
messageSends: ["set:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_setVector_",
smalltalk.method({
selector: "setVector:",
category: 'not yet classified',
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_set_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
},
args: ["aPjsVector"],
source: "setVector: aPjsVector\x0a\x0a\x09pjsVector set: aPjsVector pjsVector",
messageSends: ["set:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_setX_y_z_",
smalltalk.method({
selector: "setX:y:z:",
category: 'not yet classified',
fn: function (aFloatX, aFloatY, aFloatZ) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_set_y_z_", [aFloatX, aFloatY, aFloatZ]);
    return self;
},
args: ["aFloatX", "aFloatY", "aFloatZ"],
source: "setX: aFloatX y: aFloatY z: aFloatZ\x0a\x0a\x09pjsVector set: aFloatX y: aFloatY z: aFloatZ",
messageSends: ["set:y:z:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_subVector1_vector2_target_",
smalltalk.method({
selector: "subVector1:vector2:target:",
category: 'not yet classified',
fn: function (aPjsVector1, aPjsVector2, aTargetVectorOrNull) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_sub_vector2_target_", [smalltalk.send(aPjsVector1, "_pjsVector", []), smalltalk.send(aPjsVector2, "_pjsVector", []), aTargetVectorOrNull]);
    return self;
},
args: ["aPjsVector1", "aPjsVector2", "aTargetVectorOrNull"],
source: "subVector1: aPjsVector1 vector2: aPjsVector2 target: aTargetVectorOrNull\x0a\x0a\x09pjsVector sub: aPjsVector1 pjsVector vector2: aPjsVector2 pjsVector target: aTargetVectorOrNull",
messageSends: ["sub:vector2:target:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_subVector_",
smalltalk.method({
selector: "subVector:",
category: 'not yet classified',
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_sub_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
},
args: ["aPjsVector"],
source: "subVector: aPjsVector\x0a\x0a\x09pjsVector sub: aPjsVector pjsVector",
messageSends: ["sub:", "pjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_subX_y_z_",
smalltalk.method({
selector: "subX:y:z:",
category: 'not yet classified',
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_sub_y_z_", [aFloatX, aFLoatY, aFloatZ]);
    return self;
},
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "subX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09pjsVector sub: aFloatX y: aFLoatY z: aFloatZ",
messageSends: ["sub:y:z:"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_x", []);
    return $1;
},
args: [],
source: "x\x0a\x0a\x09^pjsVector x",
messageSends: ["x"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_y", []);
    return $1;
},
args: [],
source: "y\x0a\x0a\x09^pjsVector y",
messageSends: ["y"],
referencedClasses: []
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_z",
smalltalk.method({
selector: "z",
category: 'not yet classified',
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_z", []);
    return $1;
},
args: [],
source: "z\x0a\x0a\x09^pjsVector z ",
messageSends: ["z"],
referencedClasses: []
}),
smalltalk.PjsVector);


smalltalk.addMethod(
"_addVector1_vector2_",
smalltalk.method({
selector: "addVector1:vector2:",
category: 'not yet classified',
fn: function (aVector1, aVector2) {
    var self = this;
    var instance;
    var v1;
    var v2;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_add_v2_", [v1, v2])]);
    return instance;
},
args: ["aVector1", "aVector2"],
source: "addVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector add: v1 v2: v2).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "add:v2:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_angleBetweenVector1_vector2_",
smalltalk.method({
selector: "angleBetweenVector1:vector2:",
category: 'not yet classified',
fn: function (aVector1, aVector2) {
    var self = this;
    var $1;
    var v1;
    var v2;
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    $1 = smalltalk.send(smalltalk.PVector || PVector, "_angleBetween_v2_", [v1, v2]);
    return $1;
},
args: ["aVector1", "aVector2"],
source: "angleBetweenVector1: aVector1 vector2: aVector2\x0a\x0a\x09|  v1 v2 |\x0a\x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a ^ PVector angleBetween: v1 v2: v2\x0a  \x0a\x0a  ",
messageSends: ["pjsVector", "angleBetween:v2:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_distVector1_vector2_",
smalltalk.method({
selector: "distVector1:vector2:",
category: 'not yet classified',
fn: function (aVector1, aVector2) {
    var self = this;
    var instance;
    var v1;
    var v2;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_dist_v2_", [v1, v2])]);
    return instance;
},
args: ["aVector1", "aVector2"],
source: "distVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector dist: v1 v2: v2).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "dist:v2:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_divVector1_vector2_",
smalltalk.method({
selector: "divVector1:vector2:",
category: 'not yet classified',
fn: function (aVector1, aVector2) {
    var self = this;
    var instance;
    var v1;
    var v2;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_div_v2_", [v1, v2])]);
    return instance;
},
args: ["aVector1", "aVector2"],
source: "divVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector div: v1 v2: v2).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "div:v2:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_divVector_scalar_",
smalltalk.method({
selector: "divVector:scalar:",
category: 'not yet classified',
fn: function (aPjsVector, aScalarFloat) {
    var self = this;
    var instance;
    var v1;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aPjsVector, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_div_scalar_", [v1, aScalarFloat])]);
    return instance;
},
args: ["aPjsVector", "aScalarFloat"],
source: "divVector: aPjsVector scalar: aScalarFloat\x0a\x0a\x09| instance  v1  |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aPjsVector pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector div: v1 scalar: aScalarFloat).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "div:scalar:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_multScalar_vector_",
smalltalk.method({
selector: "multScalar:vector:",
category: 'not yet classified',
fn: function (aScalarFloat, aPjsVector) {
    var self = this;
    var instance;
    var v1;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aPjsVector, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_mult_vector_", [aScalarFloat, v1])]);
    return instance;
},
args: ["aScalarFloat", "aPjsVector"],
source: "multScalar: aScalarFloat vector: aPjsVector\x0a\x0a\x09| instance  v1  |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aPjsVector pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector mult: aScalarFloat vector: v1).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "mult:vector:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_multVector1_vector2_",
smalltalk.method({
selector: "multVector1:vector2:",
category: 'not yet classified',
fn: function (aVector1, aVector2) {
    var self = this;
    var instance;
    var v1;
    var v2;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_mult_v2_", [v1, v2])]);
    return instance;
},
args: ["aVector1", "aVector2"],
source: "multVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector mult: v1 v2: v2).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "mult:v2:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
category: 'not yet classified',
fn: function () {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", []);
    smalltalk.send(instance, "_initPjsVector", []);
    return instance;
},
args: [],
source: "new\x0a\x0a\x09| instance |\x0a\x0a  instance := self new.\x0a  instance initPjsVector.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsVector"],
referencedClasses: []
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_newX_y_",
smalltalk.method({
selector: "newX:y:",
category: 'not yet classified',
fn: function (aXFloat, aYFloat) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsVectorX_y_", [aXFloat, aYFloat]);
    return instance;
},
args: ["aXFloat", "aYFloat"],
source: "newX: aXFloat y: aYFloat\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsVectorX: aXFloat y: aYFloat.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsVectorX:y:"],
referencedClasses: []
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_newX_y_z_",
smalltalk.method({
selector: "newX:y:z:",
category: 'not yet classified',
fn: function (aXFloat, aYFloat, aZFloat) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsVectorX_y_z_", [aXFloat, aYFloat, aZFloat]);
    return instance;
},
args: ["aXFloat", "aYFloat", "aZFloat"],
source: "newX: aXFloat y: aYFloat z: aZFloat\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsVectorX: aXFloat y: aYFloat z: aZFloat.\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "initPjsVectorX:y:z:"],
referencedClasses: []
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_subVector1_vector2_",
smalltalk.method({
selector: "subVector1:vector2:",
category: 'not yet classified',
fn: function (aVector1, aVector2) {
    var self = this;
    var instance;
    var v1;
    var v2;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_sub_v2_", [v1, v2])]);
    return instance;
},
args: ["aVector1", "aVector2"],
source: "subVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector sub: v1 v2: v2).\x0a  \x0a  ^instance\x0a  ",
messageSends: ["new", "pjsVector", "initPjsVector:", "sub:v2:"],
referencedClasses: ["PVector"]
}),
smalltalk.PjsVector.klass);


