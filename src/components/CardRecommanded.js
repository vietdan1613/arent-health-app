import React from "react";

const CardRecommanded = ({
    label = "2021.05.21   23:25",
    description = "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
}) => {
    return (
        <div className="bg-dark-600 text-white py-[16px] px-[8px] w-[216px] h-[144px]">
            <div className="text-lg text-center text-primary-300" style={{ fontSize: "22px" }}>{label}</div>
            <div className="border-b w-[56px] m-auto mt-2"></div>
            <p className="text-lg mt-2 text-center">{description}</p>
        </div>
    );
};

export default CardRecommanded;