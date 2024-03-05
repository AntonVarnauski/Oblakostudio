var w=document.querySelectorAll(".cloud");for(let e=0;e<w.length;e++)window.addEventListener("mousemove",i=>{let l=i.clientX/window.innerWidth,o=i.clientY/window.innerHeight;e%2===1?w[e].style.transform=`translate(-${l*50*(e+.5)}px, -${o*50*(e+.5)}px)`:w[e].style.transform=`translate(${l*50*(e+.5)}px, ${o*50*(e+.5)}px)`});var q=null;function W(e){let i=Matter.Engine,l=Matter.Render,o=Matter.Runner,a=Matter.Bodies,g=Matter.World,h=Matter.MouseConstraint,y=Matter.Mouse,_=Matter.Bounds,C=Matter.Composite,n=i.create();n.enableSleeping=!0,q=n.world;let x=1,s=e.clientWidth,c=e.clientHeight*x,b=window.devicePixelRatio,m=l.create({element:e,engine:n,options:{wireframes:!0,showAngleIndicator:!1,background:"transparent",showSleeping:!1,width:s,height:c}});Matter.Render.setPixelRatio(m,b);let v=o.create();o.run(v,n);let d={x:1,y:1},p={x:300,y:300};B(),E(),$();let S=.2;n.world.gravity.y=S,Matter.Runner.run(n),l.run(m),window.requestAnimationFrame(f);function B(){g.add(n.world,[a.rectangle(s/2,c+250,s,500,{isStatic:!0,label:"_noMap"}),a.rectangle(s/2,-50,s,100,{isStatic:!0,label:"_noMap"}),a.rectangle(-50,c/2,100,c,{isStatic:!0,label:"_noMap"}),a.rectangle(s+50,c/2,100,c,{isStatic:!0,label:"_noMap"})])}function E(){e.querySelectorAll("[data-object]").forEach(t=>{A(t)})}function A(t){let r=t.scrollWidth,u=t.scrollHeight,M=Matter.Bodies.rectangle(d.x*p.y,d.y*p.x,r,u,{label:t.getAttribute("data-object"),density:.8,frictionAir:.01,restitution:.5,friction:.001,render:{fillStyle:"transparent",strokeStyle:"transparent"}},100);g.add(n.world,M),Matter.Sleeping.update(M,50);let j=(Math.random()<.5?-1:1)*(Math.random()*1);Matter.Body.rotate(M,j),R()}function R(){d.x++,d.x*p.x>s-p.x&&(d.y++,d.x=1)}function $(){let t=y.create(m.canvas),r=h.create(n,{mouse:t,constraint:{stiffness:.2,render:{fillStyle:"transparent",strokeStyle:"transparent",visible:!1}}});g.add(n.world,r),t.element.removeEventListener("mousewheel",t.mousewheel),t.element.removeEventListener("DOMMouseScroll",t.mousewheel),m.mouse=t}function f(){Matter.Composite.allBodies(n.world).forEach(r=>{let u=e.querySelector(`[data-object="${r.label}"]`);r.label==="_noMap"||!u||(u.style.setProperty("--move-x",`${r.position.x}px`),u.style.setProperty("--move-y",`${r.position.y}px`),u.style.setProperty("--rotate",`${r.angle}rad`))}),window.requestAnimationFrame(f)}}window.onload=()=>{new IntersectionObserver((i,l)=>{i.forEach(o=>{if(o.isIntersecting){let a=document.querySelector("[data-html-matter]");if(!a)return;W(a)}})},{threshold:.1}).observe(document.querySelector(".rewards__list"))};
