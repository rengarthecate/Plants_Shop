import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity } from 'react-native';
import React from 'react';

const WelcomeScreen = () => {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
                <Image style={styles.logo} source={require ('../images/logoFood.png')} />
                <Text style={styles.title}>100K+ Premium Recipe</Text>
                <Image style={styles.backgroundImg} source={require ('../images/background.png')} />
                <View style={styles.txtWrap}>
                    <Text style={styles.txt}>Get Cooking</Text>
                </View>
                <Text style={styles.title2}>Simple way to find Tasty Recipe</Text>

                <TouchableOpacity style={styles.btn}>
                    <View>
                        <Text style={{color: 'white', fontSize: 20, fontWeight: '700'}}>Start Cooking </Text>
                    </View>
                </TouchableOpacity>
            </SafeAreaView>
        </>
    );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',

    },
    txt: {
        color: 'black',
        fontSize: 52,
        fontFamily: 'Roboto',
        fontWeight: '700',
        color: 'white',
        textAlign:'center',
        letterSpacing: 1
    },
    txtWrap:{
        width: '50%',
        marginTop: '65%'
    },
    backgroundImg: {
        position: 'absolute',
        width: '100%',
        height: '100%',
        // opacity: 0.9,
        zIndex: -1
    },
    logo:{
        width: 150,
        height: 150,  
        marginTop: '15%'      
    },
    title:{
        color: 'white',
        fontSize: 20,
        fontWeight: '600',
        marginTop: '5%'
    },
    title2: {
        color: 'white',
        fontSize: 20,
        fontWeight: '400',
        marginTop: '8%'
    },
    btn:{
        backgroundColor: '#129575',
        width: '65%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: '13%',
        opacity: 0.9
    }
});
