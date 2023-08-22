"use client"

import styles from './skill.module.css'
import { motion, AnimatePresence } from 'framer-motion'

const Skill = ({ name, x, y }: {
    name: string,
    x: string,
    y: string
}) => {
    return (
        <motion.div className={styles.skill} style={{ position: 'absolute'}}
            whileHover={{ scale: 1.15 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x, y }}
            transition={{duration: 1.5}}
    >
        {name}
</motion.div>
    )
}

const Skills = () => {
    return (
        <div className={styles.skills}>
            <div className={styles.skills__container}>
                <AnimatePresence>
                <motion.div className={styles.skill}
                        whileHover={{ scale: 1.15 }}
                        style={{color: '#A53DFF'}}
                >
                    Ai
                </motion.div>
                <Skill name='SK Learn' x="-5vw" y="-10vw" />
                <Skill name=' Python' x="10vw" y="10vw" />
                <Skill name='R' x="5vw" y="20vw"/>
                <Skill name=' C/C++,' x="-5vw" y="-10vw" />
                <Skill name=' Java' x="-35vw" y="-20vw" />
                <Skill name='HTML' x="30vw" y="20vw" />
                <Skill name='Matlab' x="-5vw" y="-10vw" />
                <Skill name=' Monai' x="15vw" y="-10vw" />
                <Skill name='TensorFlow' x="25vw" y="0vw" />
                <Skill name='Flask' x="-30vw" y="0vw" />
                <Skill name='WordPress' x="-5vw" y="-10vw" />
                <Skill name=' Numpy' x="-25vw" y="-10vw" />
                <Skill name='Scikit-learn' x="-5vw" y="-10vw"/>
                <Skill name='pyTorch' x="-25vw" y="10vw" />
                <Skill name='Keras' x="35vw" y="-15vw" />
                <Skill name='Pandas' x="-25vw" y="20vw" />
                <Skill name='Matlab' x="25vw" y="-10vw" />
                <Skill name=' Matplotlib' x="-5vw" y="-22vw" />
                <Skill name=' Visual Studio' x="15vw" y="-20vw" />
                <Skill name=' PyCharm' x="-10vw" y="-15vw"/>
                </AnimatePresence>  
        </div>
        </div>

    )
}

export default Skills