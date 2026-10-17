import './styles/main.scss';
import { loadExtensions } from '../shared/api/extensionsApi';
import { renderError, renderExtensionsPage, renderExtensionList } from '../pages/extensions-page';

const handlers = {
  onToggle(name, newState) {
    console.log(`Toggle ${name} → ${newState}`);
  },
  onRemove(name) {
    console.log(`Remove ${name}`);
  },
};

async function init() {
  const { container } = renderExtensionsPage();

  try {
    const extensions = await loadExtensions();
    renderExtensionList(container, extensions, handlers);
  } catch (error) {
    console.error('Failed to load extensions:', error);
    renderError(container, error);
  }
}

init();
