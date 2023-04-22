import { NavLink, Link } from 'react-router-dom'
import { getBitcoinSvg } from '../services/svg.service'
import { useState } from 'react'

export function AppHeader(props) {
  const [showNav, setShowNav] = useState(false)

  const toggleNav = () => {
    console.log('entered')
    setShowNav(!showNav)
  }

  const closeNav = () => {
    if (showNav) {
      setShowNav(false)
    }
  }

  return (
    <>
      <header className="app-header flex space-between align-center">
        <NavLink to="/" className={'logo-link'}>
          <h1 className="logo">Wallet</h1>
        </NavLink>
        <nav className={showNav ? 'show-nav' : ''}>
          <NavLink to="/" onClick={closeNav}>Home</NavLink>
          <NavLink to="/contact" onClick={closeNav}>Contacts</NavLink>
          <NavLink to="/user" onClick={closeNav}>User</NavLink>
          <NavLink to="/statisticPage" onClick={closeNav}>Statistics</NavLink>
        </nav>

        <span
          className="nav-toggle"
          onClick={toggleNav}
          dangerouslySetInnerHTML={{
            __html: getBitcoinSvg('hamburger'),
          }}
        />
      </header>
      <div className="yellow-div flex">
        <span>The BEST place for your digital wallet</span>
        <img src="https://kstatic.googleusercontent.com/files/4aa2f7ef663ecf9f671bb0017c9a6320c75c4039ae0a318dc149cc07e521c8e5da01f6b8f48b7e79c71bac8809e8bf5f75251244665b0bc9c62b434a3f8d9044" />
        <Link to="/contact/edit" className="add">
          Add Contact
        </Link>
      </div>
    </>
  )
}
