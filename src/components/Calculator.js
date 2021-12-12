import React from 'react';
import UnderdogCalculator from './UnderdogCalculator';
import FavoriteCalculator from './FavoriteCalculator';

function Calculator(){
    return(
        <div className="info-preview-calculator">
            <br/><br/>
            <h1>Moneyline Odds Payout</h1>
            <br/><br/>
            <UnderdogCalculator/>
            <br/><br/>
            <FavoriteCalculator/>
        </div>
    )
}
export default Calculator;