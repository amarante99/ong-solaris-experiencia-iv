import { renderRoute } from './router.js';
import { validateField, validateForm, collectFormData } from './forms.js';
import { saveDiagnosis, removeDiagnosis, saveVolunteer } from './storage.js';
import { closeModal, showToast } from './components.js';

export function initEvents() {
  document.addEventListener('click', handleClick);
  document.addEventListener('submit', handleSubmit);
  document.addEventListener('input', handleInput);
  document.addEventListener('change', handleInput);
}

function handleClick(event) {
  const routeLink = event.target.closest('[data-route]');
  if (routeLink) {
    event.preventDefault();
    const route = routeLink.dataset.route;
    if (location.hash !== `#${route}`) location.hash = route;
    else renderRoute();
    closeBootstrapMenu();
    return;
  }

  const deleteButton = event.target.closest('[data-action="delete-diagnosis"]');
  if (deleteButton) {
    removeDiagnosis(deleteButton.dataset.id);
    renderRoute();
    showToast('Diagnóstico removido com sucesso.');
  }
}

function handleSubmit(event) {
  const form = event.target;
  if (!(form instanceof HTMLFormElement)) return;

  event.preventDefault();
  if (!validateForm(form)) {
    showToast('Revise os campos destacados antes de continuar.', 'Validação');
    const firstInvalid = form.querySelector('.is-invalid');
    firstInvalid?.focus();
    return;
  }

  const data = collectFormData(form);

  if (form.id === 'diagnosisForm') {
    saveDiagnosis({ id: crypto.randomUUID(), ...data, createdAt: new Date().toISOString() });
    closeModal('diagnosisModal');
    renderRoute();
    showToast('Problema adicionado ao diagnóstico.');
  }

  if (form.id === 'volunteerForm') {
    saveVolunteer(data);
    renderRoute();
    showToast('Seu interesse foi salvo neste navegador.');
  }

  if (form.id === 'contactForm') {
    form.reset();
    form.querySelectorAll('.is-valid').forEach(field => field.classList.remove('is-valid'));
    form.querySelectorAll('[aria-invalid="true"]').forEach(field => field.setAttribute('aria-invalid', 'false'));
    showToast('Mensagem validada e registrada como envio demonstrativo.');
  }
}

function handleInput(event) {
  const field = event.target;
  if (field.matches('input, select, textarea') && field.value.trim() !== '') validateField(field);
}

function closeBootstrapMenu() {
  const menu = document.querySelector('#menuPrincipal');
  if (menu?.classList.contains('show') && window.bootstrap) {
    bootstrap.Collapse.getOrCreateInstance(menu).hide();
  }
}
