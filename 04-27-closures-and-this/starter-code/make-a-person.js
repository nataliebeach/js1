
var car = (function(kind) {
  var wheelCount = 4;
  var gas = false;

    // a closure
  var start = function() {
    if (gas) {
      console.log('started with ' + wheelCount + ' wheels - vroom, vroom baby! Oh wait, I need gas :( help me I\'m poor');
    } else {
      console.log ('error, no gas')
    }
  };

  var fillGas = function () {
    return gas = true;
  }

  return {
    make: kind,
    wheels: wheelCount,
    startEngine: start,
    fillGas: fillGas

  };
})('Tesla');

// => Tesla
console.log(car.make);

// => started with 4 wheels.
car.startEngine();
car.fillGas();
// console.log(gas);
car.startEngine();