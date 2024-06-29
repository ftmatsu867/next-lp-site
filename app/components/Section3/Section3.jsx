import React from 'react'
import styles from "@/app/components/Section3/Section3.module.scss"
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Section3 = () => {
  return (
    <section className={styles.container}>
      <div className={styles.rightArea}>
        <h2 className={styles.rightTitle}>About us</h2>
        <span className={styles.rightContent}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis minus eum at sed impedit.</span>
      </div>
      <div className={styles.leftArea}>
        <p className={styles.leftContent}>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        <div className={styles.detail}>
          <span className={styles.detailContent}>more detail</span>
          <FontAwesomeIcon icon={faArrowRight} className={styles.arrow} />
        </div>
      </div>
    </section>
  )
}

export default Section3