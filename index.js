"use strict"

const d = document

const input_todo = d.getElementById('input_todo')
const btn_add = d.getElementById('buscar')

const url = 'https://pokeapi.co/api/v2/pokemon?limit=100&offset=0'

const getData = () => {
    fetch(url)
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.results.forEach(element => {
                fetch(element.url)
                    .then((response) => {
                        return response.json()
                            .then((response) => {
                                console.log(response);
                                // const sprite = document.createElement('img')
                                // sprite.src = response.sprites.front_default
                                // const info = document.createElement('div')
                                // info.innerHTML = response.height

                                const card = document.createElement("div");
                                card.classList.add("col-sm-2", "d-flex", "flex-column", "articulo", "p-1");
                                card.innerHTML = `
                                <img class="border border-danger border-4 rounded-4" src="${response.sprites.front_default}">
                                <h1> Name:${response.name}</h2> 
                                <h2> height:${response.height}</h2> 
        
                                `;
                                
                                // pokemon_todo.appendChild(sprite);
                                pokemon_todo.appendChild(card)
                                
                            })
                    })
                    .catch((error) => {
                        console.log(error);
                    })
            });
        })
        .catch((error) => {
            console.error(error)
        })
}

getData()
