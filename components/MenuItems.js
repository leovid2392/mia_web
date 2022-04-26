import Image from 'next/image'
import styles from '../styles/MenuItems.module.css'

export default function MenuItems({ title, data }) {
  return (
    <section className={styles.container}>
      <h2 className={styles.titleSection}>{title}</h2>
      {data.map((item) => {
        const { id, itemName, description, price } = item
        return (
          <article key={id} className={styles.itemsContainer}>
            <div className={styles.text}>
              <h3 className={styles.title}>{itemName}</h3>
              <p className={styles.description}>{description}</p>
            </div>
            <p className={styles.price}>{`$ ${price}`}</p>
          </article>
        )
      })}
    </section>
  )
}
