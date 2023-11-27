import React, { useState } from 'react'
import { Table, Button, Modal, Form, Flex } from 'antd'
import dayjs, { Dayjs } from 'dayjs'
import CreateTrancheModal from './TrancheCreate'
import TrancheSchema from './TrancheSchema'

interface TranchesProps {
  tranches: TrancheSchema[]
  setTranches: (tranches: TrancheSchema[]) => void
}


const Tranches: React.FC<TranchesProps> = ({tranches, setTranches}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  const [form] = Form.useForm()
  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState(false)
  const [itemToDelete, setItemToDelete] = useState<string | null>(null) // key of the item to delete



  const showModal = () => setIsModalVisible(true)

  const handleSave = (values: { name: string; balance: number; coupon: number; maturityDate: Dayjs }) => {
    setTranches([...tranches, { ...values, key: String(tranches.length + 1), maturityDate: dayjs(values.maturityDate) }])
      setIsModalVisible(false)
      form.resetFields()
  }

  const handleDelete = () => {
    if (itemToDelete !== null) {
        setTranches(tranches.filter(item => item.key !== itemToDelete))
        setIsDeleteModalVisible(false)
        setItemToDelete(null)
    }
  }

  const showDeleteModal = (key: string) => {
    setItemToDelete(key)
    setIsDeleteModalVisible(true)
  }
  const existingTrancheNames = tranches.map(item => item.name)
  const columns = [
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Balance', dataIndex: 'balance', key: 'balance' },
    { title: 'Coupon', dataIndex: 'coupon', key: 'coupon' },
    { title: 'Maturity Date', dataIndex: 'maturityDate', key: 'maturityDate', render: (date: Dayjs) => date.format('YYYY-MM-DD') },
    {
      title: 'Actions',
      key: 'actions',
      render: (text: string, record: TrancheSchema) => (
        <Button type="link" onClick={() => showDeleteModal(record.key)}>Delete</Button>
      )
    }
  ]

  return (
    <>
      <Flex gap="small" wrap="wrap">
        <Button type="primary" onClick={showModal}>Create a Tranche</Button>
      </Flex>
      
      <Table dataSource={tranches} columns={columns} />

      <CreateTrancheModal
        open={isModalVisible}
        existingTrancheNames={existingTrancheNames}
        onCreate={handleSave}
        onCancel={() => setIsModalVisible(false)}
      />
      <Modal
        title="Confirm Deletion"
        open={isDeleteModalVisible}
        onOk={handleDelete}
        onCancel={() => setIsDeleteModalVisible(false)}
        >
        <p>Are you sure you want to delete this tranche?</p>
      </Modal>
    </>
  )
}

export default Tranches
