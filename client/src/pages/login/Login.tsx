import React from 'react'
import { LoginForm } from '../../components/login'
import { MainLink } from '../../ui'
import logo from '../../assets/logo.svg'
import classes from './Login.module.scss'

const Login: React.FC = () => {
  return (
    <main className={classes.login}>
      <div className={`${classes.login__container} container-g`}>
        <div className={classes.login__logo}>
          <img src={logo} alt="" />
        </div>
        <LoginForm />
        <p className={classes['login__link-wrapper']}>
          Do not you have an account yet?{' '}
          <MainLink to="/register">Register</MainLink>
        </p>
      </div>
    </main>
  )
}

export default Login
