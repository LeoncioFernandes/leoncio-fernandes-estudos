interface Person {
    name: string;
    lastName: string;
    age: number;
    isOlderThanEighteen: boolean;
    favoriteFoods: string[];
}

class Person implements Person {
    private fullName: string = "";
    
    constructor(
        public name: string,
        public lastName: string,
        public age: number,
        public favoriteFoods: string[],
    ){
        this.setFullName();
        if(this.age >= 18){
            this.isOlderThanEighteen = true;
        }else{
            this.isOlderThanEighteen = false;
        }
    }
    
    private setFullName(): void {
        this.fullName = `${this.name} ${this.lastName}`;
    }

    public showUserData(): void {
        let favFoods: string = "";
        this.favoriteFoods.forEach((favoriteFood, index) => {
            if(this.favoriteFoods.length - 1 != index){
                favFoods += `${favoriteFood}, `
            }else{
                favFoods += favoriteFood
            }
        });
        console.log(`Full name: ${this.fullName}\nAge: ${this.age}\nFavorite foods: ${favFoods}.`)
    }
    
}

let person1 = new Person("Leoncio", "Fernandes", 36, ["Camarão", "Pizza", "Macarronada", "Torta de Limão"]);
person1.showUserData();