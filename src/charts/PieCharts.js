import React from 'react';
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const data = [
  { name: "TV", value: 600.000 },
  { name: "Laptop", value: 1200.000 },
  { name: "Other", value: 210.287 }
];
const COLORS = ["#2D5BFF", "#6284FD", "#96ADFF"];

const PieCharts = () => {
    return (
        <div>
           <PieChart width={200} height={200}>
                <Pie
                    data={data}
                    innerRadius={60}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                >
                    {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                </Pie>
                <Tooltip />
            </PieChart> 
        </div>
    );
};

export default PieCharts;