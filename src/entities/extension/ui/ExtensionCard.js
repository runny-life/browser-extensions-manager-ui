import './ExtensionCard.scss';

const template = document.querySelector('#extension-card-template');

export function createExtensionCard(extension, { onToggle, onRemove }) {
  const fragment = template.content.cloneNode(true);
  const card = fragment.querySelector('.extension-card');

  card.dataset.name = extension.name;

  const img = card.querySelector('.extension-card__logo');
  img.src = extension.logo;

  card.querySelector('.extension-card__name').textContent = extension.name;
  card.querySelector('.extension-card__description').textContent = extension.description;

  const toggle = card.querySelector('input[type="checkbox"]');
  toggle.checked = extension.isActive;
  toggle.setAttribute('aria-checked', String(extension.isActive));
  toggle.setAttribute('aria-label', `Toggle ${extension.name}`);

  toggle.addEventListener('change', () => {
    const newState = toggle.checked;

    toggle.setAttribute('aria-checked', String(newState));
    onToggle?.(extension.name, newState);
  });

  const removeBtn = card.querySelector('.extension-card__remove');
  removeBtn.setAttribute('aria-label', `Remove ${extension.name}`);
  removeBtn.addEventListener('click', () => {
    onRemove?.(extension.name);
  });

  return card;
}
