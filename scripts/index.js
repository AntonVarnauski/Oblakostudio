var f=document.querySelectorAll(".cloud");for(let e=0;e<f.length;e++)window.addEventListener("mousemove",n=>{let i=n.clientX/window.innerWidth,a=n.clientY/window.innerHeight;e%2===1?f[e].style.transform=`translate(-${i*50*(e+.5)}px, -${a*50*(e+.5)}px)`:f[e].style.transform=`translate(${i*50*(e+.5)}px, ${a*50*(e+.5)}px)`});var R=null;function $(e){let n=Matter.Engine,i=Matter.Render,a=Matter.Runner,s=Matter.Bodies,g=Matter.World,h=Matter.MouseConstraint,y=Matter.Mouse,j=Matter.Bounds,q=Matter.Composite,o=n.create();o.enableSleeping=!0,R=o.world;let x=1,l=e.clientWidth,c=e.clientHeight*x,v=window.devicePixelRatio,p=i.create({element:e,engine:o,options:{wireframes:!0,showAngleIndicator:!1,background:"transparent",showSleeping:!1,width:l,height:c}});Matter.Render.setPixelRatio(p,v);let S=a.create();a.run(S,o);let d={x:1,y:1},w={x:300,y:300};E(),B(),C();let b=.3;o.world.gravity.y=b,Matter.Runner.run(o),i.run(p),window.requestAnimationFrame(M);function E(){g.add(o.world,[s.rectangle(l/2,c+250,l,500,{isStatic:!0,label:"_noMap"}),s.rectangle(l/2,-50,l,100,{isStatic:!0,label:"_noMap"}),s.rectangle(-50,c/2,100,c,{isStatic:!0,label:"_noMap"}),s.rectangle(l+50,c/2,100,c,{isStatic:!0,label:"_noMap"})])}function B(){e.querySelectorAll("[data-object]").forEach(t=>{W(t)})}function W(t){let r=t.scrollWidth,u=t.scrollHeight,m=Matter.Bodies.rectangle(d.x*w.y,d.y*w.x,r,u,{label:t.getAttribute("data-object"),density:.8,frictionAir:.01,restitution:.5,friction:.001,render:{fillStyle:"transparent",strokeStyle:"transparent"}},100);g.add(o.world,m),Matter.Sleeping.update(m,50);let P=(Math.random()<.5?-1:1)*(Math.random()*1);Matter.Body.rotate(m,P),A()}function A(){d.x++,d.x*w.x>l-w.x&&(d.y++,d.x=1)}function C(){let t=y.create(p.canvas),r=h.create(o,{mouse:t,constraint:{stiffness:.2,render:{fillStyle:"transparent",strokeStyle:"transparent",visible:!1}}});g.add(o.world,r),t.element.removeEventListener("mousewheel",t.mousewheel),t.element.removeEventListener("DOMMouseScroll",t.mousewheel),p.mouse=t}function M(){Matter.Composite.allBodies(o.world).forEach(r=>{let u=e.querySelector(`[data-object="${r.label}"]`);r.label==="_noMap"||!u||(u.style.setProperty("--move-x",`${r.position.x}px`),u.style.setProperty("--move-y",`${r.position.y}px`),u.style.setProperty("--rotate",`${r.angle}rad`))}),window.requestAnimationFrame(M)}}window.onload=()=>{new IntersectionObserver((n,i)=>{n.forEach(a=>{if(a.isIntersecting){let s=document.querySelector("[data-html-matter]");if(!s)return;$(s)}})},{threshold:.1}).observe(document.querySelector(".rewards__list"))};window.addEventListener("DOMContentLoaded",()=>{let e=document.getElementsByClassName("splide");for(var n=0;n<e.length;n++)n%2===1?new Splide(e[n],{type:"loop",perPage:11,perMove:1,arrows:!1,pagination:!1,direction:"rtl",autoWidth:!0,gap:30,autoScroll:{speed:2}}).mount(window.splide.Extensions):new Splide(e[n],{type:"loop",perPage:11,perMove:1,arrows:!1,pagination:!1,autoWidth:!0,gap:30,autoScroll:{speed:2}}).mount(window.splide.Extensions)});
