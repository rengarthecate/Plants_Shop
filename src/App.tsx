// import React from 'react';
// import { StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
// import ImageSelectScreen from './src/components/user/PickGender';
// import { SafeAreaView } from 'react-native-safe-area-context';

// const App = () => {
//   return (
//     <>
//       <StatusBar translucent backgroundColor="transparent" />
//       <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
//         <ImageSelectScreen />
//       </SafeAreaView>
//     </>
//   );
// };

// export default App;


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

