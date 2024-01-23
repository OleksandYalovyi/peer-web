import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import cls from 'classnames'
import PropTypes from 'prop-types'

import styles from './nav_items.module.scss'

function NavItems({ links, onClick, setLinks, setIsOpenPopUp }) {
  const navigate = useNavigate()

  const clickHandler = () => {
    console.log('clicked')
  }

  return (
    <div className={styles.link_wrapper}>
      {links.map((link) =>
        link.router ? (
          <NavLink
            state={link.title === 'wonka' ? { step: 'mainStep' } : null}
            key={link.title}
            to={link?.to}
            onClick={(e) => clickHandler(e, link)}
            className={cls(styles.link)}
          >
            <span>{link.title}</span>
          </NavLink>
        ) : (
          <a
            key={link.title}
            onClick={(e) => clickHandler(e, link)}
            className={cls(styles.link)}
            href={link?.to}
          >
            {link.title}
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
  setLinks: PropTypes.func,
  setIsOpenPopUp: PropTypes.func,
}

export default NavItems
