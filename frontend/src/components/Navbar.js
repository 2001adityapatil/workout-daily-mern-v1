import {Link} from 'react-router-dom';

const Navbar = function(){
    return(
        <header>
            <div className="container">
                <Link to="/">
                    <h1>Workout daily</h1>
                </Link>
            </div>
        </header>
    )
}

export default Navbar;