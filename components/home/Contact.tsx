import styles from './contact.module.css'
import SocialLink from '../Link/SocialLink'
import { FaMapMarkerAlt } from 'react-icons/fa'
import { AiOutlineMail } from 'react-icons/ai'
import { IoIosCall } from 'react-icons/io'
import { FiArrowUpRight } from 'react-icons/fi'
import PortableText from 'react-portable-text'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'

const query = groq`
    *[_type=='author'][0] {
        address,
        email,
        phoneNumber
    }
`

const Contact = async() => {
    const contact = await client.fetch(query)

    const { address, email, phoneNumber } = contact
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
                            <PortableText content={address} serializers={{
                        normal: ({ children }: { children: string }) => {
                                if (children[0].length > 0)
                                  return <p className={styles.card__val}>{children}</p>
                            }
                                }}/>
                        </div>
                    </div>
                    <div className={styles.detail__card}>
                        <AiOutlineMail className={styles.icon} />
                        <div className={styles.card__col}>
                            <p className={styles.card__header}>My Email</p>
                            <h5 className={styles.card__val}>{email}</h5>
                        </div>
                    </div>
                    <div className={styles.detail__card}>
                        <IoIosCall className={styles.icon} />
                        <div className={styles.card__col}>
                            <p className={styles.card__header}>Call Me Now</p>
                            <h5 className={styles.card__val}>{phoneNumber}</h5>
                        </div>
                    </div>
                    <p className={styles.detail__para}>I'm Rakesh Kumar, a tech enthusiast who works with students</p>
                    <SocialLink/>
                </div>
                <div className={styles.contact__email__container}>
                        <a href={`mailto:${email}`} className={styles.contact__email}>Let's work together   <FiArrowUpRight className={styles.email__icon} /></a>
       
                </div>
            </div>
        </div>
    )
}

export default Contact