"use client";
import { useEffect, useRef, useState } from "react";
import CountUp from "react-countup";
const AdminOverviewCard = () => {
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
    <div className="bg-white dark:bg-[#00334E] p-2 rounded-lg">
      <section className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 w-full">
        <div className="p-3 border-r bg-white dark:bg-[#00334E] flex justify-between">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 text-white my-auto mx-auto bg-green-400 rounded-full p-1.5"
          >
            <path
              fillRule="evenodd"
              d="M3 2.25a.75.75 0 0 1 .75.75v.54l1.838-.46a9.75 9.75 0 0 1 6.725.738l.108.054A8.25 8.25 0 0 0 18 4.524l3.11-.732a.75.75 0 0 1 .917.81 47.784 47.784 0 0 0 .005 10.337.75.75 0 0 1-.574.812l-3.114.733a9.75 9.75 0 0 1-6.594-.77l-.108-.054a8.25 8.25 0 0 0-5.69-.625l-2.202.55V21a.75.75 0 0 1-1.5 0V3A.75.75 0 0 1 3 2.25Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="my-auto mx-auto bg-[#5588A3] text-[#EFEFEF] rounded-3xl px-2 py-1">
            <p>Total Sale</p>
          </div>
          <p
            className="my-auto mx-auto font-bold text-lg text-[#002140] dark:text-[#E8E8E8] rounded-3xl px-2 py-1"
            ref={countRef}
          >
            {isVisible && (
              <CountUp start={50000} end={1000000} suffix=" Tk" duration={10} />
            )}
          </p>
        </div>
        <div className="p-1 border-r bg-white dark:bg-[#00334E] flex justify-between ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 text-white my-auto mx-auto bg-indigo-400 rounded-full p-1.5"
          >
            <path d="M3.375 4.5C2.339 4.5 1.5 5.34 1.5 6.375V13.5h12V6.375c0-1.036-.84-1.875-1.875-1.875h-8.25ZM13.5 15h-12v2.625c0 1.035.84 1.875 1.875 1.875h.375a3 3 0 1 1 6 0h3a.75.75 0 0 0 .75-.75V15Z" />
            <path d="M8.25 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0ZM15.75 6.75a.75.75 0 0 0-.75.75v11.25c0 .087.015.17.042.248a3 3 0 0 1 5.958.464c.853-.175 1.522-.935 1.464-1.883a18.659 18.659 0 0 0-3.732-10.104 1.837 1.837 0 0 0-1.47-.725H15.75Z" />
            <path d="M19.5 19.5a1.5 1.5 0 1 0-3 0 1.5 1.5 0 0 0 3 0Z" />
          </svg>

          <div className="my-auto mx-auto bg-[#5588A3] text-[#EFEFEF] rounded-3xl px-2 py-1">
            <p>Total Cost</p>
          </div>
          <p
            className="my-auto mx-auto font-bold text-lg text-[#002140] dark:text-[#E8E8E8] rounded-3xl px-2 py-1"
            ref={countRef}
          >
            {isVisible && (
              <CountUp start={1000} end={300000} suffix=" Tk" duration={10} />
            )}
          </p>
        </div>
        <div className="p-1 border-r bg-white dark:bg-[#00334E] flex justify-between ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 text-white my-auto mx-auto bg-blue-400 rounded-full p-1.5"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="my-auto mx-auto">
            <p className="my-auto mx-auto bg-[#5588A3] text-[#EFEFEF] rounded-3xl px-2 py-1">
              Total Profit
            </p>
          </div>

          <p
            className="my-auto mx-auto font-bold text-lg text-[#002140] dark:text-[#E8E8E8] rounded-3xl px-2 py-1"
            ref={countRef}
          >
            {isVisible && (
              <CountUp start={1000} end={500000} suffix=" Tk" duration={10} />
            )}
          </p>
        </div>
        <div className="p-1 bg-white dark:bg-[#00334E] flex justify-between ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            fill="currentColor"
            className="w-9 h-9 text-white my-auto mx-auto bg-blue-400 rounded-full p-1.5"
          >
            <path
              fillRule="evenodd"
              d="M10.5 3.798v5.02a3 3 0 0 1-.879 2.121l-2.377 2.377a9.845 9.845 0 0 1 5.091 1.013 8.315 8.315 0 0 0 5.713.636l.285-.071-3.954-3.955a3 3 0 0 1-.879-2.121v-5.02a23.614 23.614 0 0 0-3 0Zm4.5.138a.75.75 0 0 0 .093-1.495A24.837 24.837 0 0 0 12 2.25a25.048 25.048 0 0 0-3.093.191A.75.75 0 0 0 9 3.936v4.882a1.5 1.5 0 0 1-.44 1.06l-6.293 6.294c-1.62 1.621-.903 4.475 1.471 4.88 2.686.46 5.447.698 8.262.698 2.816 0 5.576-.239 8.262-.697 2.373-.406 3.092-3.26 1.47-4.881L15.44 9.879A1.5 1.5 0 0 1 15 8.818V3.936Z"
              clipRule="evenodd"
            />
          </svg>

          <div className="my-auto mx-auto">
            <p className="my-auto mx-auto bg-[#5588A3] text-[#EFEFEF] rounded-3xl px-2 py-1">
              Total Employer
            </p>
          </div>

          <p
            className="my-auto mx-auto font-bold text-lg text-[#002140] dark:text-[#E8E8E8] rounded-3xl px-2 py-1"
            ref={countRef}
          >
            {isVisible && <CountUp start={10} end={100} duration={10} />}
          </p>
        </div>
      </section>
    </div>
  );
};

export default AdminOverviewCard;
