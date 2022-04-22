import styles from '../styles/MenuItems.module.css'
import Image from 'next/image'

export default function MenuItems({ title, data }) {
  return (
    <section>
      <h2>{title}</h2>
      {data.map((item) => {
        const { id, itemName, description, price } = item
        return (
          <article key={id}>
            <div>
              <h3>{itemName}</h3>
              <p>{description}</p>
            </div>
            <p>{price}</p>
          </article>
        )
      })}
    </section>
  )
}
