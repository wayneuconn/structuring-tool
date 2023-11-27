import React, { useState } from 'react'
import { Select } from 'antd'

interface PayRuleProps {
  selectedRules: string[]
  options: string[]
  onChange: (selectedRule: string[]) => void
}

const PayRuleSelection: React.FC<PayRuleProps> = ({ selectedRules, options, onChange }) => {
  const [selectedItems, setSelectedItems] = useState<string[]>([])
  const filteredOptions = options.filter((o) => !selectedItems.includes(o))

  return (
      <Select
        mode="multiple"
        placeholder="Select"
        value={selectedRules}
        onChange={onChange}
        style={{ width: '40%' }}
        allowClear={true}
        options={filteredOptions.map((item) => ({
          value: item,
          label: item,
        }))}
      />
  )
}

export default PayRuleSelection
