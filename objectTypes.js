var OnScreenObject = function(object, width, height, posX, posY, id, isMovable) {
	this.object = object;
	this.width = width;
	this.height = height;
	this.posX = posX;
	this.posY = posY;
	this.id = id;
	this.isMoveable = isMovable;

	// Object getters
	this.getObject = function() {
		return this.object;
	}
	this.getWidth = function() {
		return this.width;
	}
	this.getHeight = function() {
		return this.height;
	}
	this.getPosX = function() {
		return this.posX;
	}
	this.getPosY = function() {
		return this.posY;
	}
	this.getId = function() {
		return this.id;
	}
	this.getIsMovable = function() {
		return this.isMovable;
	}

	// Object setters
	this.setObject = function(object) {
		this.object = object;
	}
	this.setWidth = function(width) {
		this.width = width;
	}
	this.setHeight = function(height) {
		this.height = height;
	}
	this.setPosX = function(posX) {
		this.posX = posX;
	}
	this.setPosY = function(posY) {
		this.posY = posY;
	}
	this.setId = function(id) {
		this.id = id;
	}
	this.setIsMovable = function(isMovable) {
		this.isMovable = isMovable;
	}

	// Object methods
}