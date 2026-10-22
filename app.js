// Webbing: demo da plataforma (tudo roda no navegador, sem servidor)

// ---------- Dados ----------
const HARD = ['Excel', 'Redes sociais', 'Design gráfico', 'Programação', 'Análise de dados', 'Atendimento ao cliente',
  'Vendas', 'Escrita e storytelling', 'Edição de vídeo', 'Inglês', 'Gestão de projetos', 'Fotografia'];
const SOFT = ['Comunicação', 'Trabalho em equipe', 'Liderança', 'Criatividade', 'Organização', 'Empatia',
  'Pensamento crítico', 'Resiliência'];
const INTERESSES = ['Marketing', 'Tecnologia', 'Design', 'Negócios', 'Vendas', 'Educação', 'Recursos Humanos', 'Sustentabilidade'];
const HOBBIES = ['Séries', 'Praia', 'Videogames', 'Carros', 'Esportes', 'Música', 'Leitura', 'Viagens', 'Culinária', 'Fotografia'];

// Empresas fictícias, apenas para a demonstração
const EMPRESAS = [
  { id: 'mare', nome: 'Maré Comunicação', sigla: 'MC', cidade: 'Florianópolis', area: 'Marketing',
    vaga: 'Assistente de Marketing Digital', salario: 'R$ 2.400', modelo: 'Híbrido', ambiente: 'Dinâmico',
    perfil: ['Comunicativo', 'Criativo'], skills: ['Redes sociais', 'Escrita e storytelling', 'Edição de vídeo', 'Criatividade', 'Comunicação'],
    hobbies: ['Séries', 'Fotografia', 'Música', 'Praia'], recrutadora: 'Bianca Lopes',
    endereco: 'Rua Bocaiúva, 1200, Centro, Florianópolis' },
  { id: 'pinha', nome: 'Pinha Tech', sigla: 'PT', cidade: 'Florianópolis', area: 'Tecnologia',
    vaga: 'Desenvolvedor(a) Júnior', salario: 'R$ 3.200', modelo: 'Remoto', ambiente: 'Autônomo',
    perfil: ['Analítico'], skills: ['Programação', 'Análise de dados', 'Inglês', 'Pensamento crítico', 'Resiliência'],
    hobbies: ['Videogames', 'Leitura', 'Séries'], recrutadora: 'Thiago Brandt',
    endereco: 'Rod. SC-401, 4100, Saco Grande, Florianópolis' },
  { id: 'atelie', nome: 'Ateliê Norte Design', sigla: 'AN', cidade: 'Joinville', area: 'Design',
    vaga: 'Designer Gráfico Júnior', salario: 'R$ 2.600', modelo: 'Presencial', ambiente: 'Colaborativo',
    perfil: ['Criativo'], skills: ['Design gráfico', 'Fotografia', 'Edição de vídeo', 'Criatividade', 'Trabalho em equipe'],
    hobbies: ['Fotografia', 'Música', 'Viagens'], recrutadora: 'Camila Hoffmann',
    endereco: 'Rua XV de Novembro, 850, Centro, Joinville' },
  { id: 'vale', nome: 'Vale Verde Negócios', sigla: 'VV', cidade: 'Blumenau', area: 'Negócios',
    vaga: 'Analista Administrativo Júnior', salario: 'R$ 2.800', modelo: 'Presencial', ambiente: 'Estruturado',
    perfil: ['Organizado', 'Analítico'], skills: ['Excel', 'Gestão de projetos', 'Análise de dados', 'Organização', 'Pensamento crítico'],
    hobbies: ['Leitura', 'Esportes', 'Culinária'], recrutadora: 'Marcos Wenzel',
    endereco: 'Rua 7 de Setembro, 1500, Centro, Blumenau' },
  { id: 'costa', nome: 'Costa Sul Vendas', sigla: 'CS', cidade: 'Balneário Camboriú', area: 'Vendas',
    vaga: 'Consultor(a) Comercial', salario: 'R$ 2.200 + comissão', modelo: 'Presencial', ambiente: 'Dinâmico',
    perfil: ['Comunicativo'], skills: ['Vendas', 'Atendimento ao cliente', 'Comunicação', 'Empatia', 'Resiliência'],
    hobbies: ['Esportes', 'Viagens', 'Carros', 'Praia'], recrutadora: 'Fernanda Rocha',
    endereco: 'Av. Brasil, 2100, Centro, Balneário Camboriú' },
  { id: 'gente', nome: 'Gente+ RH', sigla: 'G+', cidade: 'São José', area: 'Recursos Humanos',
    vaga: 'Assistente de Recrutamento', salario: 'R$ 2.300', modelo: 'Híbrido', ambiente: 'Colaborativo',
    perfil: ['Comunicativo', 'Organizado'], skills: ['Comunicação', 'Empatia', 'Organização', 'Atendimento ao cliente', 'Trabalho em equipe'],
    hobbies: ['Leitura', 'Séries', 'Culinária'], recrutadora: 'Patrícia Nunes',
    endereco: 'Av. Lédio João Martins, 300, Kobrasol, São José' },
  { id: 'educa', nome: 'Educa Ilha', sigla: 'EI', cidade: 'Florianópolis', area: 'Educação',
    vaga: 'Monitor(a) de Cursos Livres', salario: 'R$ 1.900', modelo: 'Presencial', ambiente: 'Colaborativo',
    perfil: ['Comunicativo', 'Criativo'], skills: ['Comunicação', 'Escrita e storytelling', 'Liderança', 'Empatia', 'Inglês'],
    hobbies: ['Leitura', 'Música', 'Viagens'], recrutadora: 'Rodrigo Silveira',
    endereco: 'Rua Lauro Linhares, 589, Trindade, Florianópolis' },
  { id: 'ecomar', nome: 'EcoMar Soluções', sigla: 'EM', cidade: 'Itajaí', area: 'Sustentabilidade',
    vaga: 'Estagiário(a) de ESG', salario: 'R$ 1.600 (bolsa)', modelo: 'Híbrido', ambiente: 'Estruturado',
    perfil: ['Analítico', 'Organizado'], skills: ['Análise de dados', 'Escrita e storytelling', 'Pensamento crítico', 'Organização', 'Excel'],
    hobbies: ['Praia', 'Esportes', 'Viagens'], recrutadora: 'Larissa Prado',
    endereco: 'Rua Hercílio Luz, 400, Centro, Itajaí' },
];

