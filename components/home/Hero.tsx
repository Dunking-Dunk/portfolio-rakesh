import styles from './hero.module.css'
import Image from 'next/image'
import Button from '../button/Button'
import {urlForImage} from '@/lib/image'

type Props = {
    data: Author
}

export default function Hero({ data }: Props) {
    const { name, slug, mainImage, experience, projectCompleted, paperPublished } = data

        return (
            <div className={styles.hero}>
    <div className={styles.hero__container}>
                <div className={styles.hero__about__container}>
                    <h1 className={styles.hero__title}>Hello, I’m 
                            <span className={styles.hero__title__span}>{name}</span></h1>
                        <p className={styles.hero__para}>{slug?.current}
                        </p>
                        <div className={styles.row}>
                            <Button color='black'>Say hello!</Button>
                        <Button background='transparent' color='black' borderColor='black' >View all works</Button>
                    </div>
                        <div className={styles.hero__cards}>
                            <div className={styles.card}>
                                <h3 className={styles.card__title}>{experience}</h3>
                                <p className={styles.card__para}>Experience</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.card__title}>{projectCompleted}</h3>
                                <p className={styles.card__para}>Project Completed</p>
                            </div>
                            <div className={styles.card}>
                                <h3 className={styles.card__title}>{paperPublished}</h3>
                                <p className={styles.card__para}>Paper published</p>
                            </div>
                    </div>  
                </div>
                <div className={styles.hero__img__container}>
                        <Image className={styles.hero__img} src={urlForImage(mainImage).url()} alt='profile pic' width={550} height={660} />
                </div>
            </div>
            </div>
        )

}