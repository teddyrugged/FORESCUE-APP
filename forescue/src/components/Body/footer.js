import React from 'react'
import "./dashboard"


const Footer = () => {
  return (
    <div>
        {/* <h1>Get in touch with us</h1>
        <form >
            <h2>Send us a message</h2>
            <input type= "text" id="text" name="firstname"/>
            <input type= "text" id="text" name="lastname"/>
            <label for="email">Your Email</label>
            <input type="email" id="email" name="email"/>
            <input type= "text" id="text" name="message"/>

            <input type="submit" value="Submit"/>
        </form> */}
        <div className='wid--foot'>
            {/* <div className='middle--man'>
                <h2>FORESCUE</h2>
                <h3>subscribe to get alert</h3>
                <form className='d--forms'>
                    <input  className='input--1'   type= "text" id="text" name="enter your email address"/>
                    <input className='input--2' type="submit" value="Subsribe"/>
                </form>
                <div class="hl"></div>
            </div> */}



            <footer>
                <p>© 2022 All Rights Reserved by Forescue</p>
                <div className='biz'>
                    <a href = "/"> Privacy Policy</a>
                    <a href = "/"> Term of use</a>
                    <a href = "/"> How it works</a>
                    <a href = "/"> Tutorial</a>
                    <a href = "/"> Site Map</a>
                </div>


            </footer>

        </div>
    </div>
  )
}

export default Footer