import React, { useEffect, useState } from 'react'
import AvatarIcon from '../../assets/dashboard/avatar.jpg';
import { IoMdSync } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '../../context/SidebarContext';
import SyncPopup from './popups/SyncPopup';
import { RxEnterFullScreen } from "react-icons/rx";

const Header = ({ location }) => {

    const companyData = [
        {
            name: "TechCorp",
            companyDescription: "TechCorp specializes in cutting-edge technology solutions.",
            createdDate: "01 Jan, 2022",
            assignedUsers: ["Alice", "Bob", "Charlie"],
            totalContacts: 3,
            transcript: "Alice, Bob, Charlie",
            connectionStatus: 1
        },
        {
            name: "BizInnovate",
            companyDescription: "BizInnovate empowers businesses with innovation.",
            createdDate: "15 Feb, 2022",
            assignedUsers: ["Daniel", "Eve", "Frank", "Grace"],
            totalContacts: 4,
            transcript: "Daniel, Eve, Frank, Grace"
        },
        {
            name: "FinTech Solutions",
            companyDescription: "FinTech Solutions revolutionizes finance with technology.",
            createdDate: "10 Mar, 2022",
            assignedUsers: ["Hannah", "Ivan", "Jack"],
            totalContacts: 3,
            transcript: "Hannah, Ivan, Jack"
        },
    ];
    const { isNavOpen, toggleNav } = useSidebar();
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listId, setListId] = useState("");
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(companyData[0]);


    const enterFullScreen = () => {
        const elem = document.documentElement;
        if (elem.requestFullscreen) { elem.requestFullscreen(); }
        else if (elem.mozRequestFullScreen) { elem.mozRequestFullScreen(); }
        else if (elem.webkitRequestFullscreen) { elem.webkitRequestFullscreen(); }
        else if (elem.msRequestFullscreen) { elem.msRequestFullscreen(); }
        setIsFullScreen(true);
    };
    const exitFullScreen = () => {
        if (document.exitFullscreen) { document.exitFullscreen(); }
        else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
        else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
        else if (document.msExitFullscreen) { document.msExitFullscreen(); }
        setIsFullScreen(false);
    };

    const toggleFullScreen = () => {
        if (isFullScreen) { exitFullScreen(); }
        else { enterFullScreen(); }
    };

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isFullScreen) { exitFullScreen(); }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullScreen]);


    const handleChange = (event) => {
        const selected = companyData.find(company => company.name === event.target.value);
        setSelectedCompany(selected);
    };


    return (

        <div className='w-[100%] flex justify-between items-center p-5 border-b border-[lightgray]'>

            <div className='flex items-center gap-x-4'>
                <GiHamburgerMenu className='lg:hidden block' onClick={() => toggleNav(!isNavOpen)} />
                <p className='text-lg'>{location === "home" ? "Dashboard" : location.charAt(0).toUpperCase() + location.slice(1)}</p>
            </div>


            <div className='flex items-center gap-x-4'>


                {/* Dropdown - Company names only */}
                <select onChange={handleChange} className="bg-[#e5e7ea] p-2 rounded-md outline-none text-sm appearance-none max-w-[6.5rem] truncate cursor-pointer">
                    {companyData.map((company, index) => (<option key={index} value={company.name}> {company.name}</option>))}
                </select>

                <RxEnterFullScreen className='text-[1.3rem] cursor-pointer' onClick={toggleFullScreen} title={isFullScreen ? "Exit Fullscreen" : "Enter Fullscreen"} />

                <div className='flex justify-center items-center w-[2rem] h-[2rem] rounded-full bg-[#e5e7ea] cursor-pointer' onClick={() => setIsModalOpen(!isModalOpen)}>
                    <IoMdSync className='text-[1.3rem]' />
                </div>
                <img src={AvatarIcon} alt="" className='w-7 cursor-pointer' />
            </div>

            <SyncPopup isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} setListId={setListId} listId={listId} />
        </div>

    )
}

export default Header