import React from 'react'
import { Modal, Form, Input, DatePicker, Button } from 'antd'
import { Dayjs } from 'dayjs'

interface CreateTrancheModalProps {
  open: boolean
  existingTrancheNames: string[]
  onCreate: (values: { name: string; balance: number; coupon: number; maturityDate: Dayjs }) => void
  onCancel: () => void
}


const CreateTrancheModal: React.FC<CreateTrancheModalProps> = ({ open, existingTrancheNames, onCreate, onCancel }) => {
  const [form] = Form.useForm()
  const validateTrancheName = (rule: any, value: string) => {
    if (value && value.includes(' ')) {
      return Promise.reject(new Error('Tranche name cannot contain spaces'))
    }
    if (existingTrancheNames.includes(value)) {
      return Promise.reject(new Error('Tranche name must be unique'));
    }
    return Promise.resolve()
  }

  const handleSubmit = () => {
    form.validateFields()
      .then(values => {
        onCreate({ ...values })
        form.resetFields()
      })
      .catch(info => {
        console.log('Validate Failed:', info)
      })
  }

  return (
    <Modal
      title="Add A New Tranche"
      open={open}
      onCancel={onCancel}
      footer={[
        <Button key="cancel" onClick={onCancel}>
          Cancel
        </Button>,
        <Button key="submit" type="primary" onClick={handleSubmit}>
          Create
        </Button>,
      ]}
    >
      <Form form={form} layout="vertical">
        <Form.Item 
          name="name" 
          label="Tranche Name" 
          rules={[
            { required: true },
            { validator: validateTrancheName }
          ]}
        >
          <Input />
        </Form.Item>
        <Form.Item 
          name="balance" 
          label="Balance" 
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
          name="maturityDate" 
          label="Maturity Date" 
          rules={[{ required: true }]}
        >
          <DatePicker />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default CreateTrancheModal