import React from 'react'
import { NavLink } from 'react-router-dom'
import cls from 'classnames'
import PropTypes from 'prop-types'

import styles from './nav_items.module.scss'

function NavItems({ links, onClick }) {
  return (
    <div className={styles.link_wrapper}>
      {links.map((link) =>
        link.router ? (
          <NavLink
            state={link.name === 'wonka' ? { step: 'mainStep' } : null}
            key={link.name}
            to={link?.to}
            onClick={onClick}
            className={cls(styles.link)}
          >
            <span>{link.name}</span>
          </NavLink>
        ) : (
          <a key={link.name} onClick={onClick} className={cls(styles.link)} href={link?.to}>
            {link.name}
          </a>
        ),
      )}
    </div>
  )
}

NavItems.propTypes = {
  links: PropTypes.arrayOf(
    PropTypes.shape({
      title: PropTypes.string,
      to: PropTypes.string,
      router: PropTypes.bool,
    }),
  ),
  onClick: PropTypes.func,
}

export default NavItems
