import React, { useEffect, useRef, useState } from 'react'
import cls from 'classnames'
import T from 'prop-types'
import { styled } from '@mui/material/styles'
import MuiAccordion from '@mui/material/Accordion'
import MuiAccordionSummary from '@mui/material/AccordionSummary'
import MuiAccordionDetails from '@mui/material/AccordionDetails'
import Typography from '@mui/material/Typography'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore'
import styles from './accordion.module.scss'

const data = [
  {
    title: 'Community',
    links: [
      { name: 'Social', to: '/social' },
      { name: 'Development', to: '/development' },
      { name: 'Papers', to: '/papers' },
    ],
  },

  {
    title: 'Products',
    links: [
      { name: 'Peer Superapp', to: 'peersuperapp' },
      { name: 'Peer Blockchain', to: 'peerblockchain' },
      { name: 'Peer Labs', to: 'peerlabs' },
      { name: 'White Paper', to: 'whitepaper' },
    ],
  },

  {
    title: 'About',
    links: [
      { name: 'Team', to: '/team' },
      { name: 'Brand Book', to: '/brandbook' },
      { name: 'White Papers', to: '/whitepapers' },
    ],
  },
]

const Dropdown = ({ list, children, isShow, onClose, burgerRef }) => {
  const listRef = useRef(null)
  const [expanded, setExpanded] = React.useState('panel1')

  useEffect(() => {
    function handleClickOutside(event) {
      if (
        listRef.current &&
        !listRef.current.contains(event.target) &&
        burgerRef.current &&
        !burgerRef.current.contains(event.target)
      ) {
        onClose()
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [listRef])

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
            expanded={expanded === title}
            className={styles.accordion}
            onChange={handleChange(title)}
          >
            <AccordionSummary
              aria-controls=""
              className={styles.accordionHeader}
              id="Accordionheader"
              expandIcon={
                expanded === title ? (
                  <ExpandMoreIcon sx={{ fontSize: '1.2rem', color: 'white' }} />
                ) : (
                  <ExpandMoreIcon sx={{ fontSize: '1.2rem', color: '#2e2e2e' }} />
                )
              }
            >
              <Typography>{title}</Typography>
            </AccordionSummary>
            {links.map(({ name, to }) => (
              <a href={to} className={styles.link}>
                <AccordionDetails className={styles.details}>
                  <Typography>{name}</Typography>
                </AccordionDetails>
              </a>
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
