import styles from './footer.module.css'
import Link from 'next/link'
import SocialLink from '../Link/SocialLink'

const Footer = () => {
    return (
        <div className={styles.footer}>
        <div className={styles.footer__container}>
                <div className={styles.footer__left__container}>
                    <h2 className={styles.title}>Rakesh Kumar.</h2>
                    <p className={styles.para}>@Designed and Developed by Unfazed Studio</p>
                </div>
                <div className={styles.footer__right__container}>
                    <div className={styles.link__cotainer}>
                    <Link href='/' className={styles.link}>Home</Link>   
                        <Link href='/' className={styles.link}>About</Link>
                        <Link href='/' className={styles.link}>Project</Link> 
                    </div>
                    <SocialLink color='black'/>
                </div>
        </div>
        </div>
    )
}

export default Footer