import Button from "app/components/common/button/Button";
import { MoonSvg, SunSvg } from "app/components/common/svg/Svg";
import { useState } from "react";
import Theme from "stylist/core/builder/variants/Theme";

const LS_ACTIVE_THEME_KEY = "active_theme";
const getNewTheme = (theme: string) => theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT;
const getThemeFromLocalStorage = () => localStorage.getItem(LS_ACTIVE_THEME_KEY) ?? Theme.LIGHT;
const setThemeInLocalStorage = (theme: Theme) => { localStorage.setItem(LS_ACTIVE_THEME_KEY, theme); };
const toggleThemeInDocument = () => { document.documentElement.classList.toggle("dark"); };
const checkLocalStorage = () => {
    if (getThemeFromLocalStorage() === Theme.DARK)
        toggleThemeInDocument();
};
checkLocalStorage();

const ThemeSwitcher: React.FC = () => {
    const [theme, setTheme] = useState(getThemeFromLocalStorage());

    const toggleTheme = () => {
        const newActive = getNewTheme(theme);
        setTheme(newActive);
        setThemeInLocalStorage(newActive);
        toggleThemeInDocument();
    };

    return <Button onClick={toggleTheme}>{theme === Theme.LIGHT ? MoonSvg : SunSvg}</Button>
}

export default ThemeSwitcher;