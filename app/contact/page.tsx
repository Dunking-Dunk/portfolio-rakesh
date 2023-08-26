import styles from './page.module.css'
import Contact from '@/components/home/Contact'

export default function ContactPage() {
    return (
        <div className={styles.contact}>
            <div className={styles.contact__container}>
                <Contact/>
            </div>
        </div>
    )
}