import React from 'react';




function Details({name,awayTeam,stadium,city,state,date,playingSurface,stadiumType,forcast,week}){
    return(
        <div className='info-preview'>
            <h2>{name + " vs " + awayTeam }</h2>
            <h1>Week {week}</h1>
            <h1>Game Day: {date}</h1>
            <h1>Stadium: {stadium}  {city}  {state}</h1>
            <h1>Stadium Type: {stadiumType}</h1>
            <h1>Playing Surface: {playingSurface}</h1>
            <h1>Projected Forcast: {forcast}</h1>
            
        
    
    </div>
    )
}

export default Details;