import Skill from '@/components/Skill'
import styles from './page.module.css'
import AboutComponent from '@/components/About'
import Image from 'next/image'
import SocialLink from '@/components/Link/SocialLink'
import profilePic from '../../public/rakesh.jpg'

export default function About() {

    const educations = [{
        title: 'Anna University',
        para: 'Doctor of Philosophy in Information and Communication Eng, Ph.D',
        date: 'Jan 2016 – May 2023'
    },
    {
        title: 'Anna University',
        para: 'Master of Engineering in Computer Science Engineering (with Specialization in Networks),M.Eng',
        date: 'Jun 2013 – Apr 2015'
        },
        {
            title: 'Anna University',
            para: 'Bachelor of Engineering in Computer Science,B.Eng.',
            date: 'July 2008 – May 2011'
        }
    ]

    const works = [
        {
            title: 'Assistant Professor cum CSRC Coordinator ',
            para: 'Department of Computer Science and Engineering/Rajalakshmi Engineering College',
            date: 'Mar 2023–Present'
        },
        {
            title: 'Full-Time Researcher ',
            para: 'Centre For Research/ Dept of ECE,Veltech Multitech Dr.Rangarajan Dr.Sakunthala Engineering College <br/>Avadi,Chennai• Developed a CNN model to test Myocardial Infraction<br/>• Explored ways to visualize and send a daily reports to supervisors.<br/>• Maintained and established laboratory setup.<br/>• Contributed to the writing of research grants<br/>• Explored ways to collaboration with Industries and Academicians<br/>• Ability to work independently to achieve research goals.<br/>',
            date: 'Jan 2016–Mar 2023'
        },
        {
            title: 'PGT-Teaching Assistant',
            para: ' Computer Science Teacher/Daniel Thomas Mat Hr. Sec School',
            date: 'Nov 2011 – Mar 2013'
        },
    ]

    return (
        <div className={styles.about}>
            <div className={styles.about__container}>
                <AboutComponent about={true} />
                <div className={styles.about__cards}>
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
                <div className={styles.about__detail__container}>
                    <div className={styles.about__work__container}>
                        <h2 className={styles.about__header}>Education</h2>
                        {educations.map((data) => {
                            return (
                                <div className={styles.detail__card}>
                                <div>
                                        <h3 className={styles.detail__card__title}>{data.title}</h3>
                                        <p className={styles.detail__card__para}>{data.para}</p>
                                </div>
                                    <p className={styles.detail__card__date}>{data.date}</p>
                            </div>
                            )
                        })}
                       
                    </div>
                    <div className={styles.about__work__container}>
                        <h2 className={styles.about__header}>Work Experience</h2>
                        {works.map((data) => {
                            return (
                                <div className={styles.detail__card}>
                                <div>
                                        <h3 className={styles.detail__card__title}>{data.title}</h3>
                                        <p className={styles.detail__card__para}>{data.para}</p>
                                </div>
                                    <p className={styles.detail__card__date}>{data.date}</p>
                            </div>
                            )
                        })}
                    </div>
                </div>
                <Skill />
                <div className={styles.follow__container}>
                    <Image src={profilePic} alt='i am rakesh' className={styles.follow__img}/>
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