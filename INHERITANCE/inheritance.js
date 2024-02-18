const Automobile = {
  
    drive: function() {
      console.log('Vroom Vroom!');
    },
  
    fuel:function(){
    console.log("Petrol")
    },
  
    Wheel:function(){
    console.log("4 wheel avaliable")
    }
  
    
  };
  
  
  
  // object added
  
  var Creatcar = Object.create(Automobile)
  Creatcar.make = "Toyota"
  Creatcar.model = "Corolla"
  console.log(Creatcar.make)
  console.log(Creatcar.model)
  Creatcar.drive()
  Creatcar.fuel()
  Creatcar.Wheel()
  
  
  
  console.log()
  
  
//   // constructer part
  
 function Automobile2(make,model){
    this.make = make;
    this.model = model
  }
  
  Automobile2.prototype.drive = function(){
    console.log("Vroom Vroom!")
  }
  
  Automobile2.prototype.fuel = function(){
    console.log("Petrol")
  }
  
  Automobile2.prototype.Wheel = function(){
    console.log("4 wheel avaliable")
  
  }
  
  
  
  
  var c2 = new Automobile2("Tata","Harrier")
  console.log(c2.make)
  console.log(c2.model)
  c2.drive()
  c2.fuel()
  c2.Wheel()
  