
/**
 * @returns {Object} episode Information
 */
const fetchEpisode = async( ep) => {
    console.log(ep);
    const res = await fetch(`https://rickandmortyapi.com/api/episode/${ ep }`);    
    const data = await res.json();
    console.log(data);
    return [data,ep];
}    
/**
 * @param {HTMLDivElement} element
 */
export const RickyMortyApp = async( element ) => {

    const chapter = () => {
        const ep = Math.trunc(Math.random() * 51)
        document.querySelector('#app-title').innerHTML = 'Ricky Morty App'
        return ep;
    }

    element.innerHTML = 'Loading...';
    
    const characterLabel = document.createElement('h4');
    const statusLabel = document.createElement('h4');
    const originLabel = document.createElement('h4');
    var img = document.createElement("img"); 
    var img = new Image(); 
    const nextCharacterButton = document.createElement('button');
    nextCharacterButton.innerText = 'Cambiar Personaje';
    const anotherChapterButton = document.createElement('button');
    anotherChapterButton.innerText = 'Cambiar Capitulo';

    const renderEpisode = async( data ) => {
        document.querySelector('#app-chapter').innerHTML = `Chapter: ${data[1]} ${data[0].name}`;
        document.querySelector('#app-air-date').innerHTML = `Air date: ${data[0].air_date}`;
    }

    const renderCharacter = async( data ) => {

        const maxCharacters = data[0].characters.length;
        const num = Math.trunc(Math.random() * maxCharacters);
        const character = await fetch(data[0].characters[num]);
        const characterData = await character.json();
        img.src = characterData.image; 
        var src = document.getElementById("character"); 
        src.appendChild(img); 

        characterLabel.innerHTML = `Character: ${characterData.name}`;
        statusLabel.innerHTML = `Status: ${characterData.status}`;
        originLabel.innerHTML = `Origin: ${characterData.origin.name}`
        element.replaceChildren( characterLabel, statusLabel, originLabel, nextCharacterButton, anotherChapterButton );
        
    }

    let ep = chapter();
    // Añadir Listener

    nextCharacterButton.addEventListener('click', async() => {
        element.innerHTML = 'Loading...';
        const data = await fetchEpisode(ep, element);
        renderCharacter( data );
    });

    anotherChapterButton.addEventListener('click', async() =>{
        element.innerHTML = 'Loading...';
        ep = chapter();
        const data = await fetchEpisode(ep, element);
        renderEpisode( data);
        renderCharacter(data);
    });
    
    fetchEpisode(ep)
        .then( (ep) => {
            renderCharacter(ep)
            renderEpisode(ep)
        } ) 
        
}
