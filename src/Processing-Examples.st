Smalltalk createPackage: 'Processing-Examples'!
PjsSketch subclass: #ProcessingCircles
	instanceVariableNames: 'radius x y nY nX roty delay'
	package: 'Processing-Examples'!

!ProcessingCircles methodsFor: 'not yet classified'!

activateFunctions

	self pjsInterface override: 'setup' with: [self setup].
	self pjsInterface override: 'draw' with: [self draw].
	self pjsInterface override: 'mouseMoved' with: [self mouseMoved].
    
    self pjsInterface pjsSetup.
!

delay

	^delay
!

delay: aValue

	delay := aValue
!

draw

	self radius: (self radius + (self pjsInterface processing sin: (self pjsInterface frameCount / 4))).
 
    self x: (self  x +((self nX - self x) / self delay)).
    self y: (self y + ((self nY - self y) / self delay)).

     self pjsInterface backgroundGray: 100.

      self pjsInterface fillValue1: 0 value2: 121 value3: 184.

      self pjsInterface strokeGray: 255.

      self pjsInterface ellipseX: self x y: self y width: self radius height: self radius.
!

initialize
	        
    self delay: 16.
	self radius: 50.0. 
	
    self x: 0.
    self y: 0.
    self  nX: 0.
    self  nY: 0.
    
    super initialize.
!

mouseMoved

	self nX: self pjsInterface mouseX.
    self nY: self pjsInterface mouseY.
!

nX

	^nX
!

nX: aValue

	nX := aValue
!

nY

	^nY
!

nY: aValue

	nY := aValue
!

radius

	^radius
!

radius: aValue

	radius := aValue
!

setup

  self pjsInterface strokeWeight: 10.
  self pjsInterface frameRate: 15.
 self x: (self pjsInterface width / 2).
  self y: (self pjsInterface height / 2).
  self nX: self x.
  self nY: self y.
!

x

	^x
!

x: aValue

	x := aValue
!

y

	^y
!

y: aValue

	y := aValue
! !

!ProcessingCircles class methodsFor: 'not yet classified'!

overrideDraw
            < processing.draw = function() {}; >
!

overrideFunctions

	 self overrideSetup.
	 self overrideDraw.
	 self overrideMouseMoved.
!

overrideMouseMoved
                  < processing.mouseMoved = function() {}; >
!

overrideSetup
             < processing.setup = function() {}; >
! !

PjsSketch subclass: #ProcessingClock
	instanceVariableNames: 'centerX centerY maxArmLength'
	package: 'Processing-Examples'!

!ProcessingClock methodsFor: 'not yet classified'!

activateFunctions

	self pjsInterface override: 'setup' with: [self setup].
	self pjsInterface override: 'draw' with: [self draw].
    
    self pjsInterface pjsSetup.
!

draw

  | now hoursPosition minutesPosition secondsPosition |  
  
  self pjsInterface backgroundGray: 224.
  
  now := Date new.
  
  "Moving hours arm by small increments"
   hoursPosition := now hours \\ 12 + now minutes / 60 / 12.
   self drawArm: hoursPosition lengthScale: 0.5 weight: 5.
   
   "Moving minutes arm by small increments"
    minutesPosition := now minutes + now seconds / 60 / 60.
    self drawArm: minutesPosition lengthScale: 0.80 weight: 3.

    "Moving hour arm by second increments"
    secondsPosition := now seconds / 60.
    self drawArm: secondsPosition lengthScale: 0.90 weight: 1.
!

drawArm: aPosition lengthScale: aLengthScale weight: aWeight
	| myDX myDY |
	self  pjsInterface strokeWeight: aWeight.

	myDX := centerX 
			+ ((Math sin: (aPosition * 2 * Math PI))
			* aLengthScale * maxArmLength).
	myDY := centerY 
			- ((Math cos: (aPosition * 2 * Math PI))
			* aLengthScale * maxArmLength).
            
	self pjsInterface lineX1: centerX  y1: centerY x2: myDX y2: myDY
!

setup

   centerX  := self pjsInterface width / 2.
	centerY := self pjsInterface height / 2.
	maxArmLength := Math min: centerX or: centerY.
! !

!ProcessingClock class methodsFor: 'not yet classified'!

overrideDraw
            < processing.draw = function() {}; >
!

overrideFunctions

	 self overrideSetup.
	 self overrideDraw.
!

overrideSetup
             < processing.setup = function() {}; >
! !

PjsSketch subclass: #ProcessingVector
	instanceVariableNames: 'v1 v2'
	package: 'Processing-Examples'!

!ProcessingVector methodsFor: 'accessing'!

v1

	^v1
!

v2

	^v2
! !

!ProcessingVector methodsFor: 'drawing'!

draw

  self pjsInterface ellipseX: v1 x y: v1 y width: 12 height: 12.
  self pjsInterface ellipseX: v2 x y: v2 y width: 12 height: 12.
  v1 multVector: v2.
  self pjsInterface ellipseX: v1 x y: v1 y width: 24 height: 24.
  
  self pjsInterface  noLoop.
! !

!ProcessingVector methodsFor: 'initialization'!

activateFunctions

	self pjsInterface override: 'setup' with: [self setup].
	self pjsInterface override: 'draw' with: [self draw].

    self pjsInterface pjsSetup.
!

setup

  self pjsInterface  smooth.

  v1 :=  PjsVector newX: 5.0 y: 10.0 z: 0.0.
  v2 :=  PjsVector newX: 15.0 y: 8.0 z: 0.0.
! !

!ProcessingVector class methodsFor: 'not yet classified'!

overrideDraw
            < processing.draw = function() {}; >
!

overrideFunctions

	 self overrideSetup.
	 self overrideDraw.
!

overrideSetup
             < processing.setup = function() {}; >
! !

