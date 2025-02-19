import React from 'react';
import { StyleSheet, View, Text, ScrollView } from 'react-native';

const WeightReport = () => {
    // Dữ liệu mẫu - thay thế bằng dữ liệu thực tế của bạn
    const data = [
        { date: '11/2', weight: 66 },
        { date: '12/2', weight: 66.5 },
        { date: '13/2', weight: 67 },
        { date: '14/2', weight: 67.5 },
        { date: '15/2', weight: 68 },
        { date: '16/2', weight: 68.5 },
        { date: '17/2', weight: 69 },
    ];

    // Tính toán các giá trị cân nặng quan trọng
    const minWeight = Math.min(...data.map(item => item.weight));
    const maxWeight = Math.max(...data.map(item => item.weight));
    const range = maxWeight - minWeight; // Khoảng cách giữa cân nặng max và min
    const currentWeight = data[data.length - 1].weight; // Lấy cân nặng mới nhất

    // Hàm tính chiều cao của cột dựa trên cân nặng
    // Công thức: ((cân nặng hiện tại - cân nặng min) / khoảng cách) * 150 + 50
    // 150 là chiều cao tối đa có thể điều chỉnh, 50 là chiều cao tối thiểu
    const getBarHeight = (weight) => {
        return ((weight - minWeight) / range) * 150 + 50;
    };

    return (
        <View style={styles.wrapper}>
        <View style={styles.container}>
            <View style={styles.weightInfo}>
                <View>
                    <Text style={styles.rangeText}>Hiện tại</Text>
                <Text style={styles.currentWeight}>{currentWeight}kg</Text>
                </View>
                <View style={styles.rangeInfo}>
                    <View style={{flexDirection:'row'}}>
                        <Text style={[styles.rangeText, {fontWeight: '600'}]}>Cao nhất : </Text>
                        <Text style={styles.rangeText}>{maxWeight}kg</Text>
                    </View>
                    <View style={{flexDirection:'row'}}>
                    <Text style={[styles.rangeText, {fontWeight: '600'}]}>Thấp nhất : </Text>
                        <Text style={styles.rangeText}>{minWeight}kg</Text>
                    </View>
                    
                </View>
            </View>

            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.chartContainer}>
                    <View style={styles.yAxis}>
                        {[...Array(6)].map((_, i) => (
                            <View key={i} style={styles.yAxisRow}>
                                <Text style={styles.yLabel}>
                                    {(maxWeight - (i * range / 5)).toFixed(1)}kg
                                </Text>
                                <View style={styles.guideLine} />
                            </View>
                        ))}
                    </View>
                    
                    <View style={styles.barsContainer}>
                        {data.map((item, index) => (
                            <View key={index} style={styles.barGroup}>
                                <View style={[styles.bar, { height: getBarHeight(item.weight) }]}>
                                    <Text style={styles.barValue}>{item.weight}</Text>
                                </View>
                                <Text style={styles.xLabel}>{item.date}</Text>
                            </View>
                        ))}
                    </View>
                </View>
            </ScrollView>
        </View>
        </View>
    );
};

// Định nghĩa styles
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor: 'white'
    },
    container: {
        padding: 20,
        backgroundColor: 'white',
    },
    // Style cho phần thông tin cân nặng
    weightInfo: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 10,
    },
    currentWeight: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#000', 
        marginBottom: 4,
    },
    rangeInfo: {
        gap: 7,
        flexDirection: 'column',
    },
    rangeText: {
        fontWeight: '600',
        fontSize: 12,
        color: '#000',
    },
    chartContainer: {
        flexDirection: 'row',
        height: 250,
        alignItems: 'flex-end',
        marginLeft: 40, // Để chừa chỗ cho trục Y
    },
    yAxis: {
        position: 'absolute',
        left: -40,
        top: 0,
        bottom: 20,
        justifyContent: 'space-between',
    },
    yAxisRow: {
        flexDirection: 'row',
        alignItems: 'center',
        width: '100%',
    },
    yLabel: {
        color: '#666',
        fontSize: 12,
        width: 40,
        fontWeight: '600',

    },
    guideLine: {
        height: 1,
        borderWidth: 1,
        borderColor: '#eee',
        borderStyle: 'dotted',
        width: 350,  // Điều chỉnh độ dài của đường kẻ
        position: 'absolute',
        left: 40,
    },
    barsContainer: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        height: '100%',
        paddingBottom: 20, // Để chừa chỗ cho nhãn trục X
    },
    barGroup: {
        marginHorizontal: 5,  // Khoảng cách giữa các cột (đã giảm xuống)
        alignItems: 'center',
    },
    bar: {
        width: 30,  // Độ rộng cột (đã giảm xuống)
        backgroundColor: '#8884d8',
        borderRadius: 5,
        justifyContent: 'flex-start',
        alignItems: 'center',
    },
    barValue: {
        color: '#fff',
        fontSize: 12,
        fontWeight: '600',

        padding: 4,
    },
    xLabel: {
        marginTop: 8,
        fontSize: 12,
        color: '#666',
        fontWeight: 'bold',

    },
});

export default WeightReport;