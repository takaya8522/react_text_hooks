import { useTheme } from "../context/ThemeContext";

const Header = () => {
  const [theme, setTheme] = useTheme();
  const changeTheme = (e) => setTheme(e.target.value);
  const THEMES = ["light", "dark", "red"];
  
  return (
    <header className={`content-${theme}`}>
      {THEMES.map((_theme) => {
        return (
          <label key={_theme}>
            <input
              type="radio"
              value={_theme}
              checked={theme === _theme}
              onChange={changeTheme}
            />
            {_theme}
          </label>
        );
      })}
    </header>
  );
};

export default Header;
