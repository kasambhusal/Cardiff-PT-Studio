
import { useState } from 'react';
import { HiOutlineX } from 'react-icons/hi';
import { IoMenu } from 'react-icons/io5';
import { Link } from 'react-scroll';

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
    <header className="bg-[var(--primary-white)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between lg:h-20">
          {/* Logo */}
          <div className="flex-shrink-0">
            <img src="/studio-logo.webp" alt="Studio Link Logo" className="h-12 w-23" />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden items-center space-x-8 md:flex">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.href}
                smooth={true}
                duration={600}
                offset={-80} // adjust for sticky header height
                className="cursor-pointer font-medium text-[var(--primary-black)] transition-colors duration-200 hover:text-[var(--primary-blue)]"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Join Now Button */}
          <div className="hidden md:block">
            <button className="cursor-pointer rounded-full bg-[var(--primary-blue)] px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-[var(--primary-black)] focus:ring-2 focus:ring-[var(--primary-blue)] focus:ring-offset-2 focus:ring-offset-white focus:outline-none">
              Join Now
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="rounded p-1 text-[var(--primary-black)] transition-colors duration-200 hover:text-[var(--primary-blue)] focus:ring-2 focus:ring-[var(--primary-blue)] focus:outline-none"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? (
                <HiOutlineX size={24} className="text-[var(--primary-black)]" />
              ) : (
                <IoMenu size={24} className="text-[var(--primary-black)]" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="border-t border-[var(--primary-light)] py-4 md:hidden">
            <nav className="flex flex-col space-y-4 px-2">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  smooth={true}
                  duration={700}
                  offset={-80}
                  onClick={() => setIsMenuOpen(false)}
                  className="cursor-pointer rounded-md px-4 py-2 font-medium text-[var(--primary-black)] transition-colors duration-200 hover:text-[var(--primary-blue)]"
                >
                  {item.name}
                </Link>
              ))}
              <div className="px-4">
                <button
                  className="w-fit rounded-full bg-[var(--primary-blue)] px-6 py-2 font-medium text-white transition-colors duration-200 hover:bg-[var(--primary-black)]"
                  onClick={() => setIsMenuOpen(false)}
                >
                  Join Now
                </button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
