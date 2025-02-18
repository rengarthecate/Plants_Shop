import { StyleSheet, Text, View, Image, Dimensions, TouchableOpacity, ScrollView } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import Icon from 'react-native-vector-icons/Ionicons';

import React from 'react';

const Width = Dimensions.get('screen').width;
const Height = Dimensions.get('screen').height;

const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
const today = new Date().getDay();

const levels = [
    { title: "Newbie", color: ["green", "#4CAF50"] },
    { title: "Medium", color: ["orangered", "#FFC107"] },
    { title: "Advanced", color: ["#D32F2F", "hotpink"] }
];

const HomeScreen = ({navigation}) => {
    return (
        <View style={styles.container}>
            
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                {/* Header */}
                <View style={styles.Header}>
                    <Text style={styles.title}>Tập luyện tại nhà</Text>
                    <View style={styles.row}>
                        <Image
                            style={styles.icon}
                            source={{ uri: 'https://png.pngtree.com/png-clipart/20230103/original/pngtree-3d-fire-icon-simple-png-image_8863690.png' }}
                        />
                        <View style={styles.proBtn}>
                            <Image
                                style={styles.crownIcon}
                                source={{ uri: 'https://static.vecteezy.com/system/resources/previews/009/391/074/non_2x/crown-icon-transparent-free-png.png' }}
                            />
                            <Text style={styles.proTxt}>PRO</Text>
                        </View>
                    </View>
                </View>

                {/* Mục tiêu hàng tuần */}
                <View style={styles.targetSection} >
                <Text style={styles.targetTitle}>Mục tiêu hàng tuần</Text>
                    <View style={styles.weekDays}>
                        {days.map((day, index) => (
                            <View key={index} style={[styles.dayBox, today === index && styles.todayHighlight]}>
                                <Text style={[styles.dayText, today === index && styles.todayText]}>{day}</Text>
                            </View>
                        ))}
                    </View>
                </View>

                {/* Thử thách */}
                <View style={styles.challengeSection}>
                    <Text style={styles.title2}>Thử thách 7x4</Text>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        <View style={styles.row2}>
                            {[1, 2].map((_, index) => (
                                <View key={index} style={styles.challengeBox}>
                                        <Image style={styles.challengeImg} source={{ uri: 'https://static.vecteezy.com/system/resources/previews/036/271/852/non_2x/ai-generated-a-man-is-doing-bicep-curls-with-a-dumbbell-cartoon-style-on-a-transparent-background-free-png.png' }} />
                                        <Text style={styles.challengeTitle}>Thử thách toàn thân 7x4</Text>
                                        <Text style={styles.challengeTxt}>Start your body sculpting journey to target all muscle groups and build your dream body in 4 weeks!</Text>
                                        <TouchableOpacity style={styles.beginBtn}>
                                            <Text style={styles.beginBtnText}>Begin</Text>
                                        </TouchableOpacity>
                                </View>
                            ))}
                        </View>
                    </ScrollView>
                </View>

                <View style={styles.titleSection}>
                    {levels.map((level, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.9}>
                            <View
                                style={styles.titleBox}
                            >
                                <Text style={styles.title3}>{level.title}</Text>
                            </View>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.column}>
                    {[1, 2, 3, 4].map((_, index) => (
                        <TouchableOpacity key={index} activeOpacity={0.9} onPress={() => navigation.navigate('ExerciseDetail')}>
                            <LinearGradient style={styles.exerciseBox} colors={['lightblue', 'white']}>
                                <Image style={[styles.challengeImg, {top: 20, right: 20, width: 150, height: 60}]} source={{ uri: 'https://cdni.iconscout.com/illustration/premium/thumb/man-doing-abs-exercise-illustration-download-in-svg-png-gif-file-formats--workout-plank-position-sport-healthy-lifestyle-pack-people-illustrations-5021815.png' }} />
                                <Text style={styles.challengeTitle}>Beginner Abs</Text>
                                <Text style={styles.challengeTxt}>20 MIN - 16 Exercises</Text>
                            </LinearGradient>
                        </TouchableOpacity>
                    ))}
                </View>
            </ScrollView>
        </View>
    );
};

export default HomeScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    backBtn: {
        marginTop: Height * 0.07,
        marginLeft: Width * 0.05,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20 // Thêm padding dưới để tránh bị che khuất nội dung cuối cùng
    },
    Header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: Height * 0.02,
        marginBottom: 20,
        marginTop: Height * 0.07
    },
    icon: {
        height: 50,
        width: 50,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    },
    crownIcon: {
        height: 25,
        width: 25
    },
    proBtn: {
        flexDirection: 'row',
        backgroundColor: 'yellow',
        height: 25,
        width: 70,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        elevation: 7,
        borderWidth: 0.2,
        marginRight: 20
    },
    proTxt: {
        fontWeight: '600'
    },
    title: {
        fontWeight: '600',
        fontSize: 25,
        alignSelf: 'center',
        color: 'black',
        marginLeft: 20
    },
    targetSection: {
        width: Width - 40,
        borderRadius: 15,
        height: 120,
        alignSelf: 'center',
        padding: 15,
        backgroundColor: 'white',
        elevation: 5,
    },
    targetTitle: {
        fontWeight: '600',
        fontSize: 17,
        marginBottom: 10,
        color: 'black',

    },
    weekDays: {
        flexDirection: 'row',
        justifyContent: 'space-around'
    },
    dayBox: {
        width: 40,
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
    },
    todayHighlight: {
        borderWidth: 3,
        borderColor: 'red',
        backgroundColor: 'red',
        elevation: 5
    },
    dayText: {
        fontWeight: '700',
        color: 'black'
    },
    todayText: {
        color: 'white'
    },
    challengeBox: {
        width: Width * 0.7,
        height: 230,
        marginLeft: 20,
        marginTop: 30,
        marginRight: 10,
        overflow: 'hidden',
        borderRadius: 20,
        backgroundColor: 'lightblue',
        elevation: 5,
        marginBottom: 20
    },
    challengeTitle: {
        color: 'black',
        fontWeight: '700',
        width: '40%',
        fontSize: 20,
        marginLeft: 20,
        marginTop: 20,
        marginBottom: 10,
        lineHeight: 20,
        letterSpacing: 1,

    },
    challengeTxt: {
        fontWeight: '700',
        color: 'black',
        width: '54%',
        marginLeft: 20,
        fontSize: 12,
        lineHeight: 17,

    },
    challengeImg: {
        position: 'absolute',
        width: 150,
        height: 150,
        right: -20,
        top: 20

    },
    challengeSection: {
        flexDirection: 'column',
    },
    row2: {
        flexDirection: 'row',
    },
    title2: {
        fontWeight: '600',
        fontSize: 17,
        marginLeft: 20,
        color: 'black',
        marginTop: 20
    },
    beginBtn: {
        backgroundColor: 'white',
        width: 250,
        height: 30,
        alignSelf: 'center',
        justifyContent: 'center',
        borderRadius: 20,
        marginTop: 20,
        elevation: 5,
    },
    beginBtnText: {
        color: 'blue',
        alignSelf: 'center',
        fontWeight: '700',
        letterSpacing: 1
    },
    titleBox: {
        width: 100,
        height: 40,
        borderRadius: 10,
        elevation: 5,
        borderWidth: 0.2,
        marginTop: 30,
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    title3: {
        color: 'black',
        fontSize: 15,
        alignSelf: 'center',
        fontWeight: '700',
        letterSpacing: 1
    },
    titleSection: {
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    exerciseBox: {
        width: Width - 40,
        height: 100,
        borderRadius: 10,
        marginLeft: 20,
        elevation: 5,
        borderWidth: 0.2,
        marginTop: 30,
        marginRight: 10,
        overflow: 'hidden'
    },
    column: {
        flexDirection: 'column'
    }
});