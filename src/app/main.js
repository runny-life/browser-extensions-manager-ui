import './styles/main.scss';
import { loadExtensions } from '../shared/api/extensionsApi';
import { renderError, renderExtensionsPage } from '../pages/extensions-page';

async function init() {
  const { container } = renderExtensionsPage();

  try {
    const extensions = await loadExtensions();
    console.log('Loaded extensions:', extensions);

    container.innerHTML = /*html*/ `<p>Loaded ${extensions.length} extensions</p>`;
  } catch (error) {
    console.error('Failed to load extensions:', error);
    renderError(container, error);
  }
}

init();
