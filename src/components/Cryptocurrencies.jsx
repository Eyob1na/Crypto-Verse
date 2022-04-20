import React ,{useState} from 'react';
import millify from 'millify';
import {Row,Col,Card,Input} from 'antd';
import {Link} from 'react-router-dom';
import {useGetCryptosQuery} from '../services/cryptoApi';

const Cryptocurrencies = () => {

    const {data:cryptoList,isFetching}=useGetCryptosQuery();
    const [cryptos, setCryptos]=useState(cryptoList?.data?.coins);

    console.log(cryptos)
    return (
        <div>
            Cryptocurrencies
        </div>
    )
}

export default Cryptocurrencies
