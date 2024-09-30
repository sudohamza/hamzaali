import { FaFolderOpen, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { AiFillHome } from "react-icons/ai";
import { FaGithub } from "react-icons/fa";
import { BiDownload, BiLogoGoogle, BiLogoLinkedin } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router";
import meImage from "../assets/meimage.png";

const Home = () => {
  const navigate = useNavigate();
  const [over, setOver] = useState<"home" | "about" | "portfolio" | "">("");
  return (
    <div className="flex justify-center pb-16 bgOne items-center min-h-screen pt-10">
      <div className="mt-52 mx-20">
        <div className="grid gap-10 sm:gird-cols-1 md:grid-cols-12">
          <div className="md:col-span-6 lg:col-span-4">
            <div className="">
              <div className="w-full">
                <div className="px-10 flex-col text-center text-slate-800 justify-center pt-20 pb-5 bg-white rounded-t-xl">
                  <div className="border-2 p-1 -mt-72 rounded-full border-orange-500">
                    <img
                      style={{ backgroundColor: "#eb9b8a" }}
                      className="mx-auto   rounded-full  p-1"
                      width={350}
                      src={meImage}
                    />
                  </div>
                  <h1 className="my-4 text-4xl font-bold">Hamza Ali</h1>
                  <h1 className="text-xl text-gray-500 font-medium">
                    Fullstack Web Developer.
                  </h1>
                </div>
                <div className="text-xl font-medium bg-white mt-0.5 rounded-b-xl p-3">
                  <div className="mb-5 flex px-5 items-center gap-4 text-orange-500">
                    <FaPhoneAlt className="border text-5xl rounded-full p-2 border-orange-500" />
                    <h1 className="text-gray-500">+923354295878</h1>
                  </div>
                  <div className="mb-5 flex font-medium px-5 items-center gap-4 text-orange-500">
                    <CiMail className="border text-5xl rounded-full p-2 border-orange-500" />
                    <h1 className="text-gray-500">askhamzaali@gmail.com</h1>
                  </div>
                  <div className="mb-5 flex px-5 font-medium items-center gap-4 text-orange-500">
                    <IoLocation className="border text-5xl rounded-full p-2 border-orange-500" />
                    <h1 className="text-gray-500">Karachi,Pakistan</h1>
                  </div>
                </div>
              </div>
              <div></div>
            </div>
          </div>
          {/* Second Col */}
          <div className="md:-mt-20 h-full text-center md:text-left md:col-span-6 lg:col-span-8">
            <div className="flex gap-10">
              <div>
                <h1 className="text-2xl text-orange-500 italic ">HELLO I'M</h1>
                <h2 className="text-7xl text-white font-bold mt-4">
                  Hamza Ali!
                </h2>
                <h2 className="text-5xl text-white font-bolder mt-4">
                  Fullstack Web Developer.
                </h2>
                <h2 className="text-2xl max-w-2xl text-white font-bolder mt-4">
                  Hello! I’m a full-stack web developer with expertise in
                  front-end and back-end technologies. I build dynamic,
                  user-friendly applications that prioritize performance and
                  responsiveness.
                </h2>
                <button className="text-xl mx-auto md:mx-0 hover:text-orange-500 hover:bg-white transition-colors duration-500 flex my-8 align-middle px-6 py-3 bg-orange-500 rounded-full text-white font-bold  gap-3 items-center">
                  <BiDownload className="text-2xl" />
                  <p>Download CV</p>
                </button>
                <div className="flex items-center gap-3 my-10">
                  <div className="mx-auto lg:mx-0 flex items-center gap-3">
                    <h1 className="text-white font-bold text-xl">Follow Me:</h1>
                    <a
                      href="https://www.linkedin.com/in/hamza-ali-35bb76309/"
                      target="_blank"
                    >
                      <BiLogoLinkedin className="border hover:bg-orange-500 hover:text-white transition-colors duration-300 border-orange-500 text-4xl cursor-pointer text-orange-500 rounded-full p-1.5" />
                    </a>
                    <a href="https://github.com/sudohamza" target="_blank">
                      <FaGithub className="border hover:bg-orange-500 hover:text-white transition-colors duration-300 border-orange-500 text-4xl cursor-pointer text-orange-500 rounded-full p-1.5" />
                    </a>
                    <a
                      href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=askhamzaali@gmail.com&su=Your%20Subject&body=Your%20message%20here."
                      target="_blank"
                    >
                      <BiLogoGoogle className="border hover:bg-orange-500 hover:text-white transition-colors duration-300 border-orange-500 text-4xl cursor-pointer text-orange-500 rounded-full p-1.5" />
                    </a>
                  </div>
                </div>
              </div>
              <div className="hidden lg:block min-w-44">
                <div className="mt-36">
                  <button
                    onClick={() => navigate("/")}
                    onMouseOver={() => setOver("home")}
                    onMouseOut={() => setOver("")}
                    className="ml-auto my-10 flex items-center hover:text-white   bg-white hover:bg-orange-500 rounded-full"
                  >
                    <h1
                      className={`${
                        over === "home" ? "w-auto px-4" : "w-0"
                      } transition-all overflow-hidden text-white font-bold`}
                    >
                      HOME
                    </h1>
                    <AiFillHome
                      className={`transition-all text-5xl rounded-full p-3 ${
                        over === "home"
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      } `}
                    />
                  </button>
                  <button
                    onClick={() => navigate("/about")}
                    onMouseOver={() => setOver("about")}
                    onMouseOut={() => setOver("")}
                    className="ml-auto my-10 flex items-center hover:text-white   bg-white hover:bg-orange-500 rounded-full"
                  >
                    <h1
                      className={`${
                        over === "about" ? "w-auto px-4" : "w-0"
                      } transition-all overflow-hidden text-white font-bold`}
                    >
                      ABOUT
                    </h1>
                    <IoPersonSharp
                      className={`transition-all text-5xl rounded-full p-3 ${
                        over === "about"
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      } `}
                    />
                  </button>
                  <button
                    onClick={() => navigate("/portfolio")}
                    onMouseOver={() => setOver("portfolio")}
                    onMouseOut={() => setOver("")}
                    className="ml-auto my-10 flex items-center hover:text-white   bg-white hover:bg-orange-500 rounded-full"
                  >
                    <h1
                      className={`${
                        over === "portfolio" ? "w-auto px-4" : "w-0"
                      } transition-all overflow-hidden text-white font-bold`}
                    >
                      PORTFOLIO
                    </h1>
                    <FaFolderOpen
                      className={`transition-all text-5xl rounded-full p-3 ${
                        over === "portfolio"
                          ? "bg-orange-500 text-white"
                          : "bg-white text-orange-500"
                      } `}
                    />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
