import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaHome, FaShoppingCart, FaChevronRight } from "react-icons/fa";
import { MdDashboard } from "react-icons/md";

const CustomDropDown = ({ name, subLinks, icon, open, href, sidebarWidth }) => {
    const navigate = useNavigate();
    const [isHovered, setIsHovered] = useState(false);
    const location = useLocation();
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);


    const toggleDropdown = () => {
        setIsDropdownOpen(!isDropdownOpen);
    };


    return (
        <div
            className={`relative group ${!open && "hidden lg:block"}  ${isHovered || "overflow-hidden"}`}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}

            onClick={() => {
                if (Array.isArray(subLinks) && subLinks.length > 0) {
                    toggleDropdown(); 
                } else {
                    navigate(href);
                }
            }}


        >

            <div
                className={`px-4 py-2 flex items-center justify-between cursor-pointer rounded-md transition-colors duration-200 hover:bg-gray-200`}>
                <div className="flex items-center gap-2"
                >

                    <div
                        className={`text-xl p-2 rounded-md ${!open && location.pathname === href
                            ? "bg-[#60A5FA] text-white"
                            : "text-gray-500"
                            }`}
                    >
                        {icon}
                    </div>
                    {/* {open && ( */}
                    <span className={`font-medium text-gray-700 truncate transition-all duration-[330ms] ${!open && "opacity-0"}`}>{name}</span>
                    {/* )} */}
                </div>
                {Array.isArray(subLinks) && subLinks.length > 0 && open && (
                    <div
                        className={`text-sm text-gray-500 transition-transform duration-200 ${isDropdownOpen ? "rotate-90" : ""
                            }`}
                    >
                        <FaChevronRight />
                    </div>
                )}
            </div>
            {open && isDropdownOpen && (
                <div className="pl-4">
                    {subLinks.map((subLink, index) => (
                        <div key={index} className="px-4 py-2 cursor-pointer hover:bg-gray-200">
                            <Link to={subLink.href} className={`block w-full ${window.location.pathname === subLink.href ? "text-purple-500 " : ""}`}>
                                {subLink.name}
                            </Link>
                        </div>
                    ))}
                </div>
            )}


            {!open && isHovered && Array.isArray(subLinks) && subLinks.length > 0 && (
                <div
                    className="absolute top-0  left-[100%] bg-white shadow-md border rounded-md py-2 w-48 z-50"
                    style={{ marginLeft: "8px" }} // Ensures it’s placed outside the sidebar
                >
                    {subLinks.map((subLink, index) => (
                        <Link
                            key={index}
                            to={subLink.href}
                            className={`block px-4 py-2 text-sm transition-colors duration-200 ${location.pathname === subLink.href
                                ? "bg-indigo-500 text-white"
                                : "hover:bg-gray-100 hover:text-gray-900"
                                }`}
                        >
                            {subLink.name}
                        </Link>
                    ))}
                </div>
            )}
        </div>
    );
};

export default function AdminSidebar({ open, setOpen }) {
    useEffect(() => {
        const handleClickOutside = (e) => {
            if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
                setOpen(false);
            }
        };

        if (open) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [open]);
    const sidebarRef = useRef(null);
    const links = [
        {
            href: "/admin",
            icon: <FaHome />,
            name: "Dashboard",
            sub: [],
        },
        {
            href: "/admin/orders",
            icon: <FaShoppingCart />,
            name: "Orders",
            sub: [
                { name: "All Orders", href: "/admin/orders/all" },
                { name: "Pending Orders", href: "/admin/orders/pending" },
                { name: "Pending Orders", href: "/admin/orders/pending" },
                { name: "Pending Orders", href: "/admin/orders/pending" },
                { name: "Pending Orders", href: "/admin/orders/pending" },
                { name: "Pending Orders", href: "/admin/orders/pending" },
            ],
        },
        {
            href: "/admin/categories",
            icon: <MdDashboard />,
            name: "Manage Categories",
            sub: [
                { name: "Categories", href: "/admin/l" },
                { name: "Sub Category", href: "/admin/" },
                { name: "Child Category", href: "/admin/" },
                { name: "Mega Menu category", href: "/admin/" },
                { name: "Featured Category", href: "/admin/" },
                { name: "Pending Orders", href: "/admin/" },
            ],
        },
        {
            href: "/admin/categories",
            icon: <FaShoppingCart />,
            name: "Ecommerce",
            sub: [
                { name: "Flash Sale", href: "/admin/" },
                { name: "Flash Sale Product", href: "/admin/" },
                { name: "Cupon", href: "/admin/" },
                { name: "Shipping Rule ", href: "/admin/" },
                { name: "Payment Method", href: "/admin/" },
                { name: "Pending Orders", href: "/admin/" },
            ],
        },



    ];
    return (
        <div
            ref={sidebarRef}
            className={`fixed z-10 inset-0  top-0 left-0 ${open && "overflow-x-auto"} min-h-screen  bg-white shadow-md   transition-all duration-300 ${open ? "w-64" : "w-0 lg:w-20"}`}>
            <div className="px-4 py-4">
                <h2
                    className={`text-center text-lg font-semibold transition-opacity duration-200 hidden lg:block `}
                >
                    {open ? "SHOPO" : "SP"}
                </h2>
            </div>
            <div className="mt-4 space-y-2">
                {links.map((link, index) => (
                    <CustomDropDown
                        key={index}
                        href={link.href}
                        icon={link.icon}
                        name={link.name}
                        subLinks={link.sub}
                        open={open}
                        sidebarWidth={open ? "256px" : "80px"}
                    />
                ))}
            </div>
        </div>
    );
}
