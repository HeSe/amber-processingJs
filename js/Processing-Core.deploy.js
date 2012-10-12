smalltalk.addPackage('Processing-Core', {});
smalltalk.addClass('PjsFont', smalltalk.Object, ['pjsFont'], 'Processing-Core');
smalltalk.addMethod(
"_initPjsFont",
smalltalk.method({
selector: "initPjsFont",
fn: function () {
    var self = this;
    self['@pjsFont'] = new PFont;
    return self;
}
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFont_smooth_",
smalltalk.method({
selector: "initPjsFont:smooth:",
fn: function (font, smooth) {
    var self = this;
    self['@pjsFont'] = new PFont(font, smootht);
    return self;
}
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFont_smooth_charset_",
smalltalk.method({
selector: "initPjsFont:smooth:charset:",
fn: function (font, smooth, charset) {
    var self = this;
    self['@pjsFont'] = new PFont(font, smooth, charset);
    return self;
}
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFont_smooth_charset_onInputStream_",
smalltalk.method({
selector: "initPjsFont:smooth:charset:onInputStream:",
fn: function (font, smooth, charset, stream) {
    var self = this;
    self['@pjsFont'] = new PFont(font, smooth, charset, stream);
    return self;
}
}),
smalltalk.PjsFont);

smalltalk.addMethod(
"_initPjsFontOnInputStream_",
smalltalk.method({
selector: "initPjsFontOnInputStream:",
fn: function (stream) {
    var self = this;
    self['@pjsFont'] = new PFont(stream);
    return self;
}
}),
smalltalk.PjsFont);


smalltalk.addMethod(
"_list",
smalltalk.method({
selector: "list",
fn: function () {
    var self = this;
    var $1;
    $1 = PFont.list();
    return $1;
}
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", []);
    smalltalk.send(instance, "_initPjsFont", []);
    return instance;
}
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_",
smalltalk.method({
selector: "newFont:",
fn: function (aFont) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_", [aFont]);
    return instance;
}
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_smooth_",
smalltalk.method({
selector: "newFont:smooth:",
fn: function (aFont, aBool) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_smooth_", [aFont, aBool]);
    return instance;
}
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_smooth_charset_",
smalltalk.method({
selector: "newFont:smooth:charset:",
fn: function (aFont, aBool, aCharSet) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_smooth_charset_", [aFont, aBool, aCharSet]);
    return instance;
}
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newFont_smooth_charset_onInputStream_",
smalltalk.method({
selector: "newFont:smooth:charset:onInputStream:",
fn: function (aFont, aBool, aCharSet, aStream) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsFont_smooth_charset_onInputStream_", [aFont, aBool, aCharSet, aStream]);
    return instance;
}
}),
smalltalk.PjsFont.klass);

smalltalk.addMethod(
"_newOnInputStream_",
smalltalk.method({
selector: "newOnInputStream:",
fn: function (aStream) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsOnStream_", [aStream]);
    return instance;
}
}),
smalltalk.PjsFont.klass);


smalltalk.addClass('PjsImage', smalltalk.Object, ['pjsImage'], 'Processing-Core');
smalltalk.addMethod(
"_blendImage_sX_sY_sW_sH_dX_dY_dW_dH_mode_",
smalltalk.method({
selector: "blendImage:sX:sY:sW:sH:dX:dY:dW:dH:mode:",
fn: function (aPjsImage, aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_blend_sX_sY_sW_sH_dX_dY_dW_dH_mode_", [smalltalk.send(aPjsImage, "_pjsImage", []), aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_blendSX_sY_sW_sH_dX_dY_dW_dH_mode_",
smalltalk.method({
selector: "blendSX:sY:sW:sH:dX:dY:dW:dH:mode:",
fn: function (aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_blend_sY_sW_sH_dX_dY_dW_dH_mode_", [aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH, aMode]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_copyImage_sX_sY_sW_sH_dX_dY_dW_dH_",
smalltalk.method({
selector: "copyImage:sX:sY:sW:sH:dX:dY:dW:dH:",
fn: function (aPjsImage, aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_copy_sx_sY_sW_sH_dX_dY_dW_dH_", [smalltalk.send(aPjsImage, "_pjsImage", []), aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_copySX_sY_sW_sH_dX_dY_dW_dH_",
smalltalk.method({
selector: "copySX:sY:sW:sH:dX:dY:dW:dH:",
fn: function (aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_copy_sY_sW_sH_dX_dY_dW_dH_", [aSourceX, aSourceY, aSourceW, aSourceH, aDestX, aDestY, aDestW, aDestH]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_filter_",
smalltalk.method({
selector: "filter:",
fn: function (aKind) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_filter_", [aKind]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_filter_param_",
smalltalk.method({
selector: "filter:param:",
fn: function (aKind, aFloat) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_filter_param_", [aKind, aFloat]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_get",
smalltalk.method({
selector: "get",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_get", []);
    return $1;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_getX_y_",
smalltalk.method({
selector: "getX:y:",
fn: function (anXInt, anYInt) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_get_y_", [anXInt, anYInt]);
    return $1;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_getX_y_width_height_",
smalltalk.method({
selector: "getX:y:width:height:",
fn: function (anXInt, anYInt, aWInt, aHInt) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_get_y_width_height_", [anXInt, anYInt, aWInt, aHInt]);
    return $1;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_height", []);
    return $1;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImage",
smalltalk.method({
selector: "initPjsImage",
fn: function () {
    var self = this;
    self['@pjsImage'] = new PImage;
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImage_",
smalltalk.method({
selector: "initPjsImage:",
fn: function (img) {
    var self = this;
    self['@pjsImage'] = new PImage(img);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImageWidth_height_",
smalltalk.method({
selector: "initPjsImageWidth:height:",
fn: function (width, height) {
    var self = this;
    self['@pjsImage'] = new PImage(width, height);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_initPjsImageWidth_height_format_",
smalltalk.method({
selector: "initPjsImageWidth:height:format:",
fn: function (width, height, format) {
    var self = this;
    self['@pjsImage'] = new PImage(width, height, format);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_loadPixels",
smalltalk.method({
selector: "loadPixels",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_loadPixels", []);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_maskArray_",
smalltalk.method({
selector: "maskArray:",
fn: function (anIntArray) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_mask_", [anIntArray]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_maskImage_",
smalltalk.method({
selector: "maskImage:",
fn: function (aPjsImage) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_mask_", [smalltalk.send(aPjsImage, "_pjsImage", [])]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_pixels",
smalltalk.method({
selector: "pixels",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_pixels", []);
    return $1;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_pjsImage",
smalltalk.method({
selector: "pjsImage",
fn: function () {
    var self = this;
    return self['@pjsImage'];
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_resizeWidth_height_",
smalltalk.method({
selector: "resizeWidth:height:",
fn: function (aResizedWInt, aResizedHInt) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_resize_height_", [aResizedWInt, aResizedHInt]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_save_",
smalltalk.method({
selector: "save:",
fn: function (aFileNameString) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_save_", [aFileNameString]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_setX_y_color_",
smalltalk.method({
selector: "setX:y:color:",
fn: function (anXInt, anYInt, aColorType) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_set_y_color_", [anXInt, anYInt, aColorType]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_setX_y_image_",
smalltalk.method({
selector: "setX:y:image:",
fn: function (anXInt, anYInt, aPjsImage) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_set_y_image_", [anXInt, anYInt, smalltalk.send(aPjsImage, "_pjsImage", [])]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_updatePixels",
smalltalk.method({
selector: "updatePixels",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_updatePixels", []);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_updatePixelsX_y_width_height_",
smalltalk.method({
selector: "updatePixelsX:y:width:height:",
fn: function (anUpperleftXCoordInt, anUpperleftYCoordInt, aWInt, aHInt) {
    var self = this;
    smalltalk.send(self['@pjsImage'], "_updatePixels_y_width_height_", [anUpperleftXCoordInt, anUpperleftYCoordInt, aWInt, aHInt]);
    return self;
}
}),
smalltalk.PjsImage);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsImage'], "_width", []);
    return $1;
}
}),
smalltalk.PjsImage);


smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", []);
    smalltalk.send(instance, "_initPjsImage", []);
    return instance;
}
}),
smalltalk.PjsImage.klass);

smalltalk.addMethod(
"_newImage_",
smalltalk.method({
selector: "newImage:",
fn: function (anImage) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsImage_", [anImage]);
    return instance;
}
}),
smalltalk.PjsImage.klass);

smalltalk.addMethod(
"_newWidth_heigth_",
smalltalk.method({
selector: "newWidth:heigth:",
fn: function (aWidth, aHeight) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsImageWidth_height_", [aWidth, aHeight]);
    return instance;
}
}),
smalltalk.PjsImage.klass);

smalltalk.addMethod(
"_newWidth_heigth_format_",
smalltalk.method({
selector: "newWidth:heigth:format:",
fn: function (aWidth, aHeight, aFormat) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsImageWidth_height_format_", [aWidth, aHeight, aFormat]);
    return instance;
}
}),
smalltalk.PjsImage.klass);


smalltalk.addClass('PjsShape', smalltalk.Object, ['pjsShape'], 'Processing-Core');
smalltalk.addMethod(
"_addChild_",
smalltalk.method({
selector: "addChild:",
fn: function (aWho) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_addChild_", [aWho]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_beginContour",
smalltalk.method({
selector: "beginContour",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_beginContour", []);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_disableStyle",
smalltalk.method({
selector: "disableStyle",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_disableStyle", []);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_enableStyle",
smalltalk.method({
selector: "enableStyle",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_enableStyle", []);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_end",
smalltalk.method({
selector: "end",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_end", []);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_endContour",
smalltalk.method({
selector: "endContour",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_endContour", []);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_getChild_",
smalltalk.method({
selector: "getChild:",
fn: function (anIndexOrTarget) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_getChild_", [anIndexOrTarget]);
    return $1;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_height",
smalltalk.method({
selector: "height",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_height", []);
    return $1;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_height_",
smalltalk.method({
selector: "height:",
fn: function (aValue) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_height_", [aValue]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@pjsShape'] = new Shape;
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_isVisible",
smalltalk.method({
selector: "isVisible",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_isVisible", []);
    return $1;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_pjsShape",
smalltalk.method({
selector: "pjsShape",
fn: function () {
    var self = this;
    return self['@pjsShape'];
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_resetMatrix",
smalltalk.method({
selector: "resetMatrix",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_resetMatrix", []);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotate_",
smalltalk.method({
selector: "rotate:",
fn: function (aFloatAngleInRadians) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotate_", [aFloatAngleInRadians]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotateX_",
smalltalk.method({
selector: "rotateX:",
fn: function (aFloatAngle) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotateX_", [aFloatAngle]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotateY_",
smalltalk.method({
selector: "rotateY:",
fn: function (aFloatAngle) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotateY_", [aFloatAngle]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_rotateZ_",
smalltalk.method({
selector: "rotateZ:",
fn: function (aFloatAngle) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_rotateZ_", [aFloatAngle]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_scale_",
smalltalk.method({
selector: "scale:",
fn: function (aFloatPercent) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_scale_", [aFloatPercent]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_scaleX_y_",
smalltalk.method({
selector: "scaleX:y:",
fn: function (aFloatPercentXAxis, aFloatPercentYAxis) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_scale_y_", [aFloatPercentXAxis, aFloatPercentYAxis]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_scaleX_y_z_",
smalltalk.method({
selector: "scaleX:y:z:",
fn: function (aFloatPercentXAxis, aFloatPercentYAxis, aFloatPercentZAxis) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_scale_y_z_", [aFloatPercentXAxis, aFloatPercentYAxis, aFloatPercentZAxis]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_setVisible_",
smalltalk.method({
selector: "setVisible:",
fn: function (aBoolean) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_setVisibile_", [aBoolean]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_translateX_y_",
smalltalk.method({
selector: "translateX:y:",
fn: function (aFloatLeftRight, aFloatUpDown) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_translate_y_", [aFloatLeftRight, aFloatUpDown]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_translateX_y_z_",
smalltalk.method({
selector: "translateX:y:z:",
fn: function (aFloatLeftRight, aFloatUpDown, aFloatForwarBackward) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_translate_y_z_", [aFloatLeftRight, aFloatUpDown, aFloatForwarBackward]);
    return self;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_width",
smalltalk.method({
selector: "width",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsShape'], "_width", []);
    return $1;
}
}),
smalltalk.PjsShape);

smalltalk.addMethod(
"_width_",
smalltalk.method({
selector: "width:",
fn: function (aValue) {
    var self = this;
    smalltalk.send(self['@pjsShape'], "_width_", [aValue]);
    return self;
}
}),
smalltalk.PjsShape);



smalltalk.addClass('PjsSketch', smalltalk.Object, ['processing'], 'Processing-Core');
smalltalk.addMethod(
"_alpha_",
smalltalk.method({
selector: "alpha:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_alpha_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_arcX_y_width_height_start_stop_",
smalltalk.method({
selector: "arcX:y:width:height:start:stop:",
fn: function (aX, aY, aWidth, aHeight, aStart, aStop) {
    var self = this;
    smalltalk.send(self['@processing'], "_arc_y_width_height_start_stop_", [aX, aY, aWidth, aHeight, aStart, aStop]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_background_value2_value3_",
smalltalk.method({
selector: "background:value2:value3:",
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_background_value2_value3_alpha_",
smalltalk.method({
selector: "background:value2:value3:alpha:",
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundColor_",
smalltalk.method({
selector: "backgroundColor:",
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_", [aColor]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundColor_alpha_",
smalltalk.method({
selector: "backgroundColor:alpha:",
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_alpha_", [aColor, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundGray_",
smalltalk.method({
selector: "backgroundGray:",
fn: function (aGrayValue) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_", [aGrayValue]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundGray_alpha_",
smalltalk.method({
selector: "backgroundGray:alpha:",
fn: function (aGrayValue, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_alpha_", [aGrayValue, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundHex_",
smalltalk.method({
selector: "backgroundHex:",
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_", [aHex]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_backgroundHex_alpha_",
smalltalk.method({
selector: "backgroundHex:alpha:",
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_background_alpha_", [aHex, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_beginShape",
smalltalk.method({
selector: "beginShape",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_beginShape", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_beginShape_",
smalltalk.method({
selector: "beginShape:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_beginShape_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierDetail_",
smalltalk.method({
selector: "bezierDetail:",
fn: function (aDetailint) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierDetail_", [aDetailint]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierPointA_b_c_d_t_",
smalltalk.method({
selector: "bezierPointA:b:c:d:t:",
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierPoint_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierTangentA_b_c_d_t_",
smalltalk.method({
selector: "bezierTangentA:b:c:d:t:",
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierTangent_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierVertexCx1_cy1_cx2_cy2_x2_y2_",
smalltalk.method({
selector: "bezierVertexCx1:cy1:cx2:cy2:x2:y2:",
fn: function (aCx1, aCy1, aCx2, aCy2, aX2, aY2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierVertex_cy1_cx2_cy2_x2_y2_", [aCx1, aCy1, aCx2, aCy2, aX2, aY2]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierVertexCx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_",
smalltalk.method({
selector: "bezierVertexCx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",
fn: function (aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezierVertex_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_", [aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierX1_y1_cx1_cy1_cx2_cy2_x2_y2_",
smalltalk.method({
selector: "bezierX1:y1:cx1:cy1:cx2:cy2:x2:y2:",
fn: function (aX1, aY1, aCx1, aCy1, aCx2, aCy2, aX2, aY2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezier_y1_cx1_cy1_cx2_cy2_x2_y2_", [smalltalk.send(aX1, "_aX1", []), aY1, aCx1, aCy1, aCx2, aCy2, aX2, aY2]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_bezierX1_y1_z1_cx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_",
smalltalk.method({
selector: "bezierX1:y1:z1:cx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",
fn: function (aX1, aY1, aZ1, aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2) {
    var self = this;
    smalltalk.send(self['@processing'], "_bezier_y1_z1_cx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_", [aX1, aY1, aZ1, aCx1, aCy1, aCz1, aCx2, aCy2, aCz2, aX2, aY2, aZ2]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_blendColor1_color2_mode_",
smalltalk.method({
selector: "blendColor1:color2:mode:",
fn: function (aColor1, aColor2, aMode) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_blend_color2_mode_", [aColor1, aColor2, aMode]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_blendImage_x_y_width_height_dx_dy_dwidth_dheight_mode_",
smalltalk.method({
selector: "blendImage:x:y:width:height:dx:dy:dwidth:dheight:mode:",
fn: function (aPjsImage, aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight, aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_blend_x_y_width_height_dx_dy_dwidth_dheight_mode_", [smalltalk.send(aPjsImage, "_pjsImage", []), aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight, aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_blendX_y_width_height_dx_dy_dwidth_dheight_mode_",
smalltalk.method({
selector: "blendX:y:width:height:dx:dy:dwidth:dheight:mode:",
fn: function (aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight, aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_blend_y_width_height_dx_dy_dwidth_dheight_mode_", [aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight, aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_blue_",
smalltalk.method({
selector: "blue:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_blue_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_box_",
smalltalk.method({
selector: "box:",
fn: function (aSizeIntOrFloat) {
    var self = this;
    smalltalk.send(self['@processing'], "_box_", [aSizeIntOrFloat]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_boxWidth_height_depth_",
smalltalk.method({
selector: "boxWidth:height:depth:",
fn: function (aWidth, aHeight, aDepth) {
    var self = this;
    smalltalk.send(self['@processing'], "_box_height_depth_", [aWidth, aHeight, aDepth]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_brightness_",
smalltalk.method({
selector: "brightness:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_brightness_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorGray_",
smalltalk.method({
selector: "colorGray:",
fn: function (aGray) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_", [aGray]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorGray_alpha_",
smalltalk.method({
selector: "colorGray:alpha:",
fn: function (aGray, anAlpha) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_alpha_", [aGray, anAlpha]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorHex_",
smalltalk.method({
selector: "colorHex:",
fn: function (aHex) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_", [aHex]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorHex_alpha_",
smalltalk.method({
selector: "colorHex:alpha:",
fn: function (aHex, anAlpha) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_alpha_", [aHex, anAlpha]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_",
smalltalk.method({
selector: "colorMode:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_range1_range2_range3_",
smalltalk.method({
selector: "colorMode:range1:range2:range3:",
fn: function (aMode, aRange1, aRange2, aRange3) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_range1_range2_range3_", [aMode, aRange1, aRange2, aRange3]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_range1_range2_range3_range4_",
smalltalk.method({
selector: "colorMode:range1:range2:range3:range4:",
fn: function (aMode, aRange1, aRange2, aRange3, aRange4) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_range1_range2_range3_range4_", [aMode, aRange1, aRange2, aRange3, aRange4]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorMode_range_",
smalltalk.method({
selector: "colorMode:range:",
fn: function (aMode, aRange) {
    var self = this;
    smalltalk.send(self['@processing'], "_colorMode_range_", [aMode, aRange]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorValue1_value2_value3_",
smalltalk.method({
selector: "colorValue1:value2:value3:",
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_value2_value3_", [aValue1, aValue2, aValue3]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_colorValue1_value2_value3_alpha_",
smalltalk.method({
selector: "colorValue1:value2:value3:alpha:",
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_color_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_copyImage_x_y_width_height_dx_dy_dwidth_dheight_",
smalltalk.method({
selector: "copyImage:x:y:width:height:dx:dy:dwidth:dheight:",
fn: function (aPjsImage, aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_copy_x_y_width_height_dx_dy_dwidth_dheight_", [smalltalk.send(aPjsImage, "_pjsImage", []), aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_copyX_y_width_height_dx_dy_dwidth_dheight_",
smalltalk.method({
selector: "copyX:y:width:height:dx:dy:dwidth:dheight:",
fn: function (aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_copy_y_width_height_dx_dy_dwidth_dheight_", [aX, aY, aWidth, aHeigt, dX, dY, aDWidth, aDHeight]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_createImageWidth_height_format_",
smalltalk.method({
selector: "createImageWidth:height:format:",
fn: function (aWidth, aHeight, aFormat) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.PjsImage || PjsImage, "_newImage_", [smalltalk.send(self['@processing'], "_createImage_height_format_", [aWidth, aHeight, aFormat])]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveDetail_",
smalltalk.method({
selector: "curveDetail:",
fn: function (aDetailint) {
    var self = this;
    smalltalk.send(self['@processing'], "_curverDetail_", [aDetailint]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curvePointA_b_c_d_t_",
smalltalk.method({
selector: "curvePointA:b:c:d:t:",
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_curvePoint_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveTangentA_b_c_d_t_",
smalltalk.method({
selector: "curveTangentA:b:c:d:t:",
fn: function (anA, aB, aC, aD, aT) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveTangent_b_c_d_t_", [anA, aB, aC, aD, aT]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveTightness_",
smalltalk.method({
selector: "curveTightness:",
fn: function (anIntOrFloat) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveTightness_", [anIntOrFloat]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveVertexX_y_",
smalltalk.method({
selector: "curveVertexX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveVertex_y_", [aX, aY]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveVertexX_y_z_",
smalltalk.method({
selector: "curveVertexX:y:z:",
fn: function (aX, aY, aZ) {
    var self = this;
    smalltalk.send(self['@processing'], "_curveVertex_y_z_", [aX, aY, aZ]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveX1_y1_x2_y2_x3_y3_x4_y4_",
smalltalk.method({
selector: "curveX1:y1:x2:y2:x3:y3:x4:y4:",
fn: function (aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4) {
    var self = this;
    smalltalk.send(self['@processing'], "_curve_y1_x2_y2_x3_y3_x4_y4_", [aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_curveX1_y1_z1_x2_y2_z2_x3_y3_z3_x4_y4_z4_",
smalltalk.method({
selector: "curveX1:y1:z1:x2:y2:z2:x3:y3:z3:x4:y4:z4:",
fn: function (aX1, aY1, aZ1, aX2, aY2, aZ2, aX3, aY3, aZ3, aX4, aY4, aZ4) {
    var self = this;
    smalltalk.send(self['@processing'], "_curve_y1_z1_x2_y2_z2_x3_y3_z3_x4_y4_z4_", [aX1, aY1, aZ1, aX2, aY2, aZ2, aX3, aY3, aZ3, aX4, aY4, aZ4]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_draw",
smalltalk.method({
selector: "draw",
fn: function () {
    var self = this;
    smalltalk.send(self, "_subclassResponsibility", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_ellipseMode_",
smalltalk.method({
selector: "ellipseMode:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_ellipseMode_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_ellipseX_y_width_height_",
smalltalk.method({
selector: "ellipseX:y:width:height:",
fn: function (aX, aY, aWidth, aHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_ellipse_y_width_height_", [aX, aY, aWidth, aHeight]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_endShape",
smalltalk.method({
selector: "endShape",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_endShape", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_endShape_",
smalltalk.method({
selector: "endShape:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_endShape_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillColor_",
smalltalk.method({
selector: "fillColor:",
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_", [aColor]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillColor_alpha_",
smalltalk.method({
selector: "fillColor:alpha:",
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_alpha_", [aColor, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillGray_",
smalltalk.method({
selector: "fillGray:",
fn: function (aGray) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_", [aGray]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillGray_alpha_",
smalltalk.method({
selector: "fillGray:alpha:",
fn: function (aGray, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_alpha_", [aGray, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillHex_",
smalltalk.method({
selector: "fillHex:",
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_", [aHex]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillHex_alpha_",
smalltalk.method({
selector: "fillHex:alpha:",
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_alpha_", [aHex, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillValue1_value2_value3_",
smalltalk.method({
selector: "fillValue1:value2:value3:",
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_fillValue1_value2_value3_alpha_",
smalltalk.method({
selector: "fillValue1:value2:value3:alpha:",
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_fill_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_filterMode_param_",
smalltalk.method({
selector: "filterMode:param:",
fn: function (aMode, aParam) {
    var self = this;
    smalltalk.send(self['@processing'], "_filter_param_", [aMode, aParam]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_green_",
smalltalk.method({
selector: "green:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_green_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_hue_",
smalltalk.method({
selector: "hue:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_hue_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_image_x_y_",
smalltalk.method({
selector: "image:x:y:",
fn: function (aPjsImage, aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_image_x_y_", [smalltalk.send(aPjsImage, "_pjsImage", []), aX, aY]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_image_x_y_width_height_",
smalltalk.method({
selector: "image:x:y:width:height:",
fn: function (aPjsImage, aX, aY, aWidth, aHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_image_x_y_width_height_", [smalltalk.send(aPjsImage, "_pjsImage", []), aX, aY, aWidth, aHeight]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_imageMode_",
smalltalk.method({
selector: "imageMode:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_imageMode_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_initalizeFunctions",
smalltalk.method({
selector: "initalizeFunctions",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_at_put_", ["draw", function () {return smalltalk.send(self, "_draw", []);}]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_initialize",
smalltalk.method({
selector: "initialize",
fn: function () {
    var self = this;
    self['@processing'] = Processing.instances[0];
    smalltalk.send(self, "_initalizeFunctions", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_lerpColor1_color2_amt_",
smalltalk.method({
selector: "lerpColor1:color2:amt:",
fn: function (aColor1, aColor2, aAMT) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_lerpColor_color2_amt_", [aColor1, aColor2, aAMT]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_lineX1_y1_x2_y2_",
smalltalk.method({
selector: "lineX1:y1:x2:y2:",
fn: function (aX1, aY1, aX2, aY2) {
    var self = this;
    smalltalk.send(self['@processing'], "_line_y1_x2_y2_", [aX1, aY1, aX2, aY2]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_lineX1_y1_z1_x2_y2_z2_",
smalltalk.method({
selector: "lineX1:y1:z1:x2:y2:z2:",
fn: function (aX1, aY1, aZ1, aX2, aY2, aZ2) {
    var self = this;
    smalltalk.send(self['@processing'], "_line_y1_z1_x2_y2_z2_", [aX1, aY1, aZ1, aX2, aY2, aZ2]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_loadImage_",
smalltalk.method({
selector: "loadImage:",
fn: function (aFileName) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.PjsImage || PjsImage, "_newImage_", [smalltalk.send(self['@processing'], "_loadImage_", [aFileName])]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noFill",
smalltalk.method({
selector: "noFill",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noFill", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noSmooth",
smalltalk.method({
selector: "noSmooth",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noSmooth", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noStroke",
smalltalk.method({
selector: "noStroke",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noStroke", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_noTint",
smalltalk.method({
selector: "noTint",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_noTint", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_pointX_y_",
smalltalk.method({
selector: "pointX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_point_y_", [aX, aY]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_pointX_y_z_",
smalltalk.method({
selector: "pointX:y:z:",
fn: function (aX, aY, aZ) {
    var self = this;
    smalltalk.send(self['@processing'], "_point_y_z_", [aX, aY, aZ]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_processing",
smalltalk.method({
selector: "processing",
fn: function () {
    var self = this;
    return self['@processing'];
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_quadX1_y1_x2_y2_x3_y3_x4_y4_",
smalltalk.method({
selector: "quadX1:y1:x2:y2:x3:y3:x4:y4:",
fn: function (aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4) {
    var self = this;
    smalltalk.send(self['@processing'], "_quad_y1_x2_y2_x3_y3_x4_y4_", [aX1, aY1, aX2, aY2, aX3, aY3, aX4, aY4]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectMode_",
smalltalk.method({
selector: "rectMode:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_rectMode_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectX_y_width_height_",
smalltalk.method({
selector: "rectX:y:width:height:",
fn: function (aX, aY, aWidth, aHeight) {
    var self = this;
    smalltalk.send(self['@processing'], "_rect_y_width_height_", [aX, aY, aWidth, aHeight]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectX_y_width_height_radius_",
smalltalk.method({
selector: "rectX:y:width:height:radius:",
fn: function (aX, aY, aWidth, aHeight, aRadius) {
    var self = this;
    smalltalk.send(self['@processing'], "_rect_y_width_height_radius_", [aX, aY, aWidth, aHeight, aRadius]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_rectX_y_width_height_tlradius_trradius_brradius_blradius_",
smalltalk.method({
selector: "rectX:y:width:height:tlradius:trradius:brradius:blradius:",
fn: function (aX, aY, aWidth, aHeight, aTLRadius, aTRRadius, aBRRadius, aBLRadius) {
    var self = this;
    smalltalk.send(self['@processing'], "_rect_y_width_height_tlradius_trradius_brradius_blradius_", [aX, aY, aWidth, aHeight, aTLRadius, aTRRadius, aBRRadius, aBLRadius]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_red_",
smalltalk.method({
selector: "red:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_red_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_requestImage_",
smalltalk.method({
selector: "requestImage:",
fn: function (aFilename) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.PjsImage || PjsImage, "_newImage_", [smalltalk.send(self['@processing'], "_requestImage_", [aFilename])]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_requestImage_extension_",
smalltalk.method({
selector: "requestImage:extension:",
fn: function (aFilename, aExtension) {
    var self = this;
    var $1;
    $1 = smalltalk.send(smalltalk.PjsImage || PjsImage, "_newImage_", [smalltalk.send(self['@processing'], "_requestImage_extension_", [aFilename, aExtension])]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_saturation_",
smalltalk.method({
selector: "saturation:",
fn: function (aColor) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@processing'], "_saturation_", [aColor]);
    return $1;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_smooth",
smalltalk.method({
selector: "smooth",
fn: function () {
    var self = this;
    smalltalk.send(self['@processing'], "_smooth", []);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_sphere_",
smalltalk.method({
selector: "sphere:",
fn: function (aRadius) {
    var self = this;
    smalltalk.send(self['@processing'], "_sphere_", [aRadius]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_sphereDetail_",
smalltalk.method({
selector: "sphereDetail:",
fn: function (aRes) {
    var self = this;
    smalltalk.send(self['@processing'], "_sphereDetail_", [aRes]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_sphereDetail_vres_",
smalltalk.method({
selector: "sphereDetail:vres:",
fn: function (aURes, aVRes) {
    var self = this;
    smalltalk.send(self['@processing'], "_sphereDetail_vres_", [aURes, aVRes]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeCap_",
smalltalk.method({
selector: "strokeCap:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_strokeCap_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeColor_",
smalltalk.method({
selector: "strokeColor:",
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_", [aColor]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeColor_alpha_",
smalltalk.method({
selector: "strokeColor:alpha:",
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_alpha_", [aColor, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeGray_",
smalltalk.method({
selector: "strokeGray:",
fn: function (aGray) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_", [aGray]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeGray_alpha_",
smalltalk.method({
selector: "strokeGray:alpha:",
fn: function (aGray, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_alpha_", [aGray, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeHex_",
smalltalk.method({
selector: "strokeHex:",
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_", [aHex]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeHex_alpha_",
smalltalk.method({
selector: "strokeHex:alpha:",
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_alpha_", [aHex, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeJoin_",
smalltalk.method({
selector: "strokeJoin:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_strokeJoin_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeValue1_value2_value3_",
smalltalk.method({
selector: "strokeValue1:value2:value3:",
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeValue1_value2_value3_alpha_",
smalltalk.method({
selector: "strokeValue1:value2:value3:alpha:",
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_stroke_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_strokeWeight_",
smalltalk.method({
selector: "strokeWeight:",
fn: function (aWidth) {
    var self = this;
    smalltalk.send(self['@processing'], "_strokeWeight_", [aWidth]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_texture_",
smalltalk.method({
selector: "texture:",
fn: function (aPjsImage) {
    var self = this;
    smalltalk.send(self['@processing'], "_texture_", [smalltalk.send(aPjsImage, "_pjsImage", [])]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_textureMode_",
smalltalk.method({
selector: "textureMode:",
fn: function (aMode) {
    var self = this;
    smalltalk.send(self['@processing'], "_textureMode_", [aMode]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintColor_",
smalltalk.method({
selector: "tintColor:",
fn: function (aColor) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_", [aColor]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintColor_alpha_",
smalltalk.method({
selector: "tintColor:alpha:",
fn: function (aColor, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_alpha_", [aColor, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintGray_",
smalltalk.method({
selector: "tintGray:",
fn: function (aGray) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_", [aGray]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintGray_alpha_",
smalltalk.method({
selector: "tintGray:alpha:",
fn: function (aGray, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_alpha_", [aGray, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintHex_",
smalltalk.method({
selector: "tintHex:",
fn: function (aHex) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_", [aHex]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintHex_alpha_",
smalltalk.method({
selector: "tintHex:alpha:",
fn: function (aHex, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_alpha_", [aHex, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintValue1_value2_value3_",
smalltalk.method({
selector: "tintValue1:value2:value3:",
fn: function (aValue1, aValue2, aValue3) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_value2_value3_", [aValue1, aValue2, aValue3]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_tintValue1_value2_value3_alpha_",
smalltalk.method({
selector: "tintValue1:value2:value3:alpha:",
fn: function (aValue1, aValue2, aValue3, anAlpha) {
    var self = this;
    smalltalk.send(self['@processing'], "_tint_value2_value3_alpha_", [aValue1, aValue2, aValue3, anAlpha]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_triangleX1_y1_x2_y2_x3_y3_",
smalltalk.method({
selector: "triangleX1:y1:x2:y2:x3:y3:",
fn: function (aX1, aY1, aX2, aY2, aX3, aY3) {
    var self = this;
    smalltalk.send(self['@processing'], "_triangle_y1_x2_y2_x3_y3_", [aX1, aY1, aX2, aY2, aX3, aY3]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_",
smalltalk.method({
selector: "vertexX:y:",
fn: function (aX, aY) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_", [aX, aY]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_u_v_",
smalltalk.method({
selector: "vertexX:y:u:v:",
fn: function (aX, aY, anU, aV) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_u_v_", [aX, aY, anU, aV]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_z_",
smalltalk.method({
selector: "vertexX:y:z:",
fn: function (aX, aY, aZ) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_z_", [aX, aY, aZ]);
    return self;
}
}),
smalltalk.PjsSketch);

smalltalk.addMethod(
"_vertexX_y_z_u_v_",
smalltalk.method({
selector: "vertexX:y:z:u:v:",
fn: function (aX, aY, aZ, anU, aV) {
    var self = this;
    smalltalk.send(self['@processing'], "_vertex_y_z_u_v_", [aX, aY, aZ, anU, aV]);
    return self;
}
}),
smalltalk.PjsSketch);


smalltalk.addMethod(
"_start",
smalltalk.method({
selector: "start",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self, "_new", []);
    return $1;
}
}),
smalltalk.PjsSketch.klass);


smalltalk.addClass('PjsVector', smalltalk.Object, ['pjsVector'], 'Processing-Core');
smalltalk.addMethod(
"_addVector1_vector2_target_",
smalltalk.method({
selector: "addVector1:vector2:target:",
fn: function (aPjsVector1, aPjsVector2, aTargetVectorOrNull) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_add_vector2_target_", [smalltalk.send(aPjsVector1, "_pjsVector", []), smalltalk.send(aPjsVector2, "_pjsVector", []), aTargetVectorOrNull]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_addVector_",
smalltalk.method({
selector: "addVector:",
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_add_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_addX_y_z_",
smalltalk.method({
selector: "addX:y:z:",
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_add_y_z_", [aFloatX, aFLoatY, aFloatZ]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_asArray",
smalltalk.method({
selector: "asArray",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_array", []);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_crossX_y_z_",
smalltalk.method({
selector: "crossX:y:z:",
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(self['@pjsVector'], "_cross_y_z_", [aFloatX, aFLoatY, aFloatZ])]);
    return instance;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_dist_",
smalltalk.method({
selector: "dist:",
fn: function (aPjsVector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_dist_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_div_",
smalltalk.method({
selector: "div:",
fn: function (aScalarFloat) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_div_", [aScalarFloat]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_divVector_",
smalltalk.method({
selector: "divVector:",
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_div_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_dot_",
smalltalk.method({
selector: "dot:",
fn: function (aPjsVector) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_dot_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_dotX_y_z_",
smalltalk.method({
selector: "dotX:y:z:",
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_dot_y_z_", [aFloatX, aFLoatY, aFloatZ]);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_get",
smalltalk.method({
selector: "get",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_get", []);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_get_",
smalltalk.method({
selector: "get:",
fn: function (aTarget) {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_get_", [aTarget]);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVector",
smalltalk.method({
selector: "initPjsVector",
fn: function () {
    var self = this;
    self['@pjsVector'] = new PVector;
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVector_",
smalltalk.method({
selector: "initPjsVector:",
fn: function (aPVector) {
    var self = this;
    self['@pjsVector'] = aPVector;
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVectorX_y_",
smalltalk.method({
selector: "initPjsVectorX:y:",
fn: function (x, y) {
    var self = this;
    self['@pjsVector'] = new PVector(x, y);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_initPjsVectorX_y_z_",
smalltalk.method({
selector: "initPjsVectorX:y:z:",
fn: function (x, y, z) {
    var self = this;
    self['@pjsVector'] = new PVector(x, y, z);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_limit_",
smalltalk.method({
selector: "limit:",
fn: function (aMaxFloat) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_limit_", [aMaxFloat]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_mag",
smalltalk.method({
selector: "mag",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_mag", []);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_mult_",
smalltalk.method({
selector: "mult:",
fn: function (aScalarFloat) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_mult_", [aScalarFloat]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_mult_vector_",
smalltalk.method({
selector: "mult:vector:",
fn: function (aScalarFloat, aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_mult_vector_", [aScalarFloat, smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_normalize",
smalltalk.method({
selector: "normalize",
fn: function () {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_normalize", []);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_pjsVector",
smalltalk.method({
selector: "pjsVector",
fn: function () {
    var self = this;
    return self['@pjsVector'];
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_setSource_",
smalltalk.method({
selector: "setSource:",
fn: function (aFloatSourceArray) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_set_", [aFloatSourceArray]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_setVector_",
smalltalk.method({
selector: "setVector:",
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_set_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_setX_y_z_",
smalltalk.method({
selector: "setX:y:z:",
fn: function (aFloatX, aFloatY, aFloatZ) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_set_y_z_", [aFloatX, aFloatY, aFloatZ]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_subVector1_vector2_target_",
smalltalk.method({
selector: "subVector1:vector2:target:",
fn: function (aPjsVector1, aPjsVector2, aTargetVectorOrNull) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_sub_vector2_target_", [smalltalk.send(aPjsVector1, "_pjsVector", []), smalltalk.send(aPjsVector2, "_pjsVector", []), aTargetVectorOrNull]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_subVector_",
smalltalk.method({
selector: "subVector:",
fn: function (aPjsVector) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_sub_", [smalltalk.send(aPjsVector, "_pjsVector", [])]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_subX_y_z_",
smalltalk.method({
selector: "subX:y:z:",
fn: function (aFloatX, aFLoatY, aFloatZ) {
    var self = this;
    smalltalk.send(self['@pjsVector'], "_sub_y_z_", [aFloatX, aFLoatY, aFloatZ]);
    return self;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_x",
smalltalk.method({
selector: "x",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_x", []);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_y",
smalltalk.method({
selector: "y",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_y", []);
    return $1;
}
}),
smalltalk.PjsVector);

smalltalk.addMethod(
"_z",
smalltalk.method({
selector: "z",
fn: function () {
    var self = this;
    var $1;
    $1 = smalltalk.send(self['@pjsVector'], "_z", []);
    return $1;
}
}),
smalltalk.PjsVector);


smalltalk.addMethod(
"_addVector1_vector2_",
smalltalk.method({
selector: "addVector1:vector2:",
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
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_angleBetweenVector1_vector2_",
smalltalk.method({
selector: "angleBetweenVector1:vector2:",
fn: function (aVector1, aVector2) {
    var self = this;
    var $1;
    var v1;
    var v2;
    v1 = smalltalk.send(aVector1, "_pjsVector", []);
    v2 = smalltalk.send(aVector2, "_pjsVector", []);
    $1 = smalltalk.send(smalltalk.PVector || PVector, "_angleBetween_v2_", [v1, v2]);
    return $1;
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_distVector1_vector2_",
smalltalk.method({
selector: "distVector1:vector2:",
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
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_divVector1_vector2_",
smalltalk.method({
selector: "divVector1:vector2:",
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
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_divVector_scalar_",
smalltalk.method({
selector: "divVector:scalar:",
fn: function (aPjsVector, aScalarFloat) {
    var self = this;
    var instance;
    var v1;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aPjsVector, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_div_scalar_", [v1, aScalarFloat])]);
    return instance;
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_multScalar_vector_",
smalltalk.method({
selector: "multScalar:vector:",
fn: function (aScalarFloat, aPjsVector) {
    var self = this;
    var instance;
    var v1;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    v1 = smalltalk.send(aPjsVector, "_pjsVector", []);
    smalltalk.send(instance, "_initPjsVector_", [smalltalk.send(smalltalk.PVector || PVector, "_mult_vector_", [aScalarFloat, v1])]);
    return instance;
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_multVector1_vector2_",
smalltalk.method({
selector: "multVector1:vector2:",
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
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_new",
smalltalk.method({
selector: "new",
fn: function () {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", []);
    smalltalk.send(instance, "_initPjsVector", []);
    return instance;
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_newX_y_",
smalltalk.method({
selector: "newX:y:",
fn: function (aXFloat, aYFloat) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsVectorX_y_", [aXFloat, aYFloat]);
    return instance;
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_newX_y_z_",
smalltalk.method({
selector: "newX:y:z:",
fn: function (aXFloat, aYFloat, aZFloat) {
    var self = this;
    var instance;
    instance = smalltalk.send(self, "_new", [], smalltalk.Object.klass);
    smalltalk.send(instance, "_initPjsVectorX_y_z_", [aXFloat, aYFloat, aZFloat]);
    return instance;
}
}),
smalltalk.PjsVector.klass);

smalltalk.addMethod(
"_subVector1_vector2_",
smalltalk.method({
selector: "subVector1:vector2:",
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
}
}),
smalltalk.PjsVector.klass);


