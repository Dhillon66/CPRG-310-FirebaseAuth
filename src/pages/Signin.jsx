import { useState } from "react";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, GoogleAuth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../../css/signin.css"

function Signin() {

    /**
     * We are creating state variables to keep track of email and password.
     */
    const[email, setEmail] = useState(''); 
    const[password, setPassword] = useState('');

    const navigate = useNavigate();



    async function handleSignIn() {
        try {
            const result = await signInWithEmailAndPassword(auth, email, password);
            console.log(result.user);
            navigate('/dashboard');     // on successful login, navigate to dashboard page.
            
        } catch(error) {
            console.log(`Error While signing in: ${error}`);
        }
        

    }

    async function handleSignin_Google() {
        try{
            const result = await signInWithPopup(auth, GoogleAuth)

            const user = result.user;

            console.log(`DisplayName: ${user.displayName}`);

            navigate('/dashboard')      // on successful login, navigate to dashboard page.
        } catch(error) {
            console.log(error);
        }
    }


    return (
        <section id="signinSection">
            <h1>Sign In</h1>

            <input 
            type="string" 
            placeholder="Email" 
            value={email}
            onChange={(element) => setEmail(element.target.value)}
            />

            <input 
            type="password" 
            placeholder="Password" 
            value={password}
            onChange={(element) => setPassword(element.target.value)}
            />

            <button onClick={handleSignIn}>Sign In</button>
            <button onClick={handleSignin_Google}>Sign In with Google</button>

            
        </section>
    );
}

export default Signin;