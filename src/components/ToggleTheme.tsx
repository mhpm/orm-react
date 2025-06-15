import { Moon, Sun } from 'lucide-react';
import { Toggle } from './ui/toggle';
import useTheme from '@/hooks/useTheme';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      className="rounded-full text-primary hover:bg-slate-400 dark:hover:bg-slate-800"
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4 " />
      ) : (
        <Moon className="h-4 w-4 text-dark" />
      )}
    </Toggle>
  );
}
