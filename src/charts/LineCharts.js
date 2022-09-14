import React from 'react';
import { ResponsiveContainer, LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip } from 'recharts';

const salesData = [
    {
        name: "TV",
        amount: 600,
    },
    {
        name: "Laptop",
        amount: 1200,
    },
    {
        name: "Others",
        amount: 210,
    },
] 

const LineCharts = () => {
    return (
        <div>
            <ResponsiveContainer width="100%" aspect={3}>
                <LineChart data={salesData} height={300}>
                    <XAxis dataKey="name" />
                    <YAxis tickFormatter={(value)=> value + "JT"}/>
                    <Tooltip />
                    <CartesianGrid strokeDasharray="4"/>
                    <Line dataKey="amount" stroke="blue" type="monotone" activeDot={{r: 8}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    );
};

export default LineCharts;