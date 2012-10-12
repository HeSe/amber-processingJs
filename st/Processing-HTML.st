Smalltalk current createPackage: 'Processing-HTML' properties: #{}!
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
    
    
    sketchProc :=( [:processing |  < processing.draw = function() {}; > ] appendToJQuery: 'body' asJQuery ).

	canvas := document getElementById: self canvasId.
		
	< p =  new Processing(canvas, sketchProc); >.
        
      self startPjsSketch
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

