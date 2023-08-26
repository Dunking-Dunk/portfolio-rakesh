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
            transition={{ duration: 1.5 }}
            viewport={{ once: true }}
    >
        {name}
</motion.div>
    )
}

const Skills = ({ skills }: {
    skills: string[]
}) => {
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
                    {skills.map((skill, index) => {
                        const x =  Math.sin(index +7) * Math.cos(index*5) * 35
                        const y = Math.cos(index +7) * Math.sin(index *5 )  * 25
                        return <Skill name={skill} x={`${x}vw`} y={`${y}vw`}key={index}/>
                    })}
                </AnimatePresence>  
        </div>
        </div>

    )
}

export default Skills