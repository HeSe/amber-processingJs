Smalltalk current createPackage: 'Processing-Core' properties: #{}!
Object subclass: #PjsFont
	instanceVariableNames: 'pjsFont'
	package: 'Processing-Core'!

!PjsFont methodsFor: 'not yet classified'!

initPjsFont
  
    pjsFont := <new p.PFont() >
!

initPjsFont: font smooth: smooth 
  
    pjsFont := <new p.PFont(font, smootht) >
!

initPjsFont: font smooth: smooth charset: charset
  
    pjsFont := <new p.PFont(font, smooth, charset) >
!

initPjsFont: font smooth: smooth charset: charset onInputStream: stream
  
    pjsFont := <new p.PFont(font, smooth, charset, stream) >
!

initPjsFontOnInputStream: stream
  
    pjsFont := <new p.PFont(stream) >
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
  
    pjsImage := <new p.PImage() >
!

initPjsImage: img
  
    pjsImage := <new p.PImage(img) >
!

initPjsImageWidth: width height: height
  
    pjsImage := <new p.PImage(width, height) >
!

initPjsImageWidth: width height: height format: format
  
    pjsImage := <new p.PImage(width, height, format) >
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

Object subclass: #PjsInterface
	instanceVariableNames: 'processing'
	package: 'Processing-Core'!

!PjsInterface methodsFor: '2D primitives'!

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

!PjsInterface methodsFor: '3D primitives'!

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

!PjsInterface methodsFor: 'accessing'!

height

	^processing height
!

processing
 
 	^processing
!

processing: aProcessingInstance
 
 	processing := aProcessingInstance
!

width

	^processing width
! !

!PjsInterface methodsFor: 'amber - processingJs API'!

override: aMethodName with: aFunctionBlock

	self processing at: aMethodName put: aFunctionBlock
!

pjsSetup

	"fire up processing"

	processing setup
! !

!PjsInterface methodsFor: 'attributes'!

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

!PjsInterface methodsFor: 'camera'!

beginCamera
	"The beginCamera() and endCamera() functions enable advanced customization of the camera space.
    The functions are useful if you want to more control over camera movement, however for most users, the camera() function will be sufficient.
	The camera functions will replace any transformations (such as rotate() or translate()) that occur before them in draw(), but 
    they will not automatically replace the camera transform itself.
    For this reason, camera functions should be placed at the beginning of draw() (so that transformations happen afterwards), and 
    the camera() function can be used after beginCamera() if you want to reset the camera before applying transformations.
	This function sets the matrix mode to the camera matrix so calls such as translate(), rotate(), applyMatrix() and resetMatrix() affect the camera. 
    beginCamera() should always be used with a following endCamera() and pairs of beginCamera() and endCamera() cannot be nested."
    
    	processing beginCamera
!

camera
	"eyeX float: x coordinate for the eye 
	eyeY float: y coordinate for the eye 
	eyeZ float: z coordinate for the eye 
	centerX float: x coordinate for the center of the scene 
	centerY float: y coordinate for the center of the scene 
	centerZ float: z coordinate for the center of the scene 
	upX float: usually 0.0, 1.0, or -1.0 
	upY float: usually 0.0, 1.0, or -1.0 
	upZ float: usually 0.0, 1.0, or -1.0 "
    
    	processing camera

	"Sets the position of the camera through setting the eye position, the center of the scene, and which axis is facing upward. 
    Moving the eye position and the direction it is pointing (the center of the scene) allows the images to be seen from different angles. 
    The version without any parameters sets the camera to the default position, pointing to the center of the display window with the Y axis as up. 
    The default values are camera(width/2.0, height/2.0, (height/2.0) / tan(PI*60.0 / 360.0), width/2.0, height/2.0, 0, 0, 1, 0). 
    This function is similar to gluLookAt() in OpenGL, but it first clears the current camera settings."
!

cameraEyeX: anEyeX eyeY: anEyeY eyeZ: anEyeZ centerX: aCenterX centerY: aCenterY centerZ: aCenterZ upX: anUpX upY: anUpY upZ: anUpZ
	"eyeX float: x coordinate for the eye 
	eyeY float: y coordinate for the eye 
	eyeZ float: z coordinate for the eye 
	centerX float: x coordinate for the center of the scene 
	centerY float: y coordinate for the center of the scene 
	centerZ float: z coordinate for the center of the scene 
	upX float: usually 0.0, 1.0, or -1.0 
	upY float: usually 0.0, 1.0, or -1.0 
	upZ float: usually 0.0, 1.0, or -1.0 "
    
    	processing camera: anEyeX eyeY: anEyeY eyeZ: anEyeZ centerX: aCenterX centerY: aCenterY centerZ: aCenterZ upX: anUpX upY: anUpY upZ: anUpZ

	"Sets the position of the camera through setting the eye position, the center of the scene, and which axis is facing upward. 
    Moving the eye position and the direction it is pointing (the center of the scene) allows the images to be seen from different angles. 
    The version without any parameters sets the camera to the default position, pointing to the center of the display window with the Y axis as up. 
    The default values are camera(width/2.0, height/2.0, (height/2.0) / tan(PI*60.0 / 360.0), width/2.0, height/2.0, 0, 0, 1, 0). 
    This function is similar to gluLookAt() in OpenGL, but it first clears the current camera settings."
!

endCamera
	"The beginCamera() and endCamera() functions enable advanced customization of the camera space. 
    Please see the reference for beginCamera() for a description of how the functions are used."
    
    	processing endCamera
!

frustumLeft: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar
	"left float: left coordinate of the clipping plane 
	right float: right coordinate of the clipping plane 
	bottom float: bottom coordinate of the clipping plane 
	top float: top coordinate of the clipping plane 
	near float: near coordinate of the clipping plane 
	far float: far coordinate of the clipping plane "
    
    	processing frustum: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar


	"Sets a perspective matrix defined through the parameters. 
    Works like glFrustum, except it wipes out the current perspective matrix rather than muliplying itself with it."
!

ortho
	"left float: left plane of the clipping volume 
	right float: right plane of the clipping volume 
	bottom float: bottom plane of the clipping volume 
	top float: top plane of the clipping volume 
	near float: near plane of the clipping volume 
	far float: far plane of the clipping volume  "
    
    	processing ortho


	"Sets an orthographic projection and defines a parallel clipping volume. 
    All objects with the same dimension appear the same size, regardless of whether they are near or far from the camera. 
    The parameters to this function specify the clipping volume where left and right are the minimum and maximum x values, 
    top and bottom are the minimum and maximum y values, and near and far are the minimum and maximum z values. 
    If no parameters are given, the default is used: ortho(0, width, 0, height, -10, 10)."
!

orthoLeft: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar
	"left float: left plane of the clipping volume 
	right float: right plane of the clipping volume 
	bottom float: bottom plane of the clipping volume 
	top float: top plane of the clipping volume 
	near float: near plane of the clipping volume 
	far float: far plane of the clipping volume  "
    
    	processing ortho: aLeft  right: aRight  bottom: aBottom top: aTop near: aNear far: aFar


	"Sets an orthographic projection and defines a parallel clipping volume. 
    All objects with the same dimension appear the same size, regardless of whether they are near or far from the camera. 
    The parameters to this function specify the clipping volume where left and right are the minimum and maximum x values, 
    top and bottom are the minimum and maximum y values, and near and far are the minimum and maximum z values. 
    If no parameters are given, the default is used: ortho(0, width, 0, height, -10, 10)."
!

perspective
	"fov float: field-of-view angle (in radians) for vertical direction 
	aspect float: ratio of width to height 
	zNear float: z-position of nearest clipping plane 
	zFar float: z-position of nearest farthest plane "
    
    	processing perspective


	"Sets a perspective projection applying foreshortening, making distant objects appear smaller than closer ones. 
    The parameters define a viewing volume with the shape of truncated pyramid. 
    Objects near to the front of the volume appear their actual size, while farther objects appear smaller. 
    This projection simulates the perspective of the world more accurately than orthographic projection. 
    The version of perspective without parameters sets the default perspective and the version with four parameters 
    allows the programmer to set the area precisely. 
    The default values are: perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where cameraZ is ((height/2.0) / tan(PI*60.0/360.0));."
!

