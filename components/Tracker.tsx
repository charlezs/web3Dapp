import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=6&page=1&sparkline=false'

    useEffect(() => {
        axios.get(url).then((response) => {
            setData(response.data)
        }).catch((error) => {
            console.log(error)
        })
    }, [])


    if (!data) return null

    return (
        <div className='featured'>
            <div className='container'>
                <div className='right'>
                    <div className='card'>
                        <div className='top'>
                            {/* <img src={BTC} alt='/' /> */}
                            <img src={data[0].image} alt='' />
                        </div>
                        <div>
                            <h5>{data[0].name}</h5>
                            <p>${data[0].current_price.toLocaleString()}</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured
