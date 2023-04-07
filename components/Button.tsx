import { NextPage } from "next";
import React, { ButtonHTMLAttributes } from "react";

type ButtonProps = {
  theme?: "primary" | "secondary";
  size?: "small" | "medium" | "large";
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: NextPage<ButtonProps> = ({ theme, className, size, ...rest }) => {
  let themeclassName = "background-color: rgb(23, 26, 37)"

  if (theme == "secondary") {
    themeclassName = "background-color: rgb(23, 26, 37)";
  }

  return (
    <>
      <button {...rest} className={"" + themeclassName}></button>
    </>
  );
};

Button.defaultProps = {
  theme: "primary",
  size: "small",
};

export default Button;
