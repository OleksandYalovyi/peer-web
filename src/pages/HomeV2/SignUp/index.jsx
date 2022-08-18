import React, { useState } from 'react'
import Select from 'react-select'
import classNames from 'classnames'
import styles from './styles.module.scss'

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState(null)

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        Sign up for exclusive access
        <br />
        to product releases.
      </h1>

      <form name="signup" onSubmit={onSubmit} className={styles.form}>
        <input
          className={classNames(styles.field, { [styles.field_fill]: name })}
          type="text"
          name="name"
          value={name}
          placeholder="Name*"
          onChange={(e) => setName(e.currentTarget.value)}
        />

        <input
          className={classNames(styles.field, { [styles.field_fill]: email })}
          type="email"
          name="email"
          value={email}
          placeholder="Email*"
          onChange={(e) => setEmail(e.currentTarget.value)}
        />

        <Select
          className={classNames(styles.field__select, { [styles.field_fill]: location })}
          styles={{
            control: (_styles, { data, isFocused }) => ({
              ..._styles,
              backgroundColor: 'transparent',
              border: 0,
              borderRadius: 0,
              boxShadow: 'none',
              transition: '0.3s',
              borderBottom: `1px solid ${isFocused ? '#ffffff' : '#252525'}`,
              padding: '14px 8px 14px 18px',
            }),
            input: (_styles, { data, isFocused }) => ({
              ..._styles,
              backgroundColor: 'transparent',
            }),
            singleValue: (_styles, { data, isFocused }) => ({
              ..._styles,
              fontSize: 20,
              color: '#ffffff',
              lineHeight: 1.75,
              fontFamily: 'Graphik-Semibold, sans-serif',
              fontWeight: 500,
            }),
            placeholder: (_styles, { data, isFocused }) => ({
              ..._styles,
              color: isFocused ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Graphik, sans-serif',
              fontWeight: 300,
              fontSize: 16,
              lineHeight: 2.19,
            }),
            valueContainer: (_styles, { data, isFocused }) => ({
              ..._styles,
              padding: 0,
            }),
            option: (_styles, { data, isDisabled, isFocused, isSelected }) => ({
              ..._styles,
              backgroundColor: isFocused ? '#999999' : null,
              color: '#333333',
            }),
            indicatorSeparator: () => ({
              display: 'none',
            }),
          }}
          value={location}
          placeholder="Select a location"
          onChange={(v) => setLocation(v)}
          options={[{ value: 1, label: 1 }]}
        />

        <input type="submit" value="Submit" className={styles.field__submit} />
      </form>
    </div>
  )
}

export default SignUp
