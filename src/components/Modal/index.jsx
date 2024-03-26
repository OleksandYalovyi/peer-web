/* eslint-disable react/prop-types */
import React, { useEffect, useState, useRef, useCallback } from 'react'
import ReactDOM from 'react-dom'
import cn from 'classnames'
import styles from './modal.module.scss'

const popupElement = document.getElementById('popup')

function Modal({ children, className, open = false, onClose }) {
  const modalRef = useRef(null)
  const [visible, setVisible] = useState(false)

  const handleOutsideClick = useCallback(
    (e) => {
      if (modalRef.current && !modalRef.current.contains(e.target)) {
        onClose()
      }
    },
    [onClose],
  )

  useEffect(() => {
    document.addEventListener('click', handleOutsideClick)

    return () => {
      document.removeEventListener('click', handleOutsideClick)
    }
  }, [handleOutsideClick])

  useEffect(() => {
    setVisible(open)
  }, [open])

  return visible && popupElement
    ? ReactDOM.createPortal(
        <div className={styles.modalOverlay}>
          <div
            ref={modalRef}
            className={cn(styles.modalContent, className, { [styles.active]: visible })}
          >
            {children}
          </div>
        </div>,
        popupElement,
      )
    : null
}

export default Modal
