import React from 'react'
import TeamItem from './TeamItem'
import teamMembers from './mock/index'
import styles from './team.module.scss'

function Team() {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>our team</h1>
      <p className={styles.subtitle}>We are a team of engineers, builders and makers.</p>
      <div className={styles.card}>
        {teamMembers.map((member) => (
          <TeamItem {...member} key={member.id} />
        ))}
      </div>
    </div>
  )
}

export default Team
