"use client";
import React, { useState, useRef, ChangeEvent, FormEvent } from "react";
import { motion } from "framer-motion";
import emailjs from "@emailjs/browser";
import Swal from "sweetalert2";

import { EarthCanvas } from "./canvas";

import { slideIn } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import { styles } from "./styles";

interface FormValues {
  name: string;
  companyname: string;
  phone: string;
  email: string;
  message: string;
  priceRange: string;
  options?: any;
}

const showModal = () => {
  Swal.fire({
    title: "📧 Email Send Successfully !",
    icon: "success",
    html: `
      <div>
        <p>👍 Thank you, We will get back to you as soon as possible 🙂</p>
      </div>
    `,
    timer: 4000, // Dismiss the alert after 4 seconds
    timerProgressBar: true,
  });
};

const Contact = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState<FormValues>({
    name: "",
    companyname: "",
    phone: "",
    email: "",
    message: "",
    priceRange: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value, type } = e.target;

    if (type === "select-multiple") {
      const selectElement = e.target as HTMLSelectElement;
      const selectedOptions = Array.from(
        selectElement.selectedOptions,
        (option) => option.value
      );

      setForm({ ...form, [name]: selectedOptions });
    } else {
      // Handle other fields as usual
      setForm({ ...form, [name]: value });
    }
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .send(
        "service_9b7vhit",
        "template_goytaeu",
        {
          from_name: form.name,
          to_name: "FlowenTech",
          to_email: "flowentech1@gmail.com",
          message: form.message,
        },
        "5sLhHTaBlH03wnrY-"
      )
      .then(
        () => {
          setLoading(false);
          showModal();
          setForm({
            name: "",
            email: "",
            message: "",
            companyname: "",
            phone: "",
            priceRange: "",
          });
        },
        (error) => {
          setLoading(false);
          console.log(error);
          alert("Something went wrong");
        }
      );
  };

  return (
    <div className=" flex justify-center overflow-hidden">
      <div className=" lg:flex-row flex-col-reverse flex gap-5 lg:gap-5 overflow-hidden w-full lg:px-12 ">
        <motion.div
          variants={slideIn("left", "tween", 0.2, 1)}
          className="flex-[0.75] bg-gradient-to-tl from-purple-900 to p-8  rounded-2xl lg:w-[500px] sm:w-[100%] "
        >
          <p className={styles.sectionSubText}>Get in touch</p>
          <h3 className={styles.sectionHeadText}>Contact.</h3>

          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="mt-12 flex flex-col gap-8"
          >
            <div className="lg:flex lg:justify-between ">
              <div>
                <label className="flex flex-col ">
                  <span className="text-white font-medium mb-4">{`I am`}</span>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder={"Your Name"}
                    className="bg-tertiary p-8 py-4 px-12 lg:px-6 placeholder:text-secondary text-white rounded-lg outlined-none 
                      border-none font-medium"
                    required
                  />
                </label>
                <label className="flex flex-col py-5 mt-5">
                  <span className="text-white font-medium mb-4">
                    My Business Email
                  </span>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder={"You@example.com"}
                    className="bg-tertiary py-4 px-12 lg:px-6 placeholder:text-secondary text-white rounded-lg outlined-none 
                      border-none font-medium"
                    required
                  />
                </label>
              </div>
              <div>
                <label className="flex flex-col ">
                  <span className="text-white font-medium mb-4">{`My Company Name`}</span>
                  <input
                    type="text"
                    name="companyname"
                    value={form.companyname}
                    onChange={handleChange}
                    placeholder={"Your Company Name"}
                    className="bg-tertiary p-8 py-4 px-12 lg:px-6 placeholder:text-secondary text-white rounded-lg outlined-none 
                      border-none font-medium"
                    required
                  />
                </label>
                <label className="flex flex-col py-5 mt-5">
                  <span className="text-white font-medium mb-4">
                    My Phone Number
                  </span>
                  <input
                    type="tel"
                    name="phone"
                    value={form.phone}
                    onChange={handleChange}
                    placeholder="Your Phone Number"
                    className="bg-tertiary py-4 px-12 lg:px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                    required
                  />
                </label>
              </div>
            </div>
            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Price Range</span>
              <select
                name="priceRange"
                value={form.priceRange}
                onChange={handleChange}
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              >
                <option value="">Select Price Range</option>
                <option value="1000">{`< $1000`}</option>
                <option value="1000-2000">$1000 - $2000</option>
                <option value="2000-3000">$2000 - $3000</option>
                <option value="3000-4000">$3000 - $4000</option>
                <option value="5000">{`> $5000`}</option>
              </select>
            </label>

            <label className="flex flex-col">
              <span className="text-white font-medium mb-4">Your Message</span>
              <textarea
                rows={7}
                name="message"
                value={form.message}
                onChange={handleChange}
                placeholder="Say your Project Idea .... "
                className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
                required
              />
            </label>

            <button
              type="submit"
              className="bg-emerald-600 rounded-md py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary"
            >
              {loading ? "Sending..." : "Send"}
            </button>
          </form>
        </motion.div>
        <motion.div
          variants={slideIn("right", "tween", 0.1, 0.9)}
          className="lg:flex-1 lg:h-auto md:h-[550px] h-[350px] items-end justify-end overflow-hidden"
        >
          <EarthCanvas />
        </motion.div>
      </div>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
