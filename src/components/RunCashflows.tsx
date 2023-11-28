import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import type TrancheSchema from './schemas/TrancheSchema'
import CollateralSchema from './schemas/CollateralSchema'

interface RunCashflowsProps {
  type: string
  tranches: TrancheSchema[]
  tapeID: string
  collateral: CollateralSchema | undefined
  loans: string | undefined
  principalRules: string[]
}
  
const RunCashflowButton: React.FC<RunCashflowsProps> = ({ type, tranches, tapeID, collateral, loans, principalRules }) => {
  const [isValid, setIsValid] = useState(true)
  useEffect(() => {
    const isDataValid = (tapeID.length > 0 || collateral || loans ? true : false) && 
      tranches.length > 0 && 
      principalRules.length > 0 
    setIsValid(isDataValid)
  }, [type, tranches, tapeID, collateral,loans, principalRules])

  const handleButtonClick = () => {
    let collateralBody
    switch(type) {
      case 'tape':
        collateralBody = tapeID
        break;
      case 'loans':
        collateralBody = loans
        break;
      case 'collateral':
        collateralBody = collateral
        break;
    }
    const jsonData = {
      tranches,
      collateralBody,
      principalRules
    }

    console.log(JSON.stringify(jsonData, null, 2))
  }

  return (
    <Tooltip title={!isValid ? "Some of the components are missing" : ""}>
      <Button type="primary" onClick={handleButtonClick} disabled={!isValid}>Run Cashflow</Button>
    </Tooltip>
  )
}
  
export default RunCashflowButton
