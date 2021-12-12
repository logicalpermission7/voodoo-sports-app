import React,{useState,useEffect} from 'react';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { Link } from 'react-router-dom';


function Login({history}){

    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");
    const [loading,setLoading] = useState(false);

    useEffect(() => {
        const token = localStorage.getItem('token'); // this will check for local token and keep you logged in if token is true.

        if (token) {
            history.push('/data')
        }
    }, [])


    const onlogin = (e) => {
        setLoading(true);
        e.preventDefault();
        setEmail(email);
        setPassword(password);
        const auth = getAuth();
        signInWithEmailAndPassword(auth,email,password)
            .then((userCredential) => {
                localStorage.setItem('token', userCredential._tokenResponse.idToken);
                history.push('/data')
            })
            .catch(e => alert(e.message))
            .finally(() => setLoading(false))

    }


    return(
        <div className="login-title">
                <h1>THE SPREAD BOOK</h1>
                <br/>
                <h3>analysis, patterns and behaviours through inductive reasoning</h3>
        
                <div className="login">
                    <h2>Login</h2>
                    <form>
                        <label>Email</label>
                        <input type="email" placeholder="Enter Your Email" value={email} required onChange={(e) => setEmail(e.target.value)}></input>
                        <label>Password</label>
                        <input type="password" placeholder="Enter Your Password" value={password} required onChange={(e) => setPassword(e.target.value)}></input>
                        <br/><br/>
                        <button onClick={onlogin}>{loading ? "Logging you in..." : "Login"}</button> <br/><br/><Link to="/signup">Don't have an account?</Link>
                    </form>
                </div>
       </div>
    )
}
export default Login;