import styles from './card.module.css'
import Image from 'next/image'
import HoverAnimation from '../hoverAnimation/HoverAnimation'

type projectCard = {
    title: string,
    techstack: string[],
    image?: any
}

const Card = ({ title, techstack, image }: projectCard) => {
    return (<HoverAnimation hoverTitle='View Case Study'>
            <div className={styles.project__card}>
        <Image alt='this an image' src={image} className={styles.project__img}/>
        <div className={styles.project__detail__container}>
        <h3 className={styles.title}>{title}</h3>
        <h5 className={styles.header}>Technology</h5>
        <div className={styles.tech__container}>
            {techstack?.map((tech, index) => <p className={styles.tech} key={index}>{tech}</p>)}
        </div>
        </div>
    </div>
    </HoverAnimation>)
}

export default Card