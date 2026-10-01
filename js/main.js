import '../css/style.css';
import { initRouter } from './modules/router.js';
import { initEvents } from './modules/events.js';
import { initAccessibility } from './modules/accessibility.js';

function bootstrapApplication() {
  initEvents();
  initRouter();
  initAccessibility();
  initModalAccessibility();
}

document.addEventListener('DOMContentLoaded', bootstrapApplication, { once: true });


function initModalAccessibility() {
  document.addEventListener('shown.bs.modal', event => {
    const firstField = event.target.querySelector('input, select, textarea');
    firstField?.focus();
  });
}
