import styles from './page.module.css'
import Hero from '../components/Hero'
import About from '../components/About'
import Project from '../components/Project'
import Skill from '../components/Skill'
import Testimonial from '../components/Testimonial'
import Contact from '../components/Contact'

export default function Home() {
  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <Hero />
        <Project/>
        <About />
        <Testimonial />
        <Contact/>
      </div>
</div>
  )
}
