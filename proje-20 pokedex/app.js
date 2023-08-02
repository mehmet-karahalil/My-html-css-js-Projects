var poke_container = document.querySelector(".poke-container");
var search = document.querySelector(".search");
var searchbtn = document.querySelector(".searchbtn");
var searchinput = document.querySelector(".searchinput");
var selectElement = document.getElementById("select1")
var pokemon_count = 1011;

const bg_color = {
    grass: '#8BD369',
    fire: '#FF603F',
    water: '#3399FF',
    bug: '#AABB22',
    normal: '#AAAA99',
    flying: '#9AA8FA',
    poison: '#B76EA4',
    electric: '#FFD34E',
    ground: '#E2C56A',
    fairy: '#F1A8EC',
    psychic: '#FF6EA4',
    fighting: '#C56E5C',
    rock: '#C5B679',
    dragon: '#7766EE',
    ice: '#66CCFF',
}

searchbtn.addEventListener("click", () => {
    search.classList.toggle("active");
})

searchinput.addEventListener("input", () => {

    if (/^\d+$/.test(searchinput.value) == false) {
        var searchvalue = searchinput.value.toLowerCase();
        var pokemonnames = document.querySelectorAll(".poke-name");
        pokemonnames.forEach((pokename) => {
            if (pokename.innerHTML.toLowerCase().includes(searchvalue)) {
                pokename.parentElement.parentElement.parentElement.style.display = "block";
            } else {
                pokename.parentElement.parentElement.parentElement.style.display = "none";
            }
        })
    }
    else {
        var searchvalue = searchinput.value
        var pokemonids = document.querySelectorAll(".poke-id");
        pokemonids.forEach((pokeid) => {
            if (pokeid.innerHTML.includes(searchvalue)) {
                pokeid.parentElement.parentElement.parentElement.style.display = "block";
            } else {
                pokeid.parentElement.parentElement.parentElement.style.display = "none";
            }
        })
    }
})

var fetchpokemon = async () => {
    for (let index = 1; index < pokemon_count; index++) {
        await getpokemon(index);
    }
}

var getpokemon = async (id) => {
    var url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    var res = await fetch(url);
    var data = await res.json();
    createpokemoncard(data);
}

selectElement.addEventListener('change', function () {
    var selectedValue = selectElement.value;
    var pokeTypes = document.querySelectorAll("#poketip");

    pokeTypes.forEach((pokeType) => {
        var pokemonCard = pokeType.parentElement.parentElement.parentElement.parentElement.parentElement;

        if (selectedValue == pokeType.textContent.toLowerCase()) {
            pokemonCard.style.display = "block";
        } else if (selectedValue == "#") {
            pokemonCard.style.display = "block";
        } else {
            pokemonCard.style.display = "none";
        }
    });
});

var createpokemoncard = (pokemon) => {
    var pokemondiv = document.createElement("div");
    pokemondiv.classList.add("pokemon");
    var pokemonid = pokemon.id
    var pokemontype = pokemon.types[0].type.name;
    var pokemonbg = bg_color[pokemontype]
    pokemondiv.style.backgroundColor = pokemonbg
    pokedivinnerhtml = `
    <div class="">
        <div class="image-container">
            <img src="https://assets.pokemon.com/assets/cms2/img/pokedex/full/${String(pokemon.id).padStart(3, '0')}.png" alt="Pokemon 1 image">
        </div>
            <div class="poke-info">
                <span class="poke-id">#${String(pokemonid).padStart(3, '0')}</span>
                <h3 class="poke-name">${pokemon.name}</h3>
                <div class="small">
                    <small class="poke-exp">
                        <i class="fa-solid fa-flask">${pokemon.base_experience}exp</i>
                    </small>
                    <small class="poke-weight">
                        <i class="fa-solid fa-weight-scale">${pokemon.weight} kg</i>
                    </small>
                </div>
                <div class="poke-type">
                    <i class="fa-brands fa-uncharted"><span id="poketip">${pokemontype}</span></i>
                </div>
            </div>
        </div>
    `
    pokemondiv.innerHTML = pokedivinnerhtml
    poke_container.appendChild(pokemondiv)
}

fetchpokemon()
