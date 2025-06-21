import { useState } from "react";
import { motion } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";
import useMenuAnimation from "../hooks/menu-animation";
import useMainAnimation from "../hooks/main-animation";
import CustomButton from "./CustomButton";

type MainAnimationProps = {
  children?: React.ReactNode;
  menu?: boolean;
};

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const { mainDiv } = useMenuAnimation(open);

  return (
    <div className="hidden lg:block fixed top-8 left-8 shadow-[-2px_0px_32px_8px_rgba(0,_0,_0,_0.2)] rounded-full bg-white">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`p-2 transition-all ease-in ${
          open
            ? "bg-white text-[var(--color-brand)}"
            : "bg-[var(--color-brand)] text-white"
        } rounded-full text-2xl font-bold`}
      >
        {open ? <AiOutlineClose /> : <AiOutlineMenu />}
      </button>

      <motion.div
        animate={mainDiv}
        className={`${
          open ? "" : "overflow-hidden"
        }  text-center  w-10 mx-auto `}
      >
        <div
          className={`${
            open ? "w-auto" : "w-0"
          } transition-colors duration-1000 `}
        >
          {/* Home */}
          <div className="flex backdrop-blur-lg  gap-5 py-1 mb-1.5 hover:text-orange-600 cursor-pointer">
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              to="/"
              className={({ isActive }) =>
                isActive ? "border-r-4 border-[var(--color-brand)] " : ""
              }
            >
              <button className="ml-2 text-[var(--color-brand)]">
                <AiFillHome className="text-2xl mr-1 transition-colors duration-1000 ease-in-out" />
              </button>
            </NavLink>
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              className={({ isActive }) =>
                isActive ? "text-[var(--color-brand)]" : "dark:text-white"
              }
              to="/"
            >
              <h2 className=" transition-colors hover:text-[var(--color-brand)] font-extrabold text-1xl duration-1000 ease-in-out">
                HOME
              </h2>
            </NavLink>
          </div>
          {/* About */}
          <div className="flex gap-5 py-1   mb-2.5 hover:text-orange-600 cursor-pointer">
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              to="/about"
              className={({ isActive }) =>
                isActive
                  ? "border-r-4 border-[var(--color-brand)] "
                  : "dark:text-white"
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="ml-2 text-[var(--color-brand)]">
                <IoPersonSharp className="text-2xl mr-1 transition-colors duration-1000 ease-in-out" />
              </button>
            </NavLink>
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              className={({ isActive }) =>
                isActive ? "text-[var(--color-brand)]" : "dark:text-white"
              }
              to="/about"
            >
              <h2 className="transition-colors hover:text-[var(--color-brand)] font-extrabold text-1xl duration-1000 ease-in-out">
                ABOUT
              </h2>
            </NavLink>
          </div>
          {/* Portfolio */}
          <div className="flex gap-5 py-1   mb-2.5 hover:text-orange-600 cursor-pointer">
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              to="/portfolio"
              className={({ isActive }) =>
                isActive
                  ? "border-r-4 border-[var(--color-brand)] "
                  : "dark:text-white"
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="ml-2 text-[var(--color-brand)]">
                <FaFolderOpen className="text-2xl mr-1 transition-colors duration-1000 ease-in-out" />
              </button>
            </NavLink>
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              className={({ isActive }) =>
                isActive ? "text-[var(--color-brand)]" : "dark:text-white"
              }
              to="/portfolio"
            >
              <h2 className="transition-colors hover:text-[var(--color-brand)] font-extrabold text-1xl duration-1000 ease-in-out">
                PORTFOLIO
              </h2>
            </NavLink>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

const SmallMenu = () => {
  const { pathname } = useLocation();

  function isActive(required: string): string {
    const result = pathname === required;
    return result ? "border rounded-full border-orange-700 border-2 p-1" : "";
  }

  return (
    <div
      style={{ zIndex: 9999 }}
      className="bg-white dark:bg-[#191a1e] lg:hidden fixed justify-around items-center flex bottom-0 left-0 right-0 h-16 shadow-[0px_-5px_12px_0px_rgba(0,_0,_0,_0.1)]"
    >
      <NavLink to="/" className={isActive("/")}>
        <CustomButton className="p-3">
          <AiFillHome className="text-xl" />
        </CustomButton>
      </NavLink>
      <NavLink to="/about" className={isActive("/about")}>
        <CustomButton className="p-3">
          <IoPersonSharp className="text-xl" />
        </CustomButton>
      </NavLink>
      <NavLink to="/portfolio" className={isActive("/portfolio")}>
        <CustomButton className="p-3">
          <FaFolderOpen className="text-xl" />
        </CustomButton>
      </NavLink>
    </div>
  );
};

const MainAnimation: React.FC<MainAnimationProps> = ({ children, menu }) => {
  const { firstDivControls, secondDivControls, thirdDivControls } =
    useMainAnimation();

  return (
    <>
      <div
        style={{ zIndex: 9999999, pointerEvents: "none" }}
        className="w-screen h-screen flex fixed justify-center items-center"
      >
        <motion.div
          animate={firstDivControls}
          initial={{ height: 0 }}
          style={{ zIndex: 999999999 }}
          className="bg-slate-300 w-1"
        />
        <motion.div
          animate={secondDivControls}
          initial={{ marginLeft: 0 }}
          className="fixed w-1/2 h-full bg-black top-0 left-0 "
        />
        <motion.div
          animate={thirdDivControls}
          initial={{ marginRight: 0 }}
          className="fixed w-1/2 h-full bg-black top-0 right-0"
        />
      </div>
      <SmallMenu />
      {menu === undefined ? <SideMenu /> : menu ? <SideMenu /> : null}
      {children}
    </>
  );
};

export default MainAnimation;
