import React,{useState,useEffect} from 'react';
import GameDetails from './GameDetails';

function GameData(){
    const [isLoading, setLoading] = useState(false);
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
    const [averageScore,setAverageScore] = useState([]);
    const [favorite,setFavorite] = useState([]);
    const [winsAgaintsTheSpreadFavorite,setWinsAgaintsTheSpreadFavorite] = useState([]);
    const [lostAgaintsTheSpreadFavorite,setLostAgaintsTheSpreadFavorite] = useState([]);
    const [winsAgainstTheSpreadUnderDog,setWinsAgaintsTheSpreadUnderDog] = useState([]);
    const [lostAgaintsTheSpreadUnderDog,setLostAgaintsTheSpreadUnderDog] = useState([]);
    const [week,setWeek] = useState([]);
    const dotenv = require('dotenv');
    const SPORTS_API_KEY = `${process.env.REACT_APP_SPORTS_KEY}`
    dotenv.config();

useEffect(() => {
getGameData();
console.log("use effect ran..");
 }, []); // empty useEffect dependency will insure function runs only onces when first rendered.


    

    const getGameData = async () =>{
        setLoading(true);
        //e.preventDefault();
        const response = await fetch(` https://api.sportsdata.io/v3/nfl/odds/json/TeamTrends/${team}?key=${SPORTS_API_KEY}`);
    

        try {
            if (!response.ok){ // checks if response object is not ok, then throws a message.
              console.log("error!!!")
              throw Error("Oops! Something went wrong.");   
            }

          }
          catch{
            setLoading(false);
            return setError("Oops! Something went wrong.");
            
          }

        const sport_data = await response.json();
        setLoading(false);
        //console.log(response);
        console.log(sport_data);
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
        setAverageScore(sport_data.TeamGameTrends[14].AverageScore);  
        setFavorite(sport_data.TeamGameTrends[11].AverageScore);
        setWinsAgaintsTheSpreadFavorite(sport_data.TeamGameTrends[11].WinsAgainstTheSpread);
        setWinsAgaintsTheSpreadUnderDog(sport_data.TeamGameTrends[14].WinsAgainstTheSpread);
        setLostAgaintsTheSpreadUnderDog(sport_data.TeamGameTrends[14].LossesAgainstTheSpread);
        setLostAgaintsTheSpreadFavorite(sport_data.TeamGameTrends[11].LossesAgainstTheSpread);


    }


    return(
        <div className="login-form">
          {error && <div>{error}</div>}
          {isLoading && <div>Loading.....</div>}
          <div className='home'>
                <GameDetails name={name}
                awayTeam={awayTeam}
                stadium={stadium}
                city={city}
                state={state}
                date={date}
                playingSurface={playingSurface}
                stadiumType={stadiumType}
                forcast={forcast}
                week={week} 
                averageScore={averageScore}
                favorite={favorite}
                winsAgaintsTheSpreadFavorite={winsAgaintsTheSpreadFavorite}
                winsAgainstTheSpreadUnderDog={winsAgainstTheSpreadUnderDog}
                lostAgaintsTheSpreadUnderDog={lostAgaintsTheSpreadUnderDog}
                lostAgaintsTheSpreadFavorite={lostAgaintsTheSpreadFavorite}
                />
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
            <button onClick={getGameData}>Search Next Game</button><br/><br/>
        </div>
        
    )
}
export default GameData;