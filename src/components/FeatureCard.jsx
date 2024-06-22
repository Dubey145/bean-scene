import React from 'react'

const FeatureCard = (props) => {
  return (
    <div className = "flex flex-col justify-center items-center bg-light-yellow mt-10 border-custom-yellow rounded-xl border-[1px] shadow-xl p-8 hover:bg-custom-yellow hover:bg-opacity-20">
        <img className = "m-5" src = {props.image}></img>
        <h3 className = "text-3xl font-playfair font-bold text-coffee">{props.name}</h3>
        <p className = "text-base font-playfair text-gray mt-3 w-4/5 text-center">{props.text}</p>
    </div>
  )
}

export default FeatureCard