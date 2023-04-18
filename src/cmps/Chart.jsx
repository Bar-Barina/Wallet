import React, { Component } from 'react'
import {
  Sparklines,
  SparklinesLine,
  SparklinesReferenceLine,
} from 'react-sparklines'

import { bitcoinService } from '../services/bitcoin.service'

export class Chart extends Component {
  state = {
    marketPrices: null,
  }

  componentDidMount() {
    this.loadMarketPrices()
  }

  loadMarketPrices = async () => {
    try {
      const marketPrices = await bitcoinService.getMarketPrice()
      this.setState({ marketPrices })
    } catch (err) {
      console.log('err:', err)
    }
  }

  render() {
    const { marketPrices } = this.state

    return (
      <section className="chart">
         {/* {marketPrices && (
        <div>
          <Sparklines data={marketPrices}>
            <SparklinesLine color="black" />
            <SparklinesReferenceLine type="mean" />
          </Sparklines>
        </div>
         )} */}
      </section>
    )
  }
}
