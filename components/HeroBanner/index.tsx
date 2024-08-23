"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";

const HeroBanner = () => {
  return (
    <>
      {/* <!-- ===== HeroBanner Start ===== --> */}
      <section className="px-4 md:px-8 lg:py-15 2xl:px-0"
        style={{
          backgroundImage: `url('/images/backgrounds/FunFactBackground.png')`, backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover'
        }}>
        <div className="relative z-1 mx-auto max-w-c-1390 rounded-lg">
          <motion.div
            variants={{
              hidden: {
                opacity: 0,
                y: -20,
              },
              visible: {
                opacity: 1,
                y: 0,
              },
            }}
            initial="hidden"
            whileInView="visible"
            transition={{ duration: 1, delay: 0.1 }}
            viewport={{ once: true }}
            className="animate_top mx-auto mb-12.5 px-4 text-center md:w-4/5 md:px-0 lg:mb-17.5 lg:w-2/3 xl:w-1/2"
          >
            <h2 className="mb-4 text-hero font-bold text-light dark:text-white">
              Your Vision, Our Expertise
            </h2>
            <p className="mx-auto lg:w-full text-tools">
              At Appleseed.dev, we believe in the power of rapid, flexible app development.
              <br />
              <span className="text-[#89af00]">Whether starting fresh, transforming an app, or optimizing for production, our NoCode and open-source tools ensure success. We support you from concept to launch and beyond.</span>
            </p>
            <button
                      aria-label="get started button"
                      className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho bg-gradient-to-r from-customGreen to-customGreener my-5 mx-auto" 
                      onClick={() => {
                        const contactSection = document.getElementById("contact");
                        if (contactSection) {
                          contactSection.scrollIntoView({ behavior: "smooth" });
                        }
                      }}
                    >
                     Let’s Build Your Future - Contact Us Today
                    </button>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== HeroBanner End ===== --> */}
    </>
  );
};

export default HeroBanner;
