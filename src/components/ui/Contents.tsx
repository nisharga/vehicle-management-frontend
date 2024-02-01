"use client";
import { Content } from "antd/es/layout/layout";
import React from "react";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      className="bg-[#F2F2F2] p-8"
      style={{
        minHeight: "100vh",
        color: "black", // body text color
      }}
    >
      {children}
    </Content>
  );
};

export default Contents;