perspectiveFov: aFov aspect: anAspect zNear: aZNear zFar: aZFar
	"fov float: field-of-view angle (in radians) for vertical direction 
	aspect float: ratio of width to height 
	zNear float: z-position of nearest clipping plane 
	zFar float: z-position of nearest farthest plane "
    
    	processing perspective: aFov aspect: anAspect zNear: aZNear zFar: aZFar


	"Sets a perspective projection applying foreshortening, making distant objects appear smaller than closer ones. 
    The parameters define a viewing volume with the shape of truncated pyramid. 
    Objects near to the front of the volume appear their actual size, while farther objects appear smaller. 
    This projection simulates the perspective of the world more accurately than orthographic projection. 
    The version of perspective without parameters sets the default perspective and the version with four parameters 
    allows the programmer to set the area precisely. 
    The default values are: perspective(PI/3.0, width/height, cameraZ/10.0, cameraZ*10.0) where cameraZ is ((height/2.0) / tan(PI*60.0/360.0));."
!

printCamera
	"Prints the current camera matrix to the text window "
    
    	processing printCamera
!

printProjection
	"Prints the current projection matrix to the text window. "
    
    	processing printProjection
! !

!PjsInterface methodsFor: 'color creating and reading'!

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

!PjsInterface methodsFor: 'color settings'!

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

!PjsInterface methodsFor: 'coordinates'!

modelX: anX y: aY z: aZ
	"x int or float: 3D x coordinate to be mapped 
	y int or float: 3D y coordinate to be mapped 
	z int or float: 3D z coordinate to be mapped "

    ^ processing modelX: anX y: aY z: aZ

	"Returns the three-dimensional X, Y, Z position in model space. 
    This returns the X value for a given coordinate based on the current set of transformations (scale, rotate, translate, etc.) 
     The X value can be used to place an object in space relative to the location of the original point once the transformations are no longer in use. 
	In the example, the modelX(), modelY(), and modelZ() methods record the location of a box in space after being placed using a series of translate and 
    rotate commands. After popMatrix() is called, those transformations no longer apply, but the (x, y, z) coordinate returned by 
    the model functions is used to place another box in the same location."
!

modelY: anX y: aY z: aZ
	"x int or float: 3D x coordinate to be mapped 
	y int or float: 3D y coordinate to be mapped 
	z int or float: 3D z coordinate to be mapped "

    ^ processing modelY: anX y: aY z: aZ

	"Returns the three-dimensional X, Y, Z position in model space. 
    This returns the X value for a given coordinate based on the current set of transformations (scale, rotate, translate, etc.) 
     The X value can be used to place an object in space relative to the location of the original point once the transformations are no longer in use. 
	In the example, the modelX(), modelY(), and modelZ() methods record the location of a box in space after being placed using a series of translate and 
    rotate commands. After popMatrix() is called, those transformations no longer apply, but the (x, y, z) coordinate returned by 
    the model functions is used to place another box in the same location."
!

modelZ: anX y: aY z: aZ
	"x int or float: 3D x coordinate to be mapped 
	y int or float: 3D y coordinate to be mapped 
	z int or float: 3D z coordinate to be mapped "

    ^ processing modelZ: anX y: aY z: aZ

	"Returns the three-dimensional X, Y, Z position in model space. 
    This returns the X value for a given coordinate based on the current set of transformations (scale, rotate, translate, etc.) 
     The X value can be used to place an object in space relative to the location of the original point once the transformations are no longer in use. 
	In the example, the modelX(), modelY(), and modelZ() methods record the location of a box in space after being placed using a series of translate and 
    rotate commands. After popMatrix() is called, those transformations no longer apply, but the (x, y, z) coordinate returned by 
    the model functions is used to place another box in the same location."
!

screenX: anX y: aY z: aZ
	"x int or float: 3D x coordinate to be mapped 
	y int or float: 3D y coordinate to be mapped 
	z int or float: 3D z coordinate to be mapped "

    ^ processing screenX: anX y: aY z: aZ

	"Takes a three-dimensional X, Y, Z position and returns the X value for where
     it will appear on a (two-dimensional) screen."
!

screenY: anX y: aY z: aZ
	"x int or float: 3D x coordinate to be mapped 
	y int or float: 3D y coordinate to be mapped 
	z int or float: 3D z coordinate to be mapped "

    ^ processing screenY: anX y: aY z: aZ

	"Takes a three-dimensional X, Y, Z position and returns the X value for where
     it will appear on a (two-dimensional) screen."
!

screenZ: anX y: aY z: aZ
	"x int or float: 3D x coordinate to be mapped 
	y int or float: 3D y coordinate to be mapped 
	z int or float: 3D z coordinate to be mapped "

    ^ processing screenZ: anX y: aY z: aZ

	"Takes a three-dimensional X, Y, Z position and returns the X value for where
     it will appear on a (two-dimensional) screen."
! !

!PjsInterface methodsFor: 'curves'!

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

!PjsInterface methodsFor: 'environmant'!

cursor
	"MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT 
	image PImage: any variable of type PImage 
	x int: the horizonal active spot of the cursor 
	y int: the vertical active spot of the cursor "
    
	 ^processing cursor
 
 	"Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. 
    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. 
    It is not possible to load an image as the cursor if you are exporting your program for the Web. 
    The values for parameters x and y must be less than the dimensions of the image."
!

cursorImage: aPjsImage x: aX y: aY
	"MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT 
	image PImage: any variable of type PImage 
	x int: the horizonal active spot of the cursor 
	y int: the vertical active spot of the cursor "
    
	 processing cursor: aPjsImage pjsImage  x: aX y: aY
 
 	"Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. 
    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. 
    It is not possible to load an image as the cursor if you are exporting your program for the Web. 
    The values for parameters x and y must be less than the dimensions of the image."
!

cursorMode: aMode
	"MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT 
	image PImage: any variable of type PImage 
	x int: the horizonal active spot of the cursor 
	y int: the vertical active spot of the cursor "
    
	 processing cursor: aMode
 
 	"Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. 
    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. 
    It is not possible to load an image as the cursor if you are exporting your program for the Web. 
    The values for parameters x and y must be less than the dimensions of the image."
!

frameCount
	"The system variable frameCount contains the number of frames displayed since the program started. Inside setup() the value is 0 and and after the first iteration of draw it is 1, etc."
    
	^ processing frameCount
!

frameRate
	"The system variable frameRate contains the approximate frame rate of the software as it executes. 
    The initial value is 10 fps and is updated with each frame. The value is averaged (integrated) over several frames. As such, this value won't be valid until after 5-10 frames.."
    
	^processing frameRate
!

frameRate: aFps
	"fps int: number of frames per second "
    
	processing frameRate: aFps
    
    "Specifies the number of frames to be displayed every second. 
    If the processor is not fast enough to maintain the specified rate, it will not be achieved. 
    For example, the function call frameRate(30) will attempt to refresh 30 times a second. It is recommended to set the frame rate within setup(). 
    The default rate is 60 frames per second."
!

isFocused
	"Confirms if a Processing program is ""focused"", meaning that it is active and will accept input from mouse or keyboard. 
    This variable is ""true"" if it is focused and ""false"" if not. This variable is often used when you want to warn people they need to click on or roll over an applet before it will work."
    
	^< processing.focused >
!

isOnline
	"Confirms if a Processing program is running inside a web browser. 
    This variable is ""true"" if the program is online and ""false"" if not.."
    
	^< processing.online >
!

noCursor
	"Hides the cursor from view. Will not work when running the program in a web browser."
    
	 processing noCursor
!

screenHeight
	"System variable which stores the dimensions of the computer screen. 
    For example, if the current screen resolution is 1024x768, screen.width is 1024 and screen.height is 768. 
    These dimensions are useful when exporting full-screen applications. ."
    
	^< processing.screen.height >
!

screenWidth
	"System variable which stores the dimensions of the computer screen. 
    For example, if the current screen resolution is 1024x768, screen.width is 1024 and screen.height is 768. 
    These dimensions are useful when exporting full-screen applications. ."
    
	^< processing.screen.width >
! !

!PjsInterface methodsFor: 'image loading and displaying '!

createImageWidth: aWidth height: aHeight format: aFormat
	"width int: width in pixels 
	height int: height in pixels 
	format Either RGB, ARGB, ALPHA (grayscale alpha channel) "
    
	^ PjsImage newImage: (processing createImage: aWidth height: aHeight format: aFormat)
    
     "Creates a new PImage (the datatype for storing images). 
      This provides a fresh buffer of pixels to play with. 
      Set the size of the buffer with the width and height parameters. 
      The format parameter defines how the pixels are stored. 
      See the PImage reference for more information. 
      Be sure to include all three parameters, specifying only the width 
      and height (but no format) will produce a strange error."
!

