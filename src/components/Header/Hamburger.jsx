import React, { useState } from 'react';
import { Button, Drawer, Menu } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import '../../styles/Header.css'

const HamburgerMenu = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer} icon={<MenuOutlined />} className='font'>
        Open Menu
      </Button>
      <Drawer
        title='Menu'
        placement="left"
        onClose={onClose}
        visible={visible}
         style={{
            backgroundColor: '#001529',
            color:"white",
            fontFamily:"Poppins",
         }}
      >
        <Menu
          mode="inline"
          theme="dark"
          className='font'
        >
          {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
            <Menu.Item key={item} className={`menu-item item-${index}`}>
              {item}
            </Menu.Item>
          ))}
        </Menu>
      </Drawer>
    </>
  );
};

export default HamburgerMenu;
