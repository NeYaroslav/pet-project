import { Resolver } from 'react-hook-form'
import {
  FormErrors,
  validatePassword,
  validateUsername,
} from '../../../utils/validation'
import type { FormFields } from './LoginForm'

const initialValues: FormFields = {
  password: '',
  username: '',
}

const resolver: Resolver<FormFields, FormErrors<FormFields>> = async (
  values
) => {
  const errors: FormErrors<FormFields> = {}

  const usernameError = validateUsername(values.username)
  const passwordError = validatePassword(values.password)

  if (usernameError) errors.username = usernameError
  if (passwordError) errors.password = passwordError

  return {
    values: values.username ? values : initialValues,
    errors: errors,
  }
}

export default resolver
