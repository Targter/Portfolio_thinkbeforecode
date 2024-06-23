const Box6container = () => {
  return (
    <>
      <div className=" w-full h-auto sm:h-screen flex items-center justify-start sm:justify-center text-white bg-black pt-24 pl-2  sm:pl-11 overflow-hidden">
        <div className="w-10/12 md:w-10/12 h-full flex flex-col md:mt-24 mt-14 ml-5 sm:ml-11 md:ml-24 md:justify-center items-center md:items-start gap-2 ">
          <div className="border-2 w-full md:w-9/12 h-11/12 p-8 flex flex-col justify-between text-white gap-3 md:gap-0 rounded-2xl ">
            <div className="text-sm md:text-lg">GET IN TOUCH</div>
            <div className="text-sm sm:text-lg md:text-3xl font-extrabold mt-3">
              CONTACT
            </div>
            <form
              className="flex flex-col w-11/12 h-3/4 pt-1 sm:pt-5 gap-2 sm:gap-3 md:gap-4"
              action="https://api.web3forms.com/submit"
              method="POST"
            >
              <input
                type="hidden"
                name="access_key"
                value="4ca22538-4460-4a05-8a57-d4d01c53d3f7"
              />
              <label
                htmlFor="name"
                className="text-xs sm:text-sm md:text-xl font-bold"
              >
                Your name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="what's your good name?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-6 sm:h-10 outline-none bottom-0 pl-0 sm:pl-2 md:pl-5 text-black sm:text-lg text-xs"
                required
              />
              <label
                htmlFor="yourmail"
                className="text-xs sm:text-sm md:text-xl font-bold"
                name="mail"
              >
                Your email
              </label>
              <input
                type="email"
                placeholder="what's your web address?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-6 sm:h-10 outline-none bottom-0 pl-0 sm:pl-2 md:pl-5 text-black sm:text-lg text-xs"
                name="mail_Is"
                required
              />
              <label
                htmlFor="yourmessage"
                className="text-xs sm:text-sm md:text-xl font-bold"
              >
                Your message
              </label>
              <input
                type="text"
                placeholder="what you want to say?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-6 sm:h-10 outline-none bottom-0 pl-0 sm:pl-2 md:pl-5 text-black sm:text-lg text-xs"
                name="message_is"
                required
              />
              <button
                className="mt-6 border-2 w-24 h-9 rounded-md"
                type="submit"
              >
                Send
              </button>
            </form>
          </div>
          <div className="diconbox6"></div>
        </div>
      </div>
    </>
  );
};

export default Box6container;
