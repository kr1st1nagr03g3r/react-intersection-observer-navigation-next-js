import { Link } from '@mui/material';
import React, { useState } from 'react'
import styles from '../styles/hamburger.module.css'

// @ very basic toggle

const Hamburger = () => {
    const [show, setShow] = useState(true);

    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }

    return (
        <>
            <div className={styles.wrapper} onClick={() => {
                {
                    setShow(!show)
                }
            }}>

                <button onClick={handleToggle}>{navbarOpen ? "⬆️" : "🍔"}</button>
                {
                    show ? null :
                        <div className={styles.drawer}>

                            <Link href="/">
                                <a className={styles.navItems}>Home</a>
                            </Link>
                            <Link href="/work">
                                <a className={styles.navItems}>Work</a>
                            </Link>
                            <Link href="/about">
                                <a className={styles.navItems}>About</a>
                            </Link>
                            <Link href="/contact">
                                <a className={styles.navItemEnd}>Contact</a>
                            </Link>





                        </div>
                }
            </div>

        </>
    )
}




export default Hamburger

