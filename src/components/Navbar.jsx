import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { IoMenu, IoClose } from 'react-icons/io5';

const Navbar = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { name: 'Home', path: '/' },
        { name: 'Courses', path: '/courses' },
        { name: 'Pricing', path: '/pricing' },
        { name: 'About', path: '/about' },
        { name: 'Contact', path: '/contact' }
    ];

    const menuClasses = `fixed top-0 right-0 h-full w-2/3 bg-gray-900/95 backdrop-blur-sm z-40 transform transition-transform duration-300 ease-in-out lg:hidden 
        ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`;

    return (
        <header className={`sticky top-0 z-50 transition-all duration-300 ${
            isScrolled ? 'bg-eshiksha-dark/90 backdrop-blur-sm shadow-xl' : 'bg-transparent'
        }`}>
            <nav className="container mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
                
                {/* Logo/Brand */}
                <Link to="/" className="text-2xl font-bold text-white">
                    <span className="text-eshiksha-orange">e-</span>Shiksha
                </Link>

                {/* Desktop Nav Items */}
                <div className="hidden lg:flex space-x-8">
                    {navItems.map(item => (
                        <NavLink 
                            key={item.name} 
                            to={item.path} 
                            className={({ isActive }) => 
                                `text-white hover:text-eshiksha-orange transition-colors duration-200 font-medium ${isActive ? 'text-eshiksha-orange' : ''}`
                            }
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <div className="hidden lg:flex space-x-3 items-center">
                    <Link to="/signin" className="border border-white text-white px-4 py-1.5 rounded-md hover:bg-white hover:text-eshiksha-dark transition-colors duration-200">
                        Sign In
                    </Link>
                    <Link to="/create-account" className="bg-eshiksha-orange text-white px-4 py-1.5 rounded-md font-semibold hover:opacity-90 transition-opacity duration-200 shadow-lg shadow-eshiksha-orange/30">
                        Create an Account
                    </Link>
                </div>

               
                <button 
                    className="lg:hidden text-white text-2xl" 
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                >
                    {isMenuOpen ? <IoClose /> : <IoMenu />}
                </button>
            </nav>

            {/* Mobile Menu (Sidebar) */}
            <div className={menuClasses}>
                <div className="p-8 space-y-6">
                    
                    <div className="flex flex-col space-y-3">
                        <Link 
                            to="/signin" 
                            className="text-center border border-white text-white p-3 rounded-md hover:bg-white hover:text-eshiksha-dark transition-colors"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Sign In
                        </Link>
                        <Link 
                            to="/create-account" 
                            className="text-center bg-eshiksha-orange text-white p-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                            onClick={() => setIsMenuOpen(false)}
                        >
                            Create an Account
                        </Link>
                    </div>
                    
                    <hr className="border-gray-700" />

                    {/* Nav Items - Mobile */}
                    <nav className="flex flex-col space-y-2">
                        {navItems.map(item => (
                            <NavLink 
                                key={item.name} 
                                to={item.path} 
                                className={({ isActive }) => 
                                    `text-white text-lg p-3 rounded-md hover:bg-gray-800 transition-colors duration-200 ${isActive ? 'text-eshiksha-orange bg-gray-900' : ''}`
                                }
                                onClick={() => setIsMenuOpen(false)}
                            >
                                {item.name}
                            </NavLink>
                        ))}
                    </nav>
                </div>
            </div>
            
           
            {isMenuOpen && (
                <div 
                    className="fixed inset-0 bg-black/70 z-30 lg:hidden" 
                    onClick={() => setIsMenuOpen(false)}
                />
            )}
        </header>
    );
};

export default Navbar;