import Link from 'next/link'
// import { ReactElement } from 'react'

export default function Navbar() {
  const url = 'https://www.linkedin.com/in/artprasetya/'
  return (
    <nav className="navbar">
      <div className="container">
        <Link href={url}>
          <a target="_blank" className="logo">
            artprasetya
          </a>
        </Link>
      </div>
    </nav>
  )
}
