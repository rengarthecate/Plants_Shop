import React, { useState, useRef } from 'react';
import { View, Text, Animated, StyleSheet, TouchableOpacity } from 'react-native';

const genders = [
  {
    id: 'boy',
    label: 'Male',
    uri: 'https://png.pngtree.com/png-clipart/20241117/original/pngtree-muscular-man-clipart-illustration-strong-physique-for-graphics-and-projects-png-image_17189707.png',
  },
  {
    id: 'girl',
    label: 'Female',
    uri: 'https://png.pngtree.com/png-vector/20240719/ourmid/pngtree-women-in-bodybuilding-breaking-stereotypes-png-image_13151644.png',
  }
];

const ImageSelectScreen = () => {
  const [selected, setSelected] = useState(null);
  const scaleAnim = useRef({ boy: new Animated.Value(1), girl: new Animated.Value(1) }).current;

  const handleSelectImage = (id) => {
    if (selected === id) return;

    genders.forEach(gender => {
      Animated.spring(scaleAnim[gender.id], {
        toValue: gender.id === id ? 1.1 : 1,
        friction: 5,
        tension: 100,
        useNativeDriver: true,
      }).start();
    });

    setSelected(id);
  };

  return (
    <View style={styles.container}>
      {genders.map(({ id, label, uri }) => (
        <TouchableOpacity key={id} activeOpacity={1} onPress={() => handleSelectImage(id)}>
          <Animated.View style={[
            styles.imageContainer,
            {
              transform: [{ scale: scaleAnim[id] }],
              borderColor: selected === id ? 'blue' : 'white',
              backgroundColor: selected === id ? '#d5e8ff' : 'white',
            }
          ]}>
            <Animated.Image source={{ uri }} style={styles.image} />
            <Text style={[styles.title, { color: selected === id ? 'blue' : 'black' }]}>{label}</Text>
          </Animated.View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#ffffff',
  },
  imageContainer: {
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
  },
});

export default ImageSelectScreen;
