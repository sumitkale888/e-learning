import React from 'react';
import { Link } from 'react-router-dom';
import { IoLogoTwitter, IoLogoFacebook, IoLogoLinkedin, IoLogoYoutube } from 'react-icons/io5';

const Footer = () => {
    const year = new Date().getFullYear();

    const footerLinks = {
        'Company': [
            { name: 'About Us', path: '/about' },
            { name: 'Careers', path: '#' },
            { name: 'Testimonials', path: '#' },
        ],
        'Resources': [
            { name: 'Documentation', path: '#' },
            { name: 'Help Center', path: '#' },
            { name: 'Blog', path: '#' },
        ],
        'Legal': [
            { name: 'Terms of Service', path: '#' },
            { name: 'Privacy Policy', path: '#' },
            { name: 'Cookie Settings', path: '#' },
        ],
    };

    return (
        <footer className="bg-gray-900 border-t border-gray-700 text-white mt-12">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
                
                {/* Top Section: Logo and Links */}
                <div className="grid grid-cols-2 md:grid-cols-5 gap-8 border-b border-gray-700 pb-10 mb-8">
                    
                    {/* Logo/Brand */}
                    <div className="col-span-2 md:col-span-2">
                        <Link to="/" className="text-3xl font-bold text-white mb-4 block">
                            <span className="text-eshiksha-orange">e-</span>Shiksha
                        </Link>
                        <p className="text-gray-400 text-sm max-w-xs">
                            Empowering the next generation of developers and professionals through accessible, high-quality e-learning.
                        </p>
                    </div>

                    {/* Navigation Links */}
                    {Object.entries(footerLinks).map(([title, links]) => (
                        <div key={title} className="space-y-3">
                            <h3 className="text-lg font-semibold text-eshiksha-orange">{title}</h3>
                            <ul className="space-y-2">
                                {links.map(link => (
                                    <li key={link.name}>
                                        <Link 
                                            to={link.path} 
                                            className="text-sm text-gray-400 hover:text-white transition-colors"
                                        >
                                            {link.name}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                {/* Bottom Section: Copyright and Socials */}
                <div className="flex flex-col sm:flex-row justify-between items-center text-sm text-gray-400">
                    <p>&copy; {year} e-Shiksha. All rights reserved.</p>
                    
                    <div className="flex space-x-4 mt-4 sm:mt-0">
                        <a href="#" aria-label="YouTube" className="text-xl hover:text-eshiksha-orange transition-colors"><IoLogoYoutube /></a>
                        <a href="#" aria-label="LinkedIn" className="text-xl hover:text-eshiksha-orange transition-colors"><IoLogoLinkedin /></a>
                        <a href="#" aria-label="Twitter" className="text-xl hover:text-eshiksha-orange transition-colors"><IoLogoTwitter /></a>
                        <a href="#" aria-label="Facebook" className="text-xl hover:text-eshiksha-orange transition-colors"><IoLogoFacebook /></a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;