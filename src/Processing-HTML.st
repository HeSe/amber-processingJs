Smalltalk createPackage: 'Processing-HTML'!
Widget subclass: #PjsSketchContainer
	instanceVariableNames: 'p width height sketchClass canvasId pjsSketch'
	package: 'Processing-HTML'!

!PjsSketchContainer methodsFor: 'not yet classified'!

canvasId	

	canvasId isNil ifTrue:[canvasId := 'canvas1'].

	^canvasId
!

canvasId: anId		

	canvasId := anId
!

height		

	^height
!

height: aHInt

	height := aHInt
!

initProcessingInstance: canvas withProc: sketchProc

     < p =  new Processing(canvas, sketchProc); >
!

p		

	^p
!

pjsSketch		

	^pjsSketch
!

renderOn: html

	| canvas  sketchProc |
    
    canvas := html canvas.
    canvas width: self width.
    canvas height: self height.
    canvas id: self canvasId.
    
    sketchProc :=( [ :processing | self resetSetupFunction: processing.
													 self resetDrawFunction: processing ] appendToJQuery: 'body' asJQuery ).

	canvas := document getElementById: self canvasId.
		
	self initProcessingInstance: canvas withProc: sketchProc.
        
    self startPjsSketch
!

resetDrawFunction
 	< Processing.draw = function() {}; >
!

resetDrawFunction: aProcessing
 	< aProcessing.draw = function() {}; >
!

resetSetupFunction
        < processing.setup = function() {}; >
!

resetSetupFunction: aProcessing
        < aProcessing.setup = function() {}; >
!

sketchClass

	^sketchClass
!

sketchClass: aPjsSketchSubClass		

	sketchClass := aPjsSketchSubClass
!

startPjsSketch		

	pjsSketch := (Smalltalk current at: self sketchClass)  startWidth: self width height: self height
!

width		

	^width
!

width: aWInt		

	width := aWInt
! !

!PjsSketchContainer class methodsFor: 'not yet classified'!

newWidth: aWInt height: aHInt sketchClass: aSketchClass

	^self new 
    	width: aWInt; 
    	height: aHInt; 
        sketchClass:aSketchClass ;
          appendToJQuery: 'body' asJQuery
!

newWidth: aWInt height: aHInt sketchClass: aSketchClass canvasId: anId

	^self new 
    	width: aWInt; 
    	height: aHInt; 
        sketchClass:aSketchClass; 
        canvasId: anId ;
        appendToJQuery: 'body' asJQuery
! !

