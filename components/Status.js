import { Container } from '@mui/material'
import Link from 'next/link'
import * as React from 'react'
import styles from '../styles/navigation.module.css'

function Status({ inView }) {
    return (
        <div className={styles.statusElement}>
            {inView ? (
                /////////////////// Navigation OutOfView
                <span role="img" aria-label="Outside the viewport">
                    {/* ❌ */}
                    <Container className={styles.navAnimateSmall}>
                        <div className={styles.relativeContainer}>
                            <div className={styles.logo}>
                                <Link href="/">
                                    <a>
                                        <i>Kristina Groeger</i>
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
                    </Container>
                </span>
            ) : (
                /////////////////// Navigation InView
                <span role="img" aria-label="In view">
                    {/* ✅ */}
                    <Container className={styles.navAnimateLarge}>
                        <div className={styles.relativeContainer}>
                            <div className={styles.logo}>
                                <Link href="/">
                                    <a>
                                        <i>Kristina Groeger</i>
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
                    </Container>
                </span>
            )}
        </div>
    )
}

export default Status
