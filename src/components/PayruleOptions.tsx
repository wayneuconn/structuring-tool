export const nonQmOptions = [
  {
    "key": "SUPER_SENIOR_PRO_RATA",
    "title": "SUPER_SENIOR_PRO_RATA",
    "description": "This is a detailed description for SUPER_SENIOR_PRO_RATA.",
    "disabled": false,
  },
  {
    "key": "PRIME_PRO_RATA_SUPER_SENIOR_SEQUENTIAL",
    "title": "PRIME_PRO_RATA_SUPER_SENIOR_SEQUENTIAL",
    "description": "Detailed information about PRIME_PRO_RATA_SUPER_SENIOR_SEQUENTIAL.",
    "disabled": true,
  },
  {
    "key": "SENIOR_SUPPORT_PRO_RATA",
    "title": "SENIOR_SUPPORT_PRO_RATA",
    "description": "An explanation of SENIOR_SUPPORT_PRO_RATA and its features.",
    "disabled": false,
  }
]

export const rplOptions = [
  {
    "key": "INTEREST_SEQUENTIAL",
    "title": "INTEREST_SEQUENTIAL",
    "description": "Description for INTEREST_SEQUENTIAL. It involves sequential allocation of interest.",
    "disabled": false,
  },
  {
    "key": "ACCRETE_INTEREST",
    "title": "ACCRETE_INTEREST",
    "description": "ACCRETE_INTEREST is a method for accruing interest over time.",
    "disabled": true,
  },
  {
    "key": "AIOS",
    "title": "AIOS",
    "description": "AIOS stands for Advanced Interest Optimization System.",
    "disabled": false,
  }
]

interface PayruleType {
  key: string
  title: string
  description: string
  disabled: boolean
}

export default PayruleType
