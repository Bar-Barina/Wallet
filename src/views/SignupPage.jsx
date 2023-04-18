import React, { useState } from 'react'
import { userService } from '../services/user.service'
import { useNavigate } from 'react-router-dom'

export function SignupPage() {
  const [name, setName] = useState('')
  const navigate = useNavigate()

  function onSignup(event) {
    event.preventDefault()
    userService.signup(name)
    navigate('/contact')
  }

  function onHandleChange({ target }) {
    setName(target.value)
  }

  return (
    <>
    <form onSubmit={onSignup} className="signup">
    <img src={`https://robohash.org/8?set=set5`} />
      <label htmlFor="name">Please enter your name</label>
      <input onChange={onHandleChange} type="text" name="name" id="name" />
      <button>Sign up</button>
    </form>
    </>
  )
}