const EXEMPLO = {
  nome: 'Isadora Martins', idade: 22, cidade: 'Florianópolis', ocupacao: 'Estudante', curso: 'Publicidade e Propaganda',
  hard: ['Redes sociais', 'Escrita e storytelling', 'Edição de vídeo'], soft: ['Comunicação', 'Criatividade', 'Trabalho em equipe'],
  interesses: ['Marketing', 'Design'], hobbies: ['Séries', 'Praia', 'Fotografia'],
  objetivo: 'Primeiro emprego', modelo: 'Híbrido', perfil: 'Comunicativo', ambiente: 'Dinâmico',
  bio: 'Apaixonada por contar histórias e conectar pessoas.',
};

// ---------- Estado (salvo no navegador) ----------
const KEY = 'webbing-demo';
let state = load();
function load() {
  try { return JSON.parse(localStorage.getItem(KEY)) || {}; } catch { return {}; }
}
function save() {
  try { localStorage.setItem(KEY, JSON.stringify(state)); } catch { /* sem storage: segue sem salvar */ }
}

// ---------- Utilidades ----------
const $ = sel => document.querySelector(sel);
const esc = s => String(s ?? '').replace(/[&<>"']/g, c => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));
const initials = nome => String(nome || '?').trim().split(/\s+/).filter(Boolean).map(p => p[0]).filter((_, i, a) => i === 0 || i === a.length - 1).join('').toUpperCase();
const firstName = nome => String(nome || '').trim().split(/\s+/)[0];
const empresa = id => EMPRESAS.find(e => e.id === id);
const sleep = ms => new Promise(r => setTimeout(r, ms));
const fmtData = d => d.toLocaleDateString('pt-BR', { weekday: 'long', day: 'numeric', month: 'long' });

function toast(msg) {
  const t = $('#toast');
  t.textContent = msg;
  t.classList.add('show');
  clearTimeout(toast.timer);
  toast.timer = setTimeout(() => t.classList.remove('show'), 2600);
}

function show(id) {
  document.querySelectorAll('.screen').forEach(s => { s.hidden = s.id !== id; });
  window.scrollTo(0, 0);
}

// ---------- Login ----------
$('#form-login').addEventListener('submit', e => {
  e.preventDefault();
  const email = e.target.email.value.trim();
  const senha = e.target.senha.value;
  const err = $('#login-error');
  if (!/^\S+@\S+\.\S+$/.test(email)) { err.textContent = 'Digite um e-mail válido.'; return; }
  if (!senha) { err.textContent = 'Digite sua senha.'; return; }
  err.textContent = '';
  login(email);
});
$('#btn-demo').addEventListener('click', () => login('demo@webbing.com.br'));

function login(email) {
  state.logged = true;
  state.email = email;
  save();
  route();
}

// ---------- Cadastro do perfil (wizard) ----------
const form = $('#form-perfil');
let step = 1;

function buildChips() {
  const sets = { hard: HARD, soft: SOFT, interesses: INTERESSES, hobbies: HOBBIES };
  document.querySelectorAll('.chips-select').forEach(box => {
    box.innerHTML = sets[box.dataset.name]
      .map(v => `<button type="button" aria-pressed="false" data-value="${esc(v)}">${esc(v)}</button>`).join('');
  });
}
document.querySelectorAll('.chips-select').forEach(box => box.addEventListener('click', e => {
  const b = e.target.closest('button');
  if (!b) return;
  b.setAttribute('aria-pressed', b.getAttribute('aria-pressed') !== 'true');
}));
const getChips = name => [...document.querySelectorAll(`.chips-select[data-name="${name}"] [aria-pressed="true"]`)].map(b => b.dataset.value);
const setChips = (name, values = []) => document.querySelectorAll(`.chips-select[data-name="${name}"] button`)
  .forEach(b => b.setAttribute('aria-pressed', values.includes(b.dataset.value)));

function fillForm(p) {
  ['nome', 'idade', 'cidade', 'ocupacao', 'curso', 'objetivo', 'modelo', 'bio'].forEach(k => {
    if (p[k] !== undefined) form.elements[k].value = p[k];
  });
  ['perfil', 'ambiente'].forEach(k => {
    const r = form.querySelector(`input[name="${k}"][value="${p[k]}"]`);
    if (r) r.checked = true;
  });
  ['hard', 'soft', 'interesses', 'hobbies'].forEach(k => setChips(k, p[k]));
}

function readForm() {
  const f = form.elements;
  return {
    nome: f.nome.value.trim(), idade: Number(f.idade.value), cidade: f.cidade.value, ocupacao: f.ocupacao.value,
    curso: f.curso.value.trim(), hard: getChips('hard'), soft: getChips('soft'), interesses: getChips('interesses'),
    hobbies: getChips('hobbies'), objetivo: f.objetivo.value, modelo: f.modelo.value,
    perfil: f.perfil.value, ambiente: f.ambiente.value, bio: f.bio.value.trim(),
  };
}

function validate(n) {
  const p = readForm();
  if (n === 1) {
    if (!p.nome) return 'Digite seu nome.';
    if (!(p.idade >= 16 && p.idade <= 70)) return 'Digite uma idade entre 16 e 70 anos.';
    if (!p.cidade) return 'Escolha sua cidade.';
    if (!p.ocupacao) return 'Escolha sua situação atual.';
  }
  if (n === 2 && p.hard.length + p.soft.length < 3) return 'Escolha pelo menos 3 skills no total.';
  if (n === 3 && !p.interesses.length) return 'Escolha pelo menos 1 área de interesse.';
  if (n === 4) {
    if (!p.objetivo) return 'Escolha seu objetivo.';
    if (!p.modelo) return 'Escolha o modelo de trabalho.';
    if (!p.perfil) return 'Escolha como você se descreve.';
    if (!p.ambiente) return 'Escolha seu ambiente ideal.';
  }
  return '';
}

function goStep(n) {
  step = n;
  form.querySelectorAll('.step').forEach(s => { s.hidden = Number(s.dataset.step) !== n; });
  $('#wiz-count').textContent = `Passo ${n} de 4`;
  $('#wiz-bar').style.width = `${n * 25}%`;
  $('#wiz-back').hidden = n === 1;
  $('#wiz-next').textContent = n === 4 ? 'Encontrar meu match ✨' : 'Continuar';
  $('#wiz-error').textContent = '';
  window.scrollTo(0, 0);
}

form.addEventListener('submit', e => {
  e.preventDefault();
  const err = validate(step);
  if (err) { $('#wiz-error').textContent = err; return; }
  if (step < 4) { goStep(step + 1); return; }
  state.profile = readForm();
  state.result = null;
  save();
  runAnalysis();
});
$('#wiz-back').addEventListener('click', () => goStep(step - 1));

// Botão para preencher rápido durante a apresentação
const exemploBtn = document.createElement('button');
exemploBtn.type = 'button';
exemploBtn.className = 'link-btn';
exemploBtn.textContent = 'Preencher com exemplo';
exemploBtn.addEventListener('click', () => {
  fillForm(EXEMPLO);
  toast('Exemplo preenchido. Você pode editar o que quiser.');
});
$('.wizard-head').insertBefore(exemploBtn, $('#wiz-count'));

function openWizard() {
  buildChips();
  form.reset();
  if (state.profile) fillForm(state.profile);
  goStep(1);
  show('s-onboard');
}

// ---------- Match (I.A. da demo) ----------
function score(p, c) {
  const minhas = [...p.hard, ...p.soft];
  const skills = c.skills.filter(s => minhas.includes(s));
  const hobbies = c.hobbies.filter(h => p.hobbies.includes(h));
  const area = p.interesses.includes(c.area);
  const perfil = c.perfil.includes(p.perfil);
  const ambiente = c.ambiente === p.ambiente;
  const modelo = c.modelo === p.modelo;
  let pts = (area ? 30 : 0) + (skills.length / c.skills.length) * 40 + Math.min(hobbies.length, 2) * 5
    + (perfil ? 10 : 0) + (ambiente ? 5 : 0)
    + (modelo ? 5 : (p.modelo === 'Híbrido' || c.modelo === 'Híbrido') ? 2 : 0);
  const pct = Math.min(98, Math.round(55 + pts * 0.43));

  const reasons = [];
  if (area) reasons.push(`Você tem interesse em ${c.area}, a área da ${c.nome}`);
  if (skills.length) reasons.push(`${skills.length} skill${skills.length > 1 ? 's' : ''} em comum com a vaga: ${skills.join(', ')}`);
  if (perfil) reasons.push(`Seu perfil ${p.perfil.toLowerCase()} combina com a cultura do time`);
  if (ambiente) reasons.push(`Ambiente ${c.ambiente.toLowerCase()}, do jeito que você prefere`);
  if (hobbies.length) reasons.push(`Hobbies em comum com o time: ${hobbies.join(', ')}`);
  if (modelo) reasons.push(`Vaga ${c.modelo.toLowerCase()}, como você quer`);
  if (p.cidade === c.cidade) reasons.push(`A empresa fica em ${c.cidade}, na sua cidade`);
  reasons.push(`Vaga pensada para quem busca: ${p.objetivo.toLowerCase()}`);
  return { id: c.id, pct, reasons: reasons.slice(0, 5), skills };
}
const ranking = p => EMPRESAS.map(c => score(p, c)).sort((a, b) => b.pct - a.pct);

function nextSlot(from, offsetDays, slotIndex) {
  const horarios = [[10, 0], [14, 30], [16, 0]];
  const d = new Date(from);
  d.setDate(d.getDate() + offsetDays);
  while (d.getDay() === 0 || d.getDay() === 6) d.setDate(d.getDate() + 1);
  const [h, m] = horarios[slotIndex % horarios.length];
  d.setHours(h, m, 0, 0);
  return d;
}

function scheduleInterview(p, c) {
  const online = p.modelo === 'Remoto' || c.modelo === 'Remoto';
  const slot = [...p.nome].reduce((a, ch) => a + ch.charCodeAt(0), 0) % 3;
  return {
    date: nextSlot(new Date(), 2, slot).toISOString(),
    slot,
    formato: online ? 'Online (Google Meet)' : 'Presencial',
    local: online ? 'meet.google.com/webbing-demo' : c.endereco,
    recrutadora: c.recrutadora,
  };
}

async function runAnalysis() {
  show('s-analyze');
  const items = [...document.querySelectorAll('#analyze-steps li')];
  items.forEach(li => li.classList.remove('on', 'done'));
  for (const li of items) {
    li.classList.add('on');
    await sleep(750);
    li.classList.add('done');
  }
  const p = state.profile;
  const top = ranking(p)[0];
  const c = empresa(top.id);
  state.result = { ...top, interview: scheduleInterview(p, c) };
  state.chat = [
    { from: 'them', text: `Oi, ${firstName(p.nome)}! Aqui é ${c.recrutadora}, da ${c.nome}. A Webbing nos conectou e adoramos seu perfil! 💜` },
    { from: 'them', text: `Sua entrevista para ${c.vaga} ficou marcada para ${fmtData(new Date(state.result.interview.date))}, às ${horaDe(state.result.interview.date)} (${state.result.interview.formato}).\nSe precisar remarcar, é só usar a Agenda. Até lá!` },
  ];
  state.unread = true;
  state.applied = [];
  save();
  showMatch();
}

const horaDe = iso => new Date(iso).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });

