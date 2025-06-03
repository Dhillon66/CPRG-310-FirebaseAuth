import { Link } from "react-router-dom";


function NavBar(props) {
    

    return (
        <nav style={{backgroundColor: "#000", padding: '10px 0'}}>
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