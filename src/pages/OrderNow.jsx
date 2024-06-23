import React from "react";
import { coffeeBean, coffeeCup } from "../assets/images";
import Button from "../components/Button";

const OrderNow = () => {
  return (
    <section className = "relative bg-coffeeBackground bg-cover bg-opacity-90 mt-16 h-[574px]" >
      <div className="h-[574px] flex flex-row relative bg-coffee bg-opacity-60">
        <div className="flex flex-col justify-center  padding-x">
          <h2 className="text-white text-6xl font-playfair leading-normal font-bold">
            Have an Amazing Morning
          </h2>
          <p className="text-white text-2xl font-playfair font-thin leading-normal w-3/5">
          We're offering you a unique chance to enhance your life through the experience of our coffee.
          </p>
          <div className="mt-10">
            <Button label="Order Now" color="bg-custom-yellow"></Button>
          </div>
        </div>
        <div>
          <img src={coffeeBean} className = "absolute right-0"></img>
          <img src = {coffeeCup} className = "absolute right-60 bottom-10"></img>
        </div>
      </div>
    </section>
  );
};

export default OrderNow;
