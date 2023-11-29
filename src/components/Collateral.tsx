import React from 'react'
import { Radio, Space, Button, Input, RadioChangeEvent, message, Flex, Alert } from 'antd'
import type { UploadProps } from 'antd'
import CollateralBuilder from './CollateralBuilder'
import CollateralSchema from './schemas/CollateralSchema'
import LoansInput from './LoansInput'
const { TextArea } = Input

const options = [
  { label: 'Tape ID', value: 'tape' },
  { label: 'Loans', value: 'loans' },
  { label: 'Collateral Builder', value: 'collateral' },
]

interface CollateralProps {
  type: string,
  collateral: CollateralSchema | undefined,
  loans: string | undefined,
  onTypeChange: ({ target: { value } }: RadioChangeEvent) => void
  setTapeID: (tapeID: string) => void
  handleCollateralSave: (collateral: CollateralSchema) => void
  handleSetLoans: (loans: string) => void
}

//TODO: this is placeholder
const props: UploadProps = {
  name: 'file',
  multiple: true,
  action: '',
  onChange(info) {
    const { status } = info.file
    if (status !== 'uploading') {
      console.log(info.file, info.fileList)
    }
    if (status === 'done') {
      message.success(`${info.file.name} file uploaded successfully.`)
    } else if (status === 'error') {
      message.error(`${info.file.name} file upload failed.`)
    }
  },
  onDrop(e) {
    console.log('Dropped files', e.dataTransfer.files)
  },
}

const collateralSourceComponent = (
    type: string,
    handleInputChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    handleClick: () => void,
    setLoans: (loans: string) => void,
    setCollateral: (collateral: CollateralSchema) => void
  ) => {
    switch(type) {
      case 'tape':
        return (
          <div>
            <Space.Compact style={{ width: '100%' }}>
              <Input placeholder="Tape ID" onChange={handleInputChange}/>
              <Button type="primary" onClick={handleClick}>
                Validate Tape
              </Button>
            </Space.Compact>
          </div>
        )
      case 'loans':
        return (<LoansInput setLoans={setLoans} />)
      case 'collateral':
        return (<CollateralBuilder setCollateral={setCollateral} />)
    }
}

const Collateral: React.FC<CollateralProps> = ({type, collateral, loans, onTypeChange, setTapeID, handleCollateralSave, handleSetLoans}) => {

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTapeID(e.target.value)
  }

  const handleValidateTape = () => {
    //validateTape(inputValue)
  }


  return(
    <Flex vertical gap="medium">
      <Space direction="vertical">
        <Flex vertical gap="large">
          <Radio.Group
            onChange={onTypeChange}
            options={options}
            value={type}
            optionType="button"
            buttonStyle="solid"
          />
          {collateral && <Alert message={collateral.name} type="success" showIcon />}
          {loans && <Alert message="Loans Saved" type="success" showIcon />}
        </Flex>
        {collateralSourceComponent(
          type,
          handleInputChange,
          handleValidateTape,
          handleSetLoans,
          handleCollateralSave)}
      </Space>
    </Flex>
  )
}
export default Collateral
