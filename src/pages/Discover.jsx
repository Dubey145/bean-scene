import React from "react";
import { beanCup, coffeeBlastRight } from "../assets/images";
import Button from "../components/Button";

const Discover = () => {
  return (
    <section className="w-full mt-16 relative">
      <div className="flex flex-row padding-x justify-around items-center mt-10 gap-10">
        <div className="w-2/5">
          <h2 className="font-playfair text-6xl text-coffee font-bold">
            Discover The Best Coffee
          </h2>
          <p className="leading-normal font-playfair text-xl mt-10 text-gray">
            Bean Scene is not just a coffee shop; it's a place where you'll find
            coffee that enhances productivity and uplifts your mood. While any
            cup of coffee is good, our commitment to quality ensures an
            unparalleled taste experience. You're guaranteed to savor our coffee
            like never before.
          </p>
          <div className="mt-5">
            <Button label="Know More" color="bg-custom-yellow"></Button>
          </div>
        </div>
        <div>
          <img src={beanCup} height={484} width={500} alt="bean cup"></img>
        </div>
      </div>
      <div className="absolute bottom-[-130px] z-10">
          <img src={coffeeBlastRight}></img>
        </div>
    </section>
  );
};

export default Discover;
