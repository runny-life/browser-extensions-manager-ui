import { renderExtensionList } from '../../../widgets/extensions-list';

export function renderExtensionsPage() {
  const app = document.querySelector('#app');

  app.innerHTML = /*html*/ `
    <div class="page">
      <header class="header__page">
        <h1>Extensions List</h1>
      </header>
      <main className="page__content" id="extensions-container"></main>
    </div>
  `;

  return {
    container: document.querySelector('#extensions-container'),
  };
}

export function renderError(container, error) {
  container.innerHTML = /*html*/ `
    <p className="error">Failed to load extensions. ${error.message}</p>
  `;
}

export { renderExtensionList };
