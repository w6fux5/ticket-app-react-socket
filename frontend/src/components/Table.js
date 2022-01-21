import React, { useState, useContext } from 'react';

// Antd
import { Row, Col, Typography, Button, Divider } from 'antd';
import { CloseCircleOutlined, RightOutlined } from '@ant-design/icons';

import { Redirect } from 'react-router-dom';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

// Context
import { SocketContext } from '../context/SocketContext';

// Helpers
import { getUserFromStorage } from '../helpers/userInfoHelper';

const { Title, Text } = Typography;

const Table = ({ history }) => {
  useHideMenu(false);

  // Init State
  const [userInfo] = useState(getUserFromStorage());
  const [ticket, setTicket] = useState(null);

  // Context
  const { socket } = useContext(SocketContext);

  if (!userInfo?.agent || !userInfo?.table) {
    return <Redirect to="/login" />;
  }

  const onClickHandler = () => {
    localStorage.clear();
    history.replace('/login');
  };

  const getTickHandler = () => {
    socket.emit('first-pending-ticket', userInfo, (ticket) => {
      setTicket(ticket);
    });
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

      {ticket && (
        <Row>
          <Col>
            <Text>Ticket Number: </Text>
            <Text style={{ fontSize: 30 }} type="danger">
              {ticket.number}
            </Text>
          </Col>
        </Row>
      )}

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
