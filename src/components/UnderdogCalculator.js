import React,{useState} from 'react';

function UnderdogCalculator(){

 const [underDogAmount,setUnderDogAmount] = useState(''); 
 const [stake,setStake] = useState('');
 const [result,setResult] = useState('');

const getProfit = (e) =>{
    e.preventDefault();
    setResult(stake * (underDogAmount / 100));
    setUnderDogAmount('');
    setStake('');
}










    return(
        <div className="underdog-calculator">
            <form>
                <label>UNDERDOG</label>
                <input type="number" value={underDogAmount} onChange={(e) => setUnderDogAmount(e.target.value)} required placeholder="Underdog Money Line Amount"></input>
                <input type="number" value={stake} onChange={(e) => setStake(e.target.value)}required placeholder="Enter Stake Amount"></input>
                <input type="text" value={"$"+ parseFloat(result).toFixed(2)  + " Profit For You!"} onChange={(e) => setResult(e.target.value)}></input>
                <button onClick={getProfit}>Get Profit</button><br/><br/>

            </form>
        </div>
    )
}
export default UnderdogCalculator;