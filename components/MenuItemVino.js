import Image from 'next/image'
import { FaCocktail, FaWineBottle } from 'react-icons/fa'
import styles from '../styles/MenuItemsVino.module.css'

export default function MenuItemsVino({ title, size, data }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titleSection}>{title}</h2>
      <p>{size}</p>
      <div className={styles.iconContainer}>
        <p className={styles.cupIcon}>USD</p>
        <p className={styles.bottleIcon}>MXN</p>
        {/* <FaCocktail className={styles.cupIcon} />
        <FaWineBottle className={styles.bottleIcon} /> */}
      </div>
      {data.map((item) => {
        const { id, itemName, description, priceUs, priceMxn } = item
        return (
          <article key={id} className={styles.itemsContainer}>
            <div className={styles.text}>
              <h3 className={styles.title}>{itemName}</h3>
              <p className={styles.description}>{description}</p>
            </div>
            <p className={styles.price}>{priceUs ? `$${priceUs}` : null}</p>
            <p className={styles.bottlePrice}>
              {priceMxn ? `$${priceMxn}` : null}
            </p>
          </article>
        )
      })}
    </section>
  )
}
