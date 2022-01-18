import React, { useState } from 'react';

// Antd
import { Layout } from 'antd';

// Router
import { BrowserRouter as Router, Route, Redirect } from 'react-router-dom';

// Layout
import SideBar from './layout/SideBar';
import HeaderLayout from './layout/HeaderLayout';

// Components
import Login from './components/Login';
import Queue from './components/Queue';
import CreateTicket from './components/CreateTicket';
import Table from './components/Table';

import styles from './App.module.scss';

const { Content } = Layout;

const App = () => {
  const [collapsed, setCollapsed] = useState(false);

  const toggle = () => {
    setCollapsed((prev) => !prev);
  };
  return (
    <Router>
      <Layout style={{ height: '100vh' }}>
        <SideBar collapsed={collapsed} />
        <Layout className={styles['site-layout']}>
          <HeaderLayout collapsed={collapsed} toggle={toggle} />
          <Content
            className={styles['site-layout-background']}
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 280,
            }}
          >
            <Route path="/login" component={Login} />
            <Route path="/queue" component={Queue} />
            <Route path="/create-ticket" component={CreateTicket} />
            <Route path="/table" component={Table} />
            <Redirect to="/login" />
          </Content>
        </Layout>
      </Layout>
    </Router>
  );
};

export default App;
