import React, { useState } from 'react';


export default function CurrencyConvert(props) {
const [prices, setPrice] = useState({})

const { price } = props

        // const plat = ((amount, sum) => {
        // return (amount - sum) / 1000;
        // })



        const money = 2347819

        const amt = money
        const amount = money


        function sum(amt) {
            return amt % 1000;
        }

        const remainder = sum(amt)
        console.log(remainder)

        return (
            <div> </div>
        )

}
/*

#AMT / 1000

    return whole# to Platinum  28.934

8934 / 100
    return whole# to Gold 9.34

34 / 10
    return whole# to Silver .4


    return else to Copper

*/