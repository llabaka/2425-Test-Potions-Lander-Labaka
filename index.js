fetch('https://kaotika-server.fly.dev/ingredients')
    .then(response => response.json())
    .then(data => console.log(data));


    const getIngredients = async () => {
        try {
            const response = await fetch('https://kaotika-server.fly.dev/ingredients');
            if (!response.ok) throw new Error('Error en la respuesta de la API');
            
            const jsonData = await response.json();
            //console.log(jsonData);
            
            const ingredients = jsonData.data.map(({_id, name, description, value, effects, image, type}) => ({
                _id,
                name,
                description,
                value,
                effects,
                image,
                type
            }));

            console.log(ingredients);
            
            return ingredients;
            
        }
        catch (error){
            console.log(error);
        }
    };