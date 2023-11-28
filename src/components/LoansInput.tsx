import React from 'react'
import { Form, Input, Flex, Button } from 'antd'
const { TextArea } = Input

interface LoansInputProps {
  setLoans: (loans: string) => void,
}

const LoansInput: React.FC<LoansInputProps> = ({ setLoans }) => {
  const [form] = Form.useForm()
  const validateJsonString = (rule: any, jsonString: string) => {
    try {
      JSON.parse(jsonString)
      return Promise.resolve()
    } catch (error) {
      console.error("Error parsing JSON:", error)
      return Promise.reject(new Error('Json is incorrect'))
    }
  }

  const handleSave = () => {
    form.validateFields()
      .then(value => {
        setLoans(value)
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  return (
    <Flex vertical>
      <Form form={form} layout="vertical">
        <Form.Item
          label="Loan Input"
          name="loans"
          rules={[
            { required: true },
            { validator: validateJsonString }

          ]}
        >
          <TextArea rows={8} />
        </Form.Item>
      </Form>
      <Button key="submit" type="primary" onClick={handleSave}>
        Save
      </Button>
    </Flex>
  )
}
export default LoansInput