image: aPjsImage x: aX y: aY 
	"img PImage: the image to display 
	x int or float: x-coordinate of the image 
	y int or float: y-coordinate of the image "
    
	processing image: aPjsImage pjsImage x: aX y: aY 
    
     "Diplays images to the screen. The images must be preloaded using @pjs preload before 
     it can be used. Processing currently works with GIF, JPEG, and Targa images. 
     The color of an image may be modified with the tint() function and if a GIF has transparency, 
     it will maintain its transparency. The img parameter specifies the image to display and 
     the x and y parameters define the location of the image from its upper-left corner. 
     The image is displayed at its original size unless the width and height parameters specify a different size. 
     The imageMode() function changes the way the parameters work. 
     A call to imageMode(CORNERS) will change the width and height parameters to define 
     the x and y values of the opposite corner of the image. 

	NOTE: DOM security will not allow you to load images file:/// URIs. 
    This security can be overridden in Firefox in about:config, by changing security.fileuri.strict_origin_policy to false."
!

image: aPjsImage x: aX y: aY width: aWidth height: aHeight 
	"img PImage: the image to display 
	x int or float: x-coordinate of the image 
	y int or float: y-coordinate of the image 
	width int or float: width to display the image 
	height int or float: height to display the image "
    
	processing image: aPjsImage pjsImage x: aX y: aY width: aWidth height: aHeight 
    
     "Diplays images to the screen. The images must be preloaded using @pjs preload before 
     it can be used. Processing currently works with GIF, JPEG, and Targa images. 
     The color of an image may be modified with the tint() function and if a GIF has transparency, 
     it will maintain its transparency. The img parameter specifies the image to display and 
     the x and y parameters define the location of the image from its upper-left corner. 
     The image is displayed at its original size unless the width and height parameters specify a different size. 
     The imageMode() function changes the way the parameters work. 
     A call to imageMode(CORNERS) will change the width and height parameters to define 
     the x and y values of the opposite corner of the image. 

	NOTE: DOM security will not allow you to load images file:/// URIs. 
    This security can be overridden in Firefox in about:config, by changing security.fileuri.strict_origin_policy to false."
!

imageMode: aMode
	"MODE Either CORNER, CORNERS, or CENTER "
    
	processing imageMode: aMode
    
     "Modifies the location from which images draw. The default mode is imageMode(CORNER), 
      which specifies the location to be the upper left corner and uses the fourth and fifth parameters of image() 
      to set the image's width and height. The syntax imageMode(CORNERS) uses the second and third parameters of image() 
      to set the location of one corner of the image and uses the fourth and fifth parameters to set the opposite corner. 
      Use imageMode(CENTER) to draw images centered at the given x and y position"
!

loadImage: aFileName
	"filename string: name of file to load or data URI/td>   "
    
	^PjsImage newImage: (processing loadImage: aFileName)
    
     "Loads an image into a variable of type PImage. Four types of images ( .gif, .jpg, .tga, .png) images may be loaded. 
     To load correctly, images must be located in the data directory of the current sketch, the images must be preloaded 
     using @pjs preload specifying the path to the image. In most cases, load all images in setup() to preload them at the 
     start of the program. Loading images inside draw() will reduce the speed of a program. 
     You can also load images from a data URI, such as ""data:image/jpg;base64,{base 64 encoded data block}"" 
     which does not require any preloading. 
     The filename parameter can also be a URL to a file found online. For security reasons, 
      a Processing sketch found online can only download files from the same server from which it came. 
  	The extension of the filename parameter is used to determine the image type. 
     In cases where the image filename does not end with a proper extension, specify the extension 
     as the second parameter to loadImage(), as shown in the third example on this page. 
	If an image is not loaded successfully, the null value is returned and an error message will be printed to the console. 
    The error message does not halt the program, however the null value may cause a NullPointerException if 
    your code does not check whether the value returned from loadImage() is null. 

NOTE: Some browers will not allow you to load images from file:// URIs. It is recommended that you use a webserver for your development and testing to avoid any problems with file:// URIs.
"
!

noTint
	"Removes the current fill value for displaying images and reverts to displaying images with their original hues."
    
	processing noTint
!

requestImage: aFilename 
	"filename String: name of file to load, can be .gif, .jpg, .tga, or a handful of other image types depending on your platform  "
    
	^PjsImage newImage: (processing requestImage: aFilename  )
    
     "This function load images on a separate thread so that your sketch does not freeze while images load during setup(). 
     While the image is loading, its width and height will be 0. If an error occurs while loading the image, its width and height will be set to -1. 
     You'll know when the image has loaded properly because its width and height will be greater than 0. 
     Asynchronous image loading (particularly when downloading from a server) can dramatically improve performance.
      The extension parameter is used to determine the image type in cases where the image filename does not end 
      with a proper extension. Specify the extension as the second parameter to requestImage()."
!

requestImage: aFilename extension: aExtension
	"filename String: name of file to load, can be .gif, .jpg, .tga, or a handful of other image types depending on your platform 
	extension String: the type of image to load, for example ""png"", ""gif"", ""jpg""  "
    
	^PjsImage newImage: (processing requestImage: aFilename extension: aExtension)
    
     "This function load images on a separate thread so that your sketch does not freeze while images load during setup(). 
     While the image is loading, its width and height will be 0. If an error occurs while loading the image, its width and height will be set to -1. 
     You'll know when the image has loaded properly because its width and height will be greater than 0. 
     Asynchronous image loading (particularly when downloading from a server) can dramatically improve performance.
      The extension parameter is used to determine the image type in cases where the image filename does not end 
      with a proper extension. Specify the extension as the second parameter to requestImage()."
!

tintColor: aColor 
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aColor 
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintColor: aColor alpha: anAlpha
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aColor alpha: anAlpha
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintGray: aGray
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aGray
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintGray: aGray alpha: anAlpha
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aGray alpha: anAlpha
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintHex: aHex
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aHex
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintHex: aHex alpha: anAlpha
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aHex alpha: anAlpha
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintValue1: aValue1 value2: aValue2 value3: aValue3
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aValue1 value2: aValue2 value3: aValue3
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
!

