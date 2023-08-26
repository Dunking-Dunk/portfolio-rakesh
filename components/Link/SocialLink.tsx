import Link from 'next/link'
import styles from './link.module.css'
import { AiFillInstagram, AiFillFacebook, AiFillLinkedin, AiFillTwitterCircle } from 'react-icons/ai'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'

type Props = {
    color?: string
}

const query = groq`
    *[_type=='author'][0] {
        instagram,
        facebook,
        linkedin,
        twitter
    }
`

export default async function SocialLink({ color }: Props) {
    const links = await client.fetch(query)

    return (
        <div className={styles.row}>
        <Link href={links.facebook} className={styles.about__social}>
                <AiFillFacebook className={styles.about__social__link} color={color} />
        </Link>
        <Link href={links.instagram}  className={styles.about__social}>
            <AiFillInstagram className={styles.about__social__link} color={color}/>
        </Link>
        <Link href={links.linkedin}  className={styles.about__social}>
            <AiFillLinkedin className={styles.about__social__link} color={color}/>
        </Link>
        <Link href={links.twitter} className={styles.about__social}>
            <AiFillTwitterCircle className={styles.about__social__link} color={color}/>
        </Link>
</div>
    )
} 