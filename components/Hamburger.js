import Link from 'next/link'
import React, { useState } from 'react'

export function Hamburger() {
    // !the navbar is set to false to set the state of "closed"
    //  @ when the menu button is clicked, we can then call the updater function, setNavBarOpen, to update the state
    const [navbarOpen, setNavbarOpen] = useState(false)

    const handleToggle = () => {
        setNavbarOpen(prev => !prev)
    }


    return (
        <>
            <style jsx>{
                `
.navBar {
  position: relative;
}

.navBar button {
  position: fixed;
  left: 40px;
  top: 40px;
  z-index: 10;
  cursor: pointer;
}

.menuNav {
  overflow-y: scroll;
  list-style: none;
  position: fixed;
  top: 0;
  background: white;
  left: 0;
  width: 0;
  overflow: hidden;
  max-width: 290px;
  z-index: 9;
}

.menuNav.showMenu {
display:flex;
  width: 100%;
}

a {
  {/* display: block;
  padding: 10px 40px;
  text-decoration: none;
  color: #3fffd2;
  text-transform: uppercase;
  font-weight: bold; */}
}

.menuNav li:first-child {
  margin-top: 7rem;
}

`}</style>
            {/* //! The button now contains the state. If the value is true, we display "Close", else we display "Open". */}
            <button className="mobile" onClick={handleToggle}>{navbarOpen ? "Close" : "Open"}</button>
            <nav className="navBar mobile">
                <ul className={`menuNav ${navbarOpen ? " showMenu" : ""}`}>
                    <div >
                        <Link href="/">
                            <a >Home</a>
                        </Link>
                        <Link href="/work">
                            <a >Work</a>
                        </Link>
                        <Link href="/about">
                            <a >About</a>
                        </Link>
                        <Link href="/contact">
                            <a >Contact</a>
                        </Link>
                    </div>
                </ul>
            </nav>
        </>
    )
}
