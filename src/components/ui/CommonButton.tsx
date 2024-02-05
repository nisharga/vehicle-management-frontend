"use client";
import { PlusOutlined } from "@ant-design/icons";
import type { ConfigProviderProps } from "antd";
import { Button } from "antd";
import { useState } from "react";
const CommonButton = ({ content }: { content: React.ReactNode }) => {
  type SizeType = ConfigProviderProps["componentSize"];
  const [size, setSize] = useState<SizeType>("middle"); // default is 'middle'
  return (
    <div>
      <Button
        style={{
          backgroundColor: "#00334E",
          color: "#eee",
        }}
        icon={<PlusOutlined />}
        size={size}
      >
        {content}
      </Button>
    </div>
  );
};

export default CommonButton;
