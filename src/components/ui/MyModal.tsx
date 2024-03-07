import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Modal } from 'antd';

type ModalProps = { children: ReactNode; isModalOpen: boolean; setIsModalOpen: Dispatch<SetStateAction<boolean>>; }

const MyModal = ({ children, isModalOpen, setIsModalOpen }: ModalProps) => {
  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Modal open={isModalOpen} onOk={handleOk} onCancel={handleCancel} footer={null} width={"512px"}>
        {children}
      </Modal>
    </>
  );
};

export default MyModal;