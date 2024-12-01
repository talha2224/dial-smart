 import React, { useState } from 'react'
import { CiSearch } from "react-icons/ci";

const User = () => {
    let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"

    const [createUserModel, setCreateUserModel] = useState(false)
    const [userInfo, setUserInfo] = useState({ name: "", email: "",phone:"", assignedCompany: []})

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
        if (!userInfo.assignedCompany.includes(user)) { setUserInfo(prevState => ({ ...prevState, assignedCompany: [...prevState.assignedCompany, user] })); }
    };

    const handleDeleteUser = (user) => {
        setUserInfo(prevState => ({ ...prevState, assignedCompany: prevState.assignedCompany.filter(u => u !== user) }));
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setUserInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = () => {
        console.log("Company Info Submitted:", userInfo);
        setCreateUserModel(false);
    };


    const userData = [
        {
            username: 'Josh',
            email: 'josh@example.com',
            phone: '03422793234',
            status: 'pending',
            callsMade: 2,
            leadsClosed:12,
            failedLeads:3,
            joiningDate: "12 Dec, 2020",
            assignedCompanies:["Tech Crop","New Company"]
        },
        {
            username: 'Sarah',
            email: 'sarah@example.com',
            phone: '03014567891',
            status: 'pending',
            callsMade: 5,
            leadsClosed:12,
            failedLeads:3,
            joiningDate: "15 Jan, 2021",
            assignedCompanies:["Tech Crop","New Company"]
        },
        {
            username: 'Mike',
            email: 'mike@example.com',
            phone: '03216789012',
            status: 'success',
            callsMade: 8,
            leadsClosed:12,
            failedLeads:3,
            joiningDate: "20 Feb, 2021",
            assignedCompanies:["Tech Crop","New Company"]
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

                <div onClick={() => setCreateUserModel(!createUserModel)} title='Upload Contact Data From Excel' className='flex justify-center items-center bg-[#eff2f7] rounded-md w-[10rem] py-2 px-3 text-sm gap-x-2 cursor-pointer mt-2'>
                    <p className='text-sm'>Create User</p>
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
                                <th className={thStyle}>Assigned Companies</th>
                                <th className={thStyle}>Calls Made</th>
                                <th className={thStyle}>Leads Closed</th>
                                <th className={thStyle}>Failed Leads</th>
                                <th className={thStyle}>Invitation Status</th>
                                <th className={thStyle}>Joining Date</th>
                                <th className={thStyle}>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {userData.map((user, index) => (
                                <tr style={{ borderRadius: "1rem" }} key={index} className="bg-white text-sm font-normal pb-4 h-[3rem]">
                                    <td className="py-2 px-4 text-sm text-nowrap">{index + 1}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{user.username}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{user.email}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{user.phone}</td>
                                    <td className={`py-2 px-4`}>
                                        <div className='flex items-center gap-x-1'>
                                            {user.assignedCompanies.length > 0 ?user.assignedCompanies.map((name) => (<div title={name} className='w-[2rem] h-[2rem] text-sm text-white flex justify-center items-center rounded-full bg-[#008000] cursor-pointer'>{name.split(" ") [0][0] + name.split(" ") [1][0]}</div>)) : "-"}
                                        </div>
                                    </td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{user.callsMade}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{user.leadsClosed}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">{user.failedLeads}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap"><button className={`${user.status=="pending" ? "bg-red-500":"bg-[#008000]"} text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]`}>{user.status=="pending" ? "pending":"accepted"}</button></td>

                                    




                                    <td className="py-2 px-4 text-nowrap">{user.joiningDate}</td>





                                    <td className='py-2 px-4'>
                                        <div className='flex items-center gap-x-2'>

                                            <button className='bg-red-500 text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Delete</button>
                                            <button onClick={() => setCreateUserModel(!createUserModel)} className='bg-[#eff2f7] text-xs px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Assign Company</button>
                                            <button className='bg-[#000] text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Login As</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>


            {

                createUserModel && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setCreateUserModel(false)}>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-lg font-medium mb-4">Create New User</h2>

                            {/* User Name */}
                            <div className="mb-4">
                                <label htmlFor="companyName" className="text-sm mb-2 block">User Name</label>
                                <input type="text" id="companyName" name="name" value={userInfo.name} onChange={handleInputChange} placeholder="User Name" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>

                            {/* User Email */}
                            <div className="mb-4">
                                <label htmlFor="description" className="text-sm mb-2 block">User Email</label>
                                <input type='email' id="description" name="email" value={userInfo.email} onChange={handleInputChange} placeholder="User Email" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>

                            <div className="mb-4">
                                <label htmlFor="phone" className="text-sm mb-2 block">User Email</label>
                                <input type='text' id="phone" name="phone" value={userInfo.email} onChange={handleInputChange} placeholder="Phone Number" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm" />
                            </div>


                            {/* User Selection */}
                            <div className="mb-4">
                                <label htmlFor="users" className="text-sm mb-2 block">Assign Companies</label>
                                <div className="space-y-2">
                                    {companyData.map(user => (
                                        <div key={user.email} className="flex items-center justify-between">
                                            <label className="flex items-center">
                                                <input type="checkbox" value={user.name} checked={userInfo.assignedCompany.includes(user.name)} onChange={() => handleUserSelection(user.name)} className="mr-2 text-sm" />{user.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Display selected users */}
                            <div className="mb-4">
                                <h3 className="text-sm mb-2">Share Companies</h3>
                                <div className="space-y-2">
                                    {userInfo.assignedCompany.map(user => (
                                        <div key={user} className="flex items-center justify-between">
                                            <span>{user}</span>
                                            <button onClick={() => handleDeleteUser(user)} className="text-red-500 hover:text-red-700 text-sm">Delete</button>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            {/* Buttons */}
                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 text-sm" onClick={() => setCreateUserModel(false)}>Cancel</button>
                                <button className="px-4 py-2 bg-[#EA580C] text-white rounded-md text-sm" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }






        </div>

    )
}

export default User