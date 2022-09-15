import React from 'react';
import { MoreOutlined } from '@ant-design/icons';

const WeatherData = () => {
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
        </div>
    );
};

export default WeatherData;