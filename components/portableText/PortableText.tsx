import PortableText from "react-portable-text"
import styles from './portableText.module.css'
import Image from 'next/image'
import { urlForImage } from '@/lib/image'

export default function PortableField({ data }: {
    data: Block[]
}) {

    return (
        <PortableText content={data}
            serializers={{
                h3: ({ children }: {
                    children: string
                }) => <h1 className={styles.body__h3}>
                        {children}
                    </h1>,
                h2: ({ children }: {
                    children: string
                }) => <h1 className={styles.body__h2}>
                        {children}
                    </h1>,
                h1: ({ children }: {
                    children: string
                }) => <h1 className={styles.body__h1}>
                        {children}
                    </h1>,
                li: ({ children }: {
                    children: string
                }) => <p className={styles.body__normal}>{children}</p>,
                p: ({ children }: {
                    children: string
                }) => <p className={styles.body__normal}>{children}</p>,
                image: (props: any) => {
                    console.log(props)
                    return (
                        <div className={styles.body__img__container}>
        <Image {...props}
                        alt='blog image' className={styles.body__img} src={urlForImage(props).url()} fill={true} />
                        </div>
                
                    )
                },
          }}
          
        />
    )
}