async function showMatch() {
  const p = state.profile, r = state.result, c = empresa(r.id);
  show('s-match');
  $('#m-user').textContent = initials(p.nome);
  $('#m-co').textContent = c.sigla;
  $('#m-sub').innerHTML = `<b>${esc(firstName(p.nome))}</b> + <b>${esc(c.nome)}</b><br>Vaga: ${esc(c.vaga)} · ${esc(c.cidade)}`;
  $('#m-reasons').innerHTML = r.reasons.map(x => `<li>${esc(x)}</li>`).join('');
  $('#m-scheduling').hidden = false;
  $('#m-interview').hidden = true;
  $('#btn-go-app').hidden = true;

  const el = $('#m-pct');
  for (let i = 0; i <= r.pct; i += 2) { el.textContent = `${i}%`; await sleep(12); }
  el.textContent = `${r.pct}%`;

  await sleep(1800);
  $('#m-scheduling').hidden = true;
  const card = $('#m-interview');
  card.innerHTML = `<span class="ok">✓ Entrevista agendada automaticamente</span>${interviewRows(r.interview, c)}`;
  card.hidden = false;
  $('#btn-go-app').hidden = false;
}

function interviewRows(iv, c) {
  const d = new Date(iv.date);
  return `<div class="i-rows">
    <div><b>Empresa</b><span>${esc(c.nome)}</span></div>
    <div><b>Vaga</b><span>${esc(c.vaga)}</span></div>
    <div><b>Data</b><span>${esc(fmtData(d))}, às ${horaDe(iv.date)}</span></div>
    <div><b>Formato</b><span>${esc(iv.formato)}</span></div>
    <div><b>Local</b><span>${esc(iv.local)}</span></div>
    <div><b>Com</b><span>${esc(iv.recrutadora)} (recrutamento)</span></div>
  </div>`;
}

