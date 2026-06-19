// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// function Navbar() {

//     const favorites = useSelector(
//         state => state.favorites
//     );

//     return (

//         <nav>

//             <Link to="/">
//                 Home
//             </Link>


//             <Link to="/foods">
//                 Veg Foods
//             </Link>


//             <Link to="/add">
//                 Add Food
//             </Link>


//             <Link to="/favorites">
//                 Favorites ({favorites.length})
//             </Link>


//             <Link to="/register">
//                 Register
//             </Link>


//             <Link to="/login">
//                 Login
//             </Link>


//         </nav>

//     );

// }

// export default Navbar;
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


function Navbar() {


const favorites =
useSelector(
state => state.favorites
);


const isLoggedIn =
localStorage.getItem("isLoggedIn");



return (

<nav>


<Link to="/">
Home
</Link>


<Link to="/foods">
Veg Foods
</Link>



{
isLoggedIn && 
<>

<Link to="/add">
Add Food
</Link>


<Link to="/favorites">

Favorites ({favorites.length})

</Link>


<Link to="/logout">
Logout
</Link>

</>

}



{
!isLoggedIn &&

<Link to="/register">
Register
</Link>

}



{
!isLoggedIn &&

<Link to="/login">
Login
</Link>

}


</nav>

);

}


export default Navbar;