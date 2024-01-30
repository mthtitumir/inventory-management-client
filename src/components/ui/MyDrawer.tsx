import { Dispatch, ReactNode, SetStateAction } from 'react';
import { Drawer } from 'antd';

type DrawerProps = { children1: ReactNode; children2: ReactNode; isDrawerOpen: boolean; setIsDrawerOpen: Dispatch<SetStateAction<boolean>>; }

const MyDrawer = ({ children1, children2, isDrawerOpen, setIsDrawerOpen }: DrawerProps) => {
  const handleClose = () => {
    setIsDrawerOpen(false);
  };

  return (
    <>
      <Drawer title={children1} open={isDrawerOpen} onClose={handleClose} placement='left' size='default'>
        {children2}
      </Drawer>
    </>
  );
};

export default MyDrawer;