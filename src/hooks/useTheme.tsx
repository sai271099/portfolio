import { useEffect, useState } from 'react';

const useTheme = () => {
  const [theme, setTheme] = useState('dark');
  const toggleTheme = () => {
    setTheme(theme === 'light' ? 'dark' : 'light');
  };

  const changeTheme = (theme: string) => {
    localStorage.theme = theme;
    if (theme === 'dark') {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.setAttribute('data-mode', 'light');
    }
  };

  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.setAttribute('data-mode', 'dark');
    } else {
      document.documentElement.setAttribute('data-mode', 'light');
    }
    setTheme(localStorage.theme);
  }, []);

  useEffect(() => {
    changeTheme(theme);
  }, [theme]);
  return { theme, toggleTheme };
};

export default useTheme;
