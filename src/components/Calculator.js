import React from 'react';
import UnderdogCalculator from './UnderdogCalculator';
import FavoriteCalculator from './FavoriteCalculator';

function Calculator(){
    return(
        <div className="info-preview">
            <UnderdogCalculator/>
            <br/><br/>
            <FavoriteCalculator/>
        </div>
    )
}
export default Calculator;