import { NavLink, Link } from 'react-router-dom'

export function AppHeader(props) {
  return (
    <>
      <header className="app-header flex space-between align-center">
        <NavLink to="/" className={'logo-link'}>
          <h1 className="logo">Mr. BIT©oin</h1>
        </NavLink>
        <nav className="main-nav flex">
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/contact">Contacts</NavLink>
          <NavLink to="/user">User</NavLink>
          <NavLink to="/statisticPage">Statistics</NavLink>
        </nav>
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
