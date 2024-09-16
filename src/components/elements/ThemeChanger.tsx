'use client';
import useTheme from '@/hooks/useTheme';

const ThemeChanger = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={() => toggleTheme()}
      className={
        'flex flex-row items-center gap-1 dark:bg-gray-500 dark:bg-opacity-20 border border-gray-300 dark:border-gray-600 rounded-full py-2 px-4'
      }
    >
      {theme === 'light' ? (
        <span className={'material-symbols-rounded scale-110 text-yellow-500'}>light_mode</span>
      ) : (
        <span className={'material-symbols-rounded scale-110'}>dark_mode</span>
      )}
      <div className={'w-10 font-medium'}>{theme === 'light' ? 'Light' : 'Dark'}</div>
    </button>
  );
};

export default ThemeChanger;