tintValue1: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
	"gray int or float: any valid number 
	alpha int or float: opacity of the image 
	value1 int or float: red or hue value 
	value2 int or float: green or saturation value 
	value3 int or float: blue or brightness value 
	color color: any value of the color datatype  
	hex int: color value in hexadecimal notation (i.e. #FFCC00 or 0xFFFFCC00) "
    
	processing tint: aValue1 value2: aValue2 value3: aValue3 alpha: anAlpha
    
    "Sets the fill value for displaying images. Images can be tinted to specified colors or made transparent by setting the alpha. 
     To make an image transparent, but not change it's color, use white as the tint color and specify an alpha value. 
     For instance, tint(255, 128) will make an image 50% transparent (unless colorMode() has been used). 
     When using hexadecimal notation to specify a color, use ""#"" or ""0x"" before the values (e.g. #CCFFAA, 0xFFCCFFAA). 
    The # syntax uses six digits to specify a color (the way colors are specified in HTML and CSS). 
    When using the hexadecimal notation starting with ""0x"", the hexadecimal value must be specified with eight characters; 
    the first two characters define the alpha component and the remainder the red, green, and blue components. 
    The value for the parameter ""gray"" must be less than or equal to the current maximum value as specified by colorMode(). 
    The default maximum value is 255. 
     The tint() method is also used to control the coloring of textures in 3D."
! !

!PjsInterface methodsFor: 'image pixels'!

blendImage: aPjsImage x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode
	"x int: X coordinate of the source's upper left corner 
	y int: Y coordinate of the source's upper left corner 
	width int: source image width 
	height int: source image height 
	dx int: X coordinate of the destination's upper left corner 
	dy int: Y coordinate of the destination's upper left corner 
	dwidth int: destination image width 
	dheight int: destination image height 
	srcImg PImage:a image variable referring to the source image. 
	MODE Either BLEND, ADD, SUBTRACT, LIGHTEST, DARKEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN "
    
	processing blend: aPjsImage pjsImage x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode
    
    "Blends a region of pixels into the image specified by the img parameter. 
       These copies utilize full alpha channel support and a choice of the following modes to 
       blend the colors of source pixels (A) with the ones of pixels in the destination image (B):
	BLEND - linear interpolation of colours: C = A*factor + B
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
	BURN - Darker areas are applied, increasing contrast, ignores lights. Called ""Color Burn"" in Illustrator and Photoshop.
	All modes use the alpha information (highest byte) of source image pixels as the blending factor. 
    If the source and destination regions are different sizes, the image will be automatically resized to 
    match the destination size. If the srcImg parameter is not used, the display window is used as the source image.
	This function ignores imageMode().."
!

blendX: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode
	"x int: X coordinate of the source's upper left corner 
	y int: Y coordinate of the source's upper left corner 
	width int: source image width 
	height int: source image height 
	dx int: X coordinate of the destination's upper left corner 
	dy int: Y coordinate of the destination's upper left corner 
	dwidth int: destination image width 
	dheight int: destination image height 
	srcImg PImage:a image variable referring to the source image. 
	MODE Either BLEND, ADD, SUBTRACT, LIGHTEST, DARKEST, DIFFERENCE, EXCLUSION, MULTIPLY, SCREEN, OVERLAY, HARD_LIGHT, SOFT_LIGHT, DODGE, BURN "
    
	processing blend: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight mode: aMode
    
    "Blends a region of pixels into the image specified by the img parameter. 
       These copies utilize full alpha channel support and a choice of the following modes to 
       blend the colors of source pixels (A) with the ones of pixels in the destination image (B):
	BLEND - linear interpolation of colours: C = A*factor + B
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
	BURN - Darker areas are applied, increasing contrast, ignores lights. Called ""Color Burn"" in Illustrator and Photoshop.
	All modes use the alpha information (highest byte) of source image pixels as the blending factor. 
    If the source and destination regions are different sizes, the image will be automatically resized to 
    match the destination size. If the srcImg parameter is not used, the display window is used as the source image.
	This function ignores imageMode().."
!

copyImage: aPjsImage x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight
	"x int: X coordinate of the source's upper left corner 
	y int: Y coordinate of the source's upper left corner 
	width int: source image width 
	height int: source image height 
	dx int: X coordinate of the destination's upper left corner 
	dy int: Y coordinate of the destination's upper left corner 
	dwidth int: destination image width 
	dheight int: destination image height 
	srcImg PImage:a image variable referring to the source image. "
    
	processing copy: aPjsImage pjsImage  x: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight 
    
    "Copies a region of pixels from the display window to another area of the display window and 
      copies a region of pixels from an image used as the srcImg parameter into the display window. 
      If the source and destination regions aren't the same size, it will automatically resize the source pixels 
      to fit the specified target region. No alpha information is used in the process, 
      however if the source image has an alpha channel set, it will be copied as well. 
      This function ignores imageMode()."
!

copyX: aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight
	"x int: X coordinate of the source's upper left corner 
	y int: Y coordinate of the source's upper left corner 
	width int: source image width 
	height int: source image height 
	dx int: X coordinate of the destination's upper left corner 
	dy int: Y coordinate of the destination's upper left corner 
	dwidth int: destination image width 
	dheight int: destination image height 
	srcImg PImage:a image variable referring to the source image.  "
    
	processing copy:aX y: aY width: aWidth height: aHeigt dx: dX dy: dY dwidth: aDWidth dheight: aDHeight 
    
    "Copies a region of pixels from the display window to another area of the display window and 
      copies a region of pixels from an image used as the srcImg parameter into the display window. 
      If the source and destination regions aren't the same size, it will automatically resize the source pixels 
      to fit the specified target region. No alpha information is used in the process, 
      however if the source image has an alpha channel set, it will be copied as well. 
      This function ignores imageMode()."
!

filterMode: aMode
	"MODE Either THRESHOLD, GRAY, INVERT, POSTERIZE, BLUR, OPAQUE, ERODE, or DILATE 
	param int or float in the range from 0 to 1"
    
	processing filter: aMode 
    
    "Filters an image as defined by one of the following modes:
	THRESHOLD - converts the image to black and white pixels depending if they are above or below the threshold defined by the level parameter. 
    						The level must be between 0.0 (black) and 1.0(white). If no level is specified, 0.5 is used.
  	GRAY - converts any colors in the image to grayscale equivalents
	INVERT - sets each pixel to its inverse value
	POSTERIZE - limits each channel of the image to the number of colors specified as the level parameter
	BLUR - executes a Guassian blur with the level parameter specifying the extent of the blurring. 
    			If no level parameter is used, the blur is equivalent to Guassian blur of radius 1.
	OPAQUE - sets the alpha channel to entirely opaque.
	ERODE - reduces the light areas with the amount defined by the level parameter.
	DILATE - increases the light areas with the amount defined by the level parameter"
!

filterMode: aMode param: aParam
	"MODE Either THRESHOLD, GRAY, INVERT, POSTERIZE, BLUR, OPAQUE, ERODE, or DILATE 
	param int or float in the range from 0 to 1"
    
	processing filter: aMode param: aParam
    
    "Filters an image as defined by one of the following modes:
	THRESHOLD - converts the image to black and white pixels depending if they are above or below the threshold defined by the level parameter. 
    						The level must be between 0.0 (black) and 1.0(white). If no level is specified, 0.5 is used.
  	GRAY - converts any colors in the image to grayscale equivalents
	INVERT - sets each pixel to its inverse value
	POSTERIZE - limits each channel of the image to the number of colors specified as the level parameter
	BLUR - executes a Guassian blur with the level parameter specifying the extent of the blurring. 
    			If no level parameter is used, the blur is equivalent to Guassian blur of radius 1.
	OPAQUE - sets the alpha channel to entirely opaque.
	ERODE - reduces the light areas with the amount defined by the level parameter.
	DILATE - increases the light areas with the amount defined by the level parameter"
!

get
	"x int: x-coordinate of the pixel 
	y int: y-coordinate of the pixel 
	width int: width of pixel rectangle to get 
	height int: height of pixel rectangle to get 
 	"
    
	^PjsImage newImage: (processing get)
    
    "Reads the color of any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. 
    Get the value of one pixel by specifying an x,y coordinate. Get a section of the display window by specifying an additional width and 
    height parameter. If the pixel requested is outside of the image window, black is returned. 
    The numbers returned are scaled according to the current color ranges, but only RGB values are returned by this function. 
    For example, even though you may have drawn a shape with colorMode(HSB), the numbers returned will be in RGB.
	The imageMode() function changes the way the parameters work. 
    For example, a call to imageMode(CORNERS) will change the width and height parameters to define the x and y values of the opposite corner of the image.
	Getting the color of a single pixel with get(x, y) is easy, but not as fast as grabbing the data directly from pixels[]. 
    The equivalent statement to ""get(x, y)"" using pixels[] is ""pixels[y*width+x]"". 
    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before getting the values."
!

getX: aX y: aY
	"x int: x-coordinate of the pixel 
	y int: y-coordinate of the pixel 
	width int: width of pixel rectangle to get 
	height int: height of pixel rectangle to get 
 	"
    
	^ processing get: aX y: aY 
    
    "Reads the color of any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. 
    Get the value of one pixel by specifying an x,y coordinate. Get a section of the display window by specifying an additional width and 
    height parameter. If the pixel requested is outside of the image window, black is returned. 
    The numbers returned are scaled according to the current color ranges, but only RGB values are returned by this function. 
    For example, even though you may have drawn a shape with colorMode(HSB), the numbers returned will be in RGB.
	The imageMode() function changes the way the parameters work. 
    For example, a call to imageMode(CORNERS) will change the width and height parameters to define the x and y values of the opposite corner of the image.
	Getting the color of a single pixel with get(x, y) is easy, but not as fast as grabbing the data directly from pixels[]. 
    The equivalent statement to ""get(x, y)"" using pixels[] is ""pixels[y*width+x]"". 
    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before getting the values."
!

getX: aX y: aY width: aWidth height: aHeight
	"x int: x-coordinate of the pixel 
	y int: y-coordinate of the pixel 
	width int: width of pixel rectangle to get 
	height int: height of pixel rectangle to get 
 	"
    
	^ PjsImage newImage: (processing get: aX y: aY width: aWidth height: aHeight)
    
    "Reads the color of any pixel or grabs a section of an image. If no parameters are specified, the entire image is returned. 
    Get the value of one pixel by specifying an x,y coordinate. Get a section of the display window by specifying an additional width and 
    height parameter. If the pixel requested is outside of the image window, black is returned. 
    The numbers returned are scaled according to the current color ranges, but only RGB values are returned by this function. 
    For example, even though you may have drawn a shape with colorMode(HSB), the numbers returned will be in RGB.
	The imageMode() function changes the way the parameters work. 
    For example, a call to imageMode(CORNERS) will change the width and height parameters to define the x and y values of the opposite corner of the image.
	Getting the color of a single pixel with get(x, y) is easy, but not as fast as grabbing the data directly from pixels[]. 
    The equivalent statement to ""get(x, y)"" using pixels[] is ""pixels[y*width+x]"". 
    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before getting the values."
!

loadPixels
    
	 processing loadPixels
    
    "Loads the pixel data for the display window (or an image) into the pixels[] array. 
      This function must always be called before reading from or writing to pixels[]. 
	 Certain renderers may or may not seem to require loadPixels() or updatePixels(). 
     However, the rule is that any time you want to manipulate the pixels[] array, you must first call loadPixels(), 
     and after changes have been made, call updatePixels(). 
     Even if the renderer may not seem to use this function in the current Processing release, this will always be subject to change."
!

pixelsAt: anIndex
    
	^ < processing.pixels[ anIndex ] >
    
    "Array containing the values for all the pixels in the display window. 
      These values are of the color datatype. 
      This array is the size of the display window. For example, if the image is 100x100 pixels, there will be 10000 values and i
      f the window is 200x300 pixels, there will be 60000 values. 
      The index value defines the position of a value within the array. For example, the statment color b = pixels[230] 
      will set the variable b to be equal to the value at that location in the array. 
	Before accessing this array, the data must loaded with the loadPixels() functions. 
    After the array data has been modified, the updatePixels() function must be loaded to update the changes. 
    Without loadPixels(), running the code may (or will in future releases) result in a NullPointerException.."
!

pixelsAt: anIndex put: aValue
    
	 < processing.pixels[ anIndex ] = aValue >
    
    "Array containing the values for all the pixels in the display window. 
      These values are of the color datatype. 
      This array is the size of the display window. For example, if the image is 100x100 pixels, there will be 10000 values and i
      f the window is 200x300 pixels, there will be 60000 values. 
      The index value defines the position of a value within the array. For example, the statment color b = pixels[230] 
      will set the variable b to be equal to the value at that location in the array. 
	Before accessing this array, the data must loaded with the loadPixels() functions. 
    After the array data has been modified, the updatePixels() function must be loaded to update the changes. 
    Without loadPixels(), running the code may (or will in future releases) result in a NullPointerException.."
!

setX: aX y: aY color: aColor
    
   " x int: x-coordinate of the pixel 
	y int: y-coordinate of the pixel 
	color color: any value of the color datatype 
	image PImage: any valid variable of type PImage "

	 processing set: aX y: aY color: aColor
    
    "Changes the color of any pixel or writes an image directly into the display window. 
     The x and y parameters specify the pixel to change and the color parameter specifies the color value. 
     The color parameter is affected by the current color mode (the default is RGB values from 0 to 255). 
     When setting an image, the x and y parameters define the coordinates for the upper-left corner of 
     the image (the placement of the image is not affected by the imageMode() function).
	Setting the color of a single pixel with set(x, y) is easy, but not as fast as putting the data directly into pixels[]. 
    The equivalent statement to ""set(x, y, #000000)"" using pixels[] is ""pixels[y*width+x] = #000000"". 
    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before 
    getting the values and calling updatePixels() to update the window.."
!

setX: aX y: aY image: aPjsImage
    
   " x int: x-coordinate of the pixel 
	y int: y-coordinate of the pixel 
	color color: any value of the color datatype 
	image PImage: any valid variable of type PImage "

	 processing set: aX y: aY image: aPjsImage pjsImage
    
    "Changes the color of any pixel or writes an image directly into the display window. 
     The x and y parameters specify the pixel to change and the color parameter specifies the color value. 
     The color parameter is affected by the current color mode (the default is RGB values from 0 to 255). 
     When setting an image, the x and y parameters define the coordinates for the upper-left corner of 
     the image (the placement of the image is not affected by the imageMode() function).
	Setting the color of a single pixel with set(x, y) is easy, but not as fast as putting the data directly into pixels[]. 
    The equivalent statement to ""set(x, y, #000000)"" using pixels[] is ""pixels[y*width+x] = #000000"". 
    The (BETA) version of Processing requires calling loadPixels() to load the display window data into the pixels[] array before 
    getting the values and calling updatePixels() to update the window.."
!

updatePixels
    
   "Updates the display window (or an image) when data in the pixels[] array has been modified. 
    Use in conjunction with loadPixels(). 
    If you're only reading pixels from the array, there's no need to call updatePixels() unless there are changes. 
	Certain renderers may or may not seem to require loadPixels() or updatePixels(). 
    However, the rule is that any time you want to manipulate the pixels[] array, you must first call loadPixels(), 
    and after changes have been made, call updatePixels().
    Even if the renderer may not seem to use this function in the current Processing release, this will always be subject to change. "

	 processing updatePixels
! !

!PjsInterface methodsFor: 'image saving'!

saveFrame
	"filename String: any sequence of letters and numbers 
	ext either ""tif"", ""tga"", ""jpg"", ""png"" "
    
     processing saveFrame
    
     "Saves a numbered sequence of images, one image each time the function is run. 
     To save an image that is identical to the display window, run the function at the end of draw() or 
     within mouse and key events such as mousePressed() and keyPressed(). 
     If saveFrame() is called without parameters, it will save the files as screen-0000.tif, screen-0001.tif, etc.
     It is possible to specify the name of the sequence with the filename parameter and make the choice of saving TIFF, TARGA, PNG, or JPEG files with the ext parameter. 
     These image sequences can be loaded into programs such as Apple's QuickTime software and made into movies. 
     These files are saved to the sketch's folder, which may be opened by selecting ""Show sketch folder"" from the ""Sketch"" menu. 

All images saved from the main drawing window will be opaque. To save images without a background, use createGraphics().
"
!

saveFrame: aFileNameAndExt
	"filename String: any sequence of letters and numbers 
	ext either ""tif"", ""tga"", ""jpg"", ""png""
    Example: filename-####.ext"
    
     processing saveFrame: aFileNameAndExt
    
     "Saves a numbered sequence of images, one image each time the function is run. 
     To save an image that is identical to the display window, run the function at the end of draw() or 
     within mouse and key events such as mousePressed() and keyPressed(). 
     If saveFrame() is called without parameters, it will save the files as screen-0000.tif, screen-0001.tif, etc.
     It is possible to specify the name of the sequence with the filename parameter and make the choice of saving TIFF, TARGA, PNG, or JPEG files with the ext parameter. 
     These image sequences can be loaded into programs such as Apple's QuickTime software and made into movies. 
     These files are saved to the sketch's folder, which may be opened by selecting ""Show sketch folder"" from the ""Sketch"" menu. 

All images saved from the main drawing window will be opaque. To save images without a background, use createGraphics().
"
!

saveImage: aFileName
	"filename String: any sequence of letters and numbers   "
    
     processing save: aFileName
    
     "Saves an image from the display window. Images are saved in the PNG format as a Data URI, which can be displayed in the browser in a new window."
! !

!PjsInterface methodsFor: 'initialization'!

initialize

	processing := <Processing.instances[0]>.
! !

!PjsInterface methodsFor: 'lights'!

ambientLightV1: aV1 v2: aV2 v3: aV3 
	"v1 int or float: red or hue value 
	v2 int or float: green or hue value 
	v3 int or float: green or hue value 
	x int or float: x-coordinate of the light 
	y int or float: y-coordinate of the light 
	z int or float: z-coordinate of the light "
    
    	processing ambientLight: aV1 v2: aV2 v3: aV3 

	"Adds an ambient light. Ambient light doesn't come from a specific direction, 
    the rays have light have bounced around so much that objects are evenly lit from all sides. 
    Ambient lights are almost always used in combination with other types of lights. 
    Lights need to be included in the draw() to remain persistent in a looping program. 
    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. 
    The effect of the parameters is determined by the current color mode."
!

ambientLightV1: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ
	"v1 int or float: red or hue value 
	v2 int or float: green or hue value 
	v3 int or float: green or hue value 
	x int or float: x-coordinate of the light 
	y int or float: y-coordinate of the light 
	z int or float: z-coordinate of the light "
    
    	processing ambientLight: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ

	"Adds an ambient light. Ambient light doesn't come from a specific direction, 
    the rays have light have bounced around so much that objects are evenly lit from all sides. 
    Ambient lights are almost always used in combination with other types of lights. 
    Lights need to be included in the draw() to remain persistent in a looping program. 
    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. 
    The effect of the parameters is determined by the current color mode."
!

directionalV1: aV1 v2: aV2 v3: aV3 nx: aX ny: aY nz: aZ
	"v1 int or float: red or hue value 
	v2 int or float: green or hue value 
	v3 int or float: green or hue value 
	nx int or float: direction along the x axis 
	ny int or float: direction along the y axis 
	nz int or float: direction along the z axis 
	"
    
    	processing directional: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ

	"Adds a directional light. Directional light comes from one direction and is stronger when 
     hitting a surface squarely and weaker if it hits at a a gentle angle. 
     After hitting a surface, a directional lights scatters in all directions. 
     Lights need to be included in the draw() to remain persistent in a looping program. 
     Placing them in the setup() of a looping program will cause them to only have an effect the first
     time through the loop. The affect of the v1, v2, and v3 parameters is determined by the current color mode. 
     The nx, ny, and nz parameters specify the direction the light is facing. 
     For example, setting ny to -1 will cause the geometry to be lit from below (the light is facing directly upward)."
!

lightFalloff: aConstant linear: aLinear quadratic: aQuadric
	"constant int or float: constant value for determining falloff 
	linear int or float: linear value for determining falloff 
	quadratic int or float: quadratic value for determining falloff "
    
    	processing lightFalloff: aConstant linear: aLinear quadratic: aQuadric
        
	"Sets the falloff rates for point lights, spot lights, and ambient lights. 
    	The parameters are used to determine the falloff with the following equation:
		d = distance from light position to vertex position
        falloff = 1 / (CONSTANT + d * LINEAR + (d*d) * QUADRATIC)
        Like fill(), it affects only the elements which are created after it in the code. 
        The default value if LightFalloff(1.0, 0.0, 0.0). 
        Thinking about an ambient light with a falloff can be tricky. It is used, for example, if 
        you wanted a region of your scene to be lit ambiently one color and another region to be lit ambiently 
        by another color, you would use an ambient light with location and falloff. 
        You can think of it as a point light that doesn't care which direction a surface is facing."
!

lightSpeculartV1: aV1 v2: aV2 v3: aV3 
	"v1 int or float: red or hue value 
	v2 int or float: green or hue value 
	v3 int or float: green or hue value "
    
    	processing lightSpecular: aV1 v2: aV2 v3: aV3 

	"Sets the specular color for lights. 
    Like fill(), it affects only the elements which are created after it in the code. 
    Specular refers to light which bounces off a surface in a perferred 
     direction (rather than bouncing in all directions like a diffuse light) and is used for creating highlights. 
     The specular quality of a light interacts with the specular material qualities set through the specular() and shininess() functions."
!

lights
	"Sets the default ambient light, directional light, falloff, and specular values. 
    The defaults are are ambientLight(128, 128, 128) and directionalLight(128, 128, 128, 0, 0, -1), 
    lightFalloff()(1, 0, 0), and lightSpecular(0, 0, 0). Lights need to be included in the draw() to 
    remain persistent in a looping program. 
    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. "
    
    	processing lights
!

noLights
	"Disable all lighting. Lighting is turned off by default and enabled with the lights() method. 
    This function can be used to disable lighting so that 2D geometry 
    (which does not require lighting) can be drawn after a set of lighted 3D geometry. "
    
    	processing noLights
!

normal: aX ny: aY nz: aZ
	
	"nx int or float: direction along the x axis 
	ny int or float: direction along the y axis 
	nz int or float: direction along the z axis "
    
    	processing normal: aX ny: aY nz: aZ

	"Sets the current normal vector. 
     This is for drawing three dimensional shapes and surfaces and specifies a vector perpendicular to 
     the surface of the shape which determines how lighting affects it. 
    Processing attempts to automatically assign normals to shapes, but since that's imperfect, this is 
    a better option when you want more control. This function is identical to glNormal3f() in OpenGL."
!

pointLightV1: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ
	"v1 int or float: red or hue value 
	v2 int or float: green or hue value 
	v3 int or float: green or hue value 
	x int or float: x-coordinate of the light 
	y int or float: y-coordinate of the light 
	z int or float: z-coordinate of the light "
    
    	processing pointLight: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ

	"Adds a point light. Lights need to be included in the draw() to remain persistent in a looping program. 
    Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. 
    The affect of the v1, v2, and v3 parameters is determined by the current color mode. 
    The x, y, and z parameters set the position of the light."
!

spotLightV1: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ angle: anAngle concentration: aCon
	"v1 int or float: red or hue value 
	v2 int or float: green or hue value 
	v3 int or float: green or hue value 
	nx int or float: x coordinate of the light 
	ny int or float: y coordinate of the light 
	nz int or float: z coordinate of the light 
	angle float: angle of the spotlight cone 
	concentration float: exponent determining the center bias of the cone   "
    
    	processing spotLight: aV1 v2: aV2 v3: aV3 x: aX y: aY z: aZ angle: anAngle concentration: aCon

	"Adds a spot light. Lights need to be included in the draw() to remain persistent in a looping program. 
     Placing them in the setup() of a looping program will cause them to only have an effect the first time through the loop. 
     The affect of the v1, v2, and v3 parameters is determined by the current color mode. 
     The x, y, and z parameters specify the position of the light and nx, ny, nz specify the direction or light. 
     The angle parameter affects angle of the spotlight cone."
! !

!PjsInterface methodsFor: 'material properties'!

ambient: aValue1 value2: aValue2 value3: aValue3 
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing ambient: aValue1 value2: aValue2 value3: aValue3 
    
    "Sets the ambient reflectance for shapes drawn to the screen. 
    This is combined with the ambient light component of environment. 
    The color components set through the parameters define the reflectance. 
    For example in the default color mode, setting v1=255, v2=126, v3=0, would cause all the red light to reflect and 
    half of the green light to reflect. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
!

ambientColor: aColor
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing ambient: aColor
    
    "Sets the ambient reflectance for shapes drawn to the screen. 
    This is combined with the ambient light component of environment. 
    The color components set through the parameters define the reflectance. 
    For example in the default color mode, setting v1=255, v2=126, v3=0, would cause all the red light to reflect and 
    half of the green light to reflect. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
!

ambientGray: aGrayValue
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing ambient: aGrayValue
    
    "Sets the ambient reflectance for shapes drawn to the screen. 
    This is combined with the ambient light component of environment. 
    The color components set through the parameters define the reflectance. 
    For example in the default color mode, setting v1=255, v2=126, v3=0, would cause all the red light to reflect and 
    half of the green light to reflect. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
!

emissive: aValue1 value2: aValue2 value3: aValue3 
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing emissivet: aValue1 value2: aValue2 value3: aValue3 
    
   "Sets the emissive color of the material used for drawing shapes drawn to the screen. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.
."
!

emissiveColor: aColor
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing emissive: aColor
    
    "Sets the emissive color of the material used for drawing shapes drawn to the screen. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.
."
!

emissiveGray: aGrayValue
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing emissive: aGrayValue
    
    "Sets the emissive color of the material used for drawing shapes drawn to the screen. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes.
."
!

shininess: aShine
	"shine float: degree of shininess  "
    
	processing shininess: aShine
    
    "Sets the amount of gloss in the surface of shapes. 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
!

specular: aValue1 value2: aValue2 value3: aValue3 
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing specular: aValue1 value2: aValue2 value3: aValue3 
    
      "Sets the specular color of the materials used for shapes drawn to the screen, which sets the color of hightlights. 
    Specular refers to light which bounces off a surface in a perferred direction (rather than bouncing in all directions like a diffuse light). 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
!

specularColor: aColor
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing specular: aColor
    
       "Sets the specular color of the materials used for shapes drawn to the screen, which sets the color of hightlights. 
    Specular refers to light which bounces off a surface in a perferred direction (rather than bouncing in all directions like a diffuse light). 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
!

specularGray: aGrayValue
	"gray int or float: number specifying value between white and black 
	color color: any value of the color datatype 
	v1 int or float: red or hue value 
	v2 int or float: green or saturation value 
	v3 int or float: green or brightness value "
    
	processing specular: aGrayValue
    
    "Sets the specular color of the materials used for shapes drawn to the screen, which sets the color of hightlights. 
    Specular refers to light which bounces off a surface in a perferred direction (rather than bouncing in all directions like a diffuse light). 
    Used in combination with emissive(), specular(), and shininess() in setting the materal properties of shapes."
! !

!PjsInterface methodsFor: 'processing overrides'!

draw
 
 	self subclassResponsibility
! !

!PjsInterface methodsFor: 'sketch directions'!

directiveCrisp: aBool

	"http://processingjs.org/reference/pjs%20directive/"

	aBool 
    	ifTrue:[ < p.externals.sketch.options.crispLines = true > ]
  		ifFalse:[ < p.externals.sketch.options.crispLines = false > ]
!

directiveFont: aFileName

	"http://processingjs.org/reference/font/"

	  < p.externals.sketch.options.font = aFileName >
!

directivePauseOnBlur: aBool

	"http://processingjs.org/reference/globalKeyEvents/"

	aBool 
    	ifTrue:[ < p.externals.sketch.options.globalKeyEvents  = true > ]
  		ifFalse:[ < p.externals.sketch.options.globalKeyEvents  = false > ]
!

directivePreload: aFileName

	"http://processingjs.org/reference/pjs%20directive/"

	  < p.externals.sketch.options.preload = aFileName >
! !

!PjsInterface methodsFor: 'sketch keyboard'!

isKeyPressed 
    
   "The boolean system variable keyPressed is true if any key is pressed and false if no keys are pressed."

	^ < processing.keyPressed >
!

key 
    
   "The system variable key always contains the value of the most recently pressed key on the keyboard. 
   For detecting the arrow keys, the keyCode variable is set to either UP, DOWN, LEFT, or RIGHT."

	^< processing.key >
!

keyCode 
    
   "The system variable keyCode is used to detect special keys such as 
    the UP, DOWN, LEFT, RIGHT arrow keys and ALT, CONTROL, SHIFT, BACKSPACE, TAB, ENTER, RETURN, ESC, and DELETE. 
     When checking for UP, DOWN, LEFT, RIGHT, ALT, CONTROL, and SHIFT, it's first necessary to check and 
      see if the key is coded. This is done with the conditional ""if(key == CODED) {}"" as shown in the second example. 
      The keys included in the ASCII specification (BACKSPACE, TAB, ENTER, RETURN, ESC, and DELETE) 
   do not require checking to see if they key is coded. If you're making cross-platform projects, 
    note that the ENTER key is commonly used on PCs and Unix and the RETURN key is used instead on Macintosh. 
    Check for both ENTER and RETURN to make sure your program will work for all platforms."

	^< processing.keyCode >
!

keyPressed 
    
   "The keyPressed() function is called once every time a key is pressed. Because of how operating systems handle key repeats, 
    holding down a key will cause multiple calls to keyPressed(), the rate is set by the operating system and how each computer is configured.."

	self subclassResponsibility
!

keyReleased 
    
   "The keyReleased() function is called once every time a key is released."

	self subclassResponsibility
!

keyTyped 
    
   "The keyTyped() function is called once every time a key is pressed, but action keys such as Ctrl, Shift, and 
   Alt are ignored. Because of how operating systems handle key repeats, holding down a key will cause multiple calls to keyTyped(), 
   the rate is set by the operating system and how each computer is configured."

	self subclassResponsibility
! !

!PjsInterface methodsFor: 'sketch mouse'!

isMousePressed 
    
   "Variable storing if a mouse button is pressed. 
    The value of the system variable mousePressed is true if a mouse button is pressed and false if a button is not pressed."

	^ < processing.mousePressed >
!

mouseButton 
    
   "Processing automatically tracks if the mouse button is pressed and which button is pressed. 
    The value of the system variable mouseButton is either LEFT, RIGHT, or CENTER depending on which button is pressed"

	^ processing mouseButton
!

mouseClicked
    
   "The mouseClicked() function is called once after a mouse button has been pressed and then released. "

	 self subclassRespnsubility
!

mouseDragged
    
   "The mouseDragged() function is called once every time the mouse moves and a mouse button is pressed.. "

	 self subclassRespnsubility
!

mouseMoved
    
   "The mouseMoved() function is called every time the mouse moves and a mouse button is not pressed. "

	 self subclassRespnsubility
!

mouseOut
    
   "The mouseOut() function is called when the mouse pointer leaves a sketch. "

	 self subclassRespnsubility
!

mouseOver
    
   "The mouseOver() function is called when the mouse pointer moves over the sketch."

	 self subclassRespnsubility
!

mousePressed 
    
   "The mousePressed() function is called once after every time a mouse button is pressed. 
   The mouseButton variable (see the related reference entry) can be used used to determine which button has been pressed."

	self subclassResponsibility
!

mouseReleased 
    
   "The mouseReleased() function is called every time a mouse button is released."

	self subclassResponsibility
!

mouseX 
    
   "The system variable mouseX always contains the current vertical coordinate of the mouse."

	^ processing mouseX
!

mouseY 
    
   "The system variable mouseY always contains the current vertical coordinate of the mouse."

	^ processing mouseY
!

pmouseX 
    
   "The system variable pmouseX always contains the previous vertical coordinate of the mouse. 
     This is the vertical position of the mouse in the frame previous to the current frame."

	^ processing pmouseX
!

pmouseY 
    
   "The system variable pmouseY always contains the previous vertical coordinate of the mouse. 
     This is the vertical position of the mouse in the frame previous to the current frame."

	^< processing.pmouseY >
! !

!PjsInterface methodsFor: 'sketch structure'!

loop

	"Causes Processing to continuously execute the code within draw(). If noLoop() is called, the code in draw() stops executing."

	processing loop
!

noLoop

	"Causes Processing to continuously execute the code within draw(). If noLoop() is called, the code in draw() stops executing."

	processing noLoop
!

size: aWidth height: aHeight 

	"width int: width of the display window in units of pixels 
	height int: height of the display window in units of pixels "

	processing size: aWidth height: aHeight 
    
    "Defines the dimension of the display window in units of pixels. 
     The size() function must be the first line in setup(). 
     If size() is not called, the default size of the window is 100x100 pixels. 
     The system variables width and height are set by the parameters passed to the size() function. 
	Employ numeric values in the size() statement, and then use the built-in width and height variables 
     inside your program when you need the dimensions of the display window. 
	Rendering graphics requires tradeoffs between speed, accuracy, and general usefulness of the available features. 
    None of the renderers are perfect, so we provide multiple options so that you can decide what tradeoffs make
     the most sense for your project. We'd prefer all of them to have perfect visual accuracy, 
     high performance, and support a wide range of features, but that's simply not possible. 

	Again, the size() method must be the first line of the code (or first item inside setup). 
    Any code that appears before the size() command may run more than once, which can lead to confusing results."
! !

!PjsInterface methodsFor: 'sketch transform'!

applyMatrix:aN00 n01: aN01 n02: aN02 n03: aN03 n04: aN04 n05: aN05 n06: aN06 n07: aN07 n08: aN08 n09: aN09 n10: aN10 n11: aN11 n12: aN12 n13: aN13 n14: aN14 n15: aN15
	
    "n00-n15 float: numbers which define the 4x4 matrix to be multiplied "
    
	processing applyMatrix: aN00 n01: aN01 n02: aN02 n03: aN03 n04: aN04 n05: aN05 n06: aN06 n07: aN07 n08: aN08 n09: aN09 n10: aN10 n11: aN11 n12: aN12 n13: aN13 n14: aN14 n15: aN15
    
    "Multiplies the current matrix by the one specified through the parameters. 
    This is very slow because it will try to calculate the inverse of the transform, so avoid it whenever possible. 
    The equivalent function in OpenGL is glMultMatrix()."
!

popMatrix
	"Pops the current transformation matrix off the matrix stack. 
    Understanding pushing and popping requires understanding the concept of a matrix stack. 
    The pushMatrix() function saves the current coordinate system to the stack and popMatrix() restores
    the prior coordinate system. pushMatrix() and popMatrix() are used in conjuction with the 
    other transformation methods and may be embedded to control the scope of the transformations"
    
	processing popMatrix
!

printMatrix
	"Prints the current matrix to the text window"
    
	processing printMatrix
!

pushMatrix
	"Pushes the current transformation matrix onto the matrix stack. Understanding pushMatrix() and 
    popMatrix() requires understanding the concept of a matrix stack. 
    The pushMatrix() function saves the current coordinate system to the stack and popMatrix() restores
    the prior coordinate system. pushMatrix() and popMatrix() are used in conjuction with the other 
    transformation methods and may be embedded to control the scope of the transformations."
    
	processing pushMatrix
!

resetMatrix
	"Replaces the current matrix with the identity matrix. The equivalent function in OpenGL is glLoadIdentity()."
    
	processing resetMatrix
!

rotate: anAngle
	"angle float: angle of rotation specified in radians or degrees depending on the current angle mode  "
    
	processing rotate: anAngle
    
    "Rotates an object the amount specified by the angle parameter.
    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. 
    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. 
    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. 
    For example, calling rotate(PI/2) and then rotate(PI/2) is the same as rotate(PI). 
    If rotate() is called within the draw(), the transformation is reset when the loop begins again. 
    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above."
!

rotateX: anAngle
	"angle float: angle of rotation specified in radians "
    
	processing rotateX: anAngle
    
    "Rotates a shape around the x-axis the amount specified by the angle parameter. 
    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. 
    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. 
    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. 
    For example, calling rotateX(PI/2) and then rotateX(PI/2) is the same as rotateX(PI). 
    If rotateX() is called within the draw(), the transformation is reset when the loop begins again. 
    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above."
!

rotateY: anAngle
	"angle float: angle of rotation specified in radians "
    
	processing rotateY: anAngle
    
    "Rotates a shape around the y-axis the amount specified by the angle parameter. 
    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. 
    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. 
    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. 
    For example, calling rotateY(PI/2) and then rotateY(PI/2) is the same as rotateY(PI). 
    If rotateY() is called within the draw(), the transformation is reset when the loop begins again. 
    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above."
!

rotateZ: anAngle
	"angle float: angle of rotation specified in radians "
    
	processing rotateZ: anAngle
    
    "Rotates a shape around the z-axis the amount specified by the angle parameter. 
    Angles should be specified in radians (values from 0 to PI*2) or converted to radians with the radians() function. 
    Objects are always rotated around their relative position to the origin and positive numbers rotate objects in a counterclockwise direction. 
    Transformations apply to everything that happens after and subsequent calls to the function accumulates the effect. 
    For example, calling rotateZ(PI/2) and then rotateZ(PI/2) is the same as rotateZ(PI). 
    If rotateZ() is called within the draw(), the transformation is reset when the loop begins again. 
    This function requires passing P3D or OPENGL into the size() parameter as shown in the example above."
!

scaleSize: aSize
	"size float: percentage to scale the object 
	x float: percentage to scale the object in the ""x"" axis 
	y float: percentage to scale the object in the ""y"" axis 
	z float: percentage to scale the object in the ""z"" axis   "
    
	processing scale: aSize
    
    "Increasing and decreasing the size of an object by expanding and contracting vertices. 
    Scale values are specified as decimal percentages. 
    The function call scale(2.0) increases the dimension of a shape by 200%. 
    Objects always scale from their relative origin to the coordinate system. 
    Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. 
    For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), 
    he transformation is reset when the loop begins again. 
    Using this function with the z parameter requires passing P3D or OPENGL into the size() parameter as shown in the example above. 
    This function can be further controlled by pushMatrix() and popMatrix()."
!

scaleX: aX y: aY 
	"size float: percentage to scale the object 
	x float: percentage to scale the object in the ""x"" axis 
	y float: percentage to scale the object in the ""y"" axis 
	z float: percentage to scale the object in the ""z"" axis   "
    
	processing scale: aX y: aY 
    
    "Increasing and decreasing the size of an object by expanding and contracting vertices. 
    Scale values are specified as decimal percentages. 
    The function call scale(2.0) increases the dimension of a shape by 200%. 
    Objects always scale from their relative origin to the coordinate system. 
    Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. 
    For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), 
    he transformation is reset when the loop begins again. 
    Using this function with the z parameter requires passing P3D or OPENGL into the size() parameter as shown in the example above. 
    This function can be further controlled by pushMatrix() and popMatrix()."
!

scaleX: aX y: aY z: aZ
	"size float: percentage to scale the object 
	x float: percentage to scale the object in the ""x"" axis 
	y float: percentage to scale the object in the ""y"" axis 
	z float: percentage to scale the object in the ""z"" axis   "
    
	processing scale: aX y: aY z: aZ
    
    "Increasing and decreasing the size of an object by expanding and contracting vertices. 
    Scale values are specified as decimal percentages. 
    The function call scale(2.0) increases the dimension of a shape by 200%. 
    Objects always scale from their relative origin to the coordinate system. 
    Transformations apply to everything that happens after and subsequent calls to the function multiply the effect. 
    For example, calling scale(2.0) and then scale(1.5) is the same as scale(3.0). If scale() is called within draw(), 
    he transformation is reset when the loop begins again. 
    Using this function with the z parameter requires passing P3D or OPENGL into the size() parameter as shown in the example above. 
    This function can be further controlled by pushMatrix() and popMatrix()."
!

translateX: aX y: aY 
	"x int or float: left/right translation 
	y int or float: up/down translation 
	z int or float: forward/back translation 
  "
    
	processing translate:aX y: aY 
    
    "Specifies an amount to displace objects within the display window. 
    The x parameter specifies left/right translation, the y parameter specifies up/down translation, 
    and the z parameter specifies translations toward/away from the screen. 
    Using this function with the z parameter requires using the P3D or OPENGL parameter in combination with 
    size as shown in the above example. Transformations apply to everything that happens after and subsequent calls to 
    the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). 
    If translate() is called within draw(), the transformation is reset when the loop begins again. 
    This function can be further controlled by the pushMatrix() and popMatrix()."
