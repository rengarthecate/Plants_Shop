import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ExerciseDetailScreen = ({ navigation }) => {
    const exercise = {
        title: "Beginner Abs",
        duration: "20 MIN",
        exercisesCount: "16 Exercises",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/man-doing-abs-exercise-illustration-download-in-svg-png-gif-file-formats--workout-plank-position-sport-healthy-lifestyle-pack-people-illustrations-5021815.png",
        description: "This beginner abs workout is designed to help you build core strength and tone your abdominal muscles. It includes a variety of exercises that target different parts of your core.",
        instructions: [
            "Start with a 5-minute warm-up to get your blood flowing.",
            "Perform each exercise for 30 seconds, followed by a 10-second rest.",
            "Repeat the circuit 3 times.",
            "Finish with a 5-minute cool-down and stretching."
        ]
    };

    return (
        <LinearGradient colors={['#4caf50', '#03a9f4']} style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
                <Text style={styles.exerciseTitle}>{exercise.title}</Text>
                <View style={styles.durationContainer}>
                    <Text style={styles.durationText}>{exercise.duration}</Text>
                    <Text style={styles.exercisesCountText}>{exercise.exercisesCount}</Text>
                </View>
                <Text style={styles.descriptionText}>{exercise.description}</Text>
                <Text style={styles.instructionsTitle}>Instructions:</Text>
                {exercise.instructions.map((instruction, index) => (
                    <View key={index} style={styles.instructionItem}>
                        <Text style={styles.instructionText}>{`${index + 1}. ${instruction}`}</Text>
                    </View>
                ))}
                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('ExerciseStart')}>
                    <Text style={styles.startButtonText}>Start Workout</Text>
                </TouchableOpacity>
            </ScrollView>
        </LinearGradient>
    );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    exerciseImage: {
        width: Width,
        height: Height * 0.4,
        resizeMode: 'contain',
    },
    exerciseTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
    },
    durationContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    durationText: {
        fontSize: 16,
        color: 'white',
        marginRight: 10,
    },
    exercisesCountText: {
        fontSize: 16,
        color: 'white',
    },
    descriptionText: {
        fontSize: 16,
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        lineHeight: 24,
    },
    instructionsTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: 'white',
        marginTop: 20,
        marginLeft: 20,
    },
    instructionItem: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    instructionText: {
        fontSize: 16,
        color: 'white',
        lineHeight: 24,
    },
    startButton: {
        backgroundColor: 'white',
        width: Width * 0.8,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        alignSelf: 'center',
        elevation: 5,
    },
    startButtonText: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#03a9f4',
    },
});