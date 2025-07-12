import { LiaSchoolSolid } from "react-icons/lia";
import { MdOutlineSchool } from "react-icons/md";
import { IoCodeSlash } from "react-icons/io5";
import { FaFolderOpen } from "react-icons/fa";
import { ReactNode } from "react";

const TimelineItem = ({
  icon,
  title,
  subtitle,
  description,
  year,
}: {
  icon: ReactNode;
  title: string;
  subtitle: string;
  description: ReactNode;
  year: string;
  extra?: string;
}) => (
  <div className="flex gap-5">
    <div>
      <div className="p-2 bg-white border-2 border-orange-500 rounded-full" />
      <div className="border-l-2 w-0 h-full ml-2 border-orange-500" />
    </div>
    <div>
      <div className="flex gap-5  -mt-3 pb-16">
        <div>{icon}</div>
        <div className="-mt-2 2xl:mt-2">
          <div className="sm:block 2xl:flex 2xl:items-center text-[#322f2a] dark:text-white font-bold text-2xl md:text-2xl">
            <p>{title}</p>
            <p className="inline-block bg-[var(--color-brand)] text-white px-4 rounded-full 2xl:ml-3 text-sm py-1">
              {subtitle}
            </p>
          </div>
          <div className="dark:text-white text-gray-500 text-lg max-w-96 my-5 mr-2 font-medium">
            {description}
          </div>
          <div className="gap-3 font-bold text-[var(--color-brand)] flex items-center">
            <div className="bg-[var(--color-brand)] p-1" />
            <h1 className="text-xl">{year}</h1>
          </div>
        </div>
      </div>
    </div>
  </div>
);

const ResumeTimeline = () => {
  function getFreelancingYears(): number {
    const startDate = new Date("2024-06-01");
    const currentDate = new Date();

    const diffInMs = currentDate.getTime() - startDate.getTime();
    const diffInYears = diffInMs / (1000 * 60 * 60 * 24 * 365.25);

    return Math.floor(diffInYears);
  }

  return (
    <div className="pl-2 mt-16 block lg:flex">
      {/* Column One */}
      <div className="w-full lg:w-1/2">
        <TimelineItem
          icon={
            <LiaSchoolSolid className="bg-[var(--color-brand)] text-white p-2 text-6xl rounded-full" />
          }
          title="MATRICULATION"
          subtitle="Farabi Govt Sec School."
          description={
            <>
              I completed my matriculation in 2018, (Science group), where I
              focused on subjects such as Biology, Chemistry, Physics and
              Mathematics.
            </>
          }
          year="2018"
        />
        <TimelineItem
          icon={
            <MdOutlineSchool className="bg-[var(--color-brand)] text-white p-2 text-6xl rounded-full" />
          }
          title="DAE ( ELECTRONICS )"
          subtitle="St. Patrick’s Inst. of Sci. & Tech."
          description={
            <>
              In 2020, I earned my Diploma in Electronics, focusing on modern
              electronics and computation, equipping me to tackle real-world
              challenges.
            </>
          }
          year="Fall 2020"
        />
        <TimelineItem
          icon={
            <IoCodeSlash className="bg-[var(--color-brand)] text-white p-2 text-6xl rounded-full" />
          }
          title="WEB DEVELOPER"
          subtitle="Freelance"
          description={<>Freelance Full Stack developer June 2024 onwards</>}
          year={`${getFreelancingYears()} ${
            getFreelancingYears() > 1 ? "Yeas" : "Year"
          }`}
        />
      </div>

      {/* Column Two */}
      <div className="ml-auto">
        <TimelineItem
          icon={
            <FaFolderOpen className="bg-[var(--color-brand)] text-white p-2 text-6xl rounded-full" />
          }
          title="COMPUTER SCIENCE"
          subtitle="Self-taught"
          description={
            <>
              Self-taught in Computer Science, focusing on:
              {[
                "Data Structure and Algorithms.",
                "Database Management System.",
                "Computer Networking.",
                "Cryptography & Cyber Security.",
                "Discrete Mathematics",
                "Theory of Computation.",
              ].map((item) => (
                <div key={item} className="flex items-center text-4xl">
                  •<span className="ml-2 text-lg">{item}</span>
                </div>
              ))}
            </>
          }
          year="2021"
        />
        <TimelineItem
          icon={
            <div className="bg-[var(--color-brand)] rounded-full p-2">
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
          }
          title="WEB DEVELOPER"
          subtitle="VentureDive"
          description={
            <>
              I completed a four-month internship as a web developer at
              VentureDive from February 28 to June 28, 2024. During this time, I
              collaborated with a talented team to design and implement
              responsive web applications, enhancing user experience and
              functionality.
            </>
          }
          year="4 Months"
        />
      </div>
    </div>
  );
};

export default ResumeTimeline;
