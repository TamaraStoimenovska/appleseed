"use client";
import React from "react";
import SingleTool from "./SinglePartner";
import brandData from "./partnersData";

const OpenSourcePartners = () => {
  return (
    <>
      {/* <!-- ===== Clients Start ===== --> */}
      <section className=" py-11 dark:border-y-strokedark dark:bg-black">
        <div className="mx-auto max-w-c-1390 px-4 md:px-8 2xl:px-0">
          <h1 className="mb-5 font-bold text-black dark:text-white xl:text-tools text-center">
            OPEN SOURCE PARTNERS
          </h1>
          
          <div className="grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-3 md:grid-cols-4 items-center justify-center my-5">         
            {brandData.map((tool) => (
              <SingleTool tool={tool} key={tool.id} />
            ))}
          </div>
        </div>
      </section>
      {/* <!-- ===== Clients End ===== --> */}
    </>
  );
};

export default OpenSourcePartners;
