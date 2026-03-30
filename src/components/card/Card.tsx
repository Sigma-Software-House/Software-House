import "./card.css";
import React from "react";

type cardProps = {
    view: "primario" | "secundario";
    variant?: "default" | "image";
    icon?: React.ReactNode | string;
    image?: string;
    width?: string | number;
    height?: string | number;
    title?: string;
    text?: string;
};

export default function Card({
    view,
    icon,
    image,
    width,
    height,
    title,
    text,
    ...props
}: cardProps) {

    const isImageCard = !!image;

    return (
        <div
            className={`card card-${view} ${isImageCard ? "card-image" : ""}`}
            style={{
                width,
                height,
                backgroundImage: image ? `url(${image})` : undefined
            }}
            {...props}
        >
            {isImageCard && <div className="overlay" />}

            <div className="cardContent">

                {!isImageCard && (
                    <div className="cardHeader">
                        {icon && (
                            typeof icon === "string"
                                ? <img className="iconCard" src={icon} />
                                : <span className="iconCard">{icon}</span>
                        )}
                        <h2 className="titleCard">{title}</h2>
                    </div>
                )}

                {isImageCard && (
                    <h2 className="titleCard">{title}</h2>
                )}

                {text && (
                    <div className={`cardDetails ${isImageCard ? "hoverReveal" : ""}`}>
                        <p className="textCard">{text}</p>

                        {isImageCard && (
                            <button className="cardButton">
                                Saiba mais
                            </button>
                        )}
                    </div>
                )}
            </div>
        </div>
    );
}