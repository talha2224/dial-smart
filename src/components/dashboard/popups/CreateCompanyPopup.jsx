import React from 'react'
import axios from 'axios';
import toast from 'react-hot-toast';
import config from '../../../config';


const CreateCompanyPopup = ({userId,userData, companyInfo, setCompanyInfo, closeModel }) => {



    const handleUserSelection = (userId) => {
        setCompanyInfo((prev) => {
            const isAlreadyAssigned = prev.assignedUsers.includes(userId);
            return { ...prev, assignedUsers: isAlreadyAssigned ? prev.assignedUsers.filter((id) => id !== userId) : [...prev.assignedUsers, userId], };
        });
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setCompanyInfo(prevState => ({ ...prevState, [name]: value }));
    };

    const handleSubmit = async () => {
        let loader = toast.loading("Processing Request....")
        if (companyInfo?.name === "" || companyInfo.description === "") {
            toast.dismiss(loader)
            toast.error("Please fill all the fields")
            return
        }
        else {
            try {
                let res = await axios.post(`${config.baseUrl}/companies/create`, { ...companyInfo, userId })
                if (res.data) {
                    toast.dismiss(loader)
                    toast.success(res?.data?.msg)
                    setCompanyInfo({ name: "", description: "", assignedUsers: [],transcript:"" })
                    closeModel(false)
                }
            }
            catch (error) {
                toast.dismiss(loader)
                toast.error(error.response?.data?.msg ? error.response?.data?.msg : "Failed to create user")
            }
        }
    };

    return (
        <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => closeModel(false)}>
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
                    <label htmlFor="users" className="text-sm mb-3 block">Assign Users</label>
                    {
                        userData?.length === 0 ? <p className="text-sm text-gray-500">No users available</p> :
                            <div className="space-y-2">
                                {userData?.map(user => (
                                    <div key={user?._id} className="flex items-center justify-between">
                                        <label className="flex items-center">
                                            <input type="checkbox" value={user._id} checked={companyInfo?.assignedUsers.includes(user._id)} onChange={() => handleUserSelection(user._id)} className="mr-2 text-sm" />
                                            <span className='text-sm'>{user?.username}</span>
                                        </label>
                                    </div>
                                ))}
                            </div>
                    }
                </div>


                {/* Buttons */}
                <div className="mt-4 flex justify-end">
                    <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 text-sm" onClick={() => closeModel(false)}>Cancel</button>
                    <button className="px-4 py-2 bg-[#EA580C] text-white rounded-md text-sm" onClick={handleSubmit}>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default CreateCompanyPopup