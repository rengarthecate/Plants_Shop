import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
// import Svg, { Rect } from "react-native-svg";
import { Calendar } from 'react-native-calendars';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Icon2 from 'react-native-vector-icons/FontAwesome5';
import Icon3 from 'react-native-vector-icons/SimpleLineIcons';
import Icon4 from 'react-native-vector-icons/MaterialCommunityIcons';
import Icon5 from 'react-native-vector-icons/Feather';
import Icon6 from 'react-native-vector-icons/AntDesign';
// import ChartComponent from '../custom/ChartComponent';




const Profile = ({ title, unit, color }) => {
    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(today);

    const data = [10, 20, 15, 25, 30, 5, 50];
    const maxHeight = 50;

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
                    <View style={styles.optionTitle}>
                        <Icon3 name="settings" size={30} color="black" />
                        <Text style={styles.optionText}>Cài đặt</Text>
                    </View>
                    <Icon6 name="right" size={20} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.optionTitle}>
                        <Icon5 name="user" size={30} color="black" />
                        <Text style={styles.optionText}>Hồ sơ & Mục tiêu</Text>
                    </View>
                    <Icon6 name="right" size={20} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.optionTitle}>
                        <Icon4 name="book-plus-outline" size={30} color="black" />
                        <Text style={styles.optionText}>Yêu thích</Text>
                    </View>
                    <Icon6 name="right" size={20} color="gray" />
                </TouchableOpacity>
                <TouchableOpacity style={styles.option}>
                    <View style={styles.optionTitle}>
                        <Icon name="login" size={30} color="black" />
                        <Text style={styles.optionText}>Đăng xuất</Text>
                    </View>
                    <Icon6 name="right" size={20} color="gray" />
                </TouchableOpacity>
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
        backgroundColor: '#f5feff',
    },
    optionTitle: {
        flexDirection: 'row'
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
        marginBottom: 20,
        backgroundColor: 'white',
        alignSelf: 'center',
        marginTop: 40,
        borderRadius: 20,
        elevation: 5
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
        height: 60,
        width: 310,
        paddingHorizontal: 20,
        marginVertical: 5,
        justifyContent: 'space-between'

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







