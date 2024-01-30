"use client";

import Image from "next/image";
import React from "react";
import car1 from "../../../../public/images/car1.jpg";

const Service = () => {
  return (
    <div className="container mx-auto">
      <div>
        <h1 className="text-center text-4xl text-secondary font-semibold md:py-10 py-5">
          Why take the <span className="text-brand">our services?????</span>
        </h1>
      </div>
      {/* Project details card started */}
      <div className="grid grid-cols-1 md:grid-cols-2 py-5 gap-5 mb-5 md:mb-0">
        <div className="md:space-y-10 space-y-5 border-brand p-3" data-aos='fade-right'>
          <div className="grid grid-cols-2 gap-y-12">
            <div className="grid justify-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                viewBox="0 0 24 24"
                className="text-brand"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                >
                  <path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09M12 15l-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2" />
                  <path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0m1 7v5s3.03-.55 4-2c1.08-1.62 0-5 0-5" />
                </g>
              </svg>
              <p className="font-semibold text-xl text-secondary">
                Fast booking
              </p>
              <p className="">Book your trip in just seconds</p>
            </div>
            <div className=" grid justify-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="text-brand"
                viewBox="0 0 27 24"
              >
                <path
                  fill="currentColor"
                  d="M1.547 24a.33.33 0 0 1-.327-.295v-.001L0 11.336l-.001-.031c0-.182.147-.329.329-.329h8.233v13.025zm3.36-3.265v.001a1.301 1.301 0 1 0 1.301-1.301h-.002c-.719 0-1.301.582-1.302 1.301zm.48-8c0 .181.147.328.329.328h.764a.328.328 0 0 0 0-.656h-.77a.329.329 0 0 0-.329.329v.003zm-3.61 0c0 .181.147.328.328.328H4.61a.328.328 0 0 0 0-.656H2.099a.328.328 0 0 0-.328.328v.003zm9.8 9.388a1.886 1.886 0 0 1-.494-.253l.006.004l-.1-.063a20.97 20.97 0 0 1-.69-.452l-.101-.071c-.132-.095-.194-.137-.262-.133c-.24.005-.48.007-.72.01V12.01l-.013-.77c.451-.287.867-.56.992-.664c.17-.342.338-.628.524-.902l-.017.027c.085-.133.17-.265.248-.396l1.724-2.894c.08-.136.167-.272.254-.408c.145-.216.299-.474.44-.74l.024-.049a.879.879 0 0 0 .079-.521l.001.005l-.006-3.12c.063-.454.319-.838.68-1.072l.006-.004a1.97 1.97 0 0 1 1.162-.5h.007l.063-.001c.341 0 .663.081.949.224l-.012-.006c.191.092.354.19.507.3l-.01-.007l.106.07c.241.127.421.341.501.6l.002.007c.187.696.358 1.329.517 1.964l.066.259c.101.34.188.751.244 1.172l.005.042c-.171 1.574-.5 3.01-.976 4.378l.042-.138l7.693-.011h.028a1.643 1.643 0 0 1 1.63 1.848l.001-.008a1.982 1.982 0 0 1-.894 1.781l-.008.005a2.171 2.171 0 0 1 .372 1.4v-.007a1.848 1.848 0 0 1-1.137 1.873l-.012.004a2.375 2.375 0 0 1 .299 1.31v-.006a1.905 1.905 0 0 1-.886 1.733l-.008.005a2.791 2.791 0 0 1 .224 1.459l.001-.013v.188a1.834 1.834 0 0 1-2.007 1.719l.007.001h-4.429l-.015.001l-.016-.001h.001h-5.91c-.051 0-.104 0-.16.008c-.068.004-.14.01-.214.01h-.015a1.13 1.13 0 0 1-.299-.04l.008.002zm-6.015-1.387a.64.64 0 1 1 1.281.001a.64.64 0 0 1-1.281-.001"
                />
              </svg>
              <p className="font-semibold text-xl text-secondary">Best rate</p>
              <p>Enjoy the best rates in the market</p>
            </div>

            <div className="grid justify-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="text-brand"
                viewBox="0 0 256 256"
              >
                <g
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="16"
                >
                  <path d="m 127.99999,239.96468 c 0,0 95.98506,-31.99503 95.98506,-111.98257" />
                  <path d="M 223.98505,127.98211 V 31.997059 c 0,0 -31.99502,-15.997511 -95.98506,-15.997511" />
                  <path d="m 128,239.96468 c 0,0 -95.985056,-31.99503 -95.985056,-111.98257" />
                  <path d="M 32.014944,127.98211 V 31.997059 c 0,0 31.995019,-15.997509 95.985056,-15.997509" />
                  <path d="M 191.99003,63.99208 C 128,111.9846 112.00249,175.97464 112.00249,175.97464 c 0,0 -15.997511,-19.0946 -31.995019,-31.99502" />
                </g>
              </svg>
              <p className="font-semibold text-xl text-secondary">
                Secure delivery
              </p>
              <p>Ensure safe delivery of your goods</p>
            </div>

            <div className="grid justify-items-start">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="50"
                height="50"
                className="text-brand"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12c5.16-1.26 9-6.45 9-12V5zm-2 16l-4-4l1.41-1.41L10 14.17l6.59-6.59L18 9z"
                />
              </svg>
              <p className="font-semibold text-xl text-secondary">
                Verified Driver
              </p>
              <p>There are numerous verified drivers waiting for your trip</p>
            </div>
          </div>
        </div>

        <div className="p-3" data-aos='fade-left'>
          <Image
            src={car1}
            alt="Picture of the Car"
            width={500}
            height={500}
            placeholder="blur"
            quality={100}
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default Service;
