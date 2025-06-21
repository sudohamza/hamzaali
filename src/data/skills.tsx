import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { AiOutlineJavaScript } from "react-icons/ai";
import { SiNestjs } from "react-icons/si";
import { BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import { TbBrandMongodb, TbBrandNextjs } from "react-icons/tb";

export const skills = [
  { icon: <FaHtml5 className="text-orange-500" />, label: "HTML" },
  { icon: <FaCss3Alt className="text-blue-700" />, label: "CSS" },
  {
    icon: <AiOutlineJavaScript className="text-yellow-500" />,
    label: "JavaScript",
  },
  {
    icon: (
      <div className="w-32 h-32 flex justify-center items-center bg-orange-50 dark:bg-slate-800 shadow-md rounded-full">
        <div className="bg-blue-500 relative w-16 h-16 rounded">
          <div className="text-white absolute bottom-0 right-0 font-bold text-3xl p-1">
            TS
          </div>
        </div>
      </div>
    ),
    label: "TypeScript",
    isCustom: true,
  },
  { icon: <FaReact className="text-blue-300" />, label: "React JS" },
  { icon: <TbBrandNextjs className="text-gray-900" />, label: "Next JS" },
  { icon: <BiLogoRedux className="text-purple-500" />, label: "Redux" },
  { icon: <FaNodeJs className="text-green-700" />, label: "Node JS" },
  { icon: <SiNestjs className="text-pink-700" />, label: "Nest JS" },
  { icon: <DiMysql className="text-blue-800" />, label: "My SQL" },
  { icon: <TbBrandMongodb className="text-green-800" />, label: "Mongo DB" },
  { icon: <BiLogoPostgresql className="text-blue-500" />, label: "Postgres" },
  { icon: <FaGitAlt className="text-orange-600" />, label: "Git" },
  { icon: <FaDocker className="text-blue-500" />, label: "Docker" },
];
