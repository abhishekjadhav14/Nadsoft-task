import React from 'react'
import Rectangle from '../assets/Rectangle.svg';
import photo from '../assets/Photo.svg'
import Hexes from '../assets/Hexes_copy.svg'
import Hex_white from '../assets/Hex_copy.svg'
import Hex_grey from '../assets/Hex_grey.svg'


const Third = () => {
  return (
    <>

      {/* Hexes Image Positioned Absolutely on the Right */}
      <div style={{ width: '100vw', position: 'relative' }}>
        <img
          src={Hexes}
          style={{
            position: 'absolute',
            top: '60%', // Vertically center the image
            transform: 'translateY(-25%)', // Proper vertical centering
            width: '10vw', // Adjust size based on your design
            zIndex: 3, // Ensure it's on top of the background
            margin: "30px"
          }}
          alt="Hexes"
        />
      </div>

      {/* Main Container */}
      <div style={{ width: '100vw', position: 'relative' }}>

        {/* Gray Overlay for the Top Slope */}
        <div
          style={{
            position: 'absolute',
            width: '100%',
            height: '100vh',
            clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0% 90%)',
            backgroundColor: '#e6e6e6',
            zIndex: 1,
          }}
        />

        {/* Main Content Section */}
        <div
          style={{
            padding: "300px 0",
            display: "flex",
            justifyContent: "space-between",
            flexWrap: "wrap",
            background: "#000d28",
            clipPath: 'polygon(0 10%, 100% 0, 150% 80%, 0 100%)',
            color: "white",
            position: 'relative',
            zIndex: 2, // Ensure content is above background but below Hexes image
          }}
        >
          <section style={{ marginLeft: "10%", flex: "1 1 300px", maxWidth: "400px" }}>
            <h1 style={{ width: '90%', fontSize: "2.5em", textAlign: 'left' }}>Ready to Take The Next Step?</h1>
            <div style={{ marginLeft: "40px" }}>
              <p style={{ width: '90%', fontSize: "1.1em" }}>
                Don’t miss out on this incredible opportunity to unlock your potential and embark on a rewarding career journey.
              </p>
              <p style={{ width: '90%', fontSize: "1.1em" }}>
                Speak with one of our knowledgeable advisors. We’ll provide personalized guidance, answer your questions, and help you choose the perfect laser training program that aligns with your goals and aspirations.
              </p>
              <button style={{ margin: "20px 0", width: "90%", padding: "10px", fontSize: "1em" }}>Book Your Call Now!</button>
            </div>
          </section>

          <section style={{ flex: "1 1 300px", maxWidth: "600px", display: 'flex', justifyContent: 'center' }}>
            <img style={{ width: "80vw", maxWidth: "600px", height: "auto" }} src={photo} alt="Visual Representation" />
          </section>
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

export default Third
