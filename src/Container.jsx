import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './pages/Home';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';


// This is the main container I'll be using in this project, instead of using App.jsx
function Container() {

    /**
     * 'user' state variable to, this will be used to update UI when user login or logout.
     */
    const [user, setUser] = useState(null);


    /**
     * useEffect hook is used to add side effect to react component based on some dependecies
     * this hook is called when the component is loaded first time, after that it will be called whenever
     * there is any change in dependency array.
     */
    useEffect(()=>{

        /** 
         * We are adding Auth state change listener (onAuthStateChanged), it takes the firebase auth object and a callback
         * function that will be called when auth state changes (i.e of user login or logout).
         * In this callback function we are setting the 'user' state variable.
         * */ 
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            setUser(currentUser);
        })

        /**
         * The onAuthStateChanged() method returns a reference to 'unsubscribe' function. This function can be called
         * to stop listening to auth state change events (unsubscribe from this event).
         * We return this function reference from useEffect hook, so that when this react component is unmounted from UI,
         * react will call this unsubscribe function, this is a cleanup strategy to prevent any memory leak and unwanted 
         * behaviour.
         */
        return unsubscribe;
    }, []);

    async function handleSignOut() {
        try {
            await signOut(auth);
        }catch(error) {
            console.log(error);
        }
    }

    return (
        
        <BrowserRouter>
            <NavBar user={user} signoutHandler={handleSignOut} />
            <main>
                <Routes>
                    <Route path='/' element={<Home user={user} />} />
                    {/* <Route path='/contact' element={<Contact />} /> */}
                    <Route path='/dashboard' element={<Dashboard user={user} />} />
                    <Route path='signin' element={<Signin />} />
                </Routes>
            </main>
            
        </BrowserRouter>
    
        
    );
}

export default Container;