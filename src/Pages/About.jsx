import React from 'react'
import Mynav from '../Components/Mynav'
import Footer from '../Components/Footer'
import Para from '../Components/para'
import Teachers from '../Components/Teachers'

function About() {
  return (
    <div>
      <Mynav />
      <div
        className="mt-3"
        style={{
          backgroundImage: "url('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTQdAFMV83BiyIRB-tLyzjcVqAGnuz9IxeCZjkfREOkFA&s=10')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          height: '320px'
        }}
      >
        <div
          className="h-100 d-flex justify-content-center align-items-center"
          style={{
            backgroundColor: 'rgba(97, 84, 84, 0.658)'
          }}
        >
          <h1 className="text-white fw-bold text-center display-4">
            Choose Your Learning Path
          </h1>
        </div>
      </div>
      <Para />
      <Teachers/>
      <Footer />
    </div>
  )
}

export default About
