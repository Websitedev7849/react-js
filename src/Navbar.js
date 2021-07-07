const Navbar = () => {
    return (
     <nav className="navbar">
        <div className="search-bar">
            <img src="./images/search.png" alt="search bar" />
            <input type="text" placeholder="search" className="search"/>
        </div>
        <h1 className="Notes">Notes</h1>
     </nav>
    );
}
 
export default Navbar;