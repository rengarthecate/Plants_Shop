import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'

const GradientButton = ({ title, navigation, screen }) => {
  return (
    <LinearGradient
      colors={['#FF69B4', 'red']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.buttonBorder}
    >
      <TouchableOpacity activeOpacity={0.8} style={styles.button} onPress={() => navigation.navigate(screen)}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </LinearGradient>
  );
};

const HomeNavigate = ({navigation}) => {
  return (
    <LinearGradient colors={['#4caf50', '#03a9f4']} style={styles.container}>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>F I T L I F E</Text>
      </View>
      <View style={styles.btnWrapper}>
        {/* <GradientButton title="Đăng nhập" navigation={navigation} screen="Goal" /> */}
        {/* <GradientButton title="Chưa có tài khoản" /> */}
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Bắt đầu</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Tôi là người mới</Text>
        </TouchableOpacity>

      </View>
    </LinearGradient>
  )
}

export default HomeNavigate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#9f5f91'
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    color: 'white',
    letterSpacing: 5,
    alignSelf: 'center',
  },
  titleWrapper: {
    flex: 3,
    justifyContent: 'center',
  },
  btnWrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonBorder: {
    padding: 2,
    borderRadius: 25,
    marginVertical: 10,
  },
  button: {
    backgroundColor: 'white',
    borderRadius: 25,
    alignItems: 'center',
    width: 250,
    height: 45,
    alignItems: 'center',
    justifyContent: 'center',
    borderColor: 'white',
    borderWidth: 2,
    marginVertical: 10
  },
  buttonText: {
    color: '#03a9f4',
    fontWeight: '700',
    fontSize: 16,
   
  },


})