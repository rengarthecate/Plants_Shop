import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';
import moment from 'moment';

const { width, height } = Dimensions.get('window');

const CalendarReport = () => {
    const weekDays = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
    const today = moment().format('ddd');

    return (
        <View style={styles.container}>
            <View style={styles.calendarContainer}>
                {weekDays.map((day, index) => {
                    const isToday = day === today;
                    return (
                        <View key={index} style={styles.dayContainer}>
                            <Text style={styles.dayText}>{day}</Text>
                            <View key={index} style={[styles.dayCircle, isToday && styles.today]}>
                                <Text style={[styles.dateText, isToday && styles.todayText]}>
                                    {moment().day(index + 1).format('D')}
                                </Text>
                            </View>
                        </View>
                    );
                })}
            </View>
            <View style={styles.streakContainer}>
                <View style={styles.streakItem}>
                    <Text style={styles.streakTitle}>Streak</Text>
                    <View style={styles.streakContent}>
                        <Image 
                            style={styles.streakImage}
                            source={require('../images/icon_streak.png')}
                        />
                        <Text style={styles.streakText}>3 days</Text>
                    </View>
                </View>
                <View style={styles.streakItemRight}>
                    <Text style={styles.streakTitle}>Best of your Streak</Text>
                    <Text style={styles.streakText}>5 days</Text>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        justifyContent: 'space-between',
        padding: width * 0.025, // 10px trong tỷ lệ với width
        borderRadius: width * 0.025,
        backgroundColor: '#fff',
        marginTop: height * 0.012, // 10px trong tỷ lệ với height
    },
    calendarContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: width * 0.025,
        marginTop: height * 0.012,
    },
    dayContainer: {
        width: width * 0.11, // Khoảng 45px trên màn hình tiêu chuẩn
        height: width * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
        gap: width * 0.012,
    },
    dayCircle: {
        width: width * 0.11,
        height: width * 0.11,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: width * 0.055, // Một nửa width để tạo hình tròn
    },
    today: {
        backgroundColor: '#EAEAEA',
        borderRadius: width * 0.075,
        borderWidth: width * 0.005, // 2px trong tỷ lệ với width
        borderColor: '#D9D9D9',
    },
    dayText: {
        fontSize: width * 0.034, // Khoảng 14px
        fontWeight: '600',
        color: '#333',
    },
    dateText: {
        fontSize: width * 0.034,
        color: '#333',
        fontWeight: '600'
    },
    todayText: {
        color: '#3B00EE',
        fontWeight: 'bold',
    },
    streakContainer: {
        width: '90%',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: height * 0.024, // 20px trong tỷ lệ với height
        alignSelf: 'center',
    },
    streakItem: {
        marginBottom: height * 0.012,
    },
    streakItemRight: {
        alignItems: 'flex-end',
        marginRight: width * 0.025,
    },
    streakTitle: {
        fontSize: width * 0.039, // Khoảng 16px
        fontWeight: 'bold',
        color: '#333',
        marginBottom: height * 0.006,
    },
    streakContent: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    streakImage: {
        width: width * 0.049, // Khoảng 20px
        height: width * 0.049,
        marginRight: width * 0.025,
    },
    streakText: {
        fontSize: width * 0.034,
        color: '#333',
        fontWeight: '600'
    },
});

export default CalendarReport;