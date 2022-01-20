import React, { useContext, useState } from 'react';
import { Row, Col, Typography, Button } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';

// Context
import { SocketContext } from '../context/SocketContext';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const CreateTIcket = () => {
  // Init State
  const [ticket, setTicket] = useState(null);

  const { socket } = useContext(SocketContext);

  useHideMenu(true);

  const newTick = () => {
    socket.emit('create-ticket', null, (ticket) => {
      setTicket(ticket);
    });
  };
  return (
    <>
      <Row>
        <Col span={14} offset={5} align="center">
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

      {ticket && (
        <Row style={{ marginTop: 100 }}>
          <Col span={14} offset={5} align="center">
            <Text level={2}>Your Number: </Text>
            <Text type="success" style={{ fontSize: 55 }}>
              {ticket?.number}
            </Text>
          </Col>
        </Row>
      )}
    </>
  );
};

export default CreateTIcket;
