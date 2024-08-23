"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import FunFactBG from 'images/backgrounds/FunFactBackground.png'

const FunFact = () => {
  return (
    <>
      {/* <!-- ===== Funfact Start ===== --> */}
      <section className="px-4 py-20 md:px-8 lg:py-22.5 2xl:px-0"
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
            <h2 className="mb-4 text-3xl font-bold text-light dark:text-white xl:text-sectiontitle3">
              Go beyond using<span className="text-[#D35400]"> ChatGPT</span> to Automate your Job and business
            </h2>
            <p className="mx-auto lg:w-11/12">
              See how simple AI can be. Kono empowers your business with AI solutions that are easy to implement, straightforward to manage, and designed to scale with your needs. We handle the tech—so you can focus on leading your business to new heights.
            </p>
          </motion.div>
          <div className="mt-10 flex justify-center">
            <div className="flex gap-5">
              <button
                aria-label="get started button"
                className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho bg-gradient-to-r from-customOrange to-customRed"
              >
                Let’s Chat
              </button>
              <button
                aria-label="get started button"
                className="flex rounded-full bg-grey px-7.5 py-2.5 text-dark duration-300 ease-in-out hover:bg-blackho dark:bg-btndark dark:hover:bg-blackho"
                onClick={() => {
                  const servicesSection = document.getElementById("services");
                  if (servicesSection) {
                    servicesSection.scrollIntoView({ behavior: "smooth" });
                  }
                }}
              >
                Explore Solutions
              </button>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===== Funfact End ===== --> */}
    </>
  );
};

export default FunFact;
