import React from 'react';
import { View, Text } from 'react-native';
import Svg, { Rect } from 'react-native-svg';

const ChartComponent = ({ title, unit, color, data }) => {
    const maxHeight = 50;
    return (
        <View style={{
            width: 170,
            padding: 5,
            backgroundColor: "#ebebeb",
            borderRadius: 10,
            paddingLeft: 20,
            elevation: 10
        }}>
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>{title}</Text>
            <Text style={{ fontSize: 24, fontWeight: "bold" }}>0<Text style={{ fontSize: 15, color: "gray", }}>{unit}</Text></Text>
            <Svg width={150} height={80}>
                {data.map((value, index) => {
                    const barHeight = (value / 30) * maxHeight;
                    return (
                        <Rect
                            key={index}
                            x={index * 20}
                            y={maxHeight - barHeight + 20}
                            width={13}
                            height={barHeight}
                            rx={4}
                            fill={color}
                            opacity={0.7}
                        />
                    );
                })}
            </Svg>
            <View style={{ flexDirection: "row", justifyContent: "space-between", width: "89%", marginTop: 5, alignSelf: 'flex-start' }}>
                {["M", "T", "W", "T", "F", "S", "S"].map((day, index) => (
                    <Text key={index} style={{ fontSize: 12, fontWeight: "bold", color }}>{day}</Text>
                ))}
            </View>
        </View>
    );
};

export default ChartComponent;
