

// for vehicle

function Vehicle(brand, model, speed,fuelType){
    this.brand = brand;
    this.model = model;
    this.speed = speed;
    this.fuelType = fuelType;

}

Vehicle.prototype.accelerate = function(){
    this.speed += 10
    console.log("Vehicle is accelerating. Current speed: " + " "+ this.speed + "km/h");
}

Vehicle.prototype.brake = function(){
    this.speed -= 10
    console.log("Vehicle is braking. Current speed: " +" "+ this.speed + "km/h");
}

Vehicle.prototype.refuel = function(){
    console.log("Vehicle is refueling.");

}

// var v1 = new Vehicle("tata","harrier",230,"petrol")
// console.log(v1)
// v1.accelerate()
// v1.brake()
// v1.refuel()


// for car

function Car(brand, model, speed,fuelType,numberOfWheels){
    Vehicle.call(this,brand, model, speed,fuelType)
    this.numberOfWheels = numberOfWheels;

}

Object.setPrototypeOf(Car.prototype,Vehicle.prototype)

Car.prototype.honk = function(){
    console.log("Honk honk!");
}

// var c1 = new Car("tata","harrier",230,"petrol",4)
// console.log(c1)
// c1.accelerate()
// c1.brake()
// c1.refuel()
// c1.honk()


// for Aeroplane

function Airplane(brand, model, speed, fuelType, numberOfEngines, hasLandingGear){
 
    Vehicle.call(this,brand, model, speed, fuelType)
    this.numberOfEngines = numberOfEngines;
    this.hasLandingGear = hasLandingGear;

}

Object.setPrototypeOf(Airplane.prototype,Vehicle.prototype)

Airplane.prototype.takeOff = function(){
    console.log("Airplane is taking off.");
}



var myAirplane = new Airplane("Boeing", "747", 0, "jet fuel", 4, true);
// console.log(myAirplane)

var myCar = new Car("Toyota", "Camry", 0, "gasoline", 4);
// console.log(myCar)



// car

myCar.accelerate()
myCar.brake()
myCar.refuel()
myCar.honk()



// aeroplane
myAirplane.accelerate();
myAirplane.brake();
myAirplane.refuel();
myAirplane.takeOff();
