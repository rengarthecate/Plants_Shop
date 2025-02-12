import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Calendar } from 'react-native-calendars';

const CalendarScreen = () => {
    const [selectedDate, setSelectedDate] = useState(null);

    const handleDayPress = (day) => {
        setSelectedDate(day.dateString);
    };

    return (
        <View style={styles.container}>
            <View style={styles.calendarWrap}>
                <Calendar
                    style={{ height: 350 }}  // Điều chỉnh kích thước lịch
                    current={selectedDate || new Date().toISOString().split('T')[0]}
                    markedDates={{
                        [selectedDate]: {
                            selected: true,
                            marked: true,
                            selectedColor: 'blue',
                            selectedTextColor: 'white'
                        },
                    }}
                    onDayPress={handleDayPress}
                    monthFormat={'MM - yyyy'}
                    enableSwipeMonths={true} // Bật vuốt để chuyển tháng
                    theme={{
                        selectedDayBackgroundColor: 'blue',
                        selectedDayTextColor: 'white',
                        todayTextColor: 'red',
                        arrowColor: 'blue',
                        textDayFontWeight: 'bold', // Font chữ cho các ngày trong tháng
                        dayTextColor: 'black',  // Màu chữ mặc định cho các ngày
                        textMonthFontWeight: 'bold', // Font chữ cho tháng và năm (đậm hơn
                        monthTextColor: 'blue'

                    }}
                    weekDayNames={['CN', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7']}

                />
                {/* {selectedDate && <Text style={styles.selectedDate}>Ngày đã chọn: {selectedDate}</Text>} */}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: 'white',
    },
    title: {
        fontSize: 24,
        marginBottom: 20,
    },
    selectedDate: {
        marginTop: 20,
        fontSize: 18,
        color: 'blue',
    },
    calendarWrap: {
        borderWidth: 2,
        borderRadius: 50,
        padding: 20
    }
});

export default CalendarScreen;
