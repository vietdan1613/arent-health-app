import React from "react";

const CardPhotoDescription = ({
    src,
    alt = "Image",
    label = "Your Text",
    description = "Description",
    tags = ["Tag1", "Tag2", "Tag3"],
}) => {
    const [leftText, rightText] = label.split(" ");

    return (
        <div>
            <div className="relative">
                <img
                    src={src}
                    alt={alt}
                    className="w-[234px] h-[144px] object-cover"
                />
                <div className={`absolute bottom-0 left-0 bg-primary-300 text-white text-[15px] w-[144px] h-[24px] pl-[8px] flex items-center`}>
                    <div className="flex justify-between items-center w-full pr-[8px]">
                        <span>{leftText}</span>
                        <span>{rightText}</span>
                    </div>
                </div>
            </div>
            <div>
                <p className="text-[15px] mt-2 line-clamp-2">{description}</p>
                {tags.length > 0 && (
                    <div>
                        {tags.map((tag, index) => (
                            <span
                                key={index}
                                className="inline-block text-primary-400 mr-2"
                            >
                                #{tag}
                            </span>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
};

export default CardPhotoDescription;