import React from "react";

const CardDiary = ({
    time = "2021.05.21   23:25",
    description = "私の日記の記録が一部表示されます。\n テキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキストテキスト…",
}) => {
    return (
        <div className="border-2 border-gray-400 p-[16px] w-[231px] h-[231px]">
            <div className="text-lg w-[140px]" style={{ lineHeight: "22px" }}>{time}</div>
            <p className="text-xs text-gray-500 mt-2 whitespace-pre-line truncate w-full">{description}</p>
        </div>
    );
};

export default CardDiary;