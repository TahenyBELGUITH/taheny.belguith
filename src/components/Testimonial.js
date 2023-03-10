import React from "react";

// import testimonials data

// import components
import TestimonialSlider from "./TestimonialSlider";
const Testimonial = () => {
  return (
    <section id="testimonials" className="section bg-secondary">
      <div className="container mx-auto">
        <div className="flex flex-col items-center text-center">
          <h2 className="section-title before:content-testimonials relative before:absolute before:opacity-40 before:-top-[2rem] before:-left-64 before:hidden before:lg:block font-body">
            What other people say
          </h2>
          <p className="subtitle">
            " The way to get started is to quit talking and begin doing... "
          </p>
        </div>
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default Testimonial;