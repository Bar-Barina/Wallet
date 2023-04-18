import React from 'react'
import { Link } from 'react-router-dom'
import { getBitcoinSvg } from '../services/svg.service'

export function ContactPreview({
  contact,
  onRemoveContact,
}) {
  return (
    <article className="contact-preview">
      <img src={`https://robohash.org/${contact._id}?set=set5`} alt={contact.name} />
      <Link to={`/contact/${contact._id}`} className="user-info">
        <div>{contact.name}</div>
      </Link>
      <section className="actions">
        <Link to={`/contact/edit/${contact._id}`}>
        <span
            dangerouslySetInnerHTML={{
              __html: getBitcoinSvg('edit'),
            }}
          /></Link>
        <button onClick={() => onRemoveContact(contact._id)}>
        <span
            dangerouslySetInnerHTML={{
              __html: getBitcoinSvg('trash'),
            }}
          />
        </button>
      </section>
    </article>
  )
}
