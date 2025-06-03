import { useState } from "react";
import { GoogleAuthProvider, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, GoogleAuth } from "../config/firebase";
import { useNavigate } from "react-router-dom";
import "../../css/signin.css"

function Signin() {

    console.log("SignInPageRefresh")
    const[email, setEmail] = useState(''); 
    const[password, setPassword] = useState('');

    const navigate = useNavigate();


    async function handleSignIn() {
        // do firebase signin
        try {
            await signInWithEmailAndPassword(auth, email, password);
            // alert(`User logged in`); 
            navigate('/');
            
        } catch(error) {
            console.log(`Error While signing in: ${error}`);
        }
        

    }

    async function handleSignin_Google() {
        try{
            const result = await signInWithPopup(auth, GoogleAuth)
            // const credential = GoogleAuthProvider.credentialFromResult(result);
            // const token = credential.accessToken;       // This token is used to create JWT token.
            const user = result.user;

            console.log(`DisplayName: ${user.displayName}`);
            // console.log(user)

            navigate('/')
        } catch(error) {
            console.log(error);
        }
    }

    function updateEmailState(element) {
        console.log(element.target.value)
        setEmail(element.target.value)
    }

    return (
        <section id="signinSection">
            <h1>Sign In</h1>
            {/* implement the UI for Sign in page */}

            <input 
            type="string" 
            placeholder="Email" 
            value={email}
            onChange={updateEmailState}
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