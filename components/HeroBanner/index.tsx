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
           You are the hero
            </h2>
            <p className="mx-auto lg:w-full text-tools">
            -- we’re here to make sure you have the tools and strategies you need to <span className="text-[#FFC470]">succeed</span> , without the <span className="text-[#C33C12]">complexity</span>.
            </p>
          </motion.div>
        </div>
      </section>
      {/* <!-- ===== HeroBanner End ===== --> */}
    </>
  );
};

export default HeroBanner;
