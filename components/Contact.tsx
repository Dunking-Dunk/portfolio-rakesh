import styles from './contact.module.css'
import SocialLink from './Link/SocialLink'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import {FiArrowUpRight} from 'react-icons/fi'

const Contact = () => {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__container}>
                <div className={styles.contact__detail}>
                    <h3 className={styles.detail__header}>Let's Discuss your project</h3>
                    <p className={styles.detail__para}>Have a project in mind? Looking to partner or work toghter? Reach out throug the form i'll get back to you.</p>
                    <div className={styles.detail__card}>
                        <FaMapMarkerAlt className={styles.icon} />
                        <div className={styles.card__col}>
                            <p className={styles.card__header}>Address</p>
                            <h5 className={styles.card__val}>Chennai</h5>
                        </div>
                    </div>
                    <div className={styles.detail__card}>
                        <AiOutlineMail className={styles.icon} />
                        <div className={styles.card__col}>
                            <p className={styles.card__header}>My Email</p>
                            <h5 className={styles.card__val}>rakeshkumarmahendran@gmail.com</h5>
                        </div>
                    </div>
                    <div className={styles.detail__card}>
                        <IoIosCall className={styles.icon} />
                        <div className={styles.card__col}>
                            <p className={styles.card__header}>Call Me Now</p>
                            <h5 className={styles.card__val}>+91-9840627292</h5>
                        </div>
                    </div>
                    <p className={styles.detail__para}>I'm Rakesh Kumar, a tech enthusiast who works with students</p>
                    <SocialLink/>
                </div>
                <div className={styles.contact__email__container}>
                        <a href="mailto:rakeshkumarmahendran@gmail.com" className={styles.contact__email}>Let's work together   <FiArrowUpRight className={styles.email__icon} /></a>
       
                </div>
            </div>
        </div>
    )
}

export default Contact