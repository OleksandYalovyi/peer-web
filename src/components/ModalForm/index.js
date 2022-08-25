/* eslint-disable jsx-a11y/interactive-supports-focus */
import React, { useEffect, useImperativeHandle, useState, forwardRef, useCallback } from 'react'
import { createPortal } from 'react-dom'
import closeBtn from 'assets/images/x.svg'
import styles from './styles.module.scss'

const modalElement = document.getElementById('modal-root')

function Modal({ children, defaultOpened = false, handleClose }, ref) {
  const [isOpen, setIsOpen] = useState(defaultOpened)

  const close = useCallback(() => {
    handleClose()
    setIsOpen(false)
  }, [])

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
    setIsOpen(defaultOpened)
  }, [defaultOpened])
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
        <div className={styles['modal-body']}>
          <div className={styles.tint} />
          <div className={styles.children}>
            <div className={styles.close} onClick={() => handleClose()}>
              <img src={closeBtn} alt="" />
            </div>
            {children}
          </div>
        </div>
      </div>
    ) : null,
    modalElement,
  )
}

export default forwardRef(Modal)
