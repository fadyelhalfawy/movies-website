import {NavLink} from "react-router-dom";
import Link from "react-router-dom/Link";

const NavBar = () => {

    return(
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <Link className="navbar-brand" to="/">Displaying...</Link>
                <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        <NavLink className="nav-item nav-link" to="/movies">
                            Movies
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/customers">
                            Customers
                        </NavLink>
                        <NavLink className="nav-item nav-link" to="/rentals">
                            Rentals
                        </NavLink>
                </div>

            </div>
                <div className="navbar-nav">
                    <NavLink className="nav-item nav-link" to="/login">
                        Login
                    </NavLink>

                    <NavLink className="nav-item nav-link" to="/signup">
                        Signup
                    </NavLink>
                </div>
            </nav>
    );
}

export default NavBar;