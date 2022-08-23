/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from 'react'
import Select from 'react-select'
import classNames from 'classnames'
import Ripples from 'react-ripples'
import DropdownIndicator from 'assets/images/home/dropdownindicator.svg'
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

      <form name="signup" onSubmit={onSubmit} className={styles.form} autoComplete="off">
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
          components={{
            DropdownIndicator: () => (
              <img
                style={{
                  filter: 'invert(1)',
                }}
                src={DropdownIndicator}
              />
            ),
          }}
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
              '&:hover': {
                borderBottom: `1px solid ${isFocused ? '#ffffff' : '#252525'}`,
              },
              padding: '14px 14px 14px 14px',
              '@media only screen and (max-width: 680px)': {
                ...styles['@media only screen and (max-width: 680px)'],
                padding: '14.33px 10.66px',
              },
            }),
            input: (_styles, { data, isFocused }) => ({
              ..._styles,
              opacity: 0,
            }),
            singleValue: (_styles, { data, isFocused }) => ({
              ..._styles,
              fontSize: 20,
              color: '#ffffff',
              lineHeight: 1.75,
              fontFamily: 'Graphik-Semibold, sans-serif',
              fontWeight: 500,
              '@media only screen and (max-width: 680px)': {
                ...styles['@media only screen and (max-width: 680px)'],
                fontSize: '14.66px',
              },
            }),
            placeholder: (_styles, { data, isFocused }) => ({
              ..._styles,
              color: isFocused ? '#ffffff' : 'rgba(255, 255, 255, 0.3)',
              fontFamily: 'Graphik, sans-serif',
              fontWeight: 300,
              fontSize: 16,
              '@media only screen and (max-width: 680px)': {
                ...styles['@media only screen and (max-width: 680px)'],
                fontSize: '14.66px',
              },
            }),
            valueContainer: (_styles, { data, isFocused }) => ({
              ..._styles,
              padding: 0,
              height: '35px',
              '@media only screen and (max-width: 680px)': {
                ...styles['@media only screen and (max-width: 680px)'],
                height: '23.3px',
              },
            }),
            menu: (_styles, { data, isFocused }) => ({
              ..._styles,
              backgroundColor: '#1a1a1a',
            }),
            option: (_styles, { data, isDisabled, isFocused, isSelected }) => ({
              ..._styles,
              backgroundColor: isSelected ? 'rgb(255 255 255 / 15%)' : null,
              color: '#ffffff',
              '&:hover': {
                backgroundColor: 'rgb(255 255 255 / 15%)',
              },
            }),
            indicatorSeparator: () => ({
              display: 'none',
            }),
            indicatorsContainer: (_styles, { data, isFocused }) => ({
              ..._styles,
              width: 7,
            }),
          }}
          value={location}
          placeholder="Select a location"
          onChange={(v) => setLocation(v)}
          options={[
            { value: 1, label: 1 },
            { value: 2, label: 2 },
            { value: 3, label: 3 },
            { value: 4, label: 4 },
            { value: 5, label: 5 },
          ]}
        />

        <Ripples during="1400" color="rgba(255, 255, 255, .1)">
          <input type="submit" value="Submit" className={styles.field__submit} />
        </Ripples>
      </form>
    </div>
  )
}

export default SignUp
