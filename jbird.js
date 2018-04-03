function move(object, xPos, yPos) {
	try {
		object.setAttribute("style", "left: " + xPos + "; top: " + yPos + ";");
		return true;
	} catch (err) {
		console.log("ERROR: " + err);
		return false;
	}
}

function detectCollision(objects, prePosX, prePosY, compareTo) {
	for(var i=0; i<objects.length; i++) {
		try {
			if(objects[i].id != compareTo.id) {
				console.log("comparing to: " + objects[i].id + "\nprePosX: " + prePosX + "\nprePosY: " + prePosY + "\nObject Position Y: " + objects[i].posY +
					"\nObject Position X: " + objects[i].posX + "\nObject height: " + compareTo.height + "\nObject Width: " + objects[i].width);
				if((prePosY + compareTo.height >= objects[i].posY && prePosY + compareTo.height <= objects[i].posY + objects[i].height && 
					prePosX + compareTo.width >= objects[i].posX && prePosX + compareTo.width <= objects[i].posX + objects[i].width) ||
					(prePosY >= objects[i].posY && prePosY <= objects[i].posY + objects[i].height &&
					prePosX >= objects[i].posX && prePosX <= objects[i].posX + objects[i].width) ||
					(prePosY >= objects[i].posY && prePosY <= objects[i].posY + objects[i].height &&
					prePosX + compareTo.width >= objects[i].posX && prePosX + compareTo.width <= objects[i].posX + objects[i].width) ||
					(prePosY + compareTo.height >= objects[i].posY && prePosY + compareTo.height <= objects[i].posY + objects[i].height &&
					prePosX >= objects[i].posX && prePosX <= objects[i].posX + objects[i].width)) {
					console.log("COLLISION DETECTED WITH: " + objects[i].id);
					return true;
				}
			}
		} catch (err) {
			console.log("ERROR: " + err);
		}
	}
	return false;
}

