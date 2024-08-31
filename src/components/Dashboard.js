import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, Cell, ResponsiveContainer } from 'recharts';
import './Dashboard.css';

const lineData = [
  { name: '6/30/2024 - 7/6/2024', orders: 1600, sales: 1400 },
  { name: '7/7/2024 - 7/13/2024', orders: 800, sales: 800 },
  { name: '7/21/2024 - 7/27/2024', orders: 800, sales: 450 },
];

const pieData = [
  { name: 'WooCommerce Store', value: 44.2 },
  { name: 'Shopify Store', value: 55.8 },
];

const COLORS = ['#FF8042', '#00C49F'];

const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * Math.PI / 180);
  const y = cy + radius * Math.sin(-midAngle * Math.PI / 180);

  // Custom positioning
  const labelX = cx; // Centered text
  const labelY = y; // Adjust the position as needed

  return (
    <text x={labelX} y={labelY} fill="#ffffff" textAnchor="middle" dominantBaseline="central" style={{ fontSize: '12px' }}>
      {(percent * 100).toFixed(1)}%
    </text>
  );
};

const Dashboard = () => {
  return (
    <div className="dashboard">
      <div className="chart-container">
        <h3>Sales vs Orders</h3>
        <ResponsiveContainer width="100%" height={250}>
          <LineChart data={lineData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip />
            <Legend verticalAlign="top" align="right" iconType="circle" />
            <Line type="monotone" dataKey="orders" stroke="#FF8042" strokeWidth={2} />
            <Line type="monotone" dataKey="sales" stroke="#00C49F" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      <div className="chart-container">
        <h3>Portion of Sales</h3>
        <div style={{ textAlign: 'center', marginBottom: '10px', fontSize: '24px', color: '#333' }}>Total: 2659</div>
        <ResponsiveContainer width="100%" height={250}>
          <PieChart>
            <Pie
              data={pieData}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              innerRadius={0}
              outerRadius={90}
              fill="#8884d8"
              dataKey="value"
            >
              {pieData.map((entry, index) => (
                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
              ))}
            </Pie>
            <Legend layout="vertical" verticalAlign="bottom" align="center" />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default Dashboard;
