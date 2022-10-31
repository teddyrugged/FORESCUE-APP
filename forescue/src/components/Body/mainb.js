import React from 'react'
import img1 from '../images/image 7.svg';
import img2 from '../images/image 8.svg';
import img3 from '../images/image 9.svg';


const mainb = () => {
  return (
    <div className=' mic'>
        <h2>How it works</h2>
        <div className='evt'>
            <img src={img1} alt="" className='dpic 1'/>
            <img src={img2} alt="" className='dpic 2'/>
            <img src={img3} alt="" className='dpic 3'/>

        </div>

    </div>
  )
}

export default mainb