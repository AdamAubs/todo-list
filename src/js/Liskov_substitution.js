// Liskov Substitution
// Making sure sub-classes are compatible with
// each function in its parent class.

//
class Shape {
  area() {}
}

export class Rectangle extends Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  setWidth(width) {
    this.width = width;
  }

  setHeight(height) {
    this.height = height;
  }

  area() {
    return this.width * this.height;
  }
}

// Every square is a rectangle so it make sense for
// it to inherit rectangles properties. However this would violate
// Liskovs principle, because increaseRectangleWidth would not work for square.
// So instead we extent it from a Shape.
export class Square extends Shape {
  setWidth(width) {
    this.width = width;
    this.height = width;
  }

  setHeight(height) {
    this.height = height;
    this.width = height;
  }
}

// This function breaks the Liskov's substitution principle
// because when we pass a Square we will end up increasing
// the width and heigh by 1. In essence, the sub-class, Square
// is not compatible with every function inside Rectangle
export function increaseRectangleWidth(rectangle) {
  rectangle.setWidth(rectangle.width + 1);
}
