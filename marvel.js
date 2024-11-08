
async function fetchMarvelData(){
    const response=await fetch('https://gateway.marvel.com/v1/public/characters?ts=1&apikey=2e9960738f5a0e2525f43d45c7bfd215&hash=72879e5ec473298a914f167619ee7019&limit=20');
    const marvelData=await response.json();
    return marvelData.data.results;
        }
    document.addEventListener('DOMContentLoaded', async () => {
        const marvelCharacters=await fetchMarvelData();
        const marvelInfoElement=document.getElementById('marvelInfo');
    
        marvelCharacters.forEach(character => { 
            const characterElement = document.createElement('div'); 
            characterElement.classList.add('character-card');
             characterElement.innerHTML = ` <h2>${character.name}</h2> <img src="${character.thumbnail.path}.${character.thumbnail.extension}" alt="${character.name}">
              <p>${character.description || 'No description available.'}</p> `;
               marvelInfoElement.appendChild(characterElement); });
    });

 