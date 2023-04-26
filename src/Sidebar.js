import React from "react";
import SidebarIcon from "./SidebarIcon";
import { BsCloudLightningRainFill, BsFillChatFill } from "react-icons/bs";
import { FaDiscord } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import { MdNotificationAdd } from "react-icons/md";
import { RxCardStackPlus } from "react-icons/rx";
import { GiEmeraldNecklace, GiDwarfFace } from "react-icons/gi";

const Sidebar = () => {
  return (
    <div className="flex flex-col m-0 h-screen w-16 fixed top-0 left-0 bg-gray-900 text-white">
      <SidebarIcon icon={<FaDiscord size="28" />} />
      <SidebarIcon icon={<BsCloudLightningRainFill size="28" />} />
      <SidebarIcon icon={<AiFillThunderbolt size="28" />} />
      <SidebarIcon icon={<BsFillChatFill size="28" />} />
      <SidebarIcon icon={<MdNotificationAdd size="28" />} />
      <SidebarIcon icon={<RxCardStackPlus size="28" />} />
      <SidebarIcon icon={<GiEmeraldNecklace size="28" />} />
      <SidebarIcon icon={<GiDwarfFace size="28" />} />
    </div>
  );
};

export default Sidebar;
