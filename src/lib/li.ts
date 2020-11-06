import { noop } from './utils';

type COLOR = { name: string, value: string } | null;

type API = {
  createColorInput: (color?: COLOR) => HTMLLIElement;
  onColorRemove?: (color: string) => void,
  onColorChange?: (color: string) => void,
  onNameChange?: (color: string, name: string) => void
};

/**
 * Creates div to preview color.
 * 
 * @param color string
 */
function createColorPreview(color: string = null) {
  const colorPreview = document.createElement('div');
  colorPreview.className = 'color-preview';

  if (color) {
    colorPreview.style.backgroundColor = `#${color}`;
  }

  return colorPreview;
}

/**
 * Creates button to remove li element
 */
function createColorRemove() {
  const button = document.createElement('button');
  const i = document.createElement('i');

  i.className = 'codicon codicon-trash';
  button.className = 'color-icon icon';

  button.appendChild(i);

  return button;
}

/**
 * Creates button to copy color to clipboard
 */
function createColorCopy() {
  const button = document.createElement('button');
  const i = document.createElement('i');

  i.className = 'codicon codicon-clippy';
  button.className = 'color-icon icon';

  button.appendChild(i);

  return button;
}

/**
 * Creates group element to define color.
 * @param color COLOR
 * @param listeners 
 */
function createColorInput(
  color: COLOR = null,
  listeners: {
    onColorRemove?: (color: string) => void,
    onColorChange?: (color: string) => void,
    onNameChange?: (color: string, name: string) => void
  } = {}
) {
  const colorElement = document.createElement('li');
  const colorInput = document.createElement('input');
  const colorNameInput = document.createElement('input');
  const colorPreview = createColorPreview();
  const colorRemove = createColorRemove();
  const colorClip = createColorCopy();
  let timer = 0;

  const { onColorChange, onColorRemove, onNameChange } = listeners;

  colorElement.className = 'color-entry';

  colorInput.className = 'color-input';
  colorInput.placeholder = 'Color hex';
  colorNameInput.className = 'color-input';
  colorNameInput.placeholder = 'Color name or css var';
  colorNameInput.disabled = true;

  if (color) {
    colorInput.value = color.value;
    colorNameInput.value = color.name;
    colorNameInput.disabled = false;
    colorPreview.style.backgroundColor = `#${color.value}`;
  }

  colorElement.appendChild(colorPreview);
  colorElement.appendChild(colorInput);
  colorElement.appendChild(colorNameInput);
  colorElement.appendChild(colorClip);
  colorElement.appendChild(colorRemove);

  colorRemove.addEventListener('click', () => {
    onColorRemove(colorInput.value);
    colorElement.remove();
  });

  colorInput.addEventListener('input', (event: any) => {
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      colorPreview.style.backgroundColor = `#${event.target.value}`;
      colorNameInput.disabled = false;
      colorNameInput.focus();
      onColorChange(event.target.value);
    }, 800);
  });

  colorNameInput.addEventListener('input', (event: any) => {
    clearTimeout(timer);

    timer = window.setTimeout(() => {
      onNameChange(event.target.value, colorInput.value);
    }, 800);
  });

  colorClip.addEventListener('click', () => {
    colorNameInput.select();
    colorNameInput.setSelectionRange(0, 99999);
    document.execCommand('copy');
  });

  return colorElement;
}

const api: API = {
  createColorInput: (color: COLOR = null) => {
    const { onColorChange, onColorRemove, onNameChange } = api;
    return createColorInput(color, { onColorChange, onColorRemove, onNameChange } );
  },
  onColorRemove: noop,
  onColorChange: noop,
  onNameChange: noop
};

export default {
  ...api
};
