import React, { useContext } from 'react';
import { Layout, Menu } from 'antd';

import { Link } from 'react-router-dom';

import {
  UserOutlined,
  VideoCameraOutlined,
  UploadOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';

// context
import { UiContext } from '../context/UiContext';

import styles from './SideBar.module.scss';

const { Sider } = Layout;

const SideBar = ({ collapsed }) => {
  const { hideMenu } = useContext(UiContext);
  return (
    <Sider
      trigger={null}
      collapsible
      collapsed={collapsed}
      hidden={hideMenu}
      // collapsedWidth="0"
      // breakpoint="md"
    >
      <div className={styles.logo} />
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
        <Menu.Item key="1" icon={<UserOutlined />}>
          <Link to="/login">Login</Link>
        </Menu.Item>
        <Menu.Item key="2" icon={<VideoCameraOutlined />}>
          <Link to="/queue">Queue</Link>
        </Menu.Item>
        <Menu.Item key="3" icon={<UploadOutlined />}>
          <Link to="/create-ticket">Create Ticket</Link>
        </Menu.Item>
        {/* <Menu.Item key="4" icon={<AreaChartOutlined />}>
          <Link to="/office">Office</Link>
        </Menu.Item> */}
      </Menu>
    </Sider>
  );
};

export default SideBar;
