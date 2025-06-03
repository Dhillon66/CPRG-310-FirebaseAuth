
// import { useState } from "react";


function Home(props) {

    

    return (
        <>
        {
            props.Loading? <h1>Loading...</h1> :
                props.User?
                <h1>Home {props.User?.displayName}</h1>:
                <h1>Signin to your account</h1>
        }
        {
            props.User? 
            <img src={props.User.photoURL}  />:null
        }
        </>
    );
}



export default Home;