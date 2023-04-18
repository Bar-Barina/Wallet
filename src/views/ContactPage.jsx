import React, { Component } from 'react'
import { connect } from 'react-redux'
import { ContactList } from '../cmps/ContactList'
import { ContactFilter } from '../cmps/ContactFilter'
import {
  loadContacts,
  removeContact,
  setFilterBy,
} from '../store/actions/contact.actions'

class _ContactPage extends Component {
  componentDidMount() {
    this.props.loadContacts()
  }

  onRemoveContact = async (contactId) => {
    try {
      await this.props.removeContact(contactId)
    } catch (error) {
      console.log('error:', error)
    }
  }

  onChangeFilter = (filterBy) => {
    this.props.setFilterBy(filterBy)
    this.props.loadContacts()
  }

  render() {
    const { contacts, filterBy } = this.props
    if (!contacts) return <div>Loading...</div>
    return (
      <section className="contact-index">
        <ContactFilter
          filterBy={filterBy}
          onChangeFilter={this.onChangeFilter}
        />
        <ContactList
          contacts={contacts}
          onRemoveContact={this.onRemoveContact}
          onSelectContactId={this.onSelectContactId}
        />
      </section>
    )
  }
}

const mapStateToProps = (state) => ({
  contacts: state.contactModule.contacts,
  filterBy: state.contactModule.filterBy,
})

const mapDispatchToProps = {
  loadContacts,
  removeContact,
  setFilterBy,
}

export const ContactPage = connect(
  mapStateToProps,
  mapDispatchToProps
)(_ContactPage)
