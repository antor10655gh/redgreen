import React from 'react';
import { Alert, Col, Row, DatePicker,Select, Card } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import moment from 'moment';
import LineCharts from '../charts/LineCharts';
import PieCharts from '../charts/PieCharts';
import ProductData from '../partial/ProductData';
import SalesData from '../partial/SalesData';
import WeatherData from '../partial/WeatherData';

// start ant-select
const { Option } = Select;
const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
// end ant-select

// start ant-datepicker
const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
// end ant-datepicker

const onClose = (e) => {
    console.log(e, 'I was closed.');
  };

const Dashboard = () => {
    return (
        <div>
            <header>
                <h1>Redgreen Sales</h1>
            </header>
            <div>
                <Alert
                    message="Notification"
                    description="You dont have enough stock for the next campaign."
                    type="warning"
                    closable
                    onClose={onClose}
                    showIcon
                />
            </div>
            <div style={{marginTop: "20px"}}>
                <Row gutter={16}>
                    <Col span={15}>
                        <Card style={{padding: "10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", minHeight: "360px"}}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center"}}>
                            <div>
                                <h1 style={{fontSize:"22px", fontWeight: "bold"}}>Total Sale</h1>
                            </div>
                            <div 
                            style={{
                                display: "flex", 
                                alignItems: "center"
                            }}>
                                <DatePicker defaultValue={moment('01/01/2015', dateFormatList[0])} format={dateFormatList} />
                                <MoreOutlined style={{ fontSize: '22px'}} />
                            </div>
                        </div>
                        <Row style={{paddingTop: "30px"}}>
                            <Col span={6}>
                                <div>
                                    <div>
                                        <h4>TV</h4>
                                        <h3>600.000</h3>
                                    </div>
                                    <div>
                                        <h4>Laptop</h4>
                                        <h3>1200.000</h3>
                                    </div>
                                    <div>
                                        <h4>Other</h4>
                                        <h3>210.387</h3>
                                    </div>
                                </div>
                            </Col>
                            <Col span={18}>
                                <div>
                                    <LineCharts></LineCharts>
                                </div>
                            </Col>
                        </Row>
                        </Card>
                    </Col>
                    <Col span={9}>
                        <Card style={{padding: "10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px", minHeight: "360px"}}>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <div>
                                    <h1 style={{fontSize:"22px", fontWeight: "bold"}}>Sales Chart</h1>
                                </div>
                                <div>
                                    <MoreOutlined style={{ fontSize: '22px'}} />
                                </div>
                            </div>
                            <div style={{
                                display: "flex",
                                justifyContent: "space-between",
                                alignItems: "center"
                            }}>
                                <div>
                                    <h4>Todays Sale</h4>
                                    <h1 style={{ fontSize: '22px'}}>156</h1>
                                </div>
                                <div>
                                    <Select
                                    defaultValue="today"
                                    style={{
                                        width: 120,
                                    }}
                                    onChange={handleChange}
                                    >
                                      <Option value="today">Today</Option>
                                      <Option value="tomorrow">Tomorrow</Option>  
                                      <Option value="previous">Previous</Option>  
                                    </Select>
                                </div>
                            </div>
                            <div>
                                <PieCharts></PieCharts>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </div>
            <div style={{marginTop: "20px"}}>
                <Row gutter={16}>
                    <Col span={12}>
                        <Card 
                            style={{padding: "10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}
                        >
                            <ProductData />
                        </Card>
                    </Col>
                    <Col span={12}>
                        <Card
                            style={{padding: "10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}
                        >
                            <SalesData />
                        </Card>
                        <Card
                            style={{marginTop: "20px",padding: "10px",boxShadow: "rgba(60, 64, 67, 0.3) 0px 1px 2px 0px, rgba(60, 64, 67, 0.15) 0px 2px 6px 2px"}}
                        >
                            <WeatherData />
                        </Card>
                    </Col>
                </Row>
            </div>
        </div>
    );
};

export default Dashboard;