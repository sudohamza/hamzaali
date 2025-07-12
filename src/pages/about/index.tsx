import { GMAIL, LEET_CODE, PROJECT_EULER } from "../../data/info";
import leetCode from "../../assets/leetcode.png";
import video from "../../../public/temp_intro_video.mp4";
import CustomButton from "../../components/CustomButton";
import ResumeTimeline from "./ResumeTimeline";
import { openLinkNewTab } from "../../utils";
import PersonalInfo from "./PersonalInfo";
import WebSkills from "./WebSkills";

const openMail = openLinkNewTab(GMAIL);
const openProjectEulerProfile = openLinkNewTab(PROJECT_EULER);
const openLeetCodeProfile = openLinkNewTab(LEET_CODE);

const About = () => {
  return (
    <div className="pt-20">
      {/* Hero Heading */}
      <div className="flex items-center justify-center py-10">
        <div className="page__heading">
          <h1 className=" page__heading--title font-extrabold">ABOUT ME</h1>
          <h2 className="page__heading--subtitle text-[#322f2a] font-extrabold dark:text-white">
            ABOUT <span className="text-[var(--color-brand)]">ME</span>
          </h2>
        </div>
      </div>
      {/* First Section */}
      <div className="mt-16">
        <div className="container mx-auto  px-5">
          <div className="md:flex space-x-4 gap-5 items-center justify-between">
            {/* Text */}
            <div className="sm:w-full lg:w-1/2">
              <h1 className="text-3xl text-[var(--color-brand)] font-bold">
                ABOUT ME
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl text-[#322f2a] dark:text-white font-bold my-5">
                I build robust web solutions focused on user-friendly design.
              </h1>
              <h1 className="text-3xl my-10 text-[var(--color-brand)] font-bold">
                PERSONAL INFOS:
              </h1>
              <div className="grid grid-cols-2">
                <PersonalInfo />
              </div>
              <CustomButton
                onClick={openMail}
                className="px-8 py-2 my-8 text-xl font-bold"
              >
                Hire Me
              </CustomButton>
            </div>
            {/* Image */}
            <div className="relative">
              <video width="800" controls>
                <source src={video} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
              <div
                style={{ zIndex: -99 }}
                className="animate-up-down absolute rounded-full p-28 border-[14px] border-[var(--color-brand)] -ml-20 -mt-32"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 border-t mt-36 border-gray-300 dark:border-black" />
      {/* Second Section */}
      <div className="">
        <div className="container md:mx-auto py-20 ">
          <div className="block lg:flex items-center px- ">
            <div className=" text-center lg:text-left">
              <h1 className="text-3xl text-[var(--color-brand)] font-bold">
                EXPERIENCE AND EDUCATION
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl dark:text-white text-[#322f2a] font-bold my-5">
                Resume of Experience and Education
              </h1>
            </div>
            <div>
              <p className="dark:text-white text-[#322f2a] text-xl ml-auto px-5 text-center lg:text-left lg:w-1/2 ">
                In this section, you will find a comprehensive overview of my
                previous and ongoing experiences, along with my educational
                background.
              </p>
            </div>
          </div>
          {/* Resume Steps */}
          <ResumeTimeline />
        </div>
      </div>
      <div className="flex-1 border-t mt-36 border-gray-300 dark:border-black" />
      {/* Third Section */}
      <div className="mt-16 pb-32">
        <div className="container mx-auto">
          {/* Heading */}
          <div className=" text-center flex items-center px-5 mb-10">
            <div className=" mx-auto text-center ">
              <h1 className="text-3xl text-[var(--color-brand)] font-bold">
                SKILLs
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl dark:text-white text-[#322f2a] font-bold my-5">
                My Web Skills
              </h1>
            </div>
          </div>
          {/* Logos */}
          <WebSkills />
        </div>
      </div>
      {/* Fourth Section */}
      <div className="my-20">
        <div className="container mx-auto">
          {/* Heading */}
          <div className=" text-center flex items-center px-5 mb-10">
            <div className=" mx-auto text-center ">
              <h1 className="text-3xl text-[var(--color-brand)] font-bold">
                PROBLEM SOLVING
              </h1>
              <h1 className="text-4xl md:text-4xl lg:text-5xl dark:text-white text-[#322f2a] font-bold my-5">
                Explore My Problem-Solving Journey
              </h1>
            </div>
          </div>
          {/* Profiles */}
          <div className="md:block mx-5 lg:flex justify-center gap-10">
            {/* Project Euler */}
            <div className="mt-5 flex p-6 bg-orange-50 dark:bg-[#1e293b] rounded-lg shadow-md w-full max-w-4xl">
              <div>
                <div className="rounded-xl mx-auto overflow-hidden w-32">
                  <div className="bg-orange-500 py-2"></div>
                  <div className="text-black text-center sm:px-5  md:px-6 bg-white text-6xl font-bold p-4 ">
                    PE
                  </div>
                  <div className="bg-orange-500 py-2"></div>
                </div>
              </div>
              <div className="ml-5 flex-1">
                <h2 className="text-2xl font-semibold text-[var(--color-brand)]">
                  Project Euler
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  I have actively participated in Project Euler challenges,
                  solving a variety of mathematical and computational problems.
                  This has helped me strengthen my algorithmic thinking and
                  problem-solving skills, which I apply to real-world software
                  development.
                </p>

                <div className="mt-4">
                  <CustomButton
                    onClick={openProjectEulerProfile}
                    className="px-5 py-2 text-md font-semibold"
                  >
                    View Badge
                  </CustomButton>
                </div>
              </div>
            </div>
            {/* Leet Code */}
            <div className="mt-5 flex p-6 bg-orange-50 dark:bg-[#1e293b] rounded-lg shadow-md w-full max-w-4xl">
              <div>
                <img className="mx-auto" src={leetCode} width={140} />
              </div>
              <div className="ml-5 flex-1">
                <h2 className="text-2xl font-semibold text-[var(--color-brand)]">
                  Leet Code
                </h2>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 font-medium">
                  I regularly solve coding challenges on LeetCode to enhance my
                  data structures and algorithms knowledge. Tackling a wide
                  range of problems has improved my problem-solving abilities
                  and prepared me for technical interviews and real-world
                  software engineering tasks.
                </p>

                <div className="mt-4">
                  <CustomButton
                    onClick={openLeetCodeProfile}
                    className="px-5 py-2 text-md font-semibold"
                  >
                    View Profile
                  </CustomButton>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
