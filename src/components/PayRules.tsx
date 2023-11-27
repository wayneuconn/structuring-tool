import React from 'react'
import { Flex, Typography } from 'antd'
import PayRuleSelection from './PayRuleSelection'
const { Text } = Typography

interface PayRuleProps {
  selectedPrincipalRules: string[],
  selectedInterestRules: string[],
  setPrincipalRules: (rules: string[]) => void,
  setInterestRules: (rules: string[]) => void
}

const PayRules: React.FC<PayRuleProps> = ({
  selectedPrincipalRules,
  selectedInterestRules,
  setPrincipalRules,
  setInterestRules
}) => {
  const handlePrincipalRuleChange = (selectedRule: string[]) => {
    setPrincipalRules(selectedRule)
  }

  const handleInterestRuleChange = (selectedRule: string[]) => {
    setInterestRules(selectedRule)
  }
  return (
    <Flex gap="small"  vertical>
      <Flex gap="small" align='center'>
        <Text strong>Principal Rule</Text>
        <PayRuleSelection
          selectedRules = {selectedPrincipalRules}
          options={['SUPER_SENIOR_PRO_RATA', 'PRIME_PRO_RATA_SUPER_SENIOR_SEQUENTIAL', 'SENIOR_SUPPORT_PRO_RATA']}
          onChange={handlePrincipalRuleChange}
        />
      </Flex>
      <Flex gap="small" align='center'>
        <Text strong>Interest Rule</Text>
        <PayRuleSelection
          selectedRules = {selectedInterestRules}
          options={['INTEREST_SEQUENTIAL', 'ACCRETE_INTEREST', 'AIOS']}
          onChange={handleInterestRuleChange}
        />
      </Flex>
    </Flex>
  )
}

export default PayRules
