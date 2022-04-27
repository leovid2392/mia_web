import React, { useState, useEffect, useContext } from 'react'
import { TaskContext } from '../context/taskContext'
import Image from 'next/image'

import slide1 from '../public/images/bodas-1_small500x750.jpg'
import slide2 from '../public/images/mia-4744_small500x750.jpg'

import styles from '../styles/Hero.module.css'

const Hero = ({ sliderData }) => {
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

  const { isScreenWide } = useContext(TaskContext)
  console.log(isScreenWide)
  return (
    <section className={styles.sliderContainer}>
      {events.map((item, itemIndex) => {
        const { id, image, image2 } = item
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
          </article>
        )
      })}
    </section>
  )
}

export default Hero
// import styles from '../styles/Hero.module.css'
// import Image from 'next/image'
// import hero1 from '../public/images/mia-5918_small500x750.jpg'

// export default function Hero() {
//   return (
//     <section className={styles.container}>
//       <Image src={hero1} width={320} height={480} layout='responsive'></Image>
//     </section>
//   )
// }
