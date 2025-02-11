const { getDefaultConfig, mergeConfig } = require('@react-native/metro-config');

const config = {
  transformer: {
    // Tắt Bridgeless mode cho react-native-reanimated
    experimentalImportSupport: false,
    inlineRequires: false,
  },
  resolver: {
    // Đảm bảo rằng các module đúng cách
    extraNodeModules: require('node-libs-react-native'),
  },
};

module.exports = mergeConfig(getDefaultConfig(__dirname), config);
