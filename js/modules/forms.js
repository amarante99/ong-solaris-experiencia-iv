const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const phoneRegex = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;

export function validateField(field) {
  const value = field.value.trim();
  let message = '';
  if (field.required && !value) message = 'Este campo é obrigatório.';
  else if (field.type === 'email' && !emailRegex.test(value)) message = 'Informe um e-mail válido.';
  else if (field.type === 'tel' && !phoneRegex.test(value)) message = 'Informe um telefone válido com DDD.';
  else if (field.minLength > 0 && value.length < field.minLength) message = `Digite pelo menos ${field.minLength} caracteres.`;

  setFieldState(field, message);
  return !message;
}

function setFieldState(field, message) {
  const feedback = document.querySelector(`[data-error-for="${field.id}"]`);
  const hasValue = field.value.trim() !== '';
  field.classList.toggle('is-invalid', Boolean(message));
  field.classList.toggle('is-valid', !message && hasValue);
  field.setAttribute('aria-invalid', String(Boolean(message)));

  if (feedback) {
    feedback.textContent = message || (hasValue ? 'Campo preenchido corretamente.' : '');
    feedback.classList.toggle('error', Boolean(message));
    feedback.classList.toggle('success', !message && hasValue);
  }
}

export function validateForm(form) {
  const fields = [...form.querySelectorAll('input, select, textarea')];
  return fields.map(validateField).every(Boolean);
}

export function collectFormData(form) {
  return Object.fromEntries(new FormData(form).entries());
}
