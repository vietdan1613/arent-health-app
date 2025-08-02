import React from "react";

const CardRecord = ({
    src,
    alt = "Image",
    label = "Your Text",
    description = "Your Text",
}) => {
    return (
        <div className="relative w-[288px] h-[288px] p-6 bg-primary-300">
            <div className="bg-black w-full h-full">
                <img
                    src={src}
                    alt={alt}
                    className="w-full h-full object-cover opacity-25"
                />
            </div>
            <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 w-[240px] h-[240px] flex flex-col items-center justify-center`}>
                <p className="text-primary-300 text-center mb-2 font-extralight" style={{ fontSize: "25px", fontFamily: "inter" }}>{label}</p>
                <div className="bg-primary-400 w-[160px] h-[24px] text-center text-sm text-white">
                    {description}
                </div>
            </div>
        </div>
    );
};

export default CardRecord;