import React, {useState} from 'react'
import { Radio, Space, Button, Input } from 'antd'
import { RadioChangeEvent, Upload, message, Flex } from 'antd'
import { InboxOutlined } from '@ant-design/icons'
import type { UploadProps } from 'antd'
const { Dragger } = Upload

const options = [
  { label: 'Tape ID', value: 'tape' },
  { label: 'Upload (In Progress)', value: 'loans' },
]

interface CollateralProps {
  type: string,
  onTypeChange: ({ target: { value } }: RadioChangeEvent) => void
  setTapeID: (tapeID: string) => void
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
    handleClick: () => void
  ) => {
  if (type === 'tape') {
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
  } else {
    return (
      <Dragger {...props}>
        <p className="ant-upload-drag-icon">
          <InboxOutlined />
        </p>
        <p className="ant-upload-text">Click or drag file to this area to upload</p>
        <p className="ant-upload-hint">
          Support for a single or bulk upload. Strictly prohibited from uploading company data or other
          banned files.
        </p>
      </Dragger>
    )
  }
}

const Collateral: React.FC<CollateralProps> = ({type, onTypeChange, setTapeID}) => {
  const [inputValue, setInputValue] = useState('')

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTapeID(e.target.value)
  }

  const handleClick = () => {
    //validateTape(inputValue)
  }
  return(
    <Flex vertical>
      <Space direction="vertical">
        <Radio.Group
          onChange={onTypeChange}
          options={options}
          value={type}
          optionType="button"
          buttonStyle="solid"
        />
        {collateralSourceComponent(type, handleInputChange, handleClick)}
      </Space>
    </Flex>
  )
}
export default Collateral