$('#btn-go-app').addEventListener('click', () => openApp());

// ---------- Rede social ----------
let view = 'feed';
let countdownTimer;

function openApp() {
  show('s-app');
  renderProfile();
  renderSide();
  setView(view);
  clearInterval(countdownTimer);
  countdownTimer = setInterval(renderCountdown, 30000);
}

function setView(v) {
  view = v;
  document.querySelectorAll('.view').forEach(el => { el.hidden = el.id !== `v-${v}`; });
  document.querySelectorAll('.topnav button').forEach(b => b.classList.toggle('active', b.dataset.view === v));
  if (v === 'feed') renderFeed();
  if (v === 'vagas') renderVagas();
  if (v === 'agenda') renderAgenda();
  if (v === 'mensagens') { state.unread = false; save(); renderChat(); }
  $('#msg-dot').classList.toggle('on', !!state.unread);
  window.scrollTo(0, 0);
}
document.addEventListener('click', e => {
  const b = e.target.closest('[data-view]');
  if (b && !$('#s-app').hidden) setView(b.dataset.view);
});

function renderProfile() {
  const p = state.profile;
  const ini = initials(p.nome);
  ['#p-avatar', '#c-avatar', '#btn-user'].forEach(s => { $(s).textContent = ini; });
  $('#p-name').textContent = p.nome;
  $('#dd-name').textContent = p.nome;
  $('#p-headline').textContent = `${p.ocupacao}${p.curso ? ' · ' + p.curso : ''} · ${p.cidade}, SC`;
  $('#p-bio').textContent = p.bio ? `"${p.bio}"` : '';
  $('#p-bio').hidden = !p.bio;
  const chips = arr => arr.map(x => `<span>${esc(x)}</span>`).join('') || '<small class="muted">Nada ainda</small>';
  $('#p-skills').innerHTML = chips([...p.hard, ...p.soft]);
  $('#p-int').innerHTML = chips(p.interesses);
  $('#p-hob').innerHTML = chips(p.hobbies);
  $('#p-matches').textContent = ranking(p).filter(r => r.pct >= 75).length;
  $('#p-interviews').textContent = 1;
  const campos = [p.nome, p.idade, p.cidade, p.ocupacao, p.curso, p.hard.length, p.soft.length, p.interesses.length,
    p.hobbies.length, p.objetivo, p.modelo, p.perfil, p.ambiente, p.bio];
  $('#p-strength').textContent = `${Math.round(campos.filter(Boolean).length / campos.length * 100)}%`;
}

