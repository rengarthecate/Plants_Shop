import React from 'react';
import { StyleSheet, Text, View, Image, ScrollView, Dimensions, TouchableOpacity } from 'react-native';

const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;

const ExerciseDetailScreen = ({ navigation }) => {
    const exercise = {
        title: "Gập bụng",
        englishTitle: "Crunches",
        duration: "20 PHÚT",
        exercisesCount: "15 reps X 3 sets",
        image: "https://cdni.iconscout.com/illustration/premium/thumb/man-doing-abs-exercise-illustration-download-in-svg-png-gif-file-formats--workout-plank-position-sport-healthy-lifestyle-pack-people-illustrations-5021815.png",
        overview: "Gập bụng là bài tập cơ bản nhằm tác động chính vào cơ bụng. Bài tập này giúp tăng cường sức mạnh cơ bụng và cải thiện sự ổn định của cơ thể.",
        description: "Bài tập gập bụng dành cho người mới bắt đầu, được thiết kế để giúp bạn xây dựng sức mạnh cơ bụng và làm săn chắc các nhóm cơ vùng bụng. Bài tập bao gồm nhiều động tác nhắm vào các phần khác nhau của cơ bụng.",
        instructions: [
            "Bắt đầu với 5 phút khởi động để làm nóng cơ thể.",
            "Thực hiện mỗi động tác trong 30 giây, sau đó nghỉ 10 giây.",
            "Lặp lại chuỗi động tác 3 lần.",
            "Kết thúc với 5 phút thả lỏng và giãn cơ."
        ],
        warnings: [
            "Tránh gây căng cổ bằng cách giữ cằm hơi nâng lên.",
            "Đảm bảo lưng dưới luôn áp sát sàn để tránh chấn thương.",
            "Nếu cảm thấy đau, dừng lại ngay và tham khảo ý kiến chuyên gia."
        ],
        muscleGroups: [
            "Cơ bụng thẳng (Rectus Abdominis)",
            "Cơ liên sườn (Obliques)",
            "Cơ bụng ngang (Transverse Abdominis)"
        ]
    };

    return (
        <View style={styles.container}>
            <ScrollView contentContainerStyle={styles.scrollContainer}>
                <Image source={{ uri: exercise.image }} style={styles.exerciseImage} />
                <Text style={styles.exerciseTitle}>{exercise.title}</Text>
                <View style={styles.durationContainer}>
                    <Text style={styles.durationText}>{exercise.duration}</Text>
                    <Text style={styles.exercisesCountText}>{exercise.exercisesCount}</Text>
                </View>
                <Text style={styles.overviewText}>{exercise.overview}</Text>
                <Text style={styles.descriptionText}>{exercise.description}</Text>

                <Text style={styles.sectionTitle}>Hướng dẫn :</Text>
                {exercise.instructions.map((instruction, index) => (
                    <View key={index} style={styles.instructionItem}>
                        <Text style={styles.instructionText}>{`${index + 1}. ${instruction}`}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Cảnh báo :</Text>
                {exercise.warnings.map((warning, index) => (
                    <View key={index} style={styles.warningItem}>
                        <Text style={styles.warningText}>{warning}</Text>
                    </View>
                ))}

                <Text style={styles.sectionTitle}>Nhóm cơ tác động :</Text>
                {exercise.muscleGroups.map((muscle, index) => (
                    <View key={index} style={styles.muscleGroupItem}>
                        <Text style={styles.muscleGroupText}>{`• ${muscle}`}</Text>
                    </View>
                ))}

                <TouchableOpacity style={styles.startButton} onPress={() => navigation.navigate('ExerciseStart')}>
                    <Text style={styles.startButtonText}>Chuyển bài tập</Text>
                </TouchableOpacity>
            </ScrollView>
        </View>
    );
};

export default ExerciseDetailScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    scrollContainer: {
        flexGrow: 1,
        paddingBottom: 20,
    },
    exerciseImage: {
        width: Width,
        height: Height * 0.4,
        resizeMode: 'contain',
        borderBottomColor: 'blue',
        borderWidth: 1
    },
    exerciseTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        marginTop: 20,
        marginLeft: 20,
    },
    englishTitle: {
        fontSize: 18,
        color: '#666',
        marginLeft: 20,
        marginTop: 5,
        fontWeight: '600'

    },
    durationContainer: {
        flexDirection: 'row',
        marginTop: 10,
        marginLeft: 20,
    },
    durationText: {
        fontSize: 16,
        marginRight: 10,
        fontWeight: '600',

    },
    exercisesCountText: {
        fontSize: 16,
        fontWeight: '600'

    },
    overviewText: {
        fontSize: 16,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        lineHeight: 24,
        fontWeight: '600'
    },
    descriptionText: {
        fontSize: 16,
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        lineHeight: 24,
        fontWeight: '600'
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
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
        lineHeight: 24,
        fontWeight: '600'
    },
    warningItem: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,

    },
    warningText: {
        fontSize: 16,
        lineHeight: 24,
        color: '#ff4444',
        fontWeight: 'bold'

    },
    muscleGroupItem: {
        marginTop: 10,
        marginLeft: 20,
        marginRight: 20,
    },
    muscleGroupText: {
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '600'

    },
    startButton: {
        backgroundColor: '#03a9f4',
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
        color: 'white',
    },
});