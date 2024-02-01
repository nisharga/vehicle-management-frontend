"use client";
import { Content } from "antd/es/layout/layout";
import React from "react";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content
      className="bg-gray-100 p-8"
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
