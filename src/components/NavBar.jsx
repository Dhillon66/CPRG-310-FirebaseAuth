import { Link } from "react-router-dom";


function NavBar(props) {
    

    const localStyle = {
        header: {
            backgroundColor: '#000',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '80px',
        },
    }


    return (
        <nav style={localStyle.header}>
            <div>
                <Link to='/'>Home</Link>
                {/* <Link to='/contact'>Contact</Link> */}
                <Link to='/dashboard'>Dashboard</Link>
                {
                    props.user? 
                    <Link onClick={props.signoutHandler}>Sign out</Link> : 
                    <Link to='/signin'>Sign In</Link>
                }
            </div>
        </nav>
    );
}

export default NavBar;