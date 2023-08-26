import styles from './card.module.css'
import Image from 'next/image'
import HoverAnimation from '../hoverAnimation/HoverAnimation'
import { urlForImage } from '@/lib/image'

type projectCard = {
    data: Project
}

const Card = ({ data }: projectCard) => {
    return (<HoverAnimation hoverTitle='View Case Study' link={`/project/${data._id}`}>
            <div className={styles.project__card}>
        <Image alt='this an image' src={urlForImage(data.mainImage).url()} className={styles.project__img} width={1920} height={1080}/>
        <div className={styles.project__detail__container}>
        <h3 className={styles.title}>{data.title}</h3>
        <h5 className={styles.header}>Technology</h5>
        <div className={styles.tech__container}>
            {data.technology?.map((tech, index) => <p className={styles.tech} key={index}>{tech}</p>)}
        </div>
        </div>
    </div>
    </HoverAnimation>)
}

export default Card