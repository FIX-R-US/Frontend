import { FaUserAlt } from "react-icons/fa";
import { AiFillHome } from "react-icons/ai";
import { SiCodereview } from "react-icons/si";
import { GiWorld } from "react-icons/gi";
import { RxDashboard } from "react-icons/rx";
import { MdManageAccounts } from "react-icons/md";
import { MdEngineering } from "react-icons/md";
import { MdPayments } from "react-icons/md";
import { MdVerified } from "react-icons/md";

export const data = [
  {
    path: "home",
    icon: <AiFillHome size={21} />,
    name: "Home",
  },
  {
    path: "editProfile",
    icon: <FaUserAlt size={20} />,
    name: "Profile",
  },
  {
    path: "review",
    icon: <SiCodereview size={20} />,
    name: "Reviews",
  },
  {
    path: "maps",
    icon: <GiWorld size={20} />,
    name: "Maps",
  },
];

export const artisanData = [
  {
    path: "home",
    icon: <AiFillHome size={21} />,
    name: "Home",
  },
  {
    path: "editProfile",
    icon: <FaUserAlt size={20} />,
    name: "Profile",
  },
  {
    path: "maps",
    icon: <GiWorld size={20} />,
    name: "Maps",
  },
  {
    path: "payments",
    icon: <MdPayments size={20} />,
    name: "Payments",
  },
];

export const adminData = [
  {
    path: "home",
    icon: <RxDashboard size={21} />,
    name: "Dashboard",
  },
  {
    path: "manageUsers",
    icon: <MdManageAccounts size={21} />,
    name: "Manage Users",
  },
  {
    path: "manageArtisans",
    icon: <MdEngineering size={21} />,
    name: "Manage Artisans",
  },
  {
    path: "verifyRegistration",
    icon: <MdVerified size={21} />,
    name: "Verify Registration",
  },
];
