import React from 'react'
import Tranches from './Tranches'
import PayRules from './PayRules'
import Collateral from './Collateral'
import { Flex, Card, Col, Row, Space } from 'antd'
import type { RadioChangeEvent } from 'antd'
import type TrancheSchema from './TrancheSchema'
import RunCashflowButton from './RunCashflows'

const Structuring: React.FC = () => {
  const [type, setType] = React.useState('tape')
  const [tranches, setTranches] = React.useState<TrancheSchema[]>([])
  const [tapeID, setTapeID] = React.useState<string>('')
  const [paymentRules, setPaymentRules] = React.useState<string[]>([])
  const onSetTranches =  (tranches: TrancheSchema[]) => {
    setTranches(tranches)
  }
  const setCollateralType =  ({ target: { value } }: RadioChangeEvent) => {
    setType(value)
  }
  return (
    <div>
      <h1>Structuring Tool Prototype</h1>
      <Row gutter={24}>
        <Col span={12}>
          <Flex vertical gap="large">
            <Card title="Tranches" bordered={true}>
                <Tranches tranches={tranches} setTranches={onSetTranches} />
            </Card>
            <Card title="Card title" bordered={true}>
              <Collateral type={type} onTypeChange={setCollateralType} setTapeID={setTapeID}/>
            </Card>
            <Card title="Fees" bordered={true}>

            </Card>
          </Flex>


        </Col>
        <Col span={1}></Col>
        <Col span={11}>
        <Flex vertical gap="large">
          <Card title="Payment Rules" bordered={true}>
            <PayRules
              setPaymentRules={setPaymentRules}
            />
          </Card>
                        
          <RunCashflowButton
            tranches={tranches}
            tapeID={tapeID}
            principalRules={paymentRules}
          />
          </Flex>
        </Col>
      </Row>
    </div>
  )
}

export default Structuring
