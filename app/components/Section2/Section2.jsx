import React from 'react'
import styles from "@/app/components/Section2/Section2.module.scss"
import { itemData } from '@/app/components/Section2/Item/ItemData'
import Item from '@/app/components/Section2/Item/Item'

const Section2 = () => {
  return (
    <section className={styles.container}>
      <h2 className={styles.sectionTitle}>Game Lineup</h2>
      <h3 className={styles.subTitle}>todays sales ranking</h3>
      <ul className={styles.itemArea}>
        {itemData.map((item) => {
          return (
            <Item key={item.title} item={item} />
          )
        })}
      </ul>
    </section>
  )
}

export default Section2