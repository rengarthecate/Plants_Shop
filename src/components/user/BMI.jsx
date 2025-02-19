import React, { useState } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import Ruler from '../custom/Ruler';

const Height = Dimensions.get('window').height;

const BMICalculator = ({ navigation }) => {
    const [height, setHeight] = useState(170); // cm
    const [weight, setWeight] = useState(60); // kg

    const calculateBMI = () => {
        const heightInMeters = height / 100;
        return (weight / (heightInMeters * heightInMeters)).toFixed(1);
    };

    const getBMIStatus = (bmi) => {
        if (bmi < 18.5) return 'Thiếu cân';
        if (bmi >= 18.5 && bmi < 24.9) return 'Bình thường';
        if (bmi >= 25 && bmi < 29.9) return 'Thừa cân';
        return 'Béo phì';
    };

    const bmiValue = calculateBMI();
    const bmiStatus = getBMIStatus(bmiValue);

    return (
        <SafeAreaView style={styles.container}>

            <View style={styles.Wrapper}>
                <Text style={styles.label}>Chiều cao</Text>
                <View style={{ height: 200 }}>
                    <Ruler minimum={100} maximum={300} unit="cm" onChangeValue={setHeight} />
                </View>

                <Text style={styles.label}>Cân nặng</Text>
                <View style={{ height: 200 }}>
                    <Ruler minimum={0} maximum={300} unit="kg" onChangeValue={setWeight} />
                </View>
            </View>
            <View style={styles.BMIrow}>
                <Text style={styles.bmiText}>Your BMI : </Text>
                <Text style={styles.bmiNumber}>{calculateBMI().toString()}</Text>
            </View>

            <Text style={styles.bmiStatus}>{bmiStatus}</Text>


        </SafeAreaView>
    );
};

export default BMICalculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    Header: {
        width: '100%',
        flex: 0.6,
    },
    title: {
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 70,
        marginLeft: 20,
        width: '50%'
    },
    label: {
        fontSize: 18,
        marginLeft: 20,
        fontWeight: 700
    },
    bmiText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    Wrapper: {
        justifyContent: 'space-between',
        marginTop: 30
    },
    BMIrow: {
        flexDirection: 'row',
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: 30
    },
    bmiNumber: {
        fontSize: 25,
        color: 'blue',
        fontWeight: '600',
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center'
    },
    buttonNext: {
        width: 350,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: Height * 0.945
    },
    txtNext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    },
    bmiStatus: {
        fontSize: 20,
        color: 'green',
        fontWeight: '600',
        textAlign: 'center',
        marginTop: 10,
    },
});
