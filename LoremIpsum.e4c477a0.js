document.addEventListener("DOMContentLoaded",()=>{let e=document.querySelector(".range__input"),t=document.querySelector(".range__value");if(e&&t){let n=()=>{t.textContent=`${e.value} %`};e.addEventListener("input",n),n()}let n=document.querySelector(".file__input"),r=n?.nextElementSibling;n&&r&&n.addEventListener("change",()=>{r.textContent=n.files[0]?.name||"Прикрепить файл"});let o=document.querySelector(".form");o&&o.addEventListener("submit",e=>{e.preventDefault(),console.log("Form data:",Object.fromEntries(new FormData(o))),o.reset(),r&&(r.textContent="Прикрепить файл")});let l=document.querySelectorAll(".header__link");l.forEach(e=>{e.addEventListener("click",t=>{let n=e.getAttribute("href");if(n.startsWith("#")){t.preventDefault();let e=document.querySelector(n);e&&e.scrollIntoView({behavior:"smooth"})}})});let c=document.querySelector(".header__burger"),a=document.querySelector(".header__nav"),i=document.body;c&&a&&(c.addEventListener("click",()=>{c.classList.toggle("active"),a.classList.toggle("active"),i.classList.toggle("lock")}),l.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("active"),a.classList.remove("active"),i.classList.remove("lock")})}))});
//# sourceMappingURL=LoremIpsum.e4c477a0.js.map
