import React from 'react'
import map from '../assets/Map.svg'
import FB from '../assets/FB.svg'
import insta from '../assets/INSTA.svg'

const Fourth = () => {
    return (

        <>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', padding: '50px',flexWrap:'wrap' }}>
            {/* Map Image */}
            <img
                style={{
                    position: 'relative',
                    width: '55vw', // Adjusts width relative to the viewport
                    height: 'auto', // Ensures aspect ratio is maintained
                }}
                src={map}
                alt="Map"
            />

            {/* Address and Contact Section */}
            <section style={{  display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                <div>
                    <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Quantum Aesthetics</p>
                    <p>2210 S. Mill Ave, Ste 7</p>
                    <p>Tempe, Arizona 85282</p>
                    <p>(480) 580-4328</p>
                </div>

                {/* Social Media Icons */}
                <div style={{ display: 'flex', marginTop: '10px' }}>
                    <img
                        style={{ width: '50px', height: '50px', marginRight: '10px' }}
                        src={FB}
                        alt="Facebook"
                    />
                    <img
                        style={{ width: '50px', height: '50px' }}
                        src={insta}
                        alt="Instagram"
                    />
                </div>
            </section>

            {/* Hours Section */}
            <section style={{  }}>
                <p style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '10px' }}>Hours</p>
                <p>Wednesday - Friday</p>
                <p>10:00 am - 5:00 pm</p>
            </section>

            
        </div>
        <hr style={{width:"95vw"}}></hr>
        </>
    )
}

export default Fourth
