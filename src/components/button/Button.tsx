import "./button.css";
import React from "react";

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  view: "primario" | "secundario";
  icon?: React.ReactNode | string;
  width?: string | number;
};

export default function Button({
  view,
  icon,
  width,
  children,
  ...props
}: ButtonProps) {
  return (
    <button
      className={`button button-${view}`}
      style={{ width: width }}
      {...props}
    >
      {icon &&
        (typeof icon === "string" ? (
          <img className="iconButton" src={icon} />
        ) : (
          <span className="iconButton">{icon}</span>
        ))}

      <span className="textButton">{children}</span>
    </button>
  );
}