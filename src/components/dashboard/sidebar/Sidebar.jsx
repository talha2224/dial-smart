import React, { useEffect, useRef } from 'react';
import Logo from '../../../assets/leadbot.png';
import FunnelImage from '../../../assets/dashboard/funnel.svg';
import AvatarIcon from '../../../assets/dashboard/avatar.jpg';
import { navData } from '../../../constants/sidebarData';
import { Link, useLocation } from 'react-router-dom';
import { IoLogOut } from 'react-icons/io5';
import { useSidebar } from '../../../context/SidebarContext';

const Sidebar = () => {
  const location = useLocation().pathname.split("/")[2];
  const { isNavOpen, toggleNav } = useSidebar();
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
        toggleNav(); // Close sidebar if clicked outside
      }
    };

    // Attach event listener on mount
    document.addEventListener('mousedown', handleClickOutside);

    // Cleanup event listener on unmount
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [toggleNav]);

  return (
    <>
      {/* Desktop Sidebar */}
      <div className={`lg:block hidden w-[15rem] h-[100vh] bg-[#0F0F0F] p-5 relative`}>
        <div className='flex items-center gap-x-2'>
          <img src={Logo} alt="leadbot-logo" />
          <h2 className='text-xl font-semibold text-white'>Dial Smart</h2>
        </div>

        <p className='text-[#a6b0cf] mt-[2rem] mb-4 text-xs'>MENU</p>

        <div className='h-[40vh] overflow-y-auto sidebar'>
          {navData?.map((i) => (
            <Link to={`/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#EA580C]"} p-2 rounded-md items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-white" : "text-[#a6b0cf]"}`}>
              <div>{i.icon}</div>
              <p className='text-sm'>{i.name}</p>
            </Link>
          ))}
        </div>

        <div className='absolute bottom-[6rem] w-[80%] flex justify-center items-center flex-col bg-[#17191e] rounded-md py-4 '>
          <img src={FunnelImage} alt="" className='h-[8rem] mt-[-3rem]' />
          <Link to={"/register"}><button className='bg-[#EA580C] rounded-md w-[5rem] h-[2rem] text-[#fff] text-xs mt-[-10rem]'>Upgrade</button></Link>
        </div>

        <div className='absolute bottom-5 w-[80%] flex justify-between items-center '>
          <div className='flex items-start gap-x-2'>
            <div className='cursor-pointer'>
              <img src={AvatarIcon} alt="" className='w-7' />
            </div>
            <div>
              <p className='text-xs text-white'>Easin Arafat</p>
              <p className='text-xs text-[#a6b0cf]'>Free account</p>
            </div>
          </div>
          <IoLogOut className='text-[#fff] cursor-pointer text-xl' />
        </div>
      </div>

      {/* Mobile Sidebar */}
      {
        isNavOpen && (
          <div className={`lg:hidden block w-[14rem] z-50 h-[100vh] bg-[#0F0F0F] p-5 fixed top-0 left-0 transition-all duration-300 ease-in-out ${isNavOpen ? 'transform translate-x-0' : 'transform -translate-x-full'}`} ref={sidebarRef}>
            <div className='flex items-center gap-x-2'>
              <img src={Logo} alt="leadbot-logo" />
              <h2 className='text-xl font-semibold text-white'>Dial Smart</h2>
            </div>

            <p className='text-[#a6b0cf] mt-[2rem] mb-4 text-xs'>MENU</p>

            <div>
              {navData?.map((i) => (
                <Link to={`/dashboard/${i.link}`} key={i.id} className={`flex ${location == i.link && "bg-[#EA580C]"} p-2 rounded-md items-center gap-x-3 mb-2 cursor-pointer ${location == i.link ? "text-white" : "text-[#a6b0cf]"}`}>
                  <div>{i.icon}</div>
                  <p className='text-sm'>{i.name}</p>
                </Link>
              ))}
            </div>

            <div className='absolute bottom-[6rem] w-[80%] flex justify-center items-center flex-col bg-[#17191e] rounded-md py-4 '>
              <img src={FunnelImage} alt="" className='h-[8rem] mt-[-3rem]' />
              <Link to={"/register"}><button className='bg-[#EA580C] rounded-md w-[5rem] h-[2rem] text-[#fff] text-xs mt-[-10rem]'>Upgrade</button></Link>
            </div>

            <div className='absolute bottom-5 w-[80%] flex justify-between items-center '>
              <div className='flex items-start gap-x-2'>
                <div className='flex justify-center items-center w-[30px] h-[30px] bg-blue-700 rounded-md cursor-pointer'>
                  <img src={AvatarIcon} alt="" />
                </div>
                <div>
                  <p className='text-xs text-white'>Easin Arafat</p>
                  <p className='text-xs text-[#a6b0cf]'>Free account</p>
                </div>
              </div>
              <IoLogOut className='text-[#fff] cursor-pointer text-xl' />
            </div>
          </div>
        )}
    </>
  );
};

export default Sidebar;