function renderSide() {
  const r = state.result, c = empresa(r.id);
  $('#r-interview').innerHTML = `
    <h4>📅 Próxima entrevista</h4>
    <p>${esc(c.nome)} · ${esc(c.vaga)}</p>
    <div class="countdown" id="countdown"></div>
    <p>${esc(fmtData(new Date(r.interview.date)))}, às ${horaDe(r.interview.date)}</p>
    <button class="btn btn-light btn-small btn-block" data-view="agenda" style="margin-top:12px">Ver na agenda</button>`;
  renderCountdown();
  $('#r-companies').innerHTML = ranking(state.profile).slice(0, 4).map(x => {
    const e = empresa(x.id);
    return `<li><div class="avatar co">${esc(e.sigla)}</div><span>${esc(e.nome)}<small>${esc(e.area)} · ${esc(e.cidade)}</small></span><b>${x.pct}%</b></li>`;
  }).join('');
  $('#btn-event').textContent = state.event ? 'Presença confirmada ✓' : 'Quero ir';
}

function renderCountdown() {
  const box = $('#countdown');
  if (!box || !state.result) return;
  let ms = Math.max(0, new Date(state.result.interview.date) - new Date());
  const d = Math.floor(ms / 864e5); ms -= d * 864e5;
  const h = Math.floor(ms / 36e5); ms -= h * 36e5;
  const m = Math.floor(ms / 6e4);
  box.innerHTML = `<div><b>${d}</b><small>dias</small></div><div><b>${h}</b><small>horas</small></div><div><b>${m}</b><small>min</small></div>`;
}

