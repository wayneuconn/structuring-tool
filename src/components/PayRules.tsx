import React, { useState } from 'react'
import { Flex, Radio, Tooltip, RadioChangeEvent } from 'antd'
import PayRuleSelection from './PayRuleSelection'
import PayruleType, {nonQmOptions, rplOptions } from './PayruleOptions'
import type { ColumnsType } from 'antd/es/table/interface'


interface PayRuleProps {
  setPaymentRules: (rules: string[]) => void,
}

const leftTableColumns: ColumnsType<PayruleType> = [
  {
    dataIndex: 'title',
    title: 'Name',
    render: (text, record: PayruleType) => (
      <Tooltip title={record.description}>
        {text}
      </Tooltip>
    ),
  },
]

const payRuleOptions = [
  { label: 'NON-QM', value: 'nonQm' },
  { label: 'RPL', value: 'rpl' },
]

const rightTableColumns: ColumnsType<PayruleType> = [
  {
    dataIndex: 'title',
    title: 'Name',
    render: (text, record: PayruleType) => (
      <Tooltip title={record.description}>
        {text}
      </Tooltip>
    ),
  },
]

const PayRules: React.FC<PayRuleProps> = ({ setPaymentRules }) => {
  const [targetKeys, setTargetKeys] = useState<string[]>([])
  const [type, setType] = useState<string>('nonQm')
  const [options, setOptions] = useState<PayruleType[]>(nonQmOptions)
  const onChange = (nextTargetKeys: string[]) => {
    setTargetKeys(nextTargetKeys)
    setPaymentRules(nextTargetKeys)
  }

  const onSwitch =  ({ target: { value } }: RadioChangeEvent) => {
    setType(value)
    if (value === 'nonQm') {
      setOptions(nonQmOptions)
    } else {
      setOptions(rplOptions)
    }
  }

  return (
    <Flex gap="small"  vertical>
      <Radio.Group
        onChange={onSwitch}
        options={payRuleOptions}
        value={type}
        optionType="button"
        buttonStyle="solid"
      />
      <PayRuleSelection
        dataSource={options}
        targetKeys={targetKeys}
        showSearch={true}
        onChange={onChange}
        leftColumns={leftTableColumns}
        rightColumns={rightTableColumns}
      />
    </Flex>
  )
}

export default PayRules
