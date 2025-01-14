const restoreIngredients = require('./_mocks_/antidoteIngredients.js');
const Cauldron = require("./cauldron")
const Ingredients = require("./ingredients")
const Curses = require("./curses")


// TEST ANTIDOTE
describe('Cuando todos los ingredientes llevan el efecto Restore', () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta se creeara el antidoto asociado a la enfermedad', () => {

        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', () => {
            // Arrange
            const ingredient1 = restoreIngredients[0];
            const ingredient2 = restoreIngredients[1];
            const ingredient3 = restoreIngredients[2];
            const ingredient4 = restoreIngredients[3];

            const fakeIngredients = require('./_mocks_/fake-ingredients.json');
            const fakeCurses = require('./_mocks_/fake-curses.json');

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [ingredient1, ingredient2, ingredient3, ingredient4];

            console.log("ARRAY DE INGREDIENTES 1 Y 2");

            console.log(ingredientsArray[0].effects);
            console.log(ingredientsArray[1].effects);
            console.log(ingredientsArray[2].effects);
            console.log(ingredientsArray[3].effects);

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);

            console.log("POTION CREATED IN TEST");
            console.log(potion);

            // Assert
            expect(potion).toBeDefined();
            expect(potion.name).toBe('Antidote of Shadowblight');
            expect(potion.effects).toContain('Restore');

        });
        it('Los atributos tendran el valor que aparece en la enfermedad pero cambiado de signo o, en su defecto el rango de valores que se muestra en la tabla de creacion de pociones', () => {

        })
    });
});

describe('Si alguno de los ingredientes no tiene el nombre "Restore"', () => {
    it('No podemos crear un antidoto. El nombre de la poción creada no llevará la palabra "Antidote"', () => {

        // Arrange
        const ingredient1 = restoreIngredients[0];
        const ingredient2 = restoreIngredients[1];
        const ingredient3 = restoreIngredients[2];
        const ingredient4 = restoreIngredients[3];

        const fakeIngredients = require('./_mocks_/fake-ingredients.json');
        const fakeCurses = require('./_mocks_/fake-curses.json');

        const ingredients = Ingredients.load(fakeIngredients).ingredients;
        const curses = Curses.load(fakeCurses).curses;

        const ingredientsArray = [ingredient1, ingredient2, ingredient3, ingredient4];

        console.log("ARRAY DE INGREDIENTES 1 Y 2");
        console.log(ingredientsArray[0].effects);
        console.log(ingredientsArray[1].effects);
        console.log(ingredientsArray[2].effects);
        console.log(ingredientsArray[3].effects);

        const cauldron = new Cauldron(ingredients, curses);

        // Act
        const potion = cauldron.createPotion(ingredientsArray);

        console.log("POTION CREATED IN TEST");
        console.log(potion);

        // Assert
        expect(potion).toBeDefined();

        expect(potion.name).not.toContain('Antidote');
    });
});

// POISON

