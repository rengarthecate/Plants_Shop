import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Animated, StyleSheet, TouchableOpacity,  } from 'react-native';
import FastImage from 'react-native-fast-image';


const ImageSelectScreen = ({ navigation }) => {
  const [selected, setSelected] = useState(null);

  // Các animated values cho việc scale
  const boyScale = new Animated.Value(1);
  const girlScale = new Animated.Value(1);

  // Hàm handle chọn ảnh
  const handleSelectImage = (image) => {
    if (selected === image) return;

    Animated.spring(boyScale, {
      toValue: image === 'boy' ? 1.1 : 1,
      friction: 5,
      tension: 100,
      useNativeDriver: true
    }).start();

    Animated.spring(girlScale, {
      toValue: image === 'girl' ? 1.1 : 1,
      friction: 5,
      tension: 100,
      useNativeDriver: true
    }).start();

    setSelected(image);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.Header}>
        <Text style={styles.titleGender}>What's your gender?</Text>
        <View style={styles.annouce}>
          <FastImage
            style={styles.gif}
            source={{
              uri: 'https://i.gifer.com/XOsX.gif',
              priority: FastImage.resizeMode.normal
            }}
            resizeMode={FastImage.resizeMode.contain}
          />
          <Text style={styles.txtAnnouce}>This will help us tailor your workout to match your metabolic rate perfectly</Text>
        </View>
      </View>

      <View style={styles.row}>
        <TouchableOpacity activeOpacity={1} onPress={() => handleSelectImage('boy')}>
          <Animated.View style={[
            styles.imageContainer,
            {
              transform: [{ scale: boyScale }],
              borderColor: selected === 'boy' ? 'blue' : 'white',
              backgroundColor: selected === 'boy' ? '#d5e8ff' : 'white',

            }
          ]}>
            <Animated.Image
              source={{ uri: 'https://png.pngtree.com/png-clipart/20241117/original/pngtree-muscular-man-clipart-illustration-strong-physique-for-graphics-and-projects-png-image_17189707.png' }}
              style={styles.image}
            />
            <Text style={[styles.title,
            {
              color: selected === 'boy' ? 'blue' : 'black',
            }
            ]}>Male</Text>
          </Animated.View>
        </TouchableOpacity>

        <TouchableOpacity activeOpacity={1} onPress={() => handleSelectImage('girl')}>
          <Animated.View style={[
            styles.imageContainer,
            {
              transform: [{ scale: girlScale }],
              borderColor: selected === 'girl' ? 'blue' : 'white',
              backgroundColor: selected === 'girl' ? '#d5e8ff' : 'white',
            }
          ]}>
            <Animated.Image
              source={{ uri: 'https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-women-in-bodybuilding-breaking-stereotypes-png-image_13151644.png' }}
              style={styles.image}
            />
            <Text style={[styles.title,
            {
              color: selected === 'girl' ? 'blue' : 'black',
            }
            ]}>Female</Text>
          </Animated.View>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        activeOpacity={1}
        style={[
          styles.titleWrap2,
          {
            borderColor: selected === 'other' ? 'blue' : 'white',
            backgroundColor: selected === 'other' ? '#d5e8ff' : 'white',
            borderWidth: 2,
          }
        ]}
        onPress={() => handleSelectImage('other')}
      >
        <Text style={[styles.title2,
        {
          color: selected === 'other' ? 'blue' : 'black',
        }
        ]}>
          Other / I'd rather not say
        </Text>
      </TouchableOpacity>


      <TouchableOpacity  onPress={() => navigation.navigate('Goal')} activeOpacity={0.9} style={styles.buttonNext}>
        <Text style={styles.txtNext}> Next </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f6f6f8',
  },
  Header: {
    width: '100%',
    flex: 2,
    alignSelf: 'flex-start',
  },
  annouce: {
    flexDirection: 'row',
    width: 370,
    backgroundColor: '#e0eeff',
    alignSelf: 'center',
    justifyContent: 'center',
    height: 70,
    borderRadius: 20,
    marginTop: 40
  },
  gif:{
    width: 50,
    height: 50,
    marginRight: 20,
    marginLeft: -30,
    alignSelf: 'center'
  },
  txtAnnouce: {
    fontWeight: 400,
    width: 230,
    fontSize: 16,
    letterSpacing: 0.5,
    alignSelf: 'center'
  },
  titleGender: {
    fontWeight: 'bold',
    fontSize: 30,
    letterSpacing: 1,
    marginTop: 70,
    marginLeft: 20,
    width: '50%'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 2.5,
  },
  imageContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10,
    borderRadius: 20,
    elevation: 2,
    borderWidth: 2,
  },
  image: {
    width: 170,
    height: 220,
    top: -40,
  },
  title: {
    bottom: 20,
    fontSize: 18,
    fontWeight: '500',
    color: '#333',
  },
  title2: {
    fontSize: 17,
    paddingHorizontal: 25,
    paddingVertical: 5,
  },
  titleWrap2: {
    backgroundColor: 'white',
    borderRadius: 30,
    elevation: 2,
  },
  buttonNext: {
    width: 350,
    height: 60,
    borderRadius: 50,
    backgroundColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 40,

  },
  txtNext: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 20
  }

});

export default ImageSelectScreen;
