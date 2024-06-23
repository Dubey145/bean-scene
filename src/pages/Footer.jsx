import React from "react";
import { footerBeans, socials } from "../assets/images";

const Footer = () => {
  return (
    <section>
      <div className="relative h-[550px] bg-footer ">
        <img
          src={footerBeans}
          className="w-full mix-blend-overlay absolute bottom-0"
        ></img>

        <div className="padding-x flex flex-row justify-between items-center h-full text-white">
          <div className="w-1/3 z-20 mt-32">
            <h3 className="font-clicker text-6xl">Bean Scene</h3>
            <p className="mt-12 text-base font-playfair ">
              Bean Scene is your haven for all things coffee. Step into a world
              where every aroma-filled cup tells a story of craftsmanship and
              quality. With a cozy atmosphere and dedicated baristas, indulge in
              the perfect brew tailored just for you.
            </p>
            <img className="mt-10" src={socials}></img>
          </div>
          <div className="flex flex-row justify-around w-2/3 mt-32">
            <div className="flex flex-col font-playfair ">
              <h3 className=" text-5xl ">About</h3>
              <div className="text-base font-thin">
                <p className="mt-16">Menu</p>
                <p className="mt-5">Features</p>
                <p className="mt-5">News & Blogs</p>
                <p className="mt-5">Help & Support</p>
              </div>
            </div>
            <div className="flex flex-col font-playfair">
              <h3 className="text-5xl ">Company</h3>
              <div className="text-base font-thin">
                <p className="mt-16 ">How We Work</p>
                <p className="mt-5">Terms of Service</p>
                <p className="mt-5">Pricing</p>
                <p className="mt-5">FAQ</p>
              </div>
            </div>
            <div className="flex flex-col font-playfair">
              <h3 className="text-5xl ">Contact Us</h3>
              <div className="text-base font-thin">
                <p className="mt-16">Whitefield, Bangalore, Karnataka</p>
                <p className="mt-5">+91 9001100999</p>
                <p className="mt-5">coffee@beanscene.com</p>
                <p className="mt-5">www.beanscene.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
