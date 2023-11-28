import { Dayjs } from 'dayjs'

interface TrancheSchema {
  key: string
  name: string
  balance: number
  coupon: number
  maturityDate: Dayjs
}

export default TrancheSchema
