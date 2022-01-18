import React from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const CreateTIcket = () => {
  useHideMenu(true);
  const newTick = () => {
    console.log('new tick');
  };
  return (
    <>
      <Row>
        <Col span={14} offset={6} align="center">
          <Title level={3}>generator ticket</Title>
          <Button
            size="large"
            type="primary"
            shape="round"
            icon={<DownloadOutlined />}
            onClick={newTick}
          >
            New Ticket
          </Button>
        </Col>
      </Row>

      <Row style={{ marginTop: 100 }}>
        <Col span={14} offset={6} align="center">
          <Text level={2}>Your Number: </Text>
          <Text type="success" style={{ fontSize: 55 }}>
            55
          </Text>
        </Col>
      </Row>
    </>
  );
};

export default CreateTIcket;
