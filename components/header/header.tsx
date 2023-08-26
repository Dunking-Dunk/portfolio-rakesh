"use client"

import { useEffect, useRef, useState} from 'react'
import styles from './header.module.css'
import { RxHamburgerMenu } from 'react-icons/rx'
import { AiOutlineClose } from 'react-icons/ai'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import profilePic from '../../public/rakesh.jpg'
import {motion} from 'framer-motion'


const NavLink = ({ children, href }: {
    children: string,
    href: string,
}) => {
    const pathname = usePathname()
    const isActive = pathname === href
 
    return <Link href={href} className={isActive ? styles.link__item__link__active:styles.link__item__link}>{children}</Link>
}

export default function Header() {
    const containerRef: any = useRef()
    const [state, setState] = useState(false)

    const helperFunction = () => {
      setState((state) => !state)
    }
    
    const variant = {
        hidden: {
            left: '-100%'
        },
        show: {
            left: '0',
            transition: {
                ease: 'easeOut',
            }
        }
    }

    return (
        <div className={styles.navbar}>
            <div className={styles.navbar__container} >
            <div className={styles.menu} onClick={helperFunction}>
                    <RxHamburgerMenu size={24} />
                </div>
                <div className={styles.navbar__logo__container}>
                    <div className={styles.navbar__logo}>     
                    <Image className={styles.navbar__logo__img} src={profilePic} alt='picture of the person'/>
                    <h3 className={styles.navbar__logo__text}>Rakesh Kumar</h3>
                    </div>   
                </div>
                <motion.div layout className={styles.navbar__link__container} ref={containerRef} variants={variant} animate={state ? 'show': 'hidden'}>
                    <ul className={styles.link__container__items}>
                        <li className={styles.mobile__container}>
                            <div className={styles.menu} onClick={helperFunction}>
                                    <AiOutlineClose size={22} />
                                </div>
                                <div className={styles.navbar__logo}>     
                                    <Image className={styles.navbar__logo__img} src={profilePic} alt='picture of the person'/>
                                    <h3 className={styles.navbar__logo__text}>Rakesh Kumar</h3>
                                    </div>   
                        </li>
                        <li className={styles.link__container__item}>
                            <NavLink href='/'  >Home</NavLink></li>
                        <li className={styles.link__container__item}>
                            <NavLink href='/about' >About</NavLink></li>
                        <li className={styles.link__container__item}>
                            <NavLink href='/project' >Project</NavLink></li>
                            <li className={styles.link__container__item}>
                            <NavLink href='/publication' >Publication</NavLink></li>
                        <li className={styles.link__container__item}>
                            <NavLink href='/contact' >Contact</NavLink></li>
                    </ul>
                </motion.div>
            </div>
        </div>
    )
}