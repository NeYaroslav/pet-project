import React, { memo } from 'react'
import { useForm } from 'react-hook-form'
import { MainButton, MainInput, ErrorMesage } from '../../../ui'
import resolver from './LoginFormResolver'
import classes from './LoginForm.module.scss'

export interface FormFields {
  username: string
  password: string
}

const RegisterForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: {
      errors: { password, username },
    },
  } = useForm<FormFields>({ resolver })

  const firstError = username?.message ?? password?.message

  const submitHandler = handleSubmit((data) => data)

  return (
    <form className={classes['login-form']} onSubmit={submitHandler}>
      <h1 className={classes['login__title']}>Log in to your account</h1>
      <MainInput placeholder="Username" {...register('username')} />
      <MainInput
        placeholder="Password"
        {...register('password')}
        type="password"
      />
      {firstError && (
        <ErrorMesage className={classes['login-form__error']}>
          {firstError}
        </ErrorMesage>
      )}
      <MainButton className={classes['login-form__button']}>
        Log in
      </MainButton>
    </form>
  )
}

export default memo(RegisterForm)
