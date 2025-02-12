import { StyleSheet, Text, TouchableOpacity, View, Dimensions, TextInput, Image } from 'react-native';
import React from 'react';
import Icon from 'react-native-vector-icons/Ionicons';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const Register = ({ navigation }) => {
    return (
        <LinearGradient colors={['#4caf50', '#03a9f4']} style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Icon name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Đăng ký</Text>
            <Image source={require('../images/FitLife.png')} style={{ width: 300, height: 300, borderRadius: 100, marginBottom: Height * 0.05 }} />
            <View>
                <TextInput placeholderTextColor={'#e5e5e5'} placeholder="Họ và tên" style={styles.input} />
                <View style={styles.space}></View>
                <TextInput placeholderTextColor={'#e5e5e5'} placeholder="Email" style={styles.input} />
                <View style={styles.space}></View>
                <TextInput placeholderTextColor={'#e5e5e5'} placeholder="Password" style={styles.input} secureTextEntry />
                <View style={styles.space}></View>
                <TextInput placeholderTextColor={'#e5e5e5'} placeholder="Nhập lại password" style={styles.input} secureTextEntry />
            </View>

            <TouchableOpacity onPress={() => navigation.navigate("OTP")} style={styles.signInBtn}>
                <Text style={styles.signInText}>Sign Up</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default Register;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginTop: Height * 0.07,
        color: 'white',
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
        borderColor: 'white',
        borderRadius: 20,
        paddingLeft: 10,
        color: 'white',
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
        backgroundColor: 'white',
        height: Height * 0.06,
    },

    signInText: {
        color: '#03a9f4',
        fontSize: 18,
        fontWeight: '700',
    },
    forgotTxt: {
        color: 'white',
        alignSelf: 'flex-end',
        marginTop: 20,
        fontWeight: '600',
        marginRight: 10,
        fontSize: 14
    }
});
