const Box6container = () => {
  return (
    <>
      <div className=" w-full h-auto sm:h-screen flex items-center justify-start sm:justify-center text-white bg-black pt-24 pl-2  sm:pl-11 overflow-hidden">
        <div className="w-10/12 md:w-10/12 h-full flex flex-col md:mt-24 mt-14 ml-5 sm:ml-11 md:ml-24 md:justify-center items-center lg:items-start gap-2 ">
          <div className="border-2 w-full md:w-[65%] h-11/12  flex flex-col justify-between text-white gap-3 md:gap-0 rounded-2xl items-start ">
            <div className="flex flex-col justify-between gap-3 w-full h-auto bg-gray-800 overflow-hidden rounded-t-2xl p-4">
              <div className="text-sm md:text-lg w-full md:w-9/12">
                GET IN TOUCH
              </div>
              <div className="text-sm sm:text-lg md:text-3xl font-extrabold w-full md:w-9/12">
                CONTACT
              </div>
            </div>
            <form
              className="flex  p-8 pr-1 pt-4 flex-col w-11/12 h-3/4 sm:pt-2 gap-2 sm:gap-3 md:gap-4"
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
                className="text-xs sm:text-sm md:text-xl font-bold "
              >
                Your name
              </label>
              <input
                type="text"
                name="first_name"
                placeholder="what's your good name?"
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-8 lg:h-11 outline-none bottom-0  pl-2 lg:pl-5 text-black lg:text-lg text-xs rounded-lg  hover:bg-gray-700 hover:text-white"
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
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-8 lg:h-11 outline-none bottom-0  pl-2 lg:pl-5 text-black lg:text-lg text-xs rounded-lg  hover:bg-gray-700 hover:text-white"
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
                className="font-light sm:font-bold  w-full ml-0 sm:ml-3 h-8 lg:h-11 outline-none bottom-0  pl-2 lg:pl-5 text-black lg:text-lg text-xs rounded-lg  hover:bg-gray-700 hover:text-white"
                name="message_is"
                required
              />
              <button
                className="mt-3 ml-0 lg:ml-3 w-full h-11 rounded-md bg-gray-800 hover:bg-gray-700 hover:text-white"
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
