import Ingredient from "./ingredient.tsx";

class Ingredients {

    ingredients: Ingredient[];

    constructor(ingredients: any){
        this.ingredients = ingredients;
    }

    static load(data: any) {
        return new Ingredients(data.data.map(Ingredient.from))
    }

}

module.exports = Ingredients;