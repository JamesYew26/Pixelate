import './App.css';
import { Navbar } from './components/Navbar.tsx';
import { HeroSlider } from './components/HeroSlider.tsx';
import { InstallPrompt } from './components/InstallPrompt.tsx';

export default function App() {
  return (
    <>
      <div className="min-h-screen bg-slate-50 text-slate-900">
        <Navbar />
        <main>
          <HeroSlider />
          {/* Main Content */}
        </main>

        {/* Floating PWA Banner */}
        <InstallPrompt />
      </div>
    </>
  );
}