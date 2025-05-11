"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const Footer: React.FC = () => {
  return (
    <>
      <footer
        className="wow fadeInUp dark:bg-gray-dark relative z-10 bg-white pt-16 md:pt-20 lg:pt-24"
        data-wow-delay=".1s"
      >
        <div className="container">
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-5/12">
              <div className="mb-12 max-w-[360px] lg:mb-16">
                <Link href="/" className="mb-8 inline-block">
                  <Image
                    src="/images/logo/logo.jpeg"
                    alt="logo"
                    className="w-full dark:hidden"
                    width={140}
                    height={30}
                  />
                  <Image
                    src="/images/logo/logo.jpeg"
                    alt="logo"
                    className="hidden w-full dark:block"
                    width={140}
                    height={30}
                  />
                </Link>
                <p className="dark:text-body-color-dark mb-9 text-base leading-relaxed text-body-color">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Integer lobortis.
                </p>
                <div className="flex items-center">
                  {/* Social Icons (SVGs) */}
                  {/* Facebook */}
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="9"
                      height="18"
                      viewBox="0 0 9 18"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..." />
                    </svg>
                  </a>
                  {/* Twitter */}
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="19"
                      height="14"
                      viewBox="0 0 19 14"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..." />
                    </svg>
                  </a>
                  {/* YouTube */}
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark mr-6 text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="18"
                      height="14"
                      viewBox="0 0 18 14"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..." />
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a
                    href="/"
                    aria-label="social-link"
                    className="dark:text-body-color-dark text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                  >
                    <svg
                      width="17"
                      height="16"
                      viewBox="0 0 17 16"
                      className="fill-current"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="..." />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Useful Links */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Useful Links
                </h2>
                <ul>
                  <li>
                    <a
                      href="/blogs"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Blog
                    </a>
                  </li>
                  <li>
                    <a
                      href="/pricing"
                      className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary"
                    >
                      Pricing
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Forums */}
            <div className="w-full px-4 sm:w-1/2 md:w-1/2 lg:w-2/12 xl:w-2/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Forums
                </h2>
                <ul>
                  <li>
                    <a href="/" className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary">
                      Collob
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary">
                      Design
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary">
                      WebCo
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            {/* Support & Help */}
            <div className="w-full px-4 md:w-1/2 lg:w-4/12 xl:w-3/12">
              <div className="mb-12 lg:mb-16">
                <h2 className="mb-10 text-xl font-bold text-black dark:text-white">
                  Support & Help
                </h2>
                <ul>
                  <li>
                    <a href="/contact" className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary">
                      Open a Ticket
                    </a>
                  </li>
                  <li>
                    <a href="/" className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary">
                      Terms of Use
                    </a>
                  </li>
                  <li>
                    <a href="/about" className="dark:text-body-color-dark mb-4 inline-block text-base text-body-color duration-300 hover:text-primary dark:hover:text-primary">
                      About
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px w-full bg-gradient-to-r from-transparent via-[#D2D8E183] to-transparent dark:via-[#959CB183]"></div>

          <div className="py-8">
            <p className="text-center text-base text-body-color dark:text-white">
                FLORIAN INC{" "}
              <a href="https://nextjstemplates.com" rel="nofollow noopener">
                {" "}@ 2025{" "} All Rights Reserved.
              </a>
            </p>
          </div>
        </div>

        {/* Decorative SVG - Top Right */}
        <div className="absolute right-0 top-14 z-[-1]">
          <svg
            width="55"
            height="99"
            viewBox="0 0 55 99"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#959CB1" />
            <mask
              id="mask0"
              style={{ maskType: "alpha" } as React.CSSProperties}
              maskUnits="userSpaceOnUse"
              x={0}
              y={0}
              width={99}
              height={99}
            >
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#234233" />
            </mask>
            <g mask="url(#mask0)">
              <circle opacity="0.8" cx="49.5" cy="49.5" r="49.5" fill="#2c4c3c" />
              <g opacity="0.8" filter="url(#filter0_f)">
                <circle cx="53.8676" cy="26.2061" r="20.3824" fill="white" />
              </g>
            </g>
            <defs>
              <filter
                id="filter0_f"
                x="12.4852"
                y="-15.1763"
                width="82.7646"
                height="82.7646"
                filterUnits="userSpaceOnUse"
                colorInterpolationFilters="sRGB"
              >
                <feFlood floodOpacity="0" result="BackgroundImageFix" />
                <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
                <feGaussianBlur stdDeviation="10.5" result="effect1_foregroundBlur" />
              </filter>
            </defs>
          </svg>
        </div>

        {/* Decorative SVG - Bottom Left */}
        <div className="absolute bottom-24 left-0 z-[-1]">
          <svg
            width="79"
            height="94"
            viewBox="0 0 79 94"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* SVG content skipped for brevity */}
          </svg>
        </div>
      </footer>
    </>
  );
};

export default Footer;
