import React from 'react'
import Hexes from '../assets/Hexes_copy.svg'
import Hex_grey from '../assets/Hex_grey.svg'

const Second = () => {
    return (
        <>
            < div style={{ background: "#e6e6e6", Minheight: "50vh", width: "100%" }}>
                <h1 style={{ marginTop: '0', fontWeight: 200, fontSize: '50px', margin: "0 30px " }}>why Choose Laser school ?</h1>
                <section style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", padding: '35px' }}>
                    <div style={{ flexBasis: "20vw", minWidth: "250px" }}>
                        <ui>
                            <li style={{
                                fontWeight: 'bold',
                                fontSize: 'x-large',

                            }}>Comprehensive Laser training:</li>
                        </ui>
                        <p style={{ fontWeight: "100" }}>our courses cover a wide range of laser procedures, including hair removal,skin rejuvenation,tattoo removal, and more. ypu`ll learn from industry experts and gain the confidence to offer advanced treatments.</p>
                    </div>

                    <div style={{ flexBasis: "20vw", minWidth: "250px" }}>
                        <ui>
                            <li style={{
                                fontWeight: 'bold',
                                fontSize: 'x-large'
                            }}>Hands-on  Experience:</li>
                        </ui>
                        <p style={{ fontWeight: "100" }}>Cet ready to dive into interactive training sessions with state-of-the-art laser devices. Our hands-on approach ensures you developer the practical skills necessary to excel in the field.</p>
                    </div>

                    <div style={{ flexBasis: "20vw", minWidth: "250px" }}>
                        <ui>
                            <li style={{
                                fontWeight: 'bold',
                                fontSize: 'x-large'
                            }}>Industry-Recognized Certifications:</li>
                        </ui>
                        <p style={{ fontWeight: "100" }}>Stand out from the crowd with our industry-recognized certifications, such as the Cosmetic Laser Technician (CLT) and Laser Safety Officer (LSO) designations. Enhance your professional cradentiala and open doors to exciting career opportunities.</p>
                    </div>
                </section>
            </div>

        </>
    )
}

export default Second
