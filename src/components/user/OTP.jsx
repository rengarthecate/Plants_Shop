import React, { useState, useRef } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Dimensions } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';


const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const OTP = ({ navigation }) => {
    const [otp, setOtp] = useState(['', '', '', '']);
    const otpInputs = useRef([]);

    const handleOtpChange = (index, value) => {
        const newOtp = [...otp];
        newOtp[index] = value;
        setOtp(newOtp);

        if (value && index < 3) {
            otpInputs.current[index + 1].focus();
        }
    };

    const handleVerify = () => {
        const enteredOtp = otp.join('');
        console.log('Entered OTP:', enteredOtp);
        navigation.navigate('Home');
    };

    return (
        <LinearGradient colors={['#4caf50', '#03a9f4']} style={styles.container}>
            <TouchableOpacity style={styles.backBtn} onPress={() => navigation.goBack()}>
                <Icon name="chevron-back-outline" size={30} color="white" />
            </TouchableOpacity>
            <Text style={styles.title}>Nhập mã OTP</Text>
            <Text style={styles.subtitle}>Mã OTP đã được gửi đến số điện thoại của bạn</Text>

            <View style={styles.otpContainer}>
                {otp.map((digit, index) => (
                    <TextInput
                        key={index}
                        style={styles.otpInput}
                        maxLength={1}
                        keyboardType="numeric"
                        value={digit}
                        onChangeText={(value) => handleOtpChange(index, value)}
                        ref={(ref) => (otpInputs.current[index] = ref)}
                    />
                ))}
            </View>

            <TouchableOpacity style={styles.verifyButton} onPress={handleVerify}>
                <Text style={styles.verifyButtonText}>Xác minh</Text>
            </TouchableOpacity>
        </LinearGradient>
    );
};

export default OTP;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    backBtn: {
        position: 'absolute',
        top: Height * 0.07,
        left: Width * 0.05,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 10,
        color: 'white',
    },
    subtitle: {
        fontSize: 16,
        color: 'white',
        fontWeight: '700',
        marginBottom: 30,
    },
    otpContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: Width * 0.7,
        marginVertical: 30,
    },
    otpInput: {
        width: 50,
        height: 50,
        borderWidth: 2,
        borderColor: 'white',
        borderRadius: 10,
        textAlign: 'center',
        fontSize: 20,
        color: 'white',
    },
    verifyButton: {
        width: Width * 0.7,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white',
        borderRadius: 10,
        marginTop: 30,
    },
    verifyButtonText: {
        color: '#03a9f4',
        fontSize: 18,
        fontWeight: 'bold',
    },
});