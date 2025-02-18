import { StyleSheet, Text, TouchableOpacity, View, Image, Dimensions, FlatList, Animated, Easing } from 'react-native';
import React, { useState, useEffect, useRef } from 'react';
import FastImage from 'react-native-fast-image';

const { width, height } = Dimensions.get('window');

const LevelScreen = () => {
    //use state
    const [selectedLevel, setSelectedLevel] = useState(null);
    const [showSubOptions, setShowSubOptions] = useState(false);
    const [selectedSubOption, setSelectedSubOption] = useState(null);
    const [shouldShowContent, setShouldShowContent] = useState(false);

    //Animation
    const animatedHeight = useRef(new Animated.Value(0)).current;

    //data mẫu
    const levels = [
        { id: '1', text: 'Chưa từng', image: require('../images/level_one.png') },
        { id: '2', text: 'Đã từng', image: require('../images/level_two.png') },
        { id: '3', text: 'Đang tập', image: require('../images/level_three.png') },
    ];

    const subOptions = ['Trên dưới 1 tháng', 'Dưới 1 năm', 'Trên 1 năm'];

    useEffect(() => {
        const animateHeight = async () => {
            if (showSubOptions) {
                // Mở rộng animation trước
                await new Promise((resolve) => {
                    Animated.timing(animatedHeight, {
                        toValue: height * 0.3, 
                        duration: 300,
                        useNativeDriver: false,
                    }).start(() => resolve());
                });

                setShouldShowContent(true);
            } else {
                // Ẩn nội dung trước khi thu nhỏ
                setShouldShowContent(false);

                // Thu nhỏ animation sau
                Animated.timing(animatedHeight, {
                    toValue: 0,
                    duration: 200,
                    useNativeDriver: false,
                }).start();
            }
        };

        animateHeight();
    }, [showSubOptions]);

    const handleLevelPress = (index) => {
        if (selectedLevel === index) {
            setSelectedLevel(null);
            Animated.timing(animatedHeight, {
                toValue: 0,
                duration: 300,
                easing: Easing.out(Easing.ease),
                useNativeDriver: false,
            }).start(() => setShowSubOptions(false));
            setSelectedSubOption(null);
        } else {
            setSelectedLevel(index);
            if (index === 1) {
                setShowSubOptions(true);
                Animated.timing(animatedHeight, {
                    toValue: height * 0.3, // Điều chỉnh chiều cao phù hợp
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }).start();
            } else {
                Animated.timing(animatedHeight, {
                    toValue: 0,
                    duration: 300,
                    easing: Easing.out(Easing.ease),
                    useNativeDriver: false,
                }).start(() => setShowSubOptions(false));
                setSelectedSubOption(null);
            }
        }
    };

    const renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity
                    style={[
                        styles.levelItem,
                        selectedLevel === index && { borderColor: '#5C4AFA', borderWidth: 2 },
                        selectedLevel === index && index === 1 ? { marginBottom: 0 } : { marginBottom: height * 0.02 }
                    ]}
                    onPress={() => handleLevelPress(index)}
                >
                    <Text style={styles.levelText}>{item.text}</Text>
                    {
                        index === 1 &&
                        <View style={{ width: 'auto', height: '100%', top : '90%' }}>
                            <Image
                                source={require('../images/icon_show_more_item_level.png')}
                            />
                        </View>

                    }
                    <View style={styles.levelImg}>
                        <Image source={item.image} style={styles.image} />
                    </View>
                </TouchableOpacity>

                {index === 1 && (
                    <Animated.View
                        style={[
                            styles.subOptionsContainer,
                            { height: animatedHeight },
                            showSubOptions && { marginBottom: height * 0.02 }
                        ]}
                    >
                        {shouldShowContent && (
                            <>
                                <Text style={styles.subOptionTitle}>Bạn đã dừng tập trong bao lâu?</Text>
                                {subOptions.map((option, subIndex) => (
                                    <TouchableOpacity
                                        key={subIndex}
                                        style={[
                                            styles.subOptionItem,
                                            selectedSubOption === subIndex && {
                                                borderColor: '#5C4AFA',
                                                borderWidth: 2,
                                            },
                                        ]}
                                        onPress={() => setSelectedSubOption(subIndex)}
                                    >
                                        <Text style={styles.subOptionText}>{option}</Text>
                                    </TouchableOpacity>
                                ))}
                            </>
                        )}
                    </Animated.View>
                )}
            </View>
        );
    };

    return (
        <View style={styles.container}>
            {/* Bọc FlatList bằng View và thêm flex: 1 để chiếm hết phần còn lại */}
            <View style={{ flex: 1 }}>
                <FlatList
                    data={levels}
                    keyExtractor={(item) => item.id}
                    renderItem={renderItem}
                    showsVerticalScrollIndicator={false}
                    style={styles.list}
                    keyboardShouldPersistTaps="handled" // Cho phép bấm vào item mà không bị che bởi bàn phím
                    contentContainerStyle={{ paddingBottom: height * 0.16 }} // Tạo khoảng trống đủ lớn để lướt lên trên nút Next
                />
            </View>
        </View>
    );
};

export default LevelScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
        // backgroundColor: 'red'
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: height * 0.02,
    },
    btnBack: {
        padding: width * 0.02,
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
        backgroundColor: '#5C4AFA',
        borderRadius: height * 0.01,
    },
    title: {
        alignItems: 'flex-start',
        marginBottom: height * 0.03,
    },
    titelText: {
        fontSize: width * 0.1,
        fontWeight: 'bold',
        color: '#333',
    },
    annouce: {
        flexDirection: 'row',
        width: width * 0.85, // Giảm chiều rộng để không quá lớn
        backgroundColor: '#e0eeff',
        alignSelf: 'center',
        alignItems: 'center', // Căn giữa các thành phần theo chiều dọc
        padding: width * 0.04,
        borderRadius: width * 0.05,
    },
    gif: {
        width: width * 0.12, // Giảm kích thước ảnh GIF
        height: width * 0.12,
        marginRight: width * 0.04, // Khoảng cách giữa ảnh và text
    },
    txtAnnouce: {
        flex: 1, // Để văn bản tự co giãn mà không tràn ra ngoài
        fontWeight: '500',
        fontSize: width * 0.04,
        letterSpacing: 0.5,
        color: '#333',
    },
    list: {
        flexGrow: 1,
        paddingTop: height * 0.02,
    },
    levelItem: {
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
    levelText: {
        fontSize: width * 0.055,
        fontWeight: '500',
        color: '#333',
    },
    levelImg: {
        width: width * 0.2,
        height: width * 0.26,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: '100%',
        height: '100%',
    },
    subOptionsContainer: {
        alignSelf: 'center', // 🔹 Giúp căn giữa theo chiều ngang
        width: '85%',
        backgroundColor: '#fff',
        borderBottomLeftRadius: width * 0.03,
        borderBottomRightRadius: width * 0.03,
        borderWidth: 0.1,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        shadowRadius: 4,
        elevation: 3,
    },
    subOptionTitle: {
        fontSize: width * 0.045,
        fontWeight: '600',
        color: '#333',
        textAlign: 'center',
        marginVertical: height * 0.01,
    },
    subOptionItem: {
        paddingVertical: height * 0.015,
        paddingHorizontal: width * 0.05,
        borderRadius: width * 0.02,
        marginBottom: height * 0.01,
        margin: 10,
        elevation: 2
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
