import styles from './about.module.css'
import Button from './button/Button'
import SocialLink from './Link/SocialLink'

export default function About({ about }: {
    about?: boolean
}) { 
    return (
        <div className={styles.about}>
            <div className={styles.about__container}>
                <div className={styles.col}>
                <h3 className={styles.about__name}>Rakesh Kumar </h3>
                    <h2 className={styles.about__title}>Professor / Scientist</h2>
                    {!about && <SocialLink/>}
                </div>
                <div className={styles.col}>
                    <div className={styles.about__grid}>
                        <p className={styles.about__para}>I received the Ph.D. degree from Anna University in 2023. He is currently an assistant professor with the Department of Computer Science and Engineering, Rajalakshmi Engineering College, Tamil Nadu, India. He receives his M.Eng degree in computer science and Engineering and B.Eng degree in Computer Science and Engineering from Anna University  in 2015 and 2011. He serves/served as a Program Committee Member in Conferences like IEEE- AIHC2023, AIHC2021, BMLI 2020, DaMi 2021, MLT 2021, BDIoT 2021.</p>
                        <p  className={styles.about__para}>  He is also a reviewer in ACM, IEEE Access, Springer, Elsevier. etc. He is a Lifetime Member of the International Computer Science and Engineering Society and International Association of Engineers. His active research area is in Medical Imaging, Internet of Medical Things, Deep Learning, Machine Learning, Health and Medical Informatics.</p>
                    </div>
                   
                    <div className={styles.row}>
                        {!about && <Button href='/project'>My projects</Button>}
                            
                        <Button background='transparent' borderColor='black' color='black' >download cv</Button>
                    </div>
                </div>
</div>
        </div>
    )
}