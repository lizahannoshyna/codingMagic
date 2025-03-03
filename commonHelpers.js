import"./assets/vendor-6837a909.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))a(s);new MutationObserver(s=>{for(const c of s)if(c.type==="childList")for(const x of c.addedNodes)x.tagName==="LINK"&&x.rel==="modulepreload"&&a(x)}).observe(document,{childList:!0,subtree:!0});function n(s){const c={};return s.integrity&&(c.integrity=s.integrity),s.referrerPolicy&&(c.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?c.credentials="include":s.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function a(s){if(s.ep)return;s.ep=!0;const c=n(s);fetch(s.href,c)}})();const $=document.getElementById("leap-year__input"),A=document.getElementById("leap-year__submit"),G=document.querySelector(".leap-year__result"),S=document.getElementById("leap-year__output");document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".leap-year__result").style.display="none"});const P=e=>e%4==0;A.addEventListener("click",()=>{const e=$.value;e<=0||(G.style.display="block",document.querySelector(".leap-year__content").style.justifyContent="space-between",P(e)?(S.textContent="Ви народилися у високосний рік!",S.style.color="#039900"):(S.textContent="Ви народилися не у високосний рік!",S.style.color="#990000"))});const M=document.getElementById("guess-the-number__input"),W=document.getElementById("guess-the-number__submit"),B=document.querySelector(".guess-the-number__result"),d=document.getElementById("guess-the-number__output");let v=Math.floor(Math.random()*10)+1;document.addEventListener("DOMContentLoaded",()=>{B.style.display="none"});W.addEventListener("click",()=>{const e=parseInt(M.value);B.style.display="block",document.querySelector(".guess-the-number__content").style.justifyContent="space-between",(isNaN(e)||e<1||e>10)&&(d.textContent="Будь ласка введіть число в діапазоні від 1 до 10",d.style.color="orange"),e===v?(d.textContent=`Вітаю, ви вгадали число! ${v}`,d.style.color="#039900"):(d.textContent=`Ви програли, комп’ютер загадав ${v}`,d.style.color="red"),setTimeout(H,3e3)});function H(){v=Math.floor(Math.random()*10)+1,d.textContent="",M.value="",B.style.display="none",document.querySelector(".guess-the-number__content").style.justifyContent="center"}const m=document.querySelector("[data-choice='rock']"),y=document.querySelector("[data-choice='scissors']"),p=document.querySelector("[data-choice='paper']"),f=document.querySelector(".rps-message"),T=document.querySelector(".computer-choice_btn"),O=document.querySelector(".rps-message-computer-choice"),_=document.querySelector("#rps-computer-score"),k=document.querySelector("#rps-user-score");let b=null;m.addEventListener("click",()=>{m.classList.add("user-choice-btn_selected"),y.classList.remove("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="img/dark-rock.svg",y.querySelector("img").src="img/scissors-icon.svg",p.querySelector("img").src="img/paper-icon.svg",b="камінь"});y.addEventListener("click",()=>{y.classList.add("user-choice-btn_selected"),m.classList.remove("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="img/stone-icon.svg",y.querySelector("img").src="img/dark-scissors.svg",p.querySelector("img").src="img/paper-icon.svg",b="ножиці"});p.addEventListener("click",()=>{p.classList.add("user-choice-btn_selected"),y.classList.remove("user-choice-btn_selected"),m.classList.remove("user-choice-btn_selected"),m.querySelector("img").src="img/stone-icon.svg",y.querySelector("img").src="img/scissors-icon.svg",p.querySelector("img").src="img/dark-paper.svg",b="папір"});function D(){const e=["камінь","ножиці","папір"],t=Math.floor(Math.random()*e.length);return e[t]}function j(e,t){return e===t?"draw":e==="камінь"&&t==="ножиці"||e==="ножиці"&&t==="папір"||e==="папір"&&t==="камінь"?"user":"computer"}T.addEventListener("click",()=>{if(b===null){alert("Будь ласка, оберіть варіант!");return}const e=D();O.textContent=`Комп'ютер обрав: ${e}`;const t=j(b,e);if(t==="user"){f.textContent="Ви виграли раунд!",f.style.color="#039900";let n=Number(k.textContent)||0;k.textContent=n+1}else t==="computer"?(f.textContent="Комп’ютер виграв раунд!",f.style.color="#990000",_.textContent=Number(_.textContent)||0,_.textContent=Number(_.textContent)+1):(f.textContent="Нічия!",f.style.color="black")});const R=document.getElementById("time-converter__output-days"),Y=document.getElementById("time-converter__output-hours"),F=document.getElementById("time-converter__output-minutes"),K=document.getElementById("time-converter__output-seconds"),N=document.getElementById("time-converter__input"),V=document.getElementById("time-converter__submit"),J=()=>{const e=N.value||0,t=Math.floor(e/(24*60*60)),n=Math.floor(e%(24*60*60)/(60*60)),a=Math.floor(e%(60*60)/60),s=e%60;R.textContent=t.toString().padStart(2,"0"),Y.textContent=n.toString().padStart(2,"0"),F.textContent=a.toString().padStart(2,"0"),K.textContent=s.toString().padStart(2,"0")};V.addEventListener("click",()=>{N.value<0||J()});const u=document.getElementById("dinoGamePlayer"),g=document.getElementById("dinoGameCactus"),l=document.getElementById("dinoGameScore"),h=document.getElementById("dinoGameReset");let E=0,L=!1,C=!1;function q(...e){e.forEach(t=>{t&&(t.style.display="none")})}function X(){L&&!u.classList.contains("jump")&&(u.classList.add("jump"),setTimeout(()=>u.classList.remove("jump"),400))}function z(){L=!0,C=!1,l.style.marginTop="0",u.style.display=g.style.display="block",u.style.animationPlayState=g.style.animationPlayState="running",q(l,h),E=0}function Q(){L=!1,l.textContent=`Гра закінчена! Ваш кінцевий рахунок: ${E}`,l.style.marginTop="36px",q(u,g,l),l.style.display=h.style.display="block",h.textContent="Грати знову"}h.addEventListener("click",z);setInterval(()=>{if(!L)return;const e=parseInt(window.getComputedStyle(u).getPropertyValue("top")),t=parseInt(window.getComputedStyle(g).getPropertyValue("left"));t>0&&t<70&&e>=143?(u.style.animationPlayState=g.style.animationPlayState="paused",Q()):t<=0&&!C?(E++,C=!0,l.textContent=`Ваш поточний рахунок : ${E}`,l.style.display="block"):t>400&&(C=!1)},39);window.addEventListener("keydown",e=>{e.code==="Space"&&(e.preventDefault(),X())});document.addEventListener("DOMContentLoaded",()=>{q(u,g,l),h.textContent="Грати"});const i=document.querySelector(".football-field"),r=document.querySelector(".ball"),U=document.querySelector("#ball-move_score"),Z=document.querySelector("#goal");let I=0;setInterval(w,1e3);i.addEventListener("click",e=>{let t=i.getBoundingClientRect(),n={top:e.clientY-t.top-i.clientTop-r.clientHeight/2,left:e.clientX-t.left-i.clientLeft-r.clientWidth/2};n.top<0&&(n.top=0),n.left<0&&(n.left=0),n.left+r.clientWidth>i.clientWidth&&(n.left=i.clientWidth-r.clientWidth),n.top+r.clientHeight>i.clientHeight&&(n.top=i.clientHeight-r.clientHeight),r.style.left=n.left+"px",r.style.top=n.top+"px",w()});function w(){const e=Z.getBoundingClientRect(),t=r.getBoundingClientRect();t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom&&(I++,U.textContent=I,setTimeout(ee,50))}function ee(){r.style.transform="translate(0%, 0%)",r.style.left=`${i.clientWidth/2-r.clientWidth/2}px`,r.style.top=`${i.clientHeight/2-r.clientHeight/2}px`}const te=document.querySelectorAll(".max-of-three__input"),ne=document.getElementById("max-of-three__output"),oe=()=>{const e=Number(document.getElementById("max-of-three__input-1").value)||0,t=Number(document.getElementById("max-of-three__input-2").value)||0,n=Number(document.getElementById("max-of-three__input-3").value)||0;ne.textContent=Math.max(e,t,n)};te.forEach(e=>{e.addEventListener("input",t=>{oe()})});const se=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],re=document.querySelectorAll(".scientists-selection__btn");let o=[...se];const ce=()=>{const e=document.querySelectorAll(".scientists-selection__item");e.forEach(t=>t.innerHTML=""),o.forEach((t,n)=>{const a=document.createElement("p");a.textContent=`${t.name} ${t.surname}`,e[n].appendChild(a)})};re.forEach(e=>{e.addEventListener("click",t=>{const n=t.target.dataset.action;switch(console.log(n),n){case"born-in-19-century":ie();break;case"sort-by-alphabet":ae();break;case"sort-by-lifespan":le();break;case"find-latest-born":ue();break;case"find-einstein-year":de();break;case"find-lastname-c":me();break;case"delete-name-a":ye();break;case"find-oldest-youngest":pe();break;case"find-match-initials":fe();break}console.table(o),ce()})});const ie=()=>{o=o.filter(e=>e.born>=1801&&e.born<=1900)},ae=()=>{o=o.slice().sort((e,t)=>e.name>t.name?1:-1)},le=()=>{o=o.slice().sort((e,t)=>t.dead-t.born-(e.dead-e.born))},ue=()=>{let e=o[0];o.forEach(t=>{t.born>e.born&&(e=t)}),o=[e]},de=()=>{o=o.filter(e=>e.name==="Albert"&&e.surname==="Einstein")},me=()=>{o=o.filter(e=>e.name.startsWith("S"))},ye=()=>{o=o.filter(e=>!e.name.startsWith("A"))},pe=()=>{let e=o[0],t=o[0];o.forEach(n=>{const a=n.dead-n.born;let s=t.dead-t.born,c=e.dead-e.born;s<a&&(t=n),c>e&&(e=n)}),o=[e,t]},fe=()=>{o=o.filter(e=>{let t=e.name[0].toLowerCase(),n=e.surname[0].toLowerCase();return t===n})};
//# sourceMappingURL=commonHelpers.js.map
