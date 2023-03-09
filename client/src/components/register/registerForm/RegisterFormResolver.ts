import { Resolver } from 'react-hook-form'
import {
  FormErrors,
  validateConfirmedPassword,
  validateFullName,
  validatePassword,
  validateUsername,
} from '../../../utils/validation'
import type { FormFields } from './RegisterForm'

const initialValues: FormFields = {
  confirmedPassword: '',
  name: '',
  password: '',
  username: '',
}

const resolver: Resolver<FormFields, FormErrors<FormFields>> = async (
  values
) => {
  const errors: FormErrors<FormFields> = {}

  const nameError = validateFullName(values.name)
  const usernameError = validateUsername(values.username)
  const passwordError = validatePassword(values.password)
  const confirmedPasswordError = validateConfirmedPassword(
    values.password,
    values.confirmedPassword
  )

  if (nameError) errors.name = nameError
  if (usernameError) errors.username = usernameError
  if (passwordError) errors.password = passwordError
  if (confirmedPasswordError) errors.confirmedPassword = confirmedPasswordError

  return {
    values: values.username ? values : initialValues,
    errors: errors,
  }
}

export default resolver
