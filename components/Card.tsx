import React from "react";

type CardProps = {
  children?: React.ReactNode;
  className?: string;
};

const Card = (props: CardProps) => {
  return (
    <div className={`card rounded-lg bg-gray-200/50 shadow-md max-w-max ${props.className}`}>
      {props.children}
    </div>
  );
};

export default Card;
