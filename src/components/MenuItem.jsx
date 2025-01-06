import {
    ChevronDown
} from 'lucide-react';
import PropTypes from 'prop-types';
import { useState } from 'react';

export const MenuItem = ({ item, level = 0, selectedPath, onSelect }) => {
    const [isOpen, setIsOpen] = useState(false);
    const hasChildren = item.children && item.children.length > 0;
    const isSelected = selectedPath.includes(item.label);
    const Icon = item.icon; // Capitalized for component usage
    
    return (
      <div>
        <a
          href={item.href || '#'}
          onClick={(e) => {
            e.preventDefault();
            if (hasChildren) {
              setIsOpen(!isOpen);
            }
            onSelect(item.label);
          }}
          className={`flex items-center gap-3 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors
            ${level > 0 ? 'ml-6' : ''}
            ${isSelected ? 'bg-blue-50 text-blue-600 font-medium' : ''}`}
        >
          {Icon && <Icon className={`h-5 w-5 ${isSelected ? 'text-blue-600' : ''}`} />}
          <span className="flex-1">{item.label}</span>
          {hasChildren && (
            <ChevronDown 
              className={`h-4 w-4 transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
            />
          )}
        </a>
        
        {hasChildren && isOpen && (
          <div className="mt-1 space-y-1">
            {item.children.map((child, index) => (
              <MenuItem 
                key={index} 
                item={child} 
                level={level + 1} 
                selectedPath={selectedPath}
                onSelect={onSelect}
              />
            ))}
          </div>
        )}
      </div>
    );
  };
  
  MenuItem.propTypes = {
    item: PropTypes.shape({
      icon: PropTypes.elementType, // Changed from func to elementType
      label: PropTypes.string.isRequired,
      href: PropTypes.string,
      children: PropTypes.array
    }).isRequired,
    level: PropTypes.number,
    selectedPath: PropTypes.array.isRequired,
    onSelect: PropTypes.func.isRequired
  };