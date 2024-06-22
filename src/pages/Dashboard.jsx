import React from 'react';
import { BsFillArchiveFill, BsFillGrid3X3GapFill, BsPeopleFill, BsFillBellFill }
    from 'react-icons/bs'
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend } from "recharts";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';


function Dashboard() {

    const numOfCars = [
        { name: 'คำตากล้า', amount: 30, fill: '#3366CC' },
        { name: 'เจริญศิลป์', amount: 16, fill: '#3366CC' },
        { name: 'ไชยวาน', amount: 13, fill: '#3366CC' },
        { name: 'เชกา', amount: 22, fill: '#3366CC' },
        { name: 'โซ่พิสัย', amount: 25, fill: '#3366CC' },
        { name: 'ดงมะไฟ', amount: 22, fill: '#3366CC' },
        { name: 'ทุ่งฝน', amount: 13, fill: '#3366CC' },
        { name: 'นาแก', amount: 7, fill: '#3366CC' },
        { name: 'บ้านดุง (สนง.)', amount: 51, fill: '#3366CC' },
        { name: 'บ้านม่วง', amount: 30, fill: '#3366CC' },
        { name: 'บึงกาฬ', amount: 34, fill: '#3366CC' },
        { name: 'เฝ้าไร่', amount: 18, fill: '#3366CC' },
        { name: 'พรเจริญ', amount: 31, fill: '#3366CC' },
        { name: 'พรรณานิคม', amount: 26, fill: '#3366CC' },
        { name: 'พังโคน', amount: 20, fill: '#3366CC' },
        { name: 'พิบูลย์รักษ์', amount: 18, fill: '#3366CC' },
        { name: 'เมิองสกลนคร1', amount: 20, fill: '#3366CC' },
        { name: 'เมืองสกลนคร2(Big C)', sales: 16, fill: '#3366CC' },
        { name: 'วานรนิวาส', amount: 56, fill: '#3366CC' },
        { name: 'วาริชภูมิ', amount: 14, fill: '#3366CC' },
        { name: 'ศรีวิไล', amount: 18, fill: '#3366CC' },
        { name: 'ศรีสงคราม', amount: 8, fill: '#3366CC' },
        { name: 'ส่องดาว', amount: 9, fill: '#3366CC' },
        { name: 'สำนักงานใหญ่', amount: 0, fill: '#3366CC' },
        { name: 'หนองหาน', amount: 62, fill: '#3366CC' },
        { name: 'หน้าโรงเรียน', amount: 36, fill: '#3366CC' },
        { name: 'หน้าอำเภอสว่างแดนดิน', amount: 48, fill: '#3366CC' },
        { name: 'อากาศอำนวย', amount: 51, fill: '#3366CC' }
    ];


    const sumOfCars = [
        { name: 'คำตากล้า', sales: 1204500 },
        { name: 'เจริญศิลป์', sales: 658000 },
        { name: 'ไชยวาน', sales: 507500 },
        { name: 'เชกา', sales: 892500 },
        { name: 'โซ่พิสัย', sales: 918200 },
        { name: 'ดงมะไฟ', sales: 846000 },
        { name: 'ทุ่งฝน', sales: 547500 },
        { name: 'นาแก', sales: 310500 },
        { name: 'บ้านดุง (สนง.)', sales: 2105500 },
        { name: 'บ้านม่วง', sales: 1260500 },
        { name: 'บึงกาฬ', sales: 1533500 },
        { name: 'เฝ้าไร่', sales: 705000 },
        { name: 'พรเจริญ', sales: 1316500 },
        { name: 'พรรณานิคม', sales: 976500 },
        { name: 'พังโคน', sales: 892500 },
        { name: 'พิบูลย์รักษ์', sales: 751500 },
        { name: 'เมิองสกลนคร1', sales: 835000 },
        { name: 'เมืองสกลนคร2(Big C)', sales: 750500 },
        { name: 'วานรนิวาส', sales: 2247200 },
        { name: 'วาริชภูมิ', sales: 625700 },
        { name: 'ศรีวิไล', sales: 743500 },
        { name: 'ศรีสงคราม', sales: 377000 },
        { name: 'ส่องดาว', sales: 341000 },
        { name: 'สำนักงานใหญ่', sales: 0 },
        { name: 'หนองหาน', sales: 2605500 },
        { name: 'หน้าโรงเรียน', sales: 1567000 },
        { name: 'หน้าอำเภอสว่างแดนดิน', sales: 1891000 },
        { name: 'อากาศอำนวย', sales: 1902500 }
    ];


    return (
        <div className="main-container">
            <div className="main-title">
                <h1>ยอดขายประจำเดือนธันวาคม</h1>
            </div>
            <div className="charts">
                <div className="chart-container">
                    <div className="title">
                        <h2>ยอดขายรายสาขา (คัน) ประจำเดือนธันวาคมปี 2560</h2>
                    </div>
                    <div className="returnCarCharts1">
                        <ResponsiveContainer width="100%" height={600}>
                            <BarChart
                                data={numOfCars}
                                margin={{ top: 20, right: 30, left: 60, bottom: 60 }}
                            >
                                <XAxis
                                    dataKey="name"
                                    angle={-45}
                                    textAnchor="end"
                                    interval={0}
                                    height={60}
                                    tick={{ fontSize: 12 }}
                                    padding={{ left: 20, right: 20 }}
                                />
                                <YAxis
                                    label={{
                                        value: 'ยอดขายรายสาขา (คัน)',
                                        angle: -90,
                                        position: 'insideLeft',
                                        dx: -10,
                                        style: { textAnchor: 'iddle', fill: '#000000' }
                                    }}
                                    tick={{ fontSize: 12, fill: '#000000' }}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="amount" fill="#3366CC" barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
                <div className="chart-container">
                    <div className="title">
                        <h2>ยอดขายรายสาขา (ยอดเงิน) ประจำเดือนธันวาคมปี 2560</h2>
                    </div>
                    <div className='returnCarCharts2'>
                        <ResponsiveContainer width="100%" height={600}>
                            <BarChart
                                data={sumOfCars}
                                margin={{ top: 20, right: 30, left: 60, bottom: 60 }} // เพิ่ม left margin และ bottom margin
                            >
                                <XAxis
                                    dataKey="name"
                                    angle={-45}
                                    textAnchor="end"
                                    interval={0} // แสดงทุกค่าในแกน X
                                    height={60} // เพิ่มความสูงของแกน X
                                    tick={{ fontSize: 12 }} // ปรับขนาดฟอนต์
                                    padding={{ left: 20, right: 20 }} // เพิ่ม padding ให้แท่ง
                                />
                                <YAxis
                                    label={{
                                        value: 'ยอดขายรายสาขา (ล้าน/บาท)',
                                        angle: -90,
                                        position: 'insideLeft',
                                        dx: -20, // เลื่อน label ออกไปทางซ้าย
                                        style: { textAnchor: 'middle', fill: '#000000' } // จัดกึ่งกลางข้อความ
                                    }}
                                    tick={{ fontSize: 12 }}
                                />
                                <Tooltip />
                                <Legend />
                                <Bar dataKey="sales" fill="#006600" barSize={30} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Dashboard;
