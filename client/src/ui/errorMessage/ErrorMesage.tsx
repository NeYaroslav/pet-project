import React, { memo } from 'react'
import classes from './ErrorMesage.module.scss'
import ErrorIcon from 'remixicon-react/ErrorWarningLineIcon'
import { ICON_SIZE } from '../../shared/variables'

interface Props extends React.HTMLAttributes<HTMLParagraphElement> {
  children: React.ReactNode
}

const ErrorMesage: React.FC<Props> = ({ children, className, ...rest }) => {
  const fullClassName = `${classes.error} ${className ?? ''}`

  return (
    <p className={fullClassName} {...rest}>
      <ErrorIcon size={ICON_SIZE} className={classes.error__svg} />
      {children}
    </p>
  )
}

export default memo(ErrorMesage)
