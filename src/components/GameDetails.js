import React from 'react';




function GameDetails({name,awayTeam,stadium,city,state,date,playingSurface,stadiumType,forcast,week,averageScore,favorite,winsAgaintsTheSpreadFavorite,winsAgainstTheSpreadUnderDog,
    lostAgaintsTheSpreadUnderDog,lostAgaintsTheSpreadFavorite}){
    return(
        <div className='info-preview'>
            <div className='versus'>
                <h2>{name + " vs " + awayTeam }</h2>
            </div>
            <div className='underdog'>
                <h1>{"Last 10 games:  \"UNDERDOG\" average score: " + averageScore + " Wins Against the Spread: " + winsAgainstTheSpreadUnderDog}</h1>
                <h1>{" Lost Againts the Spread: " + lostAgaintsTheSpreadUnderDog}</h1>
            </div>
             <div className='favorite'>
                <h1>{"Last 10 games: \"FAVORITE\" average score: " + favorite + " Wins Againts the Spread: " + winsAgaintsTheSpreadFavorite}</h1>
                <h1>{" Lost Againts the Spread: " + lostAgaintsTheSpreadFavorite}</h1>
             </div>
            <h1>{"Week: " + week}</h1>
            <h1>Game Day: {date}</h1>
            <h1>Stadium: {stadium}  {city}  {state}</h1>
            <h1>Stadium Type: {stadiumType}</h1>
            <h1>Playing Surface: {playingSurface}</h1>
            <h1>Projected Forcast: {forcast}</h1>
        </div>
    )
}

export default GameDetails;