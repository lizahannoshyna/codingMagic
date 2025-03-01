import"./assets/vendor-6837a909.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const x of c.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&a(x)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();const N=document.getElementById("leap-year__input"),w=document.getElementById("leap-year__submit"),A=document.querySelector(".leap-year__result"),S=document.getElementById("leap-year__output");document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".leap-year__result").style.display="none"});const $=e=>e%4==0;w.addEventListener("click",()=>{const e=N.value;e<=0||(A.style.display="block",document.querySelector(".leap-year__content").style.justifyContent="space-between",$(e)?(S.textContent="Ви народилися у високосний рік!",S.style.color="#039900"):(S.textContent="Ви народилися не у високосний рік!",S.style.color="#990000"))});const k=document.getElementById("guessInput"),G=document.getElementById("guessBtn"),u=document.getElementById("text");let C=Math.floor(Math.random()*10)+1;G.addEventListener("click",()=>{const e=parseInt(k.value);if(isNaN(e)||e<1||e>10){u.textContent="Будь ласка введіть число в діапазоні від 1 до 10",u.style.color="orange";return}e===C?(u.textContent=`Вітаю, ви вгадали число! ${C}`,u.style.color="#039900"):(u.textContent=`Ви не вгадали число ${C}`,u.style.color="red"),setTimeout(P,2e3)});function P(){C=Math.floor(Math.random()*10)+1,u.textContent="",k.value=""}const m=document.querySelector("[data-choice='rock']"),p=document.querySelector("[data-choice='scissors']"),f=document.querySelector("[data-choice='paper']"),y=document.querySelector(".rps-message"),W=document.querySelector(".computer-choice_btn"),H=document.querySelector(".rps-message-computer-choice"),v=document.querySelector("#rps-computer-score"),I=document.querySelector("#rps-user-score");let h=null;m.addEventListener("click",()=>{m.classList.add("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),f.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="../img/dark-rock.svg",p.querySelector("img").src="../img/scissors-icon.svg",f.querySelector("img").src="../img/paper-icon.svg",h="камінь"});p.addEventListener("click",()=>{p.classList.add("user-choice-btn_selected"),m.classList.remove("user-choice-btn_selected"),f.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="../img/stone-icon.svg",p.querySelector("img").src="../img/dark-scissors.svg",f.querySelector("img").src="../img/paper-icon.svg",h="ножиці"});f.addEventListener("click",()=>{f.classList.add("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),m.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="../img/stone-icon.svg",p.querySelector("img").src="../img/scissors-icon.svg",f.querySelector("img").src="../img/dark-paper.svg",h="папір"});function T(){const e=["камінь","ножиці","папір"],t=Math.floor(Math.random()*e.length);return e[t]}function O(e,t){return e===t?"draw":e==="камінь"&&t==="ножиці"||e==="ножиці"&&t==="папір"||e==="папір"&&t==="камінь"?"user":"computer"}W.addEventListener("click",()=>{if(h===null){alert("Будь ласка, оберіть варіант!");return}const e=T();H.textContent=`Комп'ютер обрав: ${e}`;const t=O(h,e);if(t==="user"){y.textContent="Ви виграли раунд!",y.style.color="#039900";let n=Number(I.textContent)||0;I.textContent=n+1}else t==="computer"?(y.textContent="Комп’ютер виграв раунд!",y.style.color="#990000",v.textContent=Number(v.textContent)||0,v.textContent=Number(v.textContent)+1):(y.textContent="Нічия!",y.style.color="black")});const D=document.getElementById("time-converter__output-days"),R=document.getElementById("time-converter__output-hours"),j=document.getElementById("time-converter__output-minutes"),Y=document.getElementById("time-converter__output-seconds"),M=document.getElementById("time-converter__input"),F=document.getElementById("time-converter__submit"),K=()=>{const e=M.value||0,t=Math.floor(e/(24*60*60)),n=Math.floor(e%(24*60*60)/(60*60)),a=Math.floor(e%(60*60)/60),s=e%60;D.textContent=t.toString().padStart(2,"0"),R.textContent=n.toString().padStart(2,"0"),j.textContent=a.toString().padStart(2,"0"),Y.textContent=s.toString().padStart(2,"0")};F.addEventListener("click",()=>{M.value<0||K()});const d=document.getElementById("dinoGamePlayer"),g=document.getElementById("dinoGameCactus"),l=document.getElementById("dinoGameScore"),b=document.getElementById("dinoGameReset");let E=0,L=!1,_=!1;function B(...e){e.forEach(t=>{t&&(t.style.display="none")})}function V(){L&&!d.classList.contains("jump")&&(d.classList.add("jump"),setTimeout(()=>d.classList.remove("jump"),400))}function J(){L=!0,_=!1,l.style.marginTop="0",d.style.display=g.style.display="block",d.style.animationPlayState=g.style.animationPlayState="running",B(l,b),E=0}function X(){L=!1,l.textContent=`Гра закінчена! Ваш кінцевий рахунок: ${E}`,l.style.marginTop="36px",B(d,g,l),l.style.display=b.style.display="block",b.textContent="Грати знову"}b.addEventListener("click",J);setInterval(()=>{if(!L)return;const e=parseInt(window.getComputedStyle(d).getPropertyValue("top")),t=parseInt(window.getComputedStyle(g).getPropertyValue("left"));t>0&&t<70&&e>=143?(d.style.animationPlayState=g.style.animationPlayState="paused",X()):t<=0&&!_?(E++,_=!0,l.textContent=`Ваш поточний рахунок : ${E}`,l.style.display="block"):t>400&&(_=!1)},39);window.addEventListener("keydown",e=>{e.code==="Space"&&(e.preventDefault(),V())});document.addEventListener("DOMContentLoaded",()=>{B(d,g,l),b.textContent="Грати"});const i=document.querySelector(".football-field"),r=document.querySelector(".ball"),z=document.querySelector("#ball-move_score"),Q=document.querySelector("#goal");let q=0;i.addEventListener("click",e=>{let t=i.getBoundingClientRect(),n={top:e.clientY-t.top-i.clientTop-r.clientHeight/2,left:e.clientX-t.left-i.clientLeft-r.clientWidth/2};n.top<0&&(n.top=0),n.left<0&&(n.left=0),n.left+r.clientWidth>i.clientWidth&&(n.left=i.clientWidth-r.clientWidth),n.top+r.clientHeight>i.clientHeight&&(n.top=i.clientHeight-r.clientHeight),r.style.left=n.left+"px",r.style.top=n.top+"px",U()});function U(){const e=Q.getBoundingClientRect(),t=r.getBoundingClientRect();t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom&&(q++,z.textContent=q,Z())}function Z(){r.style.transform="translate(0%, 0%)",r.style.left=`${i.clientWidth/2-r.clientWidth/2}px`,r.style.top=`${i.clientHeight/2-r.clientHeight/2}px`}const ee=document.querySelectorAll(".max-of-three__input"),te=document.getElementById("max-of-three__output"),ne=()=>{const e=Number(document.getElementById("max-of-three__input-1").value)||0,t=Number(document.getElementById("max-of-three__input-2").value)||0,n=Number(document.getElementById("max-of-three__input-3").value)||0;te.textContent=Math.max(e,t,n)};ee.forEach(e=>{e.addEventListener("input",t=>{ne()})});const oe=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],se=document.querySelectorAll(".scientists-selection__btn");let o=[...oe];const re=()=>{const e=document.querySelectorAll(".scientists-selection__item");e.forEach(t=>t.innerHTML=""),o.forEach((t,n)=>{const a=document.createElement("p");a.textContent=`${t.name} ${t.surname}`,e[n].appendChild(a)})};se.forEach(e=>{e.addEventListener("click",t=>{const n=t.target.dataset.action;switch(console.log(n),n){case"born-in-19-century":ce();break;case"sort-by-alphabet":ie();break;case"sort-by-lifespan":ae();break;case"find-latest-born":le();break;case"find-einstein-year":de();break;case"find-lastname-c":ue();break;case"delete-name-a":me();break;case"find-oldest-youngest":pe();break;case"find-match-initials":fe();break}console.table(o),re()})});const ce=()=>{o=o.filter(e=>e.born>=1801&&e.born<=1900)},ie=()=>{o=o.slice().sort((e,t)=>e.name>t.name?1:-1)},ae=()=>{o=o.slice().sort((e,t)=>t.dead-t.born-(e.dead-e.born))},le=()=>{let e=o[0];o.forEach(t=>{t.born>e.born&&(e=t)}),o=[e]},de=()=>{o=o.filter(e=>e.name==="Albert"&&e.surname==="Einstein")},ue=()=>{o=o.filter(e=>e.name.startsWith("S"))},me=()=>{o=o.filter(e=>!e.name.startsWith("A"))},pe=()=>{let e=o[0],t=o[0];o.forEach(n=>{const a=n.dead-n.born;let s=t.dead-t.born,c=e.dead-e.born;s<a&&(t=n),c>e&&(e=n)}),o=[e,t]},fe=()=>{o=o.filter(e=>{let t=e.name[0].toLowerCase(),n=e.surname[0].toLowerCase();return t===n})};
//# sourceMappingURL=commonHelpers.js.map
