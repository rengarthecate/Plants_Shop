import React from 'react';
import { StatusBar,  } from 'react-native';
import AppNavigator from '../src/navigations/AppNavigator'

const App = () => {
  return (
    <>
      <StatusBar translucent backgroundColor="transparent" />
        <AppNavigator />
    </>
  );
};

export default App;

