import { motion } from "framer-motion";
import { BiLogoGithub } from "react-icons/bi";
import { GoEye } from "react-icons/go";

export const Card: React.FC<{
  img: string;
  title: string;
  des: string;
  sourceLink: string;
  liveLink: string;
  preview: boolean;
}> = ({ img, title, des, sourceLink, liveLink, preview }) => {
  return (
    <motion.div
      className="flex-col flex w-96 mx-2 my-2 rounded-xl p-5 shadow-md bg-slate-800"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, delay: 0 }}
    >
      <div>
        <img className="py-4 w-54 h-64" src={img} />
        <h3 className="text-3xl my-2 font-bold text-orange-500">{title}</h3>
        <p className="text-white text-lg mt-4">{des}</p>
      </div>
      <div className="mt-auto">
        <a href={sourceLink} target="_blank">
          <button className="hover:bg-white transition-colors duration-400 hover:text-orange-500 w-full flex justify-center items-center gap-7 text-2xl my-4 bg-orange-500 p-1 rounded-full text-white font-bold">
            <BiLogoGithub className="text-4xl" /> Source Code
          </button>
        </a>
        <a href={liveLink} target="_blank">
          {preview ? (
            <button
              disabled={preview}
              className={`cursor-not-allowed w-full flex justify-center items-center gap-7 text-2xl my-4 bg-gray-500 p-1 rounded-full text-white font-bold`}
            >
              <GoEye className="text-4xl" /> Live Preview
            </button>
          ) : (
            <button
              disabled={preview}
              className={`hover:bg-white transition-colors duration-400 hover:text-orange-500 w-full flex justify-center items-center gap-7 text-2xl my-4 bg-orange-500 p-1 rounded-full text-white font-bold`}
            >
              <GoEye className="text-4xl" /> Live Preview
            </button>
          )}
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