// Feed
function seedPosts() {
  const p = state.profile, r = state.result, c = empresa(r.id);
  return [
    { id: 'match', autor: 'Webbing I.A.', sigla: 'W', co: true, sub: 'agora', ai: true, likes: 0,
      html: `<div class="post-highlight">🎉 <b>Você e a ${esc(c.nome)} deram match!</b><br>${r.pct}% de compatibilidade. Sua entrevista já está marcada para ${esc(fmtData(new Date(r.interview.date)))}, às ${horaDe(r.interview.date)}.</div>`,
      texto: `Parabéns, ${firstName(p.nome)}! Analisamos suas skills, interesses, hobbies, objetivos e personalidade e encontramos uma empresa com a sua cara.` },
    { id: 'vaga', autor: c.nome, sigla: c.sigla, co: true, sub: `${c.area} · ${c.cidade} · 2 h`, likes: 54,
      texto: `Estamos contratando! 🚀 Buscamos alguém que goste de ${c.skills.slice(0, 2).join(' e ').toLowerCase()} para crescer com a gente.`,
      html: `<div class="post-job"><b>${esc(c.vaga)}</b><br><small class="muted">${esc(c.modelo)} · ${esc(c.salario)} · ${esc(c.cidade)}</small></div>` },
    { id: 'juliana', autor: 'Juliana Ramos', sigla: 'JR', sub: 'Designer na Ateliê Norte Design · 5 h', likes: 128,
      texto: 'Há 3 meses eu me sentia "só mais um currículo". Coloquei meus hobbies e objetivos no perfil da Webbing, a I.A. me conectou com uma empresa que tem tudo a ver comigo e hoje faço parte do time! 💜' },
    { id: 'dica', autor: 'Webbing', sigla: 'W', co: true, sub: 'Dica da semana · 1 d', likes: 87,
      texto: '💡 Dica: preencha seus hobbies, objetivos e personalidade. A I.A. da Webbing usa tudo isso para encontrar empresas onde você vai se sentir bem, não só vagas que pedem o seu cargo.' },
    { id: 'rafael', autor: 'Rafael Costa', sigla: 'RC', sub: 'Estudante de ADS · 1 d', likes: 23,
      texto: 'Alguém vai no Encontro Webbing de sábado em Floripa? Bora debater carreira, negócios e tecnologia! 🗣️' },
  ];
}

function renderFeed() {
  const meus = (state.posts || []).map(x => ({ ...x, autor: state.profile.nome, sigla: initials(state.profile.nome) }));
  const all = [...meus, ...seedPosts()];
  const likes = state.likes || {};
  $('#feed').innerHTML = all.map(x => `
    <article class="panel post" data-id="${esc(x.id)}">
      <div class="post-head">
        ${x.sigla === 'W' ? '<div class="avatar brand"><img src="img/logo-mark-white.png" alt="Webbing"></div>' : `<div class="avatar ${x.co ? 'co' : ''}">${esc(x.sigla)}</div>`}
        <div><strong>${esc(x.autor)}</strong>${x.ai ? '<span class="badge-ai">I.A.</span>' : ''}<small>${esc(x.sub)}</small></div>
      </div>
      ${x.html || ''}
      ${x.texto ? `<p class="post-body">${esc(x.texto)}</p>` : ''}
      <div class="post-actions">
        <button data-act="like" class="${likes[x.id] ? 'liked' : ''}">${likes[x.id] ? '💜' : '🤍'} ${x.likes + (likes[x.id] ? 1 : 0)}</button>
        <button data-act="comment">💬 Comentar</button>
        ${x.id === 'vaga' ? '<button data-view="vagas">💼 Ver vaga</button>' : '<button data-act="share">↗ Compartilhar</button>'}
      </div>
    </article>`).join('');
}

