import React, { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../context/taskContext'
import Image from 'next/image'

import styles from '../styles/SliderEvents.module.css'
import TitleSection from './TitleSection'
import Paragraph from './Paragraph'

const SliderEvents = ({ sliderData }) => {
  const [events, setEvents] = useState(sliderData)
  const [index, setIndex] = useState(2)

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

  const { isScreenWide } = useContext(TaskContext)
  console.log(isScreenWide)
  return (
    <section className={styles.sliderContainer}>
      {events.map((item, itemIndex) => {
        const { id, image, image2, ticketFairy, eventName, date } = item
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
            <figure className={styles.imgContainer}>
              <Image
                // src={image2}
                src={image}
                layout='fill'
                objectFit='cover'
                objectPosition='center'
              />
            </figure>
            <div className={styles.textContainer}>
              <TitleSection text={eventName} />
              <Paragraph text={date} />
              <a
                href={ticketFairy}
                className={styles.btn}
                target='_blank'
                rel='noreferrer'
              >
                Compra tus boletos
              </a>
            </div>
          </article>
        )
      })}
    </section>
  )
}
export default SliderEvents
