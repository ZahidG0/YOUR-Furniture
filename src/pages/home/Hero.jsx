import React, { useContext } from 'react'
import bannerImg from '../../assets/banner.png'
import { FaMoon, FaSearch } from 'react-icons/fa';
import BasicToolTip from '../../components/BasicToolTip';
import { GiBarbedSun } from 'react-icons/gi';
import { IoMdSunny } from 'react-icons/io';
import { themeContext } from '../../context/ThemeContext';

const Hero = () => {

    const {isDarkMode, toggleTheme} = useContext(themeContext)

    return (
        <section className='h-screen relative bg-cover bg-center text-white' style={{ backgroundImage: `url(${bannerImg})` }}>
            <div className='md:pt-48 pt-24 px-4 text-center space-y-8 md:w-1/2 mx-auto'>
                <h1 className='text-4xl lg:text-6xl font-medium lg:leading-tight'>Make your interior more minimalistic & modern</h1>
                <p className='text-xl lg:w-1/2 mx-auto '>Turn your room with panto into a lot more minimalist and modern with ease and speed</p>

                {/* Search field with input and icon */}
                <div className="relative inline-block z-30">
                    <input
                        type="text"
                        placeholder="Search furniture"
                        className="w-full md:w-80 px-6 py-2  bg-white/25 rounded-full border border-gray-300 text-white focus:outline-none"
                    />
                    <div className='absolute right-3 top-1/2 transform -translate-y-1/2 p-2 bg-primary rounded-full cursor-pointer'>
                        <FaSearch className="text-white " />
                    </div>
                </div>
            </div>

            {/* button blur effect */}
            <div className="absolute inset-x-0 -mb-2 bottom-0 h-3/4 bg-gradient-to-t from-white via-transparent to-transparent blur-sm"></div>


            {/* hover button for displaying box  */}
            {/* <BasicToolTip/> */}
            <div className='hidden xl:block absolute bottom-40 left-24'>
                <BasicToolTip position="bottom" />
            </div>
            <div className='hidden xl:block absolute bottom-52 left-96'>
                <BasicToolTip position="bottom" />
            </div>
            <div className='hidden xl:block absolute bottom-24 right-[820px]'>
                <BasicToolTip position="bottom" />
            </div>

            {/* dark and light mode */}
            <div className='absolute bottom-40 right-25 z-40'>

                <button 
                onClick={toggleTheme}
                className='focus:outline-none font-bold text-lg p-3 bg-black rounded-full'>
                    {
                        isDarkMode ? <IoMdSunny className='text-amber-300 text-3xl' /> : <FaMoon className='text-amber-300 text-3xl'/>
                    }
                </button>

            </div>
        </section>
    )
}

export default Hero;