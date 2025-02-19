// Import các thư viện cần thiết
import { StyleSheet, Text, View, Image, FlatList, TouchableOpacity, Dimensions } from 'react-native'
import React, { useMemo, useState } from 'react'
import { Calendar } from 'react-native-calendars'

const { width, height } = Dimensions.get('window')


const exerciseData = [
    {
        id: '1',
        practiceDay: 'Monday',
        practiceTime: '09:30 AM',
        muscles1: 'Chest',
        muscles2: 'Shoulder',
        muscles3: 'Triceps',
        totalTime: '45:00',
        totalKcal: 150,
        exercises: '3/5',
        percent: 60,
        image: { uri: 'https://source.unsplash.com/featured/?chest,workout' }
    },
    {
        id: '2',
        practiceDay: 'Wednesday',
        practiceTime: '02:00 PM',
        muscles1: 'Back',
        muscles2: 'Biceps',
        muscles3: 'Core',
        totalTime: '30:32',
        totalKcal: 120,
        exercises: '2/4',
        percent: 40,
        image: { uri: 'https://source.unsplash.com/featured/?back,exercise' }
    },
    {
        id: '3',
        practiceDay: 'Friday',
        practiceTime: '06:15 AM',
        muscles1: 'Legs',
        muscles2: 'Glutes',
        muscles3: 'Calves',
        totalTime: '50:20',
        totalKcal: 180,
        exercises: '4/6',
        percent: 67,
        image: { uri: 'https://source.unsplash.com/featured/?legs,workout' }
    },
    {
        id: '4',
        practiceDay: 'Sunday',
        practiceTime: '05:45 PM',
        muscles1: 'Full Body',
        muscles2: 'Core',
        muscles3: 'Cardio',
        totalTime: '40:00',
        totalKcal: 200,
        exercises: '5/5',
        percent: 100,
        image: { uri: 'https://source.unsplash.com/featured/?fitness,training' }
    }
];



// Helper function to get current week range
const getCurrentWeekRange = () => {
    const curr = new Date()
    const first = curr.getDate() - curr.getDay()
    const last = first + 6

    const firstDay = new Date(curr.setDate(first))
    const lastDay = new Date(curr.setDate(last))

    const formatDate = (date) => {
        const day = date.getDate()
        const month = date.getMonth() + 1
        return `${day} th ${month}`
    }

    return `${formatDate(firstDay)} - ${formatDate(lastDay)}`
}

