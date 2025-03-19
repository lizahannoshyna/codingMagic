import"./assets/vendor-F2dulsrI.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))l(o);new MutationObserver(o=>{for(const c of o)if(c.type==="childList")for(const B of c.addedNodes)B.tagName==="LINK"&&B.rel==="modulepreload"&&l(B)}).observe(document,{childList:!0,subtree:!0});function n(o){const c={};return o.integrity&&(c.integrity=o.integrity),o.referrerPolicy&&(c.referrerPolicy=o.referrerPolicy),o.crossOrigin==="use-credentials"?c.credentials="include":o.crossOrigin==="anonymous"?c.credentials="omit":c.credentials="same-origin",c}function l(o){if(o.ep)return;o.ep=!0;const c=n(o);fetch(o.href,c)}})();const U=document.querySelectorAll("[data-section]");U.forEach(e=>{e.addEventListener("click",t=>{const n=e.dataset.section,l=document.getElementById(n);if(l){const o=l.getBoundingClientRect().top+window.pageYOffset-150;window.scrollTo({top:o,behavior:"smooth"})}})});const D=[...document.querySelectorAll("section")],K=document.querySelectorAll(".dropdown-item"),V=document.querySelector(".header-dropdown-menu");V.addEventListener("change",function(){let e=this.value;D.forEach(t=>{t.dataset.category===e?t.style.display="block":t.style.display="none"})});K.forEach(e=>{e.addEventListener("click",()=>{switch(e.textContent){case"Числовий":document.querySelectorAll(".numbers_sections").forEach(n=>n.style.display="block"),document.querySelectorAll(".games_sections").forEach(n=>n.style.display="none"),document.querySelector(".users_sections").forEach(n=>n.style.display="none");break;case"Ігровий":document.querySelectorAll(".numbers_sections").forEach(n=>n.style.display="none"),document.querySelectorAll(".games_sections").forEach(n=>n.style.display="block"),document.querySelectorAll(".users_sections").forEach(n=>n.style.display="none");break;case"Ознайомчий":document.querySelectorAll(".numbers_sections").forEach(n=>n.style.display="none"),document.querySelectorAll(".games_sections").forEach(n=>n.style.display="none"),document.querySelectorAll(".users_sections").forEach(n=>n.style.display="block");break;case"Усі секції":document.querySelectorAll(".numbers_sections").forEach(n=>n.style.display="block"),document.querySelectorAll(".games_sections").forEach(n=>n.style.display="block"),document.querySelectorAll(".users_sections").forEach(n=>n.style.display="block");default:D.forEach(n=>{n.style.display="block"});break}})});const A=document.querySelector("#theme-switch"),z=[document.body,document.querySelector("header"),document.querySelector(".main__content"),document.querySelector("footer"),...document.querySelectorAll("hr"),document.querySelector(".sign-up__modal"),document.querySelector(".success__modal"),document.querySelector(".header-btn"),document.querySelector(".header-dropdown-menu")],J=document.querySelector(".header-logo"),X=document.querySelector(".footer-logo"),Q=document.querySelector(".swiper-button-next"),Z=document.querySelector(".swiper-button-prev"),W=()=>{const e=A.checked;z.forEach(t=>{t.classList.toggle("dark",e),t.classList.toggle("light",!e)}),J.src=e?"img/logo-dark.svg":"img/header-logo.svg",X.src=e?"img/footer-logo-dark.svg":"img/footer-logo.svg",Q.style.backgroundImage=e?"url(/public/img/arrow-next-dark.svg)":"url(/public/img/arrow-next.svg)",Z.style.backgroundImage=e?"url(/public/img/arrow-prew-dark.svg)":"url(/public/img/arrow-prew.svg)",localStorage.setItem("theme",e?"dark":"light")};document.addEventListener("DOMContentLoaded",()=>{const e=localStorage.getItem("theme")||"light";A.checked=e==="dark",W()});A.addEventListener("change",W);const ee=document.getElementById("leap-year__input"),te=document.getElementById("leap-year__submit"),ne=document.querySelector(".leap-year__result"),E=document.getElementById("leap-year__output");document.addEventListener("DOMContentLoaded",()=>{document.querySelector(".leap-year__result").style.display="none"});const oe=e=>e%4==0;te.addEventListener("click",()=>{const e=ee.value;e<=0||(ne.style.display="block",document.querySelector(".leap-year__content").style.justifyContent="space-between",oe(e)?(E.textContent="Ви народилися у високосний рік!",E.style.color="#039900"):(E.textContent="Ви народилися не у високосний рік!",E.style.color="#990000"))});const R=document.getElementById("guess-the-number__input"),se=document.getElementById("guess-the-number__submit"),M=document.querySelector(".guess-the-number__result"),m=document.getElementById("guess-the-number__output");let k=Math.floor(Math.random()*10)+1;document.addEventListener("DOMContentLoaded",()=>{M.style.display="none"});se.addEventListener("click",()=>{const e=parseInt(R.value);if(M.style.display="block",document.querySelector(".guess-the-number__content").style.justifyContent="space-between",isNaN(e)||e<1||e>10){m.textContent="Будь ласка введіть число в діапазоні від 1 до 10",m.style.color="orange",setTimeout(x,3e3);return}e===k?(m.textContent=`Вітаю, ви вгадали число! ${k}`,m.style.color="#039900",setTimeout(x,3e3)):(m.textContent=`Ви програли, комп’ютер загадав ${k}`,m.style.color="#990000",setTimeout(x,3e3))});function x(){k=Math.floor(Math.random()*10)+1,m.textContent="",R.value="",M.style.display="none",document.querySelector(".guess-the-number__content").style.justifyContent="center"}const y=document.querySelector("[data-choice='rock']"),p=document.querySelector("[data-choice='scissors']"),g=document.querySelector("[data-choice='paper']"),f=document.querySelector(".rps-message"),ce=document.querySelector(".computer-choice_btn"),re=document.querySelector(".rps-message-computer-choice"),_=document.querySelector("#rps-computer-score"),P=document.querySelector("#rps-user-score");let S=null;y.addEventListener("click",()=>{y.classList.add("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),g.classList.remove("user-choice-btn_selected"),y.querySelector("img").src="img/dark-rock.svg",p.querySelector("img").src="img/scissors-icon.svg",g.querySelector("img").src="img/paper-icon.svg",S="камінь"});p.addEventListener("click",()=>{p.classList.add("user-choice-btn_selected"),y.classList.remove("user-choice-btn_selected"),g.classList.remove("user-choice-btn_selected"),y.querySelector("img").src="img/stone-icon.svg",p.querySelector("img").src="img/dark-scissors.svg",g.querySelector("img").src="img/paper-icon.svg",S="ножиці"});g.addEventListener("click",()=>{g.classList.add("user-choice-btn_selected"),p.classList.remove("user-choice-btn_selected"),y.classList.remove("user-choice-btn_selected"),y.querySelector("img").src="img/stone-icon.svg",p.querySelector("img").src="img/scissors-icon.svg",g.querySelector("img").src="img/dark-paper.svg",S="папір"});function le(){const e=["камінь","ножиці","папір"],t=Math.floor(Math.random()*e.length);return e[t]}function ie(e,t){return e===t?"draw":e==="камінь"&&t==="ножиці"||e==="ножиці"&&t==="папір"||e==="папір"&&t==="камінь"?"user":"computer"}ce.addEventListener("click",()=>{if(S===null){alert("Будь ласка, оберіть варіант!");return}const e=le();re.textContent=`Комп'ютер обрав: ${e}`;const t=ie(S,e);if(t==="user"){f.textContent="Ви виграли раунд!",f.style.color="#039900";let n=Number(P.textContent)||0;P.textContent=n+1}else t==="computer"?(f.textContent="Комп’ютер виграв раунд!",f.style.color="#990000",_.textContent=Number(_.textContent)||0,_.textContent=Number(_.textContent)+1):(f.textContent="Нічия!",f.style.color="black")});let b=null;document.getElementById("add").addEventListener("click",function(){b="+"});document.getElementById("subtract").addEventListener("click",function(){b="-"});document.getElementById("multiply").addEventListener("click",function(){b="*"});document.getElementById("divide").addEventListener("click",function(){b="/"});document.getElementById("result").addEventListener("click",function(){let e=parseFloat(document.getElementById("num1").value),t=parseFloat(document.getElementById("num2").value),n;if(!b)n="Виберіть операцію!",document.getElementById("input-result").style.fontSize="10px",document.getElementById("input-result").style.padding="10px",document.getElementById("input-result").style.color="#7E7E7E";else if(isNaN(e)||isNaN(t))n="Помилка: введіть числа";else switch(b){case"+":n=e+t;break;case"-":n=e-t;break;case"*":n=e*t;break;case"/":n=e/t;break;default:n="Невідома операція"}document.getElementById("input-result").value=n});const ae=document.getElementById("time-converter__output-days"),de=document.getElementById("time-converter__output-hours"),ue=document.getElementById("time-converter__output-minutes"),me=document.getElementById("time-converter__output-seconds"),j=document.getElementById("time-converter__input"),ye=document.getElementById("time-converter__submit"),pe=()=>{const e=j.value||0,t=Math.floor(e/(24*60*60)),n=Math.floor(e%(24*60*60)/(60*60)),l=Math.floor(e%(60*60)/60),o=e%60;ae.textContent=t.toString().padStart(2,"0"),de.textContent=n.toString().padStart(2,"0"),ue.textContent=l.toString().padStart(2,"0"),me.textContent=o.toString().padStart(2,"0")};ye.addEventListener("click",()=>{j.value<0||pe()});const u=document.getElementById("dinoGamePlayer"),h=document.getElementById("dinoGameCactus"),d=document.getElementById("dinoGameScore"),v=document.getElementById("dinoGameReset"),ge=document.querySelector(".dino-game__container");let q=0,C=!1,L=!1;function $(...e){e.forEach(t=>{t&&(t.style.display="none")})}function Y(){C&&!u.classList.contains("jump")&&(u.classList.add("jump"),setTimeout(()=>u.classList.remove("jump"),400))}function fe(){C=!0,L=!1,d.style.marginTop="0",u.style.display=h.style.display="block",u.style.animationPlayState=h.style.animationPlayState="running",$(d,v),q=0}function be(){C=!1,d.textContent=`Гра закінчена! Ваш кінцевий рахунок: ${q}`,d.style.marginTop="36px",$(u,h,d),d.style.display=v.style.display="block",v.textContent="Грати знову"}v.addEventListener("click",fe);setInterval(()=>{if(!C)return;const e=parseInt(window.getComputedStyle(u).getPropertyValue("top")),t=parseInt(window.getComputedStyle(h).getPropertyValue("left"));t>0&&t<70&&e>=143?(u.style.animationPlayState=h.style.animationPlayState="paused",be()):t<=0&&!L?(q++,L=!0,d.textContent=`Ваш поточний рахунок : ${q}`,d.style.display="block"):t>400&&(L=!1)},39);window.addEventListener("keydown",e=>{e.code==="Space"&&(e.preventDefault(),Y())});document.addEventListener("DOMContentLoaded",()=>{$(u,h,d),v.textContent="Грати"});ge.addEventListener("click",e=>{e.preventDefault(),Y()});const a=document.querySelector(".football-field"),s=document.querySelector(".ball"),he=document.querySelector("#ball-move_score"),Se=document.querySelector("#goal");let G=0;setInterval(F,1e3);a.addEventListener("click",e=>{let t=a.getBoundingClientRect(),n={top:e.clientY-t.top-a.clientTop-s.clientHeight/2,left:e.clientX-t.left-a.clientLeft-s.clientWidth/2};n.top<0&&(n.top=0),n.left<0&&(n.left=0),n.left+s.clientWidth>a.clientWidth&&(n.left=a.clientWidth-s.clientWidth),n.top+s.clientHeight>a.clientHeight&&(n.top=a.clientHeight-s.clientHeight),s.style.left=n.left+"px",s.style.top=n.top+"px",F()});function F(){const e=Se.getBoundingClientRect(),t=s.getBoundingClientRect();t.right>e.left&&t.left<e.right&&t.bottom>e.top&&t.top<e.bottom&&(G++,he.textContent=G,setTimeout(ve,50))}function ve(){s.style.transform="translate(0%, 0%)",s.style.left=`${a.clientWidth/2-s.clientWidth/2}px`,s.style.top=`${a.clientHeight/2-s.clientHeight/2}px`}const Ee=document.querySelectorAll(".max-of-three__input"),_e=document.getElementById("max-of-three__output"),ke=()=>{const e=Number(document.getElementById("max-of-three__input-1").value)||0,t=Number(document.getElementById("max-of-three__input-2").value)||0,n=Number(document.getElementById("max-of-three__input-3").value)||0;_e.textContent=Math.max(e,t,n)};Ee.forEach(e=>{e.addEventListener("input",t=>{ke()})});new Swiper(".swiper",{navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},pagination:{el:".swiper-pagination",clickable:!0,dynamicBullets:!0},keyboard:{enabled:!0,onlyInViewport:!0,pageUpDown:!0},grabCursor:!0,mousewheel:{sensitivity:1,eventTarget:".image-slider"},autoHeight:!0});const i=[{name:"Albert",surname:"Einstein",born:1879,dead:1955,id:1},{name:"Isaac",surname:"Newton",born:1643,dead:1727,id:2},{name:"Galileo",surname:"Galilei",born:1564,dead:1642,id:3},{name:"Marie",surname:"Curie",born:1867,dead:1934,id:4},{name:"Johannes",surname:"Kepler",born:1571,dead:1630,id:5},{name:"Nicolaus",surname:"Copernicus",born:1473,dead:1543,id:6},{name:"Max",surname:"Planck",born:1858,dead:1947,id:7},{name:"Katherine",surname:"Blodgett",born:1898,dead:1979,id:8},{name:"Ada",surname:"Lovelace",born:1815,dead:1852,id:9},{name:"Sarah E.",surname:"Goode",born:1855,dead:1905,id:10},{name:"Lise",surname:"Meitner",born:1878,dead:1968,id:11},{name:"Hanna",surname:"Hammarström",born:1829,dead:1909,id:12}],Le=document.querySelectorAll(".scientists-selection__btn");let r=[...i];const qe=()=>{const e=document.querySelectorAll(".scientists-selection__item");e.forEach(t=>t.innerHTML=""),r.forEach((t,n)=>{e[n].innerHTML=`
            <p>
                <span>${t.name} ${t.surname}</span>
                <span>${t.born} - ${t.dead}</span>
            </p>
        `})};Le.forEach(e=>{e.addEventListener("click",t=>{const n=t.target.dataset.action;switch(console.log(n),n){case"born-in-19-century":Ce();break;case"sort-by-alphabet":Be();break;case"sort-by-lifespan":xe();break;case"find-latest-born":we();break;case"find-einstein-year":Ie();break;case"find-lastname-c":Ae();break;case"delete-name-a":Me();break;case"find-oldest-youngest":$e();break;case"find-match-initials":Ne();break}console.table(r),qe()})});const Ce=()=>{r=[...i].filter(e=>e.born>=1801&&e.born<=1900)},Be=()=>{r=r.slice().sort((e,t)=>e.name>t.name?1:-1)},xe=()=>{r=r.slice().sort((e,t)=>t.dead-t.born-(e.dead-e.born))},we=()=>{let e=i[0];i.forEach(t=>{t.born>e.born&&(e=t)}),r=[e]},Ie=()=>{r=[...i].filter(e=>e.name==="Albert"&&e.surname==="Einstein")},Ae=()=>{r=[...i].filter(e=>e.name.startsWith("S"))},Me=()=>{r=[...i].filter(e=>!e.name.startsWith("A"))},$e=()=>{let e=i[0],t=i[0];i.forEach(n=>{const l=n.dead-n.born;let o=t.dead-t.born,c=e.dead-e.born;o<l&&(t=n),c>e&&(e=n)}),r=[e,t]},Ne=()=>{r=[...i].filter(e=>{let t=e.name[0].toLowerCase(),n=e.surname[0].toLowerCase();return t===n})},Te=document.querySelector("[data-modal-close-signUp]");document.querySelector("[data-modal-signUp]");const w=document.querySelector(".sign-up__backdrop"),H=document.querySelector(".sign-up__input"),Pe=document.getElementById("header-output"),Ge=document.querySelector(".sign-up__submit"),He=document.querySelectorAll("[data-section]");w.addEventListener("click",e=>{e.target===w&&N()});Te.addEventListener("click",e=>{N()});Ge.addEventListener("click",e=>{Oe(),N()});He.forEach(e=>{e.addEventListener("click",t=>{const n=e.dataset.section,l=document.getElementById(n);if(l){const o=l.getBoundingClientRect().top+window.pageYOffset-150;window.scrollTo({top:o,behavior:"smooth"})}})});function N(){w.classList.toggle("modal-open"),document.body.classList.toggle("no-scroll")}function Oe(){Pe.textContent=H.value,H.value=""}const De=document.querySelector("[data-modal-close-success]"),I=document.querySelector(".success__backdrop"),We=document.querySelector(".footer-subscribe__send"),O=document.querySelector(".footer-subscribe__input");I.addEventListener("click",e=>{e.target===I&&T()});De.addEventListener("click",e=>{T()});We.addEventListener("click",e=>{if(!O.value.includes("@")){alert("Будь-ласка, введіть коректну пошту");return}T(),O.value=""});function T(){I.classList.toggle("modal-open"),document.body.classList.toggle("no-scroll")}
//# sourceMappingURL=commonHelpers.js.map
