import styles from './publication.module.css'
import Button from '../button/Button'

type Props = {
    data: Publication
}

const Card = ({ data }: Props) => {
    return (<div className={styles.card}>
        <h3 className={styles.title}>{data.title}</h3>
        <p className={styles.author}>{data.authors}</p>
        <Button href={data.link} color='black'background='transparent' borderColor='black' >View</Button>
    </div>)
}


export default Card