import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { getBitcoinSvg } from '../services/svg.service'

export function HomePage(props) {
  return (
    <>
      <section className="main-home-container">
        <div>
          <h1>
            Buy, trade and hold 350+ <br></br>
            cryptocurrencies on Mr. BIT©oin
          </h1>
          <h3 className='flex trade'><span
            dangerouslySetInnerHTML={{
              __html: getBitcoinSvg('gift'),
            }}
          />
             Trade Bitcoin for free <span
            dangerouslySetInnerHTML={{
              __html: getBitcoinSvg('arrowRight'),
            }}
          /></h3>
          <NavLink to="/signup">
            <button><span
            dangerouslySetInnerHTML={{
              __html: getBitcoinSvg('user'),
            }}
          /> Sign up</button>
          </NavLink>
        </div>
        <img src="https://cdn3.iconfinder.com/data/icons/cryptocurrency-and-bitcoins/50/42-512.png" />
      </section>
      <section className="ad">
        <div>
          <h2>$38 billion</h2>
          <p>24h trading volume on Binance exchange</p>
        </div>
        <div>
          <h2>350+</h2>
          <p>Cryptocurrencies listed</p>
        </div>
        <div>
          <h2>120 million</h2>
          <p>Registered users</p>
        </div>
        <div>
          <h2>Lower than 0.10%</h2>
          <p>Lowest transaction fees</p>
        </div>
      </section>
    </>
  )
}
