import React from "react";

// import brands data
import { brands } from "../data";
const Brands = () => {
  return (
    <section className="min-h-[146px] bg-tertiary flex items-center ">
      <div className="container mx-auto flex md:justify-between items-center flex-wrap justify-evenly p-4">
        {brands.map((brand, index) => {
          return (
            <div key={index}>
              <img src={brand.img} className="animate-bounce"></img>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Brands;
