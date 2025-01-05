import {
    ChevronDown
} from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const MenuItem = ({ item, level = 0 }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;

    return (
        <div>
            <a
                href={item.href || '#'}
                onClick={(e) => {
                    if (hasChildren) {
                        e.preventDefault();
                        setIsOpen(!isOpen);
                    }
                }}
                className={`flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors
          ${level > 0 ? 'ml-6' : ''}`}
            >
                {item.icon && <item.icon className="h-5 w-5" />}
                <span className="flex-1">{item.label}</span>
                {hasChildren && (
                    <ChevronDown
                        className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`}
                    />
                )}
            </a>

            {hasChildren && isOpen && (
                <div className="mt-1 space-y-1">
                    {item.children.map((child, index) => (
                        <MenuItem key={index} item={child} level={level + 1} />
                    ))}
                </div>
            )}
        </div>
    );
};

MenuItem.propTypes = {
    item: PropTypes.shape({
        icon: PropTypes.func,
        label: PropTypes.string.isRequired,
        href: PropTypes.string,
        children: PropTypes.array
    }).isRequired,
    level: PropTypes.number
};
