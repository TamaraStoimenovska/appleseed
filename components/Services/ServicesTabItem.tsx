import React from "react";
import { FeatureTab } from "@/types/featureTab";
import Image from "next/image";

const ServicesTabItem = ({ featureTab }: { featureTab: FeatureTab }) => {
  const { title, desc1, desc2, image, btnText, desc3 } = featureTab;

  return (
    <>
      <div className="flex items-center gap-8 lg:gap-19">
        <div className="md:w-1/2">
          <h2 className="mb-7 text-3xl font-bold text-black dark:text-white xl:text-sectiontitle2">
            {title}
          </h2>
          <p className="mb-5 font-semibold">{desc1}</p>
          <p className="w-11/12">{desc2}</p>
          <br />
          <p className="w-11/12 font-semibold">{desc3}</p>
          <button
            aria-label="get started button"
            className="flex rounded-full bg-black px-7.5 py-2.5 text-white duration-300 ease-in-out hover:bg-dark:bg-btndark dark:hover:bg-blackho bg-gradient-to-r from-customGreen to-customGreener my-5"
            onClick={() => {
              const contactSection = document.getElementById("contact");
              if (contactSection) {
                contactSection.scrollIntoView({ behavior: "smooth" });
              }
            }}
          >
            {btnText}
          </button>
        </div>
        <div className="relative mx-auto hidden aspect-[562/366] max-w-[550px] md:block md:w-1/2">
          <Image src={image} alt={title} fill className="dark:hidden" />
        </div>
      </div>
    </>
  );
};

export default ServicesTabItem;
