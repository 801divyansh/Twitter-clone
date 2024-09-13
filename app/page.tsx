import Image from "next/image";
import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { RiHome7Line } from "react-icons/ri";
import { FaHashtag } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { FaRegEnvelope } from "react-icons/fa6";
import { FaRegBookmark } from "react-icons/fa6";
import { IoPersonOutline } from "react-icons/io5";
import { CiCircleMore } from "react-icons/ci";
import FeedCard from "./components/FeedCard";
import { HiOutlineUsers } from "react-icons/hi";
import { AiOutlineThunderbolt } from "react-icons/ai";
import { LuSquareSlash } from "react-icons/lu";

interface TwitterSlideBar {
  title: String;
  icon: React.ReactNode;
}

const sideBarMenuItems: TwitterSlideBar[] = [
  {
    title: "Home",
    icon: <RiHome7Line />,
  },{
    title: "Explore",
    icon: <FaHashtag />
  },{
    title: "Notifications",
    icon: <IoNotifications />
  },{
    title: "Messages",
    icon: <FaRegEnvelope />
  },{
    title: "Grok",
    icon: <LuSquareSlash />
  },{
    title: "Bookmarks",
    icon: <FaRegBookmark />
  },{
    title: "Communities",
    icon: <HiOutlineUsers />
  },{
    title: "Premium",
    icon: <FaXTwitter />
  },{
    title: "Verified Orgs",
    icon: <AiOutlineThunderbolt />
  },{
    title: "Profile",
    icon: <IoPersonOutline />
  },{
    title: "More",
    icon: <CiCircleMore />
  }
]

export default function Home() {
  return (
    <div>
        <div className="grid grid-cols-12 h-screen w-screen px-56">
          <div className=" col-span-3 pt-2 ml-28">
            <div className="text-3xl h-fit w-fit hover:bg-gray-600 rounded-full p-2 cursor-pointer transition-all ml-2">
              <FaXTwitter />
            </div>
            <div className="mt-2 text-2xl font-sime-bold pr-5">
              <ul>
                {sideBarMenuItems.map((item) => (
                   <li className="flex justify-start items-center gap-4 hover:bg-gray-800 rounded-full px-4 py-3 cursor-pointer transition-all w-fit mt-2" key={item.title}>
                    <span className="text-2xl">{item.icon}</span>
                    <span>{item.title}</span>
                  </li>
                  ))}
              </ul>
              <div className="mt-5 py-3 w-full">
                <button className="text-center bg-[#1d9bf0] rounded-full text-lg px-4 py-3 w-full">Post</button>
              </div>
            </div>
          </div>
          <div className="col-span-5 border-r-[1px] border-l-[1px] border border-gray-600">
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
            <FeedCard />
          </div>
          <div className="col-span-3"></div>

        </div>
    </div>
  );
}
