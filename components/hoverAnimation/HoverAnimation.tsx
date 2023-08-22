"use client"
import {useState, useEffect} from 'react'
import styles from './hoverAnimation.module.css'
import { motion } from 'framer-motion'

const HoverAnimation = ({ children, hoverTitle }: {
    children: React.ReactNode,
    hoverTitle?: String
}) => {
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
        scale: 0,
       opacity: 0
    })

    const variants = {
        default: {
            x: mouse.x - 180 - window.screenX,
            y: mouse.y - 960 - window.screenY,
            scale: mouse.scale,
            opacity: mouse.opacity,
        }
    }



    return (
        <motion.div onMouseMove={(e) => {
            setMouse((state) => ({ ...state, x: e.clientX, y: e.clientY }))
        }}
        onHoverStart={e => {
            setMouse((state) => ({ ...state, scale: 1.5, opacity: 1 }))
         }}
           onHoverEnd={e => {
               setMouse((state) => ({ ...state, scale: 0, opacity: 0 }))
            }}
            
        >
            
            {children}
            <motion.div className={styles.hover} animate='default' variants={variants} >
                <p className={styles.hover__text}>{hoverTitle ? hoverTitle : 'hover'}</p>
            </motion.div>
        </motion.div>
    )
}

export default HoverAnimation