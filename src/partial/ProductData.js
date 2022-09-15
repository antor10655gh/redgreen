import { Divider } from 'antd';
import { MoreOutlined } from '@ant-design/icons';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const ProductData = () => {
    const [products, setProducts] = useState([]);

    useEffect(()=>{
        fetch('product.json')
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])

    return (
        <div>
            <div 
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center"
                }}>
                <div>
                    <h1 
                        style={{
                            fontSize:"22px", 
                            fontWeight: "bold",
                            marginBottom: "15px"
                        }}>
                            Most Popular Product
                    </h1>
                </div>
                <div>
                    <MoreOutlined style={{ fontSize: '22px'}} />
                </div>
            </div>
            <div>
            {
                products.map(product=>
                    <div>
                        <div className='product-main'>
                        <div className='product-sub'>
                            <div>
                                <div 
                                    style={{
                                        width: "45px",
                                        marginRight: "8px",
                                        padding: "8px 10px",
                                        textAlign: "center",
                                        borderRadius: "8px",
                                        border: "1px solid #d5cfcf",
                                    }}>
                                    <h1>{product.name}</h1>
                                </div>
                            </div>
                            <div>
                                <h1>{product.title}</h1>
                                <h5>{product.profit}</h5>
                            </div>
                        </div>
                        <div>
                            <span
                                style={{
                                    color: "red"
                                }}
                            >
                                {product.sales}
                            </span>
                        </div>
                        </div>
                        <Divider />
                    </div>
                )
            }
            <Link to="http://google.com" target="_blank">Show more</Link>
            </div>
        </div>
    );
};

export default ProductData;