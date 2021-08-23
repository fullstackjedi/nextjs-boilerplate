import { AxiosError } from 'axios'
import { toast } from 'react-toastify'

export const handleAxiosError = (error: AxiosError): void => {
  if (error.response?.status === 401) {
    toast.error('You need to log in')
    return
  }

  const errors = [error?.response?.data?.message]

  errors.flat().forEach((msg) => toast.error(msg))
}
