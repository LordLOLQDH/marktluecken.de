const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

menuButton.addEventListener('click', () => {
  const open = menu.classList.toggle('open');
  menuButton.setAttribute('aria-expanded', String(open));
  menu.setAttribute('aria-hidden', String(!open));
  menuButton.setAttribute('aria-label', open ? 'Menü schließen' : 'Menü öffnen');
});

document.addEventListener('click', (event) => {
  if (!menu.contains(event.target) && !menuButton.contains(event.target)) {
    menu.classList.remove('open');
    menuButton.setAttribute('aria-expanded', 'false');
    menu.setAttribute('aria-hidden', 'true');
    menuButton.setAttribute('aria-label', 'Menü öffnen');
  }
});

const searchForm = document.getElementById('searchForm');
const searchInput = document.getElementById('searchInput');
const cards = document.getElementById('cards');

searchForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const query = searchInput.value.trim().toLowerCase();
  if (!query) return;

  const cardList = [...cards.querySelectorAll('.card')];
  const matches = cardList.filter(card => card.textContent.toLowerCase().includes(query));

  cardList.forEach(card => card.hidden = !matches.includes(card));

  if (matches.length === 0) {
    cards.innerHTML = '<p class="no-results">Keine passende Marktlücke gefunden. Vielleicht ist genau das selbst eine Marktlücke?</p>';
  }

  document.getElementById('beliebt').scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('submitIdea').addEventListener('click', () => {
  alert('Das Einreichen von Marktlücken kommt als nächster Schritt.');
});
