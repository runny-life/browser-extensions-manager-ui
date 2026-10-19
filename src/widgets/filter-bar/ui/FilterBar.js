import './FilterBar.scss';

const FILTERS = [
  { value: 'all', label: 'All' },
  { value: 'active', label: 'Active' },
  { value: 'inactive', label: 'Inactive' },
];

export function renderFilterBar({ onChange }) {
  const fieldset = document.createElement('fieldset');
  fieldset.className = 'filter-bar';

  const legend = document.createElement('legend');
  legend.className = 'visually-hidden';
  legend.textContent = 'Filter extensions';
  fieldset.appendChild(legend);

  FILTERS.forEach(({ value, label }, index) => {
    const wrapper = document.createElement('label');
    wrapper.className = 'filter-bar__option';

    const input = document.createElement('input');
    input.type = 'radio';
    input.name = 'filter';
    input.value = value;
    input.checked = index === 0;

    input.addEventListener('change', () => {
      if (input.checked) onChange(value);
    });

    const span = document.createElement('span');
    span.className = 'filter-bar__label';
    span.textContent = label;

    wrapper.appendChild(input);
    wrapper.appendChild(span);
    fieldset.appendChild(wrapper);
  });

  return fieldset;
}
