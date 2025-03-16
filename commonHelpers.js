(function(){const c=document.createElement("link").relList;if(c&&c.supports&&c.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const s of i)if(s.type==="childList")for(const m of s.addedNodes)m.tagName==="LINK"&&m.rel==="modulepreload"&&r(m)}).observe(document,{childList:!0,subtree:!0});function l(i){const s={};return i.integrity&&(s.integrity=i.integrity),i.referrerPolicy&&(s.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?s.credentials="include":i.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function r(i){if(i.ep)return;i.ep=!0;const s=l(i);fetch(i.href,s)}})();const Mt=document.querySelector(".open-modal-backdrop");document.querySelectorAll("[data-open-modal-close]");const wt=document.querySelector(".open-modal__input"),Dt=document.querySelector(".open-modal__button"),Nt=document.querySelector(".header-hello-user span"),Wt=document.querySelector("#open-modal_result");function Ht(){Mt.style.display="none"}Dt.addEventListener("click",()=>{const t=wt.value.trim();if(t===""){Wt.textContent="Введіть коректне ім'я!";return}else Nt.textContent=t,Ht()});const _=document.querySelector(".interaktiv-item"),x=document.querySelector(".svg-interaktiv"),N=document.querySelector(".sec-select"),Rt=document.querySelectorAll(".sec-select-item"),at=document.querySelectorAll(".open-modal"),J=document.querySelectorAll("#numerical"),U=document.querySelectorAll("#playing"),V=document.querySelectorAll("#acquaintance"),w=document.querySelector("#dark-mode-change"),rt=document.querySelector(".dark-mode-change"),yt=document.body,dt=document.querySelector("header"),ut=document.querySelector("footer");w.addEventListener("click",()=>{w.getAttribute("src").includes("light.png")?(w.setAttribute("src","./img/dark.png"),rt.style.background="darkgray",_.style.background="darkgray",_.style.color="#eee",yt.classList.remove("dark-mode"),dt.classList.add("dark-mode"),ut.classList.add("dark-mode"),at.forEach(c=>{c.classList.add("dark-mode")})):(w.setAttribute("src","./img/light.png"),rt.style.background="#eee",_.style.background="#eee",_.style.color="#000",yt.classList.add("dark-mode"),dt.classList.remove("dark-mode"),ut.classList.remove("dark-mode"),at.forEach(c=>{c.classList.remove("dark-mode")}))});_.addEventListener("mouseover",()=>{x.style.opacity=1,x.style.visibility="visible",x.style.pointerEvents="initial",N.classList.add("visible")});_.addEventListener("click",()=>{N.classList.contains("visible")?(x.style.opacity=0,x.style.visibility="hidden",x.style.pointerEvents="none",N.classList.remove("visible"),J.forEach(t=>t.classList.remove("hidden")),U.forEach(t=>t.classList.remove("hidden")),V.forEach(t=>t.classList.remove("hidden"))):N.classList.add("visible")});Rt.forEach(t=>{t.addEventListener("click",()=>{const c=t.textContent.trim();switch(J.forEach(l=>l.classList.add("hidden")),U.forEach(l=>l.classList.add("hidden")),V.forEach(l=>l.classList.add("hidden")),c){case"Числовий":J.forEach(l=>l.classList.remove("hidden"));break;case"Ігровий":U.forEach(l=>l.classList.remove("hidden"));break;case"Ознайомчий":V.forEach(l=>l.classList.remove("hidden"));break}})});const ot=document.querySelector(".dino__per"),ct=document.querySelector(".dino__cactus");let W,q=200;window.addEventListener("keydown",t=>{t.code==="KeyJ"&&(ot.style.bottom="120px")});window.addEventListener("keyup",t=>{t.code==="KeyJ"&&(ot.style.bottom="37px")});const Ot=document.querySelector(".dino__start");Ot.addEventListener("click",t=>{W||(W=setInterval(()=>{q+=1,ct.style.right=`${q}px`,q>=900&&(q=200)},1))});function Ft(){const t=ot.getBoundingClientRect(),c=ct.getBoundingClientRect();t.right>c.left&&t.left<c.right&&t.bottom>c.top&&t.top<c.bottom&&zt()}function zt(){clearInterval(W),W=null,ct.style.right="200px",q=200}setInterval(Ft,50);const H=document.querySelector(".team__slider"),Pt=document.getElementById("next"),Gt=document.getElementById("prev");Pt.onclick=()=>{H.append(H.querySelector("div:first-child"))};Gt.onclick=()=>{H.prepend(H.querySelector("div:last-child"))};const Kt=document.querySelector("[data-footer-modal-open]"),Yt=document.querySelector("[data-footer-modal-close]"),pt=document.querySelector(".backdrop"),C=document.querySelector("body"),Jt=document.querySelector(".footer__form-email");Kt.addEventListener("click",t=>{t.preventDefault(),Jt.value.includes("@")&&(C.classList.add("show-modal"),C.classList.add("no-scroll"))});Yt.addEventListener("click",t=>{t.preventDefault(),C.classList.remove("show-modal"),C.classList.remove("no-scroll")});pt.addEventListener("click",t=>{t.target===pt&&(C.classList.remove("show-modal"),C.classList.remove("no-scroll"))});const mt=document.querySelectorAll(".sug-num-text"),Ut=document.querySelector(".big-num-res"),ft=[];for(let t=0;t<mt.length;t++)mt[t].addEventListener("blur",c=>{const l=parseFloat(c.target.value);l>0&&(console.log("good num"),ft.push(l));const r=Math.max(...ft);Ut.textContent=r});document.addEventListener("DOMContentLoaded",function(){let t=document.querySelector(".calculator__input-1"),c=document.querySelector(".calculator__input-2"),l=document.querySelector(".calculator__input-3"),r=null;function i(){let n=parseFloat(t.value),h=parseFloat(c.value);if(isNaN(n)||isNaN(h)){l.value="";return}switch(r){case"+":l.value=n+h;break;case"-":l.value=n-h;break;case"*":l.value=n*h;break;case"/":l.value=h===0?"На 0 не ділиться!":n/h;break;default:l.value="Оберіть дію!"}}function s(n){r=n}function m(n){document.querySelectorAll(".calculator__button").forEach(h=>h.classList.remove("active")),n.classList.add("active")}document.querySelector(".calculator__plus").addEventListener("click",n=>{s("+"),m(n.target)}),document.querySelector(".calculator__minus").addEventListener("click",n=>{s("-"),m(n.target)}),document.querySelector(".calculator__double").addEventListener("click",n=>{s("*"),m(n.target)}),document.querySelector(".calculator__dilenya").addEventListener("click",n=>{s("/"),m(n.target)}),document.querySelector(".calculator__dorivnue").addEventListener("click",n=>{i(),m(n.target)})});const vt=document.querySelector(".time-calculator-input"),gt=document.querySelector(".time-calculator-time"),Vt=document.querySelector(".time-calculator-form");Vt.addEventListener("submit",t=>{t.preventDefault();const c=parseInt(vt.value);if(Number.isInteger(c)&&c>=0){const l=Math.floor(c/86400),r=Math.floor(c%86400/3600),i=Math.floor(c%3600/60),s=c%60,m=`${l} дн. ${String(r).padStart(2,"0")}:${String(i).padStart(2,"0")}:${String(s).padStart(2,"0")}`;gt.textContent=m}else gt.textContent="Введіть число.";vt.value=""});const R=document.querySelector("#yearInput"),Xt=document.querySelector("#checkButton"),k=document.querySelector("#result");function St(t){return t%4===0&&t%100!==0||t%400===0}Xt.addEventListener("click",t=>{t.preventDefault();const c=parseInt(R.value,10);if(Number(c)&&c>0){const l=St(c);k.textContent=l?"Ви народилися у високосний рік!":"Ви народилися не у високосний рік!",k.style.color=l?"green":"red"}else k.textContent="Будь ласка, введіть коректний рік.",k.style.color="darkred";R.value=""});R.addEventListener("keydown",t=>{if(t.key==="Enter"){t.preventDefault();const c=parseInt(R.value,10);if(!isNaN(c)&&c>0){const l=St(c);k.textContent=l?"Ви народилися у високосний рік!":"Ви народилися не у високосний рік!",k.style.color=l?"green":"red"}else k.textContent="Будь ласка, введіть коректний рік.",k.style.color="darkred"}});const X=document.getElementById("rock"),Z=document.getElementById("scissors"),j=document.getElementById("paper"),b=document.getElementById("rsp-result"),Zt=document.getElementById("check-result"),jt=document.getElementById("person-score"),Qt=document.getElementById("comp-score");let v=null,ht=0,kt=0;function K(){X.style.border=0,j.style.border=0,Z.style.border=0}X.addEventListener("click",()=>{v=1,K(),X.style.border="dashed gray"});j.addEventListener("click",()=>{v=2,K(),j.style.border="dashed gray"});Z.addEventListener("click",()=>{v=3,K(),Z.style.border="dashed gray"});function te(t){let c,l="";t===1?l="Комп'ютер вибрав Камінь":t===3?l="Комп'ютер вибрав Ножиці":t===2&&(l="Комп'ютер вибрав Папір"),v===t?(b.style.color="black",c="Нічия!"):v===1&&t===3||v===2&&t===1||v===3&&t===2?(ht++,jt.textContent=ht,c="Ви виграли раунд!",b.style.color="green"):(kt++,Qt.textContent=kt,b.style.color="red",c="Комп'ютер виграв раунд!"),b.textContent=`${c}. ${l}`,v=null,K()}Zt.addEventListener("click",()=>{if(v!==null){b.style.opacity="1";let t=Math.floor(Math.random()*3)+1;te(t)}else b.textContent="Виберіть один із варіантів",b.style.color="black"});const Lt=document.getElementById("guess"),ee=document.querySelector(".randnumb__button"),p=document.querySelector(".randnumb__message");function _t(){return Math.floor(Math.random()*8)+2}let D=_t();ee.addEventListener("click",t=>{t.preventDefault();const c=parseInt(Lt.value,10);Number(c)&&c>=2&&c<=9?c===D?(p.textContent=`Вітаю, ви вгадали число! (${D})`,p.style.color="hsl(119, 100.00%, 30.00%)",p.style.fontSize="12px",p.style.textAlign="right",p.style.fontWeight=400):(p.textContent=`Ви програли, комп’ютер загадав (${D})`,p.style.color="darkred",p.style.fontSize="12px",p.style.textAlign="right",p.style.fontWeight=400,D=_t()):(p.textContent="Будь ласка, введіть число від 2 до 9.",p.style.color="hsl(19, 100.00%, 50.40%)"),Lt.value=""});const oe=document.querySelector(".dark-mode-change");oe.addEventListener("click",()=>{document.body.classList.toggle("dark-mode")});const L=document.querySelectorAll(".scientist__button"),e=document.querySelectorAll(".scientist__image"),o=document.querySelectorAll(".scientist__description"),xt=document.querySelectorAll(".scientist__item-box"),Ct=document.querySelectorAll(".scientist__item");L[0].addEventListener("click",()=>{e[1].style.opacity=0,e[2].style.opacity=0,e[4].style.opacity=0,e[5].style.opacity=0,e[0].style.opacity=1,e[3].style.opacity=1,e[6].style.opacity=1,e[7].style.opacity=1,e[8].style.opacity=1,e[9].style.opacity=1,e[10].style.opacity=1,e[11].style.opacity=1,o[1].style.opacity=0,o[2].style.opacity=0,o[4].style.opacity=0,o[5].style.opacity=0,o[0].style.opacity=1,o[3].style.opacity=1,o[6].style.opacity=1,o[7].style.opacity=1,o[8].style.opacity=1,o[9].style.opacity=1,o[10].style.opacity=1,o[11].style.opacity=1});L[1].addEventListener("click",()=>{o[1].style.opacity=1,o[2].style.opacity=1,o[4].style.opacity=1,o[5].style.opacity=1,o[0].style.opacity=1,o[3].style.opacity=1,o[6].style.opacity=1,o[7].style.opacity=1,o[8].style.opacity=1,o[9].style.opacity=1,o[10].style.opacity=1,o[11].style.opacity=1,e[1].style.opacity=1,e[2].style.opacity=1,e[4].style.opacity=1,e[5].style.opacity=1,e[0].style.opacity=1,e[3].style.opacity=1,e[6].style.opacity=1,e[7].style.opacity=1,e[8].style.opacity=1,e[9].style.opacity=1,e[10].style.opacity=1,e[11].style.opacity=1;const t=[...xt],c=[];c[0]=t[0],c[1]=t[8],c[2]=t[2],c[3]=t[11],c[4]=t[1],c[5]=t[4],c[6]=t[7],c[7]=t[10],c[8]=t[3],c[9]=t[6],c[10]=t[5],c[11]=t[9],Ct.forEach((l,r)=>{l.append(c[r])})});L[2].addEventListener("click",()=>{o[1].style.opacity=1,o[2].style.opacity=1,o[4].style.opacity=1,o[5].style.opacity=1,o[0].style.opacity=1,o[3].style.opacity=1,o[6].style.opacity=1,o[7].style.opacity=1,o[8].style.opacity=1,o[9].style.opacity=1,o[10].style.opacity=1,o[11].style.opacity=1,e[1].style.opacity=1,e[2].style.opacity=1,e[4].style.opacity=1,e[5].style.opacity=1,e[0].style.opacity=1,e[3].style.opacity=1,e[6].style.opacity=1,e[7].style.opacity=1,e[8].style.opacity=1,e[9].style.opacity=1,e[10].style.opacity=1,e[11].style.opacity=1;const t=[...xt],c=[];c[0]=t[10],c[11]=t[8],c[2]=t[2],c[8]=t[3],c[4]=t[1],c[9]=t[4],c[3]=t[7],c[7]=t[5],c[5]=t[11],c[1]=t[6],c[6]=t[0],c[10]=t[9],Ct.forEach((l,r)=>{l.append(c[r])})});L[3].addEventListener("click",()=>{e[1].style.opacity=0,e[2].style.opacity=0,e[4].style.opacity=0,e[5].style.opacity=0,e[3].style.opacity=0,e[6].style.opacity=0,e[8].style.opacity=0,e[9].style.opacity=0,e[10].style.opacity=0,e[0].style.opacity=0,e[11].style.opacity=0,e[7].style.opacity=1,o[1].style.opacity=0,o[2].style.opacity=0,o[4].style.opacity=0,o[5].style.opacity=0,o[3].style.opacity=0,o[6].style.opacity=0,o[8].style.opacity=0,o[9].style.opacity=0,o[10].style.opacity=0,o[0].style.opacity=0,o[11].style.opacity=0,o[7].style.opacity=1});L[4].addEventListener("click",()=>{e[1].style.opacity=0,e[2].style.opacity=0,e[4].style.opacity=0,e[5].style.opacity=0,e[3].style.opacity=0,e[6].style.opacity=0,e[8].style.opacity=0,e[9].style.opacity=0,e[10].style.opacity=0,e[7].style.opacity=0,e[11].style.opacity=0,e[0].style.opacity=1,o[1].style.opacity=0,o[2].style.opacity=0,o[4].style.opacity=0,o[5].style.opacity=0,o[3].style.opacity=0,o[6].style.opacity=0,o[8].style.opacity=0,o[9].style.opacity=0,o[10].style.opacity=0,o[7].style.opacity=0,o[11].style.opacity=0,o[0].style.opacity=1});L[5].addEventListener("click",()=>{e[1].style.opacity=0,e[2].style.opacity=0,e[4].style.opacity=1,e[5].style.opacity=1,e[3].style.opacity=1,e[6].style.opacity=0,e[8].style.opacity=0,e[9].style.opacity=0,e[10].style.opacity=0,e[7].style.opacity=0,e[11].style.opacity=0,e[0].style.opacity=0,o[1].style.opacity=0,o[2].style.opacity=0,o[4].style.opacity=1,o[5].style.opacity=1,o[3].style.opacity=1,o[6].style.opacity=0,o[8].style.opacity=0,o[9].style.opacity=0,o[10].style.opacity=0,o[7].style.opacity=0,o[11].style.opacity=0,o[0].style.opacity=0});L[6].addEventListener("click",()=>{e[1].style.opacity=0,e[2].style.opacity=0,e[4].style.opacity=0,e[5].style.opacity=0,e[3].style.opacity=0,e[6].style.opacity=0,e[8].style.opacity=1,e[9].style.opacity=0,e[10].style.opacity=0,e[7].style.opacity=0,e[11].style.opacity=0,e[0].style.opacity=1,o[1].style.opacity=0,o[2].style.opacity=0,o[4].style.opacity=0,o[5].style.opacity=0,o[3].style.opacity=0,o[6].style.opacity=0,o[8].style.opacity=1,o[9].style.opacity=0,o[10].style.opacity=0,o[7].style.opacity=0,o[11].style.opacity=0,o[0].style.opacity=1});L[7].addEventListener("click",()=>{e[1].style.opacity=0,e[2].style.opacity=0,e[4].style.opacity=0,e[5].style.opacity=0,e[3].style.opacity=0,e[6].style.opacity=0,e[8].style.opacity=1,e[9].style.opacity=0,e[10].style.opacity=1,e[7].style.opacity=0,e[11].style.opacity=0,e[0].style.opacity=0,o[1].style.opacity=0,o[2].style.opacity=0,o[4].style.opacity=0,o[5].style.opacity=0,o[3].style.opacity=0,o[6].style.opacity=0,o[8].style.opacity=1,o[9].style.opacity=0,o[10].style.opacity=1,o[7].style.opacity=0,o[11].style.opacity=0,o[0].style.opacity=0});const a=document.querySelector(".football__ball"),u=document.querySelector(".football__field"),S=document.querySelector("#goal-left"),lt=document.querySelector("#goal-count"),st=document.querySelector("#timer"),O=document.querySelector(".football__start"),F=document.querySelector(".football__stop");let B=0,Q=!1,tt,E=30,z=!1;u.onclick=function(t){if(!z||Q)return;let c=this.getBoundingClientRect(),l={top:t.clientY-c.top-u.clientTop-a.clientHeight/2,left:t.clientX-c.left-u.clientLeft-a.clientWidth/2};l.top<0&&(l.top=0),l.left<0&&(l.left=0),l.left+a.clientWidth>u.clientWidth&&(l.left=u.clientWidth-a.clientWidth),l.top+a.clientHeight>u.clientHeight&&(l.top=u.clientHeight-a.clientHeight),a.style.left=l.left+"px",a.style.top=l.top+"px",l.left+a.clientWidth>S.offsetLeft&&l.left<S.offsetLeft+S.clientWidth&&l.top+a.clientHeight>S.offsetTop&&l.top<S.offsetTop+S.clientHeight&&(Q=!0,setTimeout(()=>{B++,lt.textContent=B},1e3),setTimeout(ce,3e3))};function ce(){let t=u.getBoundingClientRect(),c=t.left+u.clientWidth/2-a.clientWidth/2,l=t.top+u.clientHeight/2-a.clientHeight/2;c<t.left&&(c=t.left),l<t.top&&(l=t.top),c+a.clientWidth>u.clientWidth+t.left&&(c=u.clientWidth+t.left-a.clientWidth),l+a.clientHeight>u.clientHeight+t.top&&(l=u.clientHeight+t.top-a.clientHeight),a.style.left=c-t.left+"px",a.style.top=l-t.top+"px",Q=!1}function qt(){z=!0,tt=setInterval(()=>{E--,st.textContent=E+" сек",E<=0&&(clearInterval(tt),lt.textContent=0,B=0,F.style.display="none",O.style.display="inline-block",z=!1,se())},1e3),O.style.display="none",F.style.display="inline-block"}function le(){clearInterval(tt),z=!1,O.style.display="inline-block",F.style.display="none",B=0,lt.textContent=B,E=30,st.textContent=E+" сек"}function se(){E=30,st.textContent=E+" сек",qt()}O.addEventListener("click",qt);F.addEventListener("click",le);let y=0,d=110,A=!1,It,ie=10;const Bt=1e4;let it=!1,T=!1,Tt=!1,et=0,I=0,ne=[50,25],$=!1;const Y=document.getElementById("start-button"),f=document.getElementById("timer-clicker"),g=document.getElementById("click-area"),M=document.getElementById("click-count"),nt=document.getElementById("clicks-text"),ae=document.getElementById("result"),P=document.getElementById("status-text"),G=document.getElementById("phase-description");setTimeout(()=>{Y.removeAttribute("disabled")},3e3);function re(){y=0,d=110,A=!1,it=!1,T=!1,Tt=!1,et=0,I=0,M.textContent=y,ae.textContent="",P.textContent="Підготовча фаза",g.classList.remove("clicker__click-area--inactive","clicker__click-area--post-war"),g.classList.add("clicker__click-area--preparation"),nt.classList.add("clicker__clicks-text--hidden"),G.textContent="Готуйтеся! Гра почнеться через 10 секунд.",f.style.color="rgb(0, 191, 255)";let t=ie;f.textContent=`00:${t}`,Y.classList.add("clicker__start-button--hidden");let c=setInterval(()=>{t--,console.log(f),f.innerHTML=`00:${t<10?"0"+t:t}`,f.style.color=`rgb(0, ${128+t/10*127}, 0)`,t<=0&&(clearInterval(c),ye())},1e3)}function ye(){A=!0,P.textContent="Активна фаза",g.classList.remove("clicker__click-area--preparation"),g.classList.add("clicker__click-area--active"),nt.classList.remove("clicker__clicks-text--hidden"),G.textContent="Клікайте по полю, щоб набрати 10,000 очок і знищити зло!Час обмежений – 1 хв 50 сек,  Якщо за 55 сек у вас менше 5000 очок – отримаєте +375 очок і x3 множник на 10 сек. На 50с та 25с гра заморожується на 5 сек (кліки не рахуються), після чого ви отримуєте +500 очок. У останні 5 сек множник зростає в 4 рази. Штраф: якщо ви не клікаєте 9 сек (після 6,000 очок), наступний клік -3,000 очок. Кожні 1,000 очок дають +100 очок і +3 сек.🔥 Готові до бою? ",de()}function de(){It=setInterval(()=>{if(!$){if(d--,f.textContent=`00:${d<10?"0"+d:d}`,d>55){let t=(110-d)/55;f.style.color=`rgb(0, ${255-t*127}, 0)`}else if(d>25){let t=(55-d)/30;f.style.color=`rgb(${t*255}, ${255-t*127}, 0)`}else f.style.color="red";ne.includes(d)&&ue(),d<=5&&pe(),d<=55&&y<5e3&&!it&&me(),d<=0&&$t()}},1e3)}function ue(){$=!0,g.style.backgroundColor="gray",f.style.color="gray",y+=500,M.textContent=`${y}`,setTimeout(()=>{$=!1,g.style.backgroundColor="yellow",f.style.color="red"},5e3)}function pe(){T=!0}function me(){it=!0,y+=375,T=!0,setTimeout(()=>{T=!1},1e4),d+=10,M.textContent=`${y}`}function fe(){if(A&&!$){let t=new Date().getTime(),c=(t-et)/1e3;et=t,c<1?(I++,I>=3&&(y+=10,I=0)):I=1;let l=T?80:Tt||d<=10?40:20;y+=l,y>=6e3&&c>9&&(y-=3e3),M.textContent=`${y}`,y>=Bt&&$t()}}function ve(t){(t.key==="u"||t.key==="U")&&A&&!$&&(y-=1,M.textContent=`${y}`)}function $t(){clearInterval(It),A=!1,g.classList.remove("clicker__click-area--active"),g.classList.add("clicker__click-area--post-war"),y<Bt?(P.textContent="Після воєнна фаза",G.textContent="Зло перемогло, та нездавайся і добро його переможе."):(P.textContent="Після воєнна фаза",G.textContent="Ви перемогли! Зло відступило, але ненадовго."),nt.classList.add("clicker__clicks-text--hidden"),Y.classList.remove("clicker__start-button--hidden")}Y.addEventListener("click",re);g.addEventListener("click",fe);document.addEventListener("keydown",ve);const ge=document.getElementById("scrollToTopBtn");ge.addEventListener("click",function(){window.scrollTo({top:0,behavior:"smooth"})});document.addEventListener("DOMContentLoaded",function(){const t=["Сьогодні твій день!","Звісно день може бути поганим! Але точно завтра пощастить","Готуйсь до змін!","Треба зусилля для успіху!","Сьогодні Біблія, завтра Кобзар!","Йди вперед, але періодично зупиняйся!","Час виконати неможливу мрію!","Не гріши! Не сміти! Не заздри!","Нічого гарного, нічого поганого не буде без ризику","У чомусь потужному є Ахіллесова п’ята.","-.. / .-.- / -.- / ..-- / --.. / .- / --. / .-. / ..- / -.-.--","Сердечко + Україна + Стрілка + Сонце + Стрілка + Вітер + Трава + Вода"];document.getElementById("cookieBtn").addEventListener("click",function(){let c=[],l=new Set;for(;c.length<3;){let i=Math.floor(Math.random()*t.length);l.has(i)||(l.add(i),c.push(t[i]))}let r=document.getElementById("fortunes");r.innerHTML="",c.forEach(i=>{let s=document.createElement("div");s.textContent=i,s.style.padding="8px",s.style.margin="10px 0",s.style.border="1px solid #d4b600",s.style.borderRadius="5px",s.style.textAlign="center",s.style.fontSize="14px",s.style.fontWeight="bold",r.appendChild(s)})})});function At(){const c={timeZone:document.getElementById("timezone").value,hour:"2-digit",minute:"2-digit",second:"2-digit"},l=new Intl.DateTimeFormat("uk-UA",c);document.getElementById("clock").textContent=l.format(new Date)}setInterval(At,1e3);At();const bt=document.querySelector(".footer__form-email"),Et=document.querySelector("#footer-result"),he=document.querySelector(".footer__button");function ke(t){return t===""||!t.includes("@")}he.addEventListener("click",t=>{t.preventDefault();const c=bt.value.trim();ke(c)?Et.textContent="Введіть коректний email!":(Et.textContent="",bt.value="")});
//# sourceMappingURL=commonHelpers.js.map
