import styles from './project.module.css'
import ProjectCard from './projectCard/Card' 
import projectImg1 from '../public/project/project-1.jpg'
import projectImg2 from '../public/project/project-2.jpg'
import projectImg3 from '../public/project/project-3.jpg'

const Project = () => {
     return (
         <div className={styles.project}>
             <div className={styles.project__container}>
                 <div className={styles.project__detail}>
                 <h2 className={styles.project__title}>Selected Projects</h2>
                 <p className={styles.project__para}>I do deep market research before starting any project the gives an unfair advantage to bring the best result</p>
                 </div>
                 <ProjectCard title='Breast Cancer Histopathology Image Classification' image={projectImg1} techstack={['Deep Learning', 'Ai']}/>
                 <ProjectCard title='Cervical Cancer Segmentation and Classification' image={projectImg3} techstack={['Deep Learning', 'Ai']} />
                 <ProjectCard title='Breast Cancer Histopathology Image Classification' image={projectImg1} techstack={['Deep Learning', 'Ai']}/>
             </div>
        </div>
    )
} 

export default Project