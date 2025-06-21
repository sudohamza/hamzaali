import { motion } from "framer-motion";
import { BiLogoGithub } from "react-icons/bi";
import { GoEye } from "react-icons/go";
import CustomButton from "./CustomButton";
import { openLinkNewTab } from "../utils";

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
      className="flex-col flex w-96 mx-2 my-2 rounded-xl p-5 shadow-md bg-orange-50 dark:bg-[#1e293b]"
      whileHover={{ scale: 1.05 }}
      transition={{ type: "spring", stiffness: 300, delay: 0 }}
    >
      <div>
        <img className="py-4 w-54 h-64" src={img} />
        <h3 className="text-3xl my-2 font-bold text-[var(--color-brand)]">
          {title}
        </h3>
        <p className="dark:text-white text-gray-500 font-semibold  text-lg mt-4">
          {des}
        </p>
      </div>
      <div className="mt-auto">
        <CustomButton
          className="w-full flex justify-center py-1 gap-2 text-xl font-bold my-4"
          onClick={openLinkNewTab(sourceLink)}
        >
          <BiLogoGithub className="text-4xl" />
          Source Code
        </CustomButton>

        {preview ? (
          <button
            disabled={preview}
            className={`cursor-not-allowed w-full flex justify-center items-center gap-7 text-2xl my-4 bg-gray-500 p-1 rounded-full text-white font-bold`}
          >
            <GoEye className="text-4xl" /> Live Preview
          </button>
        ) : (
          <CustomButton
            className="w-full flex justify-center py-1 gap-2 text-xl font-bold my-4"
            onClick={openLinkNewTab(liveLink)}
          >
            <GoEye className="text-4xl" /> Source Code
          </CustomButton>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