!

translateX: aX y: aY z: aZ
	"x int or float: left/right translation 
	y int or float: up/down translation 
	z int or float: forward/back translation 
  "
    
	processing translate:aX y: aY z: aZ
    
    "Specifies an amount to displace objects within the display window. 
    The x parameter specifies left/right translation, the y parameter specifies up/down translation, 
    and the z parameter specifies translations toward/away from the screen. 
    Using this function with the z parameter requires using the P3D or OPENGL parameter in combination with 
    size as shown in the above example. Transformations apply to everything that happens after and subsequent calls to 
    the function accumulates the effect. For example, calling translate(50, 0) and then translate(20, 0) is the same as translate(70, 0). 
    If translate() is called within draw(), the transformation is reset when the loop begins again. 
    This function can be further controlled by the pushMatrix() and popMatrix()."
! !

!PjsInterface methodsFor: 'vertex'!

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

!PjsInterface class methodsFor: 'not yet classified'!

new

	self error: 'use on: instead'
!

on: aProcessingInstance

	^super new processing: aProcessingInstance
! !

Object subclass: #PjsObject
	instanceVariableNames: 'pjsInterface'
	package: 'Processing-Core'!

!PjsObject methodsFor: 'not yet classified'!

pjsInterface

	^pjsInterface
!

