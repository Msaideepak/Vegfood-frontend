import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {

    const favorites = useSelector(
        state => state.favorites
    );

    return (

        <nav>

            <Link to="/">
                Home
            </Link>


            <Link to="/foods">
                Veg Foods
            </Link>


            <Link to="/add">
                Add Food
            </Link>


            <Link to="/favorites">
                Favorites ({favorites.length})
            </Link>


            <Link to="/register">
                Register
            </Link>


            <Link to="/login">
                Login
            </Link>


        </nav>

    );

}

export default Navbar;