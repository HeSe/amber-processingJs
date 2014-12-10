define("amber-processingJs/Processing-Core", ["amber/boot", "amber_core/Kernel-Objects"], function($boot){
var $core=$boot.api,nil=$boot.nil,$recv=$boot.asReceiver,$globals=$boot.globals;
var smalltalk=$core,_st=$recv,globals=$globals;
$core.addPackage('Processing-Core');
$core.packages["Processing-Core"].transport = {"type":"amd","amdNamespace":"amber-processingJs"};

$core.addClass('PjsFont', $globals.Object, ['pjsFont'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "initPjsFont",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsFont"]=self._newFontJs();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsFont",{},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initPjsFont\x0a  \x0a    pjsFont := self newFontJs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newFontJs"]
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "initPjsFont:smooth:",
protocol: 'not yet classified',
fn: function (font,smooth){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsFont"]=self._newFontJs_smooth_(font,smooth);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsFont:smooth:",{font:font,smooth:smooth},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["font", "smooth"],
source: "initPjsFont: font smooth: smooth\x0a  \x0a    pjsFont := self newFontJs: font smooth: smooth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newFontJs:smooth:"]
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "initPjsFont:smooth:charset:",
protocol: 'not yet classified',
fn: function (font,smooth,charset){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsFont"]=self._newFontJs_smooth_charset_(font,smooth,charset);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsFont:smooth:charset:",{font:font,smooth:smooth,charset:charset},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["font", "smooth", "charset"],
source: "initPjsFont: font smooth: smooth charset: charset\x0a  \x0a    pjsFont := self newFontJs: font smooth: smooth charset: charset",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newFontJs:smooth:charset:"]
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "initPjsFont:smooth:charset:onInputStream:",
protocol: 'not yet classified',
fn: function (font,smooth,charset,stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsFont"]=self._newFontJs_smooth_charset_onInputStream_(font,smooth,charset,stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsFont:smooth:charset:onInputStream:",{font:font,smooth:smooth,charset:charset,stream:stream},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["font", "smooth", "charset", "stream"],
source: "initPjsFont: font smooth: smooth charset: charset onInputStream: stream\x0a  \x0a    pjsFont := self newFontJs: font smooth: smooth charset: charset onInputStream: stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newFontJs:smooth:charset:onInputStream:"]
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "initPjsFontOnInputStream:",
protocol: 'not yet classified',
fn: function (stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsFont"]=self._newFontOnInputStreamJs_(stream);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsFontOnInputStream:",{stream:stream},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "initPjsFontOnInputStream: stream\x0a  \x0a    pjsFont := self newFontOnInputStreamJs: stream",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newFontOnInputStreamJs:"]
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "newFontJs",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new p.PFont() ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFontJs",{},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newFontJs\x0a\x0a         <return new p.PFont() >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "newFontJs:smooth:",
protocol: 'not yet classified',
fn: function (font,smooth){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new p.PFont(font, smooth) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFontJs:smooth:",{font:font,smooth:smooth},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["font", "smooth"],
source: "newFontJs: font smooth: smooth \x0a\x0a         <return new p.PFont(font, smooth) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "newFontJs:smooth:charset:",
protocol: 'not yet classified',
fn: function (font,smooth,charset){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new p.PFont(font, smooth, charset) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFontJs:smooth:charset:",{font:font,smooth:smooth,charset:charset},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["font", "smooth", "charset"],
source: "newFontJs: font smooth: smooth charset: charset\x0a  \x0a    <return new p.PFont(font, smooth, charset) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "newFontJs:smooth:charset:onInputStream:",
protocol: 'not yet classified',
fn: function (font,smooth,charset,stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.PFont(font, smooth, charset, stream) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFontJs:smooth:charset:onInputStream:",{font:font,smooth:smooth,charset:charset,stream:stream},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["font", "smooth", "charset", "stream"],
source: "newFontJs: font smooth: smooth charset: charset onInputStream: stream\x0a  \x0a    < return new p.PFont(font, smooth, charset, stream) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsFont);

$core.addMethod(
$core.method({
selector: "newFontOnInputStreamJs:",
protocol: 'not yet classified',
fn: function (stream){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.PFont(stream) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFontOnInputStreamJs:",{stream:stream},$globals.PjsFont)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["stream"],
source: "newFontOnInputStreamJs: stream\x0a  \x0a    < return new p.PFont(stream) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsFont);


$core.addMethod(
$core.method({
selector: "list",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return PFont.list();;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"list",{},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "list\x0a  \x0a  < return PFont.list();>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsFont.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=self._new();
$recv(instance)._initPjsFont();
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{instance:instance},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a\x09| instance |\x0a\x0a  instance := self new.\x0a  instance initPjsFont.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsFont"]
}),
$globals.PjsFont.klass);

$core.addMethod(
$core.method({
selector: "newFont:",
protocol: 'not yet classified',
fn: function (aFont){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsFont.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsFont_(aFont);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFont:",{aFont:aFont,instance:instance},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFont"],
source: "newFont: aFont\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsFont:"]
}),
$globals.PjsFont.klass);

$core.addMethod(
$core.method({
selector: "newFont:smooth:",
protocol: 'not yet classified',
fn: function (aFont,aBool){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsFont.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsFont_smooth_(aFont,aBool);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFont:smooth:",{aFont:aFont,aBool:aBool,instance:instance},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFont", "aBool"],
source: "newFont: aFont smooth: aBool\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont smooth: aBool.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsFont:smooth:"]
}),
$globals.PjsFont.klass);

$core.addMethod(
$core.method({
selector: "newFont:smooth:charset:",
protocol: 'not yet classified',
fn: function (aFont,aBool,aCharSet){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsFont.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsFont_smooth_charset_(aFont,aBool,aCharSet);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFont:smooth:charset:",{aFont:aFont,aBool:aBool,aCharSet:aCharSet,instance:instance},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFont", "aBool", "aCharSet"],
source: "newFont: aFont smooth: aBool charset: aCharSet\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont smooth: aBool charset: aCharSet.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsFont:smooth:charset:"]
}),
$globals.PjsFont.klass);

$core.addMethod(
$core.method({
selector: "newFont:smooth:charset:onInputStream:",
protocol: 'not yet classified',
fn: function (aFont,aBool,aCharSet,aStream){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsFont.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsFont_smooth_charset_onInputStream_(aFont,aBool,aCharSet,aStream);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newFont:smooth:charset:onInputStream:",{aFont:aFont,aBool:aBool,aCharSet:aCharSet,aStream:aStream,instance:instance},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFont", "aBool", "aCharSet", "aStream"],
source: "newFont: aFont smooth: aBool charset: aCharSet onInputStream: aStream\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsFont: aFont smooth: aBool charset: aCharSet onInputStream: aStream.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsFont:smooth:charset:onInputStream:"]
}),
$globals.PjsFont.klass);

$core.addMethod(
$core.method({
selector: "newOnInputStream:",
protocol: 'not yet classified',
fn: function (aStream){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsFont.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsOnStream_(aStream);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newOnInputStream:",{aStream:aStream,instance:instance},$globals.PjsFont.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aStream"],
source: "newOnInputStream: aStream\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsOnStream: aStream.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsOnStream:"]
}),
$globals.PjsFont.klass);


$core.addClass('PjsImage', $globals.Object, ['pjsImage'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "blendImage:sX:sY:sW:sH:dX:dY:dW:dH:mode:",
protocol: 'not yet classified',
fn: function (aPjsImage,aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH,aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._blend_sX_sY_sW_sH_dX_dY_dW_dH_mode_($recv(aPjsImage)._pjsImage(),aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH,aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blendImage:sX:sY:sW:sH:dX:dY:dW:dH:mode:",{aPjsImage:aPjsImage,aSourceX:aSourceX,aSourceY:aSourceY,aSourceW:aSourceW,aSourceH:aSourceH,aDestX:aDestX,aDestY:aDestY,aDestW:aDestW,aDestH:aDestH,aMode:aMode},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH", "aMode"],
source: "blendImage: aPjsImage sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode\x0a\x0a\x22BLEND - linear interpolation of colours: C = A*factor + B\x0a\x0aADD - additive blending with white clip: C = min(A*factor + B, 255)\x0a\x0aSUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)\x0a\x0aDARKEST - only the darkest colour succeeds: C = min(A*factor, B)\x0a\x0aLIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)\x0a\x0aDIFFERENCE - subtract colors from underlying image.\x0a\x0aEXCLUSION - similar to DIFFERENCE, but less extreme.\x0a\x0aMULTIPLY - Multiply the colors, result will always be darker.\x0a\x0aSCREEN - Opposite multiply, uses inverse values of the colors.\x0a\x0aOVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.\x0a\x0aHARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.\x0a\x0aSOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.\x0a\x0aDODGE - Lightens light tones and increases contrast, ignores darks. Called \x22\x22Color Dodge\x22\x22 in Illustrator and Photoshop.\x0a\x0aBURN - Darker areas are applied, increasing contrast, ignores lights. Called \x22\x22Color Burn\x22\x22 in Illustrator and Photoshop.\x22\x0a\x0a\x09pjsImage blend: aPjsImage pjsImage  sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blend:sX:sY:sW:sH:dX:dY:dW:dH:mode:", "pjsImage"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "blendSX:sY:sW:sH:dX:dY:dW:dH:mode:",
protocol: 'not yet classified',
fn: function (aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH,aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._blend_sY_sW_sH_dX_dY_dW_dH_mode_(aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH,aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blendSX:sY:sW:sH:dX:dY:dW:dH:mode:",{aSourceX:aSourceX,aSourceY:aSourceY,aSourceW:aSourceW,aSourceH:aSourceH,aDestX:aDestX,aDestY:aDestY,aDestW:aDestW,aDestH:aDestH,aMode:aMode},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH", "aMode"],
source: "blendSX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode\x0a\x0a\x22BLEND - linear interpolation of colours: C = A*factor + B\x0a\x0aADD - additive blending with white clip: C = min(A*factor + B, 255)\x0a\x0aSUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)\x0a\x0aDARKEST - only the darkest colour succeeds: C = min(A*factor, B)\x0a\x0aLIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)\x0a\x0aDIFFERENCE - subtract colors from underlying image.\x0a\x0aEXCLUSION - similar to DIFFERENCE, but less extreme.\x0a\x0aMULTIPLY - Multiply the colors, result will always be darker.\x0a\x0aSCREEN - Opposite multiply, uses inverse values of the colors.\x0a\x0aOVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.\x0a\x0aHARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.\x0a\x0aSOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.\x0a\x0aDODGE - Lightens light tones and increases contrast, ignores darks. Called \x22\x22Color Dodge\x22\x22 in Illustrator and Photoshop.\x0a\x0aBURN - Darker areas are applied, increasing contrast, ignores lights. Called \x22\x22Color Burn\x22\x22 in Illustrator and Photoshop.\x22\x0a\x0a\x09pjsImage blend: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blend:sY:sW:sH:dX:dY:dW:dH:mode:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "copyImage:sX:sY:sW:sH:dX:dY:dW:dH:",
protocol: 'not yet classified',
fn: function (aPjsImage,aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._copy_sx_sY_sW_sH_dX_dY_dW_dH_($recv(aPjsImage)._pjsImage(),aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyImage:sX:sY:sW:sH:dX:dY:dW:dH:",{aPjsImage:aPjsImage,aSourceX:aSourceX,aSourceY:aSourceY,aSourceW:aSourceW,aSourceH:aSourceH,aDestX:aDestX,aDestY:aDestY,aDestW:aDestW,aDestH:aDestH},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH"],
source: "copyImage: aPjsImage sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH\x0a\x0a\x09pjsImage copy: aPjsImage pjsImage sx: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy:sx:sY:sW:sH:dX:dY:dW:dH:", "pjsImage"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "copySX:sY:sW:sH:dX:dY:dW:dH:",
protocol: 'not yet classified',
fn: function (aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._copy_sY_sW_sH_dX_dY_dW_dH_(aSourceX,aSourceY,aSourceW,aSourceH,aDestX,aDestY,aDestW,aDestH);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copySX:sY:sW:sH:dX:dY:dW:dH:",{aSourceX:aSourceX,aSourceY:aSourceY,aSourceW:aSourceW,aSourceH:aSourceH,aDestX:aDestX,aDestY:aDestY,aDestW:aDestW,aDestH:aDestH},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSourceX", "aSourceY", "aSourceW", "aSourceH", "aDestX", "aDestY", "aDestW", "aDestH"],
source: "copySX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH\x0a\x0a\x09pjsImage copy:aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy:sY:sW:sH:dX:dY:dW:dH:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "filter:",
protocol: 'not yet classified',
fn: function (aKind){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._filter_(aKind);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filter:",{aKind:aKind},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKind"],
source: "filter: aKind\x0a\x0a\x09\x22THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, or DILATE\x22\x0a\x0a\x09pjsImage filter: aKind",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filter:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "filter:param:",
protocol: 'not yet classified',
fn: function (aKind,aFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._filter_param_(aKind,aFloat);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filter:param:",{aKind:aKind,aFloat:aFloat},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aKind", "aFloat"],
source: "filter: aKind param: aFloat\x0a\x0a\x09pjsImage filter: aKind param: aFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filter:param:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "get",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsImage"])._get();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "get\x0a\x0a\x09^pjsImage get",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "getX:y:",
protocol: 'not yet classified',
fn: function (anXInt,anYInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsImage"])._get_y_(anXInt,anYInt);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getX:y:",{anXInt:anXInt,anYInt:anYInt},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anXInt", "anYInt"],
source: "getX: anXInt y: anYInt\x0a\x0a\x09^pjsImage get: anXInt y: anYInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get:y:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "getX:y:width:height:",
protocol: 'not yet classified',
fn: function (anXInt,anYInt,aWInt,aHInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsImage"])._get_y_width_height_(anXInt,anYInt,aWInt,aHInt);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getX:y:width:height:",{anXInt:anXInt,anYInt:anYInt,aWInt:aWInt,aHInt:aHInt},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anXInt", "anYInt", "aWInt", "aHInt"],
source: "getX: anXInt y: anYInt width: aWInt height: aHInt\x0a\x0a\x09^pjsImage get: anXInt y: anYInt width: aWInt height: aHInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get:y:width:height:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsImage"])._height();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x0a\x09^pjsImage height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "initPjsImage",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsImage"]=self._newImageJs();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsImage",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initPjsImage\x0a  \x0a    pjsImage := self newImageJs",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newImageJs"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "initPjsImage:",
protocol: 'not yet classified',
fn: function (img){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsImage"]=self._newImageJs_(img);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsImage:",{img:img},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["img"],
source: "initPjsImage: img\x0a  \x0a    pjsImage := self newImageJs: img",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newImageJs:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "initPjsImageWidth:height:",
protocol: 'not yet classified',
fn: function (width,height){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsImage"]=self._newImageWidthJs_height_(width,height);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsImageWidth:height:",{width:width,height:height},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["width", "height"],
source: "initPjsImageWidth: width height: height\x0a  \x0a    pjsImage := self newImageWidthJs: width height: height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newImageWidthJs:height:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "initPjsImageWidth:height:format:",
protocol: 'not yet classified',
fn: function (width,height,format){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsImage"]=self._newImageWidthJs_height_format_(width,height,format);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsImageWidth:height:format:",{width:width,height:height,format:format},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["width", "height", "format"],
source: "initPjsImageWidth: width height: height format: format\x0a  \x0a    pjsImage := self newImageWidthJs: width height: height format: format",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newImageWidthJs:height:format:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "loadPixels",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._loadPixels();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadPixels",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadPixels\x0a\x0a\x09pjsImage loadPixels",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadPixels"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "maskArray:",
protocol: 'not yet classified',
fn: function (anIntArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._mask_(anIntArray);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maskArray:",{anIntArray:anIntArray},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIntArray"],
source: "maskArray: anIntArray\x0a\x0a\x09pjsImage mask: anIntArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mask:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "maskImage:",
protocol: 'not yet classified',
fn: function (aPjsImage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._mask_($recv(aPjsImage)._pjsImage());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"maskImage:",{aPjsImage:aPjsImage},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage"],
source: "maskImage: aPjsImage\x0a\x0a\x09pjsImage mask: aPjsImage pjsImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mask:", "pjsImage"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "newImageJs",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new p.PImage() ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImageJs",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newImageJs\x0a  \x0a     <return new p.PImage() >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "newImageJs:",
protocol: 'not yet classified',
fn: function (img){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.PImage(img) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImageJs:",{img:img},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["img"],
source: "newImageJs: img\x0a  \x0a    < return new p.PImage(img) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "newImageWidthJs:height:",
protocol: 'not yet classified',
fn: function (width,height){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.PImage(width, height) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImageWidthJs:height:",{width:width,height:height},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["width", "height"],
source: "newImageWidthJs: width height: height\x0a  \x0a    < return new p.PImage(width, height) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "newImageWidthJs:height:format:",
protocol: 'not yet classified',
fn: function (width,height,format){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.PImage(width, height, format) ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImageWidthJs:height:format:",{width:width,height:height,format:format},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["width", "height", "format"],
source: "newImageWidthJs: width height: height format: format\x0a  \x0a    < return new p.PImage(width, height, format) >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "pixels",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsImage"])._pixels();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pixels",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pixels\x0a\x0a\x09^pjsImage pixels",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pixels"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "pjsImage",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@pjsImage"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsImage\x0a\x0a\x09^pjsImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "resizeWidth:height:",
protocol: 'not yet classified',
fn: function (aResizedWInt,aResizedHInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._resize_height_(aResizedWInt,aResizedHInt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resizeWidth:height:",{aResizedWInt:aResizedWInt,aResizedHInt:aResizedHInt},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aResizedWInt", "aResizedHInt"],
source: "resizeWidth: aResizedWInt height: aResizedHInt\x0a\x0a\x09pjsImage resize: aResizedWInt height: aResizedHInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resize:height:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "save:",
protocol: 'not yet classified',
fn: function (aFileNameString){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._save_(aFileNameString);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"save:",{aFileNameString:aFileNameString},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFileNameString"],
source: "save: aFileNameString\x0a\x0a\x09pjsImage save: aFileNameString",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["save:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "setX:y:color:",
protocol: 'not yet classified',
fn: function (anXInt,anYInt,aColorType){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._set_y_color_(anXInt,anYInt,aColorType);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setX:y:color:",{anXInt:anXInt,anYInt:anYInt,aColorType:aColorType},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anXInt", "anYInt", "aColorType"],
source: "setX: anXInt y: anYInt color: aColorType\x0a\x0a\x09pjsImage set: anXInt y: anYInt  color: aColorType",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:y:color:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "setX:y:image:",
protocol: 'not yet classified',
fn: function (anXInt,anYInt,aPjsImage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._set_y_image_(anXInt,anYInt,$recv(aPjsImage)._pjsImage());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setX:y:image:",{anXInt:anXInt,anYInt:anYInt,aPjsImage:aPjsImage},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anXInt", "anYInt", "aPjsImage"],
source: "setX: anXInt y: anYInt image: aPjsImage\x0a\x0a\x09pjsImage set: anXInt y: anYInt  image: aPjsImage pjsImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:y:image:", "pjsImage"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "updatePixels",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._updatePixels();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updatePixels",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updatePixels\x0a\x0a\x09pjsImage updatePixels",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updatePixels"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "updatePixelsX:y:width:height:",
protocol: 'not yet classified',
fn: function (anUpperleftXCoordInt,anUpperleftYCoordInt,aWInt,aHInt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsImage"])._updatePixels_y_width_height_(anUpperleftXCoordInt,anUpperleftYCoordInt,aWInt,aHInt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updatePixelsX:y:width:height:",{anUpperleftXCoordInt:anUpperleftXCoordInt,anUpperleftYCoordInt:anUpperleftYCoordInt,aWInt:aWInt,aHInt:aHInt},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anUpperleftXCoordInt", "anUpperleftYCoordInt", "aWInt", "aHInt"],
source: "updatePixelsX: anUpperleftXCoordInt y:  anUpperleftYCoordInt width: aWInt height: aHInt\x0a\x0a\x09pjsImage updatePixels: anUpperleftXCoordInt y:  anUpperleftYCoordInt width: aWInt height: aHInt",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updatePixels:y:width:height:"]
}),
$globals.PjsImage);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsImage"])._width();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.PjsImage)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x0a\x09^pjsImage width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width"]
}),
$globals.PjsImage);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=self._new();
$recv(instance)._initPjsImage();
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{instance:instance},$globals.PjsImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a\x09| instance |\x0a\x0a  instance := self new.\x0a  instance initPjsImage.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsImage"]
}),
$globals.PjsImage.klass);

$core.addMethod(
$core.method({
selector: "newImage:",
protocol: 'not yet classified',
fn: function (anImage){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsImage.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsImage_(anImage);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newImage:",{anImage:anImage,instance:instance},$globals.PjsImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anImage"],
source: "newImage: anImage\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsImage: anImage.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsImage:"]
}),
$globals.PjsImage.klass);

$core.addMethod(
$core.method({
selector: "newWidth:heigth:",
protocol: 'not yet classified',
fn: function (aWidth,aHeight){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsImage.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsImageWidth_height_(aWidth,aHeight);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWidth:heigth:",{aWidth:aWidth,aHeight:aHeight,instance:instance},$globals.PjsImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "newWidth: aWidth heigth: aHeight\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsImageWidth: aWidth height: aHeight.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsImageWidth:height:"]
}),
$globals.PjsImage.klass);

$core.addMethod(
$core.method({
selector: "newWidth:heigth:format:",
protocol: 'not yet classified',
fn: function (aWidth,aHeight,aFormat){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsImage.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsImageWidth_height_format_(aWidth,aHeight,aFormat);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newWidth:heigth:format:",{aWidth:aWidth,aHeight:aHeight,aFormat:aFormat,instance:instance},$globals.PjsImage.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight", "aFormat"],
source: "newWidth: aWidth heigth: aHeight format: aFormat\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsImageWidth: aWidth height: aHeight format: aFormat.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsImageWidth:height:format:"]
}),
$globals.PjsImage.klass);


$core.addClass('PjsInterface', $globals.Object, ['processing'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "alpha:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._alpha_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"alpha:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "alpha: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing alpha: aColor\x0a    \x0a   \x22Extracts the alpha value from a color..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ambient:value2:value3:",
protocol: 'material properties',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ambient_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ambient:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "ambient: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing ambient: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a    \x22Sets the ambient reflectance for shapes drawn to the screen. \x0a    This is combined with the ambient light component of environment. \x0a    The color components set through the parameters define the reflectance. \x0a    For example in the default color mode, setting v1=255, v2=126, v3=0, would cause all the red light to reflect and \x0a    half of the green light to reflect. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ambient:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ambientColor:",
protocol: 'material properties',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ambient_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ambientColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "ambientColor: aColor\x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing ambient: aColor\x0a    \x0a    \x22Sets the ambient reflectance for shapes drawn to the screen. \x0a    This is combined with the ambient light component of environment. \x0a    The color components set through the parameters define the reflectance. \x0a    For example in the default color mode, setting v1=255, v2=126, v3=0, would cause all the red light to reflect and \x0a    half of the green light to reflect. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ambient:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ambientGray:",
protocol: 'material properties',
fn: function (aGrayValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ambient_(aGrayValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ambientGray:",{aGrayValue:aGrayValue},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGrayValue"],
source: "ambientGray: aGrayValue\x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing ambient: aGrayValue\x0a    \x0a    \x22Sets the ambient reflectance for shapes drawn to the screen. \x0a    This is combined with the ambient light component of environment. \x0a    The color components set through the parameters define the reflectance. \x0a    For example in the default color mode, setting v1=255, v2=126, v3=0, would cause all the red light to reflect and \x0a    half of the green light to reflect. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ambient:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ambientLightV1:v2:v3:",
protocol: 'lights',
fn: function (aV1,aV2,aV3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ambientLight_v2_v3_(aV1,aV2,aV3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ambientLightV1:v2:v3:",{aV1:aV1,aV2:aV2,aV3:aV3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aV1", "aV2", "aV3"],
source: "ambientLightV1: aV1 v2: aV2 v3: aV3 \x0a\x09\x22v1 int or float: red or hue value\x0a\x09v2 int or float: green or hue value \x0a\x09v3 int or float: green or hue value \x0a\x09x int or float: x-coordinate of the light \x0a\x09y int or float: y-coordinate of the light \x0a\x09z int or float: z-coordinate of the light \x22\x0a    \x0a    \x09processing ambientLight: aV1 v2: aV2 v3: aV3 \x0a\x0a\x09\x22Adds an ambient light. Ambient light doesn't come from a specific direction, \x0a    the rays have light have bounced around so much that objects are evenly lit from all sides. \x0a    Ambient lights are almost always used in combination with other types of lights. \x0a    Lights need to be included in the draw() to remain persistent in a looping program. \x0a    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. \x0a    The effect of the parameters is determined by the current color mode.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ambientLight:v2:v3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ambientLightV1:v2:v3:x:y:z:",
protocol: 'lights',
fn: function (aV1,aV2,aV3,aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ambientLight_v2_v3_x_y_z_(aV1,aV2,aV3,aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ambientLightV1:v2:v3:x:y:z:",{aV1:aV1,aV2:aV2,aV3:aV3,aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aV1", "aV2", "aV3", "aX", "aY", "aZ"],
source: "ambientLightV1: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ\x0a\x09\x22v1 int or float: red or hue value \x0a\x09v2 int or float: green or hue value \x0a\x09v3 int or float: green or hue value \x0a\x09x int or float: x-coordinate of the light \x0a\x09y int or float: y-coordinate of the light \x0a\x09z int or float: z-coordinate of the light \x22\x0a    \x0a    \x09processing ambientLight: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ\x0a\x0a\x09\x22Adds an ambient light. Ambient light doesn't come from a specific direction, \x0a    the rays have light have bounced around so much that objects are evenly lit from all sides. \x0a    Ambient lights are almost always used in combination with other types of lights. \x0a    Lights need to be included in the draw() to remain persistent in a looping program. \x0a    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. \x0a    The effect of the parameters is determined by the current color mode.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ambientLight:v2:v3:x:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "applyMatrix:n01:n02:n03:n04:n05:n06:n07:n08:n09:n10:n11:n12:n13:n14:n15:",
protocol: 'sketch transform',
fn: function (aN00,aN01,aN02,aN03,aN04,aN05,aN06,aN07,aN08,aN09,aN10,aN11,aN12,aN13,aN14,aN15){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._applyMatrix_n01_n02_n03_n04_n05_n06_n07_n08_n09_n10_n11_n12_n13_n14_n15_(aN00,aN01,aN02,aN03,aN04,aN05,aN06,aN07,aN08,aN09,aN10,aN11,aN12,aN13,aN14,aN15);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"applyMatrix:n01:n02:n03:n04:n05:n06:n07:n08:n09:n10:n11:n12:n13:n14:n15:",{aN00:aN00,aN01:aN01,aN02:aN02,aN03:aN03,aN04:aN04,aN05:aN05,aN06:aN06,aN07:aN07,aN08:aN08,aN09:aN09,aN10:aN10,aN11:aN11,aN12:aN12,aN13:aN13,aN14:aN14,aN15:aN15},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aN00", "aN01", "aN02", "aN03", "aN04", "aN05", "aN06", "aN07", "aN08", "aN09", "aN10", "aN11", "aN12", "aN13", "aN14", "aN15"],
source: "applyMatrix:aN00 n01: aN01 n02: aN02 n03: aN03 n04: aN04 n05: aN05 n06: aN06 n07: aN07 n08: aN08 n09: aN09 n10: aN10 n11: aN11 n12: aN12 n13: aN13 n14: aN14 n15: aN15\x0a\x09\x0a    \x22n00-n15 float: numbers which define the 4x4 matrix to be multiplied \x22\x0a    \x0a\x09processing applyMatrix: aN00 n01: aN01 n02: aN02 n03: aN03 n04: aN04 n05: aN05 n06: aN06 n07: aN07 n08: aN08 n09: aN09 n10: aN10 n11: aN11 n12: aN12 n13: aN13 n14: aN14 n15: aN15\x0a    \x0a    \x22Multiplies the current matrix by the one specified through the parameters. \x0a    This is very slow because it will try to calculate the inverse of the transform, so avoid it whenever possible. \x0a    The equivalent function in OpenGL is glMultMatrix().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["applyMatrix:n01:n02:n03:n04:n05:n06:n07:n08:n09:n10:n11:n12:n13:n14:n15:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "arcX:y:width:height:start:stop:",
protocol: '2D primitives',
fn: function (aX,aY,aWidth,aHeight,aStart,aStop){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._arc_y_width_height_start_stop_(aX,aY,aWidth,aHeight,aStart,aStop);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"arcX:y:width:height:start:stop:",{aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight,aStart:aStart,aStop:aStop},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeight", "aStart", "aStop"],
source: "arcX: aX y: aY width: aWidth height: aHeight start: aStart stop: aStop\x0a\x0a\x09processing arc: aX y: aY width: aWidth height: aHeight start: aStart stop: aStop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["arc:y:width:height:start:stop:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "background:value2:value3:",
protocol: 'color settings',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"background:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "background: aValue1\x09value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value (depending on the current color mode)\x0a\x09value2 \x09int or float: green or saturation value (depending on the current color mode)\x0a\x09value3 \x09int or float: blue or brightness value (depending on the current color mode)\x22\x0a    \x0a\x09processing background: aValue1\x09value2: aValue2 value3: aValue3 \x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "background:value2:value3:alpha:",
protocol: 'color settings',
fn: function (aValue1,aValue2,aValue3,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_value2_value3_alpha_(aValue1,aValue2,aValue3,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"background:value2:value3:alpha:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "background: aValue1\x09value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value (depending on the current color mode)\x0a\x09value2 \x09int or float: green or saturation value (depending on the current color mode)\x0a\x09value3 \x09int or float: blue or brightness value (depending on the current color mode)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aValue1\x09value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:value2:value3:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "backgroundColor:",
protocol: 'color settings',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "backgroundColor: aColor\x0a\x09\x22color \x09color: any value of the color datatype\x22\x0a    \x0a\x09processing background: aColor \x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "backgroundColor:alpha:",
protocol: 'color settings',
fn: function (aColor,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_alpha_(aColor,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundColor:alpha:",{aColor:aColor,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor", "anAlpha"],
source: "backgroundColor: aColor alpha: anAlpha\x0a\x09\x22color \x09color: any value of the color datatype\x0a    alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aColor alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "backgroundGray:",
protocol: 'color settings',
fn: function (aGrayValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_(aGrayValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundGray:",{aGrayValue:aGrayValue},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGrayValue"],
source: "backgroundGray: aGrayValue\x0a\x09\x22gray \x09int or float: specifies a value between white and black\x22\x0a    \x0a\x09processing background: aGrayValue\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "backgroundGray:alpha:",
protocol: 'color settings',
fn: function (aGrayValue,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_alpha_(aGrayValue,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundGray:alpha:",{aGrayValue:aGrayValue,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGrayValue", "anAlpha"],
source: "backgroundGray: aGrayValue alpha: anAlpha\x0a\x09\x22gray \x09int or float: specifies a value between white and black\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aGrayValue alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "backgroundHex:",
protocol: 'color settings',
fn: function (aHex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_(aHex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundHex:",{aHex:aHex},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex"],
source: "backgroundHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a    alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aHex \x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "backgroundHex:alpha:",
protocol: 'color settings',
fn: function (aHex,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._background_alpha_(aHex,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"backgroundHex:alpha:",{aHex:aHex,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex", "anAlpha"],
source: "backgroundHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a    alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing background: aHex alpha: anAlpha\x0a    \x0a    \x22The background() function sets the color used for the background of the Processing window. \x0a    The default background is light gray. In the draw() function, \x0a    the background color is used to clear the display window at the beginning of each frame.\x0a    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.\x0a  \x09Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["background:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "beginCamera",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._beginCamera();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginCamera",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beginCamera\x0a\x09\x22The beginCamera() and endCamera() functions enable advanced customization of the camera space.\x0a    The functions are useful if you want to more control over camera movement, however for most users, the camera() function will be sufficient.\x0a\x09The camera functions will replace any transformations (such as rotate() or translate()) that occur before them in draw(), but \x0a    they will not automatically replace the camera transform itself.\x0a    For this reason, camera functions should be placed at the beginning of draw() (so that transformations happen afterwards), and \x0a    the camera() function can be used after beginCamera() if you want to reset the camera before applying transformations.\x0a\x09This function sets the matrix mode to the camera matrix so calls such as translate(), rotate(), applyMatrix() and resetMatrix() affect the camera. \x0a    beginCamera() should always be used with a following endCamera() and pairs of beginCamera() and endCamera() cannot be nested.\x22\x0a    \x0a    \x09processing beginCamera",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beginCamera"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "beginShape",
protocol: 'vertex',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._beginShape();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginShape",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beginShape\x0a\x0a\x09processing beginShape\x0a    \x0a    \x22Using the beginShape() and endShape() functions allow creating more complex forms.\x0a    beginShape() begins recording vertices for a shape and endShape() stops recording. \x0a    The value of the MODE parameter tells it which types of shapes to create from the provided vertices. \x0a    With no mode specified, the shape can be any irregular polygon. \x0a    The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. \x0a    After calling the beginShape() function, a series of vertex() commands must follow. \x0a    To stop drawing the shape, call endShape(). \x0a    The vertex() function with two parameters specifies a position in 2D and the vertex() function with three parameters specifies a position in 3D. \x0a    Each shape will be outlined with the current stroke color and filled with the fill color. \x0a    Transformations such as translate(), rotate(), and scale() do not work within beginShape(). \x0a    It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beginShape"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "beginShape:",
protocol: 'vertex',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._beginShape_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginShape:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "beginShape: aMode\x0a\x09\x22MODE \x09Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, QUAD_STRIP.\x22\x0a    \x0a\x09processing beginShape: aMode\x0a    \x0a    \x22Using the beginShape() and endShape() functions allow creating more complex forms.\x0a    beginShape() begins recording vertices for a shape and endShape() stops recording. \x0a    The value of the MODE parameter tells it which types of shapes to create from the provided vertices. \x0a    With no mode specified, the shape can be any irregular polygon. \x0a    The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. \x0a    After calling the beginShape() function, a series of vertex() commands must follow. \x0a    To stop drawing the shape, call endShape(). \x0a    The vertex() function with two parameters specifies a position in 2D and the vertex() function with three parameters specifies a position in 3D. \x0a    Each shape will be outlined with the current stroke color and filled with the fill color. \x0a    Transformations such as translate(), rotate(), and scale() do not work within beginShape(). \x0a    It is also not possible to use other shapes, such as ellipse() or rect() within beginShape()..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beginShape:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierDetail:",
protocol: 'curves',
fn: function (aDetailint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezierDetail_(aDetailint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierDetail:",{aDetailint:aDetailint},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDetailint"],
source: "bezierDetail: aDetailint\x0a\x09\x22Sets the resolution at which Beziers display. The default value is 20. This function is only useful when using the P3D or OPENGL renderer as the default (JAVA2D) renderer does not use this information.\x22\x0a\x09processing bezierDetail: aDetailint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezierDetail:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierPointA:b:c:d:t:",
protocol: 'curves',
fn: function (anA,aB,aC,aD,aT){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezierPoint_b_c_d_t_(anA,aB,aC,aD,aT);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierPointA:b:c:d:t:",{anA:anA,aB:aB,aC:aC,aD:aD,aT:aT},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anA", "aB", "aC", "aD", "aT"],
source: "bezierPointA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing bezierPoint: anA b: aB c: aC d: aD t: aT",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezierPoint:b:c:d:t:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierTangentA:b:c:d:t:",
protocol: 'curves',
fn: function (anA,aB,aC,aD,aT){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezierTangent_b_c_d_t_(anA,aB,aC,aD,aT);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierTangentA:b:c:d:t:",{anA:anA,aB:aB,aC:aC,aD:aD,aT:aT},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anA", "aB", "aC", "aD", "aT"],
source: "bezierTangentA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing bezierTangent: anA b: aB c: aC d: aD t: aT",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezierTangent:b:c:d:t:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierVertexCx1:cy1:cx2:cy2:x2:y2:",
protocol: 'vertex',
fn: function (aCx1,aCy1,aCx2,aCy2,aX2,aY2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezierVertex_cy1_cx2_cy2_x2_y2_(aCx1,aCy1,aCx2,aCy2,aX2,aY2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierVertexCx1:cy1:cx2:cy2:x2:y2:",{aCx1:aCx1,aCy1:aCy1,aCx2:aCx2,aCy2:aCy2,aX2:aX2,aY2:aY2},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCx1", "aCy1", "aCx2", "aCy2", "aX2", "aY2"],
source: "bezierVertexCx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2\x0a\x09\x22cx1 \x09The x-coordinate of 1st control point, either a float or int\x0a\x09cy1 \x09The y-coordinate of 1st control point, either a float or int\x0a\x09cz1 \x09The z-coordinate of 1st control point, either a float or int\x0a\x09cx2 \x09The x-coordinate of 2nd control point, either a float or int\x0a\x09cy2 \x09The y-coordinate of 2nd control point, either a float or int\x0a\x09cz2 \x09The z-coordinate of 2nd control point, either a float or int\x0a\x09x \x09The x-coordinate of anchor point, either a float or int\x0a\x09y \x09The y-coordinate of anchor point, either a float or int\x0a\x09z \x09The z-coordinate of anchor point, either a float or int\x22\x0a    \x0a\x09processing bezierVertex: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezierVertex:cy1:cx2:cy2:x2:y2:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierVertexCx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",
protocol: 'vertex',
fn: function (aCx1,aCy1,aCz1,aCx2,aCy2,aCz2,aX2,aY2,aZ2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezierVertex_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_(aCx1,aCy1,aCz1,aCx2,aCy2,aCz2,aX2,aY2,aZ2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierVertexCx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",{aCx1:aCx1,aCy1:aCy1,aCz1:aCz1,aCx2:aCx2,aCy2:aCy2,aCz2:aCz2,aX2:aX2,aY2:aY2,aZ2:aZ2},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aCx1", "aCy1", "aCz1", "aCx2", "aCy2", "aCz2", "aX2", "aY2", "aZ2"],
source: "bezierVertexCx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2 x2: aX2 y2: aY2 z2: aZ2\x0a\x09\x22cx1 \x09The x-coordinate of 1st control point, either a float or int\x0a\x09cy1 \x09The y-coordinate of 1st control point, either a float or int\x0a\x09cz1 \x09The z-coordinate of 1st control point, either a float or int\x0a\x09cx2 \x09The x-coordinate of 2nd control point, either a float or int\x0a\x09cy2 \x09The y-coordinate of 2nd control point, either a float or int\x0a\x09cz2 \x09The z-coordinate of 2nd control point, either a float or int\x0a\x09x \x09The x-coordinate of anchor point, either a float or int\x0a\x09y \x09The y-coordinate of anchor point, either a float or int\x0a\x09z \x09The z-coordinate of anchor point, either a float or int\x22\x0a    \x0a\x09processing bezierVertex:  aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2 x2: aX2 y2: aY2 z2: aZ2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezierVertex:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierX1:y1:cx1:cy1:cx2:cy2:x2:y2:",
protocol: 'curves',
fn: function (aX1,aY1,aCx1,aCy1,aCx2,aCy2,aX2,aY2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezier_y1_cx1_cy1_cx2_cy2_x2_y2_($recv(aX1)._aX1(),aY1,aCx1,aCy1,aCx2,aCy2,aX2,aY2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierX1:y1:cx1:cy1:cx2:cy2:x2:y2:",{aX1:aX1,aY1:aY1,aCx1:aCx1,aCy1:aCy1,aCx2:aCx2,aCy2:aCy2,aX2:aX2,aY2:aY2},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aCx1", "aCy1", "aCx2", "aCy2", "aX2", "aY2"],
source: "bezierX1: aX1 y1: aY1 cx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor point\x0a\x09cx1, cy1, cz1 \x09int or float: coordinates for the first control point\x0a\x09cx2, cy2, cz2 \x09int or float: coordinates for the second control point\x0a\x09x2, y2, z2 \x09int or float: coordinates for the second anchor point\x22\x0a    \x0a\x09processing bezier: aX1 aX1 y1: aY1 cx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezier:y1:cx1:cy1:cx2:cy2:x2:y2:", "aX1"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "bezierX1:y1:z1:cx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",
protocol: 'curves',
fn: function (aX1,aY1,aZ1,aCx1,aCy1,aCz1,aCx2,aCy2,aCz2,aX2,aY2,aZ2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._bezier_y1_z1_cx1_cy1_cz1_cx2_cy2_cz2_x2_y2_z2_(aX1,aY1,aZ1,aCx1,aCy1,aCz1,aCx2,aCy2,aCz2,aX2,aY2,aZ2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"bezierX1:y1:z1:cx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:",{aX1:aX1,aY1:aY1,aZ1:aZ1,aCx1:aCx1,aCy1:aCy1,aCz1:aCz1,aCx2:aCx2,aCy2:aCy2,aCz2:aCz2,aX2:aX2,aY2:aY2,aZ2:aZ2},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aZ1", "aCx1", "aCy1", "aCz1", "aCx2", "aCy2", "aCz2", "aX2", "aY2", "aZ2"],
source: "bezierX1: aX1 y1: aY1 z1: aZ1 cx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2  x2: aX2 y2: aY2 z2: aZ2\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor point\x0a\x09cx1, cy1, cz1 \x09int or float: coordinates for the first control point\x0a\x09cx2, cy2, cz2 \x09int or float: coordinates for the second control point\x0a\x09x2, y2, z2 \x09int or float: coordinates for the second anchor point\x22\x0a\x0a\x09processing bezier: aX1 y1: aY1 z1: aZ1 cx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2  x2: aX2 y2: aY2 z2: aZ2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["bezier:y1:z1:cx1:cy1:cz1:cx2:cy2:cz2:x2:y2:z2:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "blendColor1:color2:mode:",
protocol: 'color creating and reading',
fn: function (aColor1,aColor2,aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._blend_color2_mode_(aColor1,aColor2,aMode);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blendColor1:color2:mode:",{aColor1:aColor1,aColor2:aColor2,aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor1", "aColor2", "aMode"],
source: "blendColor1: aColor1 color2: aColor2 mode: aMode\x0a\x09\x22c1 \x09color: the first color to blend\x0a\x09c2 \x09color: the second color to blend\x0a\x09MODE \x09Either BLEND, ADD, SUBTRACT, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, or BURN\x22\x0a    \x0a\x09^processing blend: aColor1 color2: aColor2 mode: aMode\x0a    \x0a   \x22Blends two color values together based on the blending mode given as the MODE parameter. The possible modes are described in the reference for the blend() function.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blend:color2:mode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "blendImage:x:y:width:height:dx:dy:dwidth:dheight:mode:",
protocol: 'image pixels',
fn: function (aPjsImage,aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight,aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._blend_x_y_width_height_dx_dy_dwidth_dheight_mode_($recv(aPjsImage)._pjsImage(),aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight,aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blendImage:x:y:width:height:dx:dy:dwidth:dheight:mode:",{aPjsImage:aPjsImage,aX:aX,aY:aY,aWidth:aWidth,aHeigt:aHeigt,dX:dX,dY:dY,aDWidth:aDWidth,aDHeight:aDHeight,aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aX", "aY", "aWidth", "aHeigt", "dX", "dY", "aDWidth", "aDHeight", "aMode"],
source: "blendImage: aPjsImage x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode\x0a\x09\x22x int: X coordinate of the source's upper left corner \x0a\x09y int: Y coordinate of the source's upper left corner \x0a\x09width int: source image width \x0a\x09height int: source image height \x0a\x09dx int: X coordinate of the destination's upper left corner \x0a\x09dy int: Y coordinate of the destination's upper left corner \x0a\x09dwidth int: destination image width \x0a\x09dheight int: destination image height \x0a\x09srcImg PImage:a image variable referring to the source image. \x0a\x09MODE Either BLEND, ADD, SUBTRACT, LIGHTEST, DARKEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN \x22\x0a    \x0a\x09processing blend: aPjsImage pjsImage x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode\x0a    \x0a    \x22Blends a region of pixels into the image specified by the img parameter. \x0a       These copies utilize full alpha channel support and a choice of the following modes to \x0a       blend the colors of source pixels (A) with the ones of pixels in the destination image (B):\x0a\x09BLEND - linear interpolation of colours: C = A*factor + B\x0a\x09ADD - additive blending with white clip: C = min(A*factor + B, 255)\x0a\x09SUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)\x0a\x09DARKEST - only the darkest colour succeeds: C = min(A*factor, B)\x0a\x09LIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)\x0a\x09DIFFERENCE - subtract colors from underlying image.\x0a\x09EXCLUSION - similar to DIFFERENCE, but less extreme.\x0a\x09MULTIPLY - Multiply the colors, result will always be darker.\x0a\x09SCREEN - Opposite multiply, uses inverse values of the colors.\x0a\x09OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.\x0a\x09HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.\x0a\x09SOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.\x0a\x09DODGE - Lightens light tones and increases contrast, ignores darks. Called \x22\x22Color Dodge\x22\x22 in Illustrator and Photoshop.\x0a\x09BURN - Darker areas are applied, increasing contrast, ignores lights. Called \x22\x22Color Burn\x22\x22 in Illustrator and Photoshop.\x0a\x09All modes use the alpha information (highest byte) of source image pixels as the blending factor. \x0a    If the source and destination regions are different sizes, the image will be automatically resized to \x0a    match the destination size. If the srcImg parameter is not used, the display window is used as the source image.\x0a\x09This function ignores imageMode()..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blend:x:y:width:height:dx:dy:dwidth:dheight:mode:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "blendX:y:width:height:dx:dy:dwidth:dheight:mode:",
protocol: 'image pixels',
fn: function (aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight,aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._blend_y_width_height_dx_dy_dwidth_dheight_mode_(aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight,aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blendX:y:width:height:dx:dy:dwidth:dheight:mode:",{aX:aX,aY:aY,aWidth:aWidth,aHeigt:aHeigt,dX:dX,dY:dY,aDWidth:aDWidth,aDHeight:aDHeight,aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeigt", "dX", "dY", "aDWidth", "aDHeight", "aMode"],
source: "blendX: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode\x0a\x09\x22x int: X coordinate of the source's upper left corner \x0a\x09y int: Y coordinate of the source's upper left corner \x0a\x09width int: source image width \x0a\x09height int: source image height \x0a\x09dx int: X coordinate of the destination's upper left corner \x0a\x09dy int: Y coordinate of the destination's upper left corner \x0a\x09dwidth int: destination image width \x0a\x09dheight int: destination image height \x0a\x09srcImg PImage:a image variable referring to the source image. \x0a\x09MODE Either BLEND, ADD, SUBTRACT, LIGHTEST, DARKEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN \x22\x0a    \x0a\x09processing blend: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode\x0a    \x0a    \x22Blends a region of pixels into the image specified by the img parameter. \x0a       These copies utilize full alpha channel support and a choice of the following modes to \x0a       blend the colors of source pixels (A) with the ones of pixels in the destination image (B):\x0a\x09BLEND - linear interpolation of colours: C = A*factor + B\x0a\x09ADD - additive blending with white clip: C = min(A*factor + B, 255)\x0a\x09SUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)\x0a\x09DARKEST - only the darkest colour succeeds: C = min(A*factor, B)\x0a\x09LIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)\x0a\x09DIFFERENCE - subtract colors from underlying image.\x0a\x09EXCLUSION - similar to DIFFERENCE, but less extreme.\x0a\x09MULTIPLY - Multiply the colors, result will always be darker.\x0a\x09SCREEN - Opposite multiply, uses inverse values of the colors.\x0a\x09OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.\x0a\x09HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.\x0a\x09SOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.\x0a\x09DODGE - Lightens light tones and increases contrast, ignores darks. Called \x22\x22Color Dodge\x22\x22 in Illustrator and Photoshop.\x0a\x09BURN - Darker areas are applied, increasing contrast, ignores lights. Called \x22\x22Color Burn\x22\x22 in Illustrator and Photoshop.\x0a\x09All modes use the alpha information (highest byte) of source image pixels as the blending factor. \x0a    If the source and destination regions are different sizes, the image will be automatically resized to \x0a    match the destination size. If the srcImg parameter is not used, the display window is used as the source image.\x0a\x09This function ignores imageMode()..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blend:y:width:height:dx:dy:dwidth:dheight:mode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "blue:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._blue_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"blue:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "blue: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing blue: aColor\x0a    \x0a   \x22 \x09Extracts the blue value from a color, scaled to match current colorMode(). \x0a   This value is always returned as a float so be careful not to assign it to an int value.\x0a\x09The blue() function is easy to use and undestand, but is slower than another technique. \x0a    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, \x0a    use a bit mask to remove the other color components. For example, the following two lines of code are equivalent:\x0a\x09float r1 = blue(myColor);\x0a\x09float r2 = myColor & 0xFF;\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["blue:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "box:",
protocol: '3D primitives',
fn: function (aSizeIntOrFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._box_(aSizeIntOrFloat);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"box:",{aSizeIntOrFloat:aSizeIntOrFloat},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSizeIntOrFloat"],
source: "box: aSizeIntOrFloat\x0a\x09\x22size \x09int or float: dimension of the box in all dimensions, creates a cube\x22\x0a    \x0a\x09processing box: aSizeIntOrFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["box:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "boxWidth:height:depth:",
protocol: '3D primitives',
fn: function (aWidth,aHeight,aDepth){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._box_height_depth_(aWidth,aHeight,aDepth);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"boxWidth:height:depth:",{aWidth:aWidth,aHeight:aHeight,aDepth:aDepth},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight", "aDepth"],
source: "boxWidth: aWidth height: aHeight depth: aDepth\x0a\x09\x22width \x09int or float: dimension of the box in the x-dimension\x0a\x09height \x09int or float: dimension of the box in the y-dimension\x0a\x09depth \x09int or float: dimension of the box in the z-dimension\x22\x0a    \x0a\x09processing box: aWidth height: aHeight depth: aDepth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["box:height:depth:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "brightness:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._brightness_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"brightness:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "brightness: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing brightness: aColor\x0a    \x0a   \x22Extracts the brightness value from a color.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["brightness:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "camera",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._camera();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"camera",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "camera\x0a\x09\x22eyeX float: x coordinate for the eye \x0a\x09eyeY float: y coordinate for the eye \x0a\x09eyeZ float: z coordinate for the eye \x0a\x09centerX float: x coordinate for the center of the scene \x0a\x09centerY float: y coordinate for the center of the scene \x0a\x09centerZ float: z coordinate for the center of the scene \x0a\x09upX float: usually 0.0, 1.0, or -1.0 \x0a\x09upY float: usually 0.0, 1.0, or -1.0 \x0a\x09upZ float: usually 0.0, 1.0, or -1.0 \x22\x0a    \x0a    \x09processing camera\x0a\x0a\x09\x22Sets the position of the camera through setting the eye position, the center of the scene, and which axis is facing upward. \x0a    Moving the eye position and the direction it is pointing (the center of the scene) allows the images to be seen from different angles. \x0a    The version without any parameters sets the camera to the default position, pointing to the center of the display window with the Y axis as up. \x0a    The default values are camera(width/2.0, height/2.0, (height/2.0) / tan(PI*60.0 / 360.0), width/2.0, height/2.0, 0, 0, 1, 0). \x0a    This function is similar to gluLookAt() in OpenGL, but it first clears the current camera settings.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["camera"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "cameraEyeX:eyeY:eyeZ:centerX:centerY:centerZ:upX:upY:upZ:",
protocol: 'camera',
fn: function (anEyeX,anEyeY,anEyeZ,aCenterX,aCenterY,aCenterZ,anUpX,anUpY,anUpZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._camera_eyeY_eyeZ_centerX_centerY_centerZ_upX_upY_upZ_(anEyeX,anEyeY,anEyeZ,aCenterX,aCenterY,aCenterZ,anUpX,anUpY,anUpZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cameraEyeX:eyeY:eyeZ:centerX:centerY:centerZ:upX:upY:upZ:",{anEyeX:anEyeX,anEyeY:anEyeY,anEyeZ:anEyeZ,aCenterX:aCenterX,aCenterY:aCenterY,aCenterZ:aCenterZ,anUpX:anUpX,anUpY:anUpY,anUpZ:anUpZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anEyeX", "anEyeY", "anEyeZ", "aCenterX", "aCenterY", "aCenterZ", "anUpX", "anUpY", "anUpZ"],
source: "cameraEyeX: anEyeX eyeY: anEyeY eyeZ: anEyeZ centerX: aCenterX centerY: aCenterY centerZ: aCenterZ upX: anUpX upY: anUpY upZ: anUpZ\x0a\x09\x22eyeX float: x coordinate for the eye \x0a\x09eyeY float: y coordinate for the eye \x0a\x09eyeZ float: z coordinate for the eye \x0a\x09centerX float: x coordinate for the center of the scene \x0a\x09centerY float: y coordinate for the center of the scene \x0a\x09centerZ float: z coordinate for the center of the scene \x0a\x09upX float: usually 0.0, 1.0, or -1.0 \x0a\x09upY float: usually 0.0, 1.0, or -1.0 \x0a\x09upZ float: usually 0.0, 1.0, or -1.0 \x22\x0a    \x0a    \x09processing camera: anEyeX eyeY: anEyeY eyeZ: anEyeZ centerX: aCenterX centerY: aCenterY centerZ: aCenterZ upX: anUpX upY: anUpY upZ: anUpZ\x0a\x0a\x09\x22Sets the position of the camera through setting the eye position, the center of the scene, and which axis is facing upward. \x0a    Moving the eye position and the direction it is pointing (the center of the scene) allows the images to be seen from different angles. \x0a    The version without any parameters sets the camera to the default position, pointing to the center of the display window with the Y axis as up. \x0a    The default values are camera(width/2.0, height/2.0, (height/2.0) / tan(PI*60.0 / 360.0), width/2.0, height/2.0, 0, 0, 1, 0). \x0a    This function is similar to gluLookAt() in OpenGL, but it first clears the current camera settings.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["camera:eyeY:eyeZ:centerX:centerY:centerZ:upX:upY:upZ:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorGray:",
protocol: 'color creating and reading',
fn: function (aGray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._color_(aGray);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorGray:",{aGray:aGray},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray"],
source: "colorGray: aGray \x0a\x09\x22gray \x09int or float: number specifying value between white and blackl\x22\x0a    \x0a\x09^processing color: aGray \x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["color:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorGray:alpha:",
protocol: 'color creating and reading',
fn: function (aGray,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._color_alpha_(aGray,anAlpha);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorGray:alpha:",{aGray:aGray,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray", "anAlpha"],
source: "colorGray: aGray alpha: anAlpha\x0a\x09\x22gray \x09int or float: number specifying value between white and black\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09^processing color: aGray alpha: anAlpha\x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["color:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorHex:",
protocol: 'color creating and reading',
fn: function (aHex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._color_(aHex);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorHex:",{aHex:aHex},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex"],
source: "colorHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x22\x0a    \x0a\x09^processing color: aHex\x0a    \x0a  \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["color:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorHex:alpha:",
protocol: 'color creating and reading',
fn: function (aHex,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._color_alpha_(aHex,anAlpha);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorHex:alpha:",{aHex:aHex,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex", "anAlpha"],
source: "colorHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09^processing color: aHex alpha: anAlpha \x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["color:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorMode:",
protocol: 'color settings',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._colorMode_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "colorMode: aMode\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x22\x0a    \x0a\x09processing colorMode: aMode \x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["colorMode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorMode:range1:range2:range3:",
protocol: 'color settings',
fn: function (aMode,aRange1,aRange2,aRange3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._colorMode_range1_range2_range3_(aMode,aRange1,aRange2,aRange3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorMode:range1:range2:range3:",{aMode:aMode,aRange1:aRange1,aRange2:aRange2,aRange3:aRange3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode", "aRange1", "aRange2", "aRange3"],
source: "colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x0a    range1 \x09int or float: range for the red or hue depending on the current color mode\x0a\x09range2 \x09int or float: range for the green or saturation depending on the current color mode\x0a\x09range3 \x09int or float: range for the blue or brightness depending on the current color mode\x22\x0a    \x0a\x09processing colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3\x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["colorMode:range1:range2:range3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorMode:range1:range2:range3:range4:",
protocol: 'color settings',
fn: function (aMode,aRange1,aRange2,aRange3,aRange4){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._colorMode_range1_range2_range3_range4_(aMode,aRange1,aRange2,aRange3,aRange4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorMode:range1:range2:range3:range4:",{aMode:aMode,aRange1:aRange1,aRange2:aRange2,aRange3:aRange3,aRange4:aRange4},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode", "aRange1", "aRange2", "aRange3", "aRange4"],
source: "colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3 range4: aRange4\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x0a    range1 \x09int or float: range for the red or hue depending on the current color mode\x0a\x09range2 \x09int or float: range for the green or saturation depending on the current color mode\x0a\x09range3 \x09int or float: range for the blue or brightness depending on the current color mode\x0a    range4 \x09int or float: range for the alpha\x22\x0a    \x0a\x09processing colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3 range4: aRange4\x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["colorMode:range1:range2:range3:range4:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorMode:range:",
protocol: 'color settings',
fn: function (aMode,aRange){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._colorMode_range_(aMode,aRange);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorMode:range:",{aMode:aMode,aRange:aRange},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode", "aRange"],
source: "colorMode: aMode range: aRange\x0a\x09\x22mode \x09Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness\x0a    range \x09int or float: range for all color elements\x22\x0a    \x0a\x09processing colorMode: aMode range: aRange\x0a    \x0a    \x22Changes the way Processing interprets color data. \x0a    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the\x0a    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. \x0a    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. \x0a    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["colorMode:range:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorValue1:value2:value3:",
protocol: 'color creating and reading',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._color_value2_value3_(aValue1,aValue2,aValue3);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorValue1:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "colorValue1: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x22\x0a    \x0a\x09^processing color: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a     \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["color:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "colorValue1:value2:value3:alpha:",
protocol: 'color creating and reading',
fn: function (aValue1,aValue2,aValue3,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._color_value2_value3_alpha_(aValue1,aValue2,aValue3,anAlpha);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"colorValue1:value2:value3:alpha:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "colorValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09 ^processing color: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22Creates colors for storing in variables of the color datatype. \x0a    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). \x0a    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return \x0a    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number\x0a    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.\x0a\x09Color can also be created using hexadecimal notation. For example, \x22\x22color(0, 102, 153)\x22\x22 is equivalent to \x22\x22color(#006699)\x22\x22 and \x22\x22color(0x006699)\x22\x22. \x0a    To create a color with an alpha value using hexadecimal notation, it's necessary to use the \x22\x220x\x22\x22 prefix, \x0a    for example \x22\x22color(0xCC006699)\x22\x22, which is equivalent to \x22\x22color(0, 102, 153, 204)\x22\x22. \x0a    Note the alpha value is first in the hexadecimal notation and last in the RGB notation.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["color:value2:value3:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "copyImage:x:y:width:height:dx:dy:dwidth:dheight:",
protocol: 'image pixels',
fn: function (aPjsImage,aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._copy_x_y_width_height_dx_dy_dwidth_dheight_($recv(aPjsImage)._pjsImage(),aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyImage:x:y:width:height:dx:dy:dwidth:dheight:",{aPjsImage:aPjsImage,aX:aX,aY:aY,aWidth:aWidth,aHeigt:aHeigt,dX:dX,dY:dY,aDWidth:aDWidth,aDHeight:aDHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aX", "aY", "aWidth", "aHeigt", "dX", "dY", "aDWidth", "aDHeight"],
source: "copyImage: aPjsImage x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight\x0a\x09\x22x int: X coordinate of the source's upper left corner \x0a\x09y int: Y coordinate of the source's upper left corner \x0a\x09width int: source image width \x0a\x09height int: source image height \x0a\x09dx int: X coordinate of the destination's upper left corner \x0a\x09dy int: Y coordinate of the destination's upper left corner \x0a\x09dwidth int: destination image width \x0a\x09dheight int: destination image height \x0a\x09srcImg PImage:a image variable referring to the source image. \x22\x0a    \x0a\x09processing copy: aPjsImage pjsImage  x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight \x0a    \x0a    \x22Copies a region of pixels from the display window to another area of the display window and \x0a      copies a region of pixels from an image used as the srcImg parameter into the display window. \x0a      If the source and destination regions aren't the same size, it will automatically resize the source pixels \x0a      to fit the specified target region. No alpha information is used in the process, \x0a      however if the source image has an alpha channel set, it will be copied as well. \x0a      This function ignores imageMode().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy:x:y:width:height:dx:dy:dwidth:dheight:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "copyX:y:width:height:dx:dy:dwidth:dheight:",
protocol: 'image pixels',
fn: function (aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._copy_y_width_height_dx_dy_dwidth_dheight_(aX,aY,aWidth,aHeigt,dX,dY,aDWidth,aDHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"copyX:y:width:height:dx:dy:dwidth:dheight:",{aX:aX,aY:aY,aWidth:aWidth,aHeigt:aHeigt,dX:dX,dY:dY,aDWidth:aDWidth,aDHeight:aDHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeigt", "dX", "dY", "aDWidth", "aDHeight"],
source: "copyX: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight\x0a\x09\x22x int: X coordinate of the source's upper left corner \x0a\x09y int: Y coordinate of the source's upper left corner \x0a\x09width int: source image width \x0a\x09height int: source image height \x0a\x09dx int: X coordinate of the destination's upper left corner \x0a\x09dy int: Y coordinate of the destination's upper left corner \x0a\x09dwidth int: destination image width \x0a\x09dheight int: destination image height \x0a\x09srcImg PImage:a image variable referring to the source image.  \x22\x0a    \x0a\x09processing copy:aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight \x0a    \x0a    \x22Copies a region of pixels from the display window to another area of the display window and \x0a      copies a region of pixels from an image used as the srcImg parameter into the display window. \x0a      If the source and destination regions aren't the same size, it will automatically resize the source pixels \x0a      to fit the specified target region. No alpha information is used in the process, \x0a      however if the source image has an alpha channel set, it will be copied as well. \x0a      This function ignores imageMode().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["copy:y:width:height:dx:dy:dwidth:dheight:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "createImageWidth:height:format:",
protocol: 'image loading and displaying ',
fn: function (aWidth,aHeight,aFormat){
var self=this;
function $PjsImage(){return $globals.PjsImage||(typeof PjsImage=="undefined"?nil:PjsImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PjsImage())._newImage_($recv(self["@processing"])._createImage_height_format_(aWidth,aHeight,aFormat));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"createImageWidth:height:format:",{aWidth:aWidth,aHeight:aHeight,aFormat:aFormat},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight", "aFormat"],
source: "createImageWidth: aWidth height: aHeight format: aFormat\x0a\x09\x22width int: width in pixels \x0a\x09height int: height in pixels \x0a\x09format Either RGB, ARGB, ALPHA (grayscale alpha channel) \x22\x0a    \x0a\x09^ PjsImage newImage: (processing createImage: aWidth height: aHeight format: aFormat)\x0a    \x0a     \x22Creates a new PImage (the datatype for storing images). \x0a      This provides a fresh buffer of pixels to play with. \x0a      Set the size of the buffer with the width and height parameters. \x0a      The format parameter defines how the pixels are stored. \x0a      See the PImage reference for more information. \x0a      Be sure to include all three parameters, specifying only the width \x0a      and height (but no format) will produce a strange error.\x22",
referencedClasses: ["PjsImage"],
//>>excludeEnd("ide");
messageSends: ["newImage:", "createImage:height:format:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "cursor",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._cursor();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cursor",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cursor\x0a\x09\x22MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT \x0a\x09image PImage: any variable of type PImage \x0a\x09x int: the horizonal active spot of the cursor \x0a\x09y int: the vertical active spot of the cursor \x22\x0a    \x0a\x09 ^processing cursor\x0a \x0a \x09\x22Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. \x0a    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. \x0a    It is not possible to load an image as the cursor if you are exporting your program for the Web. \x0a    The values for parameters x and y must be less than the dimensions of the image.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cursor"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "cursorImage:x:y:",
protocol: 'environmant',
fn: function (aPjsImage,aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._cursor_x_y_($recv(aPjsImage)._pjsImage(),aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cursorImage:x:y:",{aPjsImage:aPjsImage,aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aX", "aY"],
source: "cursorImage: aPjsImage x: aX y: aY\x0a\x09\x22MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT \x0a\x09image PImage: any variable of type PImage \x0a\x09x int: the horizonal active spot of the cursor \x0a\x09y int: the vertical active spot of the cursor \x22\x0a    \x0a\x09 processing cursor: aPjsImage pjsImage  x: aX y: aY\x0a \x0a \x09\x22Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. \x0a    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. \x0a    It is not possible to load an image as the cursor if you are exporting your program for the Web. \x0a    The values for parameters x and y must be less than the dimensions of the image.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cursor:x:y:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "cursorMode:",
protocol: 'environmant',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._cursor_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cursorMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "cursorMode: aMode\x0a\x09\x22MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT \x0a\x09image PImage: any variable of type PImage \x0a\x09x int: the horizonal active spot of the cursor \x0a\x09y int: the vertical active spot of the cursor \x22\x0a    \x0a\x09 processing cursor: aMode\x0a \x0a \x09\x22Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. \x0a    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. \x0a    It is not possible to load an image as the cursor if you are exporting your program for the Web. \x0a    The values for parameters x and y must be less than the dimensions of the image.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cursor:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveDetail:",
protocol: 'curves',
fn: function (aDetailint){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curverDetail_(aDetailint);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveDetail:",{aDetailint:aDetailint},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aDetailint"],
source: "curveDetail: aDetailint\x0a\x09\x22Sets the resolution at which curves display. The default value is 20. This function is only useful when using the P3D or OPENGL renderer as the default (JAVA2D) renderer does not use this information.\x22\x0a\x09processing curverDetail: aDetailint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curverDetail:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curvePointA:b:c:d:t:",
protocol: 'curves',
fn: function (anA,aB,aC,aD,aT){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curvePoint_b_c_d_t_(anA,aB,aC,aD,aT);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curvePointA:b:c:d:t:",{anA:anA,aB:aB,aC:aC,aD:aD,aT:aT},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anA", "aB", "aC", "aD", "aT"],
source: "curvePointA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing curvePoint: anA b: aB c: aC d: aD t: aT",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curvePoint:b:c:d:t:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveTangentA:b:c:d:t:",
protocol: 'curves',
fn: function (anA,aB,aC,aD,aT){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curveTangent_b_c_d_t_(anA,aB,aC,aD,aT);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveTangentA:b:c:d:t:",{anA:anA,aB:aB,aC:aC,aD:aD,aT:aT},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anA", "aB", "aC", "aD", "aT"],
source: "curveTangentA: anA b: aB c: aC d: aD t: aT\x0a\x09\x22a \x09int or float: coordinate of first point on the curve\x0a\x09b \x09int or float: coordinate of first control point\x0a\x09c \x09int or float: coordinate of second control point\x0a\x09d \x09int or float: coordinate of second point on the curve\x0a\x09t \x09float: value between 0 and 1\x22\x0a    \x0a\x09processing curveTangent: anA b: aB c: aC d: aD t: aT",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveTangent:b:c:d:t:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveTightness:",
protocol: 'curves',
fn: function (anIntOrFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curveTightness_(anIntOrFloat);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveTightness:",{anIntOrFloat:anIntOrFloat},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIntOrFloat"],
source: "curveTightness: anIntOrFloat\x0a\x09\x22Modifies the quality of forms created with curve() and curveVertex(). \x0a    The parameter squishy determines how the curve fits to the vertex points. \x0a    The value 0.0 is the default value for squishy (this value defines the curves to be Catmull-Rom splines) and the value 1.0 connects all the points with straight lines. \x0a    Values within the range -5.0 and 5.0 will deform the curves but will leave them recognizable and as values increase in magnitude, they will continue to deform.\x22\x0a    \x0a\x09processing curveTightness: anIntOrFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveTightness:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveVertexX:y:",
protocol: 'vertex',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curveVertex_y_(aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVertexX:y:",{aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "curveVertexX: aX y: aY\x0a\x09\x22x \x09The x-coordinate of the vertex, either a float or int\x0a\x09y \x09The y-coordinate of the vertex, either a float or int\x0a\x09z \x09The z-coordinate of the vertex, either a float or int\x22\x0a    \x0a\x09processing curveVertex: aX y: aY\x0a    \x0a    \x22Specifies vertex coordinates for curves. \x0a    This function may only be used between beginShape() and endShape() and \x0a    only when there is no MODE parameter specified to beginShape(). \x0a    The first and last points in a series of curveVertex() lines will be used to guide the beginning and \x0a    end of a the curve. A minimum of four points is required to draw a tiny curve between \x0a    the second and third points. \x0a    Adding a fifth point with curveVertex() will draw the curve between the second, third, and fourth points. \x0a    The curveVertex() function is an implementation of Catmull-Rom splines. \x0a    Using the 3D version of requires rendering with P3D or OPENGL (see the Environment reference for more information).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveVertex:y:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveVertexX:y:z:",
protocol: 'vertex',
fn: function (aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curveVertex_y_z_(aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveVertexX:y:z:",{aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ"],
source: "curveVertexX: aX y: aY z: aZ\x0a\x09\x22x \x09The x-coordinate of the vertex, either a float or int\x0a\x09y \x09The y-coordinate of the vertex, either a float or int\x0a\x09z \x09The z-coordinate of the vertex, either a float or int\x22\x0a    \x0a\x09processing curveVertex: aX y: aY z: aZ\x0a    \x0a    \x22Specifies vertex coordinates for curves. \x0a    This function may only be used between beginShape() and endShape() and \x0a    only when there is no MODE parameter specified to beginShape(). \x0a    The first and last points in a series of curveVertex() lines will be used to guide the beginning and \x0a    end of a the curve. A minimum of four points is required to draw a tiny curve between \x0a    the second and third points. \x0a    Adding a fifth point with curveVertex() will draw the curve between the second, third, and fourth points. \x0a    The curveVertex() function is an implementation of Catmull-Rom splines. \x0a    Using the 3D version of requires rendering with P3D or OPENGL (see the Environment reference for more information).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curveVertex:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveX1:y1:x2:y2:x3:y3:x4:y4:",
protocol: 'curves',
fn: function (aX1,aY1,aX2,aY2,aX3,aY3,aX4,aY4){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curve_y1_x2_y2_x3_y3_x4_y4_(aX1,aY1,aX2,aY2,aX3,aY3,aX4,aY4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveX1:y1:x2:y2:x3:y3:x4:y4:",{aX1:aX1,aY1:aY1,aX2:aX2,aY2:aY2,aX3:aX3,aY3:aY3,aX4:aX4,aY4:aY4},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aX2", "aY2", "aX3", "aY3", "aX4", "aY4"],
source: "curveX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor\x0a\x09x2, y2, z2 \x09int or float: coordinates for the first point\x0a\x09x3, y3, z3 \x09int or float: coordinates for the second point\x0a\x09x4, y4, z4 \x09int or float: coordinates for the second anchor\x22\x0a\x0a\x09processing curve: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curve:y1:x2:y2:x3:y3:x4:y4:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "curveX1:y1:z1:x2:y2:z2:x3:y3:z3:x4:y4:z4:",
protocol: 'curves',
fn: function (aX1,aY1,aZ1,aX2,aY2,aZ2,aX3,aY3,aZ3,aX4,aY4,aZ4){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._curve_y1_z1_x2_y2_z2_x3_y3_z3_x4_y4_z4_(aX1,aY1,aZ1,aX2,aY2,aZ2,aX3,aY3,aZ3,aX4,aY4,aZ4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"curveX1:y1:z1:x2:y2:z2:x3:y3:z3:x4:y4:z4:",{aX1:aX1,aY1:aY1,aZ1:aZ1,aX2:aX2,aY2:aY2,aZ2:aZ2,aX3:aX3,aY3:aY3,aZ3:aZ3,aX4:aX4,aY4:aY4,aZ4:aZ4},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aZ1", "aX2", "aY2", "aZ2", "aX3", "aY3", "aZ3", "aX4", "aY4", "aZ4"],
source: "curveX1: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2  x3: aX3  y3: aY3 z3: aZ3 x4: aX4 y4: aY4 z4: aZ4\x0a\x09\x22x1, y1, z1 \x09int or float: coordinates for the first anchor\x0a\x09x2, y2, z2 \x09int or float: coordinates for the first point\x0a\x09x3, y3, z3 \x09int or float: coordinates for the second point\x0a\x09x4, y4, z4 \x09int or float: coordinates for the second anchor\x22\x0a\x0a\x09processing curve: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2  x3: aX3  y3: aY3 z3: aZ3 x4: aX4 y4: aY4 z4: aZ4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["curve:y1:z1:x2:y2:z2:x3:y3:z3:x4:y4:z4:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "directionalV1:v2:v3:nx:ny:nz:",
protocol: 'lights',
fn: function (aV1,aV2,aV3,aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._directional_v2_v3_x_y_z_(aV1,aV2,aV3,aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directionalV1:v2:v3:nx:ny:nz:",{aV1:aV1,aV2:aV2,aV3:aV3,aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aV1", "aV2", "aV3", "aX", "aY", "aZ"],
source: "directionalV1: aV1 v2: aV2 v3: aV3 nx: aX ny: aY nz: aZ\x0a\x09\x22v1 int or float: red or hue value \x0a\x09v2 int or float: green or hue value \x0a\x09v3 int or float: green or hue value \x0a\x09nx int or float: direction along the x axis \x0a\x09ny int or float: direction along the y axis \x0a\x09nz int or float: direction along the z axis \x0a\x09\x22\x0a    \x0a    \x09processing directional: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ\x0a\x0a\x09\x22Adds a directional light. Directional light comes from one direction and is stronger when \x0a     hitting a surface squarely and weaker if it hits at a a gentle angle. \x0a     After hitting a surface, a directional lights scatters in all directions. \x0a     Lights need to be included in the draw() to remain persistent in a looping program. \x0a     Placing them in the setup() of a looping program will cause them to only have an effect the first\x0a     time through the loop. The affect of the v1, v2, and v3 parameters is determined by the current color mode. \x0a     The nx, ny, and nz parameters specify the direction the light is facing. \x0a     For example, setting ny to -1 will cause the geometry to be lit from below (the light is facing directly upward).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["directional:v2:v3:x:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "directiveCrisp:",
protocol: 'sketch directions',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
if($core.assert(aBool)){
self._setCrispLinesTrue();
} else {
self._setCrispLinesFalse();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directiveCrisp:",{aBool:aBool},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "directiveCrisp: aBool\x0a\x0a\x09\x22http://processingjs.org/reference/pjs%20directive/\x22\x0a\x0a\x09aBool \x0a    \x09ifTrue:[ self setCrispLinesTrue ]\x0a  \x09\x09ifFalse:[ self setCrispLinesFalse ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "setCrispLinesTrue", "setCrispLinesFalse"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "directiveFont:",
protocol: 'sketch directions',
fn: function (aFileName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p.externals.sketch.options.font = aFileName ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directiveFont:",{aFileName:aFileName},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFileName"],
source: "directiveFont: aFileName\x0a\x0a\x09\x22http://processingjs.org/reference/font/\x22\x0a\x0a\x09  < p.externals.sketch.options.font = aFileName >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "directivePauseOnBlur:",
protocol: 'sketch directions',
fn: function (aBool){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
if($core.assert(aBool)){
self._setSketchGlobalKeyEventsTrue();
} else {
self._setSketchGlobalKeyEventsFalse();
};
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directivePauseOnBlur:",{aBool:aBool},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBool"],
source: "directivePauseOnBlur: aBool\x0a\x0a\x09\x22http://processingjs.org/reference/globalKeyEvents/\x22\x0a\x0a\x09aBool\x0a    \x09ifTrue:[ self setSketchGlobalKeyEventsTrue ]\x0a  \x09\x09ifFalse:[ self setSketchGlobalKeyEventsFalse ]",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ifTrue:ifFalse:", "setSketchGlobalKeyEventsTrue", "setSketchGlobalKeyEventsFalse"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "directivePreload:",
protocol: 'sketch directions',
fn: function (aFileName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p.externals.sketch.options.preload = aFileName ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"directivePreload:",{aFileName:aFileName},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFileName"],
source: "directivePreload: aFileName\x0a\x0a\x09\x22http://processingjs.org/reference/pjs%20directive/\x22\x0a\x0a\x09  < p.externals.sketch.options.preload = aFileName >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "draw",
protocol: 'processing overrides',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"draw",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "draw\x0a \x0a \x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ellipseMode:",
protocol: 'attributes',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ellipseMode_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ellipseMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "ellipseMode: aMode\x0a\x09\x22MODE \x09Either CENTER, RADIUS, CORNER, or CORNERS.\x22\x0a    \x0a\x09processing ellipseMode: aMode",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ellipseMode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ellipseX:y:width:height:",
protocol: '2D primitives',
fn: function (aX,aY,aWidth,aHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ellipse_y_width_height_(aX,aY,aWidth,aHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ellipseX:y:width:height:",{aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeight"],
source: "ellipseX: aX y: aY width: aWidth height: aHeight \x0a\x0a\x09processing ellipse: aX y: aY width: aWidth height: aHeight",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ellipse:y:width:height:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "emissive:value2:value3:",
protocol: 'material properties',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._emissivet_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emissive:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "emissive: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing emissivet: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a   \x22Sets the emissive color of the material used for drawing shapes drawn to the screen. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x0a.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["emissivet:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "emissiveColor:",
protocol: 'material properties',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._emissive_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emissiveColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "emissiveColor: aColor\x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing emissive: aColor\x0a    \x0a    \x22Sets the emissive color of the material used for drawing shapes drawn to the screen. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x0a.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["emissive:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "emissiveGray:",
protocol: 'material properties',
fn: function (aGrayValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._emissive_(aGrayValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"emissiveGray:",{aGrayValue:aGrayValue},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGrayValue"],
source: "emissiveGray: aGrayValue\x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing emissive: aGrayValue\x0a    \x0a    \x22Sets the emissive color of the material used for drawing shapes drawn to the screen. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x0a.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["emissive:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "endCamera",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._endCamera();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endCamera",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endCamera\x0a\x09\x22The beginCamera() and endCamera() functions enable advanced customization of the camera space. \x0a    Please see the reference for beginCamera() for a description of how the functions are used.\x22\x0a    \x0a    \x09processing endCamera",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["endCamera"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "endShape",
protocol: 'vertex',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._endShape();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endShape",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endShape\x0a\x0a\x09processing endShape\x0a    \x0a    \x22The endShape() function is the companion to beginShape() and may only be called after beginShape(). \x0a    When endshape() is called, all of image data defined since the previous call to beginShape() is written\x0a    into the image buffer. \x0a    The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["endShape"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "endShape:",
protocol: 'vertex',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._endShape_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endShape:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "endShape: aMode\x0a\x09\x22MODE \x09Use CLOSE to close the shape\x22\x0a    \x0a\x09processing endShape: aMode\x0a    \x0a    \x22The endShape() function is the companion to beginShape() and may only be called after beginShape(). \x0a    When endshape() is called, all of image data defined since the previous call to beginShape() is written\x0a    into the image buffer. \x0a    The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["endShape:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillColor:",
protocol: 'color settings',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "fillColor: aColor \x0a\x09\x22color \x09color: any value of the color datatype\x22\x0a    \x0a\x09processing fill: aColor \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillColor:alpha:",
protocol: 'color settings',
fn: function (aColor,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_alpha_(aColor,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillColor:alpha:",{aColor:aColor,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor", "anAlpha"],
source: "fillColor: aColor alpha: anAlpha\x0a\x09\x22color \x09color: any value of the color datatype\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing fill: aColor alpha: anAlpha \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillGray:",
protocol: 'color settings',
fn: function (aGray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_(aGray);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillGray:",{aGray:aGray},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray"],
source: "fillGray: aGray \x0a\x09\x22gray \x09int or float: number specifying value between white and blackl\x22\x0a    \x0a\x09processing fill: aGray \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillGray:alpha:",
protocol: 'color settings',
fn: function (aGray,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_alpha_(aGray,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillGray:alpha:",{aGray:aGray,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray", "anAlpha"],
source: "fillGray: aGray alpha: anAlpha\x0a\x09\x22gray \x09int or float: number specifying value between white and black\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing fill: aGray alpha: anAlpha\x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillHex:",
protocol: 'color settings',
fn: function (aHex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_(aHex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillHex:",{aHex:aHex},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex"],
source: "fillHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x22\x0a    \x0a\x09processing fill: aHex\x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillHex:alpha:",
protocol: 'color settings',
fn: function (aHex,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_alpha_(aHex,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillHex:alpha:",{aHex:aHex,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex", "anAlpha"],
source: "fillHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing fill: aHex alpha: anAlpha \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillValue1:value2:value3:",
protocol: 'color settings',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillValue1:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "fillValue1: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x22\x0a    \x0a\x09processing fill: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "fillValue1:value2:value3:alpha:",
protocol: 'color settings',
fn: function (aValue1,aValue2,aValue3,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._fill_value2_value3_alpha_(aValue1,aValue2,aValue3,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"fillValue1:value2:value3:alpha:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "fillValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing fill: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. \x0a    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#2\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a\x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x0a\x0aTo change the color of an image (or a texture), use tint().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["fill:value2:value3:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "filterMode:",
protocol: 'image pixels',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._filter_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filterMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "filterMode: aMode\x0a\x09\x22MODE Either THRESHOLD, GRAY, INVERT, POSTERIZE, BLUR, OPAQUE, ERODE, or DILATE \x0a\x09param int or float in the range from 0 to 1\x22\x0a    \x0a\x09processing filter: aMode \x0a    \x0a    \x22Filters an image as defined by one of the following modes:\x0a\x09THRESHOLD - converts the image to black and white pixels depending if they are above or below the threshold defined by the level parameter. \x0a    \x09\x09\x09\x09\x09\x09The level must be between 0.0 (black) and 1.0(white). If no level is specified, 0.5 is used.\x0a  \x09GRAY - converts any colors in the image to grayscale equivalents\x0a\x09INVERT - sets each pixel to its inverse value\x0a\x09POSTERIZE - limits each channel of the image to the number of colors specified as the level parameter\x0a\x09BLUR - executes a Guassian blur with the level parameter specifying the extent of the blurring. \x0a    \x09\x09\x09If no level parameter is used, the blur is equivalent to Guassian blur of radius 1.\x0a\x09OPAQUE - sets the alpha channel to entirely opaque.\x0a\x09ERODE - reduces the light areas with the amount defined by the level parameter.\x0a\x09DILATE - increases the light areas with the amount defined by the level parameter\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filter:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "filterMode:param:",
protocol: 'image pixels',
fn: function (aMode,aParam){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._filter_param_(aMode,aParam);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"filterMode:param:",{aMode:aMode,aParam:aParam},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode", "aParam"],
source: "filterMode: aMode param: aParam\x0a\x09\x22MODE Either THRESHOLD, GRAY, INVERT, POSTERIZE, BLUR, OPAQUE, ERODE, or DILATE \x0a\x09param int or float in the range from 0 to 1\x22\x0a    \x0a\x09processing filter: aMode param: aParam\x0a    \x0a    \x22Filters an image as defined by one of the following modes:\x0a\x09THRESHOLD - converts the image to black and white pixels depending if they are above or below the threshold defined by the level parameter. \x0a    \x09\x09\x09\x09\x09\x09The level must be between 0.0 (black) and 1.0(white). If no level is specified, 0.5 is used.\x0a  \x09GRAY - converts any colors in the image to grayscale equivalents\x0a\x09INVERT - sets each pixel to its inverse value\x0a\x09POSTERIZE - limits each channel of the image to the number of colors specified as the level parameter\x0a\x09BLUR - executes a Guassian blur with the level parameter specifying the extent of the blurring. \x0a    \x09\x09\x09If no level parameter is used, the blur is equivalent to Guassian blur of radius 1.\x0a\x09OPAQUE - sets the alpha channel to entirely opaque.\x0a\x09ERODE - reduces the light areas with the amount defined by the level parameter.\x0a\x09DILATE - increases the light areas with the amount defined by the level parameter\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["filter:param:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "frameCount",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._frameCount();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frameCount",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frameCount\x0a\x09\x22The system variable frameCount contains the number of frames displayed since the program started. Inside setup() the value is 0 and and after the first iteration of draw it is 1, etc.\x22\x0a    \x0a\x09^ processing frameCount",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["frameCount"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "frameRate",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._frameRate();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frameRate",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "frameRate\x0a\x09\x22The system variable frameRate contains the approximate frame rate of the software as it executes. \x0a    The initial value is 10 fps and is updated with each frame. The value is averaged (integrated) over several frames. As such, this value won't be valid until after 5-10 frames..\x22\x0a    \x0a\x09^processing frameRate",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["frameRate"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "frameRate:",
protocol: 'environmant',
fn: function (aFps){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._frameRate_(aFps);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frameRate:",{aFps:aFps},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFps"],
source: "frameRate: aFps\x0a\x09\x22fps int: number of frames per second \x22\x0a    \x0a\x09processing frameRate: aFps\x0a    \x0a    \x22Specifies the number of frames to be displayed every second. \x0a    If the processor is not fast enough to maintain the specified rate, it will not be achieved. \x0a    For example, the function call frameRate(30) will attempt to refresh 30 times a second. It is recommended to set the frame rate within setup(). \x0a    The default rate is 60 frames per second.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["frameRate:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "frustumLeft:right:bottom:top:near:far:",
protocol: 'camera',
fn: function (aLeft,aRight,aBottom,aTop,aNear,aFar){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._frustum_right_bottom_top_near_far_(aLeft,aRight,aBottom,aTop,aNear,aFar);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"frustumLeft:right:bottom:top:near:far:",{aLeft:aLeft,aRight:aRight,aBottom:aBottom,aTop:aTop,aNear:aNear,aFar:aFar},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLeft", "aRight", "aBottom", "aTop", "aNear", "aFar"],
source: "frustumLeft: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar\x0a\x09\x22left float: left coordinate of the clipping plane \x0a\x09right float: right coordinate of the clipping plane \x0a\x09bottom float: bottom coordinate of the clipping plane \x0a\x09top float: top coordinate of the clipping plane \x0a\x09near float: near coordinate of the clipping plane \x0a\x09far float: far coordinate of the clipping plane \x22\x0a    \x0a    \x09processing frustum: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar\x0a\x0a\x0a\x09\x22Sets a perspective matrix defined through the parameters. \x0a    Works like glFrustum, except it wipes out the current perspective matrix rather than muliplying itself with it.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["frustum:right:bottom:top:near:far:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "get",
protocol: 'image pixels',
fn: function (){
var self=this;
function $PjsImage(){return $globals.PjsImage||(typeof PjsImage=="undefined"?nil:PjsImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PjsImage())._newImage_($recv(self["@processing"])._get());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "get\x0a\x09\x22x int: x-coordinate of the pixel \x0a\x09y int: y-coordinate of the pixel \x0a\x09width int: width of pixel rectangle to get \x0a\x09height int: height of pixel rectangle to get \x0a \x09\x22\x0a    \x0a\x09^PjsImage newImage: (processing get)\x0a    \x0a    \x22Reads the color of any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. \x0a    Get the value of one pixel by specifying an x,y coordinate. Get a section of the display window by specifying an additional width and \x0a    height parameter. If the pixel requested is outside of the image window, black is returned. \x0a    The numbers returned are scaled according to the current color ranges, but only RGB values are returned by this function. \x0a    For example, even though you may have drawn a shape with colorMode(HSB), the numbers returned will be in RGB.\x0a\x09The imageMode() function changes the way the parameters work. \x0a    For example, a call to imageMode(CORNERS) will change the width and height parameters to define the x and y values of the opposite corner of the image.\x0a\x09Getting the color of a single pixel with get(x, y) is easy, but not as fast as grabbing the data directly from pixels[]. \x0a    The equivalent statement to \x22\x22get(x, y)\x22\x22 using pixels[] is \x22\x22pixels[y*width+x]\x22\x22. \x0a    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before getting the values.\x22",
referencedClasses: ["PjsImage"],
//>>excludeEnd("ide");
messageSends: ["newImage:", "get"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "getX:y:",
protocol: 'image pixels',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._get_y_(aX,aY);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getX:y:",{aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "getX: aX y: aY\x0a\x09\x22x int: x-coordinate of the pixel \x0a\x09y int: y-coordinate of the pixel \x0a\x09width int: width of pixel rectangle to get \x0a\x09height int: height of pixel rectangle to get \x0a \x09\x22\x0a    \x0a\x09^ processing get: aX y: aY \x0a    \x0a    \x22Reads the color of any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. \x0a    Get the value of one pixel by specifying an x,y coordinate. Get a section of the display window by specifying an additional width and \x0a    height parameter. If the pixel requested is outside of the image window, black is returned. \x0a    The numbers returned are scaled according to the current color ranges, but only RGB values are returned by this function. \x0a    For example, even though you may have drawn a shape with colorMode(HSB), the numbers returned will be in RGB.\x0a\x09The imageMode() function changes the way the parameters work. \x0a    For example, a call to imageMode(CORNERS) will change the width and height parameters to define the x and y values of the opposite corner of the image.\x0a\x09Getting the color of a single pixel with get(x, y) is easy, but not as fast as grabbing the data directly from pixels[]. \x0a    The equivalent statement to \x22\x22get(x, y)\x22\x22 using pixels[] is \x22\x22pixels[y*width+x]\x22\x22. \x0a    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before getting the values.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get:y:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "getX:y:width:height:",
protocol: 'image pixels',
fn: function (aX,aY,aWidth,aHeight){
var self=this;
function $PjsImage(){return $globals.PjsImage||(typeof PjsImage=="undefined"?nil:PjsImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PjsImage())._newImage_($recv(self["@processing"])._get_y_width_height_(aX,aY,aWidth,aHeight));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getX:y:width:height:",{aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeight"],
source: "getX: aX y: aY width: aWidth height: aHeight\x0a\x09\x22x int: x-coordinate of the pixel \x0a\x09y int: y-coordinate of the pixel \x0a\x09width int: width of pixel rectangle to get \x0a\x09height int: height of pixel rectangle to get \x0a \x09\x22\x0a    \x0a\x09^ PjsImage newImage: (processing get: aX y: aY width: aWidth height: aHeight)\x0a    \x0a    \x22Reads the color of any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. \x0a    Get the value of one pixel by specifying an x,y coordinate. Get a section of the display window by specifying an additional width and \x0a    height parameter. If the pixel requested is outside of the image window, black is returned. \x0a    The numbers returned are scaled according to the current color ranges, but only RGB values are returned by this function. \x0a    For example, even though you may have drawn a shape with colorMode(HSB), the numbers returned will be in RGB.\x0a\x09The imageMode() function changes the way the parameters work. \x0a    For example, a call to imageMode(CORNERS) will change the width and height parameters to define the x and y values of the opposite corner of the image.\x0a\x09Getting the color of a single pixel with get(x, y) is easy, but not as fast as grabbing the data directly from pixels[]. \x0a    The equivalent statement to \x22\x22get(x, y)\x22\x22 using pixels[] is \x22\x22pixels[y*width+x]\x22\x22. \x0a    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before getting the values.\x22",
referencedClasses: ["PjsImage"],
//>>excludeEnd("ide");
messageSends: ["newImage:", "get:y:width:height:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "green:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._green_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"green:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "green: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing green: aColor\x0a    \x0a   \x22 \x09Extracts the green value from a color, scaled to match current colorMode(). \x0a   This value is always returned as a float so be careful not to assign it to an int value.\x0a\x09The green() function is easy to use and undestand, but is slower than another technique. \x0a    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, \x0a    use the >> (right shift) operator with a bit mask. \x0a    For example, the following two lines of code are equivalent:\x0a\x09float r1 = green(myColor);\x0a\x09float r2 = myColor >> 16 & 0xFF;\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["green:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._height();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x0a\x09^processing height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "hue:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._hue_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"hue:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "hue: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing hue: aColor\x0a    \x0a   \x22Extracts the hue value from a color.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["hue:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "image:x:y:",
protocol: 'image loading and displaying ',
fn: function (aPjsImage,aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._image_x_y_($recv(aPjsImage)._pjsImage(),aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"image:x:y:",{aPjsImage:aPjsImage,aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aX", "aY"],
source: "image: aPjsImage x: aX y: aY \x0a\x09\x22img PImage: the image to display \x0a\x09x int or float: x-coordinate of the image \x0a\x09y int or float: y-coordinate of the image \x22\x0a    \x0a\x09processing image: aPjsImage pjsImage x: aX y: aY \x0a    \x0a     \x22Diplays images to the screen. The images must be preloaded using @pjs preload before \x0a     it can be used. Processing currently works with GIF, JPEG, and Targa images. \x0a     The color of an image may be modified with the tint() function and if a GIF has transparency, \x0a     it will maintain its transparency. The img parameter specifies the image to display and \x0a     the x and y parameters define the location of the image from its upper-left corner. \x0a     The image is displayed at its original size unless the width and height parameters specify a different size. \x0a     The imageMode() function changes the way the parameters work. \x0a     A call to imageMode(CORNERS) will change the width and height parameters to define \x0a     the x and y values of the opposite corner of the image. \x0a\x0a\x09NOTE: DOM security will not allow you to load images file:/// URIs. \x0a    This security can be overridden in Firefox in about:config, by changing security.fileuri.strict_origin_policy to false.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:x:y:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "image:x:y:width:height:",
protocol: 'image loading and displaying ',
fn: function (aPjsImage,aX,aY,aWidth,aHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._image_x_y_width_height_($recv(aPjsImage)._pjsImage(),aX,aY,aWidth,aHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"image:x:y:width:height:",{aPjsImage:aPjsImage,aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage", "aX", "aY", "aWidth", "aHeight"],
source: "image: aPjsImage x: aX y: aY width: aWidth height: aHeight \x0a\x09\x22img PImage: the image to display \x0a\x09x int or float: x-coordinate of the image \x0a\x09y int or float: y-coordinate of the image \x0a\x09width int or float: width to display the image \x0a\x09height int or float: height to display the image \x22\x0a    \x0a\x09processing image: aPjsImage pjsImage x: aX y: aY width: aWidth height: aHeight \x0a    \x0a     \x22Diplays images to the screen. The images must be preloaded using @pjs preload before \x0a     it can be used. Processing currently works with GIF, JPEG, and Targa images. \x0a     The color of an image may be modified with the tint() function and if a GIF has transparency, \x0a     it will maintain its transparency. The img parameter specifies the image to display and \x0a     the x and y parameters define the location of the image from its upper-left corner. \x0a     The image is displayed at its original size unless the width and height parameters specify a different size. \x0a     The imageMode() function changes the way the parameters work. \x0a     A call to imageMode(CORNERS) will change the width and height parameters to define \x0a     the x and y values of the opposite corner of the image. \x0a\x0a\x09NOTE: DOM security will not allow you to load images file:/// URIs. \x0a    This security can be overridden in Firefox in about:config, by changing security.fileuri.strict_origin_policy to false.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["image:x:y:width:height:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "imageMode:",
protocol: 'image loading and displaying ',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._imageMode_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"imageMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "imageMode: aMode\x0a\x09\x22MODE Either CORNER, CORNERS, or CENTER \x22\x0a    \x0a\x09processing imageMode: aMode\x0a    \x0a     \x22Modifies the location from which images draw. The default mode is imageMode(CORNER), \x0a      which specifies the location to be the upper left corner and uses the fourth and fifth parameters of image() \x0a      to set the image's width and height. The syntax imageMode(CORNERS) uses the second and third parameters of image() \x0a      to set the location of one corner of the image and uses the fourth and fifth parameters to set the opposite corner. \x0a      Use imageMode(CENTER) to draw images centered at the given x and y position\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["imageMode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@processing"]=self._newProcessingInstance();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09processing := self newProcessingInstance.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newProcessingInstance"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "isFocused",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.focused ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isFocused",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isFocused\x0a\x09\x22Confirms if a Processing program is \x22\x22focused\x22\x22, meaning that it is active and will accept input from mouse or keyboard. \x0a    This variable is \x22\x22true\x22\x22 if it is focused and \x22\x22false\x22\x22 if not. This variable is often used when you want to warn people they need to click on or roll over an applet before it will work.\x22\x0a    \x0a\x09< return  processing.focused >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "isKeyPressed",
protocol: 'sketch keyboard',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.keyPressed ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isKeyPressed",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isKeyPressed \x0a    \x0a   \x22The boolean system variable keyPressed is true if any key is pressed and false if no keys are pressed.\x22\x0a\x0a\x09< return  processing.keyPressed >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "isMousePressed",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.mousePressed ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isMousePressed",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isMousePressed \x0a    \x0a   \x22Variable storing if a mouse button is pressed. \x0a    The value of the system variable mousePressed is true if a mouse button is pressed and false if a button is not pressed.\x22\x0a\x0a\x09< return  processing.mousePressed >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "isOnline",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.online ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isOnline",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isOnline\x0a\x09\x22Confirms if a Processing program is running inside a web browser. \x0a    This variable is \x22\x22true\x22\x22 if the program is online and \x22\x22false\x22\x22 if not..\x22\x0a    \x0a\x09< return  processing.online >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "key",
protocol: 'sketch keyboard',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.key ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"key",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "key \x0a    \x0a   \x22The system variable key always contains the value of the most recently pressed key on the keyboard. \x0a   For detecting the arrow keys, the keyCode variable is set to either UP, DOWN, LEFT, or RIGHT.\x22\x0a\x0a\x09< return  processing.key >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "keyCode",
protocol: 'sketch keyboard',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.keyCode ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyCode",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyCode \x0a    \x0a   \x22The system variable keyCode is used to detect special keys such as \x0a    the UP, DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT, BACKSPACE, TAB, ENTER, RETURN, ESC, and DELETE. \x0a     When checking for UP, DOWN, LEFT, RIGHT, ALT, CONTROL, and SHIFT, it's first necessary to check and \x0a      see if the key is coded. This is done with the conditional \x22\x22if(key == CODED) {}\x22\x22 as shown in the second example. \x0a      The keys included in the ASCII specification (BACKSPACE, TAB, ENTER, RETURN, ESC, and DELETE) \x0a   do not require checking to see if they key is coded. If you're making cross-platform projects, \x0a    note that the ENTER key is commonly used on PCs and Unix and the RETURN key is used instead on Macintosh. \x0a    Check for both ENTER and RETURN to make sure your program will work for all platforms.\x22\x0a\x0a\x09< return  processing.keyCode >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "keyPressed",
protocol: 'sketch keyboard',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyPressed",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyPressed \x0a    \x0a   \x22The keyPressed() function is called once every time a key is pressed. Because of how operating systems handle key repeats, \x0a    holding down a key will cause multiple calls to keyPressed(), the rate is set by the operating system and how each computer is configured..\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "keyReleased",
protocol: 'sketch keyboard',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyReleased",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyReleased \x0a    \x0a   \x22The keyReleased() function is called once every time a key is released.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "keyTyped",
protocol: 'sketch keyboard',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"keyTyped",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "keyTyped \x0a    \x0a   \x22The keyTyped() function is called once every time a key is pressed, but action keys such as Ctrl, Shift, and \x0a   Alt are ignored. Because of how operating systems handle key repeats, holding down a key will cause multiple calls to keyTyped(), \x0a   the rate is set by the operating system and how each computer is configured.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "lerpColor1:color2:amt:",
protocol: 'color creating and reading',
fn: function (aColor1,aColor2,aAMT){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._lerpColor_color2_amt_(aColor1,aColor2,aAMT);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lerpColor1:color2:amt:",{aColor1:aColor1,aColor2:aColor2,aAMT:aAMT},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor1", "aColor2", "aAMT"],
source: "lerpColor1: aColor1 color2: aColor2 amt: aAMT\x0a\x09\x22c1 \x09color: interpolate from this color\x0a\x09c2 \x09color: interpolate to this color\x0a\x09amt \x09float: between 0.0 and 1.0\x22\x0a    \x0a\x09^processing lerpColor: aColor1 color2: aColor2 amt: aAMT\x0a    \x0a   \x22Calculates a color or colors between two color at a specific increment. \x0a   The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, \x0a   0.1 is very near the first point, 0.5 is half-way in between, etc.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lerpColor:color2:amt:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "lightFalloff:linear:quadratic:",
protocol: 'lights',
fn: function (aConstant,aLinear,aQuadric){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._lightFalloff_linear_quadratic_(aConstant,aLinear,aQuadric);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lightFalloff:linear:quadratic:",{aConstant:aConstant,aLinear:aLinear,aQuadric:aQuadric},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aConstant", "aLinear", "aQuadric"],
source: "lightFalloff: aConstant linear: aLinear quadratic: aQuadric\x0a\x09\x22constant int or float: constant value for determining falloff \x0a\x09linear int or float: linear value for determining falloff \x0a\x09quadratic int or float: quadratic value for determining falloff \x22\x0a    \x0a    \x09processing lightFalloff: aConstant linear: aLinear quadratic: aQuadric\x0a        \x0a\x09\x22Sets the falloff rates for point lights, spot lights, and ambient lights. \x0a    \x09The parameters are used to determine the falloff with the following equation:\x0a\x09\x09d = distance from light position to vertex position\x0a        falloff = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)\x0a        Like fill(), it affects only the elements which are created after it in the code. \x0a        The default value if LightFalloff(1.0, 0.0, 0.0). \x0a        Thinking about an ambient light with a falloff can be tricky. It is used, for example, if \x0a        you wanted a region of your scene to be lit ambiently one color and another region to be lit ambiently \x0a        by another color, you would use an ambient light with location and falloff. \x0a        You can think of it as a point light that doesn't care which direction a surface is facing.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lightFalloff:linear:quadratic:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "lightSpeculartV1:v2:v3:",
protocol: 'lights',
fn: function (aV1,aV2,aV3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._lightSpecular_v2_v3_(aV1,aV2,aV3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lightSpeculartV1:v2:v3:",{aV1:aV1,aV2:aV2,aV3:aV3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aV1", "aV2", "aV3"],
source: "lightSpeculartV1: aV1 v2: aV2 v3: aV3 \x0a\x09\x22v1 int or float: red or hue value \x0a\x09v2 int or float: green or hue value \x0a\x09v3 int or float: green or hue value \x22\x0a    \x0a    \x09processing lightSpecular: aV1 v2: aV2 v3: aV3 \x0a\x0a\x09\x22Sets the specular color for lights. \x0a    Like fill(), it affects only the elements which are created after it in the code. \x0a    Specular refers to light which bounces off a surface in a perferred \x0a     direction (rather than bouncing in all directions like a diffuse light) and is used for creating highlights. \x0a     The specular quality of a light interacts with the specular material qualities set through the specular() and shininess() functions.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lightSpecular:v2:v3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "lights",
protocol: 'lights',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._lights();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lights",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "lights\x0a\x09\x22Sets the default ambient light, directional light, falloff, and specular values. \x0a    The defaults are are ambientLight(128, 128, 128) and directionalLight(128, 128, 128, 0, 0, -1), \x0a    lightFalloff()(1, 0, 0), and lightSpecular(0, 0, 0). Lights need to be included in the draw() to \x0a    remain persistent in a looping program. \x0a    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. \x22\x0a    \x0a    \x09processing lights",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["lights"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "lineX1:y1:x2:y2:",
protocol: '2D primitives',
fn: function (aX1,aY1,aX2,aY2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._line_y1_x2_y2_(aX1,aY1,aX2,aY2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineX1:y1:x2:y2:",{aX1:aX1,aY1:aY1,aX2:aX2,aY2:aY2},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aX2", "aY2"],
source: "lineX1: aX1  y1: aY1 x2: aX2 y2: aY2 \x0a\x0a\x09processing line: aX1 y1: aY1 x2: aX2 y2: aY2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["line:y1:x2:y2:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "lineX1:y1:z1:x2:y2:z2:",
protocol: '2D primitives',
fn: function (aX1,aY1,aZ1,aX2,aY2,aZ2){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._line_y1_z1_x2_y2_z2_(aX1,aY1,aZ1,aX2,aY2,aZ2);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"lineX1:y1:z1:x2:y2:z2:",{aX1:aX1,aY1:aY1,aZ1:aZ1,aX2:aX2,aY2:aY2,aZ2:aZ2},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aZ1", "aX2", "aY2", "aZ2"],
source: "lineX1: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2\x0a\x0a\x09processing line: aX1 y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["line:y1:z1:x2:y2:z2:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "loadImage:",
protocol: 'image loading and displaying ',
fn: function (aFileName){
var self=this;
function $PjsImage(){return $globals.PjsImage||(typeof PjsImage=="undefined"?nil:PjsImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PjsImage())._newImage_($recv(self["@processing"])._loadImage_(aFileName));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadImage:",{aFileName:aFileName},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFileName"],
source: "loadImage: aFileName\x0a\x09\x22filename string: name of file to load or data URI/td>   \x22\x0a    \x0a\x09^PjsImage newImage: (processing loadImage: aFileName)\x0a    \x0a     \x22Loads an image into a variable of type PImage. Four types of images ( .gif, .jpg, .tga, .png) images may be loaded. \x0a     To load correctly, images must be located in the data directory of the current sketch, the images must be preloaded \x0a     using @pjs preload specifying the path to the image. In most cases, load all images in setup() to preload them at the \x0a     start of the program. Loading images inside draw() will reduce the speed of a program. \x0a     You can also load images from a data URI, such as \x22\x22data:image/jpg;base64,{base 64 encoded data block}\x22\x22 \x0a     which does not require any preloading. \x0a     The filename parameter can also be a URL to a file found online. For security reasons, \x0a      a Processing sketch found online can only download files from the same server from which it came. \x0a  \x09The extension of the filename parameter is used to determine the image type. \x0a     In cases where the image filename does not end with a proper extension, specify the extension \x0a     as the second parameter to loadImage(), as shown in the third example on this page. \x0a\x09If an image is not loaded successfully, the null value is returned and an error message will be printed to the console. \x0a    The error message does not halt the program, however the null value may cause a NullPointerException if \x0a    your code does not check whether the value returned from loadImage() is null. \x0a\x0aNOTE: Some browers will not allow you to load images from file:// URIs. It is recommended that you use a webserver for your development and testing to avoid any problems with file:// URIs.\x0a\x22",
referencedClasses: ["PjsImage"],
//>>excludeEnd("ide");
messageSends: ["newImage:", "loadImage:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "loadPixels",
protocol: 'image pixels',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._loadPixels();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loadPixels",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loadPixels\x0a    \x0a\x09 processing loadPixels\x0a    \x0a    \x22Loads the pixel data for the display window (or an image) into the pixels[] array. \x0a      This function must always be called before reading from or writing to pixels[]. \x0a\x09 Certain renderers may or may not seem to require loadPixels() or updatePixels(). \x0a     However, the rule is that any time you want to manipulate the pixels[] array, you must first call loadPixels(), \x0a     and after changes have been made, call updatePixels(). \x0a     Even if the renderer may not seem to use this function in the current Processing release, this will always be subject to change.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loadPixels"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "loop",
protocol: 'sketch structure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._loop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"loop",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "loop\x0a\x0a\x09\x22Causes Processing to continuously execute the code within draw(). If noLoop() is called, the code in draw() stops executing.\x22\x0a\x0a\x09processing loop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["loop"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "modelX:y:z:",
protocol: 'coordinates',
fn: function (anX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._modelX_y_z_(anX,aY,aZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modelX:y:z:",{anX:anX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anX", "aY", "aZ"],
source: "modelX: anX y: aY z: aZ\x0a\x09\x22x int or float: 3D x coordinate to be mapped \x0a\x09y int or float: 3D y coordinate to be mapped \x0a\x09z int or float: 3D z coordinate to be mapped \x22\x0a\x0a    ^ processing modelX: anX y: aY z: aZ\x0a\x0a\x09\x22Returns the three-dimensional X, Y, Z position in model space. \x0a    This returns the X value for a given coordinate based on the current set of transformations (scale, rotate, translate, etc.) \x0a     The X value can be used to place an object in space relative to the location of the original point once the transformations are no longer in use. \x0a\x09In the example, the modelX(), modelY(), and modelZ() methods record the location of a box in space after being placed using a series of translate and \x0a    rotate commands. After popMatrix() is called, those transformations no longer apply, but the (x, y, z) coordinate returned by \x0a    the model functions is used to place another box in the same location.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modelX:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "modelY:y:z:",
protocol: 'coordinates',
fn: function (anX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._modelY_y_z_(anX,aY,aZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modelY:y:z:",{anX:anX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anX", "aY", "aZ"],
source: "modelY: anX y: aY z: aZ\x0a\x09\x22x int or float: 3D x coordinate to be mapped \x0a\x09y int or float: 3D y coordinate to be mapped \x0a\x09z int or float: 3D z coordinate to be mapped \x22\x0a\x0a    ^ processing modelY: anX y: aY z: aZ\x0a\x0a\x09\x22Returns the three-dimensional X, Y, Z position in model space. \x0a    This returns the X value for a given coordinate based on the current set of transformations (scale, rotate, translate, etc.) \x0a     The X value can be used to place an object in space relative to the location of the original point once the transformations are no longer in use. \x0a\x09In the example, the modelX(), modelY(), and modelZ() methods record the location of a box in space after being placed using a series of translate and \x0a    rotate commands. After popMatrix() is called, those transformations no longer apply, but the (x, y, z) coordinate returned by \x0a    the model functions is used to place another box in the same location.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modelY:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "modelZ:y:z:",
protocol: 'coordinates',
fn: function (anX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._modelZ_y_z_(anX,aY,aZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"modelZ:y:z:",{anX:anX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anX", "aY", "aZ"],
source: "modelZ: anX y: aY z: aZ\x0a\x09\x22x int or float: 3D x coordinate to be mapped \x0a\x09y int or float: 3D y coordinate to be mapped \x0a\x09z int or float: 3D z coordinate to be mapped \x22\x0a\x0a    ^ processing modelZ: anX y: aY z: aZ\x0a\x0a\x09\x22Returns the three-dimensional X, Y, Z position in model space. \x0a    This returns the X value for a given coordinate based on the current set of transformations (scale, rotate, translate, etc.) \x0a     The X value can be used to place an object in space relative to the location of the original point once the transformations are no longer in use. \x0a\x09In the example, the modelX(), modelY(), and modelZ() methods record the location of a box in space after being placed using a series of translate and \x0a    rotate commands. After popMatrix() is called, those transformations no longer apply, but the (x, y, z) coordinate returned by \x0a    the model functions is used to place another box in the same location.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["modelZ:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseButton",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._mouseButton();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseButton",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseButton \x0a    \x0a   \x22Processing automatically tracks if the mouse button is pressed and which button is pressed. \x0a    The value of the system variable mouseButton is either LEFT, RIGHT, or CENTER depending on which button is pressed\x22\x0a\x0a\x09^ processing mouseButton",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseButton"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseClicked",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassRespnsubility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseClicked",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseClicked\x0a    \x0a   \x22The mouseClicked() function is called once after a mouse button has been pressed and then released. \x22\x0a\x0a\x09 self subclassRespnsubility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassRespnsubility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseDragged",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassRespnsubility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseDragged",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseDragged\x0a    \x0a   \x22The mouseDragged() function is called once every time the mouse moves and a mouse button is pressed.. \x22\x0a\x0a\x09 self subclassRespnsubility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassRespnsubility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseMoved",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassRespnsubility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseMoved",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseMoved\x0a    \x0a   \x22The mouseMoved() function is called every time the mouse moves and a mouse button is not pressed. \x22\x0a\x0a\x09 self subclassRespnsubility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassRespnsubility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseOut",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassRespnsubility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseOut",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseOut\x0a    \x0a   \x22The mouseOut() function is called when the mouse pointer leaves a sketch. \x22\x0a\x0a\x09 self subclassRespnsubility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassRespnsubility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseOver",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassRespnsubility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseOver",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseOver\x0a    \x0a   \x22The mouseOver() function is called when the mouse pointer moves over the sketch.\x22\x0a\x0a\x09 self subclassRespnsubility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassRespnsubility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mousePressed",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mousePressed",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mousePressed \x0a    \x0a   \x22The mousePressed() function is called once after every time a mouse button is pressed. \x0a   The mouseButton variable (see the related reference entry) can be used used to determine which button has been pressed.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseReleased",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._subclassResponsibility();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseReleased",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseReleased \x0a    \x0a   \x22The mouseReleased() function is called every time a mouse button is released.\x22\x0a\x0a\x09self subclassResponsibility",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["subclassResponsibility"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseX",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._mouseX();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseX",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseX \x0a    \x0a   \x22The system variable mouseX always contains the current vertical coordinate of the mouse.\x22\x0a\x0a\x09^ processing mouseX",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseX"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "mouseY",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._mouseY();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mouseY",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mouseY \x0a    \x0a   \x22The system variable mouseY always contains the current vertical coordinate of the mouse.\x22\x0a\x0a\x09^ processing mouseY",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mouseY"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "newProcessingInstance",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return Processing.instances[0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newProcessingInstance",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newProcessingInstance\x0a\x0a < return Processing.instances[0]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noCursor",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noCursor();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noCursor",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noCursor\x0a\x09\x22Hides the cursor from view. Will not work when running the program in a web browser.\x22\x0a    \x0a\x09 processing noCursor",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noCursor"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noFill",
protocol: 'color settings',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noFill();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noFill",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noFill\x0a\x09\x22Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen.\x22\x0a    \x0a\x09processing noFill",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noFill"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noLights",
protocol: 'lights',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noLights();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noLights",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noLights\x0a\x09\x22Disable all lighting. Lighting is turned off by default and enabled with the lights() method. \x0a    This function can be used to disable lighting so that 2D geometry \x0a    (which does not require lighting) can be drawn after a set of lighted 3D geometry. \x22\x0a    \x0a    \x09processing noLights",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noLights"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noLoop",
protocol: 'sketch structure',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noLoop();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noLoop",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noLoop\x0a\x0a\x09\x22Causes Processing to continuously execute the code within draw(). If noLoop() is called, the code in draw() stops executing.\x22\x0a\x0a\x09processing noLoop",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noLoop"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noSmooth",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noSmooth();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noSmooth",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noSmooth\x0a\x09\x22Draws all geometry with jagged (aliased) edges.\x22\x0a    \x0a\x09processing noSmooth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noSmooth"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noStroke",
protocol: 'color settings',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noStroke();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noStroke",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noStroke\x0a\x09\x22Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen.\x22\x0a    \x0a\x09processing noStroke",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noStroke"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "noTint",
protocol: 'image loading and displaying ',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._noTint();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"noTint",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "noTint\x0a\x09\x22Removes the current fill value for displaying images and reverts to displaying images with their original hues.\x22\x0a    \x0a\x09processing noTint",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["noTint"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "normal:ny:nz:",
protocol: 'lights',
fn: function (aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._normal_ny_nz_(aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normal:ny:nz:",{aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ"],
source: "normal: aX ny: aY nz: aZ\x0a\x09\x0a\x09\x22nx int or float: direction along the x axis \x0a\x09ny int or float: direction along the y axis \x0a\x09nz int or float: direction along the z axis \x22\x0a    \x0a    \x09processing normal: aX ny: aY nz: aZ\x0a\x0a\x09\x22Sets the current normal vector. \x0a     This is for drawing three dimensional shapes and surfaces and specifies a vector perpendicular to \x0a     the surface of the shape which determines how lighting affects it. \x0a    Processing attempts to automatically assign normals to shapes, but since that's imperfect, this is \x0a    a better option when you want more control. This function is identical to glNormal3f() in OpenGL.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["normal:ny:nz:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "ortho",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ortho();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"ortho",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "ortho\x0a\x09\x22left float: left plane of the clipping volume \x0a\x09right float: right plane of the clipping volume \x0a\x09bottom float: bottom plane of the clipping volume \x0a\x09top float: top plane of the clipping volume \x0a\x09near float: near plane of the clipping volume \x0a\x09far float: far plane of the clipping volume  \x22\x0a    \x0a    \x09processing ortho\x0a\x0a\x0a\x09\x22Sets an orthographic projection and defines a parallel clipping volume. \x0a    All objects with the same dimension appear the same size, regardless of whether they are near or far from the camera. \x0a    The parameters to this function specify the clipping volume where left and right are the minimum and maximum x values, \x0a    top and bottom are the minimum and maximum y values, and near and far are the minimum and maximum z values. \x0a    If no parameters are given, the default is used: ortho(0, width, 0, height, -10, 10).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ortho"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "orthoLeft:right:bottom:top:near:far:",
protocol: 'camera',
fn: function (aLeft,aRight,aBottom,aTop,aNear,aFar){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._ortho_right_bottom_top_near_far_(aLeft,aRight,aBottom,aTop,aNear,aFar);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"orthoLeft:right:bottom:top:near:far:",{aLeft:aLeft,aRight:aRight,aBottom:aBottom,aTop:aTop,aNear:aNear,aFar:aFar},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aLeft", "aRight", "aBottom", "aTop", "aNear", "aFar"],
source: "orthoLeft: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar\x0a\x09\x22left float: left plane of the clipping volume \x0a\x09right float: right plane of the clipping volume \x0a\x09bottom float: bottom plane of the clipping volume \x0a\x09top float: top plane of the clipping volume \x0a\x09near float: near plane of the clipping volume \x0a\x09far float: far plane of the clipping volume  \x22\x0a    \x0a    \x09processing ortho: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar\x0a\x0a\x0a\x09\x22Sets an orthographic projection and defines a parallel clipping volume. \x0a    All objects with the same dimension appear the same size, regardless of whether they are near or far from the camera. \x0a    The parameters to this function specify the clipping volume where left and right are the minimum and maximum x values, \x0a    top and bottom are the minimum and maximum y values, and near and far are the minimum and maximum z values. \x0a    If no parameters are given, the default is used: ortho(0, width, 0, height, -10, 10).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["ortho:right:bottom:top:near:far:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "override:with:",
protocol: 'amber - processingJs API',
fn: function (aMethodName,aFunctionBlock){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._processing())._at_put_(aMethodName,aFunctionBlock);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"override:with:",{aMethodName:aMethodName,aFunctionBlock:aFunctionBlock},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMethodName", "aFunctionBlock"],
source: "override: aMethodName with: aFunctionBlock\x0a\x0a\x09self processing at: aMethodName put: aFunctionBlock",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["at:put:", "processing"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "perspective",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._perspective();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"perspective",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "perspective\x0a\x09\x22fov float: field-of-view angle (in radians) for vertical direction \x0a\x09aspect float: ratio of width to height \x0a\x09zNear float: z-position of nearest clipping plane \x0a\x09zFar float: z-position of nearest farthest plane \x22\x0a    \x0a    \x09processing perspective\x0a\x0a\x0a\x09\x22Sets a perspective projection applying foreshortening, making distant objects appear smaller than closer ones. \x0a    The parameters define a viewing volume with the shape of truncated pyramid. \x0a    Objects near to the front of the volume appear their actual size, while farther objects appear smaller. \x0a    This projection simulates the perspective of the world more accurately than orthographic projection. \x0a    The version of perspective without parameters sets the default perspective and the version with four parameters \x0a    allows the programmer to set the area precisely. \x0a    The default values are: perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where cameraZ is ((height/2.0) / tan(PI*60.0/360.0));.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perspective"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "perspectiveFov:aspect:zNear:zFar:",
protocol: 'camera',
fn: function (aFov,anAspect,aZNear,aZFar){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._perspective_aspect_zNear_zFar_(aFov,anAspect,aZNear,aZFar);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"perspectiveFov:aspect:zNear:zFar:",{aFov:aFov,anAspect:anAspect,aZNear:aZNear,aZFar:aZFar},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFov", "anAspect", "aZNear", "aZFar"],
source: "perspectiveFov: aFov aspect: anAspect zNear: aZNear zFar: aZFar\x0a\x09\x22fov float: field-of-view angle (in radians) for vertical direction \x0a\x09aspect float: ratio of width to height \x0a\x09zNear float: z-position of nearest clipping plane \x0a\x09zFar float: z-position of nearest farthest plane \x22\x0a    \x0a    \x09processing perspective: aFov aspect: anAspect zNear: aZNear zFar: aZFar\x0a\x0a\x0a\x09\x22Sets a perspective projection applying foreshortening, making distant objects appear smaller than closer ones. \x0a    The parameters define a viewing volume with the shape of truncated pyramid. \x0a    Objects near to the front of the volume appear their actual size, while farther objects appear smaller. \x0a    This projection simulates the perspective of the world more accurately than orthographic projection. \x0a    The version of perspective without parameters sets the default perspective and the version with four parameters \x0a    allows the programmer to set the area precisely. \x0a    The default values are: perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where cameraZ is ((height/2.0) / tan(PI*60.0/360.0));.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["perspective:aspect:zNear:zFar:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pixelsAt:",
protocol: 'image pixels',
fn: function (anIndex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.pixels[ anIndex ] ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pixelsAt:",{anIndex:anIndex},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex"],
source: "pixelsAt: anIndex\x0a    \x0a\x09< return  processing.pixels[ anIndex ] >\x0a    \x0a    \x22Array containing the values for all the pixels in the display window. \x0a      These values are of the color datatype. \x0a      This array is the size of the display window. For example, if the image is 100x100 pixels, there will be 10000 values and i\x0a      f the window is 200x300 pixels, there will be 60000 values. \x0a      The index value defines the position of a value within the array. For example, the statment color b = pixels[230] \x0a      will set the variable b to be equal to the value at that location in the array. \x0a\x09Before accessing this array, the data must loaded with the loadPixels() functions. \x0a    After the array data has been modified, the updatePixels() function must be loaded to update the changes. \x0a    Without loadPixels(), running the code may (or will in future releases) result in a NullPointerException..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pixelsAt:put:",
protocol: 'image pixels',
fn: function (anIndex,aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.pixels[ anIndex ] = aValue ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pixelsAt:put:",{anIndex:anIndex,aValue:aValue},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndex", "aValue"],
source: "pixelsAt: anIndex put: aValue\x0a    \x0a\x09 < processing.pixels[ anIndex ] = aValue >\x0a    \x0a    \x22Array containing the values for all the pixels in the display window. \x0a      These values are of the color datatype. \x0a      This array is the size of the display window. For example, if the image is 100x100 pixels, there will be 10000 values and i\x0a      f the window is 200x300 pixels, there will be 60000 values. \x0a      The index value defines the position of a value within the array. For example, the statment color b = pixels[230] \x0a      will set the variable b to be equal to the value at that location in the array. \x0a\x09Before accessing this array, the data must loaded with the loadPixels() functions. \x0a    After the array data has been modified, the updatePixels() function must be loaded to update the changes. \x0a    Without loadPixels(), running the code may (or will in future releases) result in a NullPointerException..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pjsSetup",
protocol: 'amber - processingJs API',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._setup();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pjsSetup",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsSetup\x0a\x0a\x09\x22fire up processing\x22\x0a\x0a\x09processing setup",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setup"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pmouseX",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._pmouseX();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pmouseX",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pmouseX \x0a    \x0a   \x22The system variable pmouseX always contains the previous vertical coordinate of the mouse. \x0a     This is the vertical position of the mouse in the frame previous to the current frame.\x22\x0a\x0a\x09^ processing pmouseX",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pmouseX"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pmouseY",
protocol: 'sketch mouse',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.pmouseY ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pmouseY",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pmouseY \x0a    \x0a   \x22The system variable pmouseY always contains the previous vertical coordinate of the mouse. \x0a     This is the vertical position of the mouse in the frame previous to the current frame.\x22\x0a\x0a\x09< return  processing.pmouseY >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pointLightV1:v2:v3:x:y:z:",
protocol: 'lights',
fn: function (aV1,aV2,aV3,aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._pointLight_v2_v3_x_y_z_(aV1,aV2,aV3,aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pointLightV1:v2:v3:x:y:z:",{aV1:aV1,aV2:aV2,aV3:aV3,aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aV1", "aV2", "aV3", "aX", "aY", "aZ"],
source: "pointLightV1: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ\x0a\x09\x22v1 int or float: red or hue value \x0a\x09v2 int or float: green or hue value \x0a\x09v3 int or float: green or hue value \x0a\x09x int or float: x-coordinate of the light \x0a\x09y int or float: y-coordinate of the light \x0a\x09z int or float: z-coordinate of the light \x22\x0a    \x0a    \x09processing pointLight: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ\x0a\x0a\x09\x22Adds a point light. Lights need to be included in the draw() to remain persistent in a looping program. \x0a    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. \x0a    The affect of the v1, v2, and v3 parameters is determined by the current color mode. \x0a    The x, y, and z parameters set the position of the light.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pointLight:v2:v3:x:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pointX:y:",
protocol: '2D primitives',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._point_y_(aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pointX:y:",{aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "pointX: aX y: aY \x0a\x0a\x09processing point: aX y: aY",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["point:y:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pointX:y:z:",
protocol: '2D primitives',
fn: function (aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._point_y_z_(aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pointX:y:z:",{aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ"],
source: "pointX: aX y: aY z: aZ\x0a\x0a\x09processing point: aX y: aY z: aZ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["point:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "popMatrix",
protocol: 'sketch transform',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._popMatrix();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"popMatrix",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "popMatrix\x0a\x09\x22Pops the current transformation matrix off the matrix stack. \x0a    Understanding pushing and popping requires understanding the concept of a matrix stack. \x0a    The pushMatrix() function saves the current coordinate system to the stack and popMatrix() restores\x0a    the prior coordinate system. pushMatrix() and popMatrix() are used in conjuction with the \x0a    other transformation methods and may be embedded to control the scope of the transformations\x22\x0a    \x0a\x09processing popMatrix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["popMatrix"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "printCamera",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._printCamera();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printCamera",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printCamera\x0a\x09\x22Prints the current camera matrix to the text window \x22\x0a    \x0a    \x09processing printCamera",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printCamera"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "printMatrix",
protocol: 'sketch transform',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._printMatrix();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printMatrix",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printMatrix\x0a\x09\x22Prints the current matrix to the text window\x22\x0a    \x0a\x09processing printMatrix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printMatrix"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "printProjection",
protocol: 'camera',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._printProjection();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"printProjection",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "printProjection\x0a\x09\x22Prints the current projection matrix to the text window. \x22\x0a    \x0a    \x09processing printProjection",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["printProjection"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "processing",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@processing"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "processing\x0a \x0a \x09^processing",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "processing:",
protocol: 'accessing',
fn: function (aProcessingInstance){
var self=this;
self["@processing"]=aProcessingInstance;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProcessingInstance"],
source: "processing: aProcessingInstance\x0a \x0a \x09processing := aProcessingInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "pushMatrix",
protocol: 'sketch transform',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._pushMatrix();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"pushMatrix",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pushMatrix\x0a\x09\x22Pushes the current transformation matrix onto the matrix stack. Understanding pushMatrix() and \x0a    popMatrix() requires understanding the concept of a matrix stack. \x0a    The pushMatrix() function saves the current coordinate system to the stack and popMatrix() restores\x0a    the prior coordinate system. pushMatrix() and popMatrix() are used in conjuction with the other \x0a    transformation methods and may be embedded to control the scope of the transformations.\x22\x0a    \x0a\x09processing pushMatrix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pushMatrix"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "quadX1:y1:x2:y2:x3:y3:x4:y4:",
protocol: '2D primitives',
fn: function (aX1,aY1,aX2,aY2,aX3,aY3,aX4,aY4){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._quad_y1_x2_y2_x3_y3_x4_y4_(aX1,aY1,aX2,aY2,aX3,aY3,aX4,aY4);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"quadX1:y1:x2:y2:x3:y3:x4:y4:",{aX1:aX1,aY1:aY1,aX2:aX2,aY2:aY2,aX3:aX3,aY3:aY3,aX4:aX4,aY4:aY4},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aX2", "aY2", "aX3", "aY3", "aX4", "aY4"],
source: "quadX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4\x0a\x0a\x09processing quad: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["quad:y1:x2:y2:x3:y3:x4:y4:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rectMode:",
protocol: 'attributes',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rectMode_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "rectMode: aMode\x0a\x09\x22MODE \x09Either CENTER, RADIUS, CORNER, or CORNERS.\x22\x0a    \x0a\x09processing rectMode: aMode\x0a    \x0a    \x22Modifies the location from which rectangles draw. \x0a    The default mode is rectMode(CORNER), which specifies the location to be the upper left corner \x0a    of the shape and uses the third and fourth parameters of rect() to specify the width and height. \x0a    The syntax rectMode(CORNERS) uses the first and second parameters of rect() to set the location of \x0a    one corner and uses the third and fourth parameters to set the opposite corner. \x0a    The syntax rectMode(CENTER) draws the image from its center point and uses the third and \x0a    forth parameters of rect() to specify the image's width and height. \x0a    The syntax rectMode(RADIUS) draws the image from its center point and uses the third and #\x0a    forth parameters of rect() to specify half of the image's width and height. \x0a    The parameter must be written in \x22\x22ALL CAPS\x22\x22 because Processing is a case sensitive language. \x0a    Note: In version 125, the mode named CENTER_RADIUS was shortened to RADIUS.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rectMode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rectX:y:width:height:",
protocol: '2D primitives',
fn: function (aX,aY,aWidth,aHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rect_y_width_height_(aX,aY,aWidth,aHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectX:y:width:height:",{aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeight"],
source: "rectX: aX y: aY width: aWidth height: aHeight \x0a\x0a\x09processing rect: aX y: aY width: aWidth height: aHeight",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rect:y:width:height:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rectX:y:width:height:radius:",
protocol: '2D primitives',
fn: function (aX,aY,aWidth,aHeight,aRadius){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rect_y_width_height_radius_(aX,aY,aWidth,aHeight,aRadius);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectX:y:width:height:radius:",{aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight,aRadius:aRadius},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeight", "aRadius"],
source: "rectX: aX y: aY width: aWidth height: aHeight radius: aRadius\x0a\x0a\x09processing rect: aX y: aY width: aWidth height: aHeight radius: aRadius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rect:y:width:height:radius:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rectX:y:width:height:tlradius:trradius:brradius:blradius:",
protocol: '2D primitives',
fn: function (aX,aY,aWidth,aHeight,aTLRadius,aTRRadius,aBRRadius,aBLRadius){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rect_y_width_height_tlradius_trradius_brradius_blradius_(aX,aY,aWidth,aHeight,aTLRadius,aTRRadius,aBRRadius,aBLRadius);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rectX:y:width:height:tlradius:trradius:brradius:blradius:",{aX:aX,aY:aY,aWidth:aWidth,aHeight:aHeight,aTLRadius:aTLRadius,aTRRadius:aTRRadius,aBRRadius:aBRRadius,aBLRadius:aBLRadius},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aWidth", "aHeight", "aTLRadius", "aTRRadius", "aBRRadius", "aBLRadius"],
source: "rectX: aX y: aY width: aWidth height: aHeight tlradius: aTLRadius  trradius: aTRRadius  brradius:  aBRRadius blradius: aBLRadius\x0a\x0a\x09processing rect: aX y: aY width: aWidth height: aHeight tlradius: aTLRadius  trradius: aTRRadius  brradius:  aBRRadius blradius: aBLRadius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rect:y:width:height:tlradius:trradius:brradius:blradius:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "red:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._red_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"red:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "red: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing red: aColor\x0a    \x0a   \x22 \x09Extracts the red value from a color, scaled to match current colorMode(). \x0a   This value is always returned as a float so be careful not to assign it to an int value.\x0a\x09The red() function is easy to use and undestand, but is slower than another technique. \x0a    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, \x0a    use the >> (right shift) operator with a bit mask. \x0a    For example, the following two lines of code are equivalent:\x0a\x09float r1 = red(myColor);\x0a\x09float r2 = myColor >> 16 & 0xFF;\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["red:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "requestImage:",
protocol: 'image loading and displaying ',
fn: function (aFilename){
var self=this;
function $PjsImage(){return $globals.PjsImage||(typeof PjsImage=="undefined"?nil:PjsImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PjsImage())._newImage_($recv(self["@processing"])._requestImage_(aFilename));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requestImage:",{aFilename:aFilename},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFilename"],
source: "requestImage: aFilename \x0a\x09\x22filename String: name of file to load, can be .gif, .jpg, .tga, or a handful of other image types depending on your platform  \x22\x0a    \x0a\x09^PjsImage newImage: (processing requestImage: aFilename  )\x0a    \x0a     \x22This function load images on a separate thread so that your sketch does not freeze while images load during setup(). \x0a     While the image is loading, its width and height will be 0. If an error occurs while loading the image, its width and height will be set to -1. \x0a     You'll know when the image has loaded properly because its width and height will be greater than 0. \x0a     Asynchronous image loading (particularly when downloading from a server) can dramatically improve performance.\x0a      The extension parameter is used to determine the image type in cases where the image filename does not end \x0a      with a proper extension. Specify the extension as the second parameter to requestImage().\x22",
referencedClasses: ["PjsImage"],
//>>excludeEnd("ide");
messageSends: ["newImage:", "requestImage:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "requestImage:extension:",
protocol: 'image loading and displaying ',
fn: function (aFilename,aExtension){
var self=this;
function $PjsImage(){return $globals.PjsImage||(typeof PjsImage=="undefined"?nil:PjsImage)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv($PjsImage())._newImage_($recv(self["@processing"])._requestImage_extension_(aFilename,aExtension));
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"requestImage:extension:",{aFilename:aFilename,aExtension:aExtension},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFilename", "aExtension"],
source: "requestImage: aFilename extension: aExtension\x0a\x09\x22filename String: name of file to load, can be .gif, .jpg, .tga, or a handful of other image types depending on your platform \x0a\x09extension String: the type of image to load, for example \x22\x22png\x22\x22, \x22\x22gif\x22\x22, \x22\x22jpg\x22\x22  \x22\x0a    \x0a\x09^PjsImage newImage: (processing requestImage: aFilename extension: aExtension)\x0a    \x0a     \x22This function load images on a separate thread so that your sketch does not freeze while images load during setup(). \x0a     While the image is loading, its width and height will be 0. If an error occurs while loading the image, its width and height will be set to -1. \x0a     You'll know when the image has loaded properly because its width and height will be greater than 0. \x0a     Asynchronous image loading (particularly when downloading from a server) can dramatically improve performance.\x0a      The extension parameter is used to determine the image type in cases where the image filename does not end \x0a      with a proper extension. Specify the extension as the second parameter to requestImage().\x22",
referencedClasses: ["PjsImage"],
//>>excludeEnd("ide");
messageSends: ["newImage:", "requestImage:extension:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "resetMatrix",
protocol: 'sketch transform',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._resetMatrix();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetMatrix",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetMatrix\x0a\x09\x22Replaces the current matrix with the identity matrix. The equivalent function in OpenGL is glLoadIdentity().\x22\x0a    \x0a\x09processing resetMatrix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resetMatrix"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rotate:",
protocol: 'sketch transform',
fn: function (anAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rotate_(anAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotate:",{anAngle:anAngle},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAngle"],
source: "rotate: anAngle\x0a\x09\x22angle float: angle of rotation specified in radians or degrees depending on the current angle mode  \x22\x0a    \x0a\x09processing rotate: anAngle\x0a    \x0a    \x22Rotates an object the amount specified by the angle parameter.\x0a    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. \x0a    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. \x0a    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. \x0a    For example, calling rotate(PI/2) and then rotate(PI/2) is the same as rotate(PI). \x0a    If rotate() is called within the draw(), the transformation is reset when the loop begins again. \x0a    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotate:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rotateX:",
protocol: 'sketch transform',
fn: function (anAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rotateX_(anAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateX:",{anAngle:anAngle},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAngle"],
source: "rotateX: anAngle\x0a\x09\x22angle float: angle of rotation specified in radians \x22\x0a    \x0a\x09processing rotateX: anAngle\x0a    \x0a    \x22Rotates a shape around the x-axis the amount specified by the angle parameter. \x0a    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. \x0a    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. \x0a    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. \x0a    For example, calling rotateX(PI/2) and then rotateX(PI/2) is the same as rotateX(PI). \x0a    If rotateX() is called within the draw(), the transformation is reset when the loop begins again. \x0a    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateX:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rotateY:",
protocol: 'sketch transform',
fn: function (anAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rotateY_(anAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateY:",{anAngle:anAngle},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAngle"],
source: "rotateY: anAngle\x0a\x09\x22angle float: angle of rotation specified in radians \x22\x0a    \x0a\x09processing rotateY: anAngle\x0a    \x0a    \x22Rotates a shape around the y-axis the amount specified by the angle parameter. \x0a    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. \x0a    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. \x0a    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. \x0a    For example, calling rotateY(PI/2) and then rotateY(PI/2) is the same as rotateY(PI). \x0a    If rotateY() is called within the draw(), the transformation is reset when the loop begins again. \x0a    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateY:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "rotateZ:",
protocol: 'sketch transform',
fn: function (anAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._rotateZ_(anAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateZ:",{anAngle:anAngle},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anAngle"],
source: "rotateZ: anAngle\x0a\x09\x22angle float: angle of rotation specified in radians \x22\x0a    \x0a\x09processing rotateZ: anAngle\x0a    \x0a    \x22Rotates a shape around the z-axis the amount specified by the angle parameter. \x0a    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. \x0a    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. \x0a    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. \x0a    For example, calling rotateZ(PI/2) and then rotateZ(PI/2) is the same as rotateZ(PI). \x0a    If rotateZ() is called within the draw(), the transformation is reset when the loop begins again. \x0a    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateZ:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "saturation:",
protocol: 'color creating and reading',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._saturation_(aColor);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saturation:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "saturation: aColor\x0a\x09\x22color \x09any value of the color datatype\x22\x0a    \x0a\x09^processing saturation: aColor\x0a    \x0a   \x22Extracts the saturation value from a color.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["saturation:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "saveFrame",
protocol: 'image saving',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._saveFrame();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveFrame",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "saveFrame\x0a\x09\x22filename String: any sequence of letters and numbers \x0a\x09ext either \x22\x22tif\x22\x22, \x22\x22tga\x22\x22, \x22\x22jpg\x22\x22, \x22\x22png\x22\x22 \x22\x0a    \x0a     processing saveFrame\x0a    \x0a     \x22Saves a numbered sequence of images, one image each time the function is run. \x0a     To save an image that is identical to the display window, run the function at the end of draw() or \x0a     within mouse and key events such as mousePressed() and keyPressed(). \x0a     If saveFrame() is called without parameters, it will save the files as screen-0000.tif, screen-0001.tif, etc.\x0a     It is possible to specify the name of the sequence with the filename parameter and make the choice of saving TIFF, TARGA, PNG, or JPEG files with the ext parameter. \x0a     These image sequences can be loaded into programs such as Apple's QuickTime software and made into movies. \x0a     These files are saved to the sketch's folder, which may be opened by selecting \x22\x22Show sketch folder\x22\x22 from the \x22\x22Sketch\x22\x22 menu. \x0a\x0aAll images saved from the main drawing window will be opaque. To save images without a background, use createGraphics().\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["saveFrame"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "saveFrame:",
protocol: 'image saving',
fn: function (aFileNameAndExt){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._saveFrame_(aFileNameAndExt);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveFrame:",{aFileNameAndExt:aFileNameAndExt},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFileNameAndExt"],
source: "saveFrame: aFileNameAndExt\x0a\x09\x22filename String: any sequence of letters and numbers \x0a\x09ext either \x22\x22tif\x22\x22, \x22\x22tga\x22\x22, \x22\x22jpg\x22\x22, \x22\x22png\x22\x22\x0a    Example: filename-####.ext\x22\x0a    \x0a     processing saveFrame: aFileNameAndExt\x0a    \x0a     \x22Saves a numbered sequence of images, one image each time the function is run. \x0a     To save an image that is identical to the display window, run the function at the end of draw() or \x0a     within mouse and key events such as mousePressed() and keyPressed(). \x0a     If saveFrame() is called without parameters, it will save the files as screen-0000.tif, screen-0001.tif, etc.\x0a     It is possible to specify the name of the sequence with the filename parameter and make the choice of saving TIFF, TARGA, PNG, or JPEG files with the ext parameter. \x0a     These image sequences can be loaded into programs such as Apple's QuickTime software and made into movies. \x0a     These files are saved to the sketch's folder, which may be opened by selecting \x22\x22Show sketch folder\x22\x22 from the \x22\x22Sketch\x22\x22 menu. \x0a\x0aAll images saved from the main drawing window will be opaque. To save images without a background, use createGraphics().\x0a\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["saveFrame:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "saveImage:",
protocol: 'image saving',
fn: function (aFileName){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._save_(aFileName);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"saveImage:",{aFileName:aFileName},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFileName"],
source: "saveImage: aFileName\x0a\x09\x22filename String: any sequence of letters and numbers   \x22\x0a    \x0a     processing save: aFileName\x0a    \x0a     \x22Saves an image from the display window. Images are saved in the PNG format as a Data URI, which can be displayed in the browser in a new window.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["save:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "scaleSize:",
protocol: 'sketch transform',
fn: function (aSize){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._scale_(aSize);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleSize:",{aSize:aSize},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aSize"],
source: "scaleSize: aSize\x0a\x09\x22size float: percentage to scale the object \x0a\x09x float: percentage to scale the object in the \x22\x22x\x22\x22 axis \x0a\x09y float: percentage to scale the object in the \x22\x22y\x22\x22 axis \x0a\x09z float: percentage to scale the object in the \x22\x22z\x22\x22 axis   \x22\x0a    \x0a\x09processing scale: aSize\x0a    \x0a    \x22Increasing and decreasing the size of an object by expanding and contracting vertices. \x0a    Scale values are specified as decimal percentages. \x0a    The function call scale(2.0) increases the dimension of a shape by 200%. \x0a    Objects always scale from their relative origin to the coordinate system. \x0a    Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. \x0a    For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), \x0a    he transformation is reset when the loop begins again. \x0a    Using this function with the z parameter requires passing P3D or OPENGL into the size() parameter as shown in the example above. \x0a    This function can be further controlled by pushMatrix() and popMatrix().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scale:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "scaleX:y:",
protocol: 'sketch transform',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._scale_y_(aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleX:y:",{aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "scaleX: aX y: aY \x0a\x09\x22size float: percentage to scale the object \x0a\x09x float: percentage to scale the object in the \x22\x22x\x22\x22 axis \x0a\x09y float: percentage to scale the object in the \x22\x22y\x22\x22 axis \x0a\x09z float: percentage to scale the object in the \x22\x22z\x22\x22 axis   \x22\x0a    \x0a\x09processing scale: aX y: aY \x0a    \x0a    \x22Increasing and decreasing the size of an object by expanding and contracting vertices. \x0a    Scale values are specified as decimal percentages. \x0a    The function call scale(2.0) increases the dimension of a shape by 200%. \x0a    Objects always scale from their relative origin to the coordinate system. \x0a    Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. \x0a    For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), \x0a    he transformation is reset when the loop begins again. \x0a    Using this function with the z parameter requires passing P3D or OPENGL into the size() parameter as shown in the example above. \x0a    This function can be further controlled by pushMatrix() and popMatrix().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scale:y:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "scaleX:y:z:",
protocol: 'sketch transform',
fn: function (aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._scale_y_z_(aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleX:y:z:",{aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ"],
source: "scaleX: aX y: aY z: aZ\x0a\x09\x22size float: percentage to scale the object \x0a\x09x float: percentage to scale the object in the \x22\x22x\x22\x22 axis \x0a\x09y float: percentage to scale the object in the \x22\x22y\x22\x22 axis \x0a\x09z float: percentage to scale the object in the \x22\x22z\x22\x22 axis   \x22\x0a    \x0a\x09processing scale: aX y: aY z: aZ\x0a    \x0a    \x22Increasing and decreasing the size of an object by expanding and contracting vertices. \x0a    Scale values are specified as decimal percentages. \x0a    The function call scale(2.0) increases the dimension of a shape by 200%. \x0a    Objects always scale from their relative origin to the coordinate system. \x0a    Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. \x0a    For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), \x0a    he transformation is reset when the loop begins again. \x0a    Using this function with the z parameter requires passing P3D or OPENGL into the size() parameter as shown in the example above. \x0a    This function can be further controlled by pushMatrix() and popMatrix().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scale:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "screenHeight",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.screen.height ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"screenHeight",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "screenHeight\x0a\x09\x22System variable which stores the dimensions of the computer screen. \x0a    For example, if the current screen resolution is 1024x768, screen.width is 1024 and screen.height is 768. \x0a    These dimensions are useful when exporting full-screen applications. .\x22\x0a    \x0a\x09< return  processing.screen.height >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "screenWidth",
protocol: 'environmant',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return  processing.screen.width ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"screenWidth",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "screenWidth\x0a\x09\x22System variable which stores the dimensions of the computer screen. \x0a    For example, if the current screen resolution is 1024x768, screen.width is 1024 and screen.height is 768. \x0a    These dimensions are useful when exporting full-screen applications. .\x22\x0a    \x0a\x09< return  processing.screen.width >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "screenX:y:z:",
protocol: 'coordinates',
fn: function (anX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._screenX_y_z_(anX,aY,aZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"screenX:y:z:",{anX:anX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anX", "aY", "aZ"],
source: "screenX: anX y: aY z: aZ\x0a\x09\x22x int or float: 3D x coordinate to be mapped \x0a\x09y int or float: 3D y coordinate to be mapped \x0a\x09z int or float: 3D z coordinate to be mapped \x22\x0a\x0a    ^ processing screenX: anX y: aY z: aZ\x0a\x0a\x09\x22Takes a three-dimensional X, Y, Z position and returns the X value for where\x0a     it will appear on a (two-dimensional) screen.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["screenX:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "screenY:y:z:",
protocol: 'coordinates',
fn: function (anX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._screenY_y_z_(anX,aY,aZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"screenY:y:z:",{anX:anX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anX", "aY", "aZ"],
source: "screenY: anX y: aY z: aZ\x0a\x09\x22x int or float: 3D x coordinate to be mapped \x0a\x09y int or float: 3D y coordinate to be mapped \x0a\x09z int or float: 3D z coordinate to be mapped \x22\x0a\x0a    ^ processing screenY: anX y: aY z: aZ\x0a\x0a\x09\x22Takes a three-dimensional X, Y, Z position and returns the X value for where\x0a     it will appear on a (two-dimensional) screen.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["screenY:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "screenZ:y:z:",
protocol: 'coordinates',
fn: function (anX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._screenZ_y_z_(anX,aY,aZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"screenZ:y:z:",{anX:anX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anX", "aY", "aZ"],
source: "screenZ: anX y: aY z: aZ\x0a\x09\x22x int or float: 3D x coordinate to be mapped \x0a\x09y int or float: 3D y coordinate to be mapped \x0a\x09z int or float: 3D z coordinate to be mapped \x22\x0a\x0a    ^ processing screenZ: anX y: aY z: aZ\x0a\x0a\x09\x22Takes a three-dimensional X, Y, Z position and returns the X value for where\x0a     it will appear on a (two-dimensional) screen.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["screenZ:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "setCrispLinesFalse",
protocol: 'sketch directions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p.externals.sketch.options.crispLines = false ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setCrispLinesFalse",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setCrispLinesFalse\x0a\x0a   < p.externals.sketch.options.crispLines = false >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "setCrispLinesTrue",
protocol: 'sketch directions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p.externals.sketch.options.crispLines = true ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setCrispLinesTrue",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setCrispLinesTrue\x0a\x0a   < p.externals.sketch.options.crispLines = true >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "setSketchGlobalKeyEventsFalse",
protocol: 'sketch directions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p.externals.sketch.options.globalKeyEvents  = false ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSketchGlobalKeyEventsFalse",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setSketchGlobalKeyEventsFalse\x0a< p.externals.sketch.options.globalKeyEvents  = false >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "setSketchGlobalKeyEventsTrue",
protocol: 'sketch directions',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 p.externals.sketch.options.globalKeyEvents  = false ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSketchGlobalKeyEventsTrue",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "setSketchGlobalKeyEventsTrue\x0a< p.externals.sketch.options.globalKeyEvents  = false >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "setX:y:color:",
protocol: 'image pixels',
fn: function (aX,aY,aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._set_y_color_(aX,aY,aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setX:y:color:",{aX:aX,aY:aY,aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aColor"],
source: "setX: aX y: aY color: aColor\x0a    \x0a   \x22 x int: x-coordinate of the pixel \x0a\x09y int: y-coordinate of the pixel \x0a\x09color color: any value of the color datatype \x0a\x09image PImage: any valid variable of type PImage \x22\x0a\x0a\x09 processing set: aX y: aY color: aColor\x0a    \x0a    \x22Changes the color of any pixel or writes an image directly into the display window. \x0a     The x and y parameters specify the pixel to change and the color parameter specifies the color value. \x0a     The color parameter is affected by the current color mode (the default is RGB values from 0 to 255). \x0a     When setting an image, the x and y parameters define the coordinates for the upper-left corner of \x0a     the image (the placement of the image is not affected by the imageMode() function).\x0a\x09Setting the color of a single pixel with set(x, y) is easy, but not as fast as putting the data directly into pixels[]. \x0a    The equivalent statement to \x22\x22set(x, y, #000000)\x22\x22 using pixels[] is \x22\x22pixels[y*width+x] = #000000\x22\x22. \x0a    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before \x0a    getting the values and calling updatePixels() to update the window..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:y:color:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "setX:y:image:",
protocol: 'image pixels',
fn: function (aX,aY,aPjsImage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._set_y_image_(aX,aY,$recv(aPjsImage)._pjsImage());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setX:y:image:",{aX:aX,aY:aY,aPjsImage:aPjsImage},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aPjsImage"],
source: "setX: aX y: aY image: aPjsImage\x0a    \x0a   \x22 x int: x-coordinate of the pixel \x0a\x09y int: y-coordinate of the pixel \x0a\x09color color: any value of the color datatype \x0a\x09image PImage: any valid variable of type PImage \x22\x0a\x0a\x09 processing set: aX y: aY image: aPjsImage pjsImage\x0a    \x0a    \x22Changes the color of any pixel or writes an image directly into the display window. \x0a     The x and y parameters specify the pixel to change and the color parameter specifies the color value. \x0a     The color parameter is affected by the current color mode (the default is RGB values from 0 to 255). \x0a     When setting an image, the x and y parameters define the coordinates for the upper-left corner of \x0a     the image (the placement of the image is not affected by the imageMode() function).\x0a\x09Setting the color of a single pixel with set(x, y) is easy, but not as fast as putting the data directly into pixels[]. \x0a    The equivalent statement to \x22\x22set(x, y, #000000)\x22\x22 using pixels[] is \x22\x22pixels[y*width+x] = #000000\x22\x22. \x0a    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before \x0a    getting the values and calling updatePixels() to update the window..\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:y:image:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "shininess:",
protocol: 'material properties',
fn: function (aShine){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._shininess_(aShine);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"shininess:",{aShine:aShine},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aShine"],
source: "shininess: aShine\x0a\x09\x22shine float: degree of shininess  \x22\x0a    \x0a\x09processing shininess: aShine\x0a    \x0a    \x22Sets the amount of gloss in the surface of shapes. \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["shininess:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "size:height:",
protocol: 'sketch structure',
fn: function (aWidth,aHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._size_height_(aWidth,aHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:height:",{aWidth:aWidth,aHeight:aHeight},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "size: aWidth height: aHeight \x0a\x0a\x09\x22width int: width of the display window in units of pixels \x0a\x09height int: height of the display window in units of pixels \x22\x0a\x0a\x09processing size: aWidth height: aHeight \x0a    \x0a    \x22Defines the dimension of the display window in units of pixels. \x0a     The size() function must be the first line in setup(). \x0a     If size() is not called, the default size of the window is 100x100 pixels. \x0a     The system variables width and height are set by the parameters passed to the size() function. \x0a\x09Employ numeric values in the size() statement, and then use the built-in width and height variables \x0a     inside your program when you need the dimensions of the display window. \x0a\x09Rendering graphics requires tradeoffs between speed, accuracy, and general usefulness of the available features. \x0a    None of the renderers are perfect, so we provide multiple options so that you can decide what tradeoffs make\x0a     the most sense for your project. We'd prefer all of them to have perfect visual accuracy, \x0a     high performance, and support a wide range of features, but that's simply not possible. \x0a\x0a\x09Again, the size() method must be the first line of the code (or first item inside setup). \x0a    Any code that appears before the size() command may run more than once, which can lead to confusing results.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size:height:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "smooth",
protocol: 'attributes',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._smooth();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"smooth",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "smooth\x0a\x09\x22Draws all geometry with smooth (anti-aliased) edges. \x0a    This will slow down the frame rate of the application, but will enhance the visual refinement.\x0a\x09Starting with release 0124, when using the default (JAVA2D) renderer, smooth() will also improve image quality of resized images.\x22\x0a    \x0a\x09processing smooth",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["smooth"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "specular:value2:value3:",
protocol: 'material properties',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._specular_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"specular:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "specular: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing specular: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a      \x22Sets the specular color of the materials used for shapes drawn to the screen, which sets the color of hightlights. \x0a    Specular refers to light which bounces off a surface in a perferred direction (rather than bouncing in all directions like a diffuse light). \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["specular:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "specularColor:",
protocol: 'material properties',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._specular_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"specularColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "specularColor: aColor\x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing specular: aColor\x0a    \x0a       \x22Sets the specular color of the materials used for shapes drawn to the screen, which sets the color of hightlights. \x0a    Specular refers to light which bounces off a surface in a perferred direction (rather than bouncing in all directions like a diffuse light). \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["specular:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "specularGray:",
protocol: 'material properties',
fn: function (aGrayValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._specular_(aGrayValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"specularGray:",{aGrayValue:aGrayValue},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGrayValue"],
source: "specularGray: aGrayValue\x0a\x09\x22gray int or float: number specifying value between white and black \x0a\x09color color: any value of the color datatype \x0a\x09v1 int or float: red or hue value \x0a\x09v2 int or float: green or saturation value \x0a\x09v3 int or float: green or brightness value \x22\x0a    \x0a\x09processing specular: aGrayValue\x0a    \x0a    \x22Sets the specular color of the materials used for shapes drawn to the screen, which sets the color of hightlights. \x0a    Specular refers to light which bounces off a surface in a perferred direction (rather than bouncing in all directions like a diffuse light). \x0a    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["specular:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "sphere:",
protocol: '3D primitives',
fn: function (aRadius){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._sphere_(aRadius);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sphere:",{aRadius:aRadius},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRadius"],
source: "sphere: aRadius\x0a\x09\x22radius \x09int or float: the radius of the sphere\x22\x0a    \x0a\x09processing sphere: aRadius",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sphere:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "sphereDetail:",
protocol: '3D primitives',
fn: function (aRes){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._sphereDetail_(aRes);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sphereDetail:",{aRes:aRes},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aRes"],
source: "sphereDetail: aRes\x0a\x09\x22res \x09int: number of segments (minimum of 3) used per full circle revolution\x22\x0a    \x0a\x09processing sphereDetail: aRes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sphereDetail:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "sphereDetail:vres:",
protocol: '3D primitives',
fn: function (aURes,aVRes){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._sphereDetail_vres_(aURes,aVRes);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"sphereDetail:vres:",{aURes:aURes,aVRes:aVRes},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aURes", "aVRes"],
source: "sphereDetail: aURes vres: aVRes\x0a\x09\x22ures \x09int: number of segments used longitudinally per full circle revolution\x0a\x09 vres \x09int: number of segments used latitudinally from top to bottom\x22\x0a    \x0a\x09processing sphereDetail: aURes vres: aVRes",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sphereDetail:vres:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "spotLightV1:v2:v3:x:y:z:angle:concentration:",
protocol: 'lights',
fn: function (aV1,aV2,aV3,aX,aY,aZ,anAngle,aCon){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._spotLight_v2_v3_x_y_z_angle_concentration_(aV1,aV2,aV3,aX,aY,aZ,anAngle,aCon);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"spotLightV1:v2:v3:x:y:z:angle:concentration:",{aV1:aV1,aV2:aV2,aV3:aV3,aX:aX,aY:aY,aZ:aZ,anAngle:anAngle,aCon:aCon},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aV1", "aV2", "aV3", "aX", "aY", "aZ", "anAngle", "aCon"],
source: "spotLightV1: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ angle: anAngle concentration: aCon\x0a\x09\x22v1 int or float: red or hue value \x0a\x09v2 int or float: green or hue value \x0a\x09v3 int or float: green or hue value \x0a\x09nx int or float: x coordinate of the light \x0a\x09ny int or float: y coordinate of the light \x0a\x09nz int or float: z coordinate of the light \x0a\x09angle float: angle of the spotlight cone \x0a\x09concentration float: exponent determining the center bias of the cone   \x22\x0a    \x0a    \x09processing spotLight: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ angle: anAngle concentration: aCon\x0a\x0a\x09\x22Adds a spot light. Lights need to be included in the draw() to remain persistent in a looping program. \x0a     Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. \x0a     The affect of the v1, v2, and v3 parameters is determined by the current color mode. \x0a     The x, y, and z parameters specify the position of the light and nx, ny, nz specify the direction or light. \x0a     The angle parameter affects angle of the spotlight cone.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["spotLight:v2:v3:x:y:z:angle:concentration:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeCap:",
protocol: 'attributes',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._strokeCap_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeCap:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "strokeCap: aMode\x0a\x09\x22MODE \x09Either SQUARE, PROJECT, or ROUND.\x22\x0a    \x0a\x09processing strokeCap: aMode\x0a    \x0a    \x22Sets the style for rendering line endings. \x0a    These ends are either squared, extended, or rounded and specified with the \x0a    corresponding parameters SQUARE, PROJECT, and ROUND. The default cap is ROUND.\x0a\x09This function is not available with the P2D, P3D, or OPENGL renderers. \x0a    More information about the renderers can be found in the size() reference.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeCap:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeColor:",
protocol: 'color settings',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "strokeColor: aColor \x0a\x09\x22color \x09color: any value of the color datatype\x22\x0a    \x0a\x09processing stroke: aColor \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeColor:alpha:",
protocol: 'color settings',
fn: function (aColor,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_alpha_(aColor,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeColor:alpha:",{aColor:aColor,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor", "anAlpha"],
source: "strokeColor: aColor alpha: anAlpha\x0a\x09\x22color \x09color: any value of the color datatype\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing stroke: aColor alpha: anAlpha \x0a    \x0a   \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeGray:",
protocol: 'color settings',
fn: function (aGray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_(aGray);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeGray:",{aGray:aGray},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray"],
source: "strokeGray: aGray \x0a\x09\x22gray \x09int or float: number specifying value between white and blackl\x22\x0a    \x0a\x09processing stroke: aGray \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeGray:alpha:",
protocol: 'color settings',
fn: function (aGray,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_alpha_(aGray,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeGray:alpha:",{aGray:aGray,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray", "anAlpha"],
source: "strokeGray: aGray alpha: anAlpha\x0a\x09\x22gray \x09int or float: number specifying value between white and black\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing stroke: aGray alpha: anAlpha\x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeHex:",
protocol: 'color settings',
fn: function (aHex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_(aHex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeHex:",{aHex:aHex},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex"],
source: "strokeHex: aHex \x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x22\x0a    \x0a\x09processing stroke: aHex\x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeHex:alpha:",
protocol: 'color settings',
fn: function (aHex,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_alpha_(aHex,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeHex:alpha:",{aHex:aHex,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex", "anAlpha"],
source: "strokeHex: aHex alpha: anAlpha\x0a\x09\x22hex \x09int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)\x0a     alpha \x09int or float: opacity of the background\x22\x0a    \x0a\x09processing stroke: aHex alpha: anAlpha \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeJoin:",
protocol: 'attributes',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._strokeJoin_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeJoin:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "strokeJoin: aMode\x0a\x09\x22MODE \x09Either MITER, BEVEL, or ROUND\x22\x0a    \x0a\x09processing strokeJoin: aMode\x0a    \x0a    \x22Sets the style of the joints which connect line segments. \x0a    These joints are either mitered, beveled, or rounded and specified with \x0a    the corresponding parameters MITER, BEVEL, and ROUND. The default joint is MITER.\x0a\x09This function is not available with the P2D, P3D, or OPENGL renderers. \x0a    More information about the renderers can be found in the size() reference.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeJoin:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeValue1:value2:value3:",
protocol: 'color settings',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeValue1:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "strokeValue1: aValue1 value2: aValue2 value3: aValue3 \x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x22\x0a    \x0a\x09processing stroke: aValue1 value2: aValue2 value3: aValue3 \x0a    \x0a    \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeValue1:value2:value3:alpha:",
protocol: 'color settings',
fn: function (aValue1,aValue2,aValue3,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._stroke_value2_value3_alpha_(aValue1,aValue2,aValue3,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeValue1:value2:value3:alpha:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "strokeValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22value1 \x09int or float: red or hue value\x0a\x09value2 \x09int or float: green or saturation value\x0a\x09value3 \x09int or float: blue or brightness value\x0a    alpha \x09int or float: opacity of the fill\x22\x0a    \x0a\x09processing stroke: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a   \x22Sets the color used to draw lines and borders around shapes. \x0a    This color is either specified in terms of the RGB or HSB color depending on the \x0a    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).\x0a\x09When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters;\x0a    the first two characters define the alpha component and the remainder the red, green, and blue components.\x0a \x09The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["stroke:value2:value3:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "strokeWeight:",
protocol: 'attributes',
fn: function (aWidth){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._strokeWeight_(aWidth);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"strokeWeight:",{aWidth:aWidth},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth"],
source: "strokeWeight: aWidth\x0a\x09\x22width \x09int or float: the weight (in pixels) of the stroke\x22\x0a    \x0a\x09processing strokeWeight: aWidth\x0a    \x0a    \x22Sets the width of the stroke used for lines, points, and the border around shapes. \x0a    All widths are set in units of pixels. \x0a    This function does not work with the P3D renderer (please see the size() reference for more information).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["strokeWeight:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "texture:",
protocol: 'vertex',
fn: function (aPjsImage){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._texture_($recv(aPjsImage)._pjsImage());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"texture:",{aPjsImage:aPjsImage},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsImage"],
source: "texture: aPjsImage\x0a\x09\x22Sets a texture to be applied to vertex points. \x0a    The texture() function must be called between beginShape() and endShape() and before any calls to vertex().\x0a\x09When textures are in use, the fill color is ignored. Instead, \x0a    use tint() to specify the color of the texture as it is applied to the shape.\x22\x0a    \x0a\x09processing texture: aPjsImage pjsImage",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["texture:", "pjsImage"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "textureMode:",
protocol: 'vertex',
fn: function (aMode){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._textureMode_(aMode);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"textureMode:",{aMode:aMode},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMode"],
source: "textureMode: aMode\x0a\x09\x22MODE \x09either IMAGE or NORMALIZED\x22\x0a    \x0a\x09processing textureMode: aMode\x0a    \x0a    \x22Sets the coordinate space for texture mapping. \x0a    There are two options, IMAGE, which refers to the actual coordinates of the image, and NORMALIZED, \x0a    which refers to a normalized space of values ranging from 0 to 1. \x0a    The default mode is IMAGE. In IMAGE, if an image is 100 x 200 pixels, mapping the image onto the \x0a    entire size of a quad would require the points (0,0) (0,100) (100,200) (0,200). \x0a    The same mapping in NORMAL_SPACE is (0,0) (0,1) (1,1) (0,1).\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["textureMode:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintColor:",
protocol: 'image loading and displaying ',
fn: function (aColor){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_(aColor);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintColor:",{aColor:aColor},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor"],
source: "tintColor: aColor \x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aColor \x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintColor:alpha:",
protocol: 'image loading and displaying ',
fn: function (aColor,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_alpha_(aColor,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintColor:alpha:",{aColor:aColor,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aColor", "anAlpha"],
source: "tintColor: aColor alpha: anAlpha\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aColor alpha: anAlpha\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintGray:",
protocol: 'image loading and displaying ',
fn: function (aGray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_(aGray);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintGray:",{aGray:aGray},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray"],
source: "tintGray: aGray\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aGray\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintGray:alpha:",
protocol: 'image loading and displaying ',
fn: function (aGray,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_alpha_(aGray,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintGray:alpha:",{aGray:aGray,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aGray", "anAlpha"],
source: "tintGray: aGray alpha: anAlpha\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aGray alpha: anAlpha\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintHex:",
protocol: 'image loading and displaying ',
fn: function (aHex){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_(aHex);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintHex:",{aHex:aHex},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex"],
source: "tintHex: aHex\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aHex\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintHex:alpha:",
protocol: 'image loading and displaying ',
fn: function (aHex,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_alpha_(aHex,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintHex:alpha:",{aHex:aHex,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aHex", "anAlpha"],
source: "tintHex: aHex alpha: anAlpha\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aHex alpha: anAlpha\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintValue1:value2:value3:",
protocol: 'image loading and displaying ',
fn: function (aValue1,aValue2,aValue3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_value2_value3_(aValue1,aValue2,aValue3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintValue1:value2:value3:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3"],
source: "tintValue1: aValue1 value2: aValue2 value3: aValue3\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aValue1 value2: aValue2 value3: aValue3\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:value2:value3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "tintValue1:value2:value3:alpha:",
protocol: 'image loading and displaying ',
fn: function (aValue1,aValue2,aValue3,anAlpha){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._tint_value2_value3_alpha_(aValue1,aValue2,aValue3,anAlpha);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"tintValue1:value2:value3:alpha:",{aValue1:aValue1,aValue2:aValue2,aValue3:aValue3,anAlpha:anAlpha},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue1", "aValue2", "aValue3", "anAlpha"],
source: "tintValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a\x09\x22gray int or float: any valid number \x0a\x09alpha int or float: opacity of the image \x0a\x09value1 int or float: red or hue value \x0a\x09value2 int or float: green or saturation value \x0a\x09value3 int or float: blue or brightness value \x0a\x09color color: any value of the color datatype  \x0a\x09hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) \x22\x0a    \x0a\x09processing tint: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha\x0a    \x0a    \x22Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. \x0a     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. \x0a     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). \x0a     When using hexadecimal notation to specify a color, use \x22\x22#\x22\x22 or \x22\x220x\x22\x22 before the values (e.g. #CCFFAA, 0xFFCCFFAA). \x0a    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). \x0a    When using the hexadecimal notation starting with \x22\x220x\x22\x22, the hexadecimal value must be specified with eight characters; \x0a    the first two characters define the alpha component and the remainder the red, green, and blue components. \x0a    The value for the parameter \x22\x22gray\x22\x22 must be less than or equal to the current maximum value as specified by colorMode(). \x0a    The default maximum value is 255. \x0a     The tint() method is also used to control the coloring of textures in 3D.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["tint:value2:value3:alpha:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "translateX:y:",
protocol: 'sketch transform',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._translate_y_(aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateX:y:",{aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "translateX: aX y: aY \x0a\x09\x22x int or float: left/right translation \x0a\x09y int or float: up/down translation \x0a\x09z int or float: forward/back translation \x0a  \x22\x0a    \x0a\x09processing translate:aX y: aY \x0a    \x0a    \x22Specifies an amount to displace objects within the display window. \x0a    The x parameter specifies left/right translation, the y parameter specifies up/down translation, \x0a    and the z parameter specifies translations toward/away from the screen. \x0a    Using this function with the z parameter requires using the P3D or OPENGL parameter in combination with \x0a    size as shown in the above example. Transformations apply to everything that happens after and subsequent calls to \x0a    the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). \x0a    If translate() is called within draw(), the transformation is reset when the loop begins again. \x0a    This function can be further controlled by the pushMatrix() and popMatrix().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translate:y:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "translateX:y:z:",
protocol: 'sketch transform',
fn: function (aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._translate_y_z_(aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateX:y:z:",{aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ"],
source: "translateX: aX y: aY z: aZ\x0a\x09\x22x int or float: left/right translation \x0a\x09y int or float: up/down translation \x0a\x09z int or float: forward/back translation \x0a  \x22\x0a    \x0a\x09processing translate:aX y: aY z: aZ\x0a    \x0a    \x22Specifies an amount to displace objects within the display window. \x0a    The x parameter specifies left/right translation, the y parameter specifies up/down translation, \x0a    and the z parameter specifies translations toward/away from the screen. \x0a    Using this function with the z parameter requires using the P3D or OPENGL parameter in combination with \x0a    size as shown in the above example. Transformations apply to everything that happens after and subsequent calls to \x0a    the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). \x0a    If translate() is called within draw(), the transformation is reset when the loop begins again. \x0a    This function can be further controlled by the pushMatrix() and popMatrix().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translate:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "triangleX1:y1:x2:y2:x3:y3:",
protocol: '2D primitives',
fn: function (aX1,aY1,aX2,aY2,aX3,aY3){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._triangle_y1_x2_y2_x3_y3_(aX1,aY1,aX2,aY2,aX3,aY3);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"triangleX1:y1:x2:y2:x3:y3:",{aX1:aX1,aY1:aY1,aX2:aX2,aY2:aY2,aX3:aX3,aY3:aY3},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX1", "aY1", "aX2", "aY2", "aX3", "aY3"],
source: "triangleX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3\x0a\x0a\x09processing triangle: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["triangle:y1:x2:y2:x3:y3:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "updatePixels",
protocol: 'image pixels',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._updatePixels();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"updatePixels",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "updatePixels\x0a    \x0a   \x22Updates the display window (or an image) when data in the pixels[] array has been modified. \x0a    Use in conjunction with loadPixels(). \x0a    If you're only reading pixels from the array, there's no need to call updatePixels() unless there are changes. \x0a\x09Certain renderers may or may not seem to require loadPixels() or updatePixels(). \x0a    However, the rule is that any time you want to manipulate the pixels[] array, you must first call loadPixels(), \x0a    and after changes have been made, call updatePixels().\x0a    Even if the renderer may not seem to use this function in the current Processing release, this will always be subject to change. \x22\x0a\x0a\x09 processing updatePixels",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["updatePixels"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "vertexX:y:",
protocol: 'vertex',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._vertex_y_(aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vertexX:y:",{aX:aX,aY:aY},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "vertexX: aX y: aY  \x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY \x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vertex:y:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "vertexX:y:u:v:",
protocol: 'vertex',
fn: function (aX,aY,anU,aV){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._vertex_y_u_v_(aX,aY,anU,aV);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vertexX:y:u:v:",{aX:aX,aY:aY,anU:anU,aV:aV},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "anU", "aV"],
source: "vertexX: aX y: aY u: anU v: aV\x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY u: anU v: aV\x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vertex:y:u:v:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "vertexX:y:z:",
protocol: 'vertex',
fn: function (aX,aY,aZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._vertex_y_z_(aX,aY,aZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vertexX:y:z:",{aX:aX,aY:aY,aZ:aZ},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ"],
source: "vertexX: aX y: aY z: aZ \x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY z: aZ \x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vertex:y:z:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "vertexX:y:z:u:v:",
protocol: 'vertex',
fn: function (aX,aY,aZ,anU,aV){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@processing"])._vertex_y_z_u_v_(aX,aY,aZ,anU,aV);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"vertexX:y:z:u:v:",{aX:aX,aY:aY,aZ:aZ,anU:anU,aV:aV},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY", "aZ", "anU", "aV"],
source: "vertexX: aX y: aY z: aZ u: anU v: aV\x0a\x09\x22x \x09int or float: x-coordinate of the vertex\x0a\x09y \x09int or float: y-coordinate of the vertex\x0a\x09z \x09int or float: z-coordinate of the vertex\x0a\x09u \x09int or float: horizontal coordinate for the texture mapping\x0a\x09v \x09int or float: vertical coordinate for the texture mapping\x22\x0a    \x0a\x09processing vertex: aX y: aY z: aZ u: anU v: aV\x0a    \x0a    \x22All shapes are constructed by connecting a series of vertices. vertex() is used to \x0a    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used \x0a    exclusively within the beginShape() and endShape() function.\x0a\x0a\x09Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in \x0a\x09combination with size as shown in the above example.\x0a\x0a\x09This function is also used to map a texture onto the geometry. \x0a\x09The texture() function declares the texture to apply to the geometry and the u and v coordinates \x0a\x09set define the mapping of this texture to the form. \x0a    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, \x0a    but this relation can be changed with textureMode().\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["vertex:y:z:u:v:"]
}),
$globals.PjsInterface);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'accessing',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@processing"])._width();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.PjsInterface)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x0a\x09^processing width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width"]
}),
$globals.PjsInterface);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("use on: instead");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.PjsInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a\x09self error: 'use on: instead'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.PjsInterface.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'not yet classified',
fn: function (aProcessingInstance){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsInterface.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._processing_(aProcessingInstance);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aProcessingInstance:aProcessingInstance},$globals.PjsInterface.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aProcessingInstance"],
source: "on: aProcessingInstance\x0a\x0a\x09^super new processing: aProcessingInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["processing:", "new"]
}),
$globals.PjsInterface.klass);


$core.addClass('PjsObject', $globals.Object, ['pjsInterface'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "pjsInterface",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@pjsInterface"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsInterface\x0a\x0a\x09^pjsInterface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsObject);

$core.addMethod(
$core.method({
selector: "pjsInterface:",
protocol: 'not yet classified',
fn: function (aPjsInterface){
var self=this;
self["@pjsInterface"]=aPjsInterface;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsInterface"],
source: "pjsInterface: aPjsInterface\x0a\x0a\x09pjsInterface := aPjsInterface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsObject);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self._error_("use on: instead");
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.PjsObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a\x09self error: 'use on: instead'",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["error:"]
}),
$globals.PjsObject.klass);

$core.addMethod(
$core.method({
selector: "on:",
protocol: 'not yet classified',
fn: function (aPjsInterface){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsObject.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._pjsInterface_(aPjsInterface);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"on:",{aPjsInterface:aPjsInterface},$globals.PjsObject.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsInterface"],
source: "on: aPjsInterface\x0a\x0a\x09 ^super new pjsInterface: aPjsInterface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["pjsInterface:", "new"]
}),
$globals.PjsObject.klass);


$core.addClass('PjsShape', $globals.Object, ['pjsShape'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "addChild:",
protocol: 'not yet classified',
fn: function (aWho){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._addChild_(aWho);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addChild:",{aWho:aWho},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWho"],
source: "addChild: aWho\x0a\x0a\x09pjsShape addChild: aWho",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["addChild:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "beginContour",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._beginContour();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"beginContour",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "beginContour\x0a\x0a\x09pjsShape beginContour",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["beginContour"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "disableStyle",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._disableStyle();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"disableStyle",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "disableStyle\x0a\x0a\x09pjsShape disableStyle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["disableStyle"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "enableStyle",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._enableStyle();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"enableStyle",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "enableStyle\x0a\x0a\x09pjsShape enableStyle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["enableStyle"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "end",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._end();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"end",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "end\x0a\x0a\x09pjsShape end",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["end"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "endContour",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._endContour();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"endContour",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "endContour\x0a\x0a\x09pjsShape endContour",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["endContour"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "getChild:",
protocol: 'not yet classified',
fn: function (anIndexOrTarget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsShape"])._getChild_(anIndexOrTarget);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getChild:",{anIndexOrTarget:anIndexOrTarget},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["anIndexOrTarget"],
source: "getChild: anIndexOrTarget\x0a\x0a\x09^pjsShape getChild: anIndexOrTarget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getChild:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "height",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsShape"])._height();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "height\x0a\x0a\x09^  pjsShape height",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "height:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._height_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"height:",{aValue:aValue},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "height: aValue\x0a\x0a\x09pjsShape height: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["height:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsShape"]=self._newShapeInstance();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a\x0a\x09pjsShape := self newShapeInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newShapeInstance"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "isVisible",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsShape"])._isVisible();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"isVisible",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "isVisible\x0a\x0a\x09^pjsShape isVisible",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["isVisible"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "newShapeInstance",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.Shape() ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newShapeInstance",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "newShapeInstance\x0a < return new p.Shape() >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "pjsShape",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@pjsShape"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsShape\x0a\x0a\x09^pjsShape",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "resetMatrix",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._resetMatrix();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"resetMatrix",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "resetMatrix\x0a\x0a\x09pjsShape resetMatrix",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["resetMatrix"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "rotate:",
protocol: 'not yet classified',
fn: function (aFloatAngleInRadians){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._rotate_(aFloatAngleInRadians);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotate:",{aFloatAngleInRadians:aFloatAngleInRadians},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatAngleInRadians"],
source: "rotate: aFloatAngleInRadians\x0a\x09\x0a    pjsShape rotate: aFloatAngleInRadians",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotate:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "rotateX:",
protocol: 'not yet classified',
fn: function (aFloatAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._rotateX_(aFloatAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateX:",{aFloatAngle:aFloatAngle},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatAngle"],
source: "rotateX: aFloatAngle\x0a\x09\x0a    pjsShape rotateX: aFloatAngle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateX:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "rotateY:",
protocol: 'not yet classified',
fn: function (aFloatAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._rotateY_(aFloatAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateY:",{aFloatAngle:aFloatAngle},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatAngle"],
source: "rotateY: aFloatAngle\x0a\x09\x0a    pjsShape rotateY: aFloatAngle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateY:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "rotateZ:",
protocol: 'not yet classified',
fn: function (aFloatAngle){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._rotateZ_(aFloatAngle);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"rotateZ:",{aFloatAngle:aFloatAngle},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatAngle"],
source: "rotateZ: aFloatAngle\x0a\x09\x0a    pjsShape rotateZ: aFloatAngle",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["rotateZ:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "scale:",
protocol: 'not yet classified',
fn: function (aFloatPercent){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._scale_(aFloatPercent);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scale:",{aFloatPercent:aFloatPercent},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatPercent"],
source: "scale: aFloatPercent\x0a\x09\x0a    pjsShape scale: aFloatPercent",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scale:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "scaleX:y:",
protocol: 'not yet classified',
fn: function (aFloatPercentXAxis,aFloatPercentYAxis){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._scale_y_(aFloatPercentXAxis,aFloatPercentYAxis);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleX:y:",{aFloatPercentXAxis:aFloatPercentXAxis,aFloatPercentYAxis:aFloatPercentYAxis},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatPercentXAxis", "aFloatPercentYAxis"],
source: "scaleX: aFloatPercentXAxis y: aFloatPercentYAxis\x0a\x09\x0a    pjsShape scale: aFloatPercentXAxis  y: aFloatPercentYAxis",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scale:y:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "scaleX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatPercentXAxis,aFloatPercentYAxis,aFloatPercentZAxis){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._scale_y_z_(aFloatPercentXAxis,aFloatPercentYAxis,aFloatPercentZAxis);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"scaleX:y:z:",{aFloatPercentXAxis:aFloatPercentXAxis,aFloatPercentYAxis:aFloatPercentYAxis,aFloatPercentZAxis:aFloatPercentZAxis},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatPercentXAxis", "aFloatPercentYAxis", "aFloatPercentZAxis"],
source: "scaleX: aFloatPercentXAxis y: aFloatPercentYAxis z: aFloatPercentZAxis\x0a\x09\x0a    pjsShape scale: aFloatPercentXAxis  y: aFloatPercentYAxis z: aFloatPercentZAxis",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["scale:y:z:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "setVisible:",
protocol: 'not yet classified',
fn: function (aBoolean){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._setVisibile_(aBoolean);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setVisible:",{aBoolean:aBoolean},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aBoolean"],
source: "setVisible: aBoolean\x0a\x0a\x09pjsShape setVisibile: aBoolean",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["setVisibile:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "translateX:y:",
protocol: 'not yet classified',
fn: function (aFloatLeftRight,aFloatUpDown){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._translate_y_(aFloatLeftRight,aFloatUpDown);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateX:y:",{aFloatLeftRight:aFloatLeftRight,aFloatUpDown:aFloatUpDown},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatLeftRight", "aFloatUpDown"],
source: "translateX: aFloatLeftRight y: aFloatUpDown\x0a\x09\x0a    pjsShape translate: aFloatLeftRight y: aFloatUpDown",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translate:y:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "translateX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatLeftRight,aFloatUpDown,aFloatForwarBackward){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._translate_y_z_(aFloatLeftRight,aFloatUpDown,aFloatForwarBackward);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"translateX:y:z:",{aFloatLeftRight:aFloatLeftRight,aFloatUpDown:aFloatUpDown,aFloatForwarBackward:aFloatForwarBackward},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatLeftRight", "aFloatUpDown", "aFloatForwarBackward"],
source: "translateX: aFloatLeftRight y: aFloatUpDown z: aFloatForwarBackward\x0a\x09\x0a    pjsShape translate: aFloatLeftRight y: aFloatUpDown z: aFloatForwarBackward",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["translate:y:z:"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "width",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsShape"])._width();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width",{},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "width\x0a\x0a\x09^ pjsShape width",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width"]
}),
$globals.PjsShape);

$core.addMethod(
$core.method({
selector: "width:",
protocol: 'not yet classified',
fn: function (aValue){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsShape"])._width_(aValue);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"width:",{aValue:aValue},$globals.PjsShape)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aValue"],
source: "width: aValue\x0a\x0a\x09pjsShape width: aValue",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["width:"]
}),
$globals.PjsShape);



$core.addClass('PjsSketch', $globals.Object, ['pjsInterface'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "activateFunctions",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._pjsInterface())._override_with_("draw",(function(){
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx2) {
//>>excludeEnd("ctx");
return self._draw();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx2) {$ctx2.fillBlock({},$ctx1,1)});
//>>excludeEnd("ctx");
}));
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"activateFunctions",{},$globals.PjsSketch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "activateFunctions\x0a\x0a\x09self pjsInterface override: 'draw' with: [self draw].",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["override:with:", "pjsInterface", "draw"]
}),
$globals.PjsSketch);

$core.addMethod(
$core.method({
selector: "cursor",
protocol: 'environment',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self._pjsInterface())._cursor();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"cursor",{},$globals.PjsSketch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "cursor\x0a\x09\x22MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT \x0a\x09image PImage: any variable of type PImage \x0a\x09x int: the horizonal active spot of the cursor \x0a\x09y int: the vertical active spot of the cursor \x22\x0a    \x0a\x09 ^self pjsInterface cursor\x0a \x0a \x09\x22Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. \x0a    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. \x0a    It is not possible to load an image as the cursor if you are exporting your program for the Web. \x0a    The values for parameters x and y must be less than the dimensions of the image.\x22",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["cursor", "pjsInterface"]
}),
$globals.PjsSketch);

$core.addMethod(
$core.method({
selector: "getGlobalProcessingInstance",
protocol: 'initialization',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return Processing.instances[0];
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getGlobalProcessingInstance",{},$globals.PjsSketch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getGlobalProcessingInstance\x0a\x0a  <return Processing.instances[0]>",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketch);

$core.addMethod(
$core.method({
selector: "initialize",
protocol: 'initialization',
fn: function (){
var self=this;
var mProcessingInstance;
function $PjsInterface(){return $globals.PjsInterface||(typeof PjsInterface=="undefined"?nil:PjsInterface)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
mProcessingInstance=self._getGlobalProcessingInstance();
self["@pjsInterface"]=$recv($PjsInterface())._on_(mProcessingInstance);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initialize",{mProcessingInstance:mProcessingInstance},$globals.PjsSketch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initialize\x0a \x0a\x09|  mProcessingInstance |\x0a\x0a\x09mProcessingInstance := self getGlobalProcessingInstance.\x0a\x0a\x09pjsInterface := PjsInterface on: mProcessingInstance.",
referencedClasses: ["PjsInterface"],
//>>excludeEnd("ide");
messageSends: ["getGlobalProcessingInstance", "on:"]
}),
$globals.PjsSketch);

$core.addMethod(
$core.method({
selector: "pjsInterface",
protocol: 'accessing',
fn: function (){
var self=this;
var $1;
$1=self["@pjsInterface"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsInterface\x0a\x0a\x09^pjsInterface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketch);

$core.addMethod(
$core.method({
selector: "pjsInterface:",
protocol: 'accessing',
fn: function (aPjsInterface){
var self=this;
self["@pjsInterface"]=aPjsInterface;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsInterface"],
source: "pjsInterface: aPjsInterface\x0a\x0a\x09pjsInterface := aPjsInterface",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketch);

$core.addMethod(
$core.method({
selector: "size:height:",
protocol: 'processing',
fn: function (aWidth,aHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self._pjsInterface())._size_height_(aWidth,aHeight);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"size:height:",{aWidth:aWidth,aHeight:aHeight},$globals.PjsSketch)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "size: aWidth height: aHeight \x0a\x0a\x09self pjsInterface size: aWidth height: aHeight",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size:height:", "pjsInterface"]
}),
$globals.PjsSketch);


$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=self._start();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.PjsSketch.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a\x09^self start",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["start"]
}),
$globals.PjsSketch.klass);

$core.addMethod(
$core.method({
selector: "overrideFunctions",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 processing.draw = function() {}; ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"overrideFunctions",{},$globals.PjsSketch.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "overrideFunctions\x0a\x0a\x09 < processing.draw = function() {}; >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsSketch.klass);

$core.addMethod(
$core.method({
selector: "start",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsSketch.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._activateFunctions();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"start",{},$globals.PjsSketch.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "start\x0a\x0a\x09^super new activateFunctions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["activateFunctions", "new"]
}),
$globals.PjsSketch.klass);

$core.addMethod(
$core.method({
selector: "startWidth:height:",
protocol: 'not yet classified',
fn: function (aWidth,aHeight){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$3,$1;
$2=self._new();
$recv($2)._size_height_(aWidth,aHeight);
$3=$recv($2)._activateFunctions();
$1=$3;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"startWidth:height:",{aWidth:aWidth,aHeight:aHeight},$globals.PjsSketch.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aWidth", "aHeight"],
source: "startWidth: aWidth height: aHeight\x0a\x0a\x09^self new \x0a         size: aWidth height: aHeight ;\x0a         activateFunctions",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["size:height:", "new", "activateFunctions"]
}),
$globals.PjsSketch.klass);


$core.addClass('PjsVector', $globals.Object, ['pjsVector'], 'Processing-Core');
$core.addMethod(
$core.method({
selector: "addVector1:vector2:target:",
protocol: 'not yet classified',
fn: function (aPjsVector1,aPjsVector2,aTargetVectorOrNull){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@pjsVector"];
$2=$recv(aPjsVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
$recv($1)._add_vector2_target_($2,$recv(aPjsVector2)._pjsVector(),aTargetVectorOrNull);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addVector1:vector2:target:",{aPjsVector1:aPjsVector1,aPjsVector2:aPjsVector2,aTargetVectorOrNull:aTargetVectorOrNull},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector1", "aPjsVector2", "aTargetVectorOrNull"],
source: "addVector1: aPjsVector1 vector2: aPjsVector2 target: aTargetVectorOrNull\x0a\x0a\x09pjsVector add: aPjsVector1 pjsVector vector2: aPjsVector2 pjsVector target: aTargetVectorOrNull",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:vector2:target:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "addVector:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._add_($recv(aPjsVector)._pjsVector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addVector:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "addVector: aPjsVector\x0a\x0a\x09pjsVector add: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "addX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatX,aFLoatY,aFloatZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._add_y_z_(aFloatX,aFLoatY,aFloatZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addX:y:z:",{aFloatX:aFloatX,aFLoatY:aFLoatY,aFloatZ:aFloatZ},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "addX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09pjsVector add: aFloatX y: aFLoatY z: aFloatZ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["add:y:z:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "asArray",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._array();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"asArray",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "asArray\x0a\x0a\x09^pjsVector array",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["array"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "crossX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatX,aFLoatY,aFloatZ){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsVector_($recv(self["@pjsVector"])._cross_y_z_(aFloatX,aFLoatY,aFloatZ));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"crossX:y:z:",{aFloatX:aFloatX,aFLoatY:aFLoatY,aFloatZ:aFloatZ,instance:instance},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "crossX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09| instance   |\x0a\x0a  instance := super new.\x0a   \x0a  instance initPjsVector: ( pjsVector cross: aFloatX y: aFLoatY z: aFloatZ).\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsVector:", "cross:y:z:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "dist:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._dist_($recv(aPjsVector)._pjsVector());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dist:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "dist: aPjsVector \x0a\x0a\x09^pjsVector dist: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dist:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "div:",
protocol: 'not yet classified',
fn: function (aScalarFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._div_(aScalarFloat);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"div:",{aScalarFloat:aScalarFloat},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScalarFloat"],
source: "div: aScalarFloat\x0a\x0a\x09pjsVector div: aScalarFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["div:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "divVector:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._div_($recv(aPjsVector)._pjsVector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divVector:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "divVector: aPjsVector \x0a\x0a\x09pjsVector div: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["div:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "dot:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._dot_($recv(aPjsVector)._pjsVector());
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dot:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "dot: aPjsVector \x0a\x0a\x09^pjsVector dot: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dot:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "dotX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatX,aFLoatY,aFloatZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._dot_y_z_(aFloatX,aFLoatY,aFloatZ);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"dotX:y:z:",{aFloatX:aFloatX,aFLoatY:aFLoatY,aFloatZ:aFloatZ},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "dotX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09^pjsVector dot: aFloatX y: aFLoatY z: aFloatZ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["dot:y:z:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "get",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._get();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "get\x0a\x0a\x09^pjsVector get",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "get:",
protocol: 'not yet classified',
fn: function (aTarget){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._get_(aTarget);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"get:",{aTarget:aTarget},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aTarget"],
source: "get: aTarget\x0a\x0a\x09^pjsVector get: aTarget",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["get:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "getNewVectorInstance",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
 return new p.PVector(); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"getNewVectorInstance",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "getNewVectorInstance\x0a\x0a        < return new p.PVector(); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "initPjsVector",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsVector"]=self._getNewVectorInstance();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsVector",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "initPjsVector\x0a\x0a\x09pjsVector := self getNewVectorInstance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["getNewVectorInstance"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "initPjsVector:",
protocol: 'not yet classified',
fn: function (aPVector){
var self=this;
self["@pjsVector"]=aPVector;
return self;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPVector"],
source: "initPjsVector: aPVector\x0a\x0a\x09pjsVector := aPVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "initPjsVectorX:y:",
protocol: 'not yet classified',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsVector"]=self._newVectorXJs_y_(aX,aY);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsVectorX:y:",{aX:aX,aY:aY},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "initPjsVectorX: aX y: aY \x0a\x0a\x09pjsVector :=  self newVectorXJs: aX y: aY",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newVectorXJs:y:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "initPjsVectorX:y:z:",
protocol: 'not yet classified',
fn: function (x,y,z){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
self["@pjsVector"]=self._newVectorXJs_y_(x,y);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"initPjsVectorX:y:z:",{x:x,y:y,z:z},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y", "z"],
source: "initPjsVectorX: x y: y z: z\x0a\x0a\x09pjsVector := self newVectorXJs: x y: y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["newVectorXJs:y:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "limit:",
protocol: 'not yet classified',
fn: function (aMaxFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._limit_(aMaxFloat);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"limit:",{aMaxFloat:aMaxFloat},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aMaxFloat"],
source: "limit: aMaxFloat\x0a\x0a\x09pjsVector limit: aMaxFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["limit:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "mag",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._mag();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mag",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "mag\x0a\x0a\x09^pjsVector mag",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mag"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "mult:",
protocol: 'not yet classified',
fn: function (aScalarFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._mult_(aScalarFloat);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mult:",{aScalarFloat:aScalarFloat},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScalarFloat"],
source: "mult: aScalarFloat\x0a\x0a\x09pjsVector mult: aScalarFloat",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mult:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "mult:vector:",
protocol: 'not yet classified',
fn: function (aScalarFloat,aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._mult_vector_(aScalarFloat,$recv(aPjsVector)._pjsVector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"mult:vector:",{aScalarFloat:aScalarFloat,aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScalarFloat", "aPjsVector"],
source: "mult: aScalarFloat vector: aPjsVector\x0a\x0a\x09pjsVector mult: aScalarFloat vector: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mult:vector:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "multVector:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._mult_($recv(aPjsVector)._pjsVector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multVector:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "multVector: aPjsVector\x0a\x0a\x09pjsVector mult: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["mult:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "newVectorXJs:y:",
protocol: 'not yet classified',
fn: function (aX,aY){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new p.PVector(aX, aY); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newVectorXJs:y:",{aX:aX,aY:aY},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aX", "aY"],
source: "newVectorXJs: aX y: aY\x0a\x0a <return new p.PVector(aX, aY); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "newVectorXJs:y:z:",
protocol: 'not yet classified',
fn: function (x,y,z){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
return new p.PVector(x, y, z); ;
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newVectorXJs:y:z:",{x:x,y:y,z:z},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["x", "y", "z"],
source: "newVectorXJs: x y: y z: z\x0a <return new p.PVector(x, y, z); >",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "normalize",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._normalize();
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"normalize",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "normalize\x0a\x0a\x09pjsVector normalize",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["normalize"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "pjsVector",
protocol: 'not yet classified',
fn: function (){
var self=this;
var $1;
$1=self["@pjsVector"];
return $1;

},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "pjsVector\x0a\x0a\x09^pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: []
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "setSource:",
protocol: 'not yet classified',
fn: function (aFloatSourceArray){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._set_(aFloatSourceArray);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setSource:",{aFloatSourceArray:aFloatSourceArray},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatSourceArray"],
source: "setSource: aFloatSourceArray\x0a\x0a\x09pjsVector set: aFloatSourceArray",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "setVector:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._set_($recv(aPjsVector)._pjsVector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setVector:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "setVector: aPjsVector\x0a\x0a\x09pjsVector set: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "setX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatX,aFloatY,aFloatZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._set_y_z_(aFloatX,aFloatY,aFloatZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"setX:y:z:",{aFloatX:aFloatX,aFloatY:aFloatY,aFloatZ:aFloatZ},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatX", "aFloatY", "aFloatZ"],
source: "setX: aFloatX y: aFloatY z: aFloatZ\x0a\x0a\x09pjsVector set: aFloatX y: aFloatY z: aFloatZ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["set:y:z:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "subVector1:vector2:target:",
protocol: 'not yet classified',
fn: function (aPjsVector1,aPjsVector2,aTargetVectorOrNull){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1,$2;
$1=self["@pjsVector"];
$2=$recv(aPjsVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
$recv($1)._sub_vector2_target_($2,$recv(aPjsVector2)._pjsVector(),aTargetVectorOrNull);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subVector1:vector2:target:",{aPjsVector1:aPjsVector1,aPjsVector2:aPjsVector2,aTargetVectorOrNull:aTargetVectorOrNull},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector1", "aPjsVector2", "aTargetVectorOrNull"],
source: "subVector1: aPjsVector1 vector2: aPjsVector2 target: aTargetVectorOrNull\x0a\x0a\x09pjsVector sub: aPjsVector1 pjsVector vector2: aPjsVector2 pjsVector target: aTargetVectorOrNull",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sub:vector2:target:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "subVector:",
protocol: 'not yet classified',
fn: function (aPjsVector){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._sub_($recv(aPjsVector)._pjsVector());
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subVector:",{aPjsVector:aPjsVector},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector"],
source: "subVector: aPjsVector\x0a\x0a\x09pjsVector sub: aPjsVector pjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sub:", "pjsVector"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "subX:y:z:",
protocol: 'not yet classified',
fn: function (aFloatX,aFLoatY,aFloatZ){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
$recv(self["@pjsVector"])._sub_y_z_(aFloatX,aFLoatY,aFloatZ);
return self;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subX:y:z:",{aFloatX:aFloatX,aFLoatY:aFLoatY,aFloatZ:aFloatZ},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aFloatX", "aFLoatY", "aFloatZ"],
source: "subX: aFloatX y: aFLoatY z: aFloatZ\x0a\x0a\x09pjsVector sub: aFloatX y: aFLoatY z: aFloatZ",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["sub:y:z:"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "x",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._x();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"x",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "x\x0a\x0a\x09^pjsVector x",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["x"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "y",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._y();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"y",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "y\x0a\x0a\x09^pjsVector y",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["y"]
}),
$globals.PjsVector);

$core.addMethod(
$core.method({
selector: "z",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
$1=$recv(self["@pjsVector"])._z();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"z",{},$globals.PjsVector)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "z\x0a\x0a\x09^pjsVector z",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["z"]
}),
$globals.PjsVector);


$core.addMethod(
$core.method({
selector: "addVector1:vector2:",
protocol: 'not yet classified',
fn: function (aVector1,aVector2){
var self=this;
var instance,v1,v2;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
v2=$recv(aVector2)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._add_v2_(v1,v2));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"addVector1:vector2:",{aVector1:aVector1,aVector2:aVector2,instance:instance,v1:v1,v2:v2},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector1", "aVector2"],
source: "addVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector add: v1 v2: v2).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "add:v2:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "angleBetweenVector1:vector2:",
protocol: 'not yet classified',
fn: function (aVector1,aVector2){
var self=this;
var v1,v2;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
v1=$recv(aVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
v2=$recv(aVector2)._pjsVector();
$1=$recv($PVector())._angleBetween_v2_(v1,v2);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"angleBetweenVector1:vector2:",{aVector1:aVector1,aVector2:aVector2,v1:v1,v2:v2},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector1", "aVector2"],
source: "angleBetweenVector1: aVector1 vector2: aVector2\x0a\x0a\x09|  v1 v2 |\x0a\x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a ^ PVector angleBetween: v1 v2: v2",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["pjsVector", "angleBetween:v2:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "distVector1:vector2:",
protocol: 'not yet classified',
fn: function (aVector1,aVector2){
var self=this;
var instance,v1,v2;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
v2=$recv(aVector2)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._dist_v2_(v1,v2));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"distVector1:vector2:",{aVector1:aVector1,aVector2:aVector2,instance:instance,v1:v1,v2:v2},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector1", "aVector2"],
source: "distVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector dist: v1 v2: v2).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "dist:v2:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "divVector1:vector2:",
protocol: 'not yet classified',
fn: function (aVector1,aVector2){
var self=this;
var instance,v1,v2;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
v2=$recv(aVector2)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._div_v2_(v1,v2));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divVector1:vector2:",{aVector1:aVector1,aVector2:aVector2,instance:instance,v1:v1,v2:v2},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector1", "aVector2"],
source: "divVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector div: v1 v2: v2).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "div:v2:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "divVector:scalar:",
protocol: 'not yet classified',
fn: function (aPjsVector,aScalarFloat){
var self=this;
var instance,v1;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aPjsVector)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._div_scalar_(v1,aScalarFloat));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"divVector:scalar:",{aPjsVector:aPjsVector,aScalarFloat:aScalarFloat,instance:instance,v1:v1},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aPjsVector", "aScalarFloat"],
source: "divVector: aPjsVector scalar: aScalarFloat\x0a\x0a\x09| instance  v1  |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aPjsVector pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector div: v1 scalar: aScalarFloat).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "div:scalar:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "multScalar:vector:",
protocol: 'not yet classified',
fn: function (aScalarFloat,aPjsVector){
var self=this;
var instance,v1;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aPjsVector)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._mult_vector_(aScalarFloat,v1));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multScalar:vector:",{aScalarFloat:aScalarFloat,aPjsVector:aPjsVector,instance:instance,v1:v1},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aScalarFloat", "aPjsVector"],
source: "multScalar: aScalarFloat vector: aPjsVector\x0a\x0a\x09| instance  v1  |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aPjsVector pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector mult: aScalarFloat vector: v1).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "mult:vector:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "multVector1:vector2:",
protocol: 'not yet classified',
fn: function (aVector1,aVector2){
var self=this;
var instance,v1,v2;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
v2=$recv(aVector2)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._mult_v2_(v1,v2));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"multVector1:vector2:",{aVector1:aVector1,aVector2:aVector2,instance:instance,v1:v1,v2:v2},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector1", "aVector2"],
source: "multVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector mult: v1 v2: v2).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "mult:v2:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "new",
protocol: 'not yet classified',
fn: function (){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._initPjsVector();
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"new",{},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: [],
source: "new\x0a\x0a    ^ super new initPjsVector",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initPjsVector", "new"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "newX:y:",
protocol: 'not yet classified',
fn: function (aXFloat,aYFloat){
var self=this;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $2,$1;
$2=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$1=$recv($2)._initPjsVectorX_y_(aXFloat,aYFloat);
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newX:y:",{aXFloat:aXFloat,aYFloat:aYFloat},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aXFloat", "aYFloat"],
source: "newX: aXFloat y: aYFloat\x0a\x0a    ^ super new initPjsVectorX: aXFloat y: aYFloat.",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["initPjsVectorX:y:", "new"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "newX:y:z:",
protocol: 'not yet classified',
fn: function (aXFloat,aYFloat,aZFloat){
var self=this;
var instance;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
$recv(instance)._initPjsVectorX_y_z_(aXFloat,aYFloat,aZFloat);
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"newX:y:z:",{aXFloat:aXFloat,aYFloat:aYFloat,aZFloat:aZFloat,instance:instance},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aXFloat", "aYFloat", "aZFloat"],
source: "newX: aXFloat y: aYFloat z: aZFloat\x0a\x0a\x09| instance |\x0a\x0a  instance := super new.\x0a  instance initPjsVectorX: aXFloat y: aYFloat z: aZFloat.\x0a  \x0a  ^instance",
referencedClasses: [],
//>>excludeEnd("ide");
messageSends: ["new", "initPjsVectorX:y:z:"]
}),
$globals.PjsVector.klass);

$core.addMethod(
$core.method({
selector: "subVector1:vector2:",
protocol: 'not yet classified',
fn: function (aVector1,aVector2){
var self=this;
var instance,v1,v2;
function $PVector(){return $globals.PVector||(typeof PVector=="undefined"?nil:PVector)}
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
return $core.withContext(function($ctx1) { 
//>>excludeEnd("ctx");
var $1;
instance=(
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = true, 
//>>excludeEnd("ctx");
$globals.PjsVector.klass.superclass.fn.prototype._new.apply($recv(self), []));
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.supercall = false;
//>>excludeEnd("ctx");;
v1=$recv(aVector1)._pjsVector();
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
$ctx1.sendIdx["pjsVector"]=1;
//>>excludeEnd("ctx");
v2=$recv(aVector2)._pjsVector();
$recv(instance)._initPjsVector_($recv($PVector())._sub_v2_(v1,v2));
$1=instance;
return $1;
//>>excludeStart("ctx", pragmas.excludeDebugContexts);
}, function($ctx1) {$ctx1.fill(self,"subVector1:vector2:",{aVector1:aVector1,aVector2:aVector2,instance:instance,v1:v1,v2:v2},$globals.PjsVector.klass)});
//>>excludeEnd("ctx");
},
//>>excludeStart("ide", pragmas.excludeIdeData);
args: ["aVector1", "aVector2"],
source: "subVector1: aVector1 vector2: aVector2\x0a\x0a\x09| instance  v1 v2 |\x0a\x0a  instance := super new.\x0a  \x0a  v1 := aVector1 pjsVector.\x0a  v2 := aVector2 pjsVector.\x0a  \x0a  instance initPjsVector: ( PVector sub: v1 v2: v2).\x0a  \x0a  ^instance",
referencedClasses: ["PVector"],
//>>excludeEnd("ide");
messageSends: ["new", "pjsVector", "initPjsVector:", "sub:v2:"]
}),
$globals.PjsVector.klass);

});
