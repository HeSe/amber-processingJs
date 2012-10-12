Smalltalk current createPackage: 'Processing-Core' properties: #{}!
Object subclass: #PjsFont
	instanceVariableNames: 'pjsFont'
	package: 'Processing-Core'!

!PjsFont methodsFor: 'not yet classified'!

initPjsFont
  
    pjsFont := <new PFont() >
!

initPjsFont: font smooth: smooth 
  
    pjsFont := <new PFont(font, smootht) >
!

initPjsFont: font smooth: smooth charset: charset
  
    pjsFont := <new PFont(font, smooth, charset) >
!

initPjsFont: font smooth: smooth charset: charset onInputStream: stream
  
    pjsFont := <new PFont(font, smooth, charset, stream) >
!

initPjsFontOnInputStream: stream
  
    pjsFont := <new PFont(stream) >
! !

!PjsFont class methodsFor: 'not yet classified'!

list
  
  ^<PFont.list();>
!

new

	| instance |

  instance := self new.
  instance initPjsFont.
  
  ^instance
!

newFont: aFont

	| instance |

  instance := super new.
  instance initPjsFont: aFont.
  
  ^instance
!

newFont: aFont smooth: aBool

	| instance |

  instance := super new.
  instance initPjsFont: aFont smooth: aBool.
  
  ^instance
!

newFont: aFont smooth: aBool charset: aCharSet

	| instance |

  instance := super new.
  instance initPjsFont: aFont smooth: aBool charset: aCharSet.
  
  ^instance
!

newFont: aFont smooth: aBool charset: aCharSet onInputStream: aStream

	| instance |

  instance := super new.
  instance initPjsFont: aFont smooth: aBool charset: aCharSet onInputStream: aStream.
  
  ^instance
!

newOnInputStream: aStream

	| instance |

  instance := super new.
  instance initPjsOnStream: aStream.
  
  ^instance
! !

Object subclass: #PjsImage
	instanceVariableNames: 'pjsImage'
	package: 'Processing-Core'!

!PjsImage methodsFor: 'not yet classified'!

blendImage: aPjsImage sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode

"BLEND - linear interpolation of colours: C = A*factor + B

ADD - additive blending with white clip: C = min(A*factor + B, 255)

SUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)

DARKEST - only the darkest colour succeeds: C = min(A*factor, B)

LIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)

DIFFERENCE - subtract colors from underlying image.

EXCLUSION - similar to DIFFERENCE, but less extreme.

MULTIPLY - Multiply the colors, result will always be darker.

SCREEN - Opposite multiply, uses inverse values of the colors.

OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.

HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.

SOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.

DODGE - Lightens light tones and increases contrast, ignores darks. Called ""Color Dodge"" in Illustrator and Photoshop.

BURN - Darker areas are applied, increasing contrast, ignores lights. Called ""Color Burn"" in Illustrator and Photoshop."

	pjsImage blend: aPjsImage pjsImage  sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode
!

blendSX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode

"BLEND - linear interpolation of colours: C = A*factor + B

ADD - additive blending with white clip: C = min(A*factor + B, 255)

SUBTRACT - subtractive blending with black clip: C = max(B - A*factor, 0)

DARKEST - only the darkest colour succeeds: C = min(A*factor, B)

LIGHTEST - only the lightest colour succeeds: C = max(A*factor, B)

DIFFERENCE - subtract colors from underlying image.

EXCLUSION - similar to DIFFERENCE, but less extreme.

MULTIPLY - Multiply the colors, result will always be darker.

SCREEN - Opposite multiply, uses inverse values of the colors.

OVERLAY - A mix of MULTIPLY and SCREEN. Multiplies dark values, and screens light values.

HARD_LIGHT - SCREEN when greater than 50% gray, MULTIPLY when lower.

SOFT_LIGHT - Mix of DARKEST and LIGHTEST. Works like OVERLAY, but not as harsh.

DODGE - Lightens light tones and increases contrast, ignores darks. Called ""Color Dodge"" in Illustrator and Photoshop.

BURN - Darker areas are applied, increasing contrast, ignores lights. Called ""Color Burn"" in Illustrator and Photoshop."

	pjsImage blend: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH mode: aMode
!

copyImage: aPjsImage sX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH

	pjsImage copy: aPjsImage pjsImage sx: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH
!

copySX: aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH

	pjsImage copy:aSourceX sY: aSourceY sW: aSourceW sH: aSourceH dX: aDestX dY: aDestY dW: aDestW dH: aDestH
!

filter: aKind

	"THRESHOLD, GRAY, OPAQUE, INVERT, POSTERIZE, BLUR, ERODE, or DILATE"

	pjsImage filter: aKind
!

filter: aKind param: aFloat

	pjsImage filter: aKind param: aFloat
!

get

	^pjsImage get
!

getX: anXInt y: anYInt

	^pjsImage get: anXInt y: anYInt
!

getX: anXInt y: anYInt width: aWInt height: aHInt

	^pjsImage get: anXInt y: anYInt width: aWInt height: aHInt
!

height

	^pjsImage height
!

initPjsImage
  
    pjsImage := <new PImage() >
!

initPjsImage: img
  
    pjsImage := <new PImage(img) >
!

initPjsImageWidth: width height: height
  
    pjsImage := <new PImage(width, height) >
!

initPjsImageWidth: width height: height format: format
  
    pjsImage := <new PImage(width, height, format) >
!

loadPixels

	pjsImage loadPixels
!

maskArray: anIntArray

	pjsImage mask: anIntArray
!

maskImage: aPjsImage

	pjsImage mask: aPjsImage pjsImage
!

pixels

	^pjsImage pixels
!

pjsImage

	^pjsImage
!

resizeWidth: aResizedWInt height: aResizedHInt

	pjsImage resize: aResizedWInt height: aResizedHInt
!

save: aFileNameString

	pjsImage save: aFileNameString
!

setX: anXInt y: anYInt color: aColorType

	pjsImage set: anXInt y: anYInt  color: aColorType
!

setX: anXInt y: anYInt image: aPjsImage

	pjsImage set: anXInt y: anYInt  image: aPjsImage pjsImage
!

updatePixels

	pjsImage updatePixels
!

updatePixelsX: anUpperleftXCoordInt y:  anUpperleftYCoordInt width: aWInt height: aHInt

	pjsImage updatePixels: anUpperleftXCoordInt y:  anUpperleftYCoordInt width: aWInt height: aHInt
