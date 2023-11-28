import React, { useState, useEffect } from 'react'
import { Button, Tooltip } from 'antd'
import type TrancheSchema from './TrancheSchema'

interface RunCashflowsProps {
  tranches: TrancheSchema[]
  tapeID: string
  principalRules: string[]
}
  
const RunCashflowButton: React.FC<RunCashflowsProps> = ({ tranches, tapeID, principalRules }) => {
  const [isValid, setIsValid] = useState(true)
  useEffect(() => {
    const isDataValid = tapeID.length > 0 && 
      tranches.length > 0 && 
      principalRules.length > 0 
    setIsValid(isDataValid)
  }, [tranches, tapeID, principalRules])
  const handleButtonClick = () => {
    const jsonData = {
      tranches,
      tapeID,
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
