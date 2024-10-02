import { useEffect, useState } from "react";
import { AiOutlineJavaScript } from "react-icons/ai";
import { BiLogoPostgresql, BiLogoRedux } from "react-icons/bi";
import { DiMysql } from "react-icons/di";
import {
  FaCss3Alt,
  FaDocker,
  FaGitAlt,
  FaHtml5,
  FaNodeJs,
  FaReact,
} from "react-icons/fa";
import { SiNestjs } from "react-icons/si";
import { TbBrandMongodb } from "react-icons/tb";

const amounts = [
  <FaHtml5 className="text-9xl text-orange-500  bg-slate-800  test rounded-full p-5" />,
  <FaCss3Alt className="text-9xl text-blue-700  bg-slate-800  test  rounded-full p-5" />,
  <FaDocker className="text-9xl  text-blue-500  bg-slate-800  test  rounded-full p-4" />,
  <AiOutlineJavaScript className="text-9xl text-yellow-500  bg-slate-800  test rounded-full p-5" />,
  <FaNodeJs className="text-9xl text-green-700  bg-slate-800  test  rounded-full p-5" />,
  <SiNestjs className="text-9xl text-pink-700  bg-slate-800  test  rounded-full p-5" />,
  <DiMysql className="text-9xl text-blue-800  bg-slate-800  test  rounded-full p-4" />,
  <TbBrandMongodb className="text-9xl text-green-800  bg-slate-800  test  rounded-full p-4" />,
  <BiLogoPostgresql className="text-9xl text-blue-500  bg-slate-800  test  rounded-full p-4" />,
  <FaGitAlt className="text-9xl text-orange-600  bg-slate-800  test  rounded-full p-4" />,
  <div className="w-32 h-32 flex justify-center items-center bg-slate-800 test rounded-full">
    <div className=" bg-blue-500 relative w-16 h-16 rounded">
      <div className="text-white absolute bottom-0 right-0 font-bold text-3xl p-1">
        TS
      </div>
    </div>
  </div>,
  <FaReact className=" text-9xl text-blue-300  bg-slate-800  test  rounded-full p-5" />,
  <BiLogoRedux className="text-9xl text-purple-500  bg-slate-800 test  rounded-full p-5" />,
];

const getRandomSize = () => {
  //   return Math.random() * 0.5 + 1;
  return 0.7;
};
const getRandomAmount = () => {
  return amounts[Math.floor(Math.random() * amounts.length)];
};

const getRandomLeft = () => {
  return Math.random() * 100;
};

const getRandomSpeed = () => {
  return Math.random() * 1 + 0.1;
  //   return 0.6;
};

const getRandomAngle = () => {
  return Math.random() * 360;
};

const generateDollarBill = () => {
  return {
    amount: getRandomAmount(),
    size: getRandomSize(),
    speed: getRandomSpeed(),
    angle: getRandomAngle(),
    left: getRandomLeft(),
    top: -30,
  };
};

const getInitialState = () => {
  const list = new Array(6);
  return list.fill(0).map(generateDollarBill);
};

const IconsShower = () => {
  const [bills, setBills] = useState(getInitialState());
  useEffect(() => {
    const tick = () => {
      const list = bills.slice();
      list.forEach((item, index) => {
        item.top += item.speed;
        if (item.top > 100) {
          list[index] = generateDollarBill();
        }
      });
      setBills(list);
    };
    const timer = setTimeout(tick, 15);
    return () => {
      if (timer) {
        clearTimeout(timer);
      }
    };
  });

  return (
    <div className="fixed inset-0 pointer-events-none">
      {bills.map((bill, i) => (
        <div
          key={i}
          className="fixed"
          style={{
            left: `${bill.left}%`,
            top: `${bill.top}%`,
            transform: `scale(${bill.size}) rotateZ(${bill.angle}deg)`,
          }}
        >
          {bill.amount}
        </div>
      ))}
    </div>
  );
};

export default IconsShower;
