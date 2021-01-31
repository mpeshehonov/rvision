import React from 'react';
import { Layout, Menu, Badge } from 'antd';
import {EyeOutlined, UserOutlined, BarChartOutlined, NotificationOutlined, SettingOutlined, FileTextOutlined, ExceptionOutlined} from '@ant-design/icons';
import './styles.scss';
import {Link} from 'react-router-dom';

const Sidebar = () => {
    return (
        <Layout.Sider
          className="sidebar"
          width={250}
          breakpoint="lg"
          collapsedWidth="0"
        >
          <div className="logo">
            <EyeOutlined />
            &nbsp;
            R-Vision
          </div>

          <Menu theme="dark" mode="inline" defaultSelectedKeys={['analytics']}>
            <div className="menu-title">Главное меню</div>
            <Menu.Item key="analytics" icon={<BarChartOutlined />}>
              <Link to="/">Панель</Link>
            </Menu.Item>
            <Menu.Item key="monitoring" icon={<EyeOutlined />}>
              Мониторинг
            </Menu.Item>
            <Menu.Item key="notifications" icon={<NotificationOutlined />}>
              Уведомления
            </Menu.Item>
            <Menu.Item key="recommendations" icon={<ExceptionOutlined />}>
              Рекомендации
            </Menu.Item>

            <div className="menu-title">Администрирование</div>
            <Menu.Item key="settings" icon={<SettingOutlined />}>
              Настройки
            </Menu.Item>
            <Menu.Item key="profile" icon={<UserOutlined />}>
              Профиль
            </Menu.Item>
            <Menu.Item key="journal" icon={<FileTextOutlined />}>
              Журнал
              &nbsp;
              <Badge count={5} />
            </Menu.Item>
          </Menu>
        </Layout.Sider>
    )
}

export default Sidebar;