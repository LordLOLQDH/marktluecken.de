const menuButton = document.getElementById('menuButton');
const menu = document.getElementById('menu');

if (menuButton && menu) {
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
}

const submitForm = document.getElementById('submitForm');
const formStatus = document.getElementById('formStatus');

if (submitForm && formStatus) {
  submitForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    const button = submitForm.querySelector('button[type="submit"]');
    const originalText = button.textContent;
    button.disabled = true;
    button.textContent = 'Wird gesendet ...';
    formStatus.textContent = '';
    formStatus.className = 'form-status';

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: new FormData(submitForm)
      });

      const result = await response.json();

      if (result.success) {
        formStatus.textContent = 'Danke! Deine Marktlücke wurde erfolgreich gesendet.';
        formStatus.classList.add('success');
        submitForm.reset();
      } else {
        throw new Error(result.message || 'Das Formular konnte nicht gesendet werden.');
      }
    } catch (error) {
      formStatus.textContent = 'Das Senden ist fehlgeschlagen. Bitte versuche es später erneut.';
      formStatus.classList.add('error');
      console.error(error);
    } finally {
      button.disabled = false;
      button.textContent = originalText;
    }
  });
}
