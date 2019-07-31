console.log('*=*=*=*CLASSES******LAB*=*=*=*=*');
console.log('===============question 1=========================');
class Person {
  constructor (first, middle, last) {
    this.first = first;
    this.middle = middle;
    this.last = last;
  }
  name() {
    console.log(this.first)
  }
  fullName () {
  console.log(`${this.first} ${this.middle} ${this.last}`)
  }
 }
 let shawn = new Person('Shawn', 'Quran', 'Flynn')
 let alicia = new Person ('Alicia', 'Francine', 'Flynn')
 shawn.name();
 alicia.fullName ();

 console.log('==================question 2======================');
 class Book {
   constructor (title, author, rating) {
     this.title = title;
     this.author = author;
     this.rating = rating
   }
   isGood () {
     console.log(`${this.rating}` >= 7)
   }
 }
 let book1 = new Book('silence of the lambs', 'Thomas Harris', '9');
 let book2 = new Book('kiss the girls', 'james patterson', '5');
 let book3 = new Book('Hamlet', 'Will Shakespear', '10');
 book1.isGood();
 book2.isGood();
 book3.isGood();
 console.log('=================question 3===========================');
 class Dog {
   constructor (name, breed, mood, hungry) {
     this.name = name;
     this.breed = breed;
     this.mood = mood;
     this.hungry = hungry;
   }
   playFetch () {
     console.log(`${this.hungry}`=== true)
     console.log(`${this.mood} playful`)
   }
   feed () {
     console.log(`${this.hungry} Woof` === false)
   }
   toString () {
     console.log(`${this.name} ${this.breed} ${this.mood} ${this.hungry}`)
   }
 }
 let dog1 = new Dog('rollie', 'Pug', 'fun', true);
 let dog2 = new Dog('Bingo', 'Beagle', 'calm', false);
 console.log('======a & b=====')
 dog1.playFetch();
 dog2.playFetch();
 console.log('=====c=====')
 dog1.feed();
 dog2.feed();
 console.log('======d=====')
 dog1.toString();
 dog2.toString();
 console.log('======================question 4=====================')
 class Celsius {
   constructor(celsius, fahrenheit, kelvin) {
    this.celsius = celsius;

   }
   fahrenheitTemp() {
     return this.celsius * 1.8 +32;
   }

   kelvinTemp() {
     return this.celsius + 273;
   }


 isBelowFreezing() {
  if(this.celcius < 0) {
    return true;
  } else {
    return false;
  }
}
}
let outSide = new Celsius(0);
console.log('c is =', outSide.celsius)
console.log('celsius to fahrenheit is equal to', outSide.fahrenheitTemp());
console.log('kelvin is = ', outSide.kelvinTemp);
console.log(`is the temperature below frezzing? ${outSide.isBelowFreezing()}`);
 console.log('===================question 5============================')
 class Movie {
   constructor(name, year, genre, cast, description) {
     this.name = name;
     this.year = year;
     this.genre = genre;
     this.cast = cast;
     this.description = description;

   }
   blurb () {
     console.log(`${this.name} came out ${this.year} it was a ${this.genre} starring ${this.cast}
        and it was ${this.description}`);
   }
 }
 let movie1 = new Movie('Coming to America', '1984', 'comedy', 'Eddie and Arsenio', 'funny AF!');
 let movie2 = new Movie('Harlem Knights', '1986', 'comedy', 'Eddie and Richard', 'super funny!');
movie1.blurb();
movie2.blurb();
console.log('=========================question 6======================')

class Vector {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }
  plus(x,y) {
    return x + y
  }
  minus(x, y) {
    return x - y
  }
static distance(a, b) {
  const dx = a.x - b.x;
    const dy = a.y - b.y;

    return Math.hypot(dx, dy);
  }

  }
let v1 = new Vector(1, 2)
let v2 = new Vector(2, 3)
let v3 = new Vector(3, 4)
console.log(v1.plus(v2));
console.log(v1.minus(v2));
console.log('distance')
console.log(Vector.distance(v1, v2));
console.log('===================question 7============================')
class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model
  }
  numberOfWheels () {
    console.log(`${this.make} has 4 wheels`);
  }
}
class Bike {
  constructor(gears, hasBell) {
    this.gears = gears;
    this.hasBell = hasBell;
  }
  numberOfWheels () {
    console.log('has 2 wheels')
  }
}
let car1 = new Car('Dodge', 'Challenger')
let car2 = new Car('Benz', '600')
let bike1 = new Bike('2 gears', true)
let bike2 = new Bike('1 gear', false)
console.log('question 7c, an instance wont run the function for both')
car1.numberOfWheels();
car2.numberOfWheels();
bike1.numberOfWheels();
bike2.numberOfWheels();
console.log('============================question8====================')
class Vehicle {
  constructor(color, name) {
    this.color = color;
    this.name = name;

  }

  makeSound() {
    console.log('WHHOOSSSH')
  }
  description() {
    console.log(`${this.color} ${this.name}`)
  }

}

let bike3 = new Vehicle('green','Bikey McBikeface')
let bike4 = new Vehicle('red', 'Carry McCarface')
bike3.makeSound();
bike4.makeSound();
