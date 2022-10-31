import React from 'react'
import "./dashboard"


const Footer = () => {
  return (
    <div>

        <div className='wid--foot'>
            <br></br>
            <footer>
                <p>© {new Date().getFullYear()} All Rights Reserved by Forescue</p>
                <div className='biz'>
                    <ul>
                        <li><a href = "/"> Privacy Policy</a></li>
                        <li><a href = "/"> Term of use</a></li>
                        <li><a href = "/"> How it works</a></li>
                        <li><a href = "/"> Tutorial</a></li>
                        <li><a href = "/"> Site Map</a></li>
                    </ul>
                </div>
            </footer>

        </div>
    </div>
  )
}

export default Footer