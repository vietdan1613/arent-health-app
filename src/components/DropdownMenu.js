import React, { useState, useRef, useEffect } from 'react';

const DropdownMenu = ({ label = 'Menu', items = [] }) => {
    const [open, setOpen] = useState(false);
    const dropdownRef = useRef(null);

    // Close menu on outside click
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
                setOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    return (
        <div ref={dropdownRef} className='relative inline-block text-left'>
            <div>
                <img
                    onClick={() => setOpen(!open)}
                    src={`/icons/${open ? 'icon_close' : 'icon_menu'}.svg`}
                    alt="Account Menu"
                >
                </img>
            </div>
            {
                open && (
                    <div className="absolute z-50 right-0 mt-2 w-[280px] bg-white border-gray-200  shadow-lg">
                        <ul className="py-1]">
                            {items.map((item, index) => (
                                <li
                                    key={index}
                                    className="h-[72px] bg-gray-400 text-white flex items-center cursor-pointer pl-[32px]"
                                    style={{ borderBottom: '1px solid rgba(46, 46, 46, 0.25);', borderTop: '1px solid rgba(255, 255, 255, 0.15)' }}
                                    onClick={() => {
                                        item.onClick?.();
                                        setOpen(false);
                                    }}
                                >
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                    </div>
                )
            }
        </div >
    );
};

export default DropdownMenu;
