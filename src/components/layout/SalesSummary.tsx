import React from 'react';
import { LineChartOutlined, CalendarOutlined, DollarOutlined, ShoppingOutlined } from '@ant-design/icons';
import { Card, Col, Row, Statistic } from 'antd';

const SalesSummary: React.FC = () => (
  <Row gutter={16}>
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card bordered={false}>
        <Statistic
          title="Today's Sale"
          value={11.28}
          precision={2}
          valueStyle={{ color: 'gray' }}
          prefix={<LineChartOutlined style={{backgroundColor: "blueviolet", }} />}
          suffix="k"
        />
      </Card>
    </Col>
    <Col xs={12} sm={12} md={12} lg={6}>
      <Card bordered={false}>
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
      <Card bordered={false}>
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
      <Card bordered={false}>
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