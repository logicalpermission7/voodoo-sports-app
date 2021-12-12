import React,{useState} from 'react';

function FavoriteCalculator(){




const [favoriteAmount,setFavoriteAmount] = useState(''); 
const [favoriteStake,setFavoriteStake] = useState('');
const [favoriteResult,setFavoriteResult] = useState(0);


const getFavoriteProfit = (e) =>{
    e.preventDefault();
    setFavoriteResult(favoriteStake / (favoriteAmount / 100));
    setFavoriteAmount('');
    setFavoriteStake('');
}




    return(
            <div className="favorite-calculator">
                <form>
                    <label>FAVORITE</label>
                    <input type="number" value={favoriteAmount} onChange={(e) => setFavoriteAmount(e.target.value)} required placeholder="Favorite Money Line Amount"></input>
                    <input type="number" value={favoriteStake} onChange={(e) => setFavoriteStake(e.target.value)}required placeholder="Enter Stake Amount"></input>
                    <input type="text" value={favoriteResult ? "$"+ parseFloat(favoriteResult).toFixed(2) + " Profit For You!" : ""} onChange={(e) => setFavoriteResult(e.target.value)} readOnly placeholder="Profit Amount"></input>
                    <br/>
                    <button onClick={getFavoriteProfit}>Get Profit</button>
                </form>

            </div>
    )
}
export default FavoriteCalculator;