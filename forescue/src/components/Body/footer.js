import React from 'react'
import "./dashboard"


const Footer = () => {
  return (

        <div >
            <div className='buttom--form'>
                <h2>Forescue</h2>
                <h5>Subscribe to get alerts</h5>
                <form className='input--form'>
                    <label>
                        <input className = 'details--input'type="text" value = " enter your name"/>
                    </label>
                    <input className='details--submit' type="submit" value="Submit" />
                </form>
            </div>



            <br></br>
            <footer>
                <p className='wid--foot'> © {new Date().getFullYear()} All Rights Reserved by Forescue</p>
                    <ul className='ft--list'>
                        <li><a href = "/"> Privacy Policy</a></li>
                        <li><a href = "/"> Term of use</a></li>
                        <li><a href = "/"> How it works</a></li>
                        <li><a href = "/"> Tutorial</a></li>
                        <li><a href = "/"> Site Map</a></li>
                    </ul>
            </footer>

        </div>

  )
}

export default Footer