

// Lesson for classes
class Car{
    constructor(){
        this.wheels = 4;
        this.type = 'Hatchback'
    }
}

class Ford extends Car {
    constructor(){
        super()
        this.windows = 'Tinted';
    }
}



const car = new Car();
const ford = new Ford();

console.log(ford.wheels)

