// How to build a constructor
var animal = function(raining, noise) {
    this.raining = raining;
    this.noise = noise;
    this.makeNoise = function(){
        console.log(this.noise)
    };
};

var dogs = new animal(true, "Woof!");
var cats = new animal(false, "Meow!");
var dragon = new animal(true, "Rawr!");





// "OLD" way of making objects, repetitive, time-consuming
//
// function makeNoise() {
//     if (this.raining) {
//         console.log(this.noise);
//     }
// };

// var dogs = {
//     raining: true,
//     noise: "Woof!",
//     makeNoise: function() {
//         if (this.raining) {
//             console.log(this.noise);
//         };
//     }
// };


// var cats = {
//     raining: false,
//     noise: "Meow!",
//     makeNoise: function() {
//         if (this.raining) {
//             console.log(this.noise);
//         };
//     }
// };


// function massHysteria() {
//     if ((dogs.raining) && (cats.raining)) {
//         console.log("DOGS AND CATS LIVING TOGETHER! MASS HYSTERIA!");
//     };
// }

// massHysteria();