import classNames from "classnames";
import * as React from "react";
import { useEffect } from "react";

interface AppColorModeProps {
  className?: string;
}

export const AppColorMode = ({ className }: AppColorModeProps) => {
  const classes = classNames(className, "toggle-theme color-mode cursor-pointer");
  const [mode, setMode] = React.useState<"light" | "dark">("light");
  const [ defaultChecked, setDefaultChecked ] = React.useState<boolean>(false)
  useEffect(() => {
    // On page load or when changing themes, best to add inline in `head` to avoid FOUC
    if (
      localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
    ) {
      document.documentElement.classList.add("dark");
      document.documentElement.classList.remove("light");
      setMode("dark");
      setDefaultChecked(true);
    } else {
      document.documentElement.classList.add("light");
      document.documentElement.classList.remove("dark");
      setMode("light");
      setDefaultChecked(false);
    }
  }, []);

  const handleToogle = (_e: any) => {
    document.documentElement.classList.toggle("dark");
    setMode(mode === "dark" ? "light" : "dark");
  };

  return (
    <div className={classes}>
      <label className={classes} htmlFor="checkbox">
        <input
          type="checkbox"
          id="checkbox"
          onChange={handleToogle}
          defaultChecked={defaultChecked}
        />
        <div className="slider round"></div>
      
          {mode === "dark" 
          ? <span className='absolute top-2 right-2'>🌕 </span>
          : <span className='absolute top-2 left-2'>🌙</span>
          }
      </label>
    </div>
  );
};

export default AppColorMode;
