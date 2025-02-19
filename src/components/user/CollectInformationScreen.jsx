import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Dimensions, Image } from 'react-native';
import FastImage from 'react-native-fast-image';
import Onboarding from './Onboarding';

import Gender from '../custom/PickGender';
import Goal from '../custom/Goal';
import Level from '../custom/LevelScreen';
import BMICalculator from './BMI';

const { width, height } = Dimensions.get('window');

const screens = [Gender, Goal, Level, BMICalculator];

const CollectInformationScreen = ({ navigation }) => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const title = () => {
        switch (currentIndex) {
            case 0: return 'What is your Gender?';
            case 1: return 'What is your Goal?';
            case 2: return 'Have you ever worked out?';
            case 3: return 'What is your \nBMI?';
            default: return '';
        }
    };

    const handleNext = () => {
        if (currentIndex < screens.length - 1) {
            setCurrentIndex((prev) => prev + 1);
        } else {
            navigation.replace('HomeTabs');
        }
    };

    const handleBack = () => {
        if (currentIndex > 0) {
            setCurrentIndex((prev) => prev - 1);
        } else {
            navigation.navigate('PreviousScreen');
        }
    };

    const CurrentScreen = screens[currentIndex];

    return (
        <View style={styles.container}>
            <View style={styles.title}>
                <Text style={styles.titelText}>{title()}</Text>
            </View>

            {currentIndex !== 3 && (
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
            )}

            <View style={styles.body}>
                <CurrentScreen />
            </View>

            <View style={styles.onboardingWrap}>
                <Onboarding
                    total={screens.length }
                    selectedIndex={currentIndex}
                    onIndexChange={(index) => {
                        if (index === screens.length ) {
                            navigation.replace('HomeTabs'); 
                        } else {
                            setCurrentIndex(index);
                        }
                    }}
                />
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
        width: 40,
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
        backgroundColor: '#5C4AFA',
    },
    title: {
        alignItems: 'flex-start',
        width: width * 0.83,
        marginTop: height * 0.07
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
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    onboardingWrap: {
        position: 'absolute',
        width: '100%',
        alignSelf: 'center',
        bottom: 30
    }
});
