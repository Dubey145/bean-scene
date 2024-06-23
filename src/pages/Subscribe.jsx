import React from "react";
import { cupSplashLeft, cupSplashRight } from "../assets/images";
import Button from "../components/Button";

const Subscribe = () => {
  return (
    <section className="relative bg-coffeeBackground bg-cover bg-opacity-90 mt-32 h-[374px]">
      <div className="h-[374px] flex flex-col items-center justify-center relative bg-coffee bg-opacity-60">
        <div className="flex flex-col justify-center items-center  padding-x">
          <h2 className="text-white text-6xl font-playfair leading-normal font-bold">
            Subscribe To Our Newsletter
          </h2>
          <p className="text-white text-xl font-playfair font-thin leading-normal ">
            Don't miss out on our latest news, updates, tips and special offers
          </p>
          <div className="mt-10 flex flex-row">
            <input
              className="rounded-l-sm w-[450px] p-2"
              placeholder="Email"
            ></input>
            <div>
              <p className="font-playfair text-coffee text-xl p-2 bg-custom-yellow font-bold rounded-r-sm">
                Subscribe
              </p>
            </div>
          </div>
        </div>
        <img
          src={cupSplashLeft}
          className="absolute right-0 bottom-[-200px] z-10"
        ></img>
        <img
          src={cupSplashRight}
          className="absolute left-0 bottom-[-200px] z-10"
        ></img>
      </div>
    </section>
  );
};

export default Subscribe;
