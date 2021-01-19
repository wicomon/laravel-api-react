import React from 'react';
import { Button } from 'antd';
import {QuestionCircleOutlined, BellOutlined, CalendarOutlined } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';


function Header() {
    return (
        <Row className="d-flex align-items-center mb-3" style={{backgroundColor: '#1890ff', color:'white', paddingTop:'10px', paddingBottom:'10px'}}>
            <Col md={2} xs={8} className="d-flex justify-content-around">
            <Button type="primary" danger>
                Logo
            </Button>
            </Col>
            <Col md={14} xs={0} >
            <Button type="primary" style={{backgroundColor: '#1890ff'}}>Dashboard</Button>
            <Button type="primary" style={{backgroundColor: '#1890ff'}}>Organización</Button>
            <Button type="primary" style={{backgroundColor: '#1890ff'}}>Modelos</Button>
            <Button type="primary" style={{backgroundColor: '#1890ff'}}>Seguimiento</Button>
            </Col>
            <Col  md={4} xs={8} className="d-flex justify-content-between">
                <CalendarOutlined style={{fontSize:'20px', marginRight:'10px'}}/>
                <QuestionCircleOutlined style={{fontSize:'20px',marginRight:'10px'}}/>
                <BellOutlined style={{fontSize:'20px',marginRight:'10px'}}/>
            </Col>
            <Col  md={2} xs={4} className="d-flex justify-content-center">
                <Button type="primary" shape="circle" style={{backgroundColor: '#ff7a45'}}>
                    A
                </Button>
                </Col>
            <Col  md={2} xs={4}>
                <Button type="primary" danger className="d-flex justify-content-center">
                    Logo
                </Button>
            </Col>
        </Row>
    );
}

export default Header;