/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-reanimated';

import HomeScreen from './src/components/user/HomeScreen';
import LiXiVang from './src/lixi/LiXiVang';
import TetTranhTai from './src/lixi/TetTranhTai';
import DaiHoiTranhTai from './src/lixi/DaiHoiTranhTai';
import LacLocVang from './src/lixi/LacLocVang';
import GoalPick from './src/components/user/Goal';
import CalendarScreen from './src/components/custom/Calendar';
import Ruler from './src/components/custom/Ruler';
import BMICalculator from './src/components/user/BMI';
import Profile from './src/components/user/Profile';

AppRegistry.registerComponent(appName, () => App);
