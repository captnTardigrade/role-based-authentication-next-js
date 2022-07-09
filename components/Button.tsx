import { forwardRef } from "react";

type ButtonProps = {
  children?: React.ReactNode;
  className?: string;
  onClick?: () => void;
};

const Button = forwardRef((props: ButtonProps, _ref) => {
  return (
    <button
      className={`block shadow-lg rounded-md bg-indigo-500 px-8 py-3 uppercase text-white ${props.className}`}
      onClick={props.onClick}
    >
      {props.children}
    </button>
  );
});

export default Button;
