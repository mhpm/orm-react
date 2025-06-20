import packageJson from '../../../package.json';
import { memo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import { MenuItems } from './MenuItems';
import { Logo } from './Logo';
import {
  MdOutlineMenu,
  MdMenuOpen,
  MdOutlineKeyboardArrowRight,
  MdOutlineKeyboardArrowDown,
} from 'react-icons/md';
import React from 'react';
import { useMenuTrigger } from './useMenuTrigger';
import { useCurrentUser } from '@/hooks/useCurrentUser';
import {
  MenuItem,
  NavItemProps,
  NavLinksProps,
  SubMenuItem,
} from './interfaces/interfaces';
import { IconType } from 'react-icons';

const SideMenu = memo(() => {
  const { isAuthenticated } = useCurrentUser();
  const menuItems = MenuItems(isAuthenticated);
  const { isOpen, toggleMenu } = useMenuTrigger();

  return (
    <div
      className={`
        ${
          isOpen
            ? 'hidden sm:flex'
            : 'w-full fixed z-50 inset-0 sm:w-[300px] sm:min-w-[200px]'
        }
        transition-all duration-200 border-r p-4 sm:relative flex flex-col items-center text-center bg-gray-100 text-gray-900 border-gray-200 dark:bg-gray-900 dark:text-white dark:border-gray-700
      `}
    >
      <div className={`w-full pt-1 ${isOpen ? 'text-center' : 'text-right'}`}>
        <button
          className="text-primary"
          onClick={toggleMenu}
          aria-label={isOpen ? 'Open navigation menu' : 'Close navigation menu'}
        >
          {isOpen ? <MdOutlineMenu size={32} /> : <MdMenuOpen size={32} />}
        </button>
      </div>
      {!isOpen && <Logo />}
      <NavLinks isCollapsed={isOpen} menuItems={menuItems} />
      <div className="text-xs text-slate-600 fixed bottom-10">
        v{packageJson.version}
      </div>
    </div>
  );
});

const NavLinks = memo(({ isCollapsed, menuItems }: NavLinksProps) => {
  const navigate = useNavigate();
  const [expandedItem, setExpandedItem] = useState<number | null>(null);

  const toggleAccordion = (index: number) =>
    setExpandedItem(expandedItem === index ? null : index);

  return (
    <div className="lg:top-10 w-full flex flex-col items-center">
      <nav
        className={`flex flex-col gap-2 font-extrabold w-full ${
          isCollapsed ? 'items-center' : 'items-start mt-8'
        }`}
        aria-label="Main Navigation"
      >
        <ul className="space-y-4 w-full">
          {menuItems.map((item: MenuItem, index: number) => (
            <NavItem
              key={index}
              item={item}
              index={index}
              isCollapsed={isCollapsed}
              expandedItem={expandedItem}
              toggleAccordion={toggleAccordion}
              navigate={navigate}
            />
          ))}
        </ul>
      </nav>
    </div>
  );
});

const NavItem = memo(
  ({
    item,
    index,
    isCollapsed,
    expandedItem,
    toggleAccordion,
    navigate,
  }: NavItemProps) => {
    const Icon: IconType = item.icon as IconType;

    return (
      <li
        className={`flex flex-col ${
          isCollapsed ? 'items-center' : 'justify-start'
        }`}
      >
        <div
          className="flex items-center justify-between cursor-pointer py-2 p-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
          onClick={() =>
            item.subItems ? toggleAccordion(index) : navigate(item.route)
          }
          tabIndex={0}
          role="button"
          aria-expanded={expandedItem === index}
          aria-controls={`sub-menu-${index}`}
        >
          <div className="flex items-center space-x-4 hover:text-gray-300">
            {item?.icon && (
              <span className="text-xl" aria-hidden="true">
                <Icon />
              </span>
            )}
            {!isCollapsed && !item.subItems && (
              <NavLink to={item.route} className="font-bold">
                {item.title}
              </NavLink>
            )}
            {!isCollapsed && item.subItems && (
              <span className="font-bold">{item.title}</span>
            )}
          </div>
          {!isCollapsed && item.subItems && (
            <span>
              {expandedItem === index ? (
                <MdOutlineKeyboardArrowDown size={20} />
              ) : (
                <MdOutlineKeyboardArrowRight size={20} />
              )}
            </span>
          )}
        </div>
        <div
          className={`overflow-hidden transition-all duration-1000 ${
            expandedItem === index ? 'max-h-screen' : 'max-h-0'
          }`}
          id={`sub-menu-${index}`}
        >
          {!isCollapsed && expandedItem === index && item.subItems && (
            <ul className="flex flex-col mt-2 space-y-2 text-gray-500 text-sm text-start">
              {item.subItems.map((subItem: SubMenuItem, index: number) => (
                <div
                  key={index}
                  className="cursor-pointer pl-12 py-2 p-3 rounded hover:bg-gray-200 dark:hover:bg-gray-800"
                  onClick={() => navigate(subItem.route)}
                  tabIndex={0}
                  role="button"
                >
                  {subItem.icon &&
                    React.createElement(subItem.icon, {
                      className: 'mr-2 inline-block',
                    })}
                  <NavLink to={subItem.route}>{subItem.title}</NavLink>
                </div>
              ))}
            </ul>
          )}
        </div>
      </li>
    );
  }
);

export default SideMenu;
