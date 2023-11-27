import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import type TrancheSchema from './TrancheSchema'

interface RunCashflowsProps {
  tranches: TrancheSchema[]
  tapeID: string
  principalRules: string[]
  interestRules: string[]
}
  
const RunCashflowButton: React.FC<RunCashflowsProps> = ({ tranches, tapeID, principalRules, interestRules }) => {
  const [isValid, setIsValid] = useState(true)
  useEffect(() => {
    const isDataValid = tapeID.length > 0 && 
      tranches.length > 0 && 
      principalRules.length > 0 && 
      interestRules.length > 0
    setIsValid(isDataValid)
  }, [tranches, tapeID, principalRules, interestRules])
  const handleButtonClick = () => {
    const jsonData = {
      tranches,
      tapeID,
      principalRules,
      interestRules
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
