import React from 'react';
import {Layout, Avatar} from 'antd';
import {UserOutlined} from '@ant-design/icons';
import './styles.scss';

const Header = () => {
  return (
    <Layout.Header className="header site-layout-sub-header-background">
      <div className="user">
        <Avatar icon={<UserOutlined />} />
        &nbsp;
        Юлия
      </div>
    </Layout.Header>
  );
};

export default Header;
