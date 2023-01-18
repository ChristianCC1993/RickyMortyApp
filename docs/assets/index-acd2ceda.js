(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const y="/RickyMortyApp/assets/javascript-8dac5379.svg",p=async a=>{console.log(a);const c=await(await fetch(`https://rickandmortyapi.com/api/episode/${a}`)).json();return console.log(c),[c,a]},v=async a=>{const n=()=>{const t=Math.trunc(Math.random()*51);return document.querySelector("#app-title").innerHTML="Ricky Morty App",t};a.innerHTML="Loading...";const c=document.createElement("h4"),i=document.createElement("h4"),e=document.createElement("h4");var r=document.createElement("img"),r=new Image;const o=document.createElement("button");o.innerText="Cambiar Personaje";const d=document.createElement("button");d.innerText="Cambiar Capitulo";const h=async t=>{document.querySelector("#app-chapter").innerHTML=`Chapter: ${t[1]} ${t[0].name}`,document.querySelector("#app-air-date").innerHTML=`Air date: ${t[0].air_date}`},u=async t=>{const m=t[0].characters.length,g=Math.trunc(Math.random()*m),l=await(await fetch(t[0].characters[g])).json();r.src=l.image;var f=document.getElementById("character");f.appendChild(r),c.innerHTML=`Character: ${l.name}`,i.innerHTML=`Status: ${l.status}`,e.innerHTML=`Origin: ${l.origin.name}`,a.replaceChildren(c,i,e,o,d)};let s=n();o.addEventListener("click",async()=>{a.innerHTML="Loading...";const t=await p(s);u(t)}),d.addEventListener("click",async()=>{a.innerHTML="Loading...",s=n();const t=await p(s);h(t),u(t)}),p(s).then(t=>{u(t),h(t)})};document.querySelector("#app").innerHTML=`
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${y}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1 id="app-title">Hello Vite!</h1>
    <h3 id="app-chapter">Chapter</h3>
    <h3 id="app-air-date">Air Date</h3>
    <div id="character"></div> 
    
    <div class="card">
      
    </div>

  </div>
`;const L=document.querySelector(".card");v(L);
