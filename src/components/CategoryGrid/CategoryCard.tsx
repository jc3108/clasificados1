import clsx from 'clsx';
import { Category } from './types';
import { useTranslation } from '../../hooks/useTranslation';

interface CategoryCardProps {
  category: Category;
}

export function CategoryCard({ category }: CategoryCardProps) {
  const { translate } = useTranslation();
  const Icon = category.icon;

  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl cursor-pointer',
        'bg-gradient-to-br',
        category.gradient
      )}
    >
      <div className="p-8">
        <Icon className="h-12 w-12 text-white mb-4" />
        <h3 className="text-xl font-semibold text-white">
          {translate(category.id, 'categories')}
        </h3>
        <div className="mt-4">
          <span className="inline-flex items-center text-white text-sm">
            Ver anuncios
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
            </svg>
          </span>
        </div>
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-10 transition-opacity" />
    </div>
  );
}