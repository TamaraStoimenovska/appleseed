"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import SectionHeader from "../Common/SectionHeader";
import clientsData from "./clientsData";

const Clients = () => {
  return (
    <section>
      <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
        {/* <!-- Section Title Start --> */}
        <SectionHeader
          headerInfo={{
            title: `OUR EXPERTISE`,
            subtitle: `Trusted by Industry Leaders`,
            description: ``,
          }}
        />
        {/* <!-- Section Title End --> */}
      </div>

      <div className="pattern-dots pattern-blue-500 pattern-bg-white pattern-size-4 pattern-opacity-10 relative z-50 mx-auto mt-15 max-w-c-1154 px-4 md:px-8 xl:mt-20 xl:px-0">
        <div className="absolute -top-3/4 left-0 right-0 -z-1 mx-auto h-full w-full">
          <Image
            fill
            src="/images/shape/shape-dotted-dark.svg"
            alt="Dotted"
            className="hidden dark:block"
          />
        </div>
        <div className="flex flex-wrap justify-center gap-6 md:gap-10">
          {clientsData.map((client) => (
            <motion.div
              key={client.id}
              variants={{
                hidden: { opacity: 0, y: -20 },
                visible: { opacity: 1, y: 0 },
              }}
              initial="hidden"
              whileInView="visible"
              transition={{ duration: 1, delay: 0.1 }}
              viewport={{ once: true }}
              className="w-full sm:w-1/2 md:w-1/3 lg:w-1/6"
            >
              <a
                href={client.href}
                target="_blank"
                rel="noopener noreferrer"
                className="block rounded-[10px] bg-white p-4 shadow-lg dark:bg-btndark"
              >
                <Image
                  width={client.width}
                  height={client.height}
                  src={client.image}
                  alt={client.name}
                  className="mx-auto"
                />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;
