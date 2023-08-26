import styles from './page.module.css'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Project from '@/components/home/Project'
import Testimonial from '@/components/home/Testimonial'
import Contact from '@/components/home/Contact'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'

const query = groq`
  *[_type=='author'][0]
`

export default async function  Home() {
  const author = await client.fetch(query)

  return (
    <div className={styles.home}>
      <div className={styles.home__container}>
        <ScrollAnimation>
          <Hero data={author} />
        </ScrollAnimation>
        <Project />
        <ScrollAnimation>
        <About />
        </ScrollAnimation>
        <Testimonial />
        <ScrollAnimation>
        <Contact  />
        </ScrollAnimation>
      </div>
</div>
  )
}
