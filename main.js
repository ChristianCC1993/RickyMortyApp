import './style.css'
import javascriptLogo from './javascript.svg'
import { RickyMortyApp } from './ricky-morty-app'


document.querySelector('#app').innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <h3 id="app-chapter">Chapter</h3>
    <h3 id="app-air-date">Air Date</h3>
    <div id="character"></div> 
    
    <div class="card">
      
    </div>

  </div>
`
const element = document.querySelector('.card');

RickyMortyApp( element );


// <audio controls="controls"><source src="/src/breakingbad/musica2.wav" type="audio/wav" /></audio>
