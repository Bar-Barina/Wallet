import { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { contactService } from '../services/contact.service'
import { useNavigate, useParams } from 'react-router-dom'
import { useForm } from '../customHooks/useForm'

export function ContactEdit(props) {
  const [contact, handleChange, setContact] = useForm(
    contactService.getEmptyContact()
  )

  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    loadContact()
  }, [])

  async function loadContact() {
    const contactId = params.id
    if (contactId) {
      try {
        const contact = await contactService.getContactById(contactId)
        setContact(contact)
      } catch (error) {
        console.log('error:', error)
      }
    }
  }

  async function onSaveContact(ev) {
    ev.preventDefault()
    try {
      await contactService.saveContact({ ...contact })
      navigate('/contact')
    } catch (error) {
      console.log('error:', error)
    }
  }

  const { name, phone, email } = contact
  return (
    <section className="contact-edit">
      <h1>{contact._id ? 'Edit' : 'Add'} Contact</h1>
      <img src={`https://robohash.org/${contact._id}?set=set5`} />
      <form onSubmit={onSaveContact}>
        <label htmlFor="name">Name</label>
        <input
          value={name}
          onChange={handleChange}
          type="text"
          name="name"
          id="name"
        />

        <label htmlFor="phone">Phone</label>
        <input
          type="number"
          value={phone}
          onChange={handleChange}
          name="phone"
          id="phone"
        />

        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={handleChange}
          name="email"
          id="email"
        />
        <section className="edit-btns flex space-between">
          <button>Save</button>
          <Link to={`/contact/${contact._id}`} className="edit-back">
            Back
          </Link>
        </section>
      </form>
    </section>
  )
}
