import React from 'react'
import cs from './NavItem.module.css'

const NavItem = (props) => {
  return (
    <li className={cs.NavItem}>
        {props.children}
    </li>
  )
}

export default NavItem