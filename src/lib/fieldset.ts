function createFieldset(title: string, listener: (title: string) => void ) {
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  let timer = 0;

  legend.contentEditable = "true";
  legend.textContent = title;

  legend.addEventListener('input', (event: any) => {
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      listener(event.target.textContent);
    }, 800);
  });

  fieldset.appendChild(legend);

  return fieldset;
}

type API = {
  onTitleChange?: (title: string) => void;
  createFieldset: (title: string) => HTMLFieldSetElement
};

// eslint-disable-next-line @typescript-eslint/no-empty-function
const noop = function(...args: any): void {};

const api: API = {
  createFieldset: function (title: string) {
    const listener = this.onTitleChange ? this.onTitleChange : noop;
    return createFieldset(title, listener);
  }
};

export default {
  ...api
};
