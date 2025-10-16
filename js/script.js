const data = {
  name: "Millena Nogueira Couto",
  phone: "5521975039334",
  instagram: "https://www.instagram.com/millenaanogueiira/"
};

// Configura links
document.getElementById('whatsapp').href = `https://wa.me/${data.phone}?text=${encodeURIComponent('Olá Millena! Gostaria de agendar um atendimento de podologia 😊')}`;
document.getElementById('instagram').href = data.instagram;

// Efeito de partículas ao clicar
document.querySelectorAll('.btn').forEach(btn => {
  btn.addEventListener('click', e => {
    const particle = document.createElement('span');
    particle.textContent = '✨';
    particle.style.position = 'absolute';
    particle.style.left = e.pageX + 'px';
    particle.style.top = e.pageY + 'px';
    particle.style.fontSize = '20px';
    particle.style.pointerEvents = 'none';
    particle.style.transition = '0.8s ease';
    document.body.appendChild(particle);
    setTimeout(() => particle.remove(), 700);
  });
});

// Efeito 3D
const card = document.getElementById('card');
document.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