pjsInterface: aPjsInterface

	pjsInterface := aPjsInterface
! !

!PjsObject class methodsFor: 'not yet classified'!

new

	self error: 'use on: instead'
!

on: aPjsInterface

	 ^super new pjsInterface: aPjsInterface
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

	pjsShape := < new p.Shape() >
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
	instanceVariableNames: 'pjsInterface'
	package: 'Processing-Core'!

!PjsSketch methodsFor: 'accessing'!

pjsInterface

	^pjsInterface
!

pjsInterface: aPjsInterface

	pjsInterface := aPjsInterface
! !

!PjsSketch methodsFor: 'environment'!

cursor
	"MODE either ARROW, CROSS, HAND, MOVE, TEXT, WAIT 
	image PImage: any variable of type PImage 
	x int: the horizonal active spot of the cursor 
	y int: the vertical active spot of the cursor "
    
	 ^self pjsInterface cursor
 
 	"Sets the cursor to a predefined symbol, an image, or turns it on if already hidden. 
    If you are trying to set an image as the cursor, it is recommended to make the size 16x16 or 32x32 pixels. 
    It is not possible to load an image as the cursor if you are exporting your program for the Web. 
    The values for parameters x and y must be less than the dimensions of the image."
! !

!PjsSketch methodsFor: 'initialization'!

