import * as React from 'react'
import { Container } from '@mui/material'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import Hamburger from './Hamburger'

function Nav({ inView }) {
    return (
        <>
            <div className={styles.statusElement}>
                {inView ? (
                    //////# Navigation OutOfView
                    <span role="img" aria-label="Outside the viewport">
                        {/* ❌ */}
                        <Container className={styles.navAnimateSmall}>
                            <div className={styles.relativeContainer}>
                                <div className={styles.logoInView}>
                                    <Link href="/">
                                        <a>
                                            <p>Kristina Groeger</p>
                                        </a>
                                    </Link>
                                </div>
                            </div>

                            <div className={styles.links}>
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
                            <Hamburger />
                        </Container>
                    </span>
                ) : (
                    //////# Navigation InView
                    <span role="img" aria-label="In view">
                        {/* ✅ */}
                        <Container className={styles.navAnimateLarge}>

                            <div className={styles.relativeContainer}>
                                <div className={styles.logo}>
                                    <Link href="/">

                                        <h1 className={styles.logo}><a>Kristina Groeger</a></h1>

                                    </Link>
                                </div>
                            </div>

                            <div className={styles.links}>
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
                            <Hamburger />
                        </Container>
                    </span>
                )}
            </div>

        </>
    )
}

export default Nav
