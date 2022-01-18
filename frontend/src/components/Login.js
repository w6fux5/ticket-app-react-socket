import React, { useState } from 'react';
import { Form, Input, Button, InputNumber, Typography, Divider } from 'antd';
import { SaveOutlined } from '@ant-design/icons';

import { Redirect } from 'react-router-dom';

// Hooks
import useHideMenu from '../hooks/useHideMenu';

// helpers
import { getUserFromStorage } from '../helpers/userInfoHelper';

const { Title, Text } = Typography;

const Login = ({ history }) => {
  useHideMenu(false);

  const [userInfo] = useState(getUserFromStorage());

  if (userInfo?.agent && userInfo?.table) {
    return <Redirect to="/table" />;
  }

  const onFinish = ({ agent, table }) => {
    localStorage.setItem('agent', agent);
    localStorage.setItem('table', table);
    history.push('/table');
  };

  const onFinishFailed = (errorInfo) => {
    console.log('Failed:', errorInfo);
  };

  const formLayout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 10 },
  };

  const tailLayout = {
    wrapperCol: {
      offset: 8,
      span: 10,
    },
  };

  return (
    <>
      <Title level={2}>Login</Title>
      <Text>Please input your table number</Text>
      <Divider />

      <Form
        {...formLayout}
        name="basic"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <Form.Item
          label="Agent"
          name="agent"
          rules={[
            {
              required: true,
              message: 'Please input your username!',
            },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Table"
          name="table"
          rules={[
            {
              required: true,
              message: 'Please input table number!',
            },
          ]}
        >
          <InputNumber min={1} mx={99} />
        </Form.Item>

        <Form.Item {...tailLayout}>
          <Button type="primary" htmlType="submit" shape="round">
            <SaveOutlined />
            Submit
          </Button>
        </Form.Item>
      </Form>
    </>
  );
};

export default Login;
