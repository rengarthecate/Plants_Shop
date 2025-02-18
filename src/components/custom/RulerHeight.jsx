import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

// Cấu hình thước đo
const SEGMENT_WIDTH = 2;
const SEGMENT_SPACING = 15;
const SNAP_SEGMENT = SEGMENT_WIDTH + SEGMENT_SPACING;
const MINIMUM_CM = 50;
const MAXIMUM_CM = 250;
const MINIMUM_INCH = (MINIMUM_CM / 2.54).toFixed(1);
const MAXIMUM_INCH = (MAXIMUM_CM / 2.54).toFixed(1);
const SPACER_WIDTH = width / 2;
const START_VALUE_CM = 100;
const START_VALUE_INCH = (START_VALUE_CM / 2.54).toFixed(1);

const RulerHeight = ({ unit = "cm", onChangeValue }) => {
  const [selectedValue, setSelectedValue] = useState(unit === "cm" ? START_VALUE_CM : START_VALUE_INCH);
  const scrollViewRef = useRef(null);

  const min = unit === "cm" ? MINIMUM_CM : MINIMUM_INCH;
  const max = unit === "cm" ? MAXIMUM_CM : MAXIMUM_INCH;
  const totalTicks = Math.round(max - min + 1);

  const rulerWidth = totalTicks * SNAP_SEGMENT;

  // Khi cuộn, cập nhật giá trị
  const handleScroll = (event) => {
    const scrollValue = event.nativeEvent.contentOffset.x;
    const newValue = (Math.round(scrollValue / SNAP_SEGMENT) + parseFloat(min));
    setSelectedValue(newValue);
    onChangeValue && onChangeValue(parseFloat(newValue));
  };

  // Khi mở màn hình, cuộn đến vị trí mặc định
  useEffect(() => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: (parseFloat(selectedValue) - min) * SNAP_SEGMENT,
        animated: false,
      });
    }
  }, [unit]);

  return (
    <View style={styles.container}>
      {/* Hiển thị giá trị hiện tại */}
      <View style={styles.markerLine}>
        <View style={styles.value}>
          <Text style={styles.selectedValue}>{selectedValue} </Text>
          <Text style={styles.unit}>{unit}</Text>
        </View>
        <View style={styles.triangle} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_SEGMENT}
        decelerationRate="fast"
        onScroll={handleScroll}
        scrollEventThrottle={16}
      >
        <View style={[styles.ruler, { width: rulerWidth + SPACER_WIDTH * 2 }]}>
          <View style={{ width: SPACER_WIDTH }} />
          {Array.from({ length: totalTicks }, (_, index) => {
            const value = (parseFloat(min) + index).toFixed(1);
            return (
              <View key={index} style={styles.tickContainer}>
                <View
                  style={[
                    styles.tick,
                    index % 10 === 0 ? styles.longTick : index % 5 === 0 ? styles.mediumTick : styles.shortTick,
                  ]}
                />
              </View>
            );
          })}
          <View style={{ width: SPACER_WIDTH }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RulerHeight;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    paddingVertical: 20,
  },
  markerLine: {
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 10,
  },
  value: {
    flexDirection: 'row',
    alignItems: 'baseline',
  },
  selectedValue: {
    fontSize: 26,
    color: '#007AFF',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  unit: {
    fontSize: 16,
    color: '#333',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 5,
    borderRightWidth: 5,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
  },
  ruler: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    height: 100,
  },
  tickContainer: {
    width: SNAP_SEGMENT,
    alignItems: 'center',
  },
  tick: {
    width: SEGMENT_WIDTH,
    backgroundColor: '#333',
  },
  shortTick: {
    height: 15,
  },
  mediumTick: {
    height: 25,
  },
  longTick: {
    height: 40,
  },
  tickLabel: {
    fontSize: 12,
    marginBottom: 5,
    textAlign: 'center',
  },
});
