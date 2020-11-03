import React from 'react'
import GoldCoin from '../Assets/Goldencoin'
import PlatCoin from '../Assets/platinumCoin'
import SilvCoin from '../Assets/Silvercoin'
import CopCoin from '../Assets/bronzecoin'

function currencyDisplay({ plat, gold, silver, copper }) {

    if (!copper && !silver && !gold && !plat) {
        return <h3>Fetching currency amount...</h3>
    }

    return (
            <div>
            <PlatCoin width={25} height={25} alt='platinum coin' />
            <p>{plat}</p>
            <GoldCoin width={25} height={25} alt='golden coin' />
            <p>{gold}</p>
            <SilvCoin width={25} height={25} alt='silver coin' />
            <p>{silver}</p>
            <CopCoin width={25} height={25} alt='golden coin' />
            <p>{copper}</p>
            </div>
    )
}

export default currencyDisplay