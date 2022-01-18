import React, { useState } from 'react';
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

import { Redirect } from 'react-router-dom';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

// Helpers
import { getUserFromStorage } from '../helpers/userInfoHelper';

const { Title, Text } = Typography;

const Table = ({ history }) => {
  useHideMenu(false);
  const [userInfo] = useState(getUserFromStorage());
  if (!userInfo?.agent || !userInfo?.table) {
    return <Redirect to="/login" />;
  }

  const onClickHandler = () => {
    localStorage.clear();
    history.replace('/login');
  };

  const getTickHandler = () => {
    console.log('get ticket');
  };
  return (
    <>
      <Row>
        <Col span={20}>
          <Title level={2}>{userInfo?.agent}</Title>
          <Text>Table number: </Text>
          <Text type="success">{userInfo?.table}</Text>
        </Col>

        <Col span={4} align="right">
          <Button shape="round" type="danger" onClick={onClickHandler}>
            <CloseCircleOutlined />
            Close
          </Button>
        </Col>
      </Row>

      <Divider />

      <Row>
        <Col>
          <Text>Ticket Number: </Text>
          <Text style={{ fontSize: 30 }} type="danger">
            12
          </Text>
        </Col>
      </Row>

      <Row>
        <Col span={6} align="right" offset={18}>
          <Button onClick={getTickHandler} shape="round" type="primary">
            <RightOutlined />
            Get Ticket
          </Button>
        </Col>
      </Row>
    </>
  );
};

export default Table;
