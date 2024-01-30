'use client'
import { Icon } from "@iconify/react";
import React from "react";

const Contain2 = () => {
  const serviceData = [
    {
      id: 1,
      title: "pingpong",
      description: "Preparation and safe",
    },
    {
      id: 2,
      title: "pingpong",
      description: "Preparation and s",
    },
    {
      id: 3,
      title: "pingpong",
      description: "Preparation and safety of the s",
    },
    {
      id: 4,
      title: "pingpong",
      description: "Preparation and safety oy",
    },
    {
      id: 5,
      title: "pingpong",
      description: "Preparation and scan easily",
    },
    {
      id: 6,
      title: "pingpong",
      description: "Preparation and we can easily",
    },
    {
      id: 7,
      title: "pingpong",
      description: "Preparation andwe can easily",
    },
    {
      id: 8,
      title: "pingpong",
      description: "Preparation and safety can easily",
    },
  ];


  return (
    <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 py-5 gap-4">

{serviceData?.map((service) => (
        <div
          key={service.id}
          className="flex items-center h-24 overflow-hidden space-x-3 shadow-md hover:shadow-xl p-3 cursor-pointer duration-500 border"
        >
          <div>
            <Icon
              icon="ic:baseline-plus"
              width="30px"
              className="bg-brand rounded text-white"
            />
          </div>
          <div>
            <p>
              <span className="font-bold uppercase">{service.title} -</span>{" "}
              {service.description}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Contain2;
