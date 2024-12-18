import { Moon, Sun } from 'lucide-react';
import { useTheme } from '@/components/theme-provider';
import { Toggle } from './ui/toggle';

export default function ToggleTheme() {
  const { theme, setTheme } = useTheme();

  return (
    <Toggle
      className="rounded-full"
      aria-label="Toggle Theme"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
    >
      {theme === 'dark' ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Toggle>
  );
}
