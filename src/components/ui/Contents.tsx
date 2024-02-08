"use client";
import { Content } from "antd/es/layout/layout";
import React from "react";
import Header from "./Header";

const Contents = ({ children }: { children: React.ReactNode }) => {
  return (
    <Content>
      <Header />
      <div
        className="bg-[#F2F2F2] p-8"
        style={{
          minHeight: "100vh",
        }}
      >
        {children}
      </div>
    </Content>
  );
};

export default Contents;
