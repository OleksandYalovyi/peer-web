import React from 'react'
import styles from './styles.module.scss'

const data = [
  { name: 'Tony Tran', position: 'President and CEO' },
  { name: 'Kyle Hay', position: 'Chief Design Officer' },
  { name: 'Kishan Verma', position: 'Blockchain Architect' },
  { name: 'Heath Abbate', position: 'COO' },
  { name: 'Santiago Moriv', position: 'Sr. Art Director' },
  { name: 'Egor Yusov', position: 'CTO' },
  { name: 'Huy Le', position: 'Director, VN Regional' },
  { name: 'Long Le', position: 'Corporate Vice President' },
  { name: 'Milan Bulat', position: 'Head of Maps' },
  { name: 'Noah Zerkin', position: 'AR Lead' },
  { name: 'Stacey Tran', position: 'Program Director' },
]

const Creators = () => (
  <section className={styles.section}>
    {data.map(({ name, position }) => (
      <div className={styles.item}>
        <div>{name}</div>
        <div>{position}</div>
      </div>
    ))}
  </section>
)

export default React.memo(Creators)