!

width

	^pjsImage width
! !

!PjsImage class methodsFor: 'not yet classified'!

new

	| instance |

  instance := self new.
  instance initPjsImage.
  
  ^instance
!

newImage: anImage

	| instance |

  instance := super new.
  instance initPjsImage: anImage.
  
  ^instance
!

newWidth: aWidth heigth: aHeight

	| instance |

  instance := super new.
  instance initPjsImageWidth: aWidth height: aHeight.
  
  ^instance
!

newWidth: aWidth heigth: aHeight format: aFormat

	| instance |

  instance := super new.
  instance initPjsImageWidth: aWidth height: aHeight format: aFormat.
  
  ^instance
! !

Object subclass: #PjsShape
	instanceVariableNames: 'pjsShape'
	package: 'Processing-Core'!

!PjsShape methodsFor: 'not yet classified'!

addChild: aWho

	pjsShape addChild: aWho
!

beginContour

	pjsShape beginContour
!

disableStyle

	pjsShape disableStyle
!

enableStyle

	pjsShape enableStyle
!

end

	pjsShape end
!

endContour

	pjsShape endContour
!

getChild: anIndexOrTarget

	^pjsShape getChild: anIndexOrTarget
!

height

	^  pjsShape height
!

height: aValue

	pjsShape height: aValue
!

initialize

	pjsShape := < new Shape() >
!

isVisible

	^pjsShape isVisible
!

pjsShape

	^pjsShape
!

resetMatrix

	pjsShape resetMatrix
!

rotate: aFloatAngleInRadians
	
    pjsShape rotate: aFloatAngleInRadians
!

rotateX: aFloatAngle
	
    pjsShape rotateX: aFloatAngle
!

rotateY: aFloatAngle
	
    pjsShape rotateY: aFloatAngle
!

rotateZ: aFloatAngle
	
    pjsShape rotateZ: aFloatAngle
!

scale: aFloatPercent
	
    pjsShape scale: aFloatPercent
!

scaleX: aFloatPercentXAxis y: aFloatPercentYAxis
	
    pjsShape scale: aFloatPercentXAxis  y: aFloatPercentYAxis
!

scaleX: aFloatPercentXAxis y: aFloatPercentYAxis z: aFloatPercentZAxis
	
    pjsShape scale: aFloatPercentXAxis  y: aFloatPercentYAxis z: aFloatPercentZAxis
!

setVisible: aBoolean

	pjsShape setVisibile: aBoolean
!

translateX: aFloatLeftRight y: aFloatUpDown
	
    pjsShape translate: aFloatLeftRight y: aFloatUpDown
!

translateX: aFloatLeftRight y: aFloatUpDown z: aFloatForwarBackward
	
    pjsShape translate: aFloatLeftRight y: aFloatUpDown z: aFloatForwarBackward
!

width

	^ pjsShape width
!

width: aValue

	pjsShape width: aValue
! !

Object subclass: #PjsSketch
	instanceVariableNames: 'processing'
	package: 'Processing-Core'!

!PjsSketch methodsFor: '2D primitives'!

arcX: aX y: aY width: aWidth height: aHeight start: aStart stop: aStop

	processing arc: aX y: aY width: aWidth height: aHeight start: aStart stop: aStop
!

ellipseX: aX y: aY width: aWidth height: aHeight 

	processing ellipse: aX y: aY width: aWidth height: aHeight
!

lineX1: aX1  y1: aY1 x2: aX2 y2: aY2 

	processing line: aX1 y1: aY1 x2: aX2 y2: aY2
!

lineX1: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2

	processing line: aX1 y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2
!

pointX: aX y: aY 

	processing point: aX y: aY
!

pointX: aX y: aY z: aZ

	processing point: aX y: aY z: aZ
!

quadX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4

	processing quad: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4
!

rectX: aX y: aY width: aWidth height: aHeight 

	processing rect: aX y: aY width: aWidth height: aHeight
!

rectX: aX y: aY width: aWidth height: aHeight radius: aRadius

	processing rect: aX y: aY width: aWidth height: aHeight radius: aRadius
!

rectX: aX y: aY width: aWidth height: aHeight tlradius: aTLRadius  trradius: aTRRadius  brradius:  aBRRadius blradius: aBLRadius

	processing rect: aX y: aY width: aWidth height: aHeight tlradius: aTLRadius  trradius: aTRRadius  brradius:  aBRRadius blradius: aBLRadius
!

triangleX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3

	processing triangle: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3
! !

!PjsSketch methodsFor: '3D primitives'!

box: aSizeIntOrFloat
	"size 	int or float: dimension of the box in all dimensions, creates a cube"
    
	processing box: aSizeIntOrFloat
!

boxWidth: aWidth height: aHeight depth: aDepth
	"width 	int or float: dimension of the box in the x-dimension
	height 	int or float: dimension of the box in the y-dimension
	depth 	int or float: dimension of the box in the z-dimension"
    
	processing box: aWidth height: aHeight depth: aDepth
!

sphere: aRadius
	"radius 	int or float: the radius of the sphere"
    
	processing sphere: aRadius
!

sphereDetail: aRes
	"res 	int: number of segments (minimum of 3) used per full circle revolution"
    
	processing sphereDetail: aRes
!

sphereDetail: aURes vres: aVRes
	"ures 	int: number of segments used longitudinally per full circle revolution
	 vres 	int: number of segments used latitudinally from top to bottom"
    
	processing sphereDetail: aURes vres: aVRes
! !

!PjsSketch methodsFor: 'accessing'!

processing
 
 	^processing
! !

!PjsSketch methodsFor: 'attributes'!

ellipseMode: aMode
	"MODE 	Either CENTER, RADIUS, CORNER, or CORNERS."
    
	processing ellipseMode: aMode
!

noSmooth
	"Draws all geometry with jagged (aliased) edges."
    
	processing noSmooth
!

