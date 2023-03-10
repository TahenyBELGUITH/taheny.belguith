import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { FiMail } from "react-icons/fi";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// import contact data
import { contact } from "../data";
const Contact = () => {
  const form = useRef();
  const [done, setDone] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_e1vbcnp",
        "template_z6octra",
        form.current,
        "f2F8PmDNBZRa2pl56"
      )
      .then(
        (result) => {
          console.log(result.text);
          setDone(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  };

  const showToastMessage = () => {
    toast.success("Success Notification !", {
      position: toast.POSITION.TOP_LEFT,
    });
  };
  return (
    <section className="section bg-primary" id="contact">
      <div className="container mx-auto">
        {/* section title */}
        <div className="flex flex-col items-center ">
          <h2 className="section-title before:content-contact relative before:absolute before:opacity-40 before:-top-7 before:-left-40 before:hidden before:lg:block font-body">
            Contact me
          </h2>
          <p className="subtitle">
            If you <span className="text-accent">like what you see </span> and
            have a project you need coded.
          </p>
        </div>
        <div className="flex flex-col lg:gap-x-8 lg:flex-row">
          {/* info */}
          <div className="flex flex-1 flex-col items-start space-y-8 mb-12 lg:mb-0 lg:pt-2">
            {contact.map((item, index) => {
              const { icon, title, subtitle, description } = item;
              return (
                <div className="flex flex-col lg:flex-row gap-x-4" key={index}>
                  <div className="text-accent rounded-sm w-14 h-14 flex items-start justify-center mt-2 mb-4 lg:mb-0 text-2xl ">
                    {icon}
                  </div>
                  <div>
                    <h4 className="font-body text-xl mb-1">{title}</h4>
                    <p className="mb-1">{subtitle}</p>
                    <p className="text-accent font-normal animate-pulse">
                      <a href="mailto: taheny.belguith@gmail.com">
                        {description}
                      </a>
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
          {/* form */}
          <form
            className="space-y-8 w-full max-w-[780px]"
            ref={form}
            onSubmit={sendEmail}
          >
            <div className="flex gap-8">
              <input
                className="input"
                type="text"
                placeholder="Your name"
                required
                name="name"
              />
              <input
                className="input"
                type="text"
                placeholder="Your email"
                required
                name="email"
              />
            </div>
            <input
              className="input"
              type="text"
              placeholder=" Subject"
              required
              name="subject"
            />
            <textarea
              className="textarea"
              placeholder="Your message"
              required
              name="message"
            ></textarea>
            <button
              value="send"
              type="submit"
              className="transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300
                bg-transparent hover:bg-accent-hover text-accent font-semibold hover:text-white py-2 px-4 border border-accent-500 hover:border-transparent rounded items-center flex gap-2"
              onClick={done && showToastMessage}
            >
              <FiMail />
              Send message
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
