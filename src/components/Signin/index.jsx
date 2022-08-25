import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const SignIn = () => (
  <div className={styles.container}>
    <div className={styles.title}>Sign in to Peer</div>
    <form autoComplete="off">
      <div className={styles.input_section}>
        <input className={styles.input} type="email" placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Password" />
      </div>
      <div className={styles.link_wrapper}>
        <Link className={styles.forgot_pass} to="/">
          Forgot password?
        </Link>
      </div>
      <input className={styles.button} type="submit" value="Continue" />
    </form>
    <div className={styles.subtitle}>
      Don’t have an account? <Link to="/">Click here</Link> to sign up.
    </div>
  </div>
)

export default SignIn
