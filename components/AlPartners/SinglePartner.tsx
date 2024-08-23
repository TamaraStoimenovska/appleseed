import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Tool } from "@/types/tool";
import { motion } from "framer-motion";

const SinglePartner = ({ tool }: { tool: Tool }) => {
  const { image, href, name, imageLight, id } = tool;

  return (
    <>
      <motion.a
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
        transition={{ duration: 1, delay: id }}
        viewport={{ once: true }}
        href={href}
        target="_blank" 
        rel="noopener noreferrer"
        className="animate_top mx-w-full relative block h-15 mb-6"
      >
        <Image
          className="opacity-65 transition-all duration-300 hover:opacity-100 dark:hidden"
          src={image}
          alt={name}
          fill
        />
      </motion.a>
    </>
  );
};

export default SinglePartner;
