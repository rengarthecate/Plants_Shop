import { StyleSheet, Text, View, Dimensions, TouchableOpacity, FlatList } from 'react-native';
import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import CalendarReport from '../custom/CalendarReport';
import BMIReport from '../custom/BMIReport';
import WeightReport from '../custom/WeightReport';
import ReportResult from '../custom/ReportResult';

const { width, height } = Dimensions.get('window');

const ReportScreen = () => {
    // Render tất cả components trong ListHeaderComponent
    const renderHeader = () => (
        <>
            <ReportResult />

            <View style={styles.history}>
                <View style={styles.historyHeader}>
                    <Text style={styles.title}>History</Text>
                    <TouchableOpacity>
                        <Text style={styles.allRecords}>All records</Text>
                    </TouchableOpacity>
                </View>
                <CalendarReport />
            </View>

            {/* Weight Section */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.title}>Weight</Text>
                    <TouchableOpacity style={styles.recordBtn}>
                        <Text style={styles.btnTxt}>Daily records</Text>
                    </TouchableOpacity>
                </View>
                <WeightReport />
            </View>

            {/* BMI Section */}
            <View style={styles.sectionContainer}>
                <View style={styles.sectionHeader}>
                    <Text style={styles.title}>BMI</Text>
                    <TouchableOpacity style={styles.recordBtn}>
                        <Text style={styles.btnTxt}>Daily records</Text>
                    </TouchableOpacity>
                </View>
                <BMIReport />
            </View>
        </>
    );

    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                ListHeaderComponent={renderHeader}
                data={[]} // Không cần data vì tất cả đã nằm trong header
                renderItem={null}
                showsVerticalScrollIndicator={false}
                contentContainerStyle={styles.listContent}
            />
        </SafeAreaView>
    );
};

export default ReportScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    listContent: {
        paddingHorizontal: width * 0.05,
        paddingTop: height * 0.02,
        paddingBottom: height * 0.1,
    },
    header: {
        alignItems: 'flex-start',
        marginBottom: height * 0.02,
    },
    headerTxt: {
        fontSize: width * 0.08,
        fontWeight: 'bold',
    },
    history: {
        marginVertical: height * 0.02,
    },
    historyHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    sectionContainer: {
        marginBottom: height * 0.02,
    },
    sectionHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: height * 0.01,
    },
    title: {
        fontSize: width * 0.05,
        fontWeight: '500',
    },
    allRecords: {
        fontSize: width * 0.035,
        color: '#007BFF',
        fontWeight: '600'
    },
    recordBtn: {
        backgroundColor: 'blue',
        paddingHorizontal: width * 0.03,
        paddingVertical: height * 0.01,
        borderRadius: width * 0.02,
    },
    btnTxt: {
        fontWeight: 'bold',
        fontSize: width * 0.035,
        color: '#fff',
    },
});