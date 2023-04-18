import React, { useEffect, useState } from 'react'
import { userService } from '../services/user.service'
import { bitcoinService } from '../services/bitcoin.service'
import MovesList from '../cmps/MovesList'
import { getBitcoinSvg } from '../services/svg.service'

export function UserDetails(props) {
  const [user, setUser] = useState(null)
  const [bitcoinRate, setBitcoinRate] = useState(null)

  useEffect(() => {
    async function fetchData() {
      const user = await userService.getUser()
      if (!user) {
        props.history.push('/signup')
        return
      }
      setUser(user)
      const bitcoinRate = await bitcoinService.getRate(user.coins)
      setBitcoinRate(bitcoinRate)
    }
    fetchData()
  }, [props.history])

  function lastThreeMoves() {
    return user.moves.slice(0, 3)
  }

  if (!user || !bitcoinRate) {
    return <div>Loading...</div>
  }
  return (
    <>
      <section className="user-details">
        <section className="user text-center">
          <h1>Hello {user.name}! </h1>
          <div className="flex space-around user-balance">
            <h2>Your Current Balance: {user.coins}$ </h2>
            <h3>Rate: {bitcoinRate}</h3>
          </div>
        </section>
        <hr></hr>
        <MovesList title={'Your Last 3 Moves:'} moves={lastThreeMoves()} />
      </section>
    </>
  )
}
