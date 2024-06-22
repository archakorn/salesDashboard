import React from 'react';
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, colors } from '@mui/material';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, Tooltip, Legend, PieChart, Pie, LineChart, Line, CartesianGrid } from "recharts";
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import DirectionsCarFilledOutlinedIcon from '@mui/icons-material/DirectionsCarFilledOutlined';
import EmojiEventsOutlinedIcon from '@mui/icons-material/EmojiEventsOutlined';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';






const Analytics = () => {
    // ข้อมูลตัวอย่าง
    const analyticsData = [
        { name: 'คำตากล้า', value: 4.03, Amount: 4025200, Item: 103 },
        { name: 'เจริญศิลป์', value: 3.42, Amount: 3417000, Item: 85 },
        { name: 'ไชยวาน', value: 2.19, Amount: 2191500, Item: 59 },
        { name: 'เชกา', value: 5.50, Amount: 5497900, Item: 143 },
        { name: 'โซ่พิสัย', value: 5.00, Amount: 5004900, Item: 129 },
        { name: 'ดงมะไฟ', value: 4.37, Amount: 4372700, Item: 111 },
        { name: 'ทุ่งฝน', value: 1.59, Amount: 1587500, Item: 39 },
        { name: 'นาแก', value: 2.93, Amount: 2931500, Item: 70 },
        { name: 'บ้านดุง (สนง.)', value: 9.37, Amount: 9370900, Item: 234 },
        { name: 'บ้านม่วง', value: 7.84, Amount: 7838300, Item: 191 },
        { name: 'บึงกาฬ', value: 8.86, Amount: 8856000, Item: 219 },
        { name: 'เฝ้าไร่', value: 5.33, Amount: 5333000, Item: 131 },
        { name: 'พรเจริญ', value: 5.32, Amount: 5321900, Item: 133 },
        { name: 'พรรณานิคม', value: 3.29, Amount: 3286000, Item: 85 },
        { name: 'พังโคน', value: 6.46, Amount: 6459500, Item: 159 },
        { name: 'พิบูลย์รักษ์', value: 4.10, Amount: 4103500, Item: 98 },
        { name: 'เมิองสกลนคร1', value: 6.45, Amount: 6445500, Item: 156 },
        { name: 'เมืองสกลนคร2(Big C)', value: 4.01, Amount: 4010600, Item: 90 },
        { name: 'วานรนิวาส', value: 9.50, Amount: 9498080, Item: 235 },
        { name: 'วาริชภูมิ', value: 4.55, Amount: 4550400, Item: 112 },
        { name: 'ศรีวิไล', value: 4.87, Amount: 4866500, Item: 120 },
        { name: 'ศรีสงคราม', value: 3.35, Amount: 3346000, Item: 77 },
        { name: 'ส่องดาว', value: 3.10, Amount: 3096300, Item: 78 },
        { name: 'สำนักงานใหญ่', value: 0.10, Amount: 96000, Item: 2 },
        { name: 'หนองหาน', value: 13.06, Amount: 13059601, Item: 311 },
        { name: 'หน้าโรงเรียน', value: 7.60, Amount: 7603100, Item: 187 },
        { name: 'หน้าอำเภอสว่างแดนดิน', value: 8.86, Amount: 8859200, Item: 227 },
        { name: 'อากาศอำนวย', value: 9.58, Amount: 9575700, Item: 241 }

    ];
    const topBranches = [
        'หนองหาน',
        'อากาศอำนวย',
        'วานรนิวาส',
        'บึงกาฬ',
        'หน้าอำเภอสว่างแดนดิน'
    ];
    const monthlySalesData = [
        { month: 'Aug', หนองหาน: 0, อากาศอำนวย: 0.56, วานรนิวาส: 0.54, บึงกาฬ: 0.56, หน้อำเภอสว่างแดนดิน: 0 },
        { month: 'Sep', หนองหาน: 3.94, อากาศอำนวย: 3.25, วานรนิวาส: 2.46, บึงกาฬ: 3.15, หน้อำเภอสว่างแดนดิน: 2.45 },
        { month: 'Oct', หนองหาน: 4.43, อากาศอำนวย: 2.69, วานรนิวาส: 2.75, บึงกาฬ: 2.39, หน้อำเภอสว่างแดนดิน: 3.01 },
        { month: 'Nov', หนองหาน: 2.08, อากาศอำนวย: 1.17, วานรนิวาส: 1.51, บึงกาฬ: 1.22, หน้อำเภอสว่างแดนดิน: 1.52 },
        { month: 'Dec', หนองหาน: 2.61, อากาศอำนวย: 1.90, วานรนิวาส: 2.25, บึงกาฬ: 1.53, หน้อำเภอสว่างแดนดิน: 1.89 }
    ]




    return (
        <div className='main-container'>
            <div className='Header'>
                <h1>ยอดขายสะสมตามสาขา</h1>
            </div>
            <div className="main-cards">
                <Card className="Card">
                    <CardContent>
                        <Box>
                            <Typography fontSize={"30px"} component="div">
                                <AttachMoneyIcon sx={{ marginRight: 2, fontSize: 35, verticalAlign: 'baseline' }} />
                                Total sale
                            </Typography>
                        </Box>
                        <Typography fontSize={"22px"} marginTop={'30px'}>
                            154.60 M
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="Card">
                    <CardContent>
                        <Box>
                            <Typography fontSize={"30px"} component="div">
                                <DirectionsCarFilledOutlinedIcon sx={{ marginRight: 2, fontSize: 35, verticalAlign: 'baseline' }} />
                                Product
                            </Typography>
                        </Box>
                        <Typography fontSize={'22px'} marginTop={'30px'}>
                            3,825
                        </Typography>
                    </CardContent>
                </Card>
                <Card className="Card">
                    <CardContent>
                        <Typography fontSize="30px" component="div">
                            <EmojiEventsOutlinedIcon sx={{ marginRight: 2, fontSize: 35, verticalAlign: 'baseline' }} />
                            Top Sale
                        </Typography>
                        <Box display="flex" alignItems="center" marginTop={'10px'}>
                            <Typography fontSize="22px" marginTop={'30px'}>
                                หนองหาน 13.06 M
                            </Typography>
                        </Box>
                    </CardContent>
                </Card>
            </div>
            <div className='Charts'>
                <div className='chart-container'>
                    <div className='title'>
                        <h2 style={{ textAlign: 'center' }}>ยอดขายสะสมตามสาขา (5 Last Month)</h2>
                    </div>
                    <ResponsiveContainer width="100%" height={600}>
                        <BarChart data={analyticsData} margin={{ top: 20, right: 30, left: 60, bottom: 60 }}>
                            <XAxis dataKey="name" angle={-45} textAnchor="end" interval={0} height={60} tick={{ fontSize: 12 }} padding={{ left: 20, right: 20 }} />
                            <YAxis label={{ value: 'ยอดขายสะสมตามสาขา (ล้าน/บาท)', angle: -90, position: 'insideLeft', dx: -20, style: { textAnchor: 'middle', fill: '#000000' } }} tick={{ fontSize: 12 }} />
                            <Tooltip />
                            <Legend />
                            <Bar dataKey="value" fill="#2E8B57" barSize={30} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
            <div className='second-container'>
                <div className='dataTable'>
                    <TableContainer component={Paper} className="custom-table">
                        <div>
                            <h2 style={{ marginTop: '5px', marginBottom: '5px', color: 'white', background: 'black' }}>Top Products</h2>
                        </div>
                        <Table aria-label="analytics table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="center">Item</TableCell>
                                    <TableCell align="right">Amount</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {analyticsData.slice(0, 5).map((data) => ( // แสดงแค่ 5 records แรก
                                    <TableRow key={data.name}>
                                        <TableCell>{data.name}</TableCell>
                                        <TableCell align='center'>{data.Item}</TableCell>
                                        <TableCell align="right">{data.Amount.toLocaleString()}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>
                <div className='lineChart'>
                    <div><h3>ยอดขายสูงสุด 5 สาขา</h3></div>
                    <ResponsiveContainer width="90%" height="70%">
                        <LineChart data={monthlySalesData} margin={{ top: 20, right: 50, left: 20, bottom: 20 }}>
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="month" />
                            <YAxis label={{ value: 'ยอดขายรายสาขา (เดือน)', angle: -90, position: 'insideLeft', dx: -10, style: { textAnchor: 'middle', fill: '#000000' } }} tick={{ fontSize: 12, fill: '#000000' }} />
                            <Tooltip />
                            <Legend />
                            <Line type="monotone" dataKey="หนองหาน" stroke="#8884d8" activeDot={{ r: 8 }} />
                            <Line type="monotone" dataKey="อากาศอำนวย" stroke="#82ca9d" />
                            <Line type="monotone" dataKey="วานรนิวาส" stroke="#ffc658" />
                            <Line type="monotone" dataKey="บ้านดุง (สนง.)" stroke="#ff7300" />
                            <Line type="monotone" dataKey="บึงกาฬ" stroke="#387908" />
                        </LineChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
}


export default Analytics;
