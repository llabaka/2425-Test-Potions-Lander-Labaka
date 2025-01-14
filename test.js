const mockIngredients = require('./_mocks_/mockIngredients.js');
const Cauldron = require("./cauldron")
const Ingredients = require("./ingredients")
const Curses = require("./curses")


// TEST ANTIDOTE
describe('Cuando todos los ingredientes llevan el efecto Restore', () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta se creeara el antidoto asociado a la enfermedad', () => {

        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', () => {
            // Arrange
            const ingredient1 = mockIngredients.antidoteIngredient[0];
            const ingredient2 = mockIngredients.antidoteIngredient[1];
            const ingredient3 = mockIngredients.antidoteIngredient[2];
            const ingredient4 = mockIngredients.antidoteIngredient[3];

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
        const ingredient1 = mockIngredients.antidoteIngredient[0];
        const ingredient2 = mockIngredients.antidoteIngredient[1];
        const ingredient3 = mockIngredients.antidoteIngredient[2];
        const ingredient4 = mockIngredients.antidoteIngredient[3];

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

// TEST ANTIDOTE
describe('Cuando todos los ingredientes llevan el efecto Damage', () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta se creeara el poison asociado a la enfermedad', () => {

        it('El nombre debera ser el correspondiente. Poison of + "nombre de la enfermedad"', () => {
            // Arrange
            const ingredient1 = mockIngredients.poisonIngredients[0];
            const ingredient2 = mockIngredients.poisonIngredients[1];

            const fakeIngredients = require('./_mocks_/fake-ingredients.json');
            const fakeCurses = require('./_mocks_/fake-curses.json');

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [ingredient1, ingredient2];

            console.log("ARRAY DE INGREDIENTES 1 Y 2");

            console.log(ingredientsArray[0].effects);
            console.log(ingredientsArray[1].effects);

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);

            console.log("POTION CREATED IN TEST");
            console.log(potion);

            // Assert
            expect(potion).toBeDefined();
            expect(potion.name).toBe('Poison of Wailing Plague');

        });
    });
});

// POISON TEST
describe('Si alguno de los ingredientes no tiene el nombre "Damage"', () => {
    it('No podemos crear un antidoto. El nombre de la poción creada no llevará la palabra "Damage"', () => {

        // Arrange
        const ingredient1 = mockIngredients.failedPoisonIngredients[0];
        const ingredient2 = mockIngredients.failedPoisonIngredients[1];

        const fakeIngredients = require('./_mocks_/fake-ingredients.json');
        const fakeCurses = require('./_mocks_/fake-curses.json');

        const ingredients = Ingredients.load(fakeIngredients).ingredients;
        const curses = Curses.load(fakeCurses).curses;

        const ingredientsArray = [ingredient1, ingredient2];

        console.log("ARRAY DE INGREDIENTES 1 Y 2");
        console.log(ingredientsArray[0].effects);
        console.log(ingredientsArray[1].effects);

        const cauldron = new Cauldron(ingredients, curses);

        // Act
        const potion = cauldron.createPotion(ingredientsArray);

        console.log("POTION CREATED IN TEST");
        console.log(potion);

        // Assert
        expect(potion).toBeDefined();

        expect(potion.name).not.toContain('Poison');
    });
});

// ELIXIR TEST
describe('Cuando el numero de ingredientes es 2-4', () => {

    describe('Cuando los efectos de los ingredientes asociados llevaran los nombres "Boost"', () => {

        describe('Cuando todos los ingredientes tienen el mismo atributo (INT, DEX...)', () => {

            describe('Cuando todos los efectos son tipo least', () => {

                it('El valor resultante del atributo sera la media de los values de los ingredientes. Una vez calculada la media se redondeara al multiplo de 5 inmediatamente inferior.', () => {
                    // Arrange
                    const ingredient1 = mockIngredients.poisonIngredients[0];
                    const ingredient2 = mockIngredients.poisonIngredients[1];

                    const fakeIngredients = require('./_mocks_/fake-ingredients.json');
                    const fakeCurses = require('./_mocks_/fake-curses.json');

                    const ingredients = Ingredients.load(fakeIngredients).ingredients;
                    const curses = Curses.load(fakeCurses).curses;

                    const ingredientsArray = [ingredient1, ingredient2];

                    console.log("ARRAY DE INGREDIENTES 1 Y 2");

                    console.log(ingredientsArray[0].effects);
                    console.log(ingredientsArray[1].effects);

                    const cauldron = new Cauldron(ingredients, curses);

                    // Act
                    const potion = cauldron.createPotion(ingredientsArray);

                    console.log("POTION CREATED IN TEST");
                    console.log(potion);

                    // Assert
                    expect(potion).toBeDefined();
                    expect(potion.name).toBe('Poison of Wailing Plague');

                });
            })
        });
    })


});