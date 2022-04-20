import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const cryptoApiHeaders={
        'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
        'x-rapidapi-key': '24a06d9a05msha636d7c74dbc210p111788jsn76e0bd1f1c61'
}

const baseUrl= 'https://coinranking1.p.rapidapi.com/stats';

const createRequest=(url)=>({url, headers: cryptoApiHeaders});

export const cryptoApi=createApi({
    reducerPath:'cryptoApi',
    baseQuery:fetchBaseQuery({baseUrl}),
    endpoints:(builder)=>({
        getCryptos: builder.query({
            query:()=>createRequest('/coins')
        }),
    }),
});

export const{ useGetCryptosQuery }=cryptoApi;
