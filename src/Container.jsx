import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home';
// import Contact from './pages/Contact';
import Dashboard from './pages/Dashboard';
import Signin from './pages/Signin';
import { signOut, onAuthStateChanged } from 'firebase/auth';
import { auth } from './config/firebase';
import { useEffect, useState } from 'react';
import NavBar from './components/NavBar';


// This is the main container I'll be using in this project, instead of using App.jsx
function Container() {

    const [user, setUser] = useState(null);


    /**
     * useEffect hook is used to add side effect to react component based on some dependecies
     * this hook is called when the component is loaded first time, after that it will be called whenever
     * there is any change in dependency array.
     */
    useEffect(()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // callback function that will be called with auth state changes
            setUser(currentUser);
        })
        return unsubscribe;
    }, []);

    async function handleSignOut() {
        // alert(`signOut? ${auth.currentUser.email}`)
        try {
            await signOut(auth);

            // alert(`user signed out: ${auth.currentUser}`)

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