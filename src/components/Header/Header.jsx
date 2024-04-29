import { useState, useEffect } from "react";
import FormatListBulletedIcon from "@mui/icons-material/FormatListBulleted";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";

const Header = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const bodyClass = document.body.classList;
    isDarkMode ? bodyClass.add("dark") : bodyClass.remove("dark");
  }, [isDarkMode]);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <header className="flex flex-row h-20 border-b-2 border-solid items-center justify-around max-lg:justify-between max-lg:p-4 bg-white dark:bg-black text-black dark:text-white">
      <div className="flex flex-row">
        <FormatListBulletedIcon fontSize="large" className="pt-2" />
        <h2 className="text-4xl underline font-roboto ml-2">To Do List</h2>
      </div>
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <LightModeIcon /> : <DarkModeIcon />}
      </button>
    </header>
  );
};

export default Header;