// Helper function to calculate total time
const calculateTotalTime = (data) => {
    const totalSeconds = data.reduce((acc, item) => {
        const [minutes, seconds] = item.totalTime.split(':').map(Number)
        return acc + (minutes * 60) + seconds
    }, 0)

    const hours = Math.floor(totalSeconds / 3600)
    const minutes = Math.floor((totalSeconds % 3600) / 60)
    const seconds = totalSeconds % 60

    return `${hours}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
}

const calculateTotalKcal = (data) => {
    return data.reduce((acc, item) => acc + item.totalKcal, 0)
}

const renderExerciseItem = ({ item }) => (
    <TouchableOpacity style={styles.exerciseItem}>
        <Image
            source={item.image}
            style={styles.exerciseImage}
        />
        <View style={styles.exerciseInfo}>
            <Text style={styles.exerciseText}>{item.practiceDay}, {item.practiceTime}</Text>
            <Text style={styles.muscleText}>{item.muscles1}, {item.muscles2}, {item.muscles3}</Text>

            <View style={styles.statsRow}>
                <View style={styles.statItem}>
                    <Image
                        source={require('../images/icon_time_small.png')}
                        style={styles.statIcon}
                    />
                    <Text style={styles.totalTimeItem}>{item.totalTime}</Text>
                </View>
                <View style={styles.statItem}>
                    <Image
                        source={require('../images/icon_kcal_small.png')}
                        style={styles.statIcon}
                    />
                    <Text style={styles.totalKcalItem}>{item.totalKcal}</Text>
                </View>
            </View>
        </View>
        <View style={styles.progressContainer}>
            <Text style={styles.percentText}>{item.exercises} - {item.percent}%</Text>
            <Image
                source={item.percent >= 50
                    ? require('../images/icon_completed.png')
                    : require('../images/icon_unfinished.png')
                }
                style={styles.statusIcon}
            />
        </View>
    </TouchableOpacity>
)

const HistoryScreen = () => {
    const totals = useMemo(() => ({
        weekRange: getCurrentWeekRange(),
        exerciseCount: exerciseData.length,
        totalTime: calculateTotalTime(exerciseData),
        totalKcal: calculateTotalKcal(exerciseData)
    }), [exerciseData])

    const today = new Date().toISOString().split('T')[0];
    const [selectedDate, setSelectedDate] = useState(null);
    const [currentMonth, setCurrentMonth] = useState(today);


    return (
        <View style={styles.container}>
            <FlatList
                data={exerciseData}
                keyExtractor={(item) => item.id}
                renderItem={renderExerciseItem}
                ListHeaderComponent={
                    <>
                        <View style={styles.header}>
                            <Text style={styles.headerText}>Lịch sử</Text>
                        </View>
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
                        <View style={styles.summaryContainer}>
                            <View style={styles.summaryHeader}>
                                <Text style={styles.summaryTitle}>Weekly Summary</Text>
                            </View>
                            <View style={styles.weeklyInfor}>
                                <View style={styles.dateRangeContainer}>
                                    <Text style={styles.dateText}>{totals.weekRange}</Text>
                                    <Text style={styles.exerciseCountText}>{totals.exerciseCount} bài tập</Text>
                                </View>
                                <View style={styles.statsContainer}>
                                    <View style={styles.statItem}>
                                        <Image source={require('../images/icon_time_small.png')} style={styles.statIcon} />
                                        <Text style={styles.statText}>{totals.totalTime}</Text>
                                    </View>
                                    <View style={styles.statItem}>
                                        <Image source={require('../images/icon_kcal_small.png')} style={styles.statIcon} />
                                        <Text style={styles.statText}>{totals.totalKcal} kcal</Text>
                                    </View>
                                </View>
                            </View>
                        </View>
                    </>
                }
                contentContainerStyle={{ paddingBottom: 20 }}
            />
        </View>
    )
}

export default HistoryScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    header: {
        padding: 16,
        backgroundColor: 'white',
        marginTop: 40
    },
    headerText: {
        fontSize: 24,
        fontWeight: 'bold',
    },
    summaryContainer: {
        padding: 16,
        marginTop: 16,
    },
    summaryHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 16,
    },
    summaryTitle: {
        fontSize: 18,
        fontWeight: '600',
    },
    weeklyInfor: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    dateRangeContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        alignItems: 'flex-start',
        marginBottom: 12,
    },
    dateText: {
        fontWeight: 'bold',
        fontSize: 16,
        color: '#333333',
        fontWeight: '600',

    },
    exerciseCountText: {
        fontSize: 14,
        color: '#666666',
        fontWeight: '600',

    },
    statsContainer: {
        flexDirection: 'column',
        justifyContent: 'space-around',
        paddingVertical: 12,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
    },
    statItem: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statText: {
        marginLeft: 8,
        fontSize: 16,
        color: '#333333',
        fontWeight: '600',

    },
    kcalUnit: {
        fontSize: 12,
        color: '#666666',
        marginLeft: 4,
        fontWeight: '600',

    },
    exerciseItem: {
        flexDirection: 'row',
        padding: 16,
        borderBottomWidth: 1,
        borderBottomColor: '#EEEEEE',
        alignItems: 'center',
    },
    exerciseImage: {
        width: 60,
        height: 60,
        borderRadius: 8,
        marginRight: 12,
    },
    exerciseInfo: {
        flex: 1,
    },
    exerciseText: {
        fontSize: 16,
        fontWeight: '500',
        marginBottom: 4,
        fontWeight: '600',

    },
    muscleText: {
        fontSize: 14,
        color: '#666666',
        marginBottom: 8,
        fontWeight: '600',

    },
    statsRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    statIcon: {
        width: 16,
        height: 16,
        marginRight: 4,
    },
    totalTimeItem: {
        fontSize: 14,
        color: '#333333',
        marginRight: 16,
        fontWeight: '600',

    },
    totalKcalItem: {
        fontSize: 14,
        color: '#333333',
        fontWeight: '600',

    },
    progressContainer: {
        height: 33,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        alignItems: 'flex-end',
        gap: 4,
    },
    percentText: {
        fontSize: 14,
        color: '#333333',
        marginBottom: 4,
        fontWeight: '600',

    },
    statusIcon: {
        width: 24,
        height: 24,
    },
});