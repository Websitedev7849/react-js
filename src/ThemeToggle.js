
const ThemeToggle = ({theme, useTheme}) => {


    const HandleClick = () => {

        // callback returns value based on theme variable.
        useTheme(() => {
            if (theme === "light-theme")
                return "dark-theme";
            return "light-theme";
        });
    }

    return (
        <div>
        <label htmlFor="toggle-dark-theme"></label>
        <input type="checkbox" id="toggle-dark-theme" onClick={HandleClick} />
        </div>
    );
}
 
export default ThemeToggle;