$('#feed').addEventListener('click', e => {
  const b = e.target.closest('[data-act]');
  if (!b) return;
  const id = b.closest('.post').dataset.id;
  if (b.dataset.act === 'like') {
    state.likes = state.likes || {};
    state.likes[id] = !state.likes[id];
    save();
    renderFeed();
  }
  if (b.dataset.act === 'comment') toast('Comentários chegam na versão completa da Webbing 😉');
  if (b.dataset.act === 'share') toast('Link copiado!');
});

$('#composer').addEventListener('submit', e => {
  e.preventDefault();
  const texto = e.target.texto.value.trim();
  if (!texto) return;
  state.posts = [{ id: 'p' + Date.now(), sub: 'agora', likes: 0, texto }, ...(state.posts || [])];
  save();
  e.target.reset();
  renderFeed();
  toast('Publicado!');
});

// Vagas
function renderVagas() {
  const applied = state.applied || [];
  $('#vagas').innerHTML = ranking(state.profile).map(x => {
    const c = empresa(x.id);
    const isMatch = x.id === state.result.id;
    const btn = isMatch
      ? '<button class="btn btn-small" data-view="agenda">Entrevista agendada ✓</button>'
      : applied.includes(x.id)
        ? '<button class="btn btn-ghost btn-small" disabled>Candidatura enviada ✓</button>'
        : `<button class="btn btn-ghost btn-small" data-apply="${esc(x.id)}">Candidatar-se</button>`;
    return `<article class="panel job ${isMatch ? 'is-match' : ''}">
      <div class="avatar co">${esc(c.sigla)}</div>
      <div class="job-info">
        <h3>${esc(c.vaga)}</h3>
        <p class="muted">${esc(c.nome)} · ${esc(c.cidade)} · ${esc(c.modelo)} · ${esc(c.salario)}</p>
        <div class="chips">${c.skills.map(s => `<span style="${x.skills.includes(s) ? '' : 'opacity:.5'}">${esc(s)}</span>`).join('')}</div>
        <div class="meter"><i style="width:${x.pct}%"></i></div>
      </div>
      <div class="job-side"><div class="pct">${x.pct}%<small>compatível</small></div>${btn}</div>
    </article>`;
  }).join('');
}
$('#vagas').addEventListener('click', e => {
  const b = e.target.closest('[data-apply]');
  if (!b) return;
  state.applied = [...(state.applied || []), b.dataset.apply];
  save();
  renderVagas();
  toast(`Candidatura enviada para ${empresa(b.dataset.apply).nome}!`);
});

// Agenda
function renderAgenda() {
  const r = state.result, c = empresa(r.id), d = new Date(r.interview.date);
  $('#agenda').innerHTML = `
    <article class="panel agenda-item">
      <div class="date-box"><b>${d.getDate()}</b><small>${d.toLocaleDateString('pt-BR', { month: 'short' }).replace('.', '')}</small></div>
      <div class="agenda-info">
        <span class="status">Confirmada · agendada pela Webbing</span>
        <h3>Entrevista: ${esc(c.vaga)}</h3>
        ${interviewRows(r.interview, c)}
        <div class="agenda-actions">
          <button class="btn btn-small" id="btn-ics">📥 Adicionar ao calendário</button>
          <button class="btn btn-ghost btn-small" id="btn-remarcar">Remarcar</button>
          <button class="btn btn-ghost btn-small" data-view="mensagens">Falar com ${esc(firstName(c.recrutadora))}</button>
        </div>
      </div>
    </article>`;
  $('#btn-ics').addEventListener('click', downloadIcs);
  $('#btn-remarcar').addEventListener('click', () => {
    const iv = state.result.interview;
    iv.slot += 1;
    iv.date = nextSlot(new Date(iv.date), 1, iv.slot).toISOString();
    state.chat.push({ from: 'them', text: `Sem problemas! Remarquei sua entrevista para ${fmtData(new Date(iv.date))}, às ${horaDe(iv.date)}. 👍` });
    state.unread = true;
    save();
    renderAgenda();
    renderSide();
    $('#msg-dot').classList.add('on');
    toast('Entrevista remarcada automaticamente!');
  });
}

