import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const CallLogs = () => {
    let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"
    const [modelData, setmodelData] = useState("")
    const [showModel, setShowModel] = useState("")

    const callData = [
        {
            userName: "Jane Smith",
            userPhoneNumber: "+1-987-654-321",
            userEmail: "janesmith@example.com",
            callBy: "Agent B",
            transcriptDetails: "Vivamus ac felis vel ante tempor ultrices ut sit amet mauris.",
            callLog: "Customer inquired about pricing plans. Provided details on the available options.",
            callAttendStatus: "No Pick",
            callDate: "2024-11-22 14:30:00",
            leadStatus: "In Progress"
        },
        {
            userName: "Mark Johnson",
            userPhoneNumber: "+1-555-123-456",
            userEmail: "markjohnson@example.com",
            callBy: "Agent C",
            transcriptDetails: "Nullam vestibulum turpis ac risus malesuada, at scelerisque odio tempor.",
            callLog: "User requested a callback for technical support. Scheduled for tomorrow.",
            callAttendStatus: "Pick",
            callDate: "2024-11-21 08:45:00",
            leadStatus: "Converted"
        },
        {
            userName: "Emily Davis",
            userPhoneNumber: "+1-666-789-012",
            userEmail: "emilydavis@example.com",
            callBy: "Agent D",
            transcriptDetails: "Curabitur et nunc eu ante vehicula faucibus.",
            callLog: "User raised a complaint about service delivery. Follow-up to be made within 48 hours.",
            callAttendStatus: "No Pick",
            callDate: "2024-11-20 16:00:00",
            leadStatus: "Lost"
        }
    ];


    const openModel = (data) =>{setShowModel(!showModel);setmodelData(data)}
    const closeModel = () =>{setShowModel(!showModel);setmodelData("")}





    return (

        <div>


            {/* HEADER  */}

            <div className='flex justify-start md:justify-end items-center gap-x-4 flex-wrap'>


                <div className='bg-[#fff] border rounded-md py-2 px-3 flex items-center justify-between w-fit sm:w-[16rem] mt-2 '>
                    <input type="text" placeholder='Search' className='w-[100%] sm:w-[12rem] rounded-md mr-3 outline-none border-none bg-transparent' />
                    <CiSearch />
                </div>


            </div>


            {/* TABLE */}
            <div className="rounded-md min-w-[100%] flex-1 mt-6 overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table style={{ borderSpacing: "0 10px" }} className="min-w-[100%] border-separate ">
                        <thead className='bg-[#ececec] h-[3rem]'>
                            <tr>
                                <th className={thStyle}>Id</th>
                                <th className={thStyle}>User Name</th>
                                <th className={thStyle}>User Email</th>
                                <th className={thStyle}>Phone Number</th>
                                <th className={thStyle}>Call By</th>
                                <th className={thStyle}>Attend Status</th>
                                <th className={thStyle}>Transcript</th>
                                <th className={thStyle}>Call Logs</th>
                                <th className={thStyle}>Call Date</th>
                                <th className={thStyle}>Lead Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {callData.map((company, index) => (
                                <tr style={{ borderRadius: "1rem" }} key={index} className="bg-white text-sm font-normal pb-4 h-[3rem]">
                                    <td className="py-2 px-4 text-sm text-nowrap">{index + 1}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{company.userName}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{company.userEmail}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{company.userPhoneNumber}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{company.callBy}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap"><button className={`px-4 py-1 text-white ${company.callAttendStatus=="Pick" ?"bg-[#4285F4]":"bg-red-500"} text-xs rounded-md`}>{company.callAttendStatus}</button></td>
                                    <td className="py-2 px-4 text-sm text-nowrap"><button onClick={()=>openModel(company.transcriptDetails)} className='bg-[#4285F4] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>View</button></td>
                                    <td className="py-2 px-4 text-sm text-nowrap"><button onClick={()=>openModel(company.callLog)} className='bg-[#4285F4] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>View</button></td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{company.callDate}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">
                                        <button className={`${company.leadStatus=="Converted"?"bg-[#4285F4]":company.leadStatus=="Lost"?"bg-red-500":"bg-green-500"} text-xs text-white px-2 rounded-[0.3rem] text-nowrap py-1`}>{company.leadStatus}</button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




            {

                showModel && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={closeModel}>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-lg font-medium mb-4">Call Details</h2>

                            <div className="mb-4">
                                <label htmlFor="transcript" className="text-sm mb-2 block">Call Transcript</label>
                                <textarea id="transcript" name="transcript" value={modelData} placeholder="" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>
                        </div>
                    </div>
                )
            }






        </div>

    )
}

export default CallLogs