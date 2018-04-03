COLLISION DETECTION

Summary:

    This was a small program created to play around with the idea of dynamic collision detection using vanilla Javascript. You can move the box around using the Arrow Keys. You can stop the box from moving entirely by pressing the Space Bar.

Controls:

UP - Start the box moving up
DOWN - Start the box moving down
LEFT - Start the box moving left
RIGHT - Start the box moving right
SPACE - Stop the box from moving

Other Notes:

    You can create obsticles for the box by editing the code in the colDetect.html file. Just follow the format used for the 3 pre-existing walls and then push them to the object list.

    The OnScreenObject class takes in the following parameters:
	(Object, width, height, posX, posY, id, isMoveable)
	    - Object is a direct reference to the element drawn to the screen
	    - width is measured in pixels
	    - height is measured in pixels
	    - posX is measured in pixels from the left
	    - posY is measured in pixels from the top
	    - id is an identifier for the script to keep track of what is colliding
	    - isMoveable tells the script if you would like the object to move when a button is pressed.