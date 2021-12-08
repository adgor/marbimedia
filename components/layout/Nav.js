import React, { useState } from "react";
import Link from "next/link";
import Links from "./Links";
import Services from "./Services";

export const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <div className=" bg-brand-gunmetal">
      <div className="px-4 py-5 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <div className="relative flex items-center justify-between">
          <Link href="/">
            <a
              aria-label="Company"
              title="Company"
              className="inline-flex items-center"
            >
              <svg
                width="77"
                height="40"
                viewBox="0 0 77 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M36.4297 4.94969C35.321 2.12822 32.2556 0 29.3004 0H19.1911C15.7098 0 13.8006 2.9173 15.1066 6.24103L26.4272 35.0503C27.5359 37.8718 30.6013 40 33.5565 40H43.6658C47.1471 40 49.0564 37.0827 47.7503 33.759L36.4297 4.94969Z"
                  fill="#F2CB05"
                />
                <path
                  d="M11.8977 4.94969C13.0219 2.12822 16.1302 0 19.1268 0H28.5238C32.6234 0 35.8734 2.01596 37.109 5.32544L38.3673 8.69565C38.0509 6.28702 34.2207 6.69084 33.1345 9.24736L21.8051 35.9118C20.8088 38.2566 18.2106 40 15.7123 40H4.56032C1.03028 40 -0.905707 37.0827 0.418634 33.759L11.8977 4.94969Z"
                  fill="#5524BF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M37.5505 7.54868C36.3585 6.55745 33.8043 7.23448 32.9513 9.25471L24.4353 29.4251L15.4208 6.246C14.1272 2.91962 16.0183 0 19.4665 0H28.3661C30.4056 0 32.2336 0.50486 33.7051 1.42408C34.9634 2.3091 35.9935 3.54504 36.5413 4.95363L37.5505 7.54868Z"
                  fill="#F26052"
                />
                <path
                  d="M40.3196 4.94969C41.4283 2.12822 44.4937 0 47.4489 0H57.5582C61.0395 0 62.9487 2.9173 61.6427 6.24103L50.3221 35.0503C49.2134 37.8718 46.148 40 43.1928 40H33.0835C29.6022 40 27.693 37.0827 28.999 33.759L40.3196 4.94969Z"
                  fill="#F2CB05"
                />
                <path
                  d="M64.8517 4.94969C63.7275 2.12822 60.6192 0 57.6226 0H48.2256C44.1259 0 40.876 2.01596 39.6404 5.32544L38.382 8.69565C38.6985 6.28702 42.5287 6.69084 43.6149 9.24736L54.9443 35.9118C55.9406 38.2566 58.5388 40 61.0371 40H72.1891C75.7191 40 77.6551 37.0827 76.3308 33.759L64.8517 4.94969Z"
                  fill="#5524BF"
                />
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M39.1988 7.54874C40.3907 6.55742 42.9451 7.23443 43.798 9.25471L52.314 29.425L61.3285 6.24599C62.6221 2.91962 60.731 0 57.2828 0H48.3832C46.3436 0 44.5154 0.504965 43.0438 1.42436C41.7857 2.30937 40.7558 3.54519 40.208 4.95362L39.1988 7.54874Z"
                  fill="#F26052"
                />
              </svg>

              <span className="ml-4 text-xl tracking-wide text-gray-100 uppercase">
                <b>Marbi</b>Media
              </span>
            </a>
          </Link>

          <ul className="flex items-center hidden space-x-3 lg:flex">
            <li className="relative px-3 py-2 text-sm font-medium leading-6 tracking-wide text-gray-300 uppercase transition duration-200 rounded-md cursor-pointer group dropdown hover:text-white">
              <a className="flex items-center">
                services
                <span>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="w-4 h-4 ml-2 group-hover:transform group-hover:rotate-180"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                      clipRule="evenodd"
                    />
                  </svg>
                </span>
              </a>

              <div className="absolute z-50 hidden h-auto py-5 w-52 group-hover:block dropdown-menu">
                <ul className="top-0 px-6 py-6 bg-gray-700 rounded shadow">
                  {Services.map((link, i) => (
                    <li key={i} className="py-1">
                      <Link href={link.url}>
                        <a className="text-sm leading-6 tracking-wide text-gray-300 cursor-pointer hover:text-white">
                          {link.name}
                        </a>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </li>
            {Links.map((link, i) => (
              <li key={i} className="py-1">
                <Link href={link.url}>
                  <a className="relative block px-3 py-2 text-sm font-medium leading-6 tracking-wide text-gray-300 uppercase transition-colors duration-200 rounded-md cursor-pointer hover:text-white ">
                    {link.name}
                  </a>
                </Link>
              </li>
            ))}
          </ul>

          {/* mobile menu */}
          <div className="lg:hidden">
            <button
              aria-label="Open Menu"
              title="Open Menu"
              className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline"
              onClick={() => setIsMenuOpen(true)}
            >
              <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                <path
                  fill="currentColor"
                  d="M23,13H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,13,23,13z"
                />
                <path
                  fill="currentColor"
                  d="M23,6H1C0.4,6,0,5.6,0,5s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,6,23,6z"
                />
                <path
                  fill="currentColor"
                  d="M23,20H1c-0.6,0-1-0.4-1-1s0.4-1,1-1h22c0.6,0,1,0.4,1,1S23.6,20,23,20z"
                />
              </svg>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <div>
                      <a
                        href="/"
                        aria-label="Company"
                        title="Company"
                        className="inline-flex items-center"
                      >
                        <svg
                          className="w-8 text-deep-purple-accent-400"
                          viewBox="0 0 24 24"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeMiterlimit="10"
                          stroke="currentColor"
                          fill="none"
                        >
                          <rect x="3" y="1" width="7" height="12" />
                          <rect x="3" y="17" width="7" height="6" />
                          <rect x="14" y="1" width="7" height="6" />
                          <rect x="14" y="11" width="7" height="12" />
                        </svg>
                        <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                          Company
                        </span>
                      </a>
                    </div>
                    <div>
                      <button
                        aria-label="Close Menu"
                        title="Close Menu"
                        className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                        onClick={() => setIsMenuOpen(false)}
                      >
                        <svg className="w-5 text-gray-600" viewBox="0 0 24 24">
                          <path
                            fill="currentColor"
                            d="M19.7,4.3c-0.4-0.4-1-0.4-1.4,0L12,10.6L5.7,4.3c-0.4-0.4-1-0.4-1.4,0s-0.4,1,0,1.4l6.3,6.3l-6.3,6.3 c-0.4,0.4-0.4,1,0,1.4C4.5,19.9,4.7,20,5,20s0.5-0.1,0.7-0.3l6.3-6.3l6.3,6.3c0.2,0.2,0.5,0.3,0.7,0.3s0.5-0.1,0.7-0.3 c0.4-0.4,0.4-1,0-1.4L13.4,12l6.3-6.3C20.1,5.3,20.1,4.7,19.7,4.3z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                  <nav>
                    <ul className="space-y-4">
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Product
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Our product"
                          title="Our product"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Features
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="Product pricing"
                          title="Product pricing"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          Pricing
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          aria-label="About us"
                          title="About us"
                          className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-deep-purple-accent-400"
                        >
                          About us
                        </a>
                      </li>
                      <li>
                        <a
                          href="/"
                          className="inline-flex items-center justify-center w-full h-12 px-6 font-medium tracking-wide text-white transition duration-200 rounded shadow-md bg-deep-purple-accent-400 hover:bg-deep-purple-accent-700 focus:shadow-outline focus:outline-none"
                          aria-label="Sign up"
                          title="Sign up"
                        >
                          Sign up
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
