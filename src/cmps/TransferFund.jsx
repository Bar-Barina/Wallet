import React from 'react'
import { useState } from 'react'

export default function TransferFund({ contact, maxCoins, onTransferCoins }) {
  const [amount, setAmount] = useState(0)

  function onSetAmount({ target }) {
    setAmount(target.value)
  }
  return (
    <section className="transfer-fund">
      <h3>Transfer coins to {contact.name}</h3>
      <label htmlFor="amount"></label>
      <input onChange={onSetAmount} type="number" name="amount" id="amount" />
      <button type="submit" onClick={() => onTransferCoins(amount, contact)}>
        Transfer
      </button>
    </section>
  )
}
