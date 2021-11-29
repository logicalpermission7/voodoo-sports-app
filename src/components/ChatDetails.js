import React,{useState,useEffect} from 'react';

function ChatDetails({data,loading,bad_load,localJson}){

var [author,setAuthor] = useState('');
var [body,setBody] = useState('');
var [sendersText,setSendersText] = useState('');

useEffect(() => {
//console.log(data);
},[])

//-----------------------------storing a json object in local storage---------------
var myObj = {

    id: 1,
    name: "",
    body: ""
};
var myJSON = JSON.stringify(myObj);
localStorage.setItem("elvis",myJSON);



const handleSubmit = (e) =>{
    e.preventDefault();
    const data = { author, sendersText}; // Object created to store state information from the form below and update json file.
    setBody(sendersText); // updates "body state" with "sendersText state" data from the form below.
    //console.log(data)
    setSendersText(''); //clears sendersState.
    fetch("http://localhost:8000/messages/1", {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data)

    }).then(() => {
        //console.log("file updated");
    })
 
}


    return(
        <div className="chat">
            {loading && <div style={{color: "rgb(0, 248, 21)"}}>incoming message.....</div>}
            {bad_load && <div style={{color: "#fd2600"}}>{bad_load}</div>}
            {data.map(items => (
                <form onSubmit={handleSubmit} key={items.id}>
                <label>Send A Message</label>
                <input type="text" value={author} onChange={(e) => setAuthor(e.target.value)}required placeholder="author's name"></input>
                <textarea value={author + " : " + body} onChange={(e) => setBody(e.target.value)} readOnly></textarea>
                <input type="text" value={sendersText} onChange={(e) => setSendersText(e.target.value)}required placeholder="Enter your message here..."></input>
                <button>Send</button>
            </form>
            ))}
        </div>
    )
}
export default ChatDetails;