import Image from 'next/image'
import { FaCocktail, FaWineBottle } from 'react-icons/fa'
import styles from '../styles/MenuItemsDrinks.module.css'

export default function MenuItemsDrinks({ title, data }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titleSection}>{title}</h2>
      <div className={styles.iconContainer}>
        <FaCocktail className={styles.cupIcon} />
        <FaWineBottle className={styles.bottleIcon} />
      </div>
      {data.map((item) => {
        const { id, itemName, description, cupPrice, bottlePrice } = item
        return (
          <article key={id} className={styles.itemsContainer}>
            <div className={styles.text}>
              <h3 className={styles.title}>{itemName}</h3>
              <p className={styles.description}>{description}</p>
            </div>
            <p className={styles.price}>{cupPrice ? `$${cupPrice}` : null}</p>
            <p className={styles.bottlePrice}>
              {bottlePrice ? `$${bottlePrice}` : null}
            </p>
          </article>
        )
      })}
    </section>
  )
}
