import React from 'react';
import {useHistory, useLocation} from 'react-router-dom';
import {Button, Layout} from 'antd';
import './styles.scss';
import {ArrowLeftOutlined} from '@ant-design/icons';
import Header from "../Header";
import Sidebar from "../Sidebar";


const PageLayout = ({children}) => {
  const location = useLocation();
  const history = useHistory();

  return (
    <>
      <Layout className="layout">
        <Sidebar/>
        <Layout>
          <Header/>
          <Layout.Content className="layout-content" style={{padding: '0 50px', marginTop: 64}}>
            <div className="site-layout-content">
              { location.pathname !== '/' &&
                <Button type="primary" onClick={() => history.goBack()} style={{marginBottom: 16, marginLeft: 16, float: 'right'}}>
                  <ArrowLeftOutlined />
                  Назад
                </Button>
              }
              {children}
            </div>
          </Layout.Content>
          <Layout.Footer style={{textAlign: 'center'}}>
            Hack.Genesis_ONLINE_ x R-Vision x Stellar ©2021.
          </Layout.Footer>
        </Layout>
      </Layout>
    </>
  );
};

export default PageLayout;
  