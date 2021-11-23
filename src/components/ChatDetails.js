import React,{useState,useEffect} from 'react';

function ChatDetails({items}){

var [author,setAuthor] = useState('');
var [body,setBody] = useState('');
var [sendersText,setSendersText] = useState('');

useEffect(() => {
console.log({items});
},[])

const handleSubmit = (e) =>{
    e.preventDefault();
    setBody(sendersText);
    setSendersText('');

    fetch("http://localhost:8000/messages", {
        headers: {
            'Content-type': 'application/json'
        },
        method: 'PATCH',
        body: JSON.stringify(items.author, items.body)
    }).then(() => {
        console.log("file updated");
    })
 
}


    return(
        <div className="chat">
            {items.map(items => (
                <form key={items.id}>
                <label>Send A Message</label>
                <input type="text" value={items.author} onChange={(e) => setAuthor(e.target.value)}required placeholder="author's name"></input>
                <textarea value={items.body} onChange={(e) => setBody(e.target.value)} readOnly></textarea>
                <input type="text" value={sendersText} onChange={(e) => setSendersText(e.target.value)}required placeholder="Enter your message here..."></input>
                <button onClick={handleSubmit}>Send</button>
            </form>
            ))}
        </div>
    )
}
export default ChatDetails;