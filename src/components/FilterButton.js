import React from "react";

const FilterButton = ({
    text = "Hexagon",
}) => {
    return (
        <div
            className="flex items-center justify-center text-center font-semibold transition-transform duration-200 w-[136px] h-[136px]"
            style={{
                backgroundImage: 'url(/imgs/hexagon.svg)',
                backgroundSize: 'contain',
                backgroundPosition: 'center',
                backgroundRepeat: 'no-repeat',
            }}
        >
            <div>
                <img
                    src="/icons/icon_knife.svg"
                    alt="Food Icon"
                    className="w-[56px] h-[56px] flex-shrink-0 mx-auto"
                />
                <span className="text-xl font-light text-white">{text}</span>
            </div>
        </div>
    );
};

export default FilterButton;
