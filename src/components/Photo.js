import React from "react";

const Photo = ({
    src,
    alt = "Image",
    label = "Your Text",
}) => {
    return (
        <div className="relative">
            <img
                src={src}
                alt={alt}
                className="w-[234px] h-[234px] object-cover"
            />
            <div className={`absolute bottom-0 left-0 bg-primary-300 text-white text-[15px] w-[120px] h-[32px] pl-[8px] flex items-center pb-1`}>
                {label}
            </div>
        </div>
    );
};

export default Photo;