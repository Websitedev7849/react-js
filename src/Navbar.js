import { useEffect } from "react";

const Navbar = ({fill, theme, useFill, setSearchWord}) => {

    // this callback is to work around react hooks rules
    const Callback = () => {
        useFill( () => {
            if (theme === "light-theme") {
                return "#000000";
            }
            return "#ffffff"
        });
    }
    
    useEffect(() => {
        Callback();
    })

    return (
     <nav className="navbar">
        <div className="search-bar">
            
            <svg fill={fill} xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 30 30" width="30px" height="30px"><path fill="none" stroke={fill} strokeMiterlimit="10" strokeWidth="2" d="M13 4A9 9 0 1 0 13 22A9 9 0 1 0 13 4Z"/><path fill="none" stroke={fill} strokeLinecap="round" strokeMiterlimit="10" strokeWidth="2" d="M26 26L19.437 19.437"/></svg>

            <input className="search" type="text" onChange={e => setSearchWord(e.target.value)} placeholder="Search by Text, Date..." />
        </div>
        <h1 className="Notes">Notes</h1>
     </nav>
    );
}
 
export default Navbar;