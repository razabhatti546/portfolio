import { Button, Dropdown, Space } from "antd";
import React, { useState } from "react";
import "../../styles/Header.css";
import { MenuOutlined } from "@ant-design/icons";
import { BsFillMoonStarsFill } from "react-icons/bs";
export const Header = ({ darkMode, setDarkMode }) => {
  const width = window.innerWidth;
  const items = [
    {
      key: "1",
      label: (
        <a rel="noopener noreferrer" href="/">
          Home
        </a>
      ),
    },
    {
      key: "2",
      label: (
        <a rel="noopener noreferrer" href="#services">
          Services
        </a>
      ),
    },
    {
      key: "3",
      label: (
        <a rel="noopener noreferrer" href="#about">
          About Us
        </a>
      ),
    },
    {
      key: "4",
      label: (
        <a rel="noopener noreferrer" href="#contactus">
          Contact Us
        </a>
      ),
    },
  ];
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="h-[70px] dark:bg-abc w-full dark:fixed mt-[0px] z-10">
        <div className="md:pl-[50px] md: pr-[50px] sm:pl-[10px] sm:pr-[10px] flex justify-between items-center h-full">
          <div span={4} className="dark:text-white text-2xl font-poppins">
            Portfolio
          </div>
          <div className="flex justify-center items-center">
            {width < 786 ? (
              <>
                <Dropdown menu={{ items }}>
                  <Button type="primary">
                    <a onClick={(e) => e.preventDefault()}>
                      <Space>
                        Menu
                        <MenuOutlined />
                      </Space>
                    </a>
                  </Button>
                </Dropdown>
                <li
                  className="cursor-pointer text-xl"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <BsFillMoonStarsFill className="dark:text-white" />
                </li>
              </>
            ) : (
              <>
                <div className="flex jusitfy-between items-center w-full">
                  {[
                    { name: "Home", id: "#home" },
                    { name: "About Me", id: "#about" },
                    { name: "Services", id: "#Services" },
                    { name: "Contact Me", id: "#contactus" },
                  ].map((item, index) => {
                    return (
                      <a
                        className="flex-initial w-[150px] dark:text-white font-poppins"
                        rel="noopener noreferrer"
                        href={item?.id}
                      >
                        {item?.name}
                      </a>
                    );
                  })}
                </div>
                <div
                  className="cursor-pointer bg-dark  flex justify-center items-center"
                  onClick={() => setDarkMode(!darkMode)}
                >
                  <BsFillMoonStarsFill className="dark:text-white " />
                </div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