rectMode: aMode
	"MODE 	Either CENTER, RADIUS, CORNER, or CORNERS."
    
	processing rectMode: aMode
    
    "Modifies the location from which rectangles draw. 
    The default mode is rectMode(CORNER), which specifies the location to be the upper left corner 
    of the shape and uses the third and fourth parameters of rect() to specify the width and height. 
    The syntax rectMode(CORNERS) uses the first and second parameters of rect() to set the location of 
    one corner and uses the third and fourth parameters to set the opposite corner. 
    The syntax rectMode(CENTER) draws the image from its center point and uses the third and 
    forth parameters of rect() to specify the image's width and height. 
    The syntax rectMode(RADIUS) draws the image from its center point and uses the third and #
    forth parameters of rect() to specify half of the image's width and height. 
    The parameter must be written in ""ALL CAPS"" because Processing is a case sensitive language. 
    Note: In version 125, the mode named CENTER_RADIUS was shortened to RADIUS."
!

smooth
	"Draws all geometry with smooth (anti-aliased) edges. 
    This will slow down the frame rate of the application, but will enhance the visual refinement.
	Starting with release 0124, when using the default (JAVA2D) renderer, smooth() will also improve image quality of resized images."
    
	processing smooth
!

strokeCap: aMode
	"MODE 	Either SQUARE, PROJECT, or ROUND."
    
	processing strokeCap: aMode
    
    "Sets the style for rendering line endings. 
    These ends are either squared, extended, or rounded and specified with the 
    corresponding parameters SQUARE, PROJECT, and ROUND. The default cap is ROUND.
	This function is not available with the P2D, P3D, or OPENGL renderers. 
    More information about the renderers can be found in the size() reference."
!

strokeJoin: aMode
	"MODE 	Either MITER, BEVEL, or ROUND"
    
	processing strokeJoin: aMode
    
    "Sets the style of the joints which connect line segments. 
    These joints are either mitered, beveled, or rounded and specified with 
    the corresponding parameters MITER, BEVEL, and ROUND. The default joint is MITER.
	This function is not available with the P2D, P3D, or OPENGL renderers. 
    More information about the renderers can be found in the size() reference."
!

strokeWeight: aWidth
	"width 	int or float: the weight (in pixels) of the stroke"
    
	processing strokeWeight: aWidth
    
    "Sets the width of the stroke used for lines, points, and the border around shapes. 
    All widths are set in units of pixels. 
    This function does not work with the P3D renderer (please see the size() reference for more information)."
! !

!PjsSketch methodsFor: 'color creating and reading'!

alpha: aColor
	"color 	any value of the color datatype"
    
	^processing alpha: aColor
    
   "Extracts the alpha value from a color.."
!

blendColor1: aColor1 color2: aColor2 mode: aMode
	"c1 	color: the first color to blend
	c2 	color: the second color to blend
	MODE 	Either BLEND, ADD, SUBTRACT, DARKEST, LIGHTEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, or BURN"
    
	^processing blend: aColor1 color2: aColor2 mode: aMode
    
   "Blends two color values together based on the blending mode given as the MODE parameter. The possible modes are described in the reference for the blend() function."
!

blue: aColor
	"color 	any value of the color datatype"
    
	^processing blue: aColor
    
   " 	Extracts the blue value from a color, scaled to match current colorMode(). 
   This value is always returned as a float so be careful not to assign it to an int value.
	The blue() function is easy to use and undestand, but is slower than another technique. 
    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, 
    use a bit mask to remove the other color components. For example, the following two lines of code are equivalent:
	float r1 = blue(myColor);
	float r2 = myColor & 0xFF;"
!

brightness: aColor
	"color 	any value of the color datatype"
    
	^processing brightness: aColor
    
   "Extracts the brightness value from a color."
!

