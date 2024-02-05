"use client";

import { Image } from "antd";

const AccessoriesCard = ({ vehicleAccessory }: any) => {
  const { title, stock, image } = vehicleAccessory;
  return (
    <>
      <div className="bg-white shadow-xl border border-gray-500 rounded-lg flex gap-2 max-h-32 max-w-72 p-1">
        <Image className="rounded-lg" width={70} src={image} />

        <div className="text-textColor text-[10]">
          <p>{title}</p>
          {/*  */}
          <span
            className={`${
              stock === 0
                ? "bg-red-400"
                : `${stock !== 0 && stock <= 5 ? "bg-yellow-400" : ""}`
            } px-2 rounded-lg `}
          >
            Stock: {stock}
          </span>
        </div>
      </div>
    </>
  );
};

export default AccessoriesCard;
