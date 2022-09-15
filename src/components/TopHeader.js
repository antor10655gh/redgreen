import React from 'react';
import logo from '../assets/images/logo.png'
import { Col, Row, Input, Badge, Avatar, Button, Modal, Space} from 'antd';
import { DownOutlined , BellFilled , ExclamationCircleOutlined } from '@ant-design/icons';


const { confirm } = Modal;
const { Search } = Input;
const onSearch = (value) => console.log(value);

const TopHeader = () => {
    const showConfirm = () => {
        confirm({
          title: 'Do you Want to logout?',
          icon: <ExclamationCircleOutlined />,
          content: 'After click on logout then you lost your authentication.',
          okText: 'Logout',
      
          onOk() {
            console.log('OK');
          },
      
          onCancel() {
            console.log('Cancel');
          },
        });
      };
    return (
        <div className='topHeader'>
          <Row>
            <Col style={{display: "flex", justifyContent: "center", alignItems: "center"}} span={4}>
              <img style={{width: "50px"}} src={logo} alt="" />
              <span style={{fontSize: "24px", fontWeight: "bold"}}>RedGreen</span>
            </Col>
            <Col span={20}>
              <Row 
              style={{
                paddingLeft: 35,
                paddingRight: 25,
              }}>
                <Col span={16}>
                <Search
                  placeholder="Search"
                  onSearch={onSearch}
                  style={{
                    width: 500,
                    marginTop: 12,
                  }}
                />
                </Col>
                <Col span={8}>
                  <ul 
                  style={{
                    display: 'flex',
                    justifyContent: 'end',
                    alignItems: 'center',
                    listStyle: 'none',
                    marginTop: "8px",
                  }}
                  >
                    <li>
                      <Badge style={{marginRight: "20px",}} dot>
                        <BellFilled 
                          style={{
                            marginRight: "20px",
                            fontSize: 25,
                            color: "gray"
                          }}
                        />
                      </Badge>
                    </li>
                    <li>
                      <Avatar src="https://joeschmoe.io/api/v1/random" />
                    </li>
                    <li>
                    <Space wrap>
                    <Button style={{ border: "none"}} onClick={showConfirm}>
                      <span>admin</span>
                      <DownOutlined />
                    </Button>
                    </Space>
                    </li>
                  </ul>
                </Col>
              </Row>
            </Col>
        </Row>
        </div>
    );
};

export default TopHeader;