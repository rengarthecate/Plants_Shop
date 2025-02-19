import { StyleSheet, Text, View, Pressable } from 'react-native';
import React from 'react';
import Animated, { FadeInDown, FadeInLeft, FadeOutLeft, FadeOutUp, interpolateColor, LinearTransition, useAnimatedStyle, useDerivedValue, withSpring } from 'react-native-reanimated';
import PropTypes from 'prop-types';

// useDerivedValue:
// Được sử dụng để tạo ra giá trị hoạt hình mới mỗi khi selectedIndex thay đổi.

// withSpring:
// Tạo hiệu ứng chuyển động lò xo để giá trị thay đổi một cách tự nhiên và mượt mà.

// useAnimatedStyle:
// Kết hợp các giá trị động để thay đổi giao diện của các component (màu sắc, kích thước, vị trí...).

// interpolateColor:
// Chuyển đổi giá trị giữa các màu sắc dựa trên giá trị của animation.

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);
const layoutTransition = LinearTransition.springify().damping(80).stiffness(200);
const dotContainer = 24;
const dotSize = 8;

// Nút bấm hoạt hình hóa với hiệu ứng vào và ra (FadeInLeft, FadeOutLeft) khi hiển thị hoặc ẩn.
const Button = ({ children, style, ...rest }) => (
    <AnimatedPressable
        style={style}
        entering={FadeInLeft.springify().damping(80).stiffness(200)}
        exiting={FadeOutLeft.springify().damping(80).stiffness(200)}
        layout={layoutTransition}
        {...rest}>
        {children}
    </AnimatedPressable>
);

const activeDot = 'white';
const inactiveDot = 'gray';

// Dot là các chấm tròn biểu thị trạng thái của các trang.
// Màu sắc của Dot thay đổi dựa trên animation.value, sử dụng interpolateColor để chuyển đổi giữa màu inactive và active.
const Dot = ({ index, animation }) => {
    // Sử dụng useAnimatedStyle để thay đổi màu sắc của Dot dựa trên giá trị animation.value.
    const styleDot = useAnimatedStyle(() => {
        return {
            backgroundColor: interpolateColor(
                animation.value,
                [index - 1, index, index + 1],
                [inactiveDot, activeDot, activeDot]
            ),
        };
    });

    return (
        <View
            style={{
                width: dotContainer,
                height: dotContainer,
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Animated.View
                style={[
                    {
                        width: dotSize,
                        height: dotSize,
                        borderRadius: dotSize / 2,
                        marginHorizontal: 4,
                    },
                    styleDot,
                ]}
            />
        </View>
    );
};

// PaginationIndicator là một thanh hoạt hình di chuyển qua các Dot.
// Kích thước và vị trí của thanh được điều khiển bởi animation.value.
const PaginationIndicator = ({ animation }) => {
    const stylePI = useAnimatedStyle(() => {
        return { 
            width: dotContainer + dotContainer * animation.value
        }
    });
    return (
        <Animated.View
            style={[
                {
                backgroundColor: 'gray',
                position: 'absolute',
                left: 0,
                top: 0,
                width: dotContainer,
                height: dotContainer,
                borderRadius: dotContainer
            }, 
            stylePI
        ]}
        />
    )
}

// Quản lý animation thông qua useDerivedValue và withSpring để tạo hiệu ứng mượt mà khi chỉ số trang (selectedIndex) thay đổi.
const Pagination = ({ selectedIndex, total }) => {
    const animation = useDerivedValue(() => {
        // useDerivedValue tạo ra một giá trị hoạt hình dựa trên selectedIndex, với hiệu ứng mượt mà sử dụng withSpring.
        // Mỗi lần selectedIndex thay đổi, giá trị animation sẽ cập nhật.
        return withSpring(selectedIndex, {
            damping: 80,
            stiffness: 200
        });
    });

    return (
        <View>
            <View style={{ flexDirection: 'row' }}>
                <PaginationIndicator animation={animation} />
                {/* Với mỗi trang, một Dot sẽ được hiển thị. */}
                {[...Array(total).keys()].map((i) => (
                    <Dot key={`dot-${i}`} index={i} animation={animation} />
                ))}
            </View>
        </View>
    );
}
                            
// Quản lý logic chính của onboarding, bao gồm số lượng trang (total), trang hiện tại (selectedIndex), và sự kiện thay đổi trang (onIndexChange).
// Hiển thị các nút "Back" và "Continue/Finish" với các hiệu ứng hoạt hình.
// Kết nối với component Pagination để hiển thị trạng thái phân trang.
const Onboarding = ({ total, selectedIndex, onIndexChange }) => {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>
                <Pagination
                    total={total}
                    selectedIndex={selectedIndex }
                />
            </Text>
            <View style={styles.buttonContainer}>
            {/* Nếu selectedIndex > 0, nút "Back" sẽ xuất hiện, cho phép quay lại trang trước. */}
                {selectedIndex > 0 && (
                    <Button
                        style={styles.backButton}
                        onPress={() => {
                            onIndexChange(selectedIndex - 1);
                        }}>
                        <Text style={styles.buttonText}>Back</Text>
                    </Button>
                )}
                <Button
                    style={styles.nextButton}
                    onPress={() =>
                        selectedIndex === total
                            ? console.log('Finish Pressed')
                            : onIndexChange(selectedIndex + 1)
                    }>
                    {/* Nút "Continue" hoặc "Finish" được hiển thị tùy thuộc vào việc đã đến trang cuối cùng hay chưa. */}
                    {/* Các hiệu ứng hoạt hình (FadeInDown, FadeOutUp) được sử dụng để tạo cảm giác mượt mà khi nút thay đổi. */}
                    {selectedIndex === total ? (
                        <Animated.Text
                            key="finish"
                            style={styles.buttonText}
                            layout={layoutTransition}
                            entering={FadeInDown.springify().damping(80).stiffness(200)}
                            exiting={FadeOutUp.springify().damping(80).stiffness(200)}
                        >
                            Finish
                        </Animated.Text>
                    ) : (
                        <Animated.Text
                            key="continue"
                            style={styles.buttonText}
                            layout={layoutTransition}
                            entering={FadeInDown.springify().damping(80).stiffness(200)}
                            exiting={FadeOutUp.springify().damping(80).stiffness(200)}
                        >
                            Continue
                        </Animated.Text>
                    )}
                </Button>
            </View>
        </View>
    );
}

Onboarding.propTypes = {
    total: PropTypes.number.isRequired,
    selectedIndex: PropTypes.number.isRequired,
    onIndexChange: PropTypes.func.isRequired,
};

Pagination.propTypes = {
    selectedIndex: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
};

Dot.propTypes = {
    index: PropTypes.number.isRequired,
    animation: PropTypes.object.isRequired,
};

export default Onboarding;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        // backgroundColor: 'red',
    },
    title: {
        marginBottom: 14,
    },
    buttonContainer: {
        flexDirection: 'row',
        width: '100%',
        paddingHorizontal: 24,
    },
    backButton: {
        marginRight: 10,
        height: 50,
        borderRadius: 50,
        width: 100,
        backgroundColor: 'plum',
        justifyContent: 'center',
        alignItems: 'center',
    },
    nextButton: {
        height: 50,
        borderRadius: 50,
        backgroundColor: 'lightblue',
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    buttonText: {
        color: 'black',
        fontSize: 16,
        fontWeight: 'bold',
    },
});
