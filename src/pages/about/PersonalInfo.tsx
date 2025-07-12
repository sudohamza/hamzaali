import { personalInfo } from "../../data/info";

const PersonalInfo = () => {
  return personalInfo.map((item, index) => {
    return (
      <div key={index}>
        <div className="col-span-1 my-3 gap-5 flex items-center">
          <div className="p-1 rounded-full border-[var(--color-brand)] border-2">
            <div className="bg-[var(--color-brand)] p-1 rounded-full"></div>
          </div>
          <h1 className="text-gray-500 sm:text-sm xl:text-xl font-medium dark:text-white">
            {item}
          </h1>
        </div>
      </div>
    );
  });
};

export default PersonalInfo;
