import { useEffect, useState } from "react";
import { motion, useAnimation } from "framer-motion";
import { AiOutlineMenu, AiOutlineClose, AiFillHome } from "react-icons/ai";
import { IoPersonSharp } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";

import { NavLink, useLocation } from "react-router-dom";

type MainAnimationProps = {
  children?: React.ReactNode;
  menu?: boolean;
};

const SideMenu = () => {
  const [open, setOpen] = useState(false);

  const mainDiv = useAnimation();
  const innerDiv = useAnimation();

  const sequence = async () => {
    await mainDiv.start({
      height: open ? "auto" : 0,
      transition: { duration: 0.2 },
    });

    innerDiv.start({
      width: open ? "auto" : 0,
      transition: { duration: 1, delay: 1 },
    });
  };

  useEffect(() => {
    sequence();
  }, [open]);

  return (
    <div className="hidden lg:block fixed top-8 left-8  shadow-lg rounded-full bg-white">
      <button
        onClick={() => setOpen((prev) => !prev)}
        className={`p-2 transition-all ease-in ${
          open ? "bg-white text-orange-600" : "bg-orange-600 text-white"
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
          } transition-colors duration-1000`}
        >
          {/* Home */}
          <div className="flex gap-5 py-1 mb-1.5 hover:text-orange-600 cursor-pointer">
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
              to="/"
              className={({ isActive }) =>
                isActive ? "border-r-4 border-orange-500 " : ""
              }
            >
              <button className="ml-2 text-orange-500">
                <AiFillHome className="text-2xl mr-1 transition-colors duration-1000 ease-in-out" />
              </button>
            </NavLink>
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
              to="/"
            >
              <h2 className="transition-colors hover:text-orange-500 font-extrabold text-1xl duration-1000 ease-in-out">
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
                isActive ? "border-r-4 border-orange-500 " : ""
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="ml-2 text-orange-500">
                <IoPersonSharp className="text-2xl mr-1 transition-colors duration-1000 ease-in-out" />
              </button>
            </NavLink>
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
              to="/about"
            >
              <h2 className="transition-colors hover:text-orange-500 font-extrabold text-1xl duration-1000 ease-in-out">
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
                isActive ? "border-r-4 border-orange-500 " : ""
              }
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <button className="ml-2 text-orange-500">
                <FaFolderOpen className="text-2xl mr-1 transition-colors duration-1000 ease-in-out" />
              </button>
            </NavLink>
            <NavLink
              onClick={() => setOpen((prev) => !prev)}
              className={({ isActive }) =>
                isActive ? "text-orange-500" : "text-white"
              }
              to="/portfolio"
            >
              <h2 className="transition-colors hover:text-orange-500 font-extrabold text-1xl duration-1000 ease-in-out">
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
  return (
    <div
      style={{ backgroundColor: "#181a1d", zIndex: 9999 }}
      className="lg:hidden fixed justify-around items-center flex bottom-0 left-0 right-0 h-16"
    >
      <NavLink to="/">
        <AiFillHome className="hover:bg-black transition-colors text-5xl bg-orange-500  text-white  rounded-full p-3" />
      </NavLink>
      <NavLink to="/about">
        <IoPersonSharp className="hover:bg-black transition-colors text-5xl bg-orange-500  text-white  rounded-full p-3" />
      </NavLink>
      <NavLink to="/portfolio">
        <FaFolderOpen className="hover:bg-black transition-colors text-5xl bg-orange-500  text-white  rounded-full p-3" />
      </NavLink>
    </div>
  );
};

const MainAnimation: React.FC<MainAnimationProps> = ({ children, menu }) => {
  const firstDivControls = useAnimation();
  const secondDivControls = useAnimation();
  const thirdDivControls = useAnimation();
  const { pathname } = useLocation();

  const reset = () => {
    firstDivControls.set({ height: 0, opacity: 1 });
    secondDivControls.set({ marginLeft: 0 });
    thirdDivControls.set({ marginRight: 0 });
  };

  const sequence = async () => {
    reset();
    await firstDivControls.start({
      opacity: 0,
      height: "100%",
      transition: { duration: 1 },
    });

    secondDivControls.start({
      marginLeft: `-100%`,
      transition: { duration: 1 },
    });
    thirdDivControls.start({
      marginRight: "-100%",
      transition: { duration: 1 },
    });
  };
  useEffect(() => {
    sequence();
  }, [firstDivControls, secondDivControls, pathname]);

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
