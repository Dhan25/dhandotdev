import React from "react";
// import { FiGithub } from "react-icons/fi";
// import { viewLiveLinks, githubLinks } from "../constant/data";

const Buttons = () => {
  return (
    <div className="flex md:flex-row md:gap-6 items-center mt-12">
      {/* <div>
        {viewLiveLinks.map((item, index) => (
          <a href={item.liveLink} key={index} className="live-btn">
            View Live{" "}
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="w-5 h-5 ml-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25"
                />
              </svg>
            </span>
          </a>
        ))}
      </div>
      <div>
        {githubLinks.map((item) => (
          <a href={item.gitLink} className="github-btn">
            Github{" "}
            <span>
              <FiGithub className="ml-3 w-5 h-5" />
            </span>
          </a>
        ))}
      </div> */}
    </div>
  );
};

export default Buttons;
