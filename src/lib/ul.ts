type API = {
  createGroup: () => HTMLUListElement
};

function createColorGroup() {
  const ul = document.createElement('ul');
  ul.className = 'color-list';
  return ul;
}

const api: API = {
  createGroup: () => {
    return createColorGroup();
  }
};

export default {
  ...api
};