var c=document.querySelector(".nav__burger"),t=document.querySelector(".mobile__nav"),n=document.querySelectorAll(".mobile__nav a"),a=document.querySelector(".footer__callback"),d=Array.from(document.querySelectorAll(".modal__close")),o=Array.from(document.querySelectorAll(".production__item--video"));a.addEventListener("click",e=>{e.preventDefault(),document.querySelector(".modal").showModal()});d.forEach(e=>{e.addEventListener("click",()=>{document.querySelector(".modal").close()})});c.addEventListener("click",()=>{c.classList.toggle("nav__burger--open"),t.classList.toggle("mobile__nav--open")});n.forEach(e=>{e.addEventListener("click",()=>{c.classList.remove("nav__burger--open"),t.classList.remove("mobile__nav--open")})});o.forEach(e=>{e.querySelectorAll(".production__link").forEach(l=>{l.addEventListener("click",r=>{r.preventDefault(),o.querySelector(".modal").showModal()})})});o.forEach(e=>{e.querySelector(".modal__close").addEventListener("click",l=>{l.preventDefault(),o.querySelector(".modal").close()})});
