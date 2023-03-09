import React from 'react'
import { RegisterForm } from '../../components/register'
import classes from './Register.module.scss'
import logo from '../../assets/logo.svg'
import { MainLink } from '../../ui'

const Register: React.FC = () => {
  return (
    <main className={classes.register}>
      <div className={`${classes.register__container} container-g`}>
        <div className={classes.register__logo}>
          <img src={logo} alt="" />
        </div>
        <RegisterForm />
        <p className={classes['register__link-wrapper']}>
          Do you already have an account? <MainLink to="/">log in</MainLink>
        </p>
      </div>
    </main>
  )
}

export default Register
