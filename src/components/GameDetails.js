import React from 'react';




function GameDetails({name,awayTeam,stadium,city,state,date,playingSurface,stadiumType,forcast,week,averageScoreHome,averageScoreAway,winsAgaintsTheSpreadAway,winsAgainstTheSpreadHome,
    lostAgaintsTheSpreadHome,lostAgaintsTheSpreadAway,averageOpoScoreHome,averageOpoScoreAway,hometeam,homeTeamMoneyLine,awayTeamMoneyLine,teamAway}){
    return(
        <div className='info-preview'>
            <div className='versus'>
                <h2>{"Next Game: " + name + " vs " + awayTeam }</h2>
                <h1>{"Week: " + week}</h1>
                <h2>{"HomeTeam: " + hometeam}</h2>
                <h1>{"Money Line: " + homeTeamMoneyLine}</h1>
                <h2>{"AwayTeam: " + teamAway}</h2>
                <h1>{"Money Line: " + awayTeamMoneyLine}</h1>
            </div>
            <div className='home-scores'>
                <h1>{"Last 10 games:  \"HOME\" average score: " + averageScoreHome}</h1>
                <h1>{"Average Openent Score: " + averageOpoScoreHome}</h1>
                <h1>{"An average L-" + lostAgaintsTheSpreadHome + "/W-" + winsAgainstTheSpreadHome + " ATS @ Home"}</h1>
            </div>
             <div className='away-scores'>
                <h1>{"Last 10 games: \"AWAY\" average score: " + averageScoreAway}</h1>
                <h1>{"Average Openent Score: " + averageOpoScoreAway}</h1>
                <h1>{"An average L-" + lostAgaintsTheSpreadAway + "/W-" + winsAgaintsTheSpreadAway + " ATS @ Away"}</h1>
             </div>
            <h1>Game Day: {date}</h1>
            <h1>Stadium: {stadium}  {city}  {state}</h1>
            <h1>Stadium Type: {stadiumType}</h1>
            <h1>Playing Surface: {playingSurface}</h1>
            <h1>Projected Forcast: {forcast}</h1>
        </div>
    )
}

export default GameDetails;