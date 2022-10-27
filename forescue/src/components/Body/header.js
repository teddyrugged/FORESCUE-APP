import React from 'react'
import Device from '../images/Device.svg';

const header = () => {
  return(
  <>
        <header>
        <h2>FORESCUE</h2>
        <div className='nav'>
            <a href = "Guidlines"> Guidlines</a>
            <a href = "/">How it works</a>
            <a href = "Guidlines">Contacts</a>
            <a href = "Guidlines">Join Us</a>
        </div>

    </header>
    <main>
        <div className='top'>
            <h2>Disasters, Relief,Emergency</h2>
            <p>Disaster Relief from Flooding, House burning, House Collapsing, Accidents in the home, workshop, factories, schools e.t.c., land slides, Electrical accidents, Hospital Disaster</p>
            < Device />
        </div>

    </main>
  </>

  )
}

export default header



