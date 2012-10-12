Smalltalk current createPackage: 'Processing-Examples' properties: #{}!
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

