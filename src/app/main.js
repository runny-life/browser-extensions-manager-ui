import './styles/main.scss';
import { loadExtensions } from '../shared/api/extensionsApi';
import {
  setExtensions,
  getExtensions,
  toggleExtension,
  removeExtension,
} from '../entities/extension';
import { renderError, renderExtensionsPage, renderExtensionList } from '../pages/extensions-page';
import { renderFilterBar } from '../widgets/filter-bar';

let currentFilter = 'All';

function getVisibleExtensions() {
  const all = getExtensions();
  if (currentFilter === 'active') return all.filter((e) => e.isActive);
  if (currentFilter === 'inactive') return all.filter((e) => !e.isActive);

  return all;
}

async function init() {
  const { container, filterContainer } = renderExtensionsPage();

  try {
    const data = await loadExtensions();
    setExtensions(data);

    const rerenderList = () => {
      renderExtensionList(container, getVisibleExtensions(), handlers);
    };

    const handlers = {
      onToggle(name, isActive) {
        toggleExtension(name, isActive);
      },
      onRemove(name) {
        removeExtension(name);
        rerenderList();
      },
    };

    const filterBar = renderFilterBar({
      onChange(value) {
        currentFilter = value;
        rerenderList();
      },
    });

    filterContainer.appendChild(filterBar);
    renderExtensionList(container, getExtensions(), handlers);
  } catch (error) {
    console.error('Failed to load extensions:', error);
    renderError(container, error);
  }
}

init();
