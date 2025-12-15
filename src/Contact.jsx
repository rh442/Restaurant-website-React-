import React, { useState } from "react";
import insta from './img/insta.jpg'
import X_ from './img/X.png'
function Contact(){
    const [success,setSuccess] = useState(false);
    const SucessMessage = () =>{    
    setSuccess(true);
    setTimeout(() => {
        setSuccess(false);
    }, 1500);
}
    return(
        <>
            <div className="topic  mx-auto border-black border-[1px] mt-[10px] text-center  bg-yellow-400 rounded w-[50%]">
                <h1>Contact Us</h1>
            </div>

            <div className="map flex justify-center mt-[10px]">
                <iframe className="gmap w-full h-[200px]"src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.7230845795684!2d-73.96706882465257!3d40.76811492138522!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c258eb899f0889%3A0xef41c13a4f070d78!2s695%20Park%20Ave%2C%20New%20York%2C%20NY%2010065!5e0!3m2!1sen!2sus!4v1759011084102!5m2!1sen!2sus"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade">
                </iframe>
            </div>

            <div className="contact-form flex flex-col justify-center text-center items-center mb-[10px]">
      
                <label htmlFor="name">Name:</label>
                <input className="rounded" type="text" id="name" name="name" placeholder="Name..."/>
                
                
                <label htmlFor="email">Email:</label>
                <input className="rounded" type="email" id="email" name="email" placeholder="YourEmail@something.com"/>
                
                
                <label htmlFor="message">Message: </label>
                <textarea className="rounded" id="message" name="message" rows="20" cols="50" placeholder="Message Here"></textarea>
                <br/>
                <p className={`success bg-yellow-400 w-[90%] border-[5px] ${success ? "block":"hidden"}`} onClick={SucessMessage}>Successfully Submitted!</p>
                <br/>
                <button className="submit rounded border-black bg-red-600 w-[20%] border-[5px] cursor-pointer" type="button">Submit</button>
            </div>

            <footer>
    <div className="footer flex flex-row items-center justify-evenly bg-[rgba(200,0,0,0.7)] border-t-[#8b0000] border-solid border-t-[5px] ">
      <div className="hours flex flex-col items-center justify-center">
        <h4><b>Hours</b></h4>
        <h5>Monday: 9 Am - 9pm</h5>
        <h5>Tuesday: 9 Am - 9pm</h5>
        <h5>Wednesday: 9 Am - 9pm</h5>
        <h5>Thursday: 9 Am - 9pm</h5>
        <h5>Friday: 9 Am - 9pm</h5>
        <h5>Saturday: 9 Am - 9pm</h5>
        <h5>Sunday: closed</h5>
      </div>
      <div className="socials">
          <img className="app w-[40px] m-[10px]" src={insta} alt="insta"/>
          <img className="app w-[40px] m-[10px]"src={X_} alt="X"/>
      </div> 
    </div>

  </footer>
        </>
    )
}
export default Contact