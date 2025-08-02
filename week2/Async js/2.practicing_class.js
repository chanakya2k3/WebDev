class Rectangle{
    constructor(width,height){
        this.width = width;
        this.height = height;
    }
    getArea(){
        return this.width*this.height;
    }
    getPerimeter(){
        return 2*(this.width+this.height);
    }
}
const react = new Rectangle(10,5);
console.log(react.getArea());
console.log(react.getPerimeter());


// another way to do the same above things without using class

let rect={
    width:10,
    height:6,
}

function area(ret){
    return ret.width * ret.height;
}

console.log(area(rect));

rect = 5
console.log(rect);

//checkout inheritance in javascript

//Map

const map = new Map();
map.set("Chanakya","Male");
map.set("Shivaji","Male");
console.log(map.get("Chanakya"));