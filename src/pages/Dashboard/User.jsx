import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import axios from 'axios';
import config from '../../config'
import toast from 'react-hot-toast';
import { formatReadableDate } from '../../helpers/function';
import CreateUserPopup from '../../components/dashboard/popups/CreateUserPopup';
import Tippy from '@tippyjs/react';
import UpdateUserPopup from '../../components/dashboard/popups/UpdateUserPopup';

const User = () => {
    let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"

    const [createUserModel, setCreateUserModel] = useState(false)
    const [updateUserModel, setUpdateUserModel] = useState(false)
    const [userInfo, setUserInfo] = useState({ username: "", email: "", sharedCompanies: [], accountId: "" })
    const [userData, setUserData] = useState([])
    const [companyData, setCompanyData] = useState([])
    const userId = localStorage.getItem("accountId")

    const fetchInitialData = async () => {
        try {
            let companies = await axios.get(`${config.baseUrl}/companies/user/${userId}`)
            let subusers = await axios.get(`${config.baseUrl}/account/sub-user/${userId}`)
            setCompanyData(companies.data?.data)
            setUserData(subusers.data?.data)
        }
        catch (error) {
            toast.error("Failed to fetch companies")
        }
    }
    const toogleUser = async (accountId, toogle) => {
        try {
            console.log(toogle)
            let res = await axios.post(`${config.baseUrl}/account/toogle-activation`, { accountId, toogle })
            if (res.data) {
                toast.success(res?.data?.msg)
                fetchInitialData()
            }
        }
        catch (error) {
            toast.error("Something went wrong contact support")
        }
    }

    useEffect(() => {
        fetchInitialData()
    }, [createUserModel, updateUserModel])



    return (

        <div>


            {/* HEADER  */}

            <div className='flex justify-start md:justify-end items-center gap-x-4 flex-wrap'>


                <div className='bg-[#fff] border rounded-md py-2 px-3 flex items-center justify-between w-fit sm:w-[16rem] mt-2 '>
                    <input type="text" placeholder='Search' className='w-[100%] sm:w-[12rem] rounded-md mr-3 outline-none border-none bg-transparent' />
                    <CiSearch />
                </div>

                <div onClick={() => setCreateUserModel(!createUserModel)} title='Upload Contact Data From Excel' className='flex justify-center items-center bg-[#eff2f7] rounded-md w-[10rem] py-2 px-3 text-sm gap-x-2 cursor-pointer mt-2'>
                    <p className='text-sm'>Create User</p>
                </div>



            </div>


            {/* TABLE */}

            {
                userData?.length > 0 ?
                    <div className="rounded-md min-w-[100%] flex-1 mt-6 overflow-x-auto">
                        <div className="overflow-x-auto w-full">
                            <table style={{ borderSpacing: "0 10px" }} className="min-w-[100%] border-separate ">
                                <thead className='bg-[#ececec] h-[3rem]'>
                                    <tr>
                                        <th className={thStyle}>Id</th>
                                        <th className={thStyle}>User Name</th>
                                        <th className={thStyle}>User Email</th>
                                        <th className={thStyle}>Assigned Companies</th>
                                        <th className={thStyle}>Calls Made</th>
                                        <th className={thStyle}>Leads Closed</th>
                                        <th className={thStyle}>Failed Leads</th>
                                        <th className={thStyle}>Invitation Status</th>
                                        <th className={thStyle}>Creation Date</th>
                                        <th className={thStyle}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {userData.map((user, index) => (
                                        <tr style={{ borderRadius: "1rem" }} key={index} className="bg-white text-sm font-normal pb-4 h-[3rem]">
                                            <td className="py-2 px-4 text-sm text-nowrap">{index + 1}</td>
                                            <td className="py-2 px-4 text-sm text-nowrap">{user.username}</td>
                                            <td className="py-2 px-4 text-sm text-nowrap">{user.email}</td>
                                            <td className={`py-2 px-4`}>
                                                <div className='flex items-center gap-x-1'>
                                                    {user?.sharedCompanies.length > 0 ? user.sharedCompanies.map((company) => (
                                                        <Tippy content={company?.name} key={company?.name}>
                                                            <div className='w-[2rem] h-[2rem] text-sm text-white flex justify-center items-center rounded-full bg-[#008000] cursor-pointer'>{company?.name.split(" ")[0][0] + company?.name.split(" ")[1][0]}</div>
                                                        </Tippy>
                                                    ))
                                                        : "-"}
                                                </div>
                                            </td>
                                            <td className="py-2 px-4 text-sm text-nowrap">{user?.callsMade || 0}</td>
                                            <td className="py-2 px-4 text-sm text-nowrap">{user?.leadsClosed || 0}</td>
                                            <td className="py-2 px-4 text-sm text-nowrap">{user?.failedLeads || 0}</td>
                                            <td className="py-2 px-4 text-sm text-nowrap"><button className={`${!user.invitationAccepted ? "bg-red-500" : "bg-[#008000]"} text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]`}>{!user.invitationAccepted ? "pending" : "accepted"}</button></td>
                                            <td className="py-2 px-4 text-nowrap">{formatReadableDate(user?.createdAt)}</td>
                                            <td className='py-2 px-4'>
                                                <div className='flex items-center gap-x-2'>
                                                    <button onClick={() => { toogleUser(user?._id,!user?.deleted) }} className={`${user?.deleted ?"bg-[#008000]":"bg-red-500"} text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]`}>{user?.deleted?"Activate":"Delete"}</button>
                                                    <button onClick={() => { setUpdateUserModel(!updateUserModel); setUserInfo({ email: user?.email, sharedCompanies: user?.sharedCompanies?.map(company => company._id) || [], username: user?.username, accountId: user?._id }) }} className='bg-[#eff2f7] text-xs px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Update</button>
                                                    <button className='bg-[#000] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Login As</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                    :
                    <div className='h-[50vh] flex justify-center items-center'>
                        <h1 className='text-[#000] text-sm mt-4 text-center flex-1'>Oops ! No Users Found</h1>
                    </div>
            }


            {
                createUserModel && (<CreateUserPopup companyData={companyData} userInfo={userInfo} setUserInfo={setUserInfo} closeModel={setCreateUserModel} parentId={userId} />)
            }

            {
                updateUserModel && (<UpdateUserPopup companyData={companyData} userInfo={userInfo} setUserInfo={setUserInfo} closeModel={setUpdateUserModel} />)
            }






        </div>

    )
}

export default User