activateFunctions

	self pjsInterface override: 'draw' with: [self draw].
!

initialize
 
	|  mProcessingInstance |

	mProcessingInstance := <Processing.instances[0]>.

	pjsInterface := PjsInterface on: mProcessingInstance.
! !

!PjsSketch methodsFor: 'processing'!

size: aWidth height: aHeight 

	self pjsInterface size: aWidth height: aHeight
! !

!PjsSketch class methodsFor: 'not yet classified'!

new

	^self start
!

overrideFunctions

	 < processing.draw = function() {}; >.
!

start

	^super new activateFunctions
!

startWidth: aWidth height: aHeight

	^self new 
         size: aWidth height: aHeight ;
         activateFunctions
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

	pjsVector := <new p.PVector(); >
!

initPjsVector: aPVector

	pjsVector := aPVector
!

initPjsVectorX: aX y: aY 

	pjsVector :=   <new p.PVector(aX, aY) >.
!

initPjsVectorX: x y: y z: z

	pjsVector := <new p.PVector(x, y, z); >
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

multVector: aPjsVector

	pjsVector mult: aPjsVector pjsVector
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

    ^ super new initPjsVector
!

newX: aXFloat y: aYFloat

    ^ super new initPjsVectorX: aXFloat y: aYFloat.
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

