import '../../css/dashboard.css'

function Dashboard({user}) {


    const loginUI = () => {
        return (
            <h1>
                Please login into your account to see details.
            </h1>
        );
    }

    const dashboardUI = () => {
        return (
            <>
                <h1>Dashboard:</h1>
                <div id="dashboardContainer">
                    <div id="leftContainer">

                        <img src={user.photoURL} />

                    </div>
                    <div id="rightContainer">
                        <h3>Name: <span>{user.displayName? user.displayName.toUpperCase() : "<No Name>"}</span></h3>
                        <p>Email: <span>{user.email.toUpperCase()}</span></p>
                    </div>
                </div>
            
            </>
            
        );
    }

    return (
        <>
        {
            /**
             * Logic to check if 'user' object is not null, then call dashboardUI() method to display the dashboard.
             * If 'user' object is null then loginUI() method will be called and a default UI is displayed
             */

            user?
            dashboardUI() : 
            loginUI()
        }
        </>
        
    );
}

export default Dashboard;