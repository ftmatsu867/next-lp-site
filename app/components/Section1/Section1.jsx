import React from 'react'
import styles from "@/app/components/Section1/Section1.module.scss"
const Section1 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.mainArea}>
        <h1 className={styles.title}>Another World</h1>
        <span className={styles.subTitle}>~Fantasy Story~</span>
      </div>
    </section>
  )
}

export default Section1