import React from 'react'
import Button from '../components/Button'

const Hero = () => {
  return (
    <section className = "w-full">
        <div className = "flex flex-col justify-center bg-cover h-screen bg-customBackground text-white">
            <div className = "padding-x">
                <h3 className = "text-playfair text-3xl font-normal">We've Got your morning covered</h3>
                <h1 className = "text-[220px] font-clicker">Coffee</h1>
                <h3 className = "mt-4 text-playfair text-2xl font-light lg:w-2/5 w-3/5 leading-normal"> Explore the most delightful coffee flavors you'll ever experience with us. We are dedicated to offering our customers the finest quality available.</h3>
            </div>
            <div className = "padding-x mt-10">
                <Button  label = "Order Now" color = "bg-custom-yellow"></Button>
            </div>
        </div>
    </section>
  )
}

export default Hero