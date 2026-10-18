import './styles/main.scss';
import { loadExtensions } from '../shared/api/extensionsApi';
import {
  setExtensions,
  getExtensions,
  toggleExtension,
  removeExtension,
} from '../entities/extension';
import { renderError, renderExtensionsPage, renderExtensionList } from '../pages/extensions-page';

async function init() {
  const { container } = renderExtensionsPage();
  console.log(container);

  try {
    const data = await loadExtensions();
    setExtensions(data);

    const handlers = {
      onToggle(name, isActive) {
        toggleExtension(name, isActive);
      },
      onRemove(name) {
        removeExtension(name);
        renderExtensionList(container, getExtensions(), handlers);
      },
    };

    renderExtensionList(container, getExtensions(), handlers);
  } catch (error) {
    console.error('Failed to load extensions:', error);
    renderError(container, error);
  }
}

init();
