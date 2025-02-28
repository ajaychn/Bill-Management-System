import React, { useState } from 'react'
import { FaFileInvoiceDollar, FaUserFriends } from 'react-icons/fa';
import { IoIosArrowDropleftCircle } from 'react-icons/io';

const Sidebar = ({ isActive, setIsActive, open, setOpen }) => {

    const Menus = [
        { title: "Customers List", icon: <FaUserFriends />, gap: true },
        { title: " Bill Generator ", icon: <FaFileInvoiceDollar /> },
    ];

    return (
        <aside>
            <IoIosArrowDropleftCircle className={`absolute cursor-pointer bg-base-200 -right-3 top-14 w-8 h-8 rounded-[50%] ${!open && "rotate-180"}`} onClick={() => setOpen(!open)} />
            <div className="flex gap-x-4 items-center border-b border-gray-800 p-4 duration-200">
                {
                    open ?
                        <img src="./src/assets/logo.png" className='cursor-pointer w-48  duration-200' />
                        :
                        <img src="fav.png" className='cursor-pointer h-12 duration-200' />
                }

            </div>
            <ul className="p-4">
                {Menus.map((Menu, index) => (
                    <li key={index} onClick={() => setIsActive(index)} className={`flex rounded-md p-2 cursor-pointer items-center gap-x-4 ${isActive === index ? "bg-blue-500" : "hover:bg-base-100"} text-gray-300 ${Menu.gap ? "mt-4" : "mt-2"} `}>
                        {Menu.icon}
                        <span className={`${!open && "hidden"} origin-left duration-200`}>
                            {Menu.title}
                        </span>
                    </li>
                ))}
            </ul>
        </aside>
    )
}

export default Sidebar