import React from 'react'
import CollateralSchema from './schemas/CollateralSchema'
import { Form, Input, Flex, Button } from 'antd'

interface CollateralBuildereProps {
  setCollateral: (collateral: CollateralSchema) => void,
}


const CollateralBuilder: React.FC<CollateralBuildereProps> = ({setCollateral}) => {
  const [form] = Form.useForm()

  const handleBuild = () => {
    form.validateFields()
      .then(values => {
        setCollateral({ ...values })
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  const validateCollateralName = (rule: any, value: string) => {
    if (value && value.includes(' ')) {
      return Promise.reject(new Error('Tranche name cannot contain spaces'))
    }
    return Promise.resolve()
  }

  return (
    <Flex vertical>
      <Form form={form} layout="vertical">
        {/* TODO abstract and reuse these forms */}
        <Form.Item 
          name="name" 
          label="Collateral Name" 
          rules={[
            { required: true },
            { validator: validateCollateralName }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="balance" 
          label="Begining Balance" 
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
        <Form.Item 
          name="coupon" 
          label="Coupon (%)" 
          rules={[{ required: true }]}
        >
          <Input type="number" addonAfter="%" />
        </Form.Item>
        <Form.Item 
          name="servicingFee" 
          label="Servicing Fee (%)" 
          rules={[{ required: true }]}
        >
          <Input type="number" addonAfter="%" />
        </Form.Item>
        <Form.Item 
          name="term" 
          label="Term (month)" 
          rules={[{ required: true }]}
        >
          <Input type="number" />
        </Form.Item>
      </Form>
      <Button key="submit" type="primary" onClick={handleBuild}>
        Build
      </Button>
    </Flex>
    
  )
}
export default CollateralBuilder
