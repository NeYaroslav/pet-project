import React, { memo } from 'react'
import classes from './MainButton.module.scss'

interface Props extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

const MainButton: React.FC<Props> = ({ children, className, ...rest }) => {
  const fullClassName = `${classes['main-button']} ${className ?? ''}`

  return (
    <button className={fullClassName} {...rest}>
      {children}
    </button>
  )
}

export default memo(MainButton)
