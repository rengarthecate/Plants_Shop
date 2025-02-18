import React, { useState, useRef, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');

const SEGMENT_WIDTH = 2;
const SEGMENT_SPACING = 15;
const SNAP_SEGMENT = SEGMENT_WIDTH + SEGMENT_SPACING;
const MIN_KG = 10;
const MAX_KG = 200;
const MIN_LBS = Math.round(MIN_KG * 2.20462);
const MAX_LBS = Math.round(MAX_KG * 2.20462);
const SPACER_WIDTH = width / 2;
const START_KG = 50;
const START_LBS = Math.round(START_KG * 2.20462);

const RulerWeight = ({ onChangeValue, isKg }) => {
  const [selectedValue, setSelectedValue] = useState(isKg ? START_KG : START_LBS);
  const scrollViewRef = useRef(null);
  const minValue = isKg ? MIN_KG : MIN_LBS;
  const maxValue = isKg ? MAX_KG : MAX_LBS;

  useEffect(() => {
    const newValue = isKg ? Math.round(selectedValue / 2.20462) : Math.round(selectedValue * 2.20462);
    setSelectedValue(newValue);
    scrollToValue(newValue, false);
  }, [isKg]);

  const scrollToValue = (value, animated = true) => {
    if (scrollViewRef.current) {
      scrollViewRef.current.scrollTo({
        x: (value - minValue) * SNAP_SEGMENT,
        animated,
      });
    }
  };

  const handleScrollEnd = (event) => {
    let scrollX = event.nativeEvent.contentOffset.x;
    let newValue = Math.round(scrollX / SNAP_SEGMENT) + minValue;

    newValue = Math.max(minValue, Math.min(newValue, maxValue));

    if (newValue !== selectedValue) {
      setSelectedValue(newValue);
      onChangeValue(newValue);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.markerLine}>
        <View style={styles.value}>
          <Text style={styles.selectedValue}>{selectedValue} </Text>
          <Text style={styles.unit}>{isKg ? 'kg' : 'lbs'}</Text>
        </View>
        <View style={styles.triangle} />
      </View>

      <ScrollView
        ref={scrollViewRef}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={SNAP_SEGMENT}
        decelerationRate="fast"
        onMomentumScrollEnd={handleScrollEnd}
        scrollEventThrottle={16}
      >
        <View style={[styles.ruler, { width: (maxValue - minValue) * SNAP_SEGMENT + SPACER_WIDTH * 2 }]}>
          <View style={{ width: SPACER_WIDTH }} />
          {Array.from({ length: maxValue - minValue + 1 }, (_, index) => (
            <View key={index} style={styles.tickContainer}>
              <View
                style={[
                  styles.tick,
                  index % 10 === 0 ? styles.longTick : index % 5 === 0 ? styles.mediumTick : styles.shortTick,
                ]}
              />
            </View>
          ))}
          <View style={{ width: SPACER_WIDTH }} />
        </View>
      </ScrollView>
    </View>
  );
};

export default RulerWeight;

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
  },
  unit: {
    fontSize: 16,
    color: '#333',
  },
  triangle: {
    width: 0,
    height: 0,
    borderLeftWidth: 8,
    borderRightWidth: 8,
    borderTopWidth: 10,
    borderLeftColor: 'transparent',
    borderRightColor: 'transparent',
    borderTopColor: 'black',
  },
  ruler: {
    flexDirection: 'row',
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
});
