import React from 'react'
import logo from '../assets/Logo2.svg'

const Fifth = () => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
            padding: '40px',
            backgroundColor: '#f8f8f8', // Optional background for contrast
            gap: '20px', // Adds space between sections
            flexWrap: 'wrap' // Ensures it wraps on smaller screens
        }}>
            {/* Logo and Copyright */}
            <section style={{ flex: '1', minWidth: '200px' }}>
                <img src={logo} alt="Quantum Aesthetics Logo" style={{ maxWidth: '150px', marginBottom: '10px' }} />
                <p>© 2023 Copyright Quantum Aesthetics. All Rights Reserved</p>
            </section>

            {/* Site Navigation */}
            <section style={{ flex: '1', minWidth: '150px' }}>
                <p style={{ fontWeight: 'bold' }}>Site Nav</p>
                <p>Courses</p>
                <p>About</p>
                <p>Online</p>
                <p>Models</p>
            </section>

            {/* Legal Section */}
            <section style={{ flex: '1', minWidth: '150px' }}>
                <p style={{ fontWeight: 'bold' }}>Legal</p>
                <p>Privacy Policy</p>
                <p>Terms & Conditions</p>
                <p>Contact Us</p>
            </section>

            {/* Newsletter Section */}
            <section style={{ flex: '1', minWidth: '250px' }}>
                <p style={{ fontWeight: 'bold' }}>Get Our Newsletter</p>
                <input
                    type="email"
                    placeholder="Enter your email"
                    style={{
                        padding: '8px',
                        width: '100%',
                        boxSizing: 'border-box',
                        border: '1px solid #ccc',
                        borderRadius: '4px'
                    }}
                />
            </section>
        </div>

    )
}

export default Fifth
