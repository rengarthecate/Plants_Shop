import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Svg, { Rect } from "react-native-svg";
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Feather';
import ChartComponent from '../custom/ChartComponent';




const Profile = ({ title, unit, color }) => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(today);

    const data = [10, 20, 15, 25, 30, 5, 50];
    const maxHeight = 50;
    const handleClear = () => {
        setSelectedDate(null);
        setCurrentMonth(today);
    };

    return (
        <ScrollView style={styles.container}>
            <View style={styles.userSection}>
                <Image source={{ uri: 'https://www.iconpacks.net/icons/2/free-user-icon-3296-thumb.png' }} style={{ width: 60, height: 60 }} />
                <Text style={styles.title}>Chào mừng!</Text>
            </View>
            <View style={styles.statisticSection}>
                <View style={styles.statistic}>
                    <Text style={styles.statisticNumber}>0</Text>
                    <Text style={styles.statisticTitle}>Bài tập</Text>
                </View>
                <View style={styles.statistic}>
                    <Text style={styles.statisticNumber}>0</Text>
                    <Text style={styles.statisticTitle}>Phút</Text>
                </View>
                <View style={styles.statistic}>
                    <Text style={styles.statisticNumber}>0</Text>
                    <Text style={styles.statisticTitle}>Calories</Text>
                </View>
            </View>

            <TouchableOpacity style={styles.premiumButton}>
                <Icon2 name="crown" size={20} color="black" />
                <Text style={styles.premiumTxt}> Go Premium</Text>
            </TouchableOpacity>

            <View style={styles.optionSection}>
                <TouchableOpacity style={styles.option}>
                    <Icon3 name="settings" size={30} color="black" />
                    <Text style={styles.optionText}>Cài đặt</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Icon5 name="user" size={30} color="black" />
                    <Text style={styles.optionText}>Hồ sơ & Mục tiêu</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Icon4 name="book-plus-outline" size={30} color="black" />
                    <Text style={styles.optionText}>Yêu thích</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <Icon name="login" size={30} color="black" />
                    <Text style={styles.optionText}>Đăng xuất</Text>
                </TouchableOpacity>
            </View>

            <View style={styles.chartSection}>
                <Text style={styles.sectionTitle}>Tuần này</Text>
                <View style={styles.chartWrap}>
                    <ChartComponent title="Thời gian tập" unit="phút" color="hotpink" data={data} />
                    <ChartComponent title="Calo tiêu hao" unit="kcal" color="orange" data={data} />
                </View>
            </View>

            <View style={styles.calendarSection}>
                <Text style={styles.sectionTitle}>Lịch</Text>
                <Calendar
                    current={currentMonth}
                    markedDates={{
                        [selectedDate]: { selected: true, selectedColor: 'blue' },
                        [today]: { selected: true, selectedColor: 'blue' },
                    }}
                    onDayPress={(day) => setSelectedDate(day.dateString)}
                    onMonthChange={(month) => setCurrentMonth(month.dateString)}
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
                        textDayFontWeight: 'bold',
                        textDayFontSize: 16,
                        selectedDayBackgroundColor: 'blue',
                        selectedDayTextColor: 'white',
                    }}
                />
            </View>
        </ScrollView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    userSection: {
        justifyContent: 'space-between',
        alignItems: 'center',
        marginTop: 50,
        flexDirection: 'column',
    },
    statistic: {
        flexDirection: 'column',
        alignItems: 'center',
    },
    statisticTitle: {
        fontWeight: '500',
        fontSize: 13,
        color: 'gray'
    },
    statisticNumber: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    statisticSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginVertical: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    optionSection: {
        marginTop: 30,
        marginLeft: 50,
        marginBottom: 20,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 15,
        marginLeft: 30
    },
    option: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 10,
        height: 60,
        width: 310,
        paddingLeft: 20,
        backgroundColor: '#ebebeb',
        borderRadius: 20,
        elevation: 5
    },
    optionText: {
        fontSize: 18,
        marginLeft: 15,
        fontWeight: '600'
    },
    premiumButton: {
        flexDirection: 'row',
        backgroundColor: '#f3f645',
        height: 60,
        width: '75%',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 15,
        elevation: 5,
        alignSelf: 'center'
    },
    premiumTxt: {
        fontWeight: '600',
        fontSize: 17,
        marginLeft: 2
    },
    chartWrap: {
      justifyContent: 'space-evenly',
      flexDirection: 'row',
    },
    chartTitle: {
        fontSize: 16,
        fontWeight: "bold",
    },
    value: {
        fontSize: 24,
        fontWeight: "bold",
    },
    unit: {
        fontSize: 15,
        color: "gray",
    },
    weekDays: {
        flexDirection: "row",
        justifyContent: "space-between",
        width: "89%",
        marginTop: 5,
        alignSelf: 'flex-start'
    },
    day: {
        fontSize: 12,
        fontWeight: "bold",
    },
    calendarSection: {
        marginTop: 50,
        marginBottom: 50,
    }

});

export default Profile;







