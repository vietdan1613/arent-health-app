import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
    CartesianGrid,
} from 'recharts';

const data = [
    { month: '6月', value1: 75, value2: 75 },
    { month: '7月', value1: 74, value2: 74 },
    { month: '8月', value1: 65, value2: 72 },
    { month: '9月', value1: 72, value2: 71 },
    { month: '10月', value1: 69, value2: 68 },
    { month: '11月', value1: 67, value2: 67 },
    { month: '12月', value1: 70, value2: 65 },
    { month: '1月', value1: 65, value2: 64 },
    { month: '2月', value1: 64, value2: 63 },
    { month: '3月', value1: 62, value2: 60 },
    { month: '4月', value1: 60, value2: 59 },
    { month: '5月', value1: 59, value2: 58 },
];

const BodyRecordChart = () => {
    return (
        <div style={styles.container}>
            <div style={styles.header}>
                <div style={styles.title}>BODY RECORD</div>
                <div style={styles.date}>2021.05.21</div>
            </div>
            <ResponsiveContainer width="100%" height={250}>
                <LineChart data={data}>
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#444" />
                    <XAxis dataKey="month" stroke="#ccc" />
                    <YAxis stroke="#ccc" />
                    <Tooltip />
                    <Line type="monotone" dataKey="value1" stroke="#FFD600" strokeWidth={2} dot={{ r: 4 }} />
                    <Line type="monotone" dataKey="value2" stroke="#8FE9D0" strokeWidth={2} dot={{ r: 4 }} />
                </LineChart>
            </ResponsiveContainer>
            <div style={styles.buttons}>
                <button style={styles.buttonWhite}>日</button>
                <button style={styles.buttonWhite}>週</button>
                <button style={styles.buttonYellow}>月</button>
                <button style={styles.buttonYellow}>年</button>
            </div>
        </div>
    );
};

const styles = {
    container: {
        backgroundColor: '#2E2E2E',
        padding: '20px',
        borderRadius: '8px',
        color: '#ffffff',
        maxWidth: '800px',
        margin: 'auto',
    },
    header: {
        marginBottom: '20px',
    },
    title: {
        fontSize: '14px',
    },
    date: {
        fontSize: '20px',
        fontWeight: 'bold',
    },
    buttons: {
        display: 'flex',
        justifyContent: 'center',
        gap: '10px',
        marginTop: '20px',
    },
    buttonWhite: {
        backgroundColor: 'white',
        color: '#333',
        border: 'none',
        borderRadius: '999px',
        padding: '6px 16px',
        cursor: 'pointer',
        fontSize: '14px',
    },
    buttonYellow: {
        backgroundColor: '#FFD600',
        color: 'white',
        border: 'none',
        borderRadius: '999px',
        padding: '6px 16px',
        cursor: 'pointer',
        fontSize: '14px',
    },
};

export default BodyRecordChart;
