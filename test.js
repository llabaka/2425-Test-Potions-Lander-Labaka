const restoreIngredients = require('./_mocks_/antidoteIngredients.js');
import Cauldron from './cauldron.js'
import Ingredients from './ingredients';
import Curses from './curses';

describe('Cuando todos los ingredientes llevan el efecto Restore', async () => {

    describe('Si los ingredientes contienen los efectos necesarios para combatir una enfermedad concreta se creeara el antidoto asociado a la enfermedad', async () => {

        it('El nombre debera ser el correspondiente. Antidote of + "nombre de la enfermedad"', () => {
            // Arrange
            const ingredient1 = restoreIngredients[0];
            const ingredient2 = restoreIngredients[1];

            const fakeIngredients = require('./_mocks_/fake-ingredients.json');
            const fakeCurses = require('./_mocks_/fake-curses.json');

            const ingredients = Ingredients.load(fakeIngredients).ingredients;
            const curses = Curses.load(fakeCurses).curses;

            const ingredientsArray = [ingredient1, ingredient2];

            const cauldron = new Cauldron(ingredients, curses);

            // Act
            const potion = cauldron.createPotion(ingredientsArray);


        });
    });
});