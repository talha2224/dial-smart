import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { CiSearch } from "react-icons/ci";
import config from '../../config'
import toast from 'react-hot-toast';
import TranscriptPopup from '../../components/dashboard/popups/TranscriptPopup';
import Tippy from '@tippyjs/react';
import CreateCompanyPopup from '../../components/dashboard/popups/CreateCompanyPopup';
import UpdateCompanyPopup from '../../components/dashboard/popups/UpdateCompanyPopup';
let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"

const Companies = () => {
    const [companyData, setCompanyData] = useState([])
    const [userData, setUserData] = useState([])
    const [createCompanyModel, setCreateCompanyModel] = useState(false)
    const [updateCompanyModel, setUpdateCompanyModel] = useState(false)
    const [companyInfo, setCompanyInfo] = useState({ name: "", description: "", assignedUsers: [], transcript: "", companyId: "" })
    const [selectedTranscript, setSelectedTranscript] = useState({ companyId: "", transcript: "" })
    const [transcriptModel, setTranscriptModel] = useState(false)
    const userId = localStorage.getItem("accountId")


    const downloadTranscript = (transcript, companyName) => {
        let loader = toast.loading("Downloading transcript...");
        const blob = new Blob([transcript], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${companyName}-transcript.txt`;
        link.click();
        toast.remove(loader);
        URL.revokeObjectURL(url);
        toast.success("Transcript downloaded successfully");
    };
    const fetchInitialData = async () => {
        try {
            let res = await axios.get(`${config.baseUrl}/companies/user/${userId}`)
            let subusers = await axios.get(`${config.baseUrl}/account/sub-user/${userId}`)
            setUserData(subusers.data?.data)
            setCompanyData(res.data?.data)
        }
        catch (error) {
            toast.error("Failed to fetch companies")
        }
    }
    const handleHubspotConnection = async (companyId) => {
        let loader = toast.loading("Processing Request...");
        try {
            let res = await axios.get(`${config.baseUrl}/companies/hubspot/disconnect/${companyId}`)
            console.log(res.data)
            if (res?.data) {
                fetchInitialData()
                toast.dismiss(loader)
                toast.success(res?.data?.msg)
            }
        }
        catch (error) {
            console.log(error)
            toast.dismiss(loader)
            toast.error("Something went wrong contact support")
        }
    }
    const toogleCompany = async (companyId, archive) => {
        let loader = toast.loading("Processing Request...");
        try {
            let res = await axios.put(`${config.baseUrl}/companies/toggle/activation/${companyId}`, { archive })
            console.log(res.data)
            if (res.data) {
                toast.dismiss(loader)
                toast.success(res?.data?.msg)
                fetchInitialData()
            }
        }
        catch (error) {
            console.log(error)
            toast.dismiss(loader)
            toast.error("Something went wrong contact support")
        }
    }

    
    useEffect(() => {
        fetchInitialData()
    }, [transcriptModel, updateCompanyModel, createCompanyModel])




    return (

        <div>


            {/* HEADER  */}

            <div className='flex justify-start md:justify-end items-center gap-x-4 flex-wrap'>


                <div className='bg-[#fff] border rounded-md py-2 px-3 flex items-center justify-between w-fit sm:w-[16rem] mt-2 '>
                    <input type="text" placeholder='Search' className='w-[100%] sm:w-[12rem] rounded-md mr-3 outline-none border-none bg-transparent' />
                    <CiSearch />
                </div>

                <div onClick={() => setCreateCompanyModel(!createCompanyModel)} title='Upload Contact Data From Excel' className='flex justify-center items-center bg-[#eff2f7] rounded-md w-[10rem] py-2 px-3 text-sm gap-x-2 cursor-pointer mt-2'>
                    <p className='text-sm'>Create Company</p>
                </div>



            </div>


            {/* TABLE */}
            <div className="rounded-md min-w-[100%] flex-1 mt-6 overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table style={{ borderSpacing: "0 10px" }} className="min-w-[100%] border-separate ">
                        <thead className='bg-[#ececec] h-[3rem]'>
                            <tr>
                                <th className={thStyle}>Id</th>
                                <th className={thStyle}>Company Name</th>
                                <th className={thStyle}>Company Description</th>
                                <th className={thStyle}>Total Contacts</th>
                                <th className={thStyle}>Created At</th>
                                <th className={thStyle}>Assigned Users</th>
                                <th className={thStyle}>Hubspot Connection</th>
                                <th className={thStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {companyData.map((company, index) => (
                                <tr style={{ borderRadius: "1rem" }} key={index} className="bg-white text-sm font-normal pb-4 h-[3rem]">
                                    <td className="py-2 px-4 text-sm text-nowrap">{index + 1}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{company.name}</td>
                                    <td className="py-2 px-4 text-nowrap max-w-[10rem] truncate" title={company.description}>{company.description}</td>
                                    <td className="py-2 px-4">{company?.contacts}</td>

                                    <td className="py-2 px-4 text-nowrap">{company.createdAt}</td>


                                    <td className={`py-2 px-4`}>
                                        <div className='flex items-center gap-x-1'>
                                            {
                                                company?.assignedUsers?.length > 0 ?
                                                    company.assignedUsers.map((user) => (
                                                        <Tippy content={user?.username} key={user?.username}>
                                                            <div title={user?.username} className='w-[1.4rem] h-[1.4rem] text-sm text-white flex justify-center items-center rounded-full bg-[#008000] cursor-pointer'>{user?.username?.split(" ")[0][0]}</div>
                                                        </Tippy>
                                                    ))
                                                    : "-"
                                            }
                                        </div>
                                    </td>

                                    <td className="py-2 px-4 text-nowrap">
                                        {company.hubspot_status ? (<button onClick={() => handleHubspotConnection(company?._id)} className="bg-red-500 text-white px-2 h-[2rem] rounded-[0.3rem] text-xs">Disconnect</button>) 
                                        : (
                                            <a href={`${config.baseUrl}/companies/hubspot/install/${company?._id}/${userId}`} target="_blank" rel="noreferrer">
                                                <button className="bg-[#4285F4] text-white px-2 h-[2rem] rounded-[0.3rem] text-xs">   Connect</button>
                                            </a>
                                        )}
                                    </td>




                                    <td className='py-2 px-4'>
                                        <div className='flex items-center gap-x-2'>

                                            <button onClick={() => { toogleCompany(company?._id, company?.archive === 0 ? 1 : 0) }} className={`${company?.archive === 1 ? "bg-[#008000]" : "bg-red-500"} text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]`}>{company?.archive == 1 ? "Activate" : "Deactivate"}</button>
                                            <button onClick={() => { setUpdateCompanyModel(!updateCompanyModel); setCompanyInfo({ name: company?.name, description: company?.description, transcript: company?.transcript, companyId: company?._id, assignedUsers: company?.assignedUsers?.map(user => user._id) || [] }) }} className='bg-[#eff2f7] text-xs px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Update</button>
                                            <button onClick={() => downloadTranscript(company.transcript, company.name)} className='bg-[#4285F4] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Download Transcript</button>
                                            <button onClick={() => { setTranscriptModel(!transcriptModel); setSelectedTranscript({ companyId: company?._id, transcript: company?.transcript, }) }} className='bg-[#f1b44c] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>View Transcript</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {
                createCompanyModel && (<CreateCompanyPopup userId={userId} userData={userData} companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} closeModel={setCreateCompanyModel} />)
            }


            {
                updateCompanyModel && (<UpdateCompanyPopup userData={userData} companyInfo={companyInfo} setCompanyInfo={setCompanyInfo} closeModel={setUpdateCompanyModel} />)
            }


            {

                transcriptModel && (
                    <TranscriptPopup updateCompanyInfo={setSelectedTranscript} companyInfo={selectedTranscript} setTranscriptModel={setTranscriptModel} />
                )
            }






        </div>

    )
}

export default Companies