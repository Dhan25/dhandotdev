import React from "react";

const Contact = () => {
  return (
    <div id="contact" className="w-full h-fit md:pb-16 xl:pb-24 px-4 pt-8 bg-white xl:px-64 xl:pt-20 dark:bg-slate-900">
      <div className="grid grid-cols-1 md:grid-rows-2 md:px-6 md:pt-12">
        <div className="text-center md:text-left" data-aos='fade-down' data-aos-delay='400'>
          <h1 className="text-[1.2rem] md:text-[18px] xl:text-lg text-secondary font-bold">
            CONTACT
          </h1>
          <p className="mt-5 md:mt-3 font-bold md:text-[1.6rem] text-2xl text-primary dark:text-white">
            Don't be shy! Hit me up! 👇
          </p>
        </div>

        {/* Location and Mail */}
        <div className="md:flex md:gap-32 md:mt-10 pb-12 mt-12">
          <div className="flex flex-col md:flex-row items-center mb-16 md:mb-0" data-aos='fade-up' data-aos-delay='500'>
            <span className="p-4 shadow-2xl rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 text-secondary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                />
              </svg>
            </span>
            <div className="md:ml-3 text-center md:text-left mt-3">
              <h2 className="font-bold text-primary dark:text-white">Location</h2>
              <p className="text-[#555] xl:text-[15px] xl:mt-1 hover:text-secondary duration-200 cursor-pointer dark:text-white">Cabuyao, Laguna</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row items-center" data-aos='fade-up' data-aos-delay='500'>
            <span className="p-4 shadow-2xl rounded-full">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-7 h-7 text-secondary"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
                />
              </svg>
            </span>
            <div className="md:ml-3 text-center md:text-left mt-3">
              <h2 className="font-bold text-primary dark:text-white">Mail</h2>
              <a href="" className="text-[#555] xl:text-[15px] xl:mt-1 hover:text-secondary duration-200 dark:text-white">orejasantonydhan50@gmail.com</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
