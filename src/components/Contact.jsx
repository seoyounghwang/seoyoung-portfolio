import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen text-white bg-[#154024] flex justify-center items-center p-4"
    >
      <form
        action="https://getform.io/f/9650430e-c828-41d6-8031-1f62b9e27c69"
        method="POST"
        className="flex flex-col max-w-[600px] w-full"
      >
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-[#D9A9B6]">
            Contact
          </p>
          <p> </p>
        </div>
        <input
          className="my-4 p-2 placeholder-black text-black"
          type="text"
          placeholder="Name"
          name="name"
          required
        />
        <input
          className="my-4 p-2 placeholder-black bg-opacity-80"
          type="email"
          placeholder="Email"
          name="email"
          required
        />
        <textarea
          className="p-2 placeholder-gray-700 text-black resize-none"
          name="message"
          rows="10"
          placeholder="Message"
          required
        ></textarea>
        <button className="text-white border-2 hover:bg-[#D9A9B6] hover:border-[#D9A9B6] px-4 py-3 my-8 mx-auto flex items-center">
          SUBMIT
        </button>
      </form>
    </div>
  );
};

export default Contact;
