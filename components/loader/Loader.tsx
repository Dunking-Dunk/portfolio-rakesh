"use client"
import styles from './loader.module.css'
import {Dna} from 'react-loader-spinner'

const Loader = () => {
    return (
        <div className={styles.container}>
<Dna
  visible={true}
  height="80"
  width="80"
  ariaLabel="dna-loading"
  wrapperClass="dna-wrapper"
/>
        </div>
    )
}

export default Loader