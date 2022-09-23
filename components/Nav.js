import * as React from 'react'
import { Container } from '@mui/material'
import Link from 'next/link'
import styles from '../styles/navigation.module.css'
import { useState } from 'react'
import NavLinks from '../components/NavLinks'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded'

export default function Nav({ inView }) {
  return (
    <>
      <Hamburger />

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

              <span className="desktop">
                {' '}
                <NavLinks />
              </span>
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
                    <h1 className={styles.logo}>
                      <a>Kristina Groeger</a>
                    </h1>
                  </Link>
                </div>
              </div>
              <span className="desktop">
                {' '}
                <NavLinks />
              </span>
            </Container>
          </span>
        )}
      </div>

    </>
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
          position: absolute;
          top: 92px;
          width: 100vw;
        }

        nav {
          left: 0px;
        }

        .navBar button {
          z-index: 10;
          cursor: pointer;
        }

        .menuNav {
          overflow-y: scroll;
          list-style: none;
          top: 0;
          background: white;
          left: 0;
          right: 0;
          width: 0;
          overflow: hidden;
              max-width: 100vw;
          z-index: 9;
        }

        .menuNav.showMenu {
          display: flex;
          width: 100%;
        }

        button {
          margin: 30px;
          background: white;
          border: none;
}

@media only screen and (max-width: 900px) {

 
  }}
        }
      `}</style>
      <Container sx={{
        position: "fixed",
        background: "white",
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        width: "100vw",
        alignItems: "center",
      }}>

        <Link href="/">
          <a className="mobile">
            <p>Kristina Groeger</p>
          </a>
        </Link>
        <button className="mobile" onClick={handleToggle}>
          {navbarOpen ? <CloseRoundedIcon /> : <MenuRoundedIcon />}
        </button>

        <nav className="navBar">
          <div className={`menuNav ${navbarOpen ? ' showMenu' : ''}`}>
            <Container sx={{
              paddingBottom: "30px"
            }}>
              <NavLinks sx={{
                display: "flex",
                flexDirection: "column",
              }} />
            </Container>
          </div>
        </nav>


      </Container>
    </>
  )
}
