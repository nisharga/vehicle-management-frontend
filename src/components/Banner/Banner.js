"use client";

const Banner = () => {
  return (
    <>
      <div className="area mb-32 -mt-[78px]">
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <h1 className="text-4xl text-white font-bold">Hello, World!</h1>
          <p className="text-xl text-white mt-4">This is a sample text</p>
        </div>
        <ul className="circles">
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </>
  );
};

export default Banner;
