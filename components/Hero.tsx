import styles from './hero.module.css'
import Image from 'next/image'
import profilePic from '../public/rakesh.jpg'
import Button from './button/Button'

export default function Hero() {
    return (
        <div className={styles.hero}>
<div className={styles.hero__container}>
            <div className={styles.hero__about__container}>
                <h1 className={styles.hero__title}>Hello, I’m 
                    <span className={styles.hero__title__span}> Rakesh Kumar</span></h1>
                    <p className={styles.hero__para}>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Elit at imperdiet dui accumsan. Amet luctus venenatis lectus magna fringilla urna porttitor.
                    </p>
                    <div className={styles.row}>
                        <Button color='black'>Say hello!</Button>
                    <Button background='transparent' color='black' borderColor='black' >View all works</Button>
                </div>
                    <div className={styles.hero__cards}>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>15 Y.</h3>
                            <p className={styles.card__para}>Experience</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>250 +</h3>
                            <p className={styles.card__para}>Project Completed</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>14</h3>
                            <p className={styles.card__para}>Paper published</p>
                        </div>
                </div>  
            </div>
            <div className={styles.hero__img__container}>
                <Image src={profilePic} alt='profile pic' className={styles.hero__img} />
            </div>
        </div>
        </div>
        
    )
}