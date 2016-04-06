import find from 'lodash/find';

export function templates(templates) {
  const items = templates;

  return {
    getById: id => find(items, (tpl) => tpl.id === id)
  }
}