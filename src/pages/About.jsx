import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from "recharts";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import '@fontsource/roboto';

function About() {
    const carType = [
        { name: 'รถใหม่', value: 3112, fill: '#3366CC' },
        { name: 'รถเก่า', value: 585, fill: '#FF9900' },
        { name: 'รถคืน', value: 19, fill: '#CCCCCC' },
        { name: 'รถเทิร์น', value: 20, fill: '#FFCC00' },
        { name: 'รถมือสอง', value: 54, fill: '#0099FF' },
        { name: 'รถยึด', value: 35, fill: '#339900' }

    ];
    const sum = [
        { titles: 'รวมทั้งหมด', sum: 3825 }
    ];

    // คำนวณค่ารวมของ 'value' ทั้งหมดใน 'carType'
    const totalValue = carType.reduce((acc, item) => acc + item.value, 0);

    // สร้างข้อมูลใหม่ที่เพิ่มเปอร์เซ็นต์เข้าไปในแต่ละ item
    const dataWithPercentages = carType.map(item => ({
        ...item,
        percentage: ((item.value / totalValue) * 100).toFixed(2) + '%' // คำนวณเปอร์เซ็นต์และแปลงเป็น string
    }));

    return (
        <div className='main-container' >
            <div className='main-title' >
                <h1 style={{ fontFamily: 'Arial  ' }}>Group by Product Type </h1>
            </div>
            <div className='container'>
                <div className='pie-chart' >
                    <ResponsiveContainer width="100%" height="100%">
                        <PieChart>
                            <Pie
                                dataKey="value"
                                data={carType}
                                cx="50%"
                                cy="50%"
                                outerRadius="70%"
                                label={({ name, value }) => `${name}: ${((value / totalValue) * 100).toFixed(2)}%`}
                            >
                                {carType.map((entry, index) => (
                                    <Cell key={`cell-${index}`} fill={entry.fill} />
                                ))}
                            </Pie>
                            <Tooltip formatter={(value) => `${((value / totalValue) * 100).toFixed(2)}%`} />
                            <Legend />
                        </PieChart>
                    </ResponsiveContainer>
                </div>
                <div className='table-container'>
                    <div className='title'>
                        <h2>Top Chanel</h2>
                    </div>
                    <div className='data-table'>

                        <TableContainer component={Paper} >
                            <Table aria-label="car type table">
                                <TableHead>
                                    <TableRow>
                                        <TableCell style={{ color: 'white', background: 'black' }}>ประเภทรถ</TableCell>
                                        <TableCell align="right" style={{ color: 'white', background: 'black' }}>จำนวน</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {carType.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row">{row.name}</TableCell>
                                            <TableCell align="right">{row.value}</TableCell>
                                        </TableRow>
                                    ))}
                                    {/* แสดงข้อมูลรวม */}
                                    {sum.map((row, index) => (
                                        <TableRow key={index}>
                                            <TableCell component="th" scope="row" style={{ color: 'white', background: 'black' }}>{row.titles}</TableCell>
                                            <TableCell align="right" style={{ color: 'white', background: 'black' }}>{row.sum}</TableCell>
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default About;
