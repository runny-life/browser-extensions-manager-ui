import './ExtensionsPage.scss';
import { renderExtensionList } from '../../../widgets/extensions-list';

export function renderExtensionsPage() {
  const app = document.querySelector('#app');

  app.innerHTML = /*html*/ `
    <div class="page">
      <header class="header__page">
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