function downloadIcs() {
  const r = state.result, c = empresa(r.id);
  const ini = new Date(r.interview.date), fim = new Date(ini.getTime() + 45 * 60000);
  const f = d => `${d.getFullYear()}${String(d.getMonth() + 1).padStart(2, '0')}${String(d.getDate()).padStart(2, '0')}T${String(d.getHours()).padStart(2, '0')}${String(d.getMinutes()).padStart(2, '0')}00`;
  const ics = ['BEGIN:VCALENDAR', 'VERSION:2.0', 'PRODID:-//Webbing//Demo//PT', 'BEGIN:VEVENT',
    `UID:${Date.now()}@webbing-demo`, `DTSTART:${f(ini)}`, `DTEND:${f(fim)}`,
    `SUMMARY:Entrevista Webbing - ${c.nome}`, `DESCRIPTION:Vaga: ${c.vaga} | Com: ${c.recrutadora}`,
    `LOCATION:${r.interview.local.replace(/,/g, '\\,')}`, 'END:VEVENT', 'END:VCALENDAR'].join('\r\n');
  const a = document.createElement('a');
  a.href = URL.createObjectURL(new Blob([ics], { type: 'text/calendar' }));
  a.download = 'entrevista-webbing.ics';
  a.click();
  URL.revokeObjectURL(a.href);
  toast('Convite baixado. Abra para salvar no seu calendário.');
}

// Mensagens
const RESPOSTAS = [
  'Que ótimo! Qualquer dúvida, estou por aqui.',
  'Perfeito, anotado! Na entrevista vamos conversar sobre seus objetivos e o dia a dia do time.',
  'Pode ficar tranquilo(a): é uma conversa leve, queremos te conhecer de verdade. 😊',
  'Combinado! Até a entrevista! 👋',
];
function renderChat() {
  const c = empresa(state.result.id);
  $('#chat-head').innerHTML = `<div class="avatar co">${esc(c.sigla)}</div><div><strong>${esc(c.recrutadora)}</strong><small>Recrutamento · ${esc(c.nome)}</small></div>`;
  const body = $('#chat-body');
  body.innerHTML = (state.chat || []).map(m => `<div class="msg ${m.from}">${esc(m.text)}</div>`).join('');
  body.scrollTop = body.scrollHeight;
}
$('#chat-form').addEventListener('submit', async e => {
  e.preventDefault();
  const text = e.target.msg.value.trim();
  if (!text) return;
  e.target.reset();
  state.chat.push({ from: 'me', text });
  save();
  renderChat();
  const body = $('#chat-body');
  const typing = document.createElement('div');
  typing.className = 'msg them typing';
  typing.textContent = 'digitando…';
  body.appendChild(typing);
  body.scrollTop = body.scrollHeight;
  await sleep(1300);
  const n = state.chat.filter(m => m.from === 'me').length - 1;
  state.chat.push({ from: 'them', text: RESPOSTAS[n % RESPOSTAS.length] });
  save();
  if (view === 'mensagens') renderChat();
});

// Evento e menu do usuário
$('#btn-event').addEventListener('click', () => {
  state.event = !state.event;
  save();
  renderSide();
  toast(state.event ? 'Presença confirmada no Encontro Webbing!' : 'Presença cancelada.');
});
$('#btn-user').addEventListener('click', e => {
  e.stopPropagation();
  const dd = $('#user-dropdown');
  dd.hidden = !dd.hidden;
  $('#btn-user').setAttribute('aria-expanded', !dd.hidden);
});
document.addEventListener('click', e => {
  if (!e.target.closest('.user-menu')) { $('#user-dropdown').hidden = true; $('#btn-user').setAttribute('aria-expanded', 'false'); }
});
$('#btn-edit').addEventListener('click', () => { $('#user-dropdown').hidden = true; openWizard(); });
$('#btn-logout').addEventListener('click', () => {
  state.logged = false;
  save();
  clearInterval(countdownTimer);
  $('#user-dropdown').hidden = true;
  $('#form-login').reset();
  show('s-login');
});
$('#btn-reset').addEventListener('click', () => {
  try { localStorage.removeItem(KEY); } catch { /* ignora */ }
  state = {};
  location.reload();
});

// ---------- Rota inicial ----------
function route() {
  if (!state.logged) return show('s-login');
  if (!state.profile) return openWizard();
  if (!state.result) return runAnalysis();
  openApp();
}
buildChips();
route();
