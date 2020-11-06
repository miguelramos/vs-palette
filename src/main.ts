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

    const hasColors = () => !!Object.keys(state.colors).length;

    fieldsetApi.onTitleChange = (title: string) => {
      vscode.setState({ name: title, colors: state.colors });
    };

    liApi.onColorChange = (color) => {
      state.colors[color] = '';
      vscode.setState({ name: state.name, colors: state.colors });
    };

    liApi.onColorRemove = (color) => {
      delete state.colors[color];
      vscode.setState({ name: state.name, colors: state.colors });
    };

    liApi.onNameChange = (color, name) => {
      state.colors[color] = name;
      vscode.setState({ name: state.name, colors: state.colors });
    };

    const fieldset = fieldsetApi.createFieldset(state.name);
    const ul = ulApi.createGroup();

    window.addEventListener('message', (event) => {
      const message = event.data; // The json data that the extension sent
      switch (message.type) {
        case 'addColor': {
          const li = liApi.createColorInput();
          ul.appendChild(li);
          break;
        }
        case 'clearColors': {
          ul.innerHTML = '';
          state.colors = {};
          vscode.setState({ name: state.name, colors: state.colors });
          break;
        }
      }
    });

    if (hasColors()) {
      Object.keys(state.colors).forEach((key) => {
        const li = liApi.createColorInput({ value: key, name: state.colors[key] });
        ul.appendChild(li);
      });
    }

    fieldset.appendChild(ul);

    app.appendChild(fieldset);
  }
})();
