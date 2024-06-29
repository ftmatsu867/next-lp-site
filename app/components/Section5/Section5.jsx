import React from 'react'
import styles from "@/app/components/Section5/Section5.module.scss"

const Section5 = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.title}>Contact Form</h2>
      <form className={styles.form} action="#">
        <input className={styles.input} type="text" placeholder='your name' />
        <input className={styles.input} type="email" placeholder='your mail' />
        <input className={styles.input} type="tel" placeholder='your tel'/>
        <textarea className={styles.textArea} placeholder='message'></textarea>
        <button className={styles.button}>send</button>
      </form>
    </section>
  )
}

export default Section5