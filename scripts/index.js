var S=document.querySelector(".nav__burger"),k=document.querySelector(".mobile__nav"),y=document.querySelectorAll(".cloud");S.addEventListener("click",()=>{S.classList.toggle("nav__burger--open"),k.classList.toggle("mobile__nav--open")});for(let t=0;t<y.length;t++)window.addEventListener("mousemove",a=>{let g=a.clientX/window.innerWidth,w=a.clientY/window.innerHeight;t%2===1?y[t].style.transform=`translate(-${g*50*(t+.5)}px, -${w*50*(t+.5)}px)`:y[t].style.transform=`translate(${g*50*(t+.5)}px, ${w*50*(t+.5)}px)`});window.addEventListener("DOMContentLoaded",()=>{let t=document.getElementsByClassName("splide"),a=document.getElementsByClassName("team__item");new Splide(".serials",{type:"loop",perPage:1,perMove:1,padding:{left:0,right:"30%"},arrows:!1,pagination:!1,gap:50}).mount();for(let e=0;e<t.length;e++)e!==0&&(e%2===1?new Splide(t[e],{type:"loop",perPage:10,perMove:1,arrows:!1,pagination:!1,direction:"rtl",autoWidth:!0,gap:50,autoScroll:{speed:1}}).mount(window.splide.Extensions):new Splide(t[e],{type:"loop",perPage:10,perMove:1,arrows:!1,pagination:!1,autoWidth:!0,gap:50,autoScroll:{speed:1}}).mount(window.splide.Extensions));for(let e=0;e<a.length;e++)a[e].addEventListener("mouseover",()=>{a[e].classList.add("team__item--active")}),a[e].addEventListener("mouseleave",()=>{a[e].classList.remove("team__item--active")});let g=null,w=null,I=null,x=null;function _(e){let f=Matter.Engine,M=Matter.Render,u=Matter.Runner,s=Matter.Bodies,v=Matter.World,E=Matter.MouseConstraint,B=Matter.Mouse,D=Matter.Bounds,F=Matter.Composite,o=f.create();o.enableSleeping=!0,x=o.world;let L=1,i=e.clientWidth,l=e.clientHeight*L,q=window.devicePixelRatio,p=M.create({element:e,engine:o,options:{wireframes:!0,showAngleIndicator:!1,background:"transparent",showSleeping:!1,width:i,height:l}});Matter.Render.setPixelRatio(p,q);let C=u.create();u.run(C,o);let c={x:1,y:1},m={x:300,y:300};W(),A(),j();let P=.3;o.world.gravity.y=P,Matter.Runner.run(o),M.run(p),window.requestAnimationFrame(b);function W(){v.add(o.world,[s.rectangle(i/2,l+250,i,500,{isStatic:!0,label:"_noMap"}),s.rectangle(i/2,-50,i,100,{isStatic:!0,label:"_noMap"}),s.rectangle(-50,l/2,100,l,{isStatic:!0,label:"_noMap"}),s.rectangle(i+50,l/2,100,l,{isStatic:!0,label:"_noMap"})])}function A(){e.querySelectorAll("[data-object]").forEach(n=>{R(n)})}function R(n){let r=n.scrollWidth,d=n.scrollHeight,h=Matter.Bodies.rectangle(c.x*m.y,c.y*m.x,r,d,{label:n.getAttribute("data-object"),density:.8,frictionAir:.01,restitution:.5,friction:.001,render:{fillStyle:"transparent",strokeStyle:"transparent"}},100);v.add(o.world,h),Matter.Sleeping.update(h,50);let O=(Math.random()<.5?-1:1)*(Math.random()*1);Matter.Body.rotate(h,O),$()}function $(){c.x++,c.x*m.x>i-m.x&&(c.y++,c.x=1)}function j(){let n=B.create(p.canvas),r=E.create(o,{mouse:n,constraint:{stiffness:.2,render:{fillStyle:"transparent",strokeStyle:"transparent",visible:!1}}});v.add(o.world,r),n.element.removeEventListener("mousewheel",n.mousewheel),n.element.removeEventListener("DOMMouseScroll",n.mousewheel),p.mouse=n}function b(){Matter.Composite.allBodies(o.world).forEach(r=>{let d=e.querySelector(`[data-object="${r.label}"]`);r.label==="_noMap"||!d||(d.style.setProperty("--move-x",`${r.position.x}px`),d.style.setProperty("--move-y",`${r.position.y}px`),d.style.setProperty("--rotate",`${r.angle}rad`))}),window.requestAnimationFrame(b)}}window.onload=()=>{new IntersectionObserver((f,M)=>{f.forEach(u=>{if(u.isIntersecting){let s=document.querySelector("[data-html-matter]");if(!s)return;_(s)}})},{threshold:.1}).observe(document.querySelector(".rewards__list"))}});
