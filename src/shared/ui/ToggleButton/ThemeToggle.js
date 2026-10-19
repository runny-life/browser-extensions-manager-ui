import { getTheme, toggleTheme } from '../../../app/providers/theme';
import './ThemeToggle.scss';
import iconMoon from '/images/icon-moon.svg?raw';
import iconSun from '/images/icon-sun.svg?raw';

const ICONS = {
  light: iconMoon,
  dark: iconSun,
};

export function createThemeToggle() {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'theme-toggle';

  function update() {
    const theme = getTheme();
    button.innerHTML = ICONS[theme];
    button.setAttribute(
      'aria-label',
      theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme',
    );
  }

  button.addEventListener('click', () => {
    toggleTheme();
    update();
  });

  update();

  return button;
}
