import React from 'react'
import styles from "@/app/components/Header/Header.module.scss"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars, faXmark } from '@fortawesome/free-solid-svg-icons'

const Header = ({ isOpen, setIsOpen }) => {
  const doClick = () => {
    setIsOpen(prev => !prev)
  }
  return (
    <header className={styles.header}>
      <h1 className={styles.pageTitle}>Story Games</h1>
      <nav className={styles.toggleArea}>
        {isOpen ?
          <FontAwesomeIcon icon={faXmark} className={styles.icon} onClick={doClick} /> :
          <FontAwesomeIcon icon={faBars} className={styles.icon} onClick={doClick} />

        }

      </nav>
    </header>
  )
}

export default Header