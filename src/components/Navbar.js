import React, { useState } from "react";
import logo from "../assets/logo.svg";
import Notification from "./Notification";
import Alert from "../assets/alert.svg";
import Rectangle from "../assets/rectangle.svg";
import { useSelector } from "react-redux";
import { selectUser } from "../user/userSlice";
import UserExcerpt from "./features/UserExcerpt";

const navigation = [
  {
    name: "notification",
    href: "#",
    icon: Alert,
  },
  {
    name: "rectangle",
    href: "#",
    icon: Rectangle,
  },
];

const Navbar = () => {
  const user = useSelector(selectUser);
  const [isHidden, setIsHidden] = useState(false);
  const handlerClick = () => {
    setIsHidden(isHidden ? false : true);
  };
  return (
    <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded mt-5 w-75  light:bg-gray-900">
      <div className="container flex flex-wrap items-center justify-between mx-auto">
        <a href="/" className="flex items-center">
          <img src={logo} className="h-6 mr-3 sm:h-9" alt="Blog Logo" />
          <span className="self-center text-xl font-semibold whitespace-nowrap ">
            Arbit Blog
          </span>
        </a>
        <button
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
          aria-controls="navbar-default"
          aria-expanded="false"
        >
          <span className="sr-only"></span>
          <svg
            className="w-6 h-6"
            aria-hidden="true"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </button>
        <div className="hidden w-full md:block md:w-auto" id="navbar-default">
          <div className="flex flex-col p-4 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium md:border-0 md:bg-white">
            <Notification />
            {navigation.map((link, idx) => (
              <img
                key={idx}
                src={link.icon}
                title={link.name}
                alt={link.name}
                className=" cursor-pointer"
                width={"25px"}
              />
            ))}
            <button onClick={handlerClick}>
              {user.map((item) => (
                <div key={item.id}>
                  {!isHidden && (
                    <img
                      src={item.img_url}
                      alt=""
                      width={"35px"}
                      className={"rounded-full"}
                    />
                  )}
                  {isHidden && <UserExcerpt data={user} />}
                </div>
              ))}
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
