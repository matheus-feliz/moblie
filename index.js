/**
 * @format
 */

import {AppRegistry} from 'react-native';
import route from './src/routes/index';
import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => route);
