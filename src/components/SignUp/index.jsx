import React from 'react'
import { Link } from 'react-router-dom'
import styles from './styles.module.scss'

const SignUp = () => (
  <div className={styles.container}>
    <div className={styles.title}>Sign up</div>
    <form autoComplete="off">
      <div className={styles.input_section}>
        <input className={styles.input} type="text" placeholder="First Name" />
        <input className={styles.input} type="text" placeholder="Last Name" />
        <input className={styles.input} type="email" placeholder="Email" />
        <input className={styles.input} type="password" placeholder="Password" />
      </div>
      <div className={styles.link_wrapper}>
        <Link className={styles.forgot_pass} to="/">
          <input type="checkbox" /> I agree to the Terms of Use
        </Link>
      </div>
      <input className={styles.button} type="submit" value="Continue" />
    </form>
    <div className={styles.subtitle}>
      Already have an account? <Link to="/">Click here</Link> to sign in.
    </div>
  </div>
)

export default SignUp
