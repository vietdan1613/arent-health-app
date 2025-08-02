import React from 'react';
import {
    LineChart,
    Line,
    XAxis,
    CartesianGrid,
    Tooltip,
    ResponsiveContainer,
} from 'recharts';

const BodyRecordChart = ({ data }) => {
    return (
        <div className='w-full h-full'>
            <ResponsiveContainer className='w-full h-full'>
                <LineChart data={data}>
                    <CartesianGrid stroke="#777777" vertical horizontal={false} />
                    <XAxis dataKey="month" stroke="#ccc" axisLine={false} />
                    <Tooltip />
                    <Line
                        type="monotone"
                        dataKey="weight"
                        stroke="#FFD600"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                    <Line
                        type="monotone"
                        dataKey="fat"
                        stroke="#8FE9D0"
                        strokeWidth={2}
                        dot={{ r: 4 }}
                    />
                </LineChart>
            </ResponsiveContainer>
        </div >
    );
};

export default BodyRecordChart;
