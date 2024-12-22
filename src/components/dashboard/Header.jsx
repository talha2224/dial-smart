import React, { useEffect, useState } from 'react'
import AvatarIcon from '../../assets/dashboard/avatar.jpg';
import { IoMdSync } from "react-icons/io";
import { GiHamburgerMenu } from 'react-icons/gi';
import { useSidebar } from '../../context/SidebarContext';
import SyncPopup from './popups/SyncPopup';
import { RxEnterFullScreen } from "react-icons/rx";
import axios from 'axios';
import config from '../../config'
import toast from 'react-hot-toast';

const Header = ({ location }) => {
    const { isNavOpen, toggleNav } = useSidebar();
    const [companyData, setCompanyData] = useState([])
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [listId, setListId] = useState("");
    const [isFullScreen, setIsFullScreen] = useState(false);
    const [selectedCompany, setSelectedCompany] = useState(null);
    const userId = localStorage.getItem("accountId")


    const fetchCompanies = async () => {
        try {
            let res = await axios.get(`${config.baseUrl}/companies/user/${userId}`)
            setCompanyData(res.data?.data)
            const activeCompany = res.data?.data?.find(company => company.active === 1);
            if (activeCompany) { setSelectedCompany(activeCompany); }
            else { toast.error("No active company found"); }
        }
        catch (error) {
            toast.error("Failed to fetch companies")
        }
    }
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
    const handleChange = async (event) => {
        const selected = companyData.find(company => company.name === event.target.value);
        setSelectedCompany(selected);
        let res = await axios.put(`${config.baseUrl}/companies/toggle/${userId}/${selected?._id}`)
        if (res.data) {
            await fetchCompanies()
            toast.success(`Now Using ${selected?.name} Company`)
        }

    };
    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'Escape' && isFullScreen) { exitFullScreen(); }
        };
        window.addEventListener('keydown', handleKeyDown);
        return () => window.removeEventListener('keydown', handleKeyDown);
    }, [isFullScreen]);

    useEffect(() => {
        fetchCompanies()
    }, [])


    return (

        <div className='w-[100%] flex justify-between items-center p-5 border-b border-[lightgray]'>

            <div className='flex items-center gap-x-4'>
                <GiHamburgerMenu className='lg:hidden block cursor-pointer' onClick={() => toggleNav(!isNavOpen)} />
                <p className='text-lg'>{location === "home" ? "Dashboard" : location.charAt(0).toUpperCase() + location.slice(1)}</p>
            </div>


            <div className='flex items-center gap-x-4'>


                {/* Dropdown - Company names only */}
                <select value={selectedCompany?.name || ""} onChange={handleChange} className="bg-[#e5e7ea] p-2 rounded-md outline-none text-sm appearance-none max-w-[8rem] truncate cursor-pointer">
                    { companyData.map((company, index) => ( <option key={index} value={company.name}>{company.name}</option>)) }
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