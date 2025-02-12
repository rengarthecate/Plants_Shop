/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
// import LoginScreen from './src/components/user/LoginScreen';
import 'react-native-reanimated';
// import AnimatePageIndicator from './src/components/user/AnimateIndexPage';
// import App from './src/components/user/PickGender';
// import Ruler from './src/components/user/Ruler';
// import HomeScreen from './src/components/user/RulerHome';
// import ImageSelectScreen from './src/components/user/PickGender';
// import CalendarScreen from './src/components/user/Calendar';
import HomeScreen from './src/components/user/HomeScreen';
import LiXiVang from './src/lixi/LiXiVang';
import TetTranhTai from './src/lixi/TetTranhTai';
import DaiHoiTranhTai from './src/lixi/DaiHoiTranhTai';
import LacLocVang from './src/lixi/LacLocVang';
import GoalPick from './src/components/user/Goal';

AppRegistry.registerComponent(appName, () => App);
