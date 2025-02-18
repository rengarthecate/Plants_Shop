import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, FlatList, Animated } from 'react-native';
import React, { useState, useRef } from 'react';
import FastImage from 'react-native-fast-image';

const { width, height } = Dimensions.get('window');

const GoalScreen = () => {
    const [selectedGoal, setSelectedGoal] = useState(null);
    const [showSubOptions, setShowSubOptions] = useState(false);
    const animatedHeight = useRef(new Animated.Value(0)).current;

    const goals = [
        { id: '1', text: 'Giảm cân', image: require('../images/lose_weight_img.png') },
        { id: '2', text: 'Tăng cơ', image: require('../images/build_muscle_img.png') },
        { id: '3', text: 'Cải thiện sức khỏe', image: require('../images/keep_fit_img.png') },
    ];

    const handleGoalPress = (index) => {
        setSelectedGoal(selectedGoal === index ? null : index);
        setShowSubOptions(selectedGoal === index ? false : index === 1);
    };

    const renderItem = ({ item, index }) => (
        <TouchableOpacity
            style={[
                styles.goalItem,
                selectedGoal === index && { borderColor: '#5C4AFA', borderWidth: 2 }
            ]}
            onPress={() => handleGoalPress(index)}
        >
            <Text style={styles.goalText}>{item.text}</Text>
            <View style={styles.goalImg}>
                <Image source={item.image} style={styles.image} />
            </View>
        </TouchableOpacity>
    );

    return (
        <View style={styles.container}>
            <FlatList
                data={goals}
                keyExtractor={(item) => item.id}
                renderItem={renderItem}
                showsVerticalScrollIndicator={false}
                style={styles.list}
                keyboardShouldPersistTaps="handled"
                contentContainerStyle={{ paddingBottom: height * 0.16 }}
            />
        </View>
    );
};

export default GoalScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
    },
    list: {
        flexGrow: 1,
        paddingTop: height * 0.02,
    },
    goalItem: {
        width: '99%',
        height: height * 0.125,
        backgroundColor: '#FFFFFF',
        paddingVertical: height * 0.025,
        marginBottom: height * 0.02,
        borderRadius: width * 0.03,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingLeft: width * 0.05,
        elevation: 2,
        alignSelf:  'center',
    },
    goalText: {
        fontSize: width * 0.055,
        fontWeight: '500',
        color: '#333',
    },
    goalImg: {
        width: width * 0.2,
        height: width * 0.26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
});
