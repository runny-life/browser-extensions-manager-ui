const STORAGE_KEY = 'theme';

export function getTheme() {
  return document.documentElement.dataset.theme || 'light';
}

export function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  localStorage.setItem(STORAGE_KEY, theme);
}

export function toggleTheme() {
  const next = getTheme() === 'light' ? 'dark' : 'light';
  setTheme(next);

  return next;
}
