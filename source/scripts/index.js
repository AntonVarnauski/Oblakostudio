/* eslint-disable */
const filter = document.querySelector('.production__filter');
const filterBtn = Array.from(filter.querySelectorAll('.filter__link'));
const production = Array.from(document.querySelectorAll('.production__item'));
// const bg = document.querySelectorAll('.cloud');

// for (let i = 0; i < bg.length; i++){
//   window.addEventListener('mousemove', (e) => {
//     const x = e.clientX / window.innerWidth;
//     const y = e.clientY / window.innerHeight;
//     if (i % 2 === 1) {
//       bg[i].style.transform = `translate(-${ x * 50 * (i + 0.5) }px, -${ y * 50 * (i + 0.5) }px)`;
//     } else {
//       bg[i].style.transform = `translate(${ x * 50 * (i + 0.5) }px, ${ y * 50 * (i + 0.5) }px)`;
//     }
//   });
// }

filterBtn.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    filterBtn.forEach((btn) => {
      e.preventDefault();
      btn.classList.remove('filter__link--active');
    });
    btn.classList.add('filter__link--active');
    let data = btn.dataset.filter;
    production.forEach((item) => {
      item.classList.remove('production__item--hide');
      if (!item.classList.contains(data) && data !== 'all') {
        item.classList.add('production__item--hide');
      }
    });
  });
});

window.addEventListener('DOMContentLoaded', () => {
  const elms = document.getElementsByClassName('splide');
  const teams = document.getElementsByClassName('team__item');

  new Splide('.serials', {
    type   : 'loop',
    perPage: 1,
    perMove: 1,
    padding: { left: 0, right: '30%' },
    arrows: false,
    pagination: false,
    gap: 50
  }).mount();

  for (let i = 0; i < elms.length; i++) {
    if (i === 0) continue;
    if (i % 2 === 1) {
      new Splide(elms[i], {
        type: 'loop',
        padding: { left: '50%', right: '50%' },
        perMove: 1,
        drag: false,
        arrows: false,
        pagination: false,
        direction: 'rtl',
        autoWidth: true,
        gap: 50,
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      }).mount(window.splide.Extensions);
    } else {
      new Splide(elms[i], {
        type: 'loop',
        padding: { left: '50%', right: '50%' },
        perMove: 1,
        drag: false,
        arrows: false,
        pagination: false,
        autoWidth: true,
        gap: 50,
        autoScroll: {
          speed: 1,
          pauseOnHover: false,
          pauseOnFocus: false,
        },
      }).mount(window.splide.Extensions);
    }
  }

  for(let i = 0; i < teams.length; i++) {
    teams[i].addEventListener('mouseover', () => {
      teams[i].classList.add('team__item--active');
    })
    teams[i].addEventListener('mouseleave', () => {
      teams[i].classList.remove('team__item--active');
    })
  }

  // if (window.matchMedia('(min-width: 768px)').matches) {
    let Engine = null;
    let World = null;
    let engine = null;
    let world = null;

    function initMatter (matterHolder) {
      const Engine = Matter.Engine,
            Render = Matter.Render,
            Runner = Matter.Runner,
            Bodies = Matter.Bodies,
            World = Matter.World,
            MouseConstraint = Matter.MouseConstraint,
            Mouse = Matter.Mouse,
            Bounds = Matter.Bounds,
            Composite = Matter.Composite
      const engine = Engine.create()
      engine.enableSleeping = true
      world = engine.world

      const heightAdjust = 1
      const width = matterHolder.clientWidth
      const height = matterHolder.clientHeight * heightAdjust
      const scale = window.devicePixelRatio
      const render = Render.create({
        element: matterHolder,
        engine,
        options: {
          wireframes: true,
          showAngleIndicator: false,
          background: 'transparent',
          showSleeping: false,
          width,
          height
        }
      })
      Matter.Render.setPixelRatio(render, scale)

      const runner = Runner.create();
      Runner.run(runner, engine);
      const placement = {x: 30, y: 10};
      const spacing = {x: 20, y: 20};

      createBoundingBox();
      addObjects()
      addMouse()

      const gravity = 0.05
      engine.world.gravity.y = gravity
      Matter.Runner.run(engine)
      Render.run(render)
      window.requestAnimationFrame(mapHTML);

      function createBoundingBox() {
        World.add(engine.world, [
          Bodies.rectangle(width / 2, height + 250, width, 500, {isStatic: true, fillStyle:'red', label: '_noMap'}),
          Bodies.rectangle(width / 2, 0, width, 100, {isStatic: true, label: '_noMap'}),
          Bodies.rectangle(-50, height / 2, 100, height, {isStatic: true, label: '_noMap'}),
          Bodies.rectangle(width + 50, height / 2, 100, height, {isStatic: true, label: '_noMap'}),
        ]);
      }

      function addObjects () {
        matterHolder.querySelectorAll('[data-object]').forEach((object) => {
          addObject(object)
        })
      }

      function addObject (object) {
        const objWidth = object.scrollWidth;
        const objHeight = object.scrollHeight;
        const rect = Matter.Bodies.rectangle(
          placement.x * spacing.y,
          placement.y * spacing.x,
          objWidth,
          objHeight,
          {
            label: object.getAttribute('data-object'),
            density: 0.8,
            frictionAir: 0.01,
            restitution: 0.5,
            friction: 0.001,
            render: {
              fillStyle: 'transparent',
              strokeStyle: 'transparent',
            }
        }, 100)
        World.add(engine.world, rect);
        Matter.Sleeping.update(rect, 50);
        const rotation = (Math.random() < 0.5 ? -1 : 1) * (Math.random() * 1)
        Matter.Body.rotate(rect, rotation)
        checkPlacement()
      }

      function checkPlacement() {
        placement.x++;
        if (placement.x * spacing.x > width - spacing.x) {
          placement.y++;
          placement.x = 1;
        }
      }

      function addMouse () {
        const mouse = Mouse.create(render.canvas);
        const mouseConstraint = MouseConstraint.create(engine, {
          mouse,
          constraint: {
            stiffness: 0.2,
            render: {
              fillStyle: 'transparent',
              strokeStyle: 'transparent',
              visible: false,
            },
          },
        });
        World.add(engine.world, mouseConstraint);

        mouse.element.removeEventListener('mousewheel', mouse.mousewheel);
        mouse.element.removeEventListener('DOMMouseScroll', mouse.mousewheel);
        render.mouse = mouse;
      }

      function mapHTML() {
        const allBodies = Matter.Composite.allBodies(engine.world);
        allBodies.forEach((body) => {
          const targetObject = matterHolder.querySelector(`[data-object="${body.label}"]`)
          if (body.label === '_noMap' || !targetObject) { return }
          targetObject.style.setProperty('--move-x', `${body.position.x}px`);
          targetObject.style.setProperty('--move-y', `${body.position.y}px`);
          targetObject.style.setProperty('--rotate', `${body.angle}rad`);
        })

        window.requestAnimationFrame(mapHTML);
      }
    }

    window.onload = () => {
      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                const matterHolder = document.querySelector('[data-html-matter]')
                if (!matterHolder) { return }
                initMatter(matterHolder)
              }
          })
      }, { threshold: 0.1 })
      observer.observe(document.querySelector('.rewards__list'))
    }
  // }
})
