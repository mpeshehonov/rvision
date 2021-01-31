import React from 'react';
import './styles.scss';
import {Row, Col, ConfigProvider, DatePicker, Divider} from 'antd';
import TagCloudChart from './TagCloudChart';
import moment from 'moment';
import 'moment/locale/ru';
import locale from 'antd/lib/locale/ru_RU';
import TreeMapChart from './TreeMapChart';
import DataTable from "./Table";
import ColumnChart from "./ColumnChart";

const { RangePicker } = DatePicker;
const monthFormat = 'MM.YYYY';

const Dashboard = () => {

  return (
    <>
      <ConfigProvider locale={locale}>
        <RangePicker
          picker="month"
          format={monthFormat}
          defaultValue={[moment('11.2020', monthFormat), moment('01.2021', monthFormat)]}
        />
      </ConfigProvider>
      <Row>
        <Col span={24}>
          <TreeMapChart/>
        </Col>
        <Divider/>
        <Col span={24}>
          <ColumnChart/>
        </Col>
        <Divider/>
        <Col span={24}>
          <TagCloudChart/>
        </Col>
        <Col span={24}>
          <DataTable/>
        </Col>
      </Row>
    </>
  );
};

export default Dashboard;