colorGray: aGray 
	"gray 	int or float: number specifying value between white and blackl"
    
	^processing color: aGray 
    
    "Creates colors for storing in variables of the color datatype. 
    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). 
    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return 
    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number
    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.
	Color can also be created using hexadecimal notation. For example, ""color(0, 102, 153)"" is equivalent to ""color(#006699)"" and ""color(0x006699)"". 
    To create a color with an alpha value using hexadecimal notation, it's necessary to use the ""0x"" prefix, 
    for example ""color(0xCC006699)"", which is equivalent to ""color(0, 102, 153, 204)"". 
    Note the alpha value is first in the hexadecimal notation and last in the RGB notation."
!

colorGray: aGray alpha: anAlpha
	"gray 	int or float: number specifying value between white and black
    alpha 	int or float: opacity of the fill"
    
	^processing color: aGray alpha: anAlpha
    
    "Creates colors for storing in variables of the color datatype. 
    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). 
    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return 
    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number
    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.
	Color can also be created using hexadecimal notation. For example, ""color(0, 102, 153)"" is equivalent to ""color(#006699)"" and ""color(0x006699)"". 
    To create a color with an alpha value using hexadecimal notation, it's necessary to use the ""0x"" prefix, 
    for example ""color(0xCC006699)"", which is equivalent to ""color(0, 102, 153, 204)"". 
    Note the alpha value is first in the hexadecimal notation and last in the RGB notation."
!

colorHex: aHex 
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)"
    
	^processing color: aHex
    
  "Creates colors for storing in variables of the color datatype. 
    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). 
    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return 
    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number
    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.
	Color can also be created using hexadecimal notation. For example, ""color(0, 102, 153)"" is equivalent to ""color(#006699)"" and ""color(0x006699)"". 
    To create a color with an alpha value using hexadecimal notation, it's necessary to use the ""0x"" prefix, 
    for example ""color(0xCC006699)"", which is equivalent to ""color(0, 102, 153, 204)"". 
    Note the alpha value is first in the hexadecimal notation and last in the RGB notation."
!

colorHex: aHex alpha: anAlpha
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)
     alpha 	int or float: opacity of the background"
    
	^processing color: aHex alpha: anAlpha 
    
    "Creates colors for storing in variables of the color datatype. 
    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). 
    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return 
    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number
    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.
	Color can also be created using hexadecimal notation. For example, ""color(0, 102, 153)"" is equivalent to ""color(#006699)"" and ""color(0x006699)"". 
    To create a color with an alpha value using hexadecimal notation, it's necessary to use the ""0x"" prefix, 
    for example ""color(0xCC006699)"", which is equivalent to ""color(0, 102, 153, 204)"". 
    Note the alpha value is first in the hexadecimal notation and last in the RGB notation."
!

colorValue1: aValue1 value2: aValue2 value3: aValue3 
	"value1 	int or float: red or hue value
	value2 	int or float: green or saturation value
	value3 	int or float: blue or brightness value"
    
	^processing color: aValue1 value2: aValue2 value3: aValue3 
    
     "Creates colors for storing in variables of the color datatype. 
    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). 
    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return 
    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number
    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.
	Color can also be created using hexadecimal notation. For example, ""color(0, 102, 153)"" is equivalent to ""color(#006699)"" and ""color(0x006699)"". 
    To create a color with an alpha value using hexadecimal notation, it's necessary to use the ""0x"" prefix, 
    for example ""color(0xCC006699)"", which is equivalent to ""color(0, 102, 153, 204)"". 
    Note the alpha value is first in the hexadecimal notation and last in the RGB notation."
!

colorValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
	"value1 	int or float: red or hue value
	value2 	int or float: green or saturation value
	value3 	int or float: blue or brightness value
    alpha 	int or float: opacity of the fill"
    
	 ^processing color: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
    
    "Creates colors for storing in variables of the color datatype. 
    The parameters are interpreted as RGB or HSB values depending on the current colorMode(). 
    The default mode is RGB values from 0 to 255 and therefore, the function call color(255, 204, 0) will return 
    a bright yellow color. The color() function packs the information input through its parameters into a 32 bit number
    in the following order AAAAAAAARRRRRRRRGGGGGGGGBBBBBBBB where R is the red/hue value, G is green/saturation, and B is blue/brightness.
	Color can also be created using hexadecimal notation. For example, ""color(0, 102, 153)"" is equivalent to ""color(#006699)"" and ""color(0x006699)"". 
    To create a color with an alpha value using hexadecimal notation, it's necessary to use the ""0x"" prefix, 
    for example ""color(0xCC006699)"", which is equivalent to ""color(0, 102, 153, 204)"". 
    Note the alpha value is first in the hexadecimal notation and last in the RGB notation."
!

green: aColor
	"color 	any value of the color datatype"
    
	^processing green: aColor
    
   " 	Extracts the green value from a color, scaled to match current colorMode(). 
   This value is always returned as a float so be careful not to assign it to an int value.
	The green() function is easy to use and undestand, but is slower than another technique. 
    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, 
    use the >> (right shift) operator with a bit mask. 
    For example, the following two lines of code are equivalent:
	float r1 = green(myColor);
	float r2 = myColor >> 16 & 0xFF;"
!

hue: aColor
	"color 	any value of the color datatype"
    
	^processing hue: aColor
    
   "Extracts the hue value from a color."
!

lerpColor1: aColor1 color2: aColor2 amt: aAMT
	"c1 	color: interpolate from this color
	c2 	color: interpolate to this color
	amt 	float: between 0.0 and 1.0"
    
	^processing lerpColor: aColor1 color2: aColor2 amt: aAMT
    
   "Calculates a color or colors between two color at a specific increment. 
   The amt parameter is the amount to interpolate between the two values where 0.0 equal to the first point, 
   0.1 is very near the first point, 0.5 is half-way in between, etc."
!

red: aColor
	"color 	any value of the color datatype"
    
	^processing red: aColor
    
   " 	Extracts the red value from a color, scaled to match current colorMode(). 
   This value is always returned as a float so be careful not to assign it to an int value.
	The red() function is easy to use and undestand, but is slower than another technique. 
    To achieve the same results when working in colorMode(RGB, 255), but with greater speed, 
    use the >> (right shift) operator with a bit mask. 
    For example, the following two lines of code are equivalent:
	float r1 = red(myColor);
	float r2 = myColor >> 16 & 0xFF;"
!

saturation: aColor
	"color 	any value of the color datatype"
    
	^processing saturation: aColor
    
   "Extracts the saturation value from a color."
! !

!PjsSketch methodsFor: 'color settings'!

background: aValue1	value2: aValue2 value3: aValue3 
	"value1 	int or float: red or hue value (depending on the current color mode)
	value2 	int or float: green or saturation value (depending on the current color mode)
	value3 	int or float: blue or brightness value (depending on the current color mode)"
    
	processing background: aValue1	value2: aValue2 value3: aValue3 
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

background: aValue1	value2: aValue2 value3: aValue3 alpha: anAlpha
	"value1 	int or float: red or hue value (depending on the current color mode)
	value2 	int or float: green or saturation value (depending on the current color mode)
	value3 	int or float: blue or brightness value (depending on the current color mode)
     alpha 	int or float: opacity of the background"
    
	processing background: aValue1	value2: aValue2 value3: aValue3 alpha: anAlpha
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

backgroundColor: aColor
	"color 	color: any value of the color datatype"
    
	processing background: aColor 
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

backgroundColor: aColor alpha: anAlpha
	"color 	color: any value of the color datatype
    alpha 	int or float: opacity of the background"
    
	processing background: aColor alpha: anAlpha
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

backgroundGray: aGrayValue
	"gray 	int or float: specifies a value between white and black"
    
	processing background: aGrayValue
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

backgroundGray: aGrayValue alpha: anAlpha
	"gray 	int or float: specifies a value between white and black
     alpha 	int or float: opacity of the background"
    
	processing background: aGrayValue alpha: anAlpha
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

backgroundHex: aHex 
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)
    alpha 	int or float: opacity of the background"
    
	processing background: aHex 
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

backgroundHex: aHex alpha: anAlpha
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)
    alpha 	int or float: opacity of the background"
    
	processing background: aHex alpha: anAlpha
    
    "The background() function sets the color used for the background of the Processing window. 
    The default background is light gray. In the draw() function, 
    the background color is used to clear the display window at the beginning of each frame.
    An image can also be used as the background for a sketch, however its width and height must be the same size as the sketch window.
  	Unlike Processing, it is possible to use transparency (alpha) in background colors with the main drawing surface."
!

colorMode: aMode
	"mode 	Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness"
    
	processing colorMode: aMode 
    
    "Changes the way Processing interprets color data. 
    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the
    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. 
    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. 
    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4."
!

colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3
	"mode 	Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness
    range1 	int or float: range for the red or hue depending on the current color mode
	range2 	int or float: range for the green or saturation depending on the current color mode
	range3 	int or float: range for the blue or brightness depending on the current color mode"
    
	processing colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3
    
    "Changes the way Processing interprets color data. 
    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the
    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. 
    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. 
    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4."
!

colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3 range4: aRange4
	"mode 	Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness
    range1 	int or float: range for the red or hue depending on the current color mode
	range2 	int or float: range for the green or saturation depending on the current color mode
	range3 	int or float: range for the blue or brightness depending on the current color mode
    range4 	int or float: range for the alpha"
    
	processing colorMode: aMode range1: aRange1 range2: aRange2 range3: aRange3 range4: aRange4
    
    "Changes the way Processing interprets color data. 
    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the
    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. 
    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. 
    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4."
