import React from "react";

const Button = ({
    label = "Click Me",
    onClick = () => { },
    className = "",
    type = "button",
}) => {
    return (
        <button
            type={type}
            onClick={onClick}
            className={`py-3 px-4 bg-primary-gradient text-lg text-white text-center rounded-md w-[296px] ${className}`}
        >
            {label}
        </button>
    );
};

export default Button;
