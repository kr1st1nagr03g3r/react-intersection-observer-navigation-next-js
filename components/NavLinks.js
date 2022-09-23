import React from 'react'
import Link from 'next/link'

export default function NavLinks() {
  return (
    <>
      <style jsx>{`
        .navItems {
          padding-right: 30px;
          letter-spacing: 1px;
        }

        .navItemEnd {
          padding-right: 0px;
        }

        :hover.navItems,
        :hover.navItemEnd {
          text-decoration: underline;
        }

        @media only screen and (max-width: 900px) {
          .links {
            display: none;
          }
        }
      `}</style>

      <div className="links">
        <Link href="/">
          <a className="navItems">Home</a>
        </Link>
        <Link href="/work">
          <a className="navItems">Work</a>
        </Link>
        <Link href="/about">
          <a className="navItems">About</a>
        </Link>
        <Link href="/contact">
          <a className="navItemEnd">Contact</a>
        </Link>
      </div>
    </>
  )
}
