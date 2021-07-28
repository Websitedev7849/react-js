import { useState } from "react";

const ThemeToggle = ({theme, useTheme}) => {

    const [toggled, useToggled] = useState("");

    const HandleClick = () => {

        // callback returns value based on theme variable.
        useToggled(() => {
            if (toggled === "toggled") 
                return ""
            return "toggled"
        });

        useTheme(() => {
            if (theme === "light-theme")
                return "dark-theme";
            return "light-theme";
        });
    }

    return (
        <div className="theme-toggle-container">
            <label htmlFor="toggle-theme-btn" className="label-toggle">
                <div className="circle-container">
                    <div className={`circle ${toggled}`}></div>
                </div>
            </label>
            <input type="checkbox" id="toggle-theme-btn" onClick={HandleClick} />
        </div>
    );
}
 
export default ThemeToggle;