!

colorMode: aMode range: aRange
	"mode 	Either RGB or HSB, corresponding to Red/Green/Blue and Hue/Saturation/Brightness
    range 	int or float: range for all color elements"
    
	processing colorMode: aMode range: aRange
    
    "Changes the way Processing interprets color data. 
    By default, fill(), stroke(), and background() colors are set by values between 0 and 255 using the
    RGB color model. It is possible to change the numerical range used for specifying colors and to switch color systems. 
    For example, calling colorMode(RGB, 1.0) will specify that values are specified between 0 and 1. 
    The limits for defining colors are altered by setting the parameters range1, range2, range3, and range 4."
!

fillColor: aColor 
	"color 	color: any value of the color datatype"
    
	processing fill: aColor 
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillColor: aColor alpha: anAlpha
	"color 	color: any value of the color datatype
     alpha 	int or float: opacity of the background"
    
	processing fill: aColor alpha: anAlpha 
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillGray: aGray 
	"gray 	int or float: number specifying value between white and blackl"
    
	processing fill: aGray 
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillGray: aGray alpha: anAlpha
	"gray 	int or float: number specifying value between white and black
    alpha 	int or float: opacity of the fill"
    
	processing fill: aGray alpha: anAlpha
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillHex: aHex 
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)"
    
	processing fill: aHex
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillHex: aHex alpha: anAlpha
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)
     alpha 	int or float: opacity of the background"
    
	processing fill: aHex alpha: anAlpha 
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillValue1: aValue1 value2: aValue2 value3: aValue3 
	"value1 	int or float: red or hue value
	value2 	int or float: green or saturation value
	value3 	int or float: blue or brightness value"
    
	processing fill: aValue1 value2: aValue2 value3: aValue3 
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

fillValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
	"value1 	int or float: red or hue value
	value2 	int or float: green or saturation value
	value3 	int or float: blue or brightness value
    alpha 	int or float: opacity of the fill"
    
	processing fill: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
    
    "Sets the color used to fill shapes. For example, if you run fill(204, 102, 0), all subsequent shapes will be filled with orange. 
    This color is either specified in terms of the RGB or HSB color depending on the current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#2"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components.
	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255.

To change the color of an image (or a texture), use tint()."
!

noFill
	"Disables filling geometry. If both noStroke() and noFill() are called, nothing will be drawn to the screen."
    
	processing noFill
!

noStroke
	"Disables drawing the stroke (outline). If both noStroke() and noFill() are called, nothing will be drawn to the screen."
    
	processing noStroke
!

strokeColor: aColor 
	"color 	color: any value of the color datatype"
    
	processing stroke: aColor 
    
    "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeColor: aColor alpha: anAlpha
	"color 	color: any value of the color datatype
     alpha 	int or float: opacity of the background"
    
	processing stroke: aColor alpha: anAlpha 
    
   "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeGray: aGray 
	"gray 	int or float: number specifying value between white and blackl"
    
	processing stroke: aGray 
    
    "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeGray: aGray alpha: anAlpha
	"gray 	int or float: number specifying value between white and black
    alpha 	int or float: opacity of the fill"
    
	processing stroke: aGray alpha: anAlpha
    
    "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeHex: aHex 
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)"
    
	processing stroke: aHex
    
    "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeHex: aHex alpha: anAlpha
	"hex 	int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00)
     alpha 	int or float: opacity of the background"
    
	processing stroke: aHex alpha: anAlpha 
    
    "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeValue1: aValue1 value2: aValue2 value3: aValue3 
	"value1 	int or float: red or hue value
	value2 	int or float: green or saturation value
	value3 	int or float: blue or brightness value"
    
	processing stroke: aValue1 value2: aValue2 value3: aValue3 
    
    "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
!

strokeValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
	"value1 	int or float: red or hue value
	value2 	int or float: green or saturation value
	value3 	int or float: blue or brightness value
    alpha 	int or float: opacity of the fill"
    
	processing stroke: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
    
   "Sets the color used to draw lines and borders around shapes. 
    This color is either specified in terms of the RGB or HSB color depending on the 
    current colorMode() (the default color space is RGB, with each value in the range from 0 to 255).
	When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters;
    the first two characters define the alpha component and the remainder the red, green, and blue components.
 	The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255."
! !

!PjsSketch methodsFor: 'curves'!

bezierDetail: aDetailint
	"Sets the resolution at which Beziers display. The default value is 20. This function is only useful when using the P3D or OPENGL renderer as the default (JAVA2D) renderer does not use this information."
	processing bezierDetail: aDetailint
!

bezierPointA: anA b: aB c: aC d: aD t: aT
	"a 	int or float: coordinate of first point on the curve
	b 	int or float: coordinate of first control point
	c 	int or float: coordinate of second control point
	d 	int or float: coordinate of second point on the curve
	t 	float: value between 0 and 1"
    
	processing bezierPoint: anA b: aB c: aC d: aD t: aT
!

bezierTangentA: anA b: aB c: aC d: aD t: aT
	"a 	int or float: coordinate of first point on the curve
	b 	int or float: coordinate of first control point
	c 	int or float: coordinate of second control point
	d 	int or float: coordinate of second point on the curve
	t 	float: value between 0 and 1"
    
	processing bezierTangent: anA b: aB c: aC d: aD t: aT
!

bezierX1: aX1 y1: aY1 cx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2
	"x1, y1, z1 	int or float: coordinates for the first anchor point
	cx1, cy1, cz1 	int or float: coordinates for the first control point
	cx2, cy2, cz2 	int or float: coordinates for the second control point
	x2, y2, z2 	int or float: coordinates for the second anchor point"
    
	processing bezier: aX1 aX1 y1: aY1 cx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2
!

bezierX1: aX1 y1: aY1 z1: aZ1 cx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2  x2: aX2 y2: aY2 z2: aZ2
	"x1, y1, z1 	int or float: coordinates for the first anchor point
	cx1, cy1, cz1 	int or float: coordinates for the first control point
	cx2, cy2, cz2 	int or float: coordinates for the second control point
	x2, y2, z2 	int or float: coordinates for the second anchor point"

	processing bezier: aX1 y1: aY1 z1: aZ1 cx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2  x2: aX2 y2: aY2 z2: aZ2
