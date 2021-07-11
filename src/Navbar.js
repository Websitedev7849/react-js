const Navbar = ({setSearchWord}) => {

    return (
     <nav className="navbar">
        <div className="search-bar">
            <img src="./images/search.png" alt="search bar" />
            <input type="text" onChange={e => setSearchWord(e.target.value)} placeholder="Search by Text, Date..." className="search"/>
        </div>
        <h1 className="Notes">Notes</h1>
     </nav>
    );
}
 
export default Navbar;