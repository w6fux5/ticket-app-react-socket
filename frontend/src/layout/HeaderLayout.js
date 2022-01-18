import React from 'react';

import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons';

import { Layout } from 'antd';

import styles from './HeaderLayout.module.scss';

const { Header } = Layout;

const HeaderLayout = ({ collapsed, toggle }) => {
  return (
    <Header className={styles['site-layout-background']} style={{ padding: 0 }}>
      <span onClick={toggle} className={styles.trigger}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </span>
    </Header>
  );
};

export default HeaderLayout;
