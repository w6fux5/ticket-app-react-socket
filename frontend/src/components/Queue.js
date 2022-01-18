import React from 'react';
import { Typography, Row, Col, List, Card, Tag, Divider, Space } from 'antd';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

const { Title, Text } = Typography;

const data = [
  {
    ticketNo: 33,
    deskNo: 3,
    agent: 'Fernando Herrera',
  },
  {
    ticketNo: 34,
    deskNo: 4,
    agent: 'Melissa Flores',
  },
  {
    ticketNo: 35,
    deskNo: 5,
    agent: 'Carlos Castro',
  },
  {
    ticketNo: 36,
    deskNo: 3,
    agent: 'Fernando Herrera',
  },
  {
    ticketNo: 37,
    deskNo: 3,
    agent: 'Fernando Herrera',
  },
  {
    ticketNo: 38,
    deskNo: 2,
    agent: 'Melissa Flores',
  },
  {
    ticketNo: 39,
    deskNo: 5,
    agent: 'Carlos Castro',
  },
];

const Queue = () => {
  useHideMenu(true);

  return (
    <>
      <Title level={1}>All Client</Title>
      <Row>
        <Col span={12}>
          <List
            dataSource={data.slice(0, 3)}
            renderItem={(item) => (
              <List.Item>
                <Card
                  style={{ width: 300, marginTop: 16 }}
                  actions={[
                    <Tag color="volcano">{item.agent}</Tag>,
                    <Tag color="magenta">{`desk no.${item.deskNo}`}</Tag>,
                  ]}
                >
                  <Title>No. {item.ticketNo}</Title>
                </Card>
              </List.Item>
            )}
          />
        </Col>
        <Col span={12}>
          <Divider>History</Divider>
          <List
            dataSource={data.slice(3)}
            renderItem={(item) => (
              <List.Item>
                <List.Item.Meta
                  title={`Ticket no. ${item.ticketNo}`}
                  description={
                    <Space>
                      <Text type="secondary">On table: </Text>
                      <Tag color="magenta">{item.ticketNo}</Tag>

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
