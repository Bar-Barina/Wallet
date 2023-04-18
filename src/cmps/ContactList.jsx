import { memo } from 'react'
import { ContactPreview } from './ContactPreview'

function _ContactList({ contacts, onRemoveContact }) {
  if (!contacts || contacts.length === 0) {
    return <div className='move-list'>No Contacts Found...</div>
  }
  return (
    <section className="contact-list">
      <h1 className="recent-contacts"> Recent contacts</h1>
      {contacts.map((contact) => (
        <ContactPreview
          key={contact._id}
          contact={contact}
          onRemoveContact={onRemoveContact}
        />
      ))}
    </section>
  )
}

export const ContactList = memo(_ContactList)
