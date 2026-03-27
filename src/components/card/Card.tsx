import "./card.css";
import React from "react";

type cardProps = {
    view: "primario" | "secundario";
    icon?: React.ReactNode | string;
    width?: string | number;
    height?: string | number;
    title?: string;
    text?: string;
};

export default function Card({
    view,
    icon,
    width,
    height,
    title,
    text,
    ...props
}: cardProps) {
    return (
        <div
            className={`card card-${view}`}
            style={{ width: width, height: height }}
            {...props}
        >
            <div className="cardHeader">
                {icon &&
                    (typeof icon === "string" ? (
                        <img className="iconCard" src={icon} />
                    ) : (
                        <span className="iconCard">{icon}</span>
                    ))}

                <h2 className="titleCard">{title}</h2>
            </div>

            <p className="textCard">{text}</p>
        </div>
    );
}