import React, { useState } from 'react';
import { SafeAreaView, View, Text, Image, Animated, StyleSheet, TouchableOpacity, ScrollView, Dimensions } from 'react-native';
import FastImage from 'react-native-fast-image';

const screenHeight = Dimensions.get('window').height;

const GoalPick = ({ navigation }) => {
    const [selected, setSelected] = useState(null);


    const Scale = new Animated.Value(1);

    const handleSelectImage = (image) => {
        if (selected === image) return;

        Animated.spring(Scale, {
            toValue: image === 'Muscle' ? 1 : 1,
            friction: 5,
            tension: 100,
            useNativeDriver: true
        }).start();

        Animated.spring(Scale, {
            toValue: image === 'Weight' ? 1 : 1,
            friction: 5,
            tension: 100,
            useNativeDriver: true
        }).start();

        Animated.spring(Scale, {
            toValue: image === 'Fit' ? 1 : 1,
            friction: 5,
            tension: 100,
            useNativeDriver: true
        }).start();

        setSelected(image);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.Header}>
                <Text style={styles.titleGender}>What's your main goal?</Text>
            </View>
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.annouce}>
                    <FastImage
                        style={styles.gif}
                        source={{
                            uri: 'https://i.gifer.com/XOsX.gif',
                            priority: FastImage.resizeMode.normal
                        }}
                        resizeMode={FastImage.resizeMode.contain}
                    />
                    <Text style={styles.txtAnnouce}>Your goal shapes your workout. We'all tailor the best mix of cardio and strength training for you!</Text>
                </View>
                <View style={styles.row}>
                    <TouchableOpacity activeOpacity={1} onPress={() => handleSelectImage('Weight')}>
                        <Animated.View style={[
                            styles.imageContainer,
                            {
                                transform: [{ scale: Scale }],
                                borderColor: selected === 'Weight' ? 'blue' : 'white',
                                backgroundColor: selected === 'Weight' ? '#d5e8ff' : 'white',
                            }
                        ]}>

                            <Text style={[styles.title,
                            {
                                color: selected === 'Weight' ? 'blue' : 'black',
                            }
                            ]}>Lose Weight</Text>
                            <Animated.Image
                                source={{ uri: 'https://png.pngtree.com/png-vector/20220721/ourmid/pngtree-before-and-after-weight-loss-png-image_5910780.png' }}
                                style={styles.image}

                            />

                        </Animated.View>
                    </TouchableOpacity>

                    <TouchableOpacity activeOpacity={1} onPress={() => handleSelectImage('Muscle')}>
                        <Animated.View style={[
                            styles.imageContainer,
                            {
                                transform: [{ scale: Scale }],
                                borderColor: selected === 'Muscle' ? 'blue' : 'white',
                                backgroundColor: selected === 'Muscle' ? '#d5e8ff' : 'white',
                            }
                        ]}>

                            <Text style={[styles.title,
                            {
                                color: selected === 'Muscle' ? 'blue' : 'black',
                            }
                            ]}>Build Muscle</Text>
                            <Animated.Image
                                source={{ uri: 'https://png.pngtree.com/png-clipart/20230807/original/pngtree-cartoon-muscular-brutal-man-with-barbell-vector-building-muscle-weights-vector-picture-image_10116146.png' }}
                                style={styles.image}

                            />

                        </Animated.View>
                    </TouchableOpacity>
                    <TouchableOpacity activeOpacity={1} onPress={() => handleSelectImage('Fit')}>
                        <Animated.View style={[
                            styles.imageContainer,
                            {
                                transform: [{ scale: Scale }],
                                borderColor: selected === 'Fit' ? 'blue' : 'white',
                                backgroundColor: selected === 'Fit' ? '#d5e8ff' : 'white',
                            }
                        ]}>

                            <Text style={[styles.title,
                            {
                                color: selected === 'Fit' ? 'blue' : 'black',
                            }
                            ]}>Keep Fit</Text>
                            <Animated.Image
                                source={{ uri: 'https://png.pngtree.com/png-vector/20220630/ourmid/pngtree-woman-keeping-fit-vector-png-image_5576363.png' }}
                                style={styles.image}
                            />

                        </Animated.View>
                    </TouchableOpacity>
                </View>

                <View style={{ height: 100 }}>

                </View>
            </ScrollView>
            <TouchableOpacity onPress={() => navigation.navigate('BMI')} activeOpacity={0.9} style={styles.buttonNext}>
                <Text style={styles.txtNext}> Next </Text>
            </TouchableOpacity>
        </SafeAreaView>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#f6f6f8',
    },
    Header: {
        width: '100%',
        alignSelf: 'flex-start',
    },
    annouce: {
        flexDirection: 'row',
        width: 350,
        backgroundColor: '#e0eeff',
        alignSelf: 'center',
        justifyContent: 'center',
        height: 80,
        borderRadius: 20,
        marginTop: 40,
        marginBottom: 40
    },
    gif: {
        width: 50,
        height: 50,
        marginRight: 10,
        alignSelf: 'center'
    },
    txtAnnouce: {
        fontWeight: 400,
        width: 280,
        fontSize: 16,
        letterSpacing: 0.5,
        alignSelf: 'center'
    },
    titleGender: {
        fontWeight: 'bold',
        fontSize: 30,
        letterSpacing: 1,
        marginTop: 70,
        marginLeft: 20,
        width: '50%'
    },
    row: {
        justifyContent: 'center',
        flex: 2.5,
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        elevation: 2,
        borderWidth: 2,
        marginBottom: 40,
        flexDirection: 'row',
        height: 150,
        overflow: 'hidden'
    },
    image: {
        width: 150,
        height: 150,
    },
    title: {
        fontSize: 20,
        fontWeight: '500',
        color: '#333',
        width: 100,
        marginRight: 50

    },
    title2: {
        fontSize: 17,
        paddingHorizontal: 25,
        paddingVertical: 5,
    },
    titleWrap2: {
        backgroundColor: 'white',
        borderRadius: 30,
        elevation: 2,
    },
    buttonNext: {
        width: 350,
        height: 60,
        borderRadius: 50,
        backgroundColor: 'black',
        justifyContent: 'center',
        alignItems: 'center',
        alignSelf: 'center',
        position: 'absolute',
        top: screenHeight * 0.9
    },
    txtNext: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 20
    }

});

export default GoalPick;
