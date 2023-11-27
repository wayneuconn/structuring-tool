import React from 'react';
import { Button, Space, DatePicker } from 'antd';
import Tranches from './components/Tranches'

const App = () => (
  <div style={{ padding: '0 24px' }}>
    <h1>Structuring Tool Prototype</h1>
    <Space>
      <Tranches />
    </Space>
  </div>
);

export default App;
