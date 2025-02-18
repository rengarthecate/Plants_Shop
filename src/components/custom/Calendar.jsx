import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CustomCalendar = () => {
    const today = new Date().toISOString().split('T')[0]; // Lấy ngày hiện tại
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(today); // Lưu tháng hiện tại

    const handleClear = () => {
        setSelectedDate(null);
        setCurrentMonth(today); // Quay về tháng hiện tại
    };

    return (
        <View style={styles.container}>
            <Calendar
                current={currentMonth}
                markedDates={{
                    [selectedDate]: { selected: true, selectedColor: 'blue' },
                    [today]: { selected: true, selectedColor: 'red' }, // Ngày hiện tại màu đỏ
                }}
                onDayPress={(day) => setSelectedDate(day.dateString)}
                onMonthChange={(month) => setCurrentMonth(month.dateString)} // Cập nhật tháng hiện tại
                monthFormat={'MMMM yyyy'}
                enableSwipeMonths={true}
                hideExtraDays={true}
                theme={{
                    textMonthFontSize: 18,
                    textMonthFontWeight: 'bold',
                    monthTextColor: 'black',
                    arrowColor: 'black',
                    textSectionTitleColor: 'black',
                    dayTextColor: 'black',
                    todayTextColor: 'black',
                    textDayFontSize: 16,
                    selectedDayBackgroundColor: 'blue',
                    selectedDayTextColor: 'white',
                }}
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        paddingTop: 40,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingBottom: 10,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    closeButton: {
        fontSize: 18,
        color: 'black',
    },
    clearButton: {
        fontSize: 16,
        color: 'blue',
    },
});

export default CustomCalendar;
