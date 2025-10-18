const phone = "5521975039334";
const insta = "https://www.instagram.com/millenaanogueiira/";

document.getElementById('whatsapp').href = 'https://wa.me/5521975039334?text=Olá%20Millena!%20Gostaria%20de%20agendar%20um%20atendimento%20podológico%20🦶🏼';
document.getElementById("instagram").href = insta;

// Efeito leve de movimento do cartão
const card = document.getElementById('card');
document.addEventListener('mousemove', e => {
  const x = (window.innerWidth / 2 - e.pageX) / 30;
  const y = (window.innerHeight / 2 - e.pageY) / 30;
  card.style.transform = `rotateY(${x}deg) rotateX(${y}deg)`;
});
