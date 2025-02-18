import { StyleSheet, Text, TouchableOpacity, View, Dimensions } from 'react-native'
import LinearGradient from 'react-native-linear-gradient'
import React from 'react'

const { width, height } = Dimensions.get('window');


const HomeNavigate = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <View style={{ flexDirection: 'column' }}>
        <View style={styles.view1}>
          <Text style={[styles.text, { fontSize: 42, fontWeight: '900' }]}>GYMSYNC</Text>
          <Text style={[styles.text, { fontSize: 24, fontWeight: '500', marginTop: -5 }]}>W O R K O U T</Text>
        </View>
        <View style={styles.view2}>
          <View style={styles.txtView}>
            <Text style={[styles.text1, { color: '#cd3737' }]}>LEAP</Text>
          </View>
          <Text style={[styles.text1, { color: '#ffffff' }]}>FITNESS</Text>
        </View>
      </View>
      <View style={styles.loadingContainer}>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Bắt đầu</Text>
        </TouchableOpacity>
        <TouchableOpacity activeOpacity={0.9} style={styles.button} onPress={() => navigation.navigate('Register')}>
          <Text style={styles.buttonText}>Tôi là người mới</Text>
        </TouchableOpacity>
      </View>
    </View>


  )
}

export default HomeNavigate

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ED3737',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: width * 0.05,
    paddingTop: height * 0.02,
},
view1: {
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: height * 0.05,
},
text: {
    color: 'white',
},
view2: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 4,
},
txtView: {
    backgroundColor: '#ffffff',
    paddingHorizontal: width * 0.03,
    paddingVertical: height * 0.003,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width * 0.2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
},
text1: {
    fontSize: 18,
    fontWeight: '600',
},
loadingContainer: {
    position: 'absolute',
    bottom: height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
},
spinner: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: 60, // Giới hạn khoảng cách di chuyển
},
dot1: {
    width: 15,
    height: 15,
    backgroundColor: '#e2e2e2',
    borderRadius: 15,
    position: 'absolute',
},
dot2: {
    width: 15,
    height: 15,
    backgroundColor: '#d00a0a',
    borderRadius: 15,
    position: 'absolute',
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
    color: 'black',
    fontWeight: '700',
    fontSize: 16,

  },


})