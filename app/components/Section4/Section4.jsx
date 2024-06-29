import React from 'react'
import styles from "@/app/components/Section4/Section4.module.scss"
import Image from 'next/image'
import { ItemData } from '@/app/components/Section4/Item/ItemData'
import Item from '@/app/components/Section4/Item/Item'

const Section4 = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Compatible models</h2>
      <h3 className={styles.subTitle}>List of compatible models</h3>
      <ul className={styles.deviceList}>
        {ItemData.map((item) => {
          return (
            <Item key={item.name} item={item} />
          )
        })}

      </ul>
    </section>
  )
}

export default Section4