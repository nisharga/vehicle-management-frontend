"use client";
import { Button, Modal } from "antd";
import React, { useState } from "react";

interface IProps {
  btnLabel?: React.ReactNode | string;
  children?: React.ReactNode;
  title?: React.ReactNode;
}

const ModalBox: React.FC<IProps> = ({ btnLabel, children, title }) => {
  const [open, setOpen] = useState(false);
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        {btnLabel}
      </Button>
      <Modal
        centered
        open={open}
        onCancel={() => setOpen(false)}
        title={title || ""}
        bodyStyle={{ height: 400 }}
        // style={{ minHeight: "80%" }}
        width={500}
        footer={null}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalBox;
