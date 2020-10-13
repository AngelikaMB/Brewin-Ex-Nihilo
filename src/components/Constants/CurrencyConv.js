import React from 'react';

const money = 2347819758901

const CurrencyConvert = ({ money }) => {
const amt = money


   const plat = (() => {
     return amt / 10000;
   })

   console.log(amt)

    return (
        <div>{plat()}</div>
    )
}

export default CurrencyConvert