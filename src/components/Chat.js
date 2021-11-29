import React,{useState,useEffect} from 'react';
import ChatDetails from './ChatDetails';


function Chat(){

var [data,setData] = useState(null);
const [isLoading, setLoading] = useState(true);
const [error,setError] = useState(null); 

const URL_API = "http://localhost:8000/messages"; // Just a testing end point with the json server.


useEffect(() => {
  const getMessages = async () => {
    try {
        const response = await fetch(URL_API);
        if (!response.ok) throw Error("Oops! network or server side problems... :(");   
        const data = await response.json();
        console.log(data);
        console.log(response);
        setData(data);
        } 
        catch (err) {
          setError("Oops something went wrong..")
        } finally {
          setLoading(false);
        }
    }
        (async () => await getMessages())();
        },[])
    
    

    return(
        <div>
            {data && <ChatDetails data={data} loading={isLoading} bad_load={error} />}
        </div>
    )
}
export default Chat;
