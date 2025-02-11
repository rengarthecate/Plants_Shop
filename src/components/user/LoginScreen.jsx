import { SafeAreaView, StyleSheet, Text, View, StatusBar, Image, TouchableOpacity, TextInput } from 'react-native';
import React from 'react';

const LoginScreen = () => {
    return (
        <>
            <StatusBar translucent backgroundColor="transparent" />
            <SafeAreaView style={styles.container} edges={['left', 'right', 'bottom']}>
                <Text style={styles.title1}>Hello,</Text>
                <Text style={styles.title2}>Welcome Back!</Text>

                <View style={styles.inputContainer}>
                    <View style={styles.inputWrap}>
                        <Text style={styles.inputLabel}>
                            Email
                        </Text>
                        <TextInput style={styles.input} placeholder='Enter Email' />
                    </View>
                    <View style={styles.inputWrap}>
                        <Text style={styles.inputLabel}>
                            Password
                        </Text>
                        <TextInput style={styles.input} placeholder='Enter Password' />
                    </View>
                </View>

                <TouchableOpacity style={styles.forgotBtn}>
                    <Text style={styles.forgotText}>
                        Forgot Password?
                    </Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.btnSignin}>
                    <Text style={styles.btnText}>Sign In </Text>
                </TouchableOpacity>

                <View style={styles.lineContainer}>
                    <View style={styles.line} />
                    <Text style={styles.text}>Or Sign in With</Text>
                    <View style={styles.line} />
                </View>
                
                <View style={styles.iconContainer}>
                    <TouchableOpacity style={styles.btnIcon}>
                        <Image style={styles.iconImg} source={{uri:'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'}} />
                    </TouchableOpacity>
                    <TouchableOpacity style={styles.btnIcon}>
                        <Image style={styles.iconImg} source={{uri:'https://static.vecteezy.com/system/resources/previews/018/930/698/non_2x/facebook-logo-facebook-icon-transparent-free-png.png'}} />
                    </TouchableOpacity>
                </View>

                <View>
                    <Text style={styles.bottomTxt}>
                        Dont have an account? <Text style={styles.forgotText}>Sign Up</Text>
                    </Text>
                </View>
            </SafeAreaView>
        </>
    );
};

export default LoginScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 30
    },
    title1: {
        fontSize: 40,
        fontWeight: 'bold',
        marginTop: 100
    },
    title2: {
        fontSize: 30,
        fontWeight: '400',
        marginTop: 10
    },
    input: {
        borderWidth: 1,
        borderColor: '#c3c3c3',
        padding: 10,
        marginTop: 10,
        borderRadius: 10,
        borderWidth: 2,
        height: 60,
        fontSize: 13
    },
    inputContainer: {
        marginTop: 57,
        height: 210,
        justifyContent: 'space-between'
    },
    forgotText: {
        color: 'orange',
        fontSize: 13,
        fontWeight: '600'
    },
    forgotBtn: {
        width: '90%',
        alignSelf: 'center',
        marginTop: 20,
    },
    inputLabel: {
        fontSize: 14
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: 'bold'
    },
    btnSignin: {
        backgroundColor: '#129575',
        width: '100%',
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 25,
        alignSelf: 'center'
    },
    lineContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 20,
        width: '70%',
        alignSelf: 'center'
    },
    line: {
        flex: 1,
        height: 1,
        backgroundColor: 'gray', 
    },
    text:{
        marginHorizontal: 15,
        fontSize: 14,
        color: 'gray'
    },
    iconImg:{
        width: 40,
        height: 40
    },
    btnIcon: {
        backgroundColor: 'white',
        width: 60,
        height: 60,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        elevation: 5
    }, 
    iconContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '40%',
        alignSelf:'center'
    },
    bottomTxt:{
        textAlign: 'center',
        marginTop: 55,
        fontSize: 14
    }



});
