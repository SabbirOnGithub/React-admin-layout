// src/components/Sidebar.jsx
import {
    BarChart2,
    Box,
    Calendar,
    CreditCard,
    Database,
    FileText,
    HelpCircle,
    LayoutDashboard,
    Mail,
    Package,
    Settings,
    Shield,
    ShoppingCart,
    Store, Truck,
    UserCog,
    UserPlus,
    Users,
    Users as UsersGroup
} from 'lucide-react';
import PropTypes from 'prop-types';
import { MenuItem } from './MenuItem';
import { useState } from 'react';

export const Sidebar = ({ isCollapsed }) => {

    const [selectedPath, setSelectedPath] = useState(['Dashboard']);

    const handleSelect = (label) => {
        setSelectedPath([label]);
    };


    const menuItems = [
        {
            icon: LayoutDashboard,
            label: 'Dashboard'
        },
        {
            icon: Users,
            label: 'User Management',
            children: [
                {
                    icon: UserPlus,
                    label: 'Add User'
                },
                {
                    icon: UserCog,
                    label: 'User Settings'
                },
                {
                    icon: UsersGroup,
                    label: 'User Groups'
                }
            ]
        },
        {
            icon: ShoppingCart,
            label: 'E-commerce',
            children: [
                {
                    icon: Store,
                    label: 'Products',
                    children: [
                        {
                            label: 'Add Product'
                        },
                        {
                            label: 'Product List'
                        },
                        {
                            label: 'Categories'
                        }
                    ]
                },
                {
                    icon: Truck,
                    label: 'Orders',
                    children: [
                        {
                            label: 'New Orders'
                        },
                        {
                            label: 'Order History'
                        }
                    ]
                },
                {
                    icon: CreditCard,
                    label: 'Payments'
                }
            ]
        },
        {
            icon: Box,
            label: 'Inventory',
            children: [
                {
                    icon: Package,
                    label: 'Stock Management'
                },
                {
                    label: 'Warehouse'
                }
            ]
        },
        {
            icon: BarChart2,
            label: 'Analytics'
        },
        {
            icon: FileText,
            label: 'Reports'
        },
        {
            icon: Mail,
            label: 'Email'
        },
        {
            icon: Calendar,
            label: 'Calendar'
        },
        {
            icon: Database,
            label: 'Database'
        },
        {
            icon: Shield,
            label: 'Security'
        },
        {
            icon: Settings,
            label: 'Settings'
        },
        {
            icon: HelpCircle,
            label: 'Help & Support'
        }
    ];


    return (
        <aside
            className={`bg-white border-r w-64 flex-shrink-0 transition-all duration-300 flex flex-col ${isCollapsed ? '-ml-64' : ''
                }`}
        >
            {/* Fixed Header Section */}
            <div className="p-4 border-b">
                <h2 className="text-lg font-semibold text-gray-800">Admin Panel</h2>
            </div>

            {/* Scrollable Navigation Section with custom scrollbar */}
            <nav className="flex-1 overflow-y-auto custom-scrollbar">
                <div className="p-4">
                    <div className="space-y-1">
                        {menuItems.map((item, index) => (
                            <MenuItem
                                key={index}
                                item={item}
                                selectedPath={selectedPath}
                                onSelect={handleSelect}
                            />
                        ))}
                    </div>
                </div>
            </nav>

            {/* Fixed Footer Section */}
            <div className="p-4 border-t">
                <div className="flex items-center gap-3 px-4 py-2 text-gray-700">
                    <div>
                        <p className="text-sm font-medium">&copy; {new Date().getFullYear()} Manufarms.com.</p>
                        <p className="text-xs text-gray-500">All rights reserved.</p>
                    </div>
                </div>
            </div>
        </aside>
    );
};

Sidebar.propTypes = {
    isCollapsed: PropTypes.bool.isRequired
};