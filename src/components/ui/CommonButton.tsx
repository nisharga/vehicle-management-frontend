"use client";
import { PlusOutlined } from "@ant-design/icons";
import type { ConfigProviderProps } from "antd";
import { Button } from "antd";
const CommonButton = ({ content }: { content: React.ReactNode }) => {
  type SizeType = ConfigProviderProps["componentSize"];

  return (
    <div>
      <Button
        style={{
          backgroundColor: "#00334E",
          color: "#eee",
        }}
        icon={<PlusOutlined />}
      >
        {content}
      </Button>
    </div>
  );
};

export default CommonButton;
