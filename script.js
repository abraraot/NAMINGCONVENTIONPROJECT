let request = new XMLHttpRequest();
let url = "https://pokeapi.co/api/v2/pokemon?limit=100";
request.open("GET", url, true);
request.onload = function(){
    let data = JSON.parse(this.response);
    let pokemonCounter = 0;
    if (request.status >= 200 && request.status < 400){
        data.results.forEach(pokemon => {         
            if(pokemonCounter % 4 == 0){
                row = document.createElement('div');
                row.className = 'row';
                //pokeList.appendChild(row);
                $("#pokeList").append(row);
            }
            let card = document.createElement('div'); //creates a new card (learn syntax)
            card.className = 'col-3 pokemon'; //Set classname for new element

            let pokemonRequest = new XMLHttpRequest();

            let pokemonUrl = pokemon.url;//Each pokemon will have its own url


            pokemonRequest.open('GET', pokemonUrl, true);
            
            pokemonRequest.onload = function(){
                let pokemonData = JSON.parse(this.response);
            
                let p = document.createElement('p')
                p.textContent = pokemon.name;           
                let pokemonImage = document.createElement('img');
                pokemonImage.src = pokemonData.sprites.front_default;

                card.onclick = function(){
                   pokemonImage.src = pokemonData.sprites.back_shiny;
                }  


                card.appendChild(p);
                card.appendChild(pokemonImage);
                row.appendChild(card);
            }
            
            pokemonRequest.send();
            pokemonCounter++;
        });
    }
};

request.send();

 