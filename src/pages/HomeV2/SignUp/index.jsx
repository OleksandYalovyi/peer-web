/* eslint-disable react/prop-types */
/* eslint-disable react/no-this-in-sfc */
/* eslint-disable jsx-a11y/alt-text */

import React, { useMemo, useState } from 'react'
import Select from 'react-select'
import classNames from 'classnames'
import Ripples from 'react-ripples'
import DropdownIndicator from 'assets/images/home/dropdownindicator.svg'
import { countries } from 'country-data'
import styles from './styles.module.scss'

const SubmitButton = ({ disabled, ...props }) =>
  disabled ? (
    <input
      {...props}
      type="submit"
      value="Submit"
      className={classNames(styles.field__submit, {
        [styles.active]: false,
      })}
    />
  ) : (
    <Ripples during="1400" color="rgba(255, 255, 255, .1)">
      <input
        {...props}
        type="submit"
        value="Submit"
        className={classNames(styles.field__submit, {
          [styles.active]: true,
        })}
      />
    </Ripples>
  )

const SignUp = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [location, setLocation] = useState(null)

  const selectCountries = useMemo(
    () =>
      Object.keys(countries.all).map((c) => ({
        value: countries.all[c].name,
        label: countries.all[c].name,
      })),
    [countries],
  )

  return (
    <div
      className={classNames(
        styles.container,
        'ml-form-embedContainer ml-subscribe-form ml-subscribe-form-1241497',
      )}
      id="mlb2-1241497"
    >
      <h1 className={styles.title}>
        Sign up for exclusive access
        <br />
        to product releases.
      </h1>

      <form
        className={classNames(styles.form, 'ml-block-form', 'row-form')}
        autoComplete="off"
        action="https://assets.mailerlite.com/jsonp/55950/forms/64430855067534460/subscribe"
        data-code=""
        method="post"
        target="_blank"
      >
        <input
          className={classNames(styles.field, { [styles.field_fill]: name }, 'form-control')}
          type="text"
          value={name}
          placeholder="Name*"
          autoComplete="off"
          aria-invalid="false"
          aria-haspopup="false"
          spellCheck="false"
          onChange={(e) => setName(e.currentTarget.value)}
          aria-label="name"
          data-inputmask=""
          name="fields[name]"
        />

        <input
          className={classNames(styles.field, { [styles.field_fill]: email }, 'form-control')}
          type="email"
          value={email}
          placeholder="Email*"
          autoComplete="off"
          aria-invalid="false"
          aria-haspopup="false"
          spellCheck="false"
          onChange={(e) => setEmail(e.currentTarget.value)}
          aria-label="email"
          aria-required="true"
          data-inputmask=""
          name="fields[email]"
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
          className={classNames(
            styles.field__select,
            { [styles.field_fill]: location },
            'custom-select',
          )}
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
              color: isFocused ? '#ffffff' : 'rgba(255, 255, 255, 1)',
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
          options={selectCountries}
          name="fields[country]"
          aria-label="country"
          aria-required="true"
          autoComplete="new-location"
        />

        <input type="hidden" name="ml-submit" value="1" />

        <div className="ml-form-embedSubmit">
          <SubmitButton className="primary" disabled={!(name && email && location)} />

          <button disabled="disabled" style={{ display: 'none' }} type="button" className="loading">
            <div className="ml-form-embedSubmitLoad" />
            <span className="sr-only">Loading...</span>
          </button>
        </div>

        <input type="hidden" name="anticsrf" value="true" />
      </form>

      <div className="ml-form-successBody row-success" style={{ display: 'none' }}>
        <div className="ml-form-successContent">
          <h4>Thank you!</h4>

          <p>You have successfully joined our subscriber list.</p>
        </div>
      </div>
    </div>
  )
}

export default SignUp
