/**
 * Função assíncrona para buscar e exibir informações de um Pokémon com base no ID fornecido.
 */
async function fetchPokemon() {
    const pokemonId = document.getElementById('pokemon-id').value;

    if (pokemonId) {
        try {
            const resposta = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonId}`);
            const pokemon = await resposta.json();

            const pokemonImagem = document.getElementById('pokemon-image');
            pokemonImagem.src = pokemon.sprites.front_default;
            pokemonImagem.style.display = 'block';
            document.getElementById('pokemon-nome').innerText = `Nome: ${pokemon.name}`;
            document.getElementById('pokemon-tipos').innerText = `Tipos: ${pokemon.types.map(typeInfo => typeInfo.type.name).join(', ')}`;

            // Convertendo peso e altura para exibição correta
            const pesoEmKg = pokemon.weight / 10; // convertendo de decigramas para quilogramas
            const alturaEmMetros = pokemon.height / 10; // convertendo de decímetros para metros

            document.getElementById('pokemon-peso').innerText = `Peso: ${pesoEmKg} kg`;
            document.getElementById('pokemon-altura').innerText = `Altura: ${alturaEmMetros} m`;

            if (pokemon.cries && pokemon.cries.latest) {
                const pokemonSom = document.getElementById('pokemon-som');
                pokemonSom.src = pokemon.cries.latest;
                pokemonSom.play();
            } else if (pokemon.cries && pokemon.cries.legacy) {
                const pokemonSom = document.getElementById('pokemon-som');
                pokemonSom.src = pokemon.cries.legacy;
                pokemonSom.play();
            } else {
                console.log('Som não encontrado para este Pokémon.');
            }

        } catch (error) {
            console.error('Erro ao buscar informações do Pokémon:', error);
        }
    }
}

