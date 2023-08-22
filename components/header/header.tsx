import styles from './header.module.css'
import Link from 'next/link'
import Image from 'next/image'
import profilePic from '../../public/rakesh.jpg'

export default function Header() {
    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container}>
                <div className={styles.navbar__logo__container}>
                    <div className={styles.navbar__logo}>
                    <Image className={styles.navbar__logo__img} src={profilePic} alt='picture of the person'/>
                    <h3 className={styles.navbar__logo__text}>Rakesh Kumar</h3>
                    </div>   
                </div>
                <div className={styles.navbar__link__container}>
                    <ul className={styles.link__container__items}>
                        <li className={styles.link__container__item}>
                            <Link href='/' className={styles.link__item__link}>Home</Link></li>
                        <li className={styles.link__container__item}>
                            <Link href='/about' className={styles.link__item__link}>About</Link></li>
                        <li className={styles.link__container__item}>
                            <Link href='/project' className={styles.link__item__link}>Project</Link></li>
                            <li className={styles.link__container__item}>
                            <Link href='/' className={styles.link__item__link}>Publication</Link></li>
                        <li className={styles.link__container__item}>
                            <Link href='/' className={styles.link__item__link}>Contact</Link></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}