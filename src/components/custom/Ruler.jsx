import React, { useState, useEffect, useRef, useCallback } from 'react';
import { SafeAreaView, View, Text, TextInput, Animated, Dimensions, Button, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const { width, height } = Dimensions.get('window');

const Ruler = ({
  style = {},
  minimum = 100,
  maximum = 300,
  segmentWidth = 2,
  segmentSpacing = 20,
  indicatorWidth = 100,
  indicatorHeight = 80,
  indicatorColor = '#FF0000',
  backgroundColor = '#FFFFFF',
  numberFontFamily = 'System',
  numberSize = 40,
  numberColor = '#000000',
  unit = 'cm',
  unitBottom = 10,
  unitFontFamily = 'System',
  unitColor = '#888888',
  unitSize = 16,
  onChangeValue = () => { }
}) => {
  const [value, setValue] = useState(minimum);
  const scrollX = useRef(new Animated.Value(0)).current;
  const textInputRef = useRef(null);

  const snapSegment = segmentWidth + segmentSpacing;
  const spacerWidth = (width / 2);
  const rulerWidth = width - segmentWidth + (maximum - minimum) * snapSegment;

  const handleLogValue = () => {
    console.log(`Current value: ${value} cm`);
  };

  const updateValue = useCallback(({ value }) => {
    const newValue = Math.round(value / snapSegment) + minimum;
    setValue(newValue);
    if (textInputRef.current) {
      textInputRef.current.setNativeProps({ text: newValue.toString() });
    }
  }, [minimum, snapSegment]);

  useEffect(() => {
    const listener = scrollX.addListener(updateValue);
    return () => {
      scrollX.removeListener(listener);
    };
  }, [scrollX, updateValue]);

  const renderRuler = () => {
    const data = [...Array(maximum - minimum + 1).keys()].map(i => i + minimum);
    return (
      <View style={styles.rulerContainer}>
        <View style={styles.rulerUnitWrap}>
          <TextInput
            ref={textInputRef}
            style={styles.rulerValue}
            value={value.toString()}
            editable={false}
          />
          <Text style={styles.unitText}>{unit}</Text>
        </View> 
        <Animated.ScrollView
          horizontal
          bounces={false}
          showsHorizontalScrollIndicator={false}
          scrollEventThrottle={16}
          snapToInterval={snapSegment}
          keyboardShouldPersistTaps="handled"
          onScroll={Animated.event([{ nativeEvent: { contentOffset: { x: scrollX } } }], { useNativeDriver: true })}
          onMomentumScrollEnd={() => onChangeValue(value)}
        >
          <View style={{ width: rulerWidth, flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginLeft: 10 }}>
            <View style={{ width: spacerWidth / 1.4 }} />
            {data.map(i => (
              <View
                key={i}
                style={{
                  backgroundColor: i % 10 === 0 ? '#333' : '#999',
                  height: i % 10 === 0 ? 60 : 20,
                  width: segmentWidth,
                  marginRight: 20,
                }}
              />
            ))}
            <View style={{ width: spacerWidth }} />
          </View>
        </Animated.ScrollView>
      </View>
    );
  };

  return (
    <SafeAreaView style={[style, styles.container]}>
      {renderRuler()}
    </SafeAreaView>
  );
};

Ruler.propTypes = {
  style: PropTypes.object,
  minimum: PropTypes.number,
  maximum: PropTypes.number,
  segmentWidth: PropTypes.number,
  segmentSpacing: PropTypes.number,
  indicatorWidth: PropTypes.number,
  indicatorHeight: PropTypes.number,
  indicatorColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  numberFontFamily: PropTypes.string,
  numberSize: PropTypes.number,
  numberColor: PropTypes.string,
  unit: PropTypes.string,
  unitBottom: PropTypes.number,
  unitFontFamily: PropTypes.string,
  unitColor: PropTypes.string,
  unitSize: PropTypes.number,
  onChangeValue: PropTypes.func
};

export default Ruler;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  rulerContainer: {
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'transparent',
    padding: 10,
  },
  rulerUnitWrap: {
    flexDirection: 'row',
    position: 'absolute',
    top: 30,
  },
  rulerValue: {
    fontSize: 40,
    fontFamily: 'System',
    color: 'blue',
    marginRight: 5,
    fontWeight: '600'
  },
  unitText: {
    fontSize: 16,
    fontFamily: 'System',
    color: 'black',
    alignSelf: 'center',
    fontWeight: '700'

  },
  buttonContainer: {
    marginTop: 20
  }
});
