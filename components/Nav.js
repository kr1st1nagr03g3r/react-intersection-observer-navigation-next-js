import * as React from 'react'
import { Container } from '@mui/material'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import { useState } from 'react'
import NavLinks from '../components/NavLinks'

export default function Nav({ inView }) {
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
                  <Logo />
                </div>
              </div>
              <NavLinks />
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
                  <Logo />
                </div>
              </div>
              <NavLinks />
              <Hamburger />
            </Container>
          </span>
        )}
      </div>
    </>
  )
}

// #Logo

export function Logo() {
  return (
    <Link href="/">
      <a>
        <p>Kristina Groeger</p>
      </a>
    </Link>
  )
}

//# Hamburger Menu

export function Hamburger() {
  // !the navbar is set to false to set the state of "closed"
  //  @ when the menu button is clicked, we can then call the updater function, setNavBarOpen, to update the state
  const [navbarOpen, setNavbarOpen] = useState(false)
  const handleToggle = () => {
    setNavbarOpen((prev) => !prev)
  }
  return (
    <>
      <style jsx>{`
        .navBar {
          position: relative;
        }

        .navBar button {
          left: 40px;
          top: 40px;
          z-index: 10;
          cursor: pointer;
        }

        .menuNav {
          overflow-y: scroll;
          list-style: none;
          top: 0;
          background: white;
          left: 0;
          width: 0;
          overflow: hidden;
          max-width: 290px;
          z-index: 9;
        }

        .menuNav.showMenu {
          display: flex;
          width: 100%;
        }

        .menuNav li:first-child {
          margin-top: 7rem;
        }
      `}</style>

      <button className="mobile" onClick={handleToggle}>
        {navbarOpen ? 'Close' : 'Open'}
      </button>
      <nav className="navBar mobile">
        <ul className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
          <div>
            <Link href="/">
              <a>Home</a>
            </Link>
            <Link href="/work">
              <a>Work</a>
            </Link>
            <Link href="/about">
              <a>About</a>
            </Link>
            <Link href="/contact">
              <a>Contact</a>
            </Link>
          </div>
        </ul>
      </nav>
    </>
  )
}
