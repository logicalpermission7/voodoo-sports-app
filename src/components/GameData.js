import React,{useState,useEffect} from 'react';
import GameDetails from './GameDetails';

function GameData(){
    const [isLoading, setLoading] = useState(true);
    const [error,setError] = useState(null);
    const [team,setTeam] = useState("DAL");
    const [name,setName] = useState([]);
    const [awayTeam,setAwayTeam] = useState([]);
    const [stadium,setStadium] = useState([]);
    const [city,setCity] = useState([]);
    const [state,setState] = useState([]);
    const [date,setDate] = useState([]);
    const [playingSurface,setPlayingSurface] = useState([]);
    const [stadiumType,setStadiumType] = useState([]);
    const [forcast,setForcast] = useState([]);
    const [averageScoreHome,setAverageScoreHome] = useState([]);
    const [averageScoreAway,setAverageScoreAway] = useState([]);
    const [winsAgaintsTheSpreadAway,setWinsAgaintsTheSpreadAway] = useState([]);
    const [lostAgaintsTheSpreadAway,setLostAgaintsTheSpreadAway] = useState([]);
    const [winsAgainstTheSpreadHome,setWinsAgaintsTheSpreadHome] = useState([]);
    const [lostAgaintsTheSpreadHome,setLostAgaintsTheSpreadHome] = useState([]);
    const [averageOpoScoreHome,setAverageOpoScoreHome] = useState([]);
    const [averageOpoScoreAway,setAverageOpoScoreAway] = useState([]);
    const [hometeam,setHomeTeam] = useState([]);
    const [teamAway,setTeamAway] = useState([]);
    const [homeTeamMoneyLine,setHomeTeamMoneyLine] = useState([]);
    const [awayTeamMoneyLine,setAwayTeamMoneyLine] = useState([]);
    const [week,setWeek] = useState([]);
    const SPORTS_API_KEY = `${process.env.REACT_APP_SPORTS_KEY}`

    require('dotenv').config();
  

useEffect(() => {
getGameData();
//console.log(process.env);
//console.log("use effect ran..");
 },[] ); // empty useEffect dependency will insure function runs only onces when first rendered.


    

    const getGameData = async () =>{
      setLoading(true);
        //e.preventDefault();
        
          try {
            const response = await fetch(` https://api.sportsdata.io/v3/nfl/odds/json/TeamTrends/${team}?key=${SPORTS_API_KEY}`);
              if (!response.ok){ // checks if response object is not ok, then throws a message.
                console.log("error!!!")
                throw Error("Oops! network or server side problems... :(");   
              }
              const sport_data = await response.json();
        //console.log(response);
        //console.log(sport_data);
        setName(sport_data.UpcomingGame.AwayTeam);
        setAwayTeam(sport_data.UpcomingGame.HomeTeam);
        setStadium(sport_data.UpcomingGame.StadiumDetails.Name);
        setCity(sport_data.UpcomingGame.StadiumDetails.City);
        setState(sport_data.UpcomingGame.StadiumDetails.State);
        setDate(sport_data.UpcomingGame.Date);
        setPlayingSurface(sport_data.UpcomingGame.StadiumDetails.PlayingSurface);
        setStadiumType(sport_data.UpcomingGame.StadiumDetails.Type);
        setForcast(sport_data.UpcomingGame.ForecastDescription);
        setWeek(sport_data.UpcomingGame.Week);  
        setAverageScoreHome(sport_data.TeamGameTrends[5].AverageScore);  
        setAverageScoreAway(sport_data.TeamGameTrends[8].AverageScore);
        setWinsAgaintsTheSpreadAway(sport_data.TeamGameTrends[8].WinsAgainstTheSpread);
        setWinsAgaintsTheSpreadHome(sport_data.TeamGameTrends[5].WinsAgainstTheSpread);
        setLostAgaintsTheSpreadHome(sport_data.TeamGameTrends[5].LossesAgainstTheSpread);
        setLostAgaintsTheSpreadAway(sport_data.TeamGameTrends[8].LossesAgainstTheSpread);
        setAverageOpoScoreHome(sport_data.TeamGameTrends[5].AverageOpponentScore);
        setAverageOpoScoreAway(sport_data.TeamGameTrends[8].AverageOpponentScore);
        setHomeTeam(sport_data.UpcomingGame.HomeTeam);
        setHomeTeamMoneyLine(sport_data.UpcomingGame.HomeTeamMoneyLine);
        setAwayTeamMoneyLine(sport_data.UpcomingGame.AwayTeamMoneyLine);
        setTeamAway(sport_data.UpcomingGame.AwayTeam);
        setError(null);
        } catch (err) {
          setError("Oops! network or server side problems... :(");
        } finally {
          setLoading(false);
        }
      }


    return(
        <div className="login-form">
          {error && <div style={{color: "#fd2600"}}>{error}</div>}
          {isLoading && <div style={{color: "rgb(0, 248, 21)"}}>Loading.....</div>}
          <div className='home'>
                {!error && !isLoading  && <GameDetails 
                name={name}
                awayTeam={awayTeam}
                stadium={stadium}
                city={city}
                state={state}
                date={date}
                playingSurface={playingSurface}
                stadiumType={stadiumType}
                forcast={forcast}
                week={week} 
                averageScoreHome={averageScoreHome}
                averageScoreAway={averageScoreAway}
                winsAgaintsTheSpreadAway={winsAgaintsTheSpreadAway}
                winsAgainstTheSpreadHome={winsAgainstTheSpreadHome}
                lostAgaintsTheSpreadHome={lostAgaintsTheSpreadHome}
                lostAgaintsTheSpreadAway={lostAgaintsTheSpreadAway}
                averageOpoScoreHome={averageOpoScoreHome}
                averageOpoScoreAway={averageOpoScoreAway}
                hometeam={hometeam}
                homeTeamMoneyLine={homeTeamMoneyLine}
                awayTeamMoneyLine={awayTeamMoneyLine}
                teamAway={teamAway}
                />}
            </div>
            <form onSubmit={getGameData}>
                <select value={team} onChange={(e) => setTeam(e.target.value)}>
                    <option value='ARI'>Arizona Cardinals</option>
                    <option value='ATL'>Atlanta Falcons</option>
                    <option value='BAL'>Baltimore Ravens</option>
                    <option value='BUF'>Buffalo Bills</option>
                    <option value='CAR'>Carolina Panthers</option>
                    <option value='CHI'>Chicago Bears</option>
                    <option value='CIN'>Cincinnati Bengals</option>
                    <option value='CLE'>Cleveland Browns</option>
                    <option value='DAL'>Dallas Cowboys</option>
                    <option value='DEN'>Denver Broncos</option>
                    <option value='DET'>Detroit Lions</option>
                    <option value='GB'>Green Bay Packers</option>
                    <option value='HOU'>Houston Texans</option>
                    <option value='IND'>Indianapolis Colts	</option>
                    <option value='JAX'>Jacksonville Jaguars</option>
                    <option value='KC'>Kansas City Chiefs</option>
                    <option value='MIA'>Miami Dolphins</option>
                    <option value='MIN'>Minnesota Vikings</option>
                    <option value='NE'>New England Patriots</option>
                    <option value='NO'>New Orleans Saints</option>
                    <option value='NYG'>NY Giants</option>
                    <option value='NYJ'>NY Jets</option>
                    <option value='LV'>Las Vegas Raiders</option>
                    <option value='PHI'>Philadelphia Eagles</option>
                    <option value='PIT'>Pittsburgh Steelers</option>
                    <option value='LAC'>Los Angeles Chargers</option>
                    <option value='SF'>San Francisco 49ers</option>
                    <option value='SEA'>Seattle Seahawks</option>
                    <option value='LAR'>Los Angeles Rams</option>
                    <option value='TB'>Tampa Bay Buccaneers</option>
                    <option value='TEN'>Tennessee Titans</option>
                    <option value='WAS'>Washington Football Team</option>
                </select>
                
            </form>
        </div>
        
    )
}
export default GameData;