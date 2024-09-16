"use strict";
class Person {
    constructor(name, lastName, age, favoriteFoods) {
        this.name = name;
        this.lastName = lastName;
        this.age = age;
        this.favoriteFoods = favoriteFoods;
        this.fullName = "";
        this.setFullName();
        if (this.age >= 18) {
            this.isOlderThanEighteen = true;
        }
        else {
            this.isOlderThanEighteen = false;
        }
    }
    setFullName() {
        this.fullName = `${this.name} ${this.lastName}`;
    }
    showUserData() {
        let favFoods = "";
        this.favoriteFoods.forEach((favoriteFood, index) => {
            if (this.favoriteFoods.length - 1 != index) {
                favFoods += `${favoriteFood}, `;
            }
            else {
                favFoods += favoriteFood;
            }
        });
        console.log(`Full name: ${this.fullName}\nAge: ${this.age}\nFavorite foods: ${favFoods}.`);
    }
}
let person1 = new Person("Leoncio", "Fernandes", 36, ["Camarão", "Pizza", "Macarronada", "Torta de Limão"]);
person1.showUserData();
