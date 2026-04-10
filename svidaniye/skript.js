document.getElementById('no-button').addEventListener('mouseenter', () => {
    const noBtn = document.getElementById('no-button');
    const maxX = window.innerWidth - noBtn.offsetWidth;
    const maxY = window.innerHeight - noBtn.offsetHeight;
    const x = Math.random() * maxX;
    const y = Math.random() * maxY;
    noBtn.style.position = 'fixed';  // важно: кнопка должна быть fixed или absolute
    noBtn.style.left = `${x}px`;
    noBtn.style.top = `${y}px`;
});

//document.getElementById('yes-button1').addEventListener('click', () => location = 'you-pay.html');
document.getElementById('yes-button').addEventListener('click', () => location = 'happy-page.html');