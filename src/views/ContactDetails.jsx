import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { contactService } from '../services/contact.service'
import TransferFund from '../cmps/TransferFund'
import MovesList from '../cmps/MovesList'
import { spendBalance, transferCoins } from '../store/actions/user.actions'
import { Link, useNavigate, useParams } from 'react-router-dom'

export function ContactDetails(props) {
  const [contact, setContact] = useState(null)
  const navigate = useNavigate()
  const user = useSelector((storeState) => storeState.userModule.loggedInUser)
  const params = useParams()
  const dispatch = useDispatch()

  useEffect(() => {
    loadContact()
  }, [params.id])

  async function loadContact() {
    try {
      const contact = await contactService.getContactById(params.id)
      setContact(contact)
    } catch (error) {
      console.log('error:', error)
    }
  }

  function onBack() {
    navigate('/contact')
  }

  function onTransferCoins(amount, contact) {
    dispatch(transferCoins(amount, contact))
  }

  function filterMoves() {
    return user.moves.filter((move) => move.toId === contact._id)
  }

  if (!contact || !user) return <div>Loading...</div>
  return (
    <>
      <div className="details-title">Contact Details</div>
      <section className="contact-details flex">
        <img src={`https://robohash.org/${contact._id}?set=set5`} />
        <section className="details">
          <h3 className="contact-name">{contact.name}</h3>
          <h3>Email: {contact.email}</h3>
          <h3>Phone: {contact.phone}</h3>
          <button onClick={onBack}>Back</button>
        </section>
      </section>
      <TransferFund
        contact={contact}
        // maxCoins={user ? user.coins : 0}
        onTransferCoins={onTransferCoins}
      />
      <MovesList title={'Your Moves:'} moves={filterMoves()} />
    </>
  )
}
