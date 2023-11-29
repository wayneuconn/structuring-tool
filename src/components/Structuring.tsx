import React from 'react'
import Tranches from './Tranches'
import PayRules from './PayRules'
import Collateral from './Collateral'
import { Flex, Card, Col, Row, Space } from 'antd'
import type { RadioChangeEvent } from 'antd'
import type TrancheSchema from './schemas/TrancheSchema'
import RunCashflowButton from './RunCashflows'
import type CollateralSchema from './schemas/CollateralSchema'

const Structuring: React.FC = () => {
  const [type, setType] = React.useState('tape')
  const [tranches, setTranches] = React.useState<TrancheSchema[]>([])
  const [tapeID, setTapeID] = React.useState<string>('')
  const [loans, setLoans] = React.useState<string>()
  const [collateral, setCollateral] = React.useState<CollateralSchema>()
  const [paymentRules, setPaymentRules] = React.useState<string[]>([])
  const onSetTranches =  (tranches: TrancheSchema[]) => {
    setTranches(tranches)
  }
  const setCollateralType =  ({ target: { value } }: RadioChangeEvent) => {
    setType(value)
    setCollateral(undefined)
    setLoans(undefined)
  }

  const handleCollateralSave = (collateral: CollateralSchema) => {
    setCollateral(collateral)
  }

  const handleSetLoans = (loans: string) => {
    setLoans(loans)
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
            <Card title="Collateral" bordered={true}>
              <Collateral
                type={type}
                collateral={collateral}
                loans={loans}
                onTypeChange={setCollateralType}
                setTapeID={setTapeID}
                handleCollateralSave={handleCollateralSave}
                handleSetLoans={handleSetLoans}
              />
            </Card>
            <Card title="Fees" bordered={true}>
            </Card>
          </Flex>


        </Col>
        <Col span={1}></Col>
        <Col span={11}>
        <Flex vertical gap="large">
          <Card title="Scenarios" bordered={true}>
            </Card>
          <Card title="Payment Rules" bordered={true}>
            <PayRules
              setPaymentRules={setPaymentRules}
            />
          </Card>
                        
          <RunCashflowButton
            type={type}
            tranches={tranches}
            tapeID={tapeID}
            collateral={collateral}
            loans={loans}
            principalRules={paymentRules}
          />
          </Flex>
        </Col>
      </Row>
    </div>
  )
}

export default Structuring
