import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import { MainButton, MainInput, ErrorMesage } from '../../../ui'
import resolver from './RegisterFormResolver'
import classes from './RegisterFrom.module.scss'

export interface FormFields {
  name: string
  username: string
  password: string
  confirmedPassword: string
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { confirmedPassword, name, password, username },
    },
  } = useForm<FormFields>({ resolver })

  const firstError =
    name?.message ??
    username?.message ??
    password?.message ??
    confirmedPassword?.message

  const submitHandler = handleSubmit((data) => data)

  return (
    <form className={classes['register-form']} onSubmit={submitHandler}>
      <h1 className={classes['register__title']}>Create a new account</h1>
      <MainInput placeholder="Name" {...register('name')} />
      <MainInput placeholder="Username" {...register('username')} />
      <MainInput
        placeholder="Password"
        {...register('password')}
        type="password"
      />
      <MainInput
        placeholder="Confirm password"
        {...register('confirmedPassword')}
        type="password"
      />
      {firstError && (
        <ErrorMesage className={classes['register-form__error']}>
          {firstError}
        </ErrorMesage>
      )}
      <MainButton className={classes['register-form__button']}>
        Register
      </MainButton>
    </form>
  )
}

export default memo(RegisterForm)
