/* eslint-disable react/prop-types */
import React, { useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import T from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import { NavLink } from 'react-router-dom'
import styles from './accordion.module.scss'
import MobileMenuLogo from '../../../../Icons/MobileMenuLogo'

const data = [
  {
    title: 'Community',
    links: [
      { name: 'Peer Community', to: '/' },
      { name: 'Docs', to: '/' },
    ],
  },

  {
    title: 'Products',
    links: [
      { name: 'Peer', to: '/placeholder', logo: 'PEER', withRouter: true },
      { name: 'Zen', to: '/zen', logo: 'ZEN' },
      { name: 'Omni', to: 'https://peermultichain.com', logo: 'OMNI' },
      { name: 'Index', to: '/placeholder', logo: 'INDEX', withRouter: true },
      { name: 'Labs', to: 'https://labs.peer.inc', logo: 'LABS' },
    ],
  },

  {
    title: 'About',
    links: [
      { name: 'Team', to: '/team', isInternal: true },
      { name: 'Brand Book', to: '/brandbook' },
      { name: 'White Papers', to: '/whitepapers' },
    ],
  },
]

const Dropdown = ({ list, children, isShow, onClose, burgerRef }) => {
  const listRef = useRef(null)
  const [expanded, setExpanded] = useState('')
  const [clickedLink, setClickedLink] = useState('')

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        listRef.current &&
        !listRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        onClose()
        setExpanded('')
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [listRef])

  const Link = ({ to, withRouter, isInternal, ...linkProps }) =>
    withRouter ? (
      <NavLink to={to} onClick={onClose} className={styles.link}>
        {linkProps.children}
      </NavLink>
    ) : (
      <a
        href={to}
        target={isInternal ? '_self' : '_blank'}
        className={styles.link}
        rel="noreferrer"
      >
        {linkProps.children}
      </a>
    )

  const Accordion = styled((props) => (
    <MuiAccordion disableGutters elevation={0} square {...props} />
  ))(({ theme }) => ({
    backgroundColor: 'black',
    '&:not(:last-child)': {
      borderBottom: '6.66px',
    },
    '&:before': {
      display: 'none',
    },
  }))

  const AccordionSummary = styled((props) => <MuiAccordionSummary {...props} />)(({ theme }) => ({
    backgroundColor: 'black',
    color: 'white',
    '& .MuiAccordionSummary-expandIconWrapper.Mui-expanded': {
      transform: 'rotate(180deg)',
      color: 'white',
    },
    '& .MuiAccordionSummary-content': {
      //   marginLeft: theme.spacing(1),
    },
  }))

  const AccordionDetails = styled(MuiAccordionDetails)(({ theme }) => ({
    paddingLeft: theme.spacing(5),
    backgroundColor: 'black',
    color: 'white',
  }))

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false)
  }

  return (
    <div className={cls(styles.container, { [styles.isShow]: isShow })} ref={listRef}>
      {children}
      <div className={cls(styles.dropdown, styles.links)}>
        {data.map(({ title, links }) => (
          <Accordion
            key={title}
            expanded={expanded === title}
            className={styles.accordion}
            onChange={handleChange(title)}
          >
            <AccordionSummary
              className={styles.accordionHeader}
              id="Accordionheader"
              expandIcon={
                expanded === title ? (
                  <ExpandMoreIcon sx={{ fontSize: '1.8rem', color: 'white' }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: '1.8rem', color: '#2e2e2e' }} />
                )
              }
            >
              <Typography className={styles.mui_typography}>{title}</Typography>
            </AccordionSummary>
            {links.map(({ name, to, logo, withRouter, isInternal }) => (
              <div
                onClick={() => {
                  setClickedLink(logo)
                  setTimeout(() => setClickedLink(''), 500)
                }}
              >
                <Link to={to} withRouter={withRouter} isInternal={isInternal}>
                  <AccordionDetails className={styles.details}>
                    <Typography className={styles.mui_details_typography}>
                      <div
                        className={cls(styles.link_wrapper, clickedLink === logo && styles.clicked)}
                      >
                        {title === 'Products' && (
                          <MobileMenuLogo type={logo} isHovered={clickedLink === logo} />
                        )}
                        {name}
                      </div>
                    </Typography>
                  </AccordionDetails>
                </Link>
              </div>
            ))}
          </Accordion>
        ))}
      </div>
    </div>
  )
}

export default React.memo(Dropdown)

const ItemShape = {
  text: T.string,
  href: T.text,
  onClick: T.func,
}

Dropdown.propTypes = {
  list: T.arrayOf(T.shape(ItemShape)),
  children: T.node,
  isShow: T.bool,
  onClose: T.func,
  burgerRef: T.element,
}
