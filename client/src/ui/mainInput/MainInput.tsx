import React, { forwardRef } from 'react'
import classes from './MainInput.module.scss'

interface Props extends React.InputHTMLAttributes<HTMLInputElement> {}

const MainInput = forwardRef<HTMLInputElement, Props>(
  ({ className, style, placeholder, ...rest }, ref) => {
    const fullClassName = `${classes['main-input']} ${className ?? ''}`

    return (
      <label style={style} className={fullClassName}>
        <span className={classes['main-input__placeholder']}>
          {placeholder}
        </span>
        <input
          className={classes['main-input__input']}
          type="text"
          ref={ref}
          {...rest}
        />
      </label>
    )
  }
)

export default MainInput
