const bg = document.querySelectorAll('.cloud');
for (let i = 0; i < bg.length; i++){
  window.addEventListener('mousemove', (e) => {
    const x = e.clientX / window.innerWidth;
    const y = e.clientY / window.innerHeight;
    if (i % 2 === 1) {
      bg[i].style.transform = 'translate(-' + x * 50 * (i + 0.5) + 'px, -' + y * 50 * (i + 0.5) + 'px)';
    } else {
      bg[i].style.transform = 'translate(' + x * 50 * (i + 0.5) + 'px, ' + y * 50 * (i + 0.5) + 'px)';
    }
  });
}
