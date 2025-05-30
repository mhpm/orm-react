import { IconType } from 'react-icons';

export interface SubMenuItem {
  title: string;
  route: string;
  icon?: IconType;
}

export interface MenuItem {
  title: string;
  route: string;
  icon?: IconType;
  subItems?: SubMenuItem[];
}

export interface NavLinksProps {
  isCollapsed: boolean;
  menuItems: MenuItem[];
}

export interface NavItemProps {
  item: MenuItem;
  index: number;
  isCollapsed: boolean;
  expandedItem: number | null;
  toggleAccordion: (index: number) => void;
  navigate: (route: string) => void;
}