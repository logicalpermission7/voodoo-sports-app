import React,{useState,useEffect} from 'react';
import ChatDetails from './ChatDetails';




function Chat(){



var [items,setItems] = useState(null);
const [isLoading, setLoading] = useState(true);
const [error,setError] = useState(null);  


const URL_API = "http://localhost:8000/messages"; // Testing end point only using the json server with local rest services.


useEffect(() => {
  const getMessages = async () => {
    try {
        const response = await fetch(URL_API);
        if (!response.ok) throw Error("Oops! network or server side problems... :(");   
        const data = await response.json();
        //console.log(data);
        setItems(data);
        } catch (err) {
          setError("Oops something went wrong..")
        } finally {
          setLoading(false);
        }
    }
        (async () => await getMessages())();
        },[])
    
    

    return(
        <div>
            {items && <ChatDetails items={items} />}
        </div>
    )
}
export default Chat;
