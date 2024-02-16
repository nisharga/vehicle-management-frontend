"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";

interface IProps {
  btnLabel?: React.ReactNode | string;
  children?: React.ReactNode;
  title?: React.ReactNode;
  modalWidth?: number;
}

const ModalBox: React.FC<IProps> = ({ btnLabel, children, title, modalWidth }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button
        onClick={() => setOpen(true)}
        style={{
          backgroundColor: "#00334E",
          color: "#eee",
        }}
      >
        {btnLabel}
      </Button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        title={title || ""}
        //bodyStyle={{ height: "100%" }}
        width={modalWidth || 400}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalBox;
