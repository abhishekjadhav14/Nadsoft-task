import React from 'react'
import Rectangle from '../assets/Rectangle.svg';
import logo from '../assets/Logo.svg'
import { IoSearch } from "react-icons/io5";
import Hexes from '../assets/Hexes_copy.svg'
import Hex_white from '../assets/Hex_copy.svg'
import Hex_grey from '../assets/Hex_grey.svg'
import '../App.css'
import { useState } from 'react';
import { HiOutlineBars3 } from "react-icons/hi2";



const First = () => {

    const [showDropdown, setShowDropdown] = useState(false);

    const toggleDropdown = () => {
        setShowDropdown(!showDropdown);
    };

    return (

        <>

            <div style={{ background: '#000d28', clipPath: 'polygon(0 0, 100% 0, 100% 80%, 0% 100%)', height: '100vh', position: "relative" }}>
                <nav style={{
                    zIndex: 1,
                    width: '100%', // Full width of the viewport
                    display: 'flex',
                    justifyContent: 'space-around', // More natural alignment for menu and logo
                    alignItems: 'center',
                    padding: '10px 0%', // Padding with percentage for responsive spacing
                    boxSizing: 'border-box', // Ensures padding is included in the width
                }}>
                    <img src={logo} alt="Logo" style={{ height: '50px' }} />

                    <ul className='navbar-ul'>
                        <li style={{ cursor: 'pointer' }}>Courses</li>
                        <li style={{ cursor: 'pointer' }}>About</li>
                        <li style={{ cursor: 'pointer' }}>Online</li>
                        <li style={{ cursor: 'pointer' }}>Models</li>
                        <li><IoSearch /></li>
                    </ul>

                    <ul className='Dropdown'>
                        <li style={{ cursor: 'pointer' }} onClick={toggleDropdown}>
                            <HiOutlineBars3 style={{ color: "white" }} />
                            {showDropdown && (
                                <ul style={{ position: 'absolute', background: '#fff', listStyleType: 'none', marginTop: '5px', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)' }}>
                                    <li style={{ cursor: 'pointer' }}>About</li>
                                    <li style={{ cursor: 'pointer' }}>Online</li>
                                    <li style={{ cursor: 'pointer' }}>Models</li>
                                    <li><IoSearch /></li>
                                </ul>
                            )}
                        </li>
                    </ul>
                </nav>

                <div style={{ marginLeft: "17vw", marginTop: "10vw" }}>
                    <p style={{ color: 'grey' }}>
                        UNLOCK YOUR POTENTIAL IN THE WORLD OF LASER TECHNOLOGY!
                    </p>
                    <h1 className='fontResponsive'>
                        Take Your Spa Esthetician Career to New Heights with Laser School
                    </h1>
                    <button style={{ padding: '15px', width: '200px' }}>Book Your Call Now!</button>
                </div>
            </div>

            <div style={{ width: '100vw', position: 'relative' }}>
                <img
                    src={Hexes}
                    style={{
                        position: 'absolute',
                        right: '70px', // Shift image 70px to the left from the right edge
                        bottom: '5%', // Position the image closer to the bottom
                        transform: 'translateY(0%)', // Adjust for bottom alignment
                        width: '15vw', // Adjust size based on your design
                        zIndex: 3, // Ensure it's on top of the background
                    }}
                    alt="Hexes"
                />
            </div>
        </>

    )
}

export default First

