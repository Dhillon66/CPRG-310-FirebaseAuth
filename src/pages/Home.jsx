
// import { useState } from "react";


function Home({user}) {

    console.log(user);

    return (
        <>
            <h1>Welcome {user?.displayName?.toUpperCase()}</h1>
        </>
    );
}



export default Home;