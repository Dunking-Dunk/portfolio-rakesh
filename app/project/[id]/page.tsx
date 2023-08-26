import styles from './page.module.css'
import Image from 'next/image'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'
import { urlForImage } from '@/lib/image'
import PortableText from '@/components/portableText/PortableText'

type Props = {
    params: {
        id: string
    }
}

const Project = async ({ params }: Props) => {
    const query = groq`
    *[_type=='project' && _id == '${params.id}'][0] 
    `
    const project:Project = await client.fetch(query)
    const {title,mainImage,description,technology, publishedAt, body} = project

    return (
        <div className={styles.project}>
            <div className={styles.project__container}>
                <h1 className={styles.project__title}>{title}</h1>
                <div className={styles.project__detail__container}>
                <p className={styles.project__detail__title}>independent Research </p>
                    <p className={styles.project__detail__title}>Collaboration with VIT University, India</p>
                </div> 
                <div className={styles.project__img__container}>
                <Image src={urlForImage(mainImage).url()} fill alt='this is project image' className={styles.project__main__img}/>
                </div>
         
                <div className={styles.project__about}>
                    <h2 className={styles.project__header}>About The Project</h2>
                    <p className={styles.project__para}>{description}</p>
                </div>
                <div className={styles.project__detail__container}>
                    {technology.map((tech, index) => <p className={styles.tech} key={index}>{tech}</p>)}
                </div>
                <div className={styles.project__body}>
                  <PortableText data={body}/>
                </div>
            </div>
        </div>
    )
}

export default Project