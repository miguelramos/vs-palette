import fieldsetApi from './lib/fieldset';

(function() {
  const app = document.getElementById('app');

  if (app) {
    const vscode = acquireVsCodeApi();
    const state = vscode.getState() || { name: 'New Palette', colors: {} };

    fieldsetApi.onTitleChange = (title: string) => {
      console.dir(state);
      vscode.setState({ name: title, colors: state.colors });
      console.dir(vscode.getState());
    };
    const fieldset = fieldsetApi.createFieldset(state.name);

    app.appendChild(fieldset);
  }
}());
