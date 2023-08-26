'use client'

import styles from './button.module.css'
import { motion, AnimatePresence } from "framer-motion"
import { useRouter } from 'next/navigation'

export default function Button({
    children, href, color, background, borderColor
}: {
        children: React.ReactNode,
        href?: any,
        color?: string,
        background?: string,
        borderColor?: string

    }) {
    const router = useRouter()
    return (<AnimatePresence>
        <motion.button whileHover={{ translateY: -10 }} transition={{ ease: 'easeInOut' }} className={styles.button} onClick={() => {
            router.push(href)
        }} style={{color, background, borderColor}}>{
        children
    }</motion.button>
        </AnimatePresence>)
}