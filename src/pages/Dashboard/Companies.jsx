import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";
import { FaFileExcel } from 'react-icons/fa';

const Companies = () => {
    let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"

    const [createCompanyModel, setCreateCompanyModel] = useState(false)
    const [companyInfo, setCompanyInfo] = useState({ name: "", description: "", assignedUser: [], transcript: "" })
    const [transcriptModel, setTranscriptModel] = useState(false)

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
        {
            name: "Healthify",
            companyDescription: "Healthify focuses on improving health outcomes worldwide.",
            createdDate: "20 Apr, 2022",
            assignedUsers: ["Kathy", "Leo"],
            totalContacts: 2,
            transcript: "Kathy, Leo"
        },
        {
            name: "Green Energy Co.",
            companyDescription: "Green Energy Co. leads the renewable energy revolution.",
            createdDate: "05 May, 2022",
            assignedUsers: ["Mia", "Noah", "Olivia", "Peter"],
            totalContacts: 4,
            transcript: "Mia, Noah, Olivia, Peter"
        },
        {
            name: "EduSmart",
            companyDescription: "EduSmart provides smarter education solutions.",
            createdDate: "12 Jun, 2022",
            assignedUsers: ["Quinn", "Rachel"],
            totalContacts: 2,
            transcript: "Quinn, Rachel"
        },
        {
            name: "AutoDrive Inc.",
            companyDescription: "AutoDrive Inc. pioneers autonomous vehicle technology.",
            createdDate: "08 Jul, 2022",
            assignedUsers: ["Steve", "Tina", "Uma"],
            totalContacts: 3,
            transcript: "Steve, Tina, Uma"
        },
        {
            name: "TravelEase",
            companyDescription: "TravelEase makes travel planning effortless.",
            createdDate: "18 Aug, 2022",
            assignedUsers: ["Victor", "Wendy"],
            totalContacts: 2,
            transcript: "Victor, Wendy"
        },
        {
            name: "MediTech",
            companyDescription: "MediTech advances medical technology innovations.",
            createdDate: "25 Sep, 2022",
            assignedUsers: ["Xander", "Yara", "Zane"],
            totalContacts: 3,
            transcript: "Xander, Yara, Zane"
        },
        {
            name: "RetailPoint",
            companyDescription: "RetailPoint enhances the retail experience.",
            createdDate: "10 Oct, 2022",
            assignedUsers: ["Alice", "Bob"],
            totalContacts: 2,
            transcript: "Alice, Bob"
        },
        {
            name: "HomeSecure",
            companyDescription: "HomeSecure provides smart home security solutions.",
            createdDate: "15 Nov, 2022",
            assignedUsers: ["Charlie", "Daniel"],
            totalContacts: 2,
            transcript: "Charlie, Daniel"
        },
        {
            name: "AeroTech",
            companyDescription: "AeroTech specializes in aerospace innovations.",
            createdDate: "01 Dec, 2022",
            assignedUsers: ["Eve", "Frank", "Grace", "Hannah"],
            totalContacts: 4,
            transcript: "Eve, Frank, Grace, Hannah"
        },
        {
            name: "BioCare",
            companyDescription: "BioCare leads in biotechnology research.",
            createdDate: "20 Dec, 2022",
            assignedUsers: ["Ivan", "Jack"],
            totalContacts: 2,
            transcript: "Ivan, Jack"
        },
        {
            name: "UrbanDesign",
            companyDescription: "UrbanDesign reimagines urban spaces.",
            createdDate: "05 Jan, 2023",
            assignedUsers: ["Kathy", "Leo", "Mia"],
            totalContacts: 3,
            transcript: "Kathy, Leo, Mia"
        },
        {
            name: "AgriTech Solutions",
            companyDescription: "AgriTech Solutions modernizes agriculture.",
            createdDate: "10 Feb, 2023",
            assignedUsers: ["Noah", "Olivia", "Peter"],
            totalContacts: 3,
            transcript: "Noah, Olivia, Peter"
        }
    ];

    const downloadTranscript = (transcript, companyName) => {
        const blob = new Blob([transcript], { type: "text/plain" });
        const url = URL.createObjectURL(blob);
        const link = document.createElement("a");
        link.href = url;
        link.download = `${companyName}-transcript.txt`;
        link.click();
        URL.revokeObjectURL(url);
    };


    const handleUserSelection = (user) => {
        if (!companyInfo.assignedUser.includes(user)) { setCompanyInfo(prevState => ({ ...prevState, assignedUser: [...prevState.assignedUser, user] })); }
    };

    const handleDeleteUser = (user) => {
        setCompanyInfo(prevState => ({ ...prevState, assignedUser: prevState.assignedUser.filter(u => u !== user) }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Company Info Submitted:", companyInfo);
        setCreateCompanyModel(false);
    };


    const userData = [
        {
            username: 'Josh',
            email: 'josh@example.com',
            phone: '03422793234',
            status: 'pending',
            callsMade: 2,
            callDate: "12 Dec, 2020"
        },
        {
            username: 'Sarah',
            email: 'sarah@example.com',
            phone: '03014567891',
            status: 'failed',
            callsMade: 5,
            callDate: "15 Jan, 2021"
        },
        {
            username: 'Mike',
            email: 'mike@example.com',
            phone: '03216789012',
            status: 'success',
            callsMade: 8,
            callDate: "20 Feb, 2021"
        },
    ]



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
                                    <td className="py-2 px-4 text-nowrap max-w-[10rem] truncate" title={company.companyDescription}>{company.companyDescription}</td>
                                    <td className="py-2 px-4">{company.totalContacts}</td>

                                    <td className="py-2 px-4 text-nowrap">{company.createdDate}</td>


                                    <td className={`py-2 px-4`}>
                                        <div className='flex items-center gap-x-1'>
                                            {
                                                company.assignedUsers.length > 0 ?
                                                    company.assignedUsers.map((name) => (<div title={name} className='w-[1.4rem] h-[1.4rem] text-sm text-white flex justify-center items-center rounded-full bg-[#008000] cursor-pointer'>{name[0]}</div>)) : "-"
                                            }
                                        </div>
                                    </td>

                                    <td className="py-2 px-4 text-nowrap"> <button className={`${!company.connectionStatus ? "bg-[#4285F4]" : "bg-red-600"} text-white px-2 h-[2rem] rounded-[0.3rem] text-xs`}>{company.connectionStatus ? "Disconnect Hubspot" : "Connect Hubspot"}</button></td>



                                    <td className='py-2 px-4'>
                                        <div className='flex items-center gap-x-2'>

                                            <button className='bg-red-500 text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Delete</button>
                                            <button onClick={() => downloadTranscript(company.transcript, company.name)} className='bg-[#4285F4] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Download Transcript</button>
                                            <button onClick={() => setTranscriptModel(!transcriptModel)} className='bg-[#f1b44c] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>View Transcript</button>
                                            <button onClick={() => setCreateCompanyModel(!createCompanyModel)} className='bg-[#eff2f7] text-xs px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Assign Company</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {

                createCompanyModel && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setCreateCompanyModel(false)}>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-lg font-medium mb-4">Create New Company</h2>

                            {/* Company Name */}
                            <div className="mb-4">
                                <label htmlFor="companyName" className="text-sm mb-2 block">Company Name</label>
                                <input type="text" id="companyName" name="name" value={companyInfo.name} onChange={handleInputChange} placeholder="Company Name" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>

                            {/* Company Description */}
                            <div className="mb-4">
                                <label htmlFor="description" className="text-sm mb-2 block">Company Description</label>
                                <textarea id="description" name="description" value={companyInfo.description} onChange={handleInputChange} placeholder="Company Description" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>

                            {/* Company Transcript */}
                            <div className="mb-4">
                                <label htmlFor="transcript" className="text-sm mb-2 block">Company Transcript</label>
                                <textarea id="transcript" name="transcript" value={companyInfo.transcript} onChange={handleInputChange} placeholder="Company Transcript" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>

                            {/* User Selection */}
                            <div className="mb-4">
                                <label htmlFor="users" className="text-sm mb-2 block">Assign Users</label>
                                <div className="space-y-2">
                                    {userData.map(user => (
                                        <div key={user.email} className="flex items-center justify-between">
                                            <label className="flex items-center">
                                                <input type="checkbox" value={user.username} checked={companyInfo.assignedUser.includes(user.username)} onChange={() => handleUserSelection(user.username)} className="mr-2 text-sm" />{user.username}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Display selected users */}
                            <div className="mb-4">
                                <h3 className="text-sm mb-2">Selected Users</h3>
                                <div className="space-y-2">
                                    {companyInfo.assignedUser.map(user => (
                                        <div key={user} className="flex items-center justify-between">
                                            <span>{user}</span>
                                            <button onClick={() => handleDeleteUser(user)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 text-sm" onClick={() => setCreateCompanyModel(false)}>Cancel</button>
                                <button className="px-4 py-2 bg-[#EA580C] text-white rounded-md text-sm" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }


            {

                transcriptModel && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setTranscriptModel(false)}>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-lg font-medium mb-4">Transcript Details</h2>


                            {/* Company Transcript */}
                            <div className="mb-4">
                                <label htmlFor="transcript" className="text-sm mb-2 block">Company Transcript</label>
                                <textarea id="transcript" name="transcript" value={companyInfo.transcript} onChange={handleInputChange} placeholder="Company Transcript" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 text-sm" onClick={() => setTranscriptModel(false)}>Cancel</button>
                                <button className="px-4 py-2 bg-[#EA580C] text-white rounded-md text-sm" onClick={handleSubmit}>Save</button>
                            </div>
                        </div>
                    </div>
                )
            }






        </div>

    )
}

export default Companies