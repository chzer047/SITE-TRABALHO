// Menu mobile
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = links.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
links.querySelectorAll('a').forEach(a => a.addEventListener('click', () => {
  links.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

// Animação ao rolar
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.classList.add('visible');
      observer.unobserve(e.target);
    }
  });
}, { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

// Abas do estudo do negócio
const tabs = document.querySelectorAll('.tabs button');
tabs.forEach(btn => btn.addEventListener('click', () => {
  tabs.forEach(b => b.setAttribute('aria-selected', b === btn));
  document.querySelectorAll('.tab-panel').forEach(p => {
    p.hidden = p.id !== 'tab-' + btn.dataset.tab;
  });
}));

// Lista de espera (demonstração, sem backend)
const form = document.getElementById('form-lista');
form.addEventListener('submit', e => {
  e.preventDefault();
  const nome = form.nome.value.trim().split(' ')[0];
  const tipo = form.tipo.value === 'empresa' ? 'sua empresa' : 'você';
  document.getElementById('form-msg').textContent =
    `Obrigado, ${nome}! Avisaremos ${tipo} assim que a Webing abrir. 🚀`;
  form.reset();
});
