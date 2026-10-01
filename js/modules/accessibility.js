import { getPreference, savePreference } from './storage.js';

const root = document.documentElement;

export function initAccessibility() {
  const savedTheme = getPreference('theme') || 'light';
  const savedContrast = getPreference('contrast') || 'normal';
  applyTheme(savedTheme);
  applyContrast(savedContrast);

  document.querySelector('#themeToggle')?.addEventListener('click', () => {
    const next = root.dataset.theme === 'dark' ? 'light' : 'dark';
    applyTheme(next);
    savePreference('theme', next);
  });

  document.querySelector('#contrastToggle')?.addEventListener('click', () => {
    const next = root.dataset.contrast === 'high' ? 'normal' : 'high';
    applyContrast(next);
    savePreference('contrast', next);
  });
}

function applyTheme(theme) {
  root.dataset.theme = theme;
  const button = document.querySelector('#themeToggle');
  if (button) {
    const active = theme === 'dark';
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active ? 'Desativar modo escuro' : 'Ativar modo escuro');
    button.textContent = active ? 'Modo claro' : 'Modo escuro';
  }
}

function applyContrast(contrast) {
  root.dataset.contrast = contrast;
  const button = document.querySelector('#contrastToggle');
  if (button) {
    const active = contrast === 'high';
    button.setAttribute('aria-pressed', String(active));
    button.setAttribute('aria-label', active ? 'Desativar alto contraste' : 'Ativar alto contraste');
    button.textContent = active ? 'Contraste normal' : 'Alto contraste';
  }
}
