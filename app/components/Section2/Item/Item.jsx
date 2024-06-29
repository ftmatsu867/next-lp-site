import React from 'react'
import styles from "@/app/components/Section2/Section2.module.scss"
import Image from 'next/image'

const Item = ({item}) => {
    return (
        <li key={item.title} className={styles.item}>
            <div className={styles.imageArea}>
                <Image alt='image' src={item.src} fill style={{ objectFit: "cover" }} />
            </div>
            <h4 className={styles.gameTitle}>{item.title}</h4>
            <span className={styles.gameDescription}>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi qui iusto culpa omnis beatae.</span>
            <button className={styles.shopButton}>Shop</button>
        </li>
    )
}

export default Item