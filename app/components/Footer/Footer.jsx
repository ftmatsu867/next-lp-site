import React from 'react'
import styles from "@/app/components/Footer/Footer.module.scss"

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <span className={styles.coopName}>Story Games</span>
      <div className={styles.anotherArea}>
        <div className={styles.anotherContainer}>
          <span>About</span>
          <span>Service</span>
          <span>Features</span>
          <span>Pricing</span>
        </div>
        <div className={styles.anotherContainer}>
          <span>F&Q</span>
          <span>Privacy</span>
          <span>Policy</span>
          <span>Wrantry</span>
        </div>
        <div className={styles.anotherContainer}>
          <span>Adress</span>
          <span>Tel</span>
          <span>Email</span>
          <span>Document</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer