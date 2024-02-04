"use client"
import React, { useState } from 'react';
import { Button, Modal } from 'antd';

interface IProps{
  btnLabel?: React.ReactNode | string;
  // modalTitle: string;
  children?: React.ReactNode;
}

const ModalBox: React.FC<IProps> = ({btnLabel, children }) => {
  const [open, setOpen] = useState(false); 
  return (
    <>
      <Button type="primary" onClick={() => setOpen(true)}>
        {btnLabel}
      </Button>
      <Modal
        //title={modalTitle}
        //width={1000}
         
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        {children}
      </Modal>
    </>
  );
};

export default ModalBox;