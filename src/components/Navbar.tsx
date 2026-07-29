import type { JSX } from 'react';
import { useState, useEffect, useRef } from 'react';
import { ChevronDown } from 'lucide-react';
import WeGameLogo from '../assets/icon-logo-Dw016lLI.svg';

export function Navbar(): JSX.Element {
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false);
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  
  // Explicitly type the ref to point to an HTML div element
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    // Type the event as a standard MouseEvent
    function handleClickOutside(event: MouseEvent): void {
      if (
        dropdownRef.current && 
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScroll = (): void => setIsScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`sticky top-0 z-50 bg-gray-500/80 backdrop-blur-md transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between text-white">
  
  <a href="#home" className="flex items-center gap-2 font-bold text-xl text-cyan-400 hover:opacity-90 transition-opacity">
    <img src={WeGameLogo} alt="WeGame Logo" className="h-8 w-auto object-contain" />
  </a>

  <nav className="flex items-center gap-6">
    <a href="#home" className="hover:text-cyan-400 transition-colors">Home</a>
    
    <div className="relative" ref={dropdownRef}>
      <button 
        onClick={() => setIsDropdownOpen((prev) => !prev)}
        className="flex items-center gap-1 hover:text-cyan-400 font-medium cursor-pointer transition-colors"
        type="button">
        Services <ChevronDown className={`w-4 h-4 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
      </button>

            {isDropdownOpen && (
              <div className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-xl shadow-lg py-2 flex flex-col z-50">
                <a href="#web" className="px-4 py-2 hover:bg-indigo-50 text-gray-700">Web Development</a>
                <a href="#design" className="px-4 py-2 hover:bg-indigo-50 text-gray-700">UI/UX Design</a>
                <a href="#pwa" className="px-4 py-2 hover:bg-indigo-50 text-gray-700">PWA Optimization</a>
              </div>
            )}
          </div>
        </nav>
      </div>
    </header>
  );
}