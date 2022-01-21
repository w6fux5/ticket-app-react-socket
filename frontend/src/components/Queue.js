import React, { useState, useContext, useEffect } from 'react';
import { Typography, Row, Col, List, Card, Tag, Divider, Space } from 'antd';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

// Context
import { SocketContext } from '../context/SocketContext';

// Helper
import { getLatestTickets } from '../helpers/getLatestTickets';

const { Title, Text } = Typography;

const Queue = () => {
  useHideMenu(true);

  // Init State
  const [tickets, setTickets] = useState([]);

  // Context
  const { socket } = useContext(SocketContext);

  useEffect(() => {
    if (!socket) return;
    socket.on('assigned-ticket', (tickets) => {
      console.log(tickets);
      setTickets(tickets);
    });

    return () => {
      socket.off('assigned-ticket');
    };
  }, [socket]);

  useEffect(() => {
    getLatestTickets().then(setTickets);
  }, []);

  return (
    <>
      <Title level={1}>All Client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={tickets?.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">{`desk no.${item.table}`}</Tag>,
                  ]}
                >
                  <Title>No. {item.number}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={tickets?.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket no. ${item.number}`}
                  description={
                    <Space>
                      <Text type="secondary">On table: </Text>
                      <Tag color="magenta">{item.table}</Tag>

                      <Text type="secondary">Agent: </Text>
                      <Tag color="magenta">{item.agent}</Tag>
                    </Space>
                  }
                />
              </List.Item>
            )}
          />
        </Col>
      </Row>
    </>
  );
};

export default Queue;
