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
    console.dir(state);
    console.dir(vscode);
    const hasColors = () => !!Object.keys(state.colors).length;

    const { createFieldset } = fieldsetApi;
    const { createGroup } = ulApi;
    const { createColorInput } = liApi;

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
      console.dir(state);
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
          state.colors = {};
          vscode.setState({ name: state.name, colors: state.colors });
          break;
        }
      }
    });

    if (hasColors()) {
      Object.keys(state.colors).forEach((key) => {
        const li = createColorInput({ value: key, name: state.colors[key] });
        ul.appendChild(li);
      });
    }

    fieldset.appendChild(ul);

    app.appendChild(fieldset);
  }
})();
