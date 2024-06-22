import React from "react";
import Button from "./Button";

const ProductCard = (props) => {
  return (
    <div className="flex flex-col justify-center items-center m-10 shadow-xl rounded-xl bg-light-yellow relative">
        <img className="rounded-t-xl" src={props.image}></img>
      <div className="pt-4 border-custom-yellow border-l-[1px] border-r-[1px] border-b-[1px] flex flex-col justify-center items-center w-full rounded-b-xl  hover:bg-custom-yellow hover:bg-opacity-20">
        <h3 className="mt-2 font-playfair text-coffee font-bold text-xl">
          {props.name}
        </h3>
        <p className="mt-2 font-playfair font-light text-base">
          {props.ingredients}
        </p>
        <p className="mt-2 mb-10 font-playfair font-semibold text-lg text-coffee">
          ${props.price}
        </p>
      </div>

      <div className="absolute bottom-[-20px]">
        <Button label="Buy Now" color="bg-custom-yellow"></Button>
      </div>
    </div>
  );
};

export default ProductCard;
