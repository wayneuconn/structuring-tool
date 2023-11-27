import React from 'react'
import Tranches from './Tranches'
import PayRules from './PayRules'
import Collateral from './Collateral'
import { Flex, Divider } from 'antd'
import type { RadioChangeEvent } from 'antd'
import type TrancheSchema from './TrancheSchema'
import RunCashflowButton from './RunCashflows'

const Structuring: React.FC = () => {
  const [type, setType] = React.useState('tape')
  const [tranches, setTranches] = React.useState<TrancheSchema[]>([])
  const [tapeID, setTapeID] = React.useState<string>('')
  const [principalRules, setPrincipalRules] = React.useState<string[]>([])
  const [interestRules, setInterestRules] = React.useState<string[]>([])
  const onSetTranches =  (tranches: TrancheSchema[]) => {
    setTranches(tranches)
  }
  const setCollateralType =  ({ target: { value } }: RadioChangeEvent) => {
    setType(value)
  }
  return (
    <div>
      <h1>Structuring Tool Prototype</h1>
      <Flex gap="middle" vertical>
        <Tranches tranches={tranches} setTranches={onSetTranches} />
        <Divider orientation="left" orientationMargin="0">
          Collateral
        </Divider>
        <Collateral type={type} onTypeChange={setCollateralType} setTapeID={setTapeID}/>
        <Divider orientation="left" orientationMargin="0">
          PayRules
        </Divider>
        <PayRules
          selectedPrincipalRules={principalRules}
          selectedInterestRules={interestRules}
          setPrincipalRules={setPrincipalRules}
          setInterestRules={setInterestRules}
        />
        <RunCashflowButton
          tranches={tranches}
          tapeID={tapeID}
          principalRules={principalRules}
          interestRules={interestRules}
        />
      </Flex>
    </div>
  )
}

export default Structuring
