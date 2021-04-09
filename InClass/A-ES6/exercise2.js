class Polygon {
  constructor(names,height, width) {
    this.names = names;
    this.height = height;
    this.width = width;
    
  }
  get area() {return this.width * this.height;}
  sayName() {
    console.log('Hi, I am a ' + this.names);
  }
}

let p = new Polygon('Polygon', 300, 400);
p.sayName();
console.log('The area of this polygon is ' + p.area);


class Rectangle extends Polygon {
  constructor(height, width) {
    super( "Rectangle",height, width);
    this.sides = 4;
    this.width = width;
    this.height = height;
    
    //this.area = height * width;
  }
 
  
  
   sayName() {
    console.log('Hi I am a polygon and my name is ' + this.names + '.');
  } 
}

let r = new Rectangle(50, 60);
r.sayName();
r.area = 3;
console.log('The area of this polygon is ' + r.area);

//Create 2 new classes that extend from polygon: triangle and circle and log their names and areas

class triangle extends Polygon {
  constructor(height, width) {
    super( "triangle",height, width);
    this.sides = 3;
    this.width = width;
    this.height = height;
} 
get area() {return this.width * this.height / 2}
}

let T = new triangle (50, 60);
T.sayName();
T.area = 3;
console.log('The area of this triangle is ' + T.area);

class circle extends Polygon  {
  constructor (radius) {
    super("circle",radius, radius)
    this.radius = radius
  }
  get area(){ return Math.pow(this.radius,2 ) * Math.PI }

}
let C = new circle (50);
C.sayName();
console.log('The area of this circle is ' + C.area)

class pentagon extends Polygon {
  constructor(height, width) {
    super("pentagon",width,height)
    this.sides = 5
    this.height = height
    this.height =height
  }
  get area( ) {
    return  (1/ 2 * this.width * this.height / 2) * 5
  }
  
}

let P = new pentagon (10,20);
P.sayName ();
console.log('The area of this pentagon is ' + P.area)




