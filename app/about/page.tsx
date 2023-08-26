import Skill from '@/components/home/Skill'
import styles from './page.module.css'
import AboutComponent from '@/components/home/About'
import Image from 'next/image'
import SocialLink from '@/components/Link/SocialLink'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'
import { urlForImage }from '@/lib/image'
import PortableText from 'react-portable-text'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'

const query = groq`
    *[_type=='author'][0]
`
export default async function About() {
    const about:Author = await client.fetch(query)
    const { education, work, name, mainImage, paperPublished, projectCompleted, experience, skills } = about
    
    return (
        <div className={styles.about}>
            <div className={styles.about__container}>
                <ScrollAnimation style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }} > 
                    <AboutComponent about={true} />
                <div className={styles.about__cards}>
                        <div className={styles.card}>
                        <h3 className={styles.card__title}>{experience}</h3>
                            <p className={styles.card__para}>Experience</p>
                        </div>
                        <div className={styles.card}>
                            <h3 className={styles.card__title}>{projectCompleted} +</h3>
                            <p className={styles.card__para}>Project Completed</p>
                        </div>
                        <div className={styles.card}>
                        <h3 className={styles.card__title}>{paperPublished}</h3>
                            <p className={styles.card__para}>Paper published</p>
                    </div>
                </div>
                </ScrollAnimation>

                <div className={styles.about__detail__container}>
                    <div className={styles.about__work__container}>
                        <h2 className={styles.about__header}>Education</h2>
                        {education.map((data, index) => {
                            return (
                                <ScrollAnimation delay={index * 0.1} style={{height: '100%'}}>
                                <div className={styles.detail__card} key={index}>
                                <div>
                                        <h3 className={styles.detail__card__title}>{data.university}</h3>
                                        <p className={styles.detail__card__para}>{data.degree}</p>
                                </div>
                                    <p className={styles.detail__card__date}>{data.timeSpan}</p>
                            </div>
                                </ScrollAnimation>
                                
                            )
                        })}
                       
                    </div>
                    <div className={styles.about__work__container}>
                        <h2 className={styles.about__header}>Work Experience</h2>
                        {work.map((data, index) => {
                            return (
                                <ScrollAnimation delay={index * 0.1} style={{height: '100%'}}>
<div className={styles.detail__card} key={index}>
                                <div>
                                        <h3 className={styles.detail__card__title}>{data.designation}</h3>
                                        <PortableText content={data.workAt} className={styles.detail__card__para} serializers={{
                        normal: ({ children }: { children: string }) => {
                                if (children[0].length > 0)
                                  return <p className={styles.about__para}>{children}</p>
                            }
                                }}/>
                                </div>
                                    <p className={styles.detail__card__date}>{data.timeSpan}</p>
                            </div>
                                </ScrollAnimation>
                                
                            )
                        })}
                    </div>
                </div>
                <Skill skills={skills} />
                
                <div className={styles.follow__container}>
                    <div className={styles.follow__img__container}>
                    <Image src={urlForImage(mainImage).url()} fill alt='i am rakesh' className={styles.follow__img}/>
                    </div>
                    
                    <div className={styles.follow}>
                        <h3 className={styles.follow__title}>Follow me</h3>
                        <p className={styles.follow__para}>I am rakesh kumar who works with startup to build brands </p>
                        <SocialLink color='white'/>
                        </div>                 
                </div>         
            </div>
        </div>
    )
}