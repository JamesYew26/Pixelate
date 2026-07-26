import {useState, useEffect, useRef} from 'react';
import {ChevronDown, Menu, X} from 'lucide-react';

export function Navbar(){
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const dropdownRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event){
            if(dropdownRef.current && !dropdownRef.current.contains(event.target)){
                setIsDropdownOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    },[]);

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 10);
        window.addEventListener('scroll', handleScroll);
        return() => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
    <header className={`sticky top-0 z-50 bg-white/80 backdrop-blur-md transition-shadow ${isScrolled ? 'shadow-md' : ''}`}>
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        <span className="font-bold text-xl text-indigo-600">MyPWA</span>

        <nav className="flex items-center gap-6">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          
          {/* Dropdown container */}
          <div className="relative" ref={dropdownRef}>
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="flex items-center gap-1 hover:text-indigo-600 font-medium"
            >
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