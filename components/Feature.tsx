import React, { useState, useEffect } from 'react'
import axios from 'axios'
// import BTC from '../assets/btc-img.png'
import { FiArrowUpRight, FiArrowDown } from 'react-icons/fi'

const Featured = () => {

    const [data, setData] = useState(null)

    const url = 'https://api.etherscan.io/api?module=gastracker&action=gasoracle&apikey=RAU1GI9TMM4WDJ2IHU5V8YE2T36CBAC696'

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
                        <div>
                            <h5>{data.SafeGasPrice}</h5>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Featured