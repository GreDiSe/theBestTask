const menu = [
    {name: 'SIZE_SMALL' ,price: 50, calories: 20},
    {name: 'SIZE_LARGE', price: 100, calories: 40 },
    {name: 'STUFFING_CHEESE', price: 10, calories: 20},
    {name: 'STUFFING_SALAD', price: 20, calories: 5},
    {name: 'STUFFING_POTATO', price: 15, calories: 10},
    {name: 'TOPPING_MAYO', price: 15, calories: 0},
    {name: 'TOPPING_SPICE', price: 20, calories: 5}];

}

function Hamburger(size, stuffing) {
    if(size === undefined) throw new HamburgerException("Неуказан бургер");
    else if(!stuffing) throw new HamburgerException("Неуказана начинка");
    if(size !== Hamburger.SIZE_SMALL && size !== Hamburger.SIZE_LARGE){
        throw new HamburgerException("Некоректные параметры бургера");
    }
    else if(stuffing !== Hamburger.STUFFING_CHEESE && stuffing !== Hamburger.STUFFING_SALAD && stuffing !== Hamburger.STUFFING_POTATO){
        throw new HamburgerException("Некоректные параметры начинки");
    }

    this.size = size;
    this.stuffing = stuffing;
    this.topping = [];

    this.price = menu[size].price + menu[stuffing].price;
    this.calories = menu[size].calories + menu[stuffing].calories
}
/* Размеры, виды начинок и добавок */
Hamburger.SIZE_SMALL = 0;
Hamburger.SIZE_LARGE = 1;
Hamburger.STUFFING_CHEESE = 2;
Hamburger.STUFFING_SALAD = 3;
Hamburger.STUFFING_POTATO = 4;
Hamburger.TOPPING_MAYO = 5;
Hamburger.TOPPING_SPICE = 6;

Hamburger.prototype.addTopping = function (topping){
    if(topping !== Hamburger.TOPPING_MAYO && topping !== Hamburger.TOPPING_SPICE){
        throw new HamburgerException("Некоректные параметры начинки")
    }
    if(this.topping.length === 0){
        this.topping[this.topping.length] = topping;
        this.price += menu[topping].price;
        this.calories += menu[topping].calories;
    }
    else if(this.topping.length === 1 && this.topping[0] !== topping) {
        this.topping[this.topping.length] = topping;
        this.price += menu[topping].price;
        this.calories += menu[topping].calories;
    }
    else throw new HamburgerException("Невозможно добавить начинку");
};

Hamburger.prototype.removeTopping = function (topping){
    if(this.topping[0] === topping){
        topping.splice(0,1);
        this.price -= menu[topping].price;
        this.calories -= menu[topping].calories;
    }
    else if(this.topping[1] === topping){
        this.topping.length = 1;
        this.price -= menu[topping].price;
        this.calories -= menu[topping].calories;
    }
    else throw new HamburgerException("Невозможно удалить несуществующую начинку");
};

Hamburger.prototype.getToppings = function (){
    let result = [];
    for(let i = 0; i < this.topping.length; i++){
        result[i] = menu[this.topping[i]].name
    }
    return result;
};

Hamburger.prototype.getSize = function (){
    return menu[this.size].name;
};

Hamburger.prototype.getStuffing = function (){
    return menu[this.stuffing].name;
};

Hamburger.prototype.calculatePrice = function (){
    return this.price;
};

Hamburger.prototype.calculateCalories = function (){
    return this.calories;
};

function HamburgerException (property) {
    Error.call(this, property) ;
    this.name = "PropertyError";

    this.property = property;
    this.message = "Ошибка в свойстве " + property;
    this.stack = (new Error()).stack;
}
HamburgerException.prototype = Object.create(Error.prototype);

// маленький гамбургер с начинкой из сыра
let hamburger = new Hamburger(Hamburger.SIZE_SMALL, Hamburger.STUFFING_CHEESE);

hamburger.addTopping(Hamburger.TOPPING_MAYO); //Добавили начинку
console.log("Calories:", hamburger.calculateCalories()); // 40
console.log("Price:", hamburger.calculatePrice()); // 75

hamburger.addTopping(Hamburger.TOPPING_SPICE); //Добавили еще начинку
console.log("Calories:", hamburger.calculateCalories()); // 45
console.log("Price with sauce:", hamburger.calculatePrice()); // 95

console.log("Is hamburger large:", hamburger.getSize() === Hamburger.SIZE_LARGE); // -> false
hamburger.removeTopping(Hamburger.TOPPING_SPICE); //Удалили начинку

console.log("Calories:", hamburger.calculateCalories()); // 40
console.log("Price with sauce:", hamburger.calculatePrice()); // 75

console.log("Have toppings:", hamburger.getToppings().length); // 1