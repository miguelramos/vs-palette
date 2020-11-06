import { noop } from './utils';

type API = {
  onTitleChange?: (title: string) => void;
  createFieldset: (title: string) => HTMLFieldSetElement
};

function createFieldset(title: string, listener: (title: string) => void ) {
  const fieldset = document.createElement('fieldset');
  const legend = document.createElement('legend');
  let timer = 0;

  legend.contentEditable = 'true';
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

const api: API = {
  createFieldset: (title: string) => {
    return createFieldset(title, api.onTitleChange);
  },
  onTitleChange: noop
};

export default {
  ...api
};
