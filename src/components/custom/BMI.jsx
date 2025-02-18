import React, { useState, useEffect } from 'react';
import { SafeAreaView, View, Text, StyleSheet, Dimensions, TouchableOpacity } from 'react-native';
import RulerHeight from './RulerHeight'; // Import thước đo chiều cao
import RulerWeight from './RulerWeight'; // Import thước đo cân nặng

const { width, height } = Dimensions.get('window');

const BMICalculator = () => {
    const [heightValue, setHeightValue] = useState(0);
    const [weightValue, setWeightValue] = useState(0);
    const [bmi, setBmi] = useState(0);
    const [status, setStatus] = useState('Chưa có dữ liệu');

    const [isCm, setIsCm] = useState(true); // true: cm, false: inch
    const [isKg, setIsKg] = useState(true); // true: kg, false: lbs

    // Chuyển đổi giữa kg <-> lbs
    const toggleWeightUnit = () => {
        setWeightValue(prevWeight => isKg ? (prevWeight * 2.20462).toFixed(1) : (prevWeight / 2.20462).toFixed(1));
        setIsKg(prevState => !prevState);
    };
    

    // Chuyển đổi giữa cm <-> inch
    const toggleHeightUnit = () => {
        setHeightValue(prevHeight => isCm ? (prevHeight / 2.54).toFixed(1) : (prevHeight * 2.54).toFixed(1));
        setIsCm(prevState => !prevState);
    };
    
    // Tính toán BMI
    useEffect(() => {
        if (heightValue === 0 || weightValue === 0) {
            setBmi('0');
            setStatus('Chưa có dữ liệu');
            return;
        }

        let heightInMeters = isCm ? heightValue / 100 : heightValue * 0.0254;
        let weightInKg = isKg ? weightValue : weightValue / 2.20462;
        const calculatedBMI = (weightInKg / (heightInMeters * heightInMeters)).toFixed(1);

        setBmi(calculatedBMI);

        if (calculatedBMI < 18.5) {
            setStatus('Thiếu cân');
        } else if (calculatedBMI >= 18.5 && calculatedBMI < 24.9) {
            setStatus('Bình thường');
        } else if (calculatedBMI >= 25 && calculatedBMI < 29.9) {
            setStatus('Thừa cân');
        } else if (calculatedBMI >= 30 && calculatedBMI < 34.9) {
            setStatus('Béo phì cấp 1');
        } else if (calculatedBMI >= 35 && calculatedBMI < 39.9) {
            setStatus('Béo phì cấp 2');
        } else {
            setStatus('Béo phì cấp 3');
        }
    }, [heightValue, weightValue, isCm, isKg]);

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.wrapper}>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.label}>Weight</Text>
                    <View style={styles.unitToggle}>
                        <TouchableOpacity onPress={toggleWeightUnit} style={[styles.unitButton, isKg && styles.activeUnit]}>
                            <Text style={[styles.unitText, isKg && styles.activeText]}>Kg</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleWeightUnit} style={[styles.unitButton, !isKg && styles.activeUnit]}>
                            <Text style={[styles.unitText, !isKg && styles.activeText]}>Lbs</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <RulerWeight
                    minimum={0}
                    maximum={200}
                    unit={isKg ? "kg" : "lbs"}
                    onChangeValue={setWeightValue}
                    isKg={isKg}
                />


                <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                    <Text style={styles.label}>Height</Text>
                    <View style={styles.unitToggle}>
                        <TouchableOpacity onPress={toggleHeightUnit} style={[styles.unitButton, isCm && styles.activeUnit]}>
                            <Text style={[styles.unitText, isCm && styles.activeText]}>Cm</Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={toggleHeightUnit} style={[styles.unitButton, !isCm && styles.activeUnit]}>
                            <Text style={[styles.unitText, !isCm && styles.activeText]}>Inch</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={{ height: 170 }}>
                    <RulerHeight minimum={0} maximum={250} unit={isCm ? "cm" : "inch"} onChangeValue={setHeightValue} />
                </View>
            </View>

            <View style={styles.bmiRow}>
                <Text style={styles.bmiText}>Your BMI : </Text>
                <Text style={styles.bmiNumber}>{bmi}</Text>
            </View>

            <View style={styles.stateColumn}>
                <Text style={styles.bmiStatus}>State : </Text>
                <Text style={[styles.bmiStatus, { fontWeight: '600' }]}>{status}</Text>
            </View>
        </SafeAreaView>
    );
};

export default BMICalculator;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingHorizontal: 20,
        paddingTop: height * 0.05,
    },
    wrapper: {
        height: '73%',
        justifyContent: 'space-between',
    },
    label: {
        fontSize: 18,
        fontWeight: '700',
        marginBottom: 10,
    },
    unitToggle: {
        flexDirection: 'row',
        justifyContent: 'flex-start',
        marginBottom: 10,
        backgroundColor: '#F4F4F4',
        borderRadius: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    unitButton: {
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: 5,
        paddingHorizontal: 8,
        borderRadius: 5,
        borderRadius: 20,
    },
    activeUnit: {
        backgroundColor: '#007AFF',
    },
    unitText: {
        fontSize: 14,
        color: '#333',
        fontWeight: 'bold'
    },
    activeText: {
        color: 'white',
    },
    bmiRow: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 40,
        marginBottom: 10
    },
    stateColumn: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    bmiText: {
        fontSize: 20,
        fontWeight: '600',
        color: '#333',
    },
    bmiNumber: {
        fontSize: 25,
        color: 'blue',
        fontWeight: '600',
        width: 70,
        borderWidth: 1,
        borderRadius: 10,
        textAlign: 'center',
    },
    bmiStatus: {
        fontSize: 16,
        color: '#000',
        textAlign: 'center',
        fontWeight: '500',
    },
});
