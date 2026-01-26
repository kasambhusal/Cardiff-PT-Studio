import { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-scroll';
import Button from './Button';

export default function HeaderReact() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: 'hero' },
    { name: 'About Us', href: 'about-us' },
    { name: 'Benefits', href: 'why-us' },
    { name: 'Timetable', href: 'schedule' },
    { name: 'Our App', href: 'download-app' },
    { name: 'Join Us', href: 'join-us' },
    { name: 'Pricing', href: 'pricing' },
    { name: 'Testimonials', href: 'testimonials' },
  ];

  return (
    // FIX: Removed border-b and added block to prevent sub-pixel gaps
    <header className="block w-full bg-[#B3B4B9]/95 backdrop-blur-md ">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* DUAL LOGO AREA */}
          <div className="flex items-center gap-4">
            <div className="flex items-center">
              <img src="/logo.webp" alt="Studio Link Logo" className="h-10 w-auto object-contain" />
              
              {/* Vertical Divider */}
              <div className="mx-3 h-8 w-px bg-slate-400/50" />
              
              <img src="/cardiff-logo.webp" alt="Cardiff Gym Logo" className="h-8 w-auto object-contain grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all" />
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-6 xl:space-x-8 lg:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={600}
                offset={-80}
                className="cursor-pointer text-[10px] xl:text-xs font-black uppercase italic tracking-[0.2em] text-slate-800 transition-all duration-200 hover:text-[#0149ac] hover:scale-110"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Join Now Button */}
          <div className="hidden lg:block">
            <button className="cursor-pointer -skew-x-12 bg-[#0149ac] px-8 py-2.5 text-sm font-black uppercase italic tracking-tighter text-white transition-all duration-300 hover:scale-110 hover:bg-slate-900 shadow-lg active:scale-95">
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded-full bg-white/20 p-2 text-slate-900 transition-colors hover:bg-[#0149ac] hover:text-white"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <HiOutlineX size={24} /> : <IoMenu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="absolute left-0 right-0 top-full bg-[#B3B4B9] py-6 lg:hidden shadow-2xl animate-in fade-in slide-in-from-top-2">
            <nav className="flex flex-col space-y-2 px-4 text-center">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer rounded-lg px-4 py-3 font-black uppercase italic tracking-widest text-slate-900 hover:bg-[#0149ac] hover:text-white transition-all"
                >
                  {item.name}
                </Link>
              ))}
              <div className="pt-4 flex justify-center">
                <Button text='Join Now'/>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}