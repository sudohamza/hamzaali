import { AiFillMoon, AiFillSun } from "react-icons/ai";
import useTheme from "../hooks/theme";

const LightDarkSwitch = () => {
  const { toggleTheme, theme } = useTheme();

  return (
    <div className="z-[9999] fixed top-6 right-6 shadow-[-2px_0px_32px_8px_rgba(0,_0,_0,_0.2)] rounded-full bg-white">
      <button
        onClick={toggleTheme}
        className={`p-3 bg-[var(--color-brand)] text-white rounded-full text-2xl font-bold`}
      >
        {theme === "dark" ? <AiFillSun /> : <AiFillMoon />}
      </button>
    </div>
  );
};

export default LightDarkSwitch;
