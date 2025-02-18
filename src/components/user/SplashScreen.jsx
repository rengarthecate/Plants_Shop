import React, { useEffect, useRef } from 'react';
import { View, Text, StyleSheet, Dimensions, Animated, Easing } from 'react-native';

const { width, height } = Dimensions.get('window');

const SplashScreen = ({ navigation }) => {
    const translateAnim = useRef(new Animated.Value(0)).current;

    useEffect(() => {
        Animated.loop(
            Animated.sequence([
                Animated.timing(translateAnim, {
                    toValue: 20,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
                Animated.timing(translateAnim, {
                    toValue: 0,
                    duration: 500,
                    easing: Easing.linear,
                    useNativeDriver: true,
                }),
            ])
        ).start();
    
        const timer = setTimeout(() => {
            navigation.replace('State'); 
        }, 3000);
    
        return () => clearTimeout(timer);
    }, []);    

    const zIndexAnim = translateAnim.interpolate({
        inputRange: [0, 20],
        outputRange: [0, 1], 
    });

    return (
        <View style={styles.container}>
            <View style={{ flexDirection: 'column' }}>
                <View style={styles.view1}>
                    <Text style={[styles.text, { fontSize: 42, fontWeight: '900' }]}>GYMSYNC</Text>
                    <Text style={[styles.text, { fontSize: 24, fontWeight: '500', marginTop: -5 }]}>W O R K O U T</Text>
                </View>
                <View style={styles.view2}>
                    <View style={styles.txtView}>
                        <Text style={[styles.text1, { color: '#cd3737' }]}>LEAP</Text>
                    </View>
                    <Text style={[styles.text1, { color: '#ffffff' }]}>FITNESS</Text>
                </View>
            </View>

            <View style={styles.loadingContainer}>
                <View style={styles.spinner}>
                    <Animated.View
                        style={[
                            styles.dot1,
                            { transform: [{ translateX: translateAnim }], zIndex: zIndexAnim }
                        ]}
                    />
                    <Animated.View
                        style={[
                            styles.dot2,
                            {
                                transform: [
                                    { translateX: translateAnim.interpolate({ inputRange: [0, 20], outputRange: [20, 0] }) }
                                ],
                                zIndex: zIndexAnim.interpolate({ inputRange: [0, 1], outputRange: [1, 0] })
                            }
                        ]}
                    />
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ED3737',
        justifyContent: 'center',
        alignItems: 'center',
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
    },
    view1: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: height * 0.05,
    },
    text: {
        color: 'white',
    },
    view2: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 4,
    },
    txtView: {
        backgroundColor: '#ffffff',
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.003,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: width * 0.2,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 4,
    },
    text1: {
        fontSize: 18,
        fontWeight: '600',
    },
    loadingContainer: {
        position: 'absolute',
        bottom: height * 0.1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    spinner: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        width: 60, // Giới hạn khoảng cách di chuyển
    },
    dot1: {
        width: 15,
        height: 15,
        backgroundColor: '#e2e2e2',
        borderRadius: 15,
        position: 'absolute',
    },
    dot2: {
        width: 15,
        height: 15,
        backgroundColor: '#d00a0a',
        borderRadius: 15,
        position: 'absolute',
    },
});

export default SplashScreen;
