import fieldsetApi from './lib/fieldset';
import ulApi from './lib/ul';
import liApi from './lib/li';

(function () {
  const app = document.getElementById('app');

  if (app) {
    const vscode = acquireVsCodeApi();
    const state = vscode.getState() || {
      name: 'New Palette (click to edit)',
      colors: {},
    };
    let { colors } = state;

    const hasColors = () => !!Object.keys(colors).length;

    const { createFieldset } = fieldsetApi;
    const { createGroup } = ulApi;
    const { createColorInput } = liApi;

    fieldsetApi.onTitleChange = (title: string) => {
      vscode.setState({ name: title, colors });
    };

    liApi.onColorChange = (color) => {
      colors[color] = '';
      vscode.setState({ name: state.name, colors });
    };

    liApi.onColorRemove = (color) => {
      delete colors[color];
      vscode.setState({ name: state.name, colors });
    };

    liApi.onNameChange = (color, name) => {
      colors[color] = name;
      vscode.setState({ name: state.name, colors });
    };

    const fieldset = createFieldset(state.name);
    const ul = createGroup();

    window.addEventListener('message', (event) => {
      const message = event.data; // The json data that the extension sent
      switch (message.type) {
        case 'addColor': {
          const li = createColorInput();
          ul.appendChild(li);
          break;
        }
        case 'clearColors': {
          ul.innerHTML = '';
          colors = {};
          vscode.setState({ name: state.name, colors });
          break;
        }
      }
    });

    if (hasColors()) {
      Object.keys(colors).forEach((key) => {
        const li = createColorInput({ value: key, name: colors[key] });
        ul.appendChild(li);
      });
    }

    fieldset.appendChild(ul);

    app.appendChild(fieldset);
  }
})();
