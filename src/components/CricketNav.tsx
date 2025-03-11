
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const CricketNav = () => {
  const categories = [
    { name: 'IPL 2024', path: '/series/ipl-2024', featured: true },
    { name: 'World Cup', path: '/series/world-cup' },
    { name: 'Champions Trophy', path: '/series/champions-trophy' },
    { name: "Women's Cricket", path: '/womens-cricket' },
    { name: 'T20 Leagues', path: '/t20-leagues' },
    { name: 'Domestic Cricket', path: '/domestic-cricket' },
    { name: 'ICC Rankings', path: '/icc-rankings' },
  ];

  return (
    <div className="bg-gray-100 dark:bg-gray-800 py-2 overflow-x-auto border-b border-gray-200 dark:border-gray-700">
      <div className="cricket-container">
        <div className="flex space-x-5 whitespace-nowrap">
          {categories.map((category) => (
            <Link 
              key={category.name}
              to={category.path}
              className={`text-sm text-gray-700 dark:text-gray-300 hover:text-cricket-600 dark:hover:text-cricket-400 transition-colors flex items-center
                ${category.featured ? 'font-bold text-cricket-600 dark:text-cricket-400' : 'font-medium'}`}
            >
              {category.name}
              {category.featured && <ArrowUpRight className="ml-1 h-3 w-3" />}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CricketNav;
