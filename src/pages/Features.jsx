import React from 'react'
import FeatureCard from '../components/FeatureCard'
import { features } from '../constants'
import Button from '../components/Button'

const Features = () => {
  return (
    <section className = "mt-16">
        <div className = "flex flex-col justify-center items-center">
            <h2 className = "text-6xl font-bold font-playfair text-coffee">What Makes Our Coffee Special?</h2>
            <p className = "text-xl text-gray mt-5 font-playfair">
            We don't just make your coffee, we make your day!
            </p>
            <div className = "flex flex-row gap-16">
            {
                features.map((feature)=>{
                    return(<FeatureCard {...feature}></FeatureCard>)
                })
            }
            </div>
            <p className = "text-xl text-gray mt-14 font-playfair">Great ideas start with great coffee, Let us help you achieve that</p>
            <h3 className = "text-3xl font-bold font-playfair text-coffee mt-2">Get started today.</h3>
            <div className = "mt-5">
            <Button label ="Join Us" color ="bg-custom-yellow"/>
            </div>
        </div>
    </section>
  )
}

export default Features