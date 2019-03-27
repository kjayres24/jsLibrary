class User {
    constructor(first, last, e) {
        this.f = first;
        this.l = last;
        this.email = e;
    }
}

var userOne = new User("Paul", "O'Connor", "poconnor@elevenfifty.org");
console.log(userOne.first);
console.log(userOne.f);
console.log(userOne.l);
console.log(userOne);

class Car {
    constructor(make, model, year) {
        this.ma = make;
        this.mo = model;
        this.ye = year;
    }
}

var myCar = new Car("Jeep", "Grand Cherokee", "2017");
console.log(myCar.make);
console.log(myCar.ma);
console.log(myCar.mo);
console.log(myCar.ye);
console.log(myCar);