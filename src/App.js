import { Route, HashRouter as Router, Routes } from 'react-router-dom'
import './assets/scss/global.scss'
import { AppHeader } from './cmps/AppHeader'
import { StatisticPage } from './views/StatisticPage'
import {UserDetails} from './views/UserDetails'
import { ContactPage } from './views/ContactPage'
import { ContactDetails } from './views/ContactDetails'
import { ContactEdit } from './views/ContactEdit'
import { SignupPage } from './views/SignupPage'
import { HomePage } from './views/HomePage'

function App() {
  return (
    <Router>
      <section className="main-app">
        <AppHeader />

        <main className="container">
          <Routes>
            <Route path="/contact/edit/:id?" element={<ContactEdit />} />
            <Route path="/contact/:id" element={<ContactDetails />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/statisticPage" element={<StatisticPage />} />
            <Route path="/user" element={<UserDetails />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/" element={<HomePage />} />
          </Routes>
        </main>
      </section>
    </Router>
  )
}

export default App
