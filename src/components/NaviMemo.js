import React from 'react';
import { Link } from 'react-router-dom';

const NaviMemo = ({
    iconSrc,
    text,
    linkTo = '/',
    selected = false,
    alt = 'icon',
    size = 32,
    notification = null, // e.g. number or true
}) => {
    return (
        <Link to={linkTo}>
            <div className="flex gap-2 items-center relative  w-[160px] h-[48px]">
                <div className="relative">
                    <img
                        src={iconSrc}
                        alt={alt}
                        className={`w-[${size}px] h-[${size}px]`}
                    />
                    {notification && (
                        <span className="absolute top-0 -right-2 bg-primary-500 text-white rounded-full h-4 min-w-[16px] flex items-center justify-center"
                            style={{ fontSize: '10px' }}>
                            {typeof notification === 'boolean' ? '' : notification}
                        </span>
                    )}
                </div>
                <span className={`text-base ${selected ? 'text-primary-400' : 'text-white'}`}>{text}</span>
            </div>
        </Link>
    );
};

export default NaviMemo;
