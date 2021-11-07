import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import {initWebIcons} from './initWebIcons';

if (module.hot) {
  module.hot.accept();
}

initWebIcons();

AppRegistry.registerComponent(appName, () => App);
AppRegistry.runApplication(appName, {
  initialProps: {},
  rootTag: document.getElementById('app-root'),
});
