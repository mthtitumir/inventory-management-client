import React from 'react';
import { LineChartOutlined, CalendarOutlined, DollarOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const SalesSummary: React.FC = () => (
  <Row gutter={20}>
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card bordered={true}>
        <Statistic
          title=<h4>Today's Sale</h4>
          value={11.28}
          precision={2}
          valueStyle={{ color: 'green' }}
          prefix={<LineChartOutlined style={{color: "white", border: "1px solid gray", borderRadius: "50%", padding: "5px", backgroundColor: "blueviolet"}} />}
          suffix="k"
        />
      </Card>
    </Col>
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card bordered={true}>
        <Statistic
          title="Yearly Total Sales"
          value={11.28}
          precision={2}
          valueStyle={{ color: 'gray' }}
          prefix={<CalendarOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card bordered={true}>
        <Statistic
          title="Net Income"
          value={11.28}
          precision={2}
          valueStyle={{ color: 'gray' }}
          prefix={<DollarOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card bordered={true}>
        <Statistic
          title="Products"
          value={435}
          precision={2}
          valueStyle={{ color: 'gray' }}
          prefix={<ShoppingOutlined />}
          suffix="$"
        />
      </Card>
    </Col>
  </Row>
);

export default SalesSummary;