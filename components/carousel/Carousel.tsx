"use client"
import styles from './Carousel.module.css'
import React, { ReactNode, useCallback } from 'react'
import useEmblaCarousel, { EmblaOptionsType } from 'embla-carousel-react'
import {AiOutlineLeft,AiOutlineRight } from 'react-icons/ai'

type PropType = {
  options?: EmblaOptionsType
  slides: ReactNode[]
}

 const EmblaCarousel = (props: PropType) => {
    const { options, slides } = props
     const [emblaRef, emblaApi] = useEmblaCarousel(options)

     const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
      }, [emblaApi])
    
      const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
      }, [emblaApi])
     
     return (
         <div className={styles.container}>
             <div className={styles.embla} ref={emblaRef}>
            <div className={styles.embla__container}>
                {slides.map((slide, index) => (
                    <div className={styles.embla__slide} key={index}>
                        {slide}
                    </div>
                ))}
            </div>
                 <button className={styles.embla__prev} onClick={scrollPrev}>
                     <AiOutlineLeft className={styles.icon} />
      </button>
                 <button className={styles.embla__next} onClick={scrollNext}>
                 <AiOutlineRight  className={styles.icon}/>
      </button>
        </div>
        
        </div>
    )
}

export default EmblaCarousel