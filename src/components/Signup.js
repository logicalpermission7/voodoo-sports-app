import React,{useState,useEffect} from 'react';
import {getAuth,createUserWithEmailAndPassword,updateProfile} from 'firebase/auth';
import { Link } from 'react-router-dom';


function Signup({history}){

const [username, setUserName] = useState("");
const [email,setEmail] = useState("");
const [password,setPassword] = useState("");
const [loading,setLoading] = useState(false);

useEffect(() => {
    const token = localStorage.getItem('token');  // this will check for local token and keep you logged in if token is true.


    if (token) {
        history.push('/data')
    }
}, [])

const onSignup = (e) =>{
    setLoading(true);
    e.preventDefault();
    setUserName(username);
    setEmail(email);
    setPassword(password);
    const auth = getAuth();

    
    createUserWithEmailAndPassword(auth,email,password)
        .then(() => {
            updateProfile(auth.currentUser, {displayName: username})
                .then(() => history.push('/')) 
                .catch((e) => alert(e.message))
    }).catch((e) => alert(e.message))
    .finally(() => setLoading(false))
    
}


    return(
        <div className="sign-up">
            <form>
                <h1>Sign Up</h1>
                <label>Username</label>
                <input type="text" value={username} placeholder="Create a Username" required onChange={(e) => setUserName(e.target.value)}></input>
                <label>Email</label>
                <input type="email" value={email} placeholder="Enter Your Email" required onChange={(e) => setEmail(e.target.value)}></input>
                <label>Password</label>
                <input type="password" value={password} placeholder="Create a Password" required onChange={(e) => setPassword(e.target.value)}></input>
                <br/><br/>
                <button onClick={onSignup}>{loading ? "Creating user..." : "Signup"}</button><br/><br/><Link to="/">Already have account?</Link>
            </form>
        </div>
    )
}
export default Signup;