!

curveDetail: aDetailint
	"Sets the resolution at which curves display. The default value is 20. This function is only useful when using the P3D or OPENGL renderer as the default (JAVA2D) renderer does not use this information."
	processing curverDetail: aDetailint
!

curvePointA: anA b: aB c: aC d: aD t: aT
	"a 	int or float: coordinate of first point on the curve
	b 	int or float: coordinate of first control point
	c 	int or float: coordinate of second control point
	d 	int or float: coordinate of second point on the curve
	t 	float: value between 0 and 1"
    
	processing curvePoint: anA b: aB c: aC d: aD t: aT
!

curveTangentA: anA b: aB c: aC d: aD t: aT
	"a 	int or float: coordinate of first point on the curve
	b 	int or float: coordinate of first control point
	c 	int or float: coordinate of second control point
	d 	int or float: coordinate of second point on the curve
	t 	float: value between 0 and 1"
    
	processing curveTangent: anA b: aB c: aC d: aD t: aT
!

curveTightness: anIntOrFloat
	"Modifies the quality of forms created with curve() and curveVertex(). 
    The parameter squishy determines how the curve fits to the vertex points. 
    The value 0.0 is the default value for squishy (this value defines the curves to be Catmull-Rom splines) and the value 1.0 connects all the points with straight lines. 
    Values within the range -5.0 and 5.0 will deform the curves but will leave them recognizable and as values increase in magnitude, they will continue to deform."
    
	processing curveTightness: anIntOrFloat
!

curveX1: aX1  y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4
	"x1, y1, z1 	int or float: coordinates for the first anchor
	x2, y2, z2 	int or float: coordinates for the first point
	x3, y3, z3 	int or float: coordinates for the second point
	x4, y4, z4 	int or float: coordinates for the second anchor"

	processing curve: aX1 y1: aY1 x2: aX2 y2: aY2 x3: aX3  y3: aY3 x4: aX4 y4: aY4
!

curveX1: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2  x3: aX3  y3: aY3 z3: aZ3 x4: aX4 y4: aY4 z4: aZ4
	"x1, y1, z1 	int or float: coordinates for the first anchor
	x2, y2, z2 	int or float: coordinates for the first point
	x3, y3, z3 	int or float: coordinates for the second point
	x4, y4, z4 	int or float: coordinates for the second anchor"

	processing curve: aX1  y1: aY1 z1: aZ1 x2: aX2 y2: aY2 z2: aZ2  x3: aX3  y3: aY3 z3: aZ3 x4: aX4 y4: aY4 z4: aZ4
! !

!PjsSketch methodsFor: 'initialization'!

initalizeFunctions

	processing at: 'draw' put: [self draw].
!

initialize

	processing := <Processing.instances[0]>.

	self initalizeFunctions.
! !

!PjsSketch methodsFor: 'processing overrides'!

draw
 
 	self subclassResponsibility
! !

!PjsSketch methodsFor: 'vertex'!

beginShape

	processing beginShape
    
    "Using the beginShape() and endShape() functions allow creating more complex forms.
    beginShape() begins recording vertices for a shape and endShape() stops recording. 
    The value of the MODE parameter tells it which types of shapes to create from the provided vertices. 
    With no mode specified, the shape can be any irregular polygon. 
    The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. 
    After calling the beginShape() function, a series of vertex() commands must follow. 
    To stop drawing the shape, call endShape(). 
    The vertex() function with two parameters specifies a position in 2D and the vertex() function with three parameters specifies a position in 3D. 
    Each shape will be outlined with the current stroke color and filled with the fill color. 
    Transformations such as translate(), rotate(), and scale() do not work within beginShape(). 
    It is also not possible to use other shapes, such as ellipse() or rect() within beginShape().."
!

beginShape: aMode
	"MODE 	Either POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, QUAD_STRIP."
    
	processing beginShape: aMode
    
    "Using the beginShape() and endShape() functions allow creating more complex forms.
    beginShape() begins recording vertices for a shape and endShape() stops recording. 
    The value of the MODE parameter tells it which types of shapes to create from the provided vertices. 
    With no mode specified, the shape can be any irregular polygon. 
    The parameters available for beginShape() are POINTS, LINES, TRIANGLES, TRIANGLE_FAN, TRIANGLE_STRIP, QUADS, and QUAD_STRIP. 
    After calling the beginShape() function, a series of vertex() commands must follow. 
    To stop drawing the shape, call endShape(). 
    The vertex() function with two parameters specifies a position in 2D and the vertex() function with three parameters specifies a position in 3D. 
    Each shape will be outlined with the current stroke color and filled with the fill color. 
    Transformations such as translate(), rotate(), and scale() do not work within beginShape(). 
    It is also not possible to use other shapes, such as ellipse() or rect() within beginShape().."
!

bezierVertexCx1: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2
	"cx1 	The x-coordinate of 1st control point, either a float or int
	cy1 	The y-coordinate of 1st control point, either a float or int
	cz1 	The z-coordinate of 1st control point, either a float or int
	cx2 	The x-coordinate of 2nd control point, either a float or int
	cy2 	The y-coordinate of 2nd control point, either a float or int
	cz2 	The z-coordinate of 2nd control point, either a float or int
	x 	The x-coordinate of anchor point, either a float or int
	y 	The y-coordinate of anchor point, either a float or int
	z 	The z-coordinate of anchor point, either a float or int"
    
	processing bezierVertex: aCx1 cy1: aCy1 cx2: aCx2 cy2: aCy2 x2: aX2 y2: aY2
!

bezierVertexCx1: aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2 x2: aX2 y2: aY2 z2: aZ2
	"cx1 	The x-coordinate of 1st control point, either a float or int
	cy1 	The y-coordinate of 1st control point, either a float or int
	cz1 	The z-coordinate of 1st control point, either a float or int
	cx2 	The x-coordinate of 2nd control point, either a float or int
	cy2 	The y-coordinate of 2nd control point, either a float or int
	cz2 	The z-coordinate of 2nd control point, either a float or int
	x 	The x-coordinate of anchor point, either a float or int
	y 	The y-coordinate of anchor point, either a float or int
	z 	The z-coordinate of anchor point, either a float or int"
    
	processing bezierVertex:  aCx1 cy1: aCy1 cz1: aCz1 cx2: aCx2 cy2: aCy2 cz2: aCz2 x2: aX2 y2: aY2 z2: aZ2
