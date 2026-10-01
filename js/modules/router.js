import { renderInicio, renderProjetos, renderDiagnostico, renderVoluntariado, renderContato } from './templates.js';

const routes = {
  '/inicio': renderInicio,
  '/projetos': renderProjetos,
  '/diagnostico': renderDiagnostico,
  '/voluntariado': renderVoluntariado,
  '/contato': renderContato
};

export function getCurrentRoute() {
  return location.hash.replace(/^#/, '') || '/inicio';
}

export function renderRoute() {
  const app = document.querySelector('#app');
  if (!app) return;

  const route = getCurrentRoute();
  const renderer = routes[route] || renderInicio;
  app.setAttribute('aria-busy', 'true');
  app.innerHTML = renderer();
  updateActiveLink(route);
  app.setAttribute('aria-busy', 'false');
  app.focus({ preventScroll: true });

  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  window.scrollTo({ top: 0, behavior: reducedMotion ? 'auto' : 'smooth' });
}

function updateActiveLink(route) {
  document.querySelectorAll('[data-route]').forEach(link => {
    const active = link.dataset.route === route;
    link.classList.toggle('active', active);
    if (active) link.setAttribute('aria-current', 'page');
    else link.removeAttribute('aria-current');
  });
}

export function initRouter() {
  window.addEventListener('hashchange', renderRoute);
  renderRoute();
}
