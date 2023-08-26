import styles from './about.module.css'
import Button from '../button/Button'
import SocialLink from '../Link/SocialLink'
import PortableText from 'react-portable-text'
import {client} from '@/lib/client'
import { groq } from 'next-sanity'

const query = groq`
  *[_type=='author'][0] {
    bio, designation
  }
`
type Props = {
    about?: boolean
}

export default async function About({about}: Props) { 
    const data = await client.fetch(query)
    return (
        <div className={styles.about}>
            <div className={styles.about__container}>
                <div className={styles.col}>
                <h3 className={styles.about__name}>Rakesh Kumar </h3>
                    <h2 className={styles.about__title}>{data.designation}</h2>
                    {!about && <SocialLink/>}
                </div>
                <div className={styles.col}>
                        <PortableText content={data.bio} className={styles.about__grid} serializers={{
                        normal: ({ children }: { children: string }) => {
                                if (children[0].length > 0)
                                  return <p className={styles.about__para}>{children}</p>
                            }
                                }}/>
                    <div className={styles.row}>
                        {!about && <Button href='/project'>My projects</Button>}
                            
                        <Button background='transparent' borderColor='black' color='black' >download cv</Button>
                    </div>
                </div>
</div>
        </div>
    )
}