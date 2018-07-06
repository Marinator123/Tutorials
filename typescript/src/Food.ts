interface Food {
    name: string;
    calories: number;

    getName() : string;
}

class Burger implements Food {
    name: string;
    calories: number;

    constructor(name : string, calories: number) {
        this.name = name;
        this.calories = calories;
    }

    getName() : string {
        return this.name;
    }
}

export default Burger;