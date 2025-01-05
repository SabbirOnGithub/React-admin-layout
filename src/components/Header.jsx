import { Bell, Menu, Search, Settings, User } from 'lucide-react';
import PropTypes from 'prop-types';
import { useEffect, useRef, useState } from 'react';

export const Header = ({ toggleSidebar }) => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);

    const handleDropdownToggle = () => {
        setDropdownOpen((prev) => !prev);
    };

    const handleLogout = () => {
        console.log('Logout clicked');
        // Add logout logic here
    };

    const handleClickOutside = (event) => {
        if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
            setDropdownOpen(false);
        }
    };

    useEffect(() => {
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);

    return (
        <header className="h-16 bg-white border-b flex items-center justify-between px-4 shadow-sm">
            <div className="flex items-center gap-4">
                <button
                    onClick={toggleSidebar}
                    className="p-2 hover:bg-gray-100 rounded-lg"
                >
                    <Menu className="h-5 w-5 text-gray-500" />
                </button>
                <div className="flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg">
                    <Search className="h-4 w-4 text-gray-500" />
                    <input
                        type="text"
                        placeholder="Search..."
                        className="bg-transparent border-none outline-none text-sm"
                    />
                </div>
            </div>

            <div className="flex items-center gap-4">
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Bell className="h-5 w-5 text-gray-500" />
                </button>
                <button className="p-2 hover:bg-gray-100 rounded-lg">
                    <Settings className="h-5 w-5 text-gray-500" />
                </button>
                <div className="relative" ref={dropdownRef}>
                    <div
                        className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center cursor-pointer"
                        onClick={handleDropdownToggle}
                    >
                        <User className="h-4 w-4 text-gray-500" />
                    </div>

                    {dropdownOpen && (
                        <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-10">
                            <ul className="py-2">
                                <li
                                    className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                    onClick={handleLogout}
                                >
                                    Logout
                                </li>
                            </ul>
                        </div>
                    )}
                </div>
            </div>
        </header>
    );
};

Header.propTypes = {
    toggleSidebar: PropTypes.func.isRequired,
};
