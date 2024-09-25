import {
  FaCss3Alt,
  FaFolderOpen,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { personalInfo } from "../data/info";
import { MdOutlineSchool } from "react-icons/md";
import { LiaSchoolSolid } from "react-icons/lia";
import { IoCodeSlash } from "react-icons/io5";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbBrandMongodb } from "react-icons/tb";
import leetCode from "../assets/leetcode.png";

const About = () => {
  return (
    <div>
      {/* Heading */}
      <div className="flex items-center justify-center py-10">
        <div className="page__heading">
          <h1 className=" page__heading--title text-white">ABOUT ME</h1>
          <h2 className="page__heading--subtitle text-white">
            ABOUT <span className="text-orange-500">ME</span>
          </h2>
        </div>
      </div>
      {/* First Section */}
      <div className="mt-16">
        <div className="container mx-auto  px-5">
          <div className="md:flex space-x-4 gap-5 items-center justify-between">
            {/* Text */}
            <div className="sm:w-full lg:w-1/2">
              <h1 className="text-3xl text-orange-500 font-bold">ABOUT ME</h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl text-white font-bold my-5">
                I build robust web solutions focused on user-friendly design.
              </h1>
              <h1 className="text-3xl my-10 text-orange-500 font-bold">
                PERSONAL INFOS:
              </h1>
              <div className="grid grid-cols-2">
                {personalInfo.map((item) => {
                  return (
                    <>
                      <div className="col-span-1 my-3 gap-5 flex items-center">
                        <div className="p-1 rounded-full border-orange-500 border-2">
                          <div className="bg-orange-500 p-1 rounded-full"></div>
                        </div>
                        <h1 className="sm:text-sm xl:text-xl text-white">
                          {item}
                        </h1>
                      </div>
                    </>
                  );
                })}
              </div>
              <button className="text-xl   hover:text-orange-500 hover:bg-white transition-colors duration-500 flex my-8 align-middle px-6 py-3 bg-orange-500 rounded-full text-white font-bold  gap-3 items-center">
                <p>Hire Me</p>
              </button>
            </div>
            {/* Image */}
            <div className="relative">
              <img src="https://themihub.com/html/morex-bootstrap/morex/assets/img/other/about.png" />
              <div
                style={{ zIndex: -99 }}
                className="animate-up-down absolute rounded-full p-20 border-8 border-orange-500 -ml-16 -mt-20"
              ></div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 border-t mt-36 border-black"></div>
      {/* Second Section */}
      <div className="">
        <div className="container md:mx-auto py-20 ">
          <div className="block  lg:flex items-center px- ">
            <div className=" text-center lg:text-left">
              <h1 className="text-3xl text-orange-500 font-bold">
                EXPERIENCE AND EDUCATION
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl text-white font-bold my-5">
                Resume of Experience and Education
              </h1>
            </div>
            <div>
              <p className="text-white text-xl ml-auto px-5 text-center lg:text-left lg:w-1/2 ">
                In this section, you will find a comprehensive overview of my
                previous and ongoing experiences, along with my educational
                background.
              </p>
            </div>
          </div>
          {/* Resume Steps */}
          <div className="pl-2 mt-16 block lg:flex">
            {/* Col One */}
            <div className="w-full lg:w-1/2">
              {/* 1 */}
              <div className="flex gap-5">
                <div className="">
                  <div className="p-2 bg-white border-2 border-orange-500 rounded-full"></div>
                  <div className="border-l-2 w-0 h-full ml-2 border-orange-500"></div>
                </div>
                <div>
                  <div className="flex gap-5 -mt-3 pb-16">
                    <div>
                      <LiaSchoolSolid className="bg-orange-500 text-white p-2 text-6xl rounded-full" />
                    </div>
                    <div>
                      <div className="sm:block 2xl:flex  items-center  text-white font-bold text-2xl  md:text-3xl">
                        <div>MATRICULATION</div>
                        <div>
                          <span className="bg-orange-500 text-white px-4 rounded-full 2xl:ml-3 text-sm md:text-lg py-1.5">
                            Farabi Govt Sec School.
                          </span>
                        </div>
                      </div>
                      <p className="text-white text-lg max-w-80 my-5 mr-2">
                        I completed my matriculation in 2018, (Science group),
                        where I focused on subjects such as Biology, Chemistry,
                        Physics and Mathematics.
                      </p>
                      <div className="gap-3  font-bold text-orange-500 flex items-center">
                        <div className="bg-orange-500 p-1"></div>
                        <h1 className="text-xl">2018</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex gap-5">
                <div className="">
                  <div className="p-2 bg-white border-2 border-orange-500 rounded-full"></div>
                  <div className="border-l-2 w-0 h-full ml-2 border-orange-500"></div>
                </div>
                <div>
                  <div className="flex gap-5 -mt-3 pb-16">
                    <div>
                      <MdOutlineSchool className="bg-orange-500 text-white p-2 text-6xl rounded-full" />
                    </div>
                    <div>
                      <div className="sm:block 2xl:flex  items-center  text-white font-bold text-2xl  md:text-3xl">
                        <div>DAE ( ELECTRONICS )</div>
                        <div>
                          <span className="bg-orange-500 text-white px-4 rounded-full 2xl:ml-3 text-sm md:text-lg py-1.5">
                            St. Patrick’s Inst. of Sci. & Tech.
                          </span>
                        </div>
                      </div>
                      <p className="text-white text-lg max-w-80 my-5 mr-2">
                        In 2020, I earned my Diploma in Electronics, focusing on
                        modern electronics and computation, equipping me to
                        tackle real-world challenges.
                      </p>
                      <div className="gap-3  font-bold text-orange-500 flex items-center">
                        <div className="bg-orange-500 p-1"></div>
                        <h1 className="text-xl">2020</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 3 */}
              <div className="flex gap-5">
                <div className="">
                  <div className="p-2 bg-white border-2 border-orange-500 rounded-full"></div>
                  <div className="border-l-2 w-0 h-full ml-2 border-orange-500"></div>
                </div>
                <div>
                  <div className="flex gap-5 -mt-3 pb-16">
                    <div>
                      <IoCodeSlash className="bg-orange-500 text-white p-2 text-6xl rounded-full" />
                    </div>
                    <div>
                      <div className="sm:block 2xl:flex  items-center  text-white font-bold text-2xl  md:text-3xl">
                        <div>WEB DEVELOPER</div>
                        <div>
                          <span className="bg-orange-500 text-white px-4 rounded-full 2xl:ml-3 text-sm md:text-lg py-1.5">
                            Freelance
                          </span>
                        </div>
                      </div>
                      <p className="text-white text-lg max-w-80 my-5 mr-2">
                        I have been working as a freelance web developer for
                        more than two years.
                      </p>
                      <div className="gap-3  font-bold text-orange-500 flex items-center">
                        <div className="bg-orange-500 p-1"></div>
                        <h1 className="text-xl">2 Years +</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Col Two */}
            <div className="ml-auto">
              {/* 1 */}
              <div className="flex gap-5">
                <div className="">
                  <div className="p-2 bg-white border-2 border-orange-500 rounded-full"></div>
                  <div className="border-l-2 w-0 h-full ml-2 border-orange-500"></div>
                </div>
                <div>
                  <div className="flex gap-5 -mt-3 pb-16">
                    <div>
                      <FaFolderOpen className="bg-orange-500 text-white p-2 text-6xl rounded-full" />
                    </div>
                    <div>
                      <div className="sm:block 2xl:flex  items-center  text-white font-bold text-2xl  md:text-3xl">
                        <div>COMPUTER SCIENCE</div>
                        <div>
                          <span className="bg-orange-500 text-white px-4 rounded-full 2xl:ml-3 text-sm md:text-lg py-1.5">
                            Self-taught
                          </span>
                        </div>
                      </div>
                      <p className="text-white text-lg max-w-96 my-5 mr-2">
                        Self-taught in Computer Science,focusing on:
                        <br />
                        <span className="flex items-center  text-4xl">
                          •
                          <span className=" ml-2 text-lg">
                            Data Structure and Algorithms.
                          </span>
                        </span>
                        <span className="flex items-center  text-4xl">
                          •
                          <span className=" ml-2 text-lg">
                            Database Management System.
                          </span>
                        </span>
                        <span className="flex items-center  text-4xl">
                          •
                          <span className=" ml-2 text-lg">
                            Computer Networking.
                          </span>
                        </span>
                        <span className="flex items-center  text-4xl">
                          •
                          <span className=" ml-2 text-lg">
                            Cryptography & Cyber Security.
                          </span>
                        </span>
                        <span className="flex items-center  text-4xl">
                          •
                          <span className=" ml-2 text-lg">
                            Discrete Mathematics
                          </span>
                        </span>
                        <span className="flex items-center  text-4xl">
                          •
                          <span className=" ml-2 text-lg">
                            Theory of Computation.
                          </span>
                        </span>
                      </p>
                      <div className="gap-3 font-bold text-orange-500 flex items-center">
                        <div className="bg-orange-500 p-1"></div>
                        <h1 className="text-xl">2021</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* 2 */}
              <div className="flex gap-5">
                <div className="">
                  <div className="p-2 bg-white border-2 border-orange-500 rounded-full"></div>
                  <div className="border-l-2 w-0 h-full ml-2 border-orange-500"></div>
                </div>
                <div>
                  <div className="flex gap-5 -mt-3 pb-16">
                    <div>
                      <div className="bg-orange-500 rounded-full p-2">
                        <svg
                          version="1.1"
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                        >
                          <path
                            d="M0 0 C2.75 -0.3125 2.75 -0.3125 6 0 C9.73960773 3.50588225 12.02686751 8.35522714 14.53515625 12.79296875 C15.96497164 15.25578828 15.96497164 15.25578828 19 17 C23.2475253 17.30891093 26.3586453 17.33046701 30 15 C30.2502157 12.08365871 30.2502157 12.08365871 30 9 C27.04622502 6.63019987 27.04622502 6.63019987 23 7 C23.66 8.65 24.32 10.3 25 12 C21.8125 12.5 21.8125 12.5 18 12 C15.65165307 9.66278267 13.96822799 7.17717929 13 4 C13.87890625 1.734375 13.87890625 1.734375 15 0 C28.94366226 -0.68763266 28.94366226 -0.68763266 32.6875 1.5625 C35.60427666 4.63694026 36.90373654 6.88901202 38 11 C37.79637258 15.53919458 36.76686518 18.25230645 33.5 21.4375 C29.73921039 23.7879935 27.63398577 24.18420736 23.1875 24.25 C22.14980469 24.27578125 21.11210937 24.3015625 20.04296875 24.328125 C15.84652082 23.8756197 13.31478889 22.36970637 10.41015625 19.34375 C0 5.10144928 0 5.10144928 0 0 Z "
                            fill="white"
                            transform="translate(0,8)"
                          />
                        </svg>
                      </div>
                    </div>
                    <div>
                      <div className="sm:block 2xl:flex  items-center  text-white font-bold text-2xl  md:text-3xl">
                        <div>WEB DEVELOPER</div>
                        <div>
                          <span className="bg-orange-500 text-white px-4 rounded-full 2xl:ml-3 text-sm md:text-lg py-1.5">
                            VentureDive
                          </span>
                        </div>
                      </div>
                      <p className="text-white text-lg max-w-80 my-5 mr-2">
                        I completed a four-month internship as a web developer
                        at VentureDive from February 28 to June 28, 2024. During
                        this time, I collaborated with a talented team to design
                        and implement responsive web applications, enhancing
                        user experience and functionality.
                      </p>
                      <div className="gap-3  font-bold text-orange-500 flex items-center">
                        <div className="bg-orange-500 p-1"></div>
                        <h1 className="text-xl">Four Months</h1>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 border-t mt-36 border-black"></div>

      {/* Third Section */}
      <div className="mt-16 pb-32">
        <div className="container mx-auto">
          {/* Heading */}
          <div className=" text-center flex items-center px-5 mb-10">
            <div className=" mx-auto text-center ">
              <h1 className="text-3xl text-orange-500 font-bold">SKILLs</h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl text-white font-bold my-5">
                My Web Skills
              </h1>
            </div>
          </div>
          {/* Logos */}
          <div className="mx-4 flex flex-wrap gap-5 justify-center">
            <div className=" flex-col align-middle text-center">
              <FaHtml5 className="text-9xl text-orange-500  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                HTML
              </h3>
            </div>
            <div className="mx-4  flex-col align-middle text-center">
              <FaCss3Alt className="text-9xl text-blue-700  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                CSS
              </h3>
            </div>
            <div className="mx-4  flex-col align-middle text-center">
              <AiOutlineJavaScript className="text-9xl text-yellow-500  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                JavaScript
              </h3>
            </div>
            <div className="mx-4  flex-col align-middle text-center">
              <div className="w-32 h-32 flex justify-center items-center bg-slate-800 shadow-md rounded-full">
                <div className=" bg-blue-500 relative w-16 h-16 rounded">
                  <div className="text-white absolute bottom-0 right-0 font-bold text-3xl p-1">
                    TS
                  </div>
                </div>
              </div>
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                TypeScript
              </h3>
            </div>
            <div className=" mx-4 flex-col align-middle text-center">
              <FaReact className=" text-9xl text-blue-300  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                React JS
              </h3>
            </div>
            <div className=" mx-4 flex-col align-middle text-center">
              <BiLogoRedux className="text-9xl text-purple-500  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                Redux
              </h3>
            </div>

            <div className=" mx-4 flex-col align-middle text-center">
              <FaNodeJs className="text-9xl text-green-700  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                Node JS
              </h3>
            </div>
            <div className=" mx-4 flex-col align-middle text-center">
              <SiNestjs className="text-9xl text-pink-700  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                Nest JS
              </h3>
            </div>
            <div className=" mx-4 flex-col align-middle text-center">
              <DiMysql className="text-9xl text-blue-800  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                My SQL
              </h3>
            </div>
            <div className=" mx-4 flex-col align-middle text-center">
              <TbBrandMongodb className="text-9xl text-green-800  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                Mongo DB
              </h3>
            </div>
            <div className=" mx-4 flex-col align-middle text-center">
              <BiLogoPostgresql className="text-9xl text-blue-500  bg-slate-800  shadow-md  rounded-full p-4" />
              <h3 className="text-white mt-2 bg-slate-800 shadow-md rounded-full text-xl">
                Postgres
              </h3>
            </div>
          </div>
        </div>
      </div>
      {/* Fourth Section */}
      <div className="my-20">
        <div className="container mx-auto">
          {/* Heading */}
          <div className=" text-center flex items-center px-5 mb-10">
            <div className=" mx-auto text-center ">
              <h1 className="text-3xl text-orange-500 font-bold">
                PROBLEM SOLVING
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl text-white font-bold my-5">
                Explore My Problem-Solving Journey
              </h1>
            </div>
          </div>
          {/* Profiles */}
          <div className="md:block mx-5 lg:flex justify-center gap-10">
            {/* Project Euler */}
            <div className="flex-col gap-5 my-5 justify-around items-center bg-slate-800  px-7 py-5 shadow-md rounded-xl">
              <div>
                <div className="rounded-xl mx-auto overflow-hidden w-36">
                  <div className="bg-orange-500 py-2"></div>
                  <div className="text-black text-center sm:px-5  md:px-6 bg-white text-6xl font-bold p-4 ">
                    PE
                  </div>
                  <div className="bg-orange-500 py-2"></div>
                </div>
              </div>
              <div className="flex-col">
                <h1 className="text-center my-4 text-2xl md:text-3xl font-extrabold text-orange-500">
                  See My Project Euler Profile
                </h1>
                <button className="my-4 mx-auto text-md md:text-xl hover:text-orange-500 hover:bg-white transition-colors duration-500 flex align-middle px-3 py-1 md:px-6 md:py-3 bg-orange-500 rounded-full text-white font-bold  gap-3 items-center">
                  <p>Goto Profile</p>
                </button>
              </div>
            </div>
            {/* Leet Code */}
            <div className="flex-col gap-5 my-5 justify-around items-center bg-slate-800  px-7 py-5 shadow-md rounded-xl">
              <div className="">
                <img className="mx-auto" src={leetCode} width={140} />
              </div>
              <div className="flex-col">
                <h1 className="text-center text-2xl md:text-3xl font-extrabold text-orange-500">
                  See My Project Euler Profile
                </h1>
                <button className="my-4 mx-auto text-md md:text-xl hover:text-orange-500 hover:bg-white transition-colors duration-500 flex align-middle px-4 py-1.5 md:px-6 md:py-3 bg-orange-500 rounded-full text-white font-bold  gap-3 items-center">
                  <p>Goto Profile</p>
                </button>
              </div>
            </div>
            {/* */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
