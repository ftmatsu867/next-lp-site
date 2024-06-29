import React from 'react'
import styles from "@/app/components/Section4/Section4.module.scss"
import Image from 'next/image'

const Item = ({ item }) => {
    return (
        <li key={item.name} className={styles.device}>
            <Image alt='image' src={item.src} fill style={{ objectFit: "cover" }} sizes='100%' />
            <span className={styles.deviceName}>{item.name}</span>
        </li>
    )
}

export default Item
