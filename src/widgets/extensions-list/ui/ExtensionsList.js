import './ExtensionsList.scss';
import { createExtensionCard } from '../../../entities/extension';

export function renderExtensionList(container, extensions, handlers) {
  container.innerHTML = '';

  const list = document.createElement('ul');
  list.className = 'extensions-list';
  list.setAttribute('role', 'list');

  extensions.forEach((extension) => {
    const li = document.createElement('li');
    li.className = 'extension-list__item';

    const card = createExtensionCard(extension, handlers);
    li.appendChild(card);
    list.appendChild(li);
  });

  container.appendChild(list);
}
