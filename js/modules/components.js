export function showToast(message, title = 'Solaris') {
  const toastElement = document.querySelector('#appToast');
  const titleElement = document.querySelector('#toastTitle');
  const messageElement = document.querySelector('#toastMessage');
  if (!toastElement || !window.bootstrap) return;

  titleElement.textContent = title;
  messageElement.textContent = message;
  bootstrap.Toast.getOrCreateInstance(toastElement, { delay: 3500 }).show();
}

export function closeModal(id) {
  const element = document.getElementById(id);
  if (element && window.bootstrap) {
    bootstrap.Modal.getOrCreateInstance(element).hide();
  }
}
