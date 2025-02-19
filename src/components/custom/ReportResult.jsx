import { StyleSheet, Text, View, Image, TouchableOpacity, Dimensions } from 'react-native';
import React from 'react';

const { width, height } = Dimensions.get('window');

const ReportResult = () => {
    return (
        <View style={styles.achievement}>
            <View style={styles.achievementItem}>
                <Image
                    style={styles.achievementImg}
                    source={require('../images/icon_workout.png')}
                />
                <Text style={styles.achievementTxt1}>1</Text>
                <Text style={styles.achievementTxt2}>Workout</Text>
            </View>
            <View style={styles.achievementItem}>
                <Image
                    style={styles.achievementImg}
                    source={require('../images/icon_kcal.png')}
                />
                <Text style={styles.achievementTxt1}>345</Text>
                <Text style={styles.achievementTxt2}>Kcal</Text>
            </View>
            <View style={styles.achievementItem}>
                <Image
                    style={[styles.achievementImg, { width: width * 0.07, height: height * 0.035 }]}
                    source={require('../images/icon_minutes.png')}
                />
                <Text style={styles.achievementTxt1}>45</Text>
                <Text style={styles.achievementTxt2}>Minutes</Text>
            </View>
        </View>
    )
}

export default ReportResult

const styles = StyleSheet.create({
    achievement: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#fff',
        padding: height * 0.02,
        marginVertical: height * 0.01,
        borderRadius: width * 0.02,
    },
    achievementItem: {
        alignItems: 'center',
    },
    achievementImg: {
        width: width * 0.05,
        height: height * 0.032,
    },
    achievementTxt1: {
        fontSize: width * 0.06,
        fontWeight: 'bold',
        marginTop: height * 0.01,
    },
    achievementTxt2: {
        fontSize: width * 0.03,
        fontWeight: '300',
        color: '#858585',
        marginTop: height * 0.01,
        fontWeight: '600'
    },
})