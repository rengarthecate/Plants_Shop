import React, { useEffect } from 'react';
import { View, Text, StyleSheet, Image, Dimensions } from 'react-native';

const Height = Dimensions.get('window').height

const SplashScreen = ({ navigation }) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            navigation.replace('State');
        }, 2000);

        return () => clearTimeout(timer);  
    }, [navigation]);

    return (
        <View style={styles.container}>
            <Image
                style={styles.image}
                source={require('../images/SplashGym.jpeg')}
                resizeMode='cover'
            />     
        </View>
    );
};

const styles = StyleSheet.create({
    image:{
        height: Height,
        width: '100%'
    },
    container: {
        flex: 1,
        backgroundColor: 'black'
    },


});

export default SplashScreen;