!

curveVertexX: aX y: aY
	"x 	The x-coordinate of the vertex, either a float or int
	y 	The y-coordinate of the vertex, either a float or int
	z 	The z-coordinate of the vertex, either a float or int"
    
	processing curveVertex: aX y: aY
    
    "Specifies vertex coordinates for curves. 
    This function may only be used between beginShape() and endShape() and 
    only when there is no MODE parameter specified to beginShape(). 
    The first and last points in a series of curveVertex() lines will be used to guide the beginning and 
    end of a the curve. A minimum of four points is required to draw a tiny curve between 
    the second and third points. 
    Adding a fifth point with curveVertex() will draw the curve between the second, third, and fourth points. 
    The curveVertex() function is an implementation of Catmull-Rom splines. 
    Using the 3D version of requires rendering with P3D or OPENGL (see the Environment reference for more information)."
!

curveVertexX: aX y: aY z: aZ
	"x 	The x-coordinate of the vertex, either a float or int
	y 	The y-coordinate of the vertex, either a float or int
	z 	The z-coordinate of the vertex, either a float or int"
    
	processing curveVertex: aX y: aY z: aZ
    
    "Specifies vertex coordinates for curves. 
    This function may only be used between beginShape() and endShape() and 
    only when there is no MODE parameter specified to beginShape(). 
    The first and last points in a series of curveVertex() lines will be used to guide the beginning and 
    end of a the curve. A minimum of four points is required to draw a tiny curve between 
    the second and third points. 
    Adding a fifth point with curveVertex() will draw the curve between the second, third, and fourth points. 
    The curveVertex() function is an implementation of Catmull-Rom splines. 
    Using the 3D version of requires rendering with P3D or OPENGL (see the Environment reference for more information)."
!

endShape

	processing endShape
    
    "The endShape() function is the companion to beginShape() and may only be called after beginShape(). 
    When endshape() is called, all of image data defined since the previous call to beginShape() is written
    into the image buffer. 
    The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end)."
!

endShape: aMode
	"MODE 	Use CLOSE to close the shape"
    
	processing endShape: aMode
    
    "The endShape() function is the companion to beginShape() and may only be called after beginShape(). 
    When endshape() is called, all of image data defined since the previous call to beginShape() is written
    into the image buffer. 
    The constant CLOSE as the value for the MODE parameter to close the shape (to connect the beginning and the end)."
!

texture: aPjsImage
	"Sets a texture to be applied to vertex points. 
    The texture() function must be called between beginShape() and endShape() and before any calls to vertex().
	When textures are in use, the fill color is ignored. Instead, 
    use tint() to specify the color of the texture as it is applied to the shape."
    
	processing texture: aPjsImage pjsImage
!

textureMode: aMode
	"MODE 	either IMAGE or NORMALIZED"
    
	processing textureMode: aMode
    
    "Sets the coordinate space for texture mapping. 
    There are two options, IMAGE, which refers to the actual coordinates of the image, and NORMALIZED, 
    which refers to a normalized space of values ranging from 0 to 1. 
    The default mode is IMAGE. In IMAGE, if an image is 100 x 200 pixels, mapping the image onto the 
    entire size of a quad would require the points (0,0) (0,100) (100,200) (0,200). 
    The same mapping in NORMAL_SPACE is (0,0) (0,1) (1,1) (0,1)."
!

vertexX: aX y: aY  
	"x 	int or float: x-coordinate of the vertex
	y 	int or float: y-coordinate of the vertex
	z 	int or float: z-coordinate of the vertex
	u 	int or float: horizontal coordinate for the texture mapping
	v 	int or float: vertical coordinate for the texture mapping"
    
	processing vertex: aX y: aY 
    
    "All shapes are constructed by connecting a series of vertices. vertex() is used to 
    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used 
    exclusively within the beginShape() and endShape() function.

	Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in 
	combination with size as shown in the above example.

	This function is also used to map a texture onto the geometry. 
	The texture() function declares the texture to apply to the geometry and the u and v coordinates 
	set define the mapping of this texture to the form. 
    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, 
    but this relation can be changed with textureMode()."
!

vertexX: aX y: aY u: anU v: aV
	"x 	int or float: x-coordinate of the vertex
	y 	int or float: y-coordinate of the vertex
	z 	int or float: z-coordinate of the vertex
	u 	int or float: horizontal coordinate for the texture mapping
	v 	int or float: vertical coordinate for the texture mapping"
    
	processing vertex: aX y: aY u: anU v: aV
    
    "All shapes are constructed by connecting a series of vertices. vertex() is used to 
    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used 
    exclusively within the beginShape() and endShape() function.

	Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in 
	combination with size as shown in the above example.

	This function is also used to map a texture onto the geometry. 
	The texture() function declares the texture to apply to the geometry and the u and v coordinates 
	set define the mapping of this texture to the form. 
    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, 
    but this relation can be changed with textureMode()."
!

vertexX: aX y: aY z: aZ 
	"x 	int or float: x-coordinate of the vertex
	y 	int or float: y-coordinate of the vertex
	z 	int or float: z-coordinate of the vertex
	u 	int or float: horizontal coordinate for the texture mapping
	v 	int or float: vertical coordinate for the texture mapping"
    
	processing vertex: aX y: aY z: aZ 
    
    "All shapes are constructed by connecting a series of vertices. vertex() is used to 
    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used 
    exclusively within the beginShape() and endShape() function.

	Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in 
	combination with size as shown in the above example.

	This function is also used to map a texture onto the geometry. 
	The texture() function declares the texture to apply to the geometry and the u and v coordinates 
	set define the mapping of this texture to the form. 
    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, 
    but this relation can be changed with textureMode()."
!

vertexX: aX y: aY z: aZ u: anU v: aV
	"x 	int or float: x-coordinate of the vertex
	y 	int or float: y-coordinate of the vertex
	z 	int or float: z-coordinate of the vertex
	u 	int or float: horizontal coordinate for the texture mapping
	v 	int or float: vertical coordinate for the texture mapping"
    
	processing vertex: aX y: aY z: aZ u: anU v: aV
    
    "All shapes are constructed by connecting a series of vertices. vertex() is used to 
    specify the vertex coordinates for points, lines, triangles, quads, and polygons and is used 
    exclusively within the beginShape() and endShape() function.

	Drawing a vertex in 3D using the z parameter requires the P3D or OPENGL parameter in 
	combination with size as shown in the above example.

	This function is also used to map a texture onto the geometry. 
	The texture() function declares the texture to apply to the geometry and the u and v coordinates 
	set define the mapping of this texture to the form. 
    By default, the coordinates used for u and v are specified in relation to the image's size in pixels, 
    but this relation can be changed with textureMode()."
