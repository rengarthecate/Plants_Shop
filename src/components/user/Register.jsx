import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Register = ({ navigation }) => {
    return (
        <View  style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Icon name="chevron-back-outline" size={30} color="black" />
            </TouchableOpacity>
            <Text style={styles.title}>Đăng ký</Text>
            <Image source={require('../images/FitLife.png')} style={{ width: 300, height: 300, borderRadius: 100, marginBottom: Height * 0.05 }} />
            <View>
                <TextInput placeholderTextColor={'gray'} placeholder="Họ và tên" style={styles.input} />
                <View style={styles.space}></View>
                <TextInput placeholderTextColor={'gray'} placeholder="Email" style={styles.input} />
                <View style={styles.space}></View>
                <TextInput placeholderTextColor={'gray'} placeholder="Password" style={styles.input} secureTextEntry />
                <View style={styles.space}></View>
                <TextInput placeholderTextColor={'gray'} placeholder="Nhập lại password" style={styles.input} secureTextEntry />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("OTP")} style={styles.signInBtn}>
                <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>
        </View>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'white'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: Height * 0.07,
        marginBottom: Height * 0.05,
    },
    backBtn: {
        position: 'absolute',
        top: Height * 0.07,
        left: Width * 0.05,
    },
    input: {
        width: Width * 0.8,
        height: Height * 0.05,
        borderWidth: 2,
        borderRadius: 20,
        paddingLeft: 10,
        fontWeight: 'bold',
    },
    space: {
        height: Height * 0.03,
    },
    signInBtn: {
        marginTop: Height * 0.05,
        width: Width * 0.8,
        borderRadius: 20,
        overflow: 'hidden',
        justifyContent: 'center',
        alignItems: 'center',
        height: Height * 0.06,
        backgroundColor: 'green'
    },

    signInText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '700',
    },
 
});
