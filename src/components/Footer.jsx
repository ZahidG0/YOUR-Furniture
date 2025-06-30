import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';
import { Link } from 'react-router'; 

const Footer = () => {
    return (
        <footer className="bg-amber-50 text-black econdary dark:bg-gray-800 dark:text-white pt-20 mt-5 pb-5">
            <div className="section-container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-8 px-8">
                {/* First Div: Logo and Description (Wider Column) */}
                <div className="md:col-span-2">
                    <h2 className="text-2xl font-bold mb-4"><Link to='/'>YOUE-Furniture</Link></h2>
                    <p className=" md:mr-12">
                        YOUR-Furniture is dedicated to providing the best quality products to enhance your home and lifestyle. We combine style and comfort to transform your living spaces into modern sanctuaries.
                    </p>
                </div>

                {/* Second Div: Menu 1 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className=" hover:text-amber-300 transition">About Us</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-amber-300 transition">Services</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-amber-300 transition">Contact</a>
                        </li>
                    </ul>
                </div>

                {/* Third Div: Menu 2 */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Customer Care</h3>
                    <ul className="space-y-2">
                        <li>
                            <a href="#" className=" hover:text-amber-300 transition">FAQ</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-amber-300 transition">Returns</a>
                        </li>
                        <li>
                            <a href="#" className=" hover:text-amber-300 transition">Support</a>
                        </li>
                    </ul>
                </div>

                {/* Fourth Div: Social Media */}
                <div>
                    <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
                    <div className="flex flex-col space-y-2">
                        <Link to='/' className="flex items-center space-x-2  hover:text-amber-300 transition">
                            <FaFacebookF /> <span>Facebook</span>
                        </Link>
                        <Link to='/' className="flex items-center space-x-2  hover:text-amber-300 transition">
                            <FaTwitter /> <span>Twitter</span>
                        </Link>
                        <Link to='/' className="flex items-center space-x-2  hover:text-amber-300 transition">
                            <FaInstagram /> <span>Instagram</span>
                        </Link>
                    </div>
                </div>
            </div>

            {/* Bottom Footer Copy Right */}
            <div className="mt-12 section-container flex flex-col sm:flex-row sm:justify-between sm:items-center sm:text-center gap-4 text-left text-black dark:bg-gray-800 bg-blue-100 dark:text-white border-t border-gray-300 pt-4">
                <p> &copy; {new Date().getFullYear()} YOUR-Furniture. All rights reserved.</p>
                <p className='flex gap-4'>

                    <Link to="/">Terms & Conditions</Link>
                    <Link to="/">Privacy Policy</Link>
                </p>
            </div>
        </footer>
    )
}

export default Footer;