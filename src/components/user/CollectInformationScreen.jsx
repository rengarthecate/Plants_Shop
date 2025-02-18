import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import FastImage from 'react-native-fast-image';

// Import các màn hình con
import Gender from '../custom/PickGender';
import Goal from '../custom/Goal';
import Level from '../custom/LevelScreen';
import BMI from '../custom/BMI';

const { width, height } = Dimensions.get('window');

const screens = [Gender, Goal, Level, BMI]; // Danh sách các màn hình con

const CollectInformationScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const title = () => {
        switch (currentIndex) {
            case 0:
                return 'What is your Gender?';
            case 1:
                return 'What is your Goal?';
            case 2:
                return 'Have you ever worked out?';
            case 3:
                return 'Your current body condition';
            default:
                return '';
        }
    };

    const handleNext = () => {
        if (currentIndex < screens.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            navigation.replace('Home'); 
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            navigation.navigate('PreviousScreen'); // Thay 'PreviousScreen' bằng tên màn hình trước đó
        }
    };

    const CurrentScreen = screens[currentIndex]; // Lấy component tương ứng với currentIndex

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                {currentIndex > 0 ? (
                    <TouchableOpacity onPress={handleBack} style={styles.btnBack}>
                        <Image source={require('../images/Icon_back.png')} />
                    </TouchableOpacity>
                ) : (
                    <View style={styles.btnBack} /> // View rỗng để giữ layout đồng đều
                )}
                <View style={styles.progress}>
                    <View style={styles.progressInner}>
                        {Array(screens.length).fill().map((_, index) => (
                            <View key={index} style={[
                                styles.progressItem,
                                index <= currentIndex ? styles.progressActive : null
                            ]} />
                        ))}
                    </View>
                </View>
            </View>

            {/* Title */}
            <View style={styles.title}>
                <Text style={styles.titelText}>{title()}</Text>
            </View>

            {
                currentIndex === 3 ? (
                    <View />
                ) : (
                    <View style={styles.annouce}>
                        <FastImage
                            style={styles.gif}
                            source={{
                                uri: 'https://i.gifer.com/XOsX.gif',
                                priority: FastImage.priority.normal
                            }}
                            resizeMode={FastImage.resizeMode.contain}
                        />
                        <Text style={styles.txtAnnouce}>
                            Your goal shapes your workout. We’ll tailor the best mix of cardio and strength training for you!
                        </Text>
                    </View>
                )
            }

            {/* Body thay đổi theo currentIndex */}
            <View style={styles.body}>
                <CurrentScreen />
            </View>

            {/* Nút Next / Start */}
            <View style={styles.bottomButton}>
                <TouchableOpacity style={styles.btnNext} onPress={handleNext}>
                    <Text style={styles.btnNextText}>
                        {currentIndex === screens.length - 1 ? 'Start' : 'Next'}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
};

export default CollectInformationScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height * 0.01,
        marginTop: height * 0.03
    },
    btnBack: {
        width: 40, // Giữ layout cố định
        height: 40,
        justifyContent: 'center',
        alignItems: 'center',
    },
    progress: {
        flex: 1,
        height: height * 0.008,
        backgroundColor: '#ECECEC',
        borderRadius: height * 0.01,
        marginHorizontal: width * 0.05,
        justifyContent: 'center',
    },
    progressInner: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    progressItem: {
        flex: 1,
        height: height * 0.003,
        marginHorizontal: width * 0.005,
        backgroundColor: '#ECECEC',
        borderRadius: height * 0.01,
    },
    progressActive: {
        backgroundColor: '#5C4AFA', // Màu active cho bước hiện tại
    },
    title: {
        alignItems: 'flex-start',
        width: width * 0.83,
    },
    titelText: {
        fontSize: width * 0.1,
        fontWeight: 'bold',
        color: '#333',
    },
    annouce: {
        flexDirection: 'row',
        width: '100%',
        backgroundColor: '#e0eeff',
        alignSelf: 'center',
        justifyContent: 'center',
        height: height * 0.1,
        borderRadius: width * 0.04,
        marginVertical: height * 0.03,
    },
    gif: {
        width: '15%',
        height: '90%',
        marginRight: width * 0.025,
        alignSelf: 'center'
    },
    txtAnnouce: {
        fontWeight: '400',
        width: '70%',
        fontSize: 16,
        letterSpacing: 0.5,
        alignSelf: 'center'
    },
    body: {
        flexGrow: 1, // Giúp body mở rộng tối đa
        paddingBottom: height * 0.12, // Để body không bị che bởi nút Next
        justifyContent: 'center',
        alignItems: 'center',
    },
    bottomButton: {
        position: 'absolute',
        bottom: height * 0.05,
        left: 0,
        right: 0,
        alignItems: 'center',
    },
    btnNext: {
        backgroundColor: '#111',
        paddingVertical: height * 0.02,
        width: '90%',
        borderRadius: width * 0.3,
        alignItems: 'center',
    },
    btnNextText: {
        fontSize: width * 0.05,
        fontWeight: 'bold',
        color: '#fff',
    },
});