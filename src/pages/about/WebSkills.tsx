import { skills } from "../../data/skills";

const WebSkills = () => {
  return (
    <div className="mx-4 flex flex-wrap gap-5 justify-center">
      {skills.map(({ icon, label, isCustom }, idx) => (
        <div key={idx} className="flex flex-col items-center text-center">
          {/* Icon */}
          {!isCustom ? (
            <div className="text-7xl bg-orange-50 dark:bg-slate-800 shadow-md rounded-full p-7">
              {icon}
            </div>
          ) : (
            icon
          )}
          {/* Label */}
          <h3 className="min-w-36 mt-2 text-lg text-[var(--color-brand)] dark:text-white bg-orange-50 dark:bg-slate-800 dark:bg-slate-800 shadow-md rounded-full px-4 py-1">
            {label}
          </h3>
        </div>
      ))}
    </div>
  );
};

export default WebSkills;
