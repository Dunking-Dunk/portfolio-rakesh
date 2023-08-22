import Link from 'next/link'
import styles from './link.module.css'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'

type Props = {
    color?: string
}

export default function SocialLink({color}: Props) {
    return (
        <div className={styles.row}>
        <Link href='/' className={styles.about__social}>
                <AiFillFacebook className={styles.about__social__link} color={color} />
        </Link>
        <Link href='/' className={styles.about__social}>
            <AiFillInstagram className={styles.about__social__link} color={color}/>
        </Link>
        <Link href='/' className={styles.about__social}>
            <AiFillLinkedin className={styles.about__social__link} color={color}/>
        </Link>
        <Link href='/' className={styles.about__social}>
            <AiFillTwitterCircle className={styles.about__social__link} color={color}/>
        </Link>
</div>
    )
}