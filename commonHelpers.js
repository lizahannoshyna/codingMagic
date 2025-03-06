import"./assets/vendor-6837a909.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const x of c.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&i(x)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function i(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();const T=document.getElementById("leap-year__input"),G=document.getElementById("leap-year__submit"),H=document.querySelector(".leap-year__result"),S=document.getElementById("leap-year__output");document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".leap-year__result").style.display="none"});const W=e=>e%4==0;G.addEventListener("click",()=>{const e=T.value;e<=0||(H.style.display="block",document.querySelector(".leap-year__content").style.justifyContent="space-between",W(e)?(S.textContent="Ви народилися у високосний рік!",S.style.color="#039900"):(S.textContent="Ви народилися не у високосний рік!",S.style.color="#990000"))});const N=document.getElementById("guess-the-number__input"),O=document.getElementById("guess-the-number__submit"),q=document.querySelector(".guess-the-number__result"),d=document.getElementById("guess-the-number__output");let _=Math.floor(Math.random()*10)+1;document.addEventListener("DOMContentLoaded",()=>{q.style.display="none"});O.addEventListener("click",()=>{const e=parseInt(N.value);if(q.style.display="block",document.querySelector(".guess-the-number__content").style.justifyContent="space-between",isNaN(e)||e<1||e>10){d.textContent="Будь ласка введіть число в діапазоні від 1 до 10",d.style.color="orange",setTimeout(D,3e3);return}e===_?(d.textContent=`Вітаю, ви вгадали число! ${_}`,d.style.color="#039900"):(d.textContent=`Ви програли, комп’ютер загадав ${_}`,d.style.color="red")});function D(){_=Math.floor(Math.random()*10)+1,d.textContent="",N.value="",q.style.display="none",document.querySelector(".guess-the-number__content").style.justifyContent="center"}const m=document.querySelector("[data-choice='rock']"),p=document.querySelector("[data-choice='scissors']"),y=document.querySelector("[data-choice='paper']"),f=document.querySelector(".rps-message"),j=document.querySelector(".computer-choice_btn"),R=document.querySelector(".rps-message-computer-choice"),v=document.querySelector("#rps-computer-score"),w=document.querySelector("#rps-user-score");let b=null;m.addEventListener("click",()=>{m.classList.add("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),y.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="img/dark-rock.svg",p.querySelector("img").src="img/scissors-icon.svg",y.querySelector("img").src="img/paper-icon.svg",b="камінь"});p.addEventListener("click",()=>{p.classList.add("user-choice-btn_selected"),m.classList.remove("user-choice-btn_selected"),y.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="img/stone-icon.svg",p.querySelector("img").src="img/dark-scissors.svg",y.querySelector("img").src="img/paper-icon.svg",b="ножиці"});y.addEventListener("click",()=>{y.classList.add("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),m.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="img/stone-icon.svg",p.querySelector("img").src="img/scissors-icon.svg",y.querySelector("img").src="img/dark-paper.svg",b="папір"});function Y(){const e=["камінь","ножиці","папір"],t=Math.floor(Math.random()*e.length);return e[t]}function U(e,t){return e===t?"draw":e==="камінь"&&t==="ножиці"||e==="ножиці"&&t==="папір"||e==="папір"&&t==="камінь"?"user":"computer"}j.addEventListener("click",()=>{if(b===null){alert("Будь ласка, оберіть варіант!");return}const e=Y();R.textContent=`Комп'ютер обрав: ${e}`;const t=U(b,e);if(t==="user"){f.textContent="Ви виграли раунд!",f.style.color="#039900";let n=Number(w.textContent)||0;w.textContent=n+1}else t==="computer"?(f.textContent="Комп’ютер виграв раунд!",f.style.color="#990000",v.textContent=Number(v.textContent)||0,v.textContent=Number(v.textContent)+1):(f.textContent="Нічия!",f.style.color="black")});const F=document.getElementById("time-converter__output-days"),K=document.getElementById("time-converter__output-hours"),V=document.getElementById("time-converter__output-minutes"),J=document.getElementById("time-converter__output-seconds"),A=document.getElementById("time-converter__input"),X=document.getElementById("time-converter__submit"),z=()=>{const e=A.value||0,t=Math.floor(e/(24*60*60)),n=Math.floor(e%(24*60*60)/(60*60)),i=Math.floor(e%(60*60)/60),s=e%60;F.textContent=t.toString().padStart(2,"0"),K.textContent=n.toString().padStart(2,"0"),V.textContent=i.toString().padStart(2,"0"),J.textContent=s.toString().padStart(2,"0")};X.addEventListener("click",()=>{A.value<0||z()});const u=document.getElementById("dinoGamePlayer"),g=document.getElementById("dinoGameCactus"),l=document.getElementById("dinoGameScore"),h=document.getElementById("dinoGameReset");let C=0,L=!1,E=!1;function k(...e){e.forEach(t=>{t&&(t.style.display="none")})}function Q(){L&&!u.classList.contains("jump")&&(u.classList.add("jump"),setTimeout(()=>u.classList.remove("jump"),400))}function Z(){L=!0,E=!1,l.style.marginTop="0",u.style.display=g.style.display="block",u.style.animationPlayState=g.style.animationPlayState="running",k(l,h),C=0}function ee(){L=!1,l.textContent=`Гра закінчена! Ваш кінцевий рахунок: ${C}`,l.style.marginTop="36px",k(u,g,l),l.style.display=h.style.display="block",h.textContent="Грати знову"}h.addEventListener("click",Z);setInterval(()=>{if(!L)return;const e=parseInt(window.getComputedStyle(u).getPropertyValue("top")),t=parseInt(window.getComputedStyle(g).getPropertyValue("left"));t>0&&t<70&&e>=143?(u.style.animationPlayState=g.style.animationPlayState="paused",ee()):t<=0&&!E?(C++,E=!0,l.textContent=`Ваш поточний рахунок : ${C}`,l.style.display="block"):t>400&&(E=!1)},39);window.addEventListener("keydown",e=>{e.code==="Space"&&(e.preventDefault(),Q())});document.addEventListener("DOMContentLoaded",()=>{k(u,g,l),h.textContent="Грати"});const a=document.querySelector(".football-field"),r=document.querySelector(".ball"),te=document.querySelector("#ball-move_score"),ne=document.querySelector("#goal");let M=0;setInterval(P,1e3);a.addEventListener("click",e=>{let t=a.getBoundingClientRect(),n={top:e.clientY-t.top-a.clientTop-r.clientHeight/2,left:e.clientX-t.left-a.clientLeft-r.clientWidth/2};n.top<0&&(n.top=0),n.left<0&&(n.left=0),n.left+r.clientWidth>a.clientWidth&&(n.left=a.clientWidth-r.clientWidth),n.top+r.clientHeight>a.clientHeight&&(n.top=a.clientHeight-r.clientHeight),r.style.left=n.left+"px",r.style.top=n.top+"px",P()});function P(){const e=ne.getBoundingClientRect(),t=r.getBoundingClientRect();t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom&&(M++,te.textContent=M,setTimeout(oe,50))}function oe(){r.style.transform="translate(0%, 0%)",r.style.left=`${a.clientWidth/2-r.clientWidth/2}px`,r.style.top=`${a.clientHeight/2-r.clientHeight/2}px`}const se=document.querySelectorAll(".max-of-three__input"),re=document.getElementById("max-of-three__output"),ce=()=>{const e=Number(document.getElementById("max-of-three__input-1").value)||0,t=Number(document.getElementById("max-of-three__input-2").value)||0,n=Number(document.getElementById("max-of-three__input-3").value)||0;re.textContent=Math.max(e,t,n)};se.forEach(e=>{e.addEventListener("input",t=>{ce()})});new Swiper(".swiper",{navigation:{nextEl:".s-button-next",prevEl:".s-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},grabCursor:!0,mousewheel:{sensitivity:1,eventTarget:".image-slider"},autoHeight:!0});const ie=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],ae=document.querySelectorAll(".scientists-selection__btn");let o=[...ie];const le=()=>{const e=document.querySelectorAll(".scientists-selection__item");e.forEach(t=>t.innerHTML=""),o.forEach((t,n)=>{const i=document.createElement("p");i.textContent=`${t.name} ${t.surname} ${t.born} - ${t.dead}`,e[n].appendChild(i)})};ae.forEach(e=>{e.addEventListener("click",t=>{const n=t.target.dataset.action;switch(console.log(n),n){case"born-in-19-century":ue();break;case"sort-by-alphabet":de();break;case"sort-by-lifespan":me();break;case"find-latest-born":pe();break;case"find-einstein-year":ye();break;case"find-lastname-c":fe();break;case"delete-name-a":ge();break;case"find-oldest-youngest":be();break;case"find-match-initials":he();break}console.table(o),le()})});const ue=()=>{o=o.filter(e=>e.born>=1801&&e.born<=1900)},de=()=>{o=o.slice().sort((e,t)=>e.name>t.name?1:-1)},me=()=>{o=o.slice().sort((e,t)=>t.dead-t.born-(e.dead-e.born))},pe=()=>{let e=o[0];o.forEach(t=>{t.born>e.born&&(e=t)}),o=[e]},ye=()=>{o=o.filter(e=>e.name==="Albert"&&e.surname==="Einstein")},fe=()=>{o=o.filter(e=>e.name.startsWith("S"))},ge=()=>{o=o.filter(e=>!e.name.startsWith("A"))},be=()=>{let e=o[0],t=o[0];o.forEach(n=>{const i=n.dead-n.born;let s=t.dead-t.born,c=e.dead-e.born;s<i&&(t=n),c>e&&(e=n)}),o=[e,t]},he=()=>{o=o.filter(e=>{let t=e.name[0].toLowerCase(),n=e.surname[0].toLowerCase();return t===n})},Se=document.querySelector("[data-modal-close-signUp]");document.querySelector("[data-modal-signUp]");const B=document.querySelector(".sign-up__backdrop"),$=document.querySelector(".sign-up__input"),ve=document.getElementById("header-output"),_e=document.querySelector(".sign-up__submit"),Ee=document.querySelectorAll("[data-section]");B.addEventListener("click",e=>{e.target===B&&I()});Se.addEventListener("click",e=>{I()});_e.addEventListener("click",e=>{Ce(),I()});Ee.forEach(e=>{e.addEventListener("click",t=>{const n=e.dataset.section,i=document.getElementById(n);if(i){const s=i.getBoundingClientRect().top+window.pageYOffset-150;window.scrollTo({top:s,behavior:"smooth"})}})});function I(){B.classList.toggle("modal-open"),document.body.classList.toggle("no-scroll")}function Ce(){ve.textContent=$.value,$.value=""}
//# sourceMappingURL=commonHelpers.js.map
