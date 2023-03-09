import React, { memo } from 'react'
import { Link, LinkProps } from 'react-router-dom'
import classes from './MainLink.module.scss'
import ArrowIcon from 'remixicon-react/ArrowRightLineIcon'
import { ICON_SIZE } from '../../shared/variables'

interface Props extends LinkProps, React.RefAttributes<HTMLAnchorElement> {
  children: React.ReactNode
}

const MainLink: React.FC<Props> = ({ className, children, ...rest }) => {
  const fullClassName = `${classes['main-link']} ${className ?? ''}`

  return (
    <Link className={fullClassName} {...rest}>
      {children}
      <ArrowIcon className={classes['main-link__svg']} size={ICON_SIZE} />
    </Link>
  )
}

export default memo(MainLink)
