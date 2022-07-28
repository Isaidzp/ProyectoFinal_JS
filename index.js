"use strict"

const input_todo = document.getElementById('input_todo')
const pokemon_button = document.getElementById('pokemon_indiv')

const url = 'https://pokeapi.co/api/v2/pokemon?limit=102&offset=0'

const getData = () => {
    fetch(url)
    
    
        .then((response) => {
            return response.json()
        })
        .then((data) => {
            data.results.forEach(element => {
                fetch(element.url)
                    
                    .then((response) => {
                        //console.log("VER", response);
                        
                        return response.json()
                            .then((response) => {
                                console.log(response);
                                // const sprite = document.createElement('img')
                                // sprite.src = response.sprites.front_default
                                // const info = document.createElement('div')
                                // info.innerHTML = response.height

                                const card = document.createElement("div");
                                card.classList.add("col-md-4", "col-sm-6", "d-flex", "flex-column", "articulo", "p-3", "tarjetas");
                                card.innerHTML = `
                                <img class="imgPok border border-danger border-4 rounded-4" src="${response.sprites.front_default}">
                                <h3 class="datosPok"> Name: ${response.name}</h3> 
                                <h4 class="datosPok"> ID: ${response.id}</h4>
                                
                                 
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
const getRandomAsideWhenLoad = () =>{
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        let arrayRandom = Math.floor(Math.random() * data.results.length);
        buscarPokemon(data.results[arrayRandom].name);
    })
    .catch((error) =>{
        console.error(error);
    })
}

getData();
getRandomAsideWhenLoad();

/*
let entrada = getElementById("input_todo");
entrada.addEventListener("input", searchPokemon);
*/

//printPokemon()

const entrada = document.getElementById("input_todo");
//const boton = document.getElementById("boton");

input_todo.addEventListener("keyup",(event) =>{
    event.preventDefault();
    buscarPokemon(entrada.value);
    console.log(entrada.value);
})



function buscarPokemon(pokemon) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${pokemon}/`)
        .then((response) => response.json())
        .then((data) => {
            buscar(data);
        });
    
}

function no_existe() {
elementoHijo.innerHTML = `<h7> No se encontro</h7>`
}


function buscar(pokemon) {
    const elementoPadre = document.getElementById("elementoPadre");
    elementoPadre.innerHTML = "";
    const elementoHijo = document.createElement("div");
    elementoHijo.classList.add("col-4","d-flex", "flex-column", "d-block", "mx-auto");
    
    elementoHijo.innerHTML = `
    <img class="imgPok border border-danger border-4 rounded-4" src="${pokemon.sprites.front_default}">
    <h3 class="datosPok"> Name: ${pokemon.name}</h3> 
    <h4 class="datosPok"> ID: ${pokemon.id}</h4>
    `;

  elementoPadre.appendChild(elementoHijo);

}
