import React from 'react'
import {products} from '../constants'
import ProductCard from '../components/ProductCard'
import { coffeeBlastLeft } from '../assets/images'

const BestSellers = () => {
  return (
    <section>
        <div className = "flex flex-col justify-center  items-center mt-5 relative">
            <h2 className = "text-6xl font-bold font-playfair text-coffee">
            Discover a Fresh Coffee Blend Style
            </h2>
            <p className = "text-xl text-gray mt-5 font-playfair">
            Discover a variety of coffee flavors with us. Each cup promises a new and exciting experience.
            </p>
            <div className = "flex flex-row">
                {products.map((product)=>{
                    return <ProductCard {...product}></ProductCard>
                })}
            </div>
            <img className="absolute bottom-[-180px] right-0 z-10" src = {coffeeBlastLeft}></img>
        </div>
    </section>
  )
}

export default BestSellers