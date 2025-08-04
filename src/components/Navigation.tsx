import React from 'react';
import { Page } from '../App';
import { Button } from './ui/button';
import { cn } from './ui/utils'; // ensure you have this for merging classNames

interface NavigationProps {
  currentPage: Page;
  onNavigate: (page: Page) => void;
}

export function Navigation({ currentPage, onNavigate }: NavigationProps) {
  const navItems = [
    { page: 'home' as Page, label: 'Home' },
    { page: 'about' as Page, label: 'About' },
    { page: 'upload' as Page, label: 'Upload' },
    { page: 'team' as Page, label: 'Team' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <button
              onClick={() => onNavigate('home')}
              className="text-xl font-medium text-gray-800 hover:text-black transition-colors"
            >
              🦷 Dental AI Diagnosis
            </button>
          </div>

          <div className="flex items-center space-x-1">
            {navItems.map(({ page, label }) => (
              <Button
                key={page}
                variant="ghost"
                onClick={() => onNavigate(page)}
                className={cn(
                  "px-4 py-2 transition-colors",
                  currentPage === page
                    ? "bg-black text-white"
                    : "text-gray-800 hover:bg-gray-200"
                )}
              >
                {label}
              </Button>
            ))}
          </div>
        </div>
      </div>
    </nav>
  );
}
