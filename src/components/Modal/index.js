/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import Cross from 'assets/close-cross.svg'
import { createPortal } from 'react-dom'
import styles from './styles.module.scss'

const modalElement = document.getElementById('modal-root')

function Modal({ children, defaultOpened = false }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => setIsOpen(false), [])

  useImperativeHandle(
    ref,
    () => ({
      open: () => setIsOpen(true),
      close,
    }),
    [close],
  )

  const handleEscape = useCallback(
    (event) => {
      if (event.keyCode === 27) close()
    },
    [close],
  )

  useEffect(() => {
    if (isOpen) document.addEventListener('keydown', handleEscape, false)
    return () => {
      document.removeEventListener('keydown', handleEscape, false)
    }
  }, [handleEscape, isOpen])

  return createPortal(
    isOpen ? (
      <div className={styles.modal}>
        <div className={styles['modal-overlay']} onClick={close} />
        <div role="button" className={styles['modal-close']} aria-label="close" onClick={close}>
          <img src={Cross} alt="close" />
        </div>
        <div className={styles['modal-body']}>
          <div className={styles.tint} />
          {children}
        </div>
      </div>
    ) : null,
    modalElement,
  )
}

export default forwardRef(Modal)
