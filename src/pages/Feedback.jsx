import React from "react";
import { jonny, splashLeft, splashRight, moveLeft, moveRight } from "../assets/images";
import { quote } from "../assets/icons";

const Feedback = () => {
  return (
    <section className = "relative">
      <div className="flex flex-col items-center justify-center mt-16 padding-x mx-32 ">
        <img className = "absolute top-0 right-0 z-10" src = {splashLeft}></img>
        <img className = "absolute bottom-[-75px] left-0 z-10" src = {splashRight}></img>
        <h2 className="text-5xl font-bold font-playfair text-coffee leading-normal">
          Testimonials
        </h2>
        <p className="text-xl font-playfair text-gray leading-normal">
          People Love Us.
        </p>
        <div className="bg-light-yellow mt-5 p-16 flex flex-col items-center justify-center  border-custom-yellow border-[1px] rounded-xl relative">
        <img className = "absolute top-12 left-24" src = {quote}></img>

          <p className="text-xl w-4/5 font-playfair text-gray text-center mt-16">
            This coffee has a delightful balance of rich, smooth flavors with
            subtle hints of chocolate and caramel. Its aroma is inviting and
            comforting, making each sip a comforting experience. The medium
            roast provides a perfect amount of boldness without being
            overwhelming. Overall, a satisfying cup that I would gladly enjoy
            again.
          </p>
          <h3 className ="mt-14 text-3xl font-playfair font-bold text-coffee">Jonny Thomas</h3>
          <p className = "mt-3 text-xl text-gray font-playfair mb-14">Project Manager</p>
          <img className = "absolute bottom-[-70px]" src = {jonny}></img>
          <img className = "absolute top-[40%] left-[-50px]" src = {moveLeft}></img>
          <img className = "absolute top-[40%] right-[-50px]" src = {moveRight}></img>

        </div>
      </div>
    </section>
  );
};

export default Feedback;
