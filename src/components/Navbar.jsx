import React, { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { CiSearch } from "react-icons/ci";
import { IoMdMic } from "react-icons/io";
import { RiVideoAddLine } from "react-icons/ri";
import { AiOutlineBell } from "react-icons/ai";
import { IoIosSearch } from "react-icons/io";
import { IoArrowBack } from "react-icons/io5";

import logo from "../../public/logo.jpg";
import profile from "../../public/dp.jpg";
import { useNavigate } from "react-router-dom";
import { useUtils } from "../context/UtilsContext";

const Navbar = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const { isSidebar, setIsSidebar, mobileShow, setMobileShow } = useUtils();
  const [searchbar, setSearchbar] = useState(false);

  useEffect(() => {
    console.log({ isSidebar, mobileShow });
  }, [isSidebar]);

  const navigate = useNavigate();

  const searchQueryHandler = (event) => {
    if (
      (event?.key === "Enter" || event === "searchButton") &&
      searchQuery?.length > 0
    ) {
      navigate(`/search/${searchQuery}`);
      setSearchQuery("");
    }
  };

  const handleSidebar = () => {
    if (window.innerWidth <= 1280) {
      setIsSidebar(!isSidebar);
      setMobileShow(!mobileShow);
    }
    setIsSidebar(!isSidebar);
  };

  if (searchbar) {
    return (
      <div className="flex items-center justify-between fixed top-0 w-[100%] bg-white px-6 py-2 ">
        <IoArrowBack size={20} onClick={()=>setSearchbar(!searchbar)}/>
        <div className="flex items-center flex-grow mx-4">
          <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
            <input
              type="text"
              placeholder="Search"
              className="outline-none"
              onChange={(e) => setSearchQuery(e.target.value)}
              onKeyUp={searchQueryHandler}
              value={searchQuery}
            />
          </div>
          <button
            className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
            onClick={() => searchQueryHandler("searchButton")}
          >
            <CiSearch size={"24px"} />
          </button>
        </div>

        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>
    );
  }

  return (
    <div className="flex justify-between fixed top-0 w-[100%] bg-white px-6 py-2">
      <div className="flex items-center space-x-4">
        <AiOutlineMenu
          className="text-xl cursor-pointer"
          onClick={handleSidebar}
        />
        <img src={logo} alt="logo" className="w-28 cursor-pointer" />
      </div>

      <div className="  hidden md:flex  items-center w-[35%] ">
        <div className="w-[100%] px-4 py-2 border border-gray-400 rounded-l-full">
          <input
            type="text"
            placeholder="Search"
            className="outline-none"
            onChange={(e) => setSearchQuery(e.target.value)}
            onKeyUp={searchQueryHandler}
            value={searchQuery}
          />
        </div>
        <button
          className="px-4 py-2 border border-gray-400 bg-gray-100 rounded-r-full"
          onClick={() => searchQueryHandler("searchButton")}
        >
          <CiSearch size={"24px"} />
        </button>
        <IoMdMic
          size={"42px"}
          className="ml-3 border border-gray-400 rounded-full p-2 cursor-pointer hover:bg-gray-200 duration-200"
        />
      </div>

      <div className="flex space-x-5 items-center ">
        <IoIosSearch className="text-2xl md:hidden" onClick={()=>setSearchbar(!searchbar)} />

        <RiVideoAddLine className="text-2xl" />
        <AiOutlineBell className="text-2xl" />
        <img src={profile} alt="" className="w-8 rounded-full " />
      </div>
    </div>
  );
};

export default Navbar;
