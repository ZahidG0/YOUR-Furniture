import React, { useContext, useEffect, useState } from 'react'
import { FaBagShopping, FaBars } from 'react-icons/fa6';
import { LiaTimesCircleSolid } from 'react-icons/lia';
import { Link, NavLink } from 'react-router';
import { CartContext } from '../context/CartContext';

// Navbar component for the application
const navItems = [
    { path: '/', label: 'Furniture' },
    { path: '/shop', label: 'Shop' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
]

const NavItems = ({toggleMobileMenu}) => {
    return (
        <ul className='flex flex-col md:flex-row items-center md:space-x-8 gap-8 '>
            {
                navItems.map((item, index) => (
                    <li key={index} onClick={toggleMobileMenu} className='text-lg font-semibold hover:text-amber-400'>
                        <NavLink
                            className={({ isActive }) =>
                                isActive? "text-amber-400 font-bold": "hover:text-amber-400 font-semibold"
                            }
                            to={item.path}> {item.label} </NavLink>
                    </li>
                ))
            }
        </ul>
    )
}

const Navbar = () => {

    // State to manage the mobile menu visibility 
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isScrolled, setIsScrolled] = useState(false);

    // Function to toggle the mobile menu visibility
    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    }

    // Function to handle scroll event and change header style
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            }else {
                setIsScrolled(false);
            }
        }

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        }
    }, [])

    // Cart Items From Add To Cart
    const {cartCount} = useContext(CartContext)
    return (
        <div>
            <header className={`fixed top-0 left-0 w-full z-50 transition duration-300 ease-in-out ${isScrolled ? 'bg-white/80 shadow-md dark:bg-black/50 dark:text-amber-50 text-black' : 'bg-transparent text-white'}`}>
                <nav className='container mx-auto  flex justify-between items-center py-6 px-4'>
                    {/* Logo Section */}
                    <div>
                        <Link to='/' className='font-bold '> YOUR-Furniture </Link>
                    </div>

                    {/* Hambarger Menu For Mobile */}
                    <div onClick={toggleMobileMenu} className='md:hidden cursor-pointer hover:text-amber-400'>
                        {
                            isMobileMenuOpen ? null : <FaBars className='text-2xl' />
                        }
                    </div>

                    {/* For Mobile Menu Items */}
                    <div className={`fixed top-0 left-0 w-full bg-black/80 flex flex-col items-center justify-center h-screen transition-transform transform space-y-8 text-white ${isMobileMenuOpen ? 'translate-x-0': '-translate-x-full'} md:hidden`}>
                        <div className='cursor-pointer' onClick={toggleMobileMenu}>
                            <LiaTimesCircleSolid className='hover:text-amber-200 text-3xl'/>
                        </div>
                        <NavItems toggleMobileMenu = {toggleMobileMenu}/>
                    </div>

                    {/* Desktop Navigation Links menu Items */}
                    <div className='hidden md:flex'>
                        <NavItems />
                    </div>

                    {/* Card Icon */}
                    <div className='hidden md:block cursor-pointer relative '>
                        <FaBagShopping className='text-3xl'/>
                        <span className='absolute top-0 -right-3 bg-amber-500 text-white flex items-center justify-center h-6 w-6 rounded-full'>{cartCount}</span>
                    </div>

                </nav>
            </header>
        </div>
    )
}

export default Navbar;

