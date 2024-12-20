import { FiHome, FiPackage, FiShoppingBag } from 'react-icons/fi';
import { CategoryCard } from './CategoryCard';
import { Category } from './types';

const categories: Category[] = [
  { 
    id: 'realEstate',
    icon: FiHome,
    color: 'bg-blue-500',
    hoverColor: 'hover:bg-blue-600',
    gradient: 'from-blue-500 to-blue-600'
  },
  { 
    id: 'automotive',
    icon: FiPackage,
    color: 'bg-red-500',
    hoverColor: 'hover:bg-red-600',
    gradient: 'from-red-500 to-red-600'
  },
  { 
    id: 'articles',
    icon: FiShoppingBag,
    color: 'bg-green-500',
    hoverColor: 'hover:bg-green-600',
    gradient: 'from-green-500 to-green-600'
  }
];

export function CategoryGrid() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-16 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">
        Explora por categoría
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {categories.map((category) => (
          <CategoryCard key={category.id} category={category} />
        ))}
      </div>
    </div>
  );
}