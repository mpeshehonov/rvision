import React from 'react';
import {Layout, Menu, Avatar} from 'antd';
import {Link} from 'react-router-dom';
import {EyeOutlined, UserOutlined} from '@ant-design/icons';
import './Header.scss';

const Header = () => {
  return (
    <Layout.Header className="header">
      <div className="logo">
        <EyeOutlined />
        &nbsp;
        R-Vision
      </div>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1">
          <Link to="/">Панель</Link>
        </Menu.Item>
      </Menu>
      <div className="user">
        <Avatar icon={<UserOutlined />} />
        &nbsp;
        Юлия
      </div>
    </Layout.Header>
  );
};

export default Header;
