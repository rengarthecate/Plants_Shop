import { StyleSheet, Text, View, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const BMIReport = () => {
    const currentBMI = 22.2;

    const bmiRanges = [
        { value: 15, color: '#4169E1', label: 'Severely underweight' },
        { value: 16, color: '#6495ED', label: 'Underweight' },
        { value: 18.5, color: '#87CEEB', label: 'Healthy weight' },
        { value: 25, color: '#FFD700', label: 'Overweight' },
        { value: 30, color: '#FFA07A', label: 'Obese' },
        { value: 35, color: '#FF6B6B', label: 'Severely obese' },
        { value: 40, color: '#FF0000', label: 'Very severely obese' },
    ];

    const getIndicatorPosition = () => {
        const totalWidth = width * 0.9; // Chiều rộng của thước đo
        const minBMI = bmiRanges[0].value;
        const maxBMI = bmiRanges[bmiRanges.length - 1].value;
        const bmiRange = maxBMI - minBMI;
        
        // Tính phần trăm vị trí dựa trên BMI hiện tại
        const percentage = ((currentBMI - minBMI) / bmiRange) * 100;
        return Math.min(Math.max(percentage, 0), 100); // Giới hạn trong khoảng 0-100%
    };

    // Xác định trạng thái BMI hiện tại
    const getCurrentStatus = () => {
        for (let i = 0; i < bmiRanges.length - 1; i++) {
            if (currentBMI >= bmiRanges[i].value && currentBMI < bmiRanges[i + 1].value) {
                return bmiRanges[i].label;
            }
        }
        return bmiRanges[bmiRanges.length - 1].label;
    };

    return (
        <View style={styles.container}>
            <View style={styles.bmiHeader}>
                <Text style={styles.bmiValue}>{currentBMI}</Text>
                <View style={styles.statusContainer}>
                    <View style={styles.dot} />
                    <Text style={styles.statusText}> {getCurrentStatus()}</Text>
                </View>
            </View>

            <View style={styles.scaleContainer}>
                <View style={styles.scale}>
                    {bmiRanges.map((range, index) => (
                        <View
                            key={index}
                            style={[
                                styles.scaleSegment,
                                { 
                                    backgroundColor: range.color,
                                    flex: index === bmiRanges.length - 1 ? 0 : 1 
                                }
                            ]}
                        />
                    ))}
                </View>

                <View style={[styles.indicator, { left: `${getIndicatorPosition()}%` }]} />

                <View style={styles.labels}>
                    {bmiRanges.map((range, index) => (
                        <Text key={index} style={styles.labelText}>
                            {range.value}
                        </Text>
                    ))}
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        padding: width * 0.05,
        borderRadius: width * 0.03,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    bmiHeader: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: height * 0.02,
    },
    bmiValue: {
        fontSize: width * 0.1,
        fontWeight: 'bold',
        marginRight: width * 0.03,
    },
    statusContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    dot: {
        width: width * 0.02,
        height: width * 0.02,
        borderRadius: width * 0.01,
        backgroundColor: '#87CEEB',
        marginRight: width * 0.01,
    },
    statusText: {
        fontSize: width * 0.04,
        color: '#666',
        fontWeight: 'bold'
    },
    scaleContainer: {
        width: '100%',
        marginTop: height * 0.02,
    },
    scale: {
        flexDirection: 'row',
        height: height * 0.02,
        borderRadius: height * 0.01,
        overflow: 'hidden',
    },
    scaleSegment: {
        height: '100%',
    },
    indicator: {
        position: 'absolute',
        top: -height * 0.015,
        width: width * 0.03,
        height: width * 0.03,
        borderRadius: width * 0.015,
        backgroundColor: '#87CEEB',
        borderWidth: 2,
        borderColor: 'white',
        transform: [{ translateX: -width * 0.015 }],
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    labels: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: height * 0.01,
    },
    labelText: {
        fontSize: width * 0.03,
        color: '#666',
        fontWeight: '700'
    },
});

export default BMIReport;