import './ExtensionsPage.scss';
import logo from '/images/logo.svg?raw';
import { renderExtensionList } from '../../../widgets/extensions-list';
import { createThemeToggle } from '../../../shared/ui/ToggleButton';

export function renderExtensionsPage() {
  const app = document.querySelector('#app');

  app.innerHTML = /*html*/ `
    <div class="page">
      <header class="header container">
        <div class="header__inner">
          <div class="header__logo">
            ${logo}
          </div>
          <div class="page__header-actions" id="header-actions"></div>
        </div>
      </header>
      <main className="page__content">
        <section class="extensions" aria-labelledby="extensions-title">
          <div class="extensions__inner container">
            <header class="extensions__header">
              <h1 class="extensions__title" id="extensions-title">Extensions List</h1>
              <div id="filter-container"></div>
            </header>
            <div id="extensions-container"></div>
          </div>
        </section>
      </main>
    </div>
  `;

  const headerActions = document.querySelector('#header-actions');
  headerActions.appendChild(createThemeToggle());

  return {
    container: document.querySelector('#extensions-container'),
    filterContainer: document.querySelector('#filter-container'),
  };
}

export function renderError(container, error) {
  container.innerHTML = /*html*/ `
    <p className="error">Failed to load extensions. ${error.message}</p>
  `;
}

export { renderExtensionList };
