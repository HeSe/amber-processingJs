Smalltalk current createPackage: 'Processing-Examples' properties: #{}!
PjsSketch subclass: #ProcessingCircles
	instanceVariableNames: 'radius x y nY nX roty delay'
	package: 'Processing-Examples'!

!ProcessingCircles methodsFor: 'not yet classified'!

delay

	^delay
!

delay: aValue

	delay := aValue
!

draw

	self radius: (self radius + (self processing sin: (self frameCount / 4))).
 
    self x: (self  x +((self nX - self x) / self delay)).
    self y: (self y + ((self nY - self y) / self delay)).

     self  backgroundGray: 100.

      self fillValue1: 0 value2: 121 value3: 184.

      self  strokeGray: 255.

      self  ellipseX: self x y: self y width: self radius height: self radius.
!

initalizeFunctions

	self processing at: 'setup' put: [self setup].
	self processing at: 'draw' put: [self draw].
	self processing at: 'mouseMoved' put: [self mouseMoved].
    
    self processing setup.
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

	self nX: self mouseX.
    self nY: self mouseY.
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

  self strokeWeight: 10.
  self frameRate: 15.
 self x: (self width / 2).
  self y: (self height / 2).
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

overrideFunctions

	 < processing.setup = function() {}; >.
	 < processing.draw = function() {}; >.
      < processing.mouseMoved = function() {}; >.
! !

PjsSketch subclass: #ProcessingClock
	instanceVariableNames: 'centerX centerY maxArmLength'
	package: 'Processing-Examples'!

!ProcessingClock methodsFor: 'not yet classified'!

draw

  | now hoursPosition minutesPosition secondsPosition |  
  
  self backgroundGray: 224.
  
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
	self  strokeWeight: aWeight.

	myDX := centerX 
			+ ((Math sin: (aPosition * 2 * Math PI))
			* aLengthScale * maxArmLength).
	myDY := centerY 
			- ((Math cos: (aPosition * 2 * Math PI))
			* aLengthScale * maxArmLength).
            
	self lineX1: centerX  y1: centerY x2: myDX y2: myDY
!

initialize

	super initialize.

	centerX := self  width / 2.
	centerY := self height / 2.
	maxArmLength := Math min: centerX or: centerY.
! !

