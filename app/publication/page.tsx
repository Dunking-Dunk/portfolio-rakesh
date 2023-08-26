import Loader from '@/components/loader/Loader'
import styles from './page.module.css'
import PublicationCard from '@/components/publicationCard/Publication'
import { client } from '@/lib/client'
import { groq } from 'next-sanity'
import { Suspense } from 'react'
import ScrollAnimation from '@/components/ScrollAnimation/ScrollAnimation'

const query = groq`
    *[_type=='publication']
`

export default async function Publication() {
    const publications:Publication[] = await client.fetch(query)
    return (
        <div className={styles.container}>
            <ScrollAnimation>
            <div className={styles.wrapper}>
                <h1 className={styles.title}>Publications</h1>
                <div className={styles.publications__container}>
                    {publications.map((publication, index) => { 
                        return <Suspense fallback={<Loader />}>
                            
                            <PublicationCard data={publication} key={index} />
                        </Suspense>
                    })} 
                </div>
            </div>
            </ScrollAnimation>
          
        </div>
    )
}