import React from "react";

type CustomButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement>;

const CustomButton: React.FC<CustomButtonProps> = (props) => {
  const { className, ...rest } = props;
  return (
    <button
      className={`${className} dark:hover:text-orange-500 dark:hover:bg-white text-white hover:bg-gray-900 transition-colors duration-500 flex align-middle bg-[var(--color-brand)] rounded-full items-center`}
      {...rest}
    >
      {props.children}
    </button>
  );
};

export default CustomButton;
