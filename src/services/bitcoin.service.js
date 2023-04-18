import axios from 'axios'
import {storageService} from './storage.service'
const MARKET_PRICE_KEY = 'marketPriceDB'
const BLOCK_SIZE_KEY = 'blockSizeDB'

export const bitcoinService = {
  getRate,
  getMarketPrice,
  getConfirmedTransactions,
}

async function getRate(coins) {
  const url = `https://blockchain.info/tobtc?currency=USD&value=${coins}`
  try {
    const rate = await axios({
      method: 'get',
      url,
    })
    return rate.data
  } catch (err) {
    console.log('error rate', err)
  }
}


async function getMarketPrice() {
  const marketPricesFromStorage = storageService.load(MARKET_PRICE_KEY)
  if (marketPricesFromStorage) return marketPricesFromStorage
  try {
       const response = await axios.get(`https://api.blockchain.info/charts/market-price?timespan=5months&format=json&cors=true`)
       const data = response.data
       storageService.store(MARKET_PRICE_KEY, data)
       return data
  } catch (err) {
       console.error('Error getting market prices:', err)
       return null
  }
}
async function getConfirmedTransactions() {
  const blockSizeFromStorage = storageService.load(BLOCK_SIZE_KEY)
  if (blockSizeFromStorage) return blockSizeFromStorage
  try {
       const response = await axios.get(`https://api.blockchain.info/charts/avg-block-size?timespan=5months&format=json&cors=true`)
       const data = response.data
       storageService.store(BLOCK_SIZE_KEY, data)
       return data
  } catch (err) {
       console.error('Error getting block size:', err)
       return null
  }
}