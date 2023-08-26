"use client"

import { AnimatePresence, motion } from 'framer-motion'

type Props = {
    children: React.ReactNode,
    delay?: number,
    style?: any
}

export default function ScrollAnimation({children, delay, style}:Props) {
    return (
        <AnimatePresence>
        <motion.div initial={{ opacity: 0, y: 10 }} whileInView={{opacity: 1, y: 0 }} transition={{duration: 1, delay, ease: 'linear'}} viewport={{once: true}} style={style}>
            {children}
        </motion.div>
        </AnimatePresence>

    )
}