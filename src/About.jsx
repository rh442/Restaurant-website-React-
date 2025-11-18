import {React,useState,useEffect} from "react";
import {Slides} from './slide.js';

function About (){
    const [currentCard,setCurrentCard] = useState(0);
    const [flash_card, setFlashcards] = useState(Slides);
    let card = flash_card[currentCard];

    function handlePreviousClick() {
        setCurrentCard((prev) =>
        prev === 0 ? flash_card.length - 1 : prev - 1
    );
    }
    function handleNextClick() {
    // index = index + 1;
    setCurrentCard((prev) =>
        prev === flash_card.length - 1 ? 0 : prev + 1
    );
  }
    return(
        <>
            <div className="topic mx-auto border-black border-[1px] mt-[10px] text-center  bg-yellow-400 rounded w-[50%]">
                <b><h1>About us</h1></b>
            </div>

            <p class="desc about bg-yellow-400 opacity-90 leading-loose mt-[10px] px-[20px]">
                At Mini Burgers, we believe great flavor comes in small bites. Our passion is creating crave-worthy comfort food in snackable, shareable portions that keep you coming back for more. From juicy sliders and crispy fries to golden nuggets packed with flavor, every bite is made fresh, fast, and full of fun.

                We’re all about bringing people together—whether you’re grabbing a quick bite on the go, sharing a basket with friends, or indulging in your late-night cravings. Our menu is designed for variety, so you can mix, match, and taste it all without ever settling for just one flavor.

                Fast, fresh, and finger-lickin’ good—that’s our promise. Because life’s too short for boring bites.
            </p>

            <div class="Gallery my-[10px] flex flex-row justify-center items-center content-center">
                <div class="arrow1 text-white cursor-pointer mr-[10px] bg-[rgba(0,0,0,0.9)] rounded p-[5px] "><a class="prev" onClick={handlePreviousClick}><h1>&#10094;</h1></a></div>
                <img className="w-[70%] rounded bg-red-500 border-red-500 border-solid "src={card.src}/>
                <div class="arrow2  text-white cursor-pointer ml-[10px] bg-[rgba(0,0,0,0.9)] rounded p-[5px] "><a class="next" onClick={handleNextClick}><h1>&#10095;</h1></a></div>
             </div>

      
        </>
    )
}
export default About