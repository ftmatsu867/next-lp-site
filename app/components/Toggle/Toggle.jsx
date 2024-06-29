import React from 'react'
import styles from "@/app/components/Toggle/Toggle.module.scss"

const Toggle = ({isOpen}) => {
  return (
    <nav className={isOpen?styles.openToggle:styles.toggle}>
      <ul className={styles.ul}>
        <li>Home</li>
        <li>Lineup</li>
        <li>About</li>
        <li>Detail</li>
        <li>Contact</li>
      </ul>
    </nav>
  )
}

export default Toggle