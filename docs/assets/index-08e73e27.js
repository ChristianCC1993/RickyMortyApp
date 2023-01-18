(function(){const a=document.createElement("link").relList;if(a&&a.supports&&a.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function c(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=c(e);fetch(e.href,r)}})();const h=async n=>{console.log(n);const c=await(await fetch(`https://rickandmortyapi.com/api/episode/${n}`)).json();return console.log(c),[c,n]},g=async n=>{const a=()=>{const t=Math.trunc(Math.random()*51);return document.querySelector("#app-title").innerHTML="Ricky Morty App",t};n.innerHTML="Loading...";const c=document.createElement("h4"),i=document.createElement("h4"),e=document.createElement("h4");var r=document.createElement("img"),r=new Image;const o=document.createElement("button");o.innerText="Cambiar Personaje";const l=document.createElement("button");l.innerText="Cambiar Capitulo";const m=async t=>{document.querySelector("#app-chapter").innerHTML=`Chapter: ${t[1]} ${t[0].name}`,document.querySelector("#app-air-date").innerHTML=`Air date: ${t[0].air_date}`},u=async t=>{const p=t[0].characters.length,f=Math.trunc(Math.random()*p),d=await(await fetch(t[0].characters[f])).json();r.src=d.image;var y=document.getElementById("character");y.appendChild(r),c.innerHTML=`Character: ${d.name}`,i.innerHTML=`Status: ${d.status}`,e.innerHTML=`Origin: ${d.origin.name}`,n.replaceChildren(c,i,e,o,l)};let s=a();o.addEventListener("click",async()=>{n.innerHTML="Loading...";const t=await h(s);u(t)}),l.addEventListener("click",async()=>{n.innerHTML="Loading...",s=a();const t=await h(s);m(t),u(t)}),h(s).then(t=>{u(t),m(t)})};document.querySelector("#app").innerHTML=`
  <div>
    <h1 id="app-title">Hello Vite!</h1>
    <h3 id="app-chapter">Chapter</h3>
    <h3 id="app-air-date">Air Date</h3>
    <div id="character"></div> 
    
    <div class="card">
      
    </div>

  </div>
`;const L=document.querySelector(".card");g(L);
