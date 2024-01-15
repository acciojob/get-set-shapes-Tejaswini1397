//complete this code
class Rectangle {
	 constructor(width, height) {
        this._width = width;
        this._height = height;
    }

    get width() {
        return this._width;
    }

    get height() {
        return this._height;
    }

    get getArea() {
        return this._width * this._height;
    }
}

class Square extends Animal {
	 constructor(sideLength) {
        super(sideLength, sideLength);
    }

    getPerimeter() {
        return 4 * this.width;
    }
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
