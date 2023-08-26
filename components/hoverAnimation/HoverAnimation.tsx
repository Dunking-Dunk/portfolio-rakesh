"use client"
import {useState, useEffect} from 'react'
import styles from './hoverAnimation.module.css'
import { AnimatePresence, motion } from 'framer-motion'
import { useRouter } from 'next/navigation'

const HoverAnimation = ({ children, hoverTitle, link }: {
    children: React.ReactNode,
    hoverTitle?: String,
    link?: string
}) => {
    const router = useRouter()
    const [mouse, setMouse] = useState({
        x: 0,
        y: 0,
        scale: 0,
       opacity: 0
    })

    useEffect(() => {
        const event = window.addEventListener("mousemove", ({clientX, clientY}) => {
            setMouse((state) => ({ ...state, x: clientX, y: clientY }))
        })
       return  () => {
    window.removeEventListener("mousemove", event!)
        }
    }, [])


    const variants = {
        default: {
            left: mouse.x,
            top: mouse.y,
            scale: mouse.scale,
            opacity: mouse.opacity,
        }
    }



    return (
        <AnimatePresence>
            <motion.div onClick={() => {
                    if (link) {
                        router.push(link)
                    }
            }}
            
        onHoverStart={e => {
            setMouse((state) => ({ ...state, scale: 1.5, opacity: 1.5 }))
            }}
            
           onHoverEnd={e => {
               setMouse((state) => ({ ...state, scale: 0, opacity: 0 }))
            }}
        >
            
            {children}
            <motion.div className={styles.hover} animate='default' variants={variants} transition={{
                ease: 'linear'
            }} >
                <p className={styles.hover__text}>{hoverTitle ? hoverTitle : 'hover'}</p>
            </motion.div>
        </motion.div>
        </AnimatePresence>
        
    )
}

export default HoverAnimation