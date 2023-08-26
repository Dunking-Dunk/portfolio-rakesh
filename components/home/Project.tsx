import styles from './project.module.css'
import ProjectCard from '../projectCard/Card' 
import {client} from '@/lib/client'
import { groq } from 'next-sanity'


const query = groq`
*[_type=='author'][0] {
  selectedProject[]->
}
`
type Props = {
    selectedProject: Project[]
}

const Project = async() => {
    const projects:Props = await client.fetch(query)

     return (
         <div className={styles.project}>
             <div className={styles.project__container}>
                 <div className={styles.project__detail}>
                 <h2 className={styles.project__title}>Selected Projects</h2>
                 <p className={styles.project__para}>I do deep market research before starting any project the gives an unfair advantage to bring the best result</p>
                 </div>
                {projects.selectedProject.map((project, index) => <ProjectCard data={project} key={index}/>)}
             </div>
        </div>
    )
} 

export default Project