import React,{useState} from 'react';
import TeamDetails from './TeamDetails';

function TeamNews(){
    const [isLoading, setLoading] = useState(false);
    const [error,setError] = useState(null);
    const [team,setTeam] = useState("DAL");
    const [title,setTitle] = useState([]);
    const [content,setContent] = useState([]);
    const dotenv = require('dotenv');
    const SPORTS_API_KEY = `${process.env.REACT_APP_SPORTS_KEY}`;
    dotenv.config();

//useEffect(() => {
//getTeamNews();
//console.log("use effect ran..");
// }, []); // empty useEffect dependency will insure function runs only onces when first rendered.


    
    const getTeamNews = async (e) => {
        setLoading(true);
        e.preventDefault();
        const response = await fetch(`https://api.sportsdata.io/v3/nfl/scores/json/NewsByTeam/${team}?key=${SPORTS_API_KEY}`);

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


        const team_news = await response.json();
        setLoading(false);
        //console.log(response);
        //console.log(team_news);
        setTitle(team_news[0].Title);
        setContent(team_news[0].Content);
    
    }






    return(
        <div className="login-form">
            <div className='home'>
                {error && <div>{error}</div>}
                {isLoading && <div>Loading.....</div>}
                <TeamDetails
                title={title}
                content={content}/>
            </div>
            <form onSubmit={getTeamNews}>
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
                <button onSubmit={getTeamNews}>Search Team News</button>
            </form>
        </div>
        
    )
}
export default TeamNews;