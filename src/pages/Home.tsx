import { FaFolderOpen, FaPhoneAlt } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import { IoLocation } from "react-icons/io5";
import { FaGithub } from "react-icons/fa";
import { BiDownload, BiLogoGoogle, BiLogoLinkedin } from "react-icons/bi";
import { IoPersonSharp } from "react-icons/io5";
import { useState } from "react";
import { useNavigate } from "react-router";
import meImage from "../assets/test.png";
import IconsShower from "../components/IconsShower";
import { CV_URL } from "../data/info";
import CustomButton from "../components/CustomButton";
import { openLinkNewTab } from "../utils";

const openCV = openLinkNewTab(CV_URL);

const ContactItem = ({
  icon: Icon,
  text,
}: {
  icon: React.ElementType;
  text: string;
}) => (
  <div className="mb-5 flex items-center gap-4 px-5 text-[var(--color-brand)] font-medium">
    <Icon className="border text-5xl rounded-full p-2 border-[var(--color-brand)]" />
    <h1 className="text-gray-500">{text}</h1>
  </div>
);

const Home = () => {
  const navigate = useNavigate();
  const [over, setOver] = useState<"home" | "about" | "portfolio" | "">("");

  return (
    <>
      <IconsShower />
      <div className="light-bg dark:bg-[url('./assets/dark-bg.png')] bg-cover bg-center flex justify-center pb-16 bgOne items-center min-h-screen pt-10">
        <div className="mt-52 mx-5">
          <div className="grid gap-20 lg:gap-20 xl:gap-20 sm:gird-cols-1 md:grid-cols-12">
            <div className="md:col-span-6 lg:col-span-4">
              <div>
                <div className="w-[350px] mx-auto">
                  <div className="px-10 flex-col text-center text-slate-800 justify-center pt-20 pb-5 bg-white rounded-t-xl">
                    <div className="p-1 -mt-64">
                      <img
                        className="mx-auto rounded-full p-1 border-4 border-[var(--color-brand)]"
                        width={300}
                        src={meImage}
                      />
                    </div>
                    <h1 className="my-4 text-4xl font-bold">Hamza Ali</h1>
                    <h1 className="text-xl text-gray-500 font-medium">
                      Fullstack Web Developer.
                    </h1>
                  </div>
                  <div className="text-xl font-medium bg-white mt-0.5 rounded-b-xl p-3">
                    <ContactItem icon={FaPhoneAlt} text="+923354295878" />
                    <ContactItem icon={CiMail} text="askhamzaali@gmail.com" />
                    <ContactItem icon={IoLocation} text="Karachi, Pakistan" />
                  </div>
                </div>
              </div>
            </div>
            {/* Second Col */}
            <div className="md:-mt-20 h-full text-center md:text-left md:col-span-6 lg:col-span-8">
              <div className="flex gap-10">
                <div>
                  <h1 className="text-2xl text-[var(--color-brand)] font-semibold italic ">
                    HELLO I'M
                  </h1>
                  <h2 className="text-4xl md:text-5xl lg:text-7xl text-[#000247] dark:text-white font-bold mt-4">
                    Hamza Ali!
                  </h2>
                  <h2 className="text-2xl md:text-3xl lg:text-4xl text-gray-700 dark:text-white font-medium mt-4">
                    Full-Stack Web Developer
                  </h2>
                  <h2 className="text-lg lg:text-2xl max-w-2xl dark:text-white text-gray-500 font-bolder mt-4">
                    Hello! I’m a full-stack web developer with expertise in
                    front-end and back-end technologies. I build dynamic,
                    scalable & user-friendly applications that prioritize
                    performance and responsiveness.
                  </h2>
                  <CustomButton
                    onClick={openCV}
                    className="flex gap-4 px-6 py-3 my-8 text-xl font-bold mx-auto md:ml-0"
                  >
                    <BiDownload className="text-2xl" />
                    Download CV
                  </CustomButton>
                  <div className="flex items-center gap-3 my-10">
                    <div className="mx-auto lg:mx-0 flex items-center gap-3">
                      <h1 className="text-gray-700 dark:text-white font-bold text-xl">
                        Follow Me:
                      </h1>
                      <a
                        href="https://www.linkedin.com/in/hamza-ali-35bb76309/"
                        target="_blank"
                      >
                        <BiLogoLinkedin className="border hover:bg-[var(--color-brand)] hover:text-white transition-colors duration-300 border-[var(--color-brand)] text-4xl cursor-pointer text-[var(--color-brand)] rounded-full p-1.5" />
                      </a>
                      <a href="https://github.com/sudohamza" target="_blank">
                        <FaGithub className="border hover:bg-[var(--color-brand)] hover:text-white transition-colors duration-300 border-[var(--color-brand)] text-4xl cursor-pointer text-[var(--color-brand)] rounded-full p-1.5" />
                      </a>
                      <a
                        href="https://mail.google.com/mail/u/0/?view=cm&fs=1&to=askhamzaali@gmail.com&su=Your%20Subject&body=Your%20message%20here."
                        target="_blank"
                      >
                        <BiLogoGoogle className="border hover:bg-[var(--color-brand)] hover:text-white transition-colors duration-300 border-[var(--color-brand)] text-4xl cursor-pointer text-[var(--color-brand)] rounded-full p-1.5" />
                      </a>
                    </div>
                  </div>
                </div>
                <div className="hidden lg:block min-w-44">
                  <div className="mt-36">
                    <button
                      onClick={() => navigate("/about")}
                      onMouseOver={() => setOver("about")}
                      onMouseOut={() => setOver("")}
                      className="ml-auto my-10 flex items-center hover:text-white   bg-white hover:bg-[var(--color-brand)] rounded-full"
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
                            ? "bg-[var(--color-brand)] text-white"
                            : "bg-white text-[var(--color-brand)]"
                        } `}
                      />
                    </button>
                    <button
                      onClick={() => navigate("/portfolio")}
                      onMouseOver={() => setOver("portfolio")}
                      onMouseOut={() => setOver("")}
                      className="ml-auto my-10 flex items-center hover:text-white   bg-white hover:bg-[var(--color-brand)] rounded-full"
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
                            ? "bg-[var(--color-brand)] text-white"
                            : "bg-white text-[var(--color-brand)]"
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
    </>
  );
};

export default Home;
