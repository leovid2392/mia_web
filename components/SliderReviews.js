import React, { useState, useEffect } from 'react'
import Image from 'next/image'

import styles from '../styles/SliderReviews.module.css'
import LinkBorder from './LinkBorder'

const SliderReviews = ({ sliderData }) => {
  const [events, setEvents] = useState(sliderData)
  const [index, setIndex] = useState(0)

  useEffect(() => {
    const lastIndex = events.length - 1
    if (index < 0) {
      setIndex(lastIndex)
    }
    if (index > lastIndex) {
      setIndex(0)
    }
  }, [index, events])

  useEffect(() => {
    let slider = setTimeout(() => {
      setIndex(index + 1)
    }, 6000)
    return () => {
      clearInterval(slider)
    }
  }, [index])

  // const handlePrevBtn = () => {
  //   setIndex(index - 1)
  // }

  // const handleNextBtn = () => {
  //   setIndex(index + 1)
  // }
  return (
    <section className={styles.sliderContainer}>
      {events.map((item, itemIndex) => {
        const { id, image, name, review1, review2, review3, review4, date } =
          item
        let position = 'nextSlide'

        if (itemIndex === index) {
          position = 'activeSlide'
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === events.length - 1)
        ) {
          position = 'lastSlide'
        }
        return (
          <article key={id} className={styles[`${position}`]}>
            {/* <figure className={styles.imgContainer}>
              <Image
                src={image}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </figure> */}
            <p className={styles.name}>{name}</p>
            <p className={styles.review}>{date}</p>
            <p className={styles.review}>{review1}</p>
            <p className={styles.review}>{review2}</p>
            <p className={styles.review}>{review3}</p>
            <p className={styles.review}>{review4}</p>
            {/* <a href={linkComment} className={styles.commentLink}>
              Ir a TripAdvisor
            </a> */}
          </article>
        )
      })}
    </section>
  )
}

export default SliderReviews