! !

!PjsSketch class methodsFor: 'not yet classified'!

start

	^self new
! !

Object subclass: #PjsVector
	instanceVariableNames: 'pjsVector'
	package: 'Processing-Core'!

!PjsVector methodsFor: 'not yet classified'!

addVector1: aPjsVector1 vector2: aPjsVector2 target: aTargetVectorOrNull

	pjsVector add: aPjsVector1 pjsVector vector2: aPjsVector2 pjsVector target: aTargetVectorOrNull
!

addVector: aPjsVector

	pjsVector add: aPjsVector pjsVector
!

addX: aFloatX y: aFLoatY z: aFloatZ

	pjsVector add: aFloatX y: aFLoatY z: aFloatZ
!

asArray

	^pjsVector array
!

crossX: aFloatX y: aFLoatY z: aFloatZ

	| instance   |

  instance := super new.
   
  instance initPjsVector: ( pjsVector cross: aFloatX y: aFLoatY z: aFloatZ).
  
  ^instance
!

dist: aPjsVector 

	^pjsVector dist: aPjsVector pjsVector
!

div: aScalarFloat

	pjsVector div: aScalarFloat
!

divVector: aPjsVector 

	pjsVector div: aPjsVector pjsVector
!

dot: aPjsVector 

	^pjsVector dot: aPjsVector pjsVector
!

dotX: aFloatX y: aFLoatY z: aFloatZ

	^pjsVector dot: aFloatX y: aFLoatY z: aFloatZ
!

get

	^pjsVector get
!

get: aTarget

	^pjsVector get: aTarget
!

initPjsVector

	pjsVector := <new PVector(); >
!

initPjsVector: aPVector

	pjsVector := aPVector
!

initPjsVectorX: x y: y 

	pjsVector := <new PVector(x, y); >
!

initPjsVectorX: x y: y z: z

	pjsVector := <new PVector(x, y, z); >
!

limit: aMaxFloat

	pjsVector limit: aMaxFloat
!

mag

	^pjsVector mag
!

mult: aScalarFloat

	pjsVector mult: aScalarFloat
!

mult: aScalarFloat vector: aPjsVector

	pjsVector mult: aScalarFloat vector: aPjsVector pjsVector
!

normalize

	pjsVector normalize
!

pjsVector

	^pjsVector
!

setSource: aFloatSourceArray

	pjsVector set: aFloatSourceArray
!

setVector: aPjsVector

	pjsVector set: aPjsVector pjsVector
!

setX: aFloatX y: aFloatY z: aFloatZ

	pjsVector set: aFloatX y: aFloatY z: aFloatZ
!

subVector1: aPjsVector1 vector2: aPjsVector2 target: aTargetVectorOrNull

	pjsVector sub: aPjsVector1 pjsVector vector2: aPjsVector2 pjsVector target: aTargetVectorOrNull
!

subVector: aPjsVector

	pjsVector sub: aPjsVector pjsVector
!

subX: aFloatX y: aFLoatY z: aFloatZ

	pjsVector sub: aFloatX y: aFLoatY z: aFloatZ
!

x

	^pjsVector x
!

y

	^pjsVector y
!

z

	^pjsVector z
! !

!PjsVector class methodsFor: 'not yet classified'!

addVector1: aVector1 vector2: aVector2

	| instance  v1 v2 |

  instance := super new.
  
  v1 := aVector1 pjsVector.
  v2 := aVector2 pjsVector.
  
  instance initPjsVector: ( PVector add: v1 v2: v2).
  
  ^instance
!

angleBetweenVector1: aVector1 vector2: aVector2

	|  v1 v2 |

  v1 := aVector1 pjsVector.
  v2 := aVector2 pjsVector.
  
 ^ PVector angleBetween: v1 v2: v2
!

distVector1: aVector1 vector2: aVector2

	| instance  v1 v2 |

  instance := super new.
  
  v1 := aVector1 pjsVector.
  v2 := aVector2 pjsVector.
  
  instance initPjsVector: ( PVector dist: v1 v2: v2).
  
  ^instance
!

divVector1: aVector1 vector2: aVector2

	| instance  v1 v2 |

  instance := super new.
  
  v1 := aVector1 pjsVector.
  v2 := aVector2 pjsVector.
  
  instance initPjsVector: ( PVector div: v1 v2: v2).
  
  ^instance
!

divVector: aPjsVector scalar: aScalarFloat

	| instance  v1  |

  instance := super new.
  
  v1 := aPjsVector pjsVector.
  
  instance initPjsVector: ( PVector div: v1 scalar: aScalarFloat).
  
  ^instance
!

multScalar: aScalarFloat vector: aPjsVector

	| instance  v1  |

  instance := super new.
  
  v1 := aPjsVector pjsVector.
  
  instance initPjsVector: ( PVector mult: aScalarFloat vector: v1).
  
  ^instance
!

multVector1: aVector1 vector2: aVector2

	| instance  v1 v2 |

  instance := super new.
  
  v1 := aVector1 pjsVector.
  v2 := aVector2 pjsVector.
  
  instance initPjsVector: ( PVector mult: v1 v2: v2).
  
  ^instance
!

new

	| instance |

  instance := self new.
  instance initPjsVector.
  
  ^instance
!

newX: aXFloat y: aYFloat

	| instance |

  instance := super new.
  instance initPjsVectorX: aXFloat y: aYFloat.
  
  ^instance
!

newX: aXFloat y: aYFloat z: aZFloat

	| instance |

  instance := super new.
  instance initPjsVectorX: aXFloat y: aYFloat z: aZFloat.
  
  ^instance
!

subVector1: aVector1 vector2: aVector2

	| instance  v1 v2 |

  instance := super new.
  
  v1 := aVector1 pjsVector.
  v2 := aVector2 pjsVector.
  
  instance initPjsVector: ( PVector sub: v1 v2: v2).
  
  ^instance
! !

