import { NavLink } from "react-router-dom";

function Header(){
    return(
        <> 
            <header>
                <div className="logo">
                    <h2>Products</h2>
                </div>
            <nav>
                <ul>
                    <li><NavLink to="/">Home</NavLink></li>
                    <li><NavLink to="/category/groceries">Groceries</NavLink></li>
                    <li><NavLink to="/category/fragrances">Fragrances</NavLink></li>
                    <li><NavLink to="/category/womens-bags">Womens Bags</NavLink></li>
                </ul>
            </nav>
            </header>
        </>
    )
}

export default Header