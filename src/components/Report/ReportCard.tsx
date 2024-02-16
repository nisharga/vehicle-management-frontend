"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

import CountUp from "react-countup";
import cost from "../../assets/cardImage/pic10.jpg";
import profit from "../../assets/cardImage/pic11.jpg";
import loss from "../../assets/cardImage/pic12.jpg";

const ReportCard = () => {
  const countRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      { threshold: 0.5 }
    );

    const target = countRef.current;

    if (target) {
      observer.observe(target);
    }

    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return (
    <>
      <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
        <div className="bg-white dark:bg-[#00334E] shadow-xl rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-16 p-4 flex justify-end items-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/w6wKgJw/pic2.jpg)",
            }}
          >
            <p className="uppercase tracking-widest text-sm text-white bg-green-400 py-1 px-2 rounded shadow-lg">
              Total Profit
            </p>
          </div>
          <div className="p-4  dark:text-[#EFEFEF] flex justify-between">
            <div>
              <Image
                className="rounded-full"
                src={profit}
                width={80}
                height={80}
                alt="Picture of the author"
              />
            </div>
            <div className="flex items-center">
              <span className="font-bold text-2xl" ref={countRef}>
                {isVisible && (
                  <CountUp
                    start={1000}
                    end={100000}
                    suffix="TK"
                    duration={10}
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#00334E] shadow-xl rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-16 p-4 flex justify-end items-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/ZgmBrD4/pic1.jpg)",
            }}
          >
            <p className="uppercase tracking-widest text-sm text-white bg-yellow-400 py-1 px-2 rounded   shadow-lg">
              Total Cost
            </p>
          </div>
          <div className="p-4  dark:text-[#EFEFEF] flex justify-between">
            <Image
              className="rounded-full"
              src={cost}
              width={80}
              height={80}
              alt="Picture of the author"
            />
            <div className="flex items-center">
              <span className="font-bold text-2xl" ref={countRef}>
                {isVisible && (
                  <CountUp
                    start={10000}
                    end={99000}
                    suffix="TK"
                    duration={10}
                  />
                )}
              </span>
            </div>
          </div>
        </div>

        <div className="bg-white dark:bg-[#00334E] shadow-xl rounded-lg overflow-hidden">
          <div
            className="bg-cover bg-center h-16 p-4 flex justify-end items-center"
            style={{
              backgroundImage: "url(https://i.ibb.co/Xy86Srx/100.jpg)",
            }}
          >
            <p className="uppercase tracking-widest text-sm text-white bg-red-400 py-1 px-2 rounded   shadow-lg">
              Total Loss
            </p>
          </div>
          <div className="p-4  dark:text-[#EFEFEF] flex justify-between">
            <Image
              className="rounded-full"
              src={loss}
              width={80}
              height={80}
              alt="Picture of the author"
            />
            <div className="flex items-center">
              <span className="font-bold text-2xl" ref={countRef}>
                {isVisible && (
                  <CountUp start={100} end={20000} suffix="Tk" duration={10} />
                )}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportCard;
