import styles from './page.module.css'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'
import ProjectCard from '@/components/projectCard/Card'
import { Suspense } from 'react'
import Loader from '@/components/loader/Loader'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'

const query = groq`
    *[_type=='project']
`

export default async function Projects() {
    const projects:Project[] = await client.fetch(query)
    return (
        <div className={styles.project}>
            <ScrollAnimation>
            <div className={styles.project__container}>
                <h1 className={styles.project__title}>All Projects</h1>
                <div className={styles.project__projects__container}>
                    {projects.map((project, index) => { 

                        return (<Suspense fallback={<Loader/>}>
                            <ProjectCard data={project} key={index}/>
                            </Suspense>)
                    })}
                </div>
            </div>
            </ScrollAnimation>
           
        </div>
    )
}