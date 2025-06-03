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
                <h1>
                    Welcome {user.displayName?.toUpperCase()}
                </h1>
            </>
            
        );
    }

    return (
        <>
        {
            user? 
            dashboardUI() : 
            loginUI()
        }
        </>
        
    );
}

export default Dashboard;