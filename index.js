fetch('https://kaotika-server.fly.dev/ingredients')
    .then(response => response.json())
    .then(data => console.log(data));