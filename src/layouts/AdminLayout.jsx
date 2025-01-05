import PropTypes from 'prop-types';
import { useState } from 'react';
import { Header } from '../components/Header';
import { Sidebar } from '../components/Sidebar';

export const AdminLayout = ({ children }) => {
    const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarCollapsed(!isSidebarCollapsed);
    };

    return (
        <div className="h-screen flex flex-col">
            <Header toggleSidebar={toggleSidebar} />

            <div className="flex-1 flex overflow-hidden">
                <Sidebar isCollapsed={isSidebarCollapsed} />

                <main className="flex-1 overflow-auto bg-gray-50 p-6">
                    <div className="max-w-7xl mx-auto">
                        {children}
                    </div>
                </main>
            </div>
        </div>
    );
};

AdminLayout.propTypes = {
    children: PropTypes.node.isRequired
};