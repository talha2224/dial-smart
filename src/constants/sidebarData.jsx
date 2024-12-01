import {FaChartBar, FaAddressBook, FaBuilding, FaCalendarAlt, FaRegCalendarCheck, FaUser } from 'react-icons/fa';
import { RxDashboard } from 'react-icons/rx';
import { IoIosCall } from "react-icons/io";
import { PiUserSound, PiUserSoundFill } from 'react-icons/pi';

export const navData = [
    {
        id: 1,
        link: "home",
        name: "Dashboard",
        icon: <RxDashboard />
    },
    {
        id: 3,
        link: "contacts",
        name: "Contacts",
        icon: <FaAddressBook />
    },
    {
        id: 4,
        link: "companies",
        name: "Companies",
        icon: <FaBuilding />
    },

    {
        id: 21,
        link: "calls",
        name: "Call Logs",
        icon: <IoIosCall />
    },
    {
        id: 2,
        link: "voices",
        name: "Voice Library",
        icon: <PiUserSoundFill />
    },
    {
        id: 7,
        link: "users",
        name: "Users",
        icon: <FaUser />
    },
    {
        id: 5,
        link: "schedule",
        name: "Schedule",
        icon: <FaRegCalendarCheck />
    },
    {
        id: 6,
        link: "calendar",
        name: "Calendar",
        icon: <FaCalendarAlt />
    }
];
