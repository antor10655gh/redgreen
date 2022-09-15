import React, { useEffect, useState, } from 'react';
import { MoreOutlined, LeftOutlined, RightOutlined } from '@ant-design/icons';
import { Col, Row } from 'antd';
import moment from 'moment';

const WeatherData = () => {
    const [weathers, setWeathers] = useState({});

    useEffect(()=>{
        fetch('https://api.weatherapi.com/v1/current.json?key=3bcf74a6f79c4d00ae185227221509&q=Dhaka&aqi=no&fbclid=IwAR2D1QsKvS3zIsQnHoESN3sUAP7r3Y_8RCOddxNTkX7NRaZ9d2yvoj0TP_4')
        .then(res=>res.json())
        .then(data=>setWeathers(data.current))
    },[])
    return (
        <div>
           <div 
                style={{
                    display: "flex",
                    alignItems: "center",
                    marginBottom: "20px",
                    justifyContent: "space-between",
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                        }}>
                            Weather
                    </h1>
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
           </div>
           <div>
              <Row>
                <Col span={12}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center"
                    }}>
                        <h2>{moment().format('LT')}</h2>
                        <img src={weathers.condition.icon} alt="" />
                        <h3 style={{marginTop: "5px"}}>{weathers.condition.text}, {weathers.temp_c}°C</h3>
                    </div>
                </Col>
                <Col span={12}>
                    <div>
                        <div style={{
                            display: "flex",
                            alignItems: "center",
                            marginBottom: "10px",
                            justifyContent: "end",
                        }}>
                            <h1>{moment().format("ddd, Do MMMM YYYY")}</h1>
                            <div style={{
                                display: "flex",
                                marginLeft: "5px",
                                alignItems: "center",
                                justifyContent: "end",
                            }}>
                                <LeftOutlined style={{cursor: "pointer", color: "gray"}} />
                                <RightOutlined style={{cursor: "pointer"}} />
                            </div>
                        </div>
                        <div>
                            <ul style={{float: "right"}}>
                                <li>10:00 AM  Light Rain, 27°C</li>
                                <li>01:00 PM  Light Rain, 28°C</li>
                                <li>04:00 PM  Cloudy, 27°C</li>
                                <li>07:00 PM  Light Rain, 27°C</li>
                                <li>10:00 PM  Light Rain, 27°C</li>
                            </ul>
                        </div>
                    </div>
                </Col>
              </Row>
           </div>
        </div>
    );
};

export default WeatherData;