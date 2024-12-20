import { useTranslation } from '../../hooks/useTranslation';
import { GreetingProps } from './types';

export function Greeting({ name }: GreetingProps) {
  const { translate } = useTranslation();
  
  return (
    <div className="p-4 bg-white rounded-lg shadow-sm">
      <h1 className="text-xl font-semibold">
        {translate('greeting', { name })}
      </h1>
    </div>
  );
}