import React from 'react';
import { Button } from 'antd';
import {DownloadOutlined, UploadOutlined, PlusSquareFilled   } from '@ant-design/icons';
import { Row, Col, Divider } from 'antd';
import { Typography } from 'antd';

const { Title } = Typography;

function Menu() {
    return (
        <div className="container">
        <Row className="d-flex justify-content-between mx-3" >
            <Col >
                <Title level={2}>Organización</Title>
            </Col>
            <Col >
            
            <PlusSquareFilled style={{color:'#1890ff', fontSize:'45px'}}/>
            <Button type="" icon={<UploadOutlined />} size={'large'} style={{color:'#1890ff'}}/>
            <Button type="" icon={<DownloadOutlined />} size={'large'} style={{color:'#1890ff'}}/>
            </Col>
        </Row>
        </div>
    );
}

export default Menu;