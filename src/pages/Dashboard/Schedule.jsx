import React, { useState } from 'react'
import { CiSearch } from 'react-icons/ci'
const taskData = [
    {
        "id": 1,
        "title": "Develop Landing Page",
        "description": "Create a responsive landing page for the new product launch.",
        "members": [
            {
                "name": "Alice Johnson",
                "image": "https://randomuser.me/api/portraits/women/1.jpg"
            },
            {
                "name": "Bob Smith",
                "image": "https://randomuser.me/api/portraits/men/1.jpg"
            }
        ],
        "comments": [
            {
                "name": "Alice Johnson",
                "comment": "Should we use TailwindCSS for styling?"
            },
            {
                "name": "Bob Smith",
                "comment": "Yes, I think it's a good idea."
            }
        ],
        "startDate": "2024-12-01",
        "timelineEndDate": "2024-12-07",
        "status": "pending"
    },
    {
        "id": 2,
        "title": "Database Optimization",
        "description": "Improve database performance for faster query execution.",
        "members": [
            {
                "name": "Charlie Lee",
                "image": "https://randomuser.me/api/portraits/men/2.jpg"
            }
        ],
        "comments": [
            {
                "name": "Charlie Lee",
                "comment": "Will start by analyzing the current queries."
            }
        ],
        "startDate": "2024-12-02",
        "timelineEndDate": "2024-12-10",
        "status": "in progress"
    },
    {
        "id": 3,
        "title": "Finalize UI/UX Design",
        "description": "Get approval on the final UI/UX design for the dashboard.",
        "members": [
            {
                "name": "Diana Prince",
                "image": "https://randomuser.me/api/portraits/women/3.jpg"
            },
            {
                "name": "Bruce Wayne",
                "image": "https://randomuser.me/api/portraits/men/3.jpg"
            }
        ],
        "comments": [
            {
                "name": "Diana Prince",
                "comment": "The client suggested a few changes in the login screen."
            },
            {
                "name": "Bruce Wayne",
                "comment": "Noted. Will make those changes by tomorrow."
            }
        ],
        "startDate": "2024-11-29",
        "timelineEndDate": "2024-12-05",
        "status": "completed"
    }
]

const Schedule = () => {
    let thStyle = " py-2 px-4 text-left text-sm font-normal text-nowrap text-[#030229]"
    const tasksType = [{ id: 1, name: "All" }, { id: 2, name: "Completed" }, { id: 2, name: "Pending" }]
    const [taskModel, setTaskModel] = useState(false)
    const [selectedTask, setSelectedTask] = useState(tasksType[0]);
    const handleChange = (event) => { const selected = tasksType.find(company => company.name === event.target.value); setSelectedTask(selected); };
    const [taskInfo, setTaskInfo] = useState({ title: "", description: "", members: [], comments: [], startDate: "", timelineEndDate: "", status: "pending", });
    const [memberData, setMemberData] = useState([
        { id: 1, name: "Alice Johnson", image: "https://randomuser.me/api/portraits/women/1.jpg" },
        { id: 2, name: "Bob Smith", image: "https://randomuser.me/api/portraits/men/1.jpg" },
        { id: 3, name: "Charlie Lee", image: "https://randomuser.me/api/portraits/men/2.jpg" },
    ]);


    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setTaskInfo({ ...taskInfo, [name]: value });
    };

    const handleMemberSelection = (member) => {
        setTaskInfo((prevState) => ({ ...prevState, members: prevState.members.includes(member) ? prevState.members.filter((m) => m !== member) : [...prevState.members, member], }));
    };


    const handleSubmit = () => {
        console.log("Task Info Submitted:", taskInfo);
        setTaskModel(false);
    };

    return (
        <div>
            {/* HEADER  */}

            <div className='flex justify-between items-center flex-wrap'>

                <select onChange={handleChange} className="bg-[#e5e7ea] p-2 rounded-md outline-none text-sm appearance-none  truncate cursor-pointer">
                    {tasksType.map((company, index) => (<option key={index} value={company.name}> {company.name}</option>))}
                </select>

                <div className='flex items-center gap-x-4'>

                    <div className='bg-[#fff] border rounded-md py-2 px-3 flex items-center justify-between w-fit sm:w-[16rem] mt-2 '>
                        <input type="text" placeholder='Search' className='w-[100%] sm:w-[12rem] rounded-md mr-3 outline-none border-none bg-transparent' />
                        <CiSearch />
                    </div>

                    <div onClick={() => setTaskModel(true)} title='Add and Assign New Task' className='flex justify-center items-center bg-[#eff2f7] rounded-md w-[6rem] py-2 px-3  text-sm gap-x-2 cursor-pointer mt-2'>
                        <p className='text-sm'>Add Task</p>
                    </div>
                </div>





            </div>



            {/* TABLE */}
            <div className="rounded-md min-w-[100%] flex-1 mt-6 overflow-x-auto">
                <div className="overflow-x-auto w-full">
                    <table style={{ borderSpacing: "0 10px" }} className="min-w-[100%] border-separate ">
                        <thead>
                            <tr>
                                <th className={thStyle}>Task Id</th>
                                <th className={thStyle}>Title</th>
                                <th className={thStyle}>Description</th>
                                <th className={thStyle}>Total Members</th>
                                <th className={thStyle}>Member Details</th>
                                <th className={thStyle}>Start Date</th>
                                <th className={thStyle}>End Date</th>
                                <th className={thStyle}>Status</th>
                                <th className={thStyle}>Actions</th>

                            </tr>
                        </thead>
                        <tbody>
                            {taskData.map((i, index) => (
                                <tr style={{ borderRadius: "1rem" }} key={index} className="bg-white text-sm font-normal pb-4 h-[3rem]">
                                    <td className="py-2 px-4">{index + 1}</td>
                                    <td className="py-2 px-4 text-nowrap">{i.title}</td>
                                    <td className="py-2 px-4 max-w-[16rem] truncate ">{i.description}</td>
                                    <td className="py-2 px-4">{i?.members.length}</td>

                                    <td className={`py-2 px-4`}>
                                        <div className='flex items-center gap-x-1'> {i.members.length > 0 ? i.members.map((member) => (<div title={member.name} className='w-[1.4rem] h-[1.4rem] text-sm text-white flex justify-center items-center rounded-full bg-[#008000] cursor-pointer'>{member.name[0]}</div>)) : "-"}</div>
                                    </td>

                                    <td className="py-2 px-4 text-nowrap">{i?.startDate ? i?.startDate : "-"}</td>
                                    <td className="py-2 px-4 text-nowrap">{i?.timelineEndDate ? i?.timelineEndDate : "-"}</td>
                                    <td className="py-2 px-4 text-sm text-nowrap">
                                        <button className={`${i.status == "completed" ? "bg-[#4285F4]" : i.status == "pending" ? "bg-red-500" : "bg-green-500"} text-xs text-white px-2 rounded-[0.3rem] text-nowrap py-1`}>{i.status}</button>
                                    </td>


                                    <td className='py-2 px-4'>
                                        <div className='flex items-center gap-x-2'>
                                            <button className='bg-red-500 text-xs text-white px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Delete</button>
                                            <button onClick={() => setTaskModel(true)} className='bg-[#eff2f7] text-xs px-2 rounded-[0.3rem] text-nowrap h-[2rem]'>Edit</button>
                                        </div>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div>




            {
                taskModel && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out" onClick={() => setTaskModel(false)}>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            
                            <h2 className="text-lg font-medium mb-2">Create New Task</h2>

                            <div className="mb-2">
                                <label htmlFor="taskTitle" className="text-sm mb-2 block">Task Title</label>
                                <input type="text" id="taskTitle" name="title" value={taskInfo.title} onChange={handleInputChange} placeholder="Enter task title" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="taskDescription" className="text-sm mb-2 block">Task Description</label>
                                <textarea id="taskDescription" name="description" value={taskInfo.description} onChange={handleInputChange} placeholder="Enter task description" className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="members" className="text-sm mb-2 block">Assign Members</label>
                                <div className="space-y-2">
                                    {memberData.map((member) => (
                                        <div key={member.id} className="flex items-center justify-between">
                                            <label className="flex items-center">
                                                <input type="checkbox" value={member.name} checked={taskInfo.members.includes(member.name)} onChange={() => handleMemberSelection(member.name)}className="mr-2 text-sm"/>
                                                {member.name}
                                            </label>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="startDate" className="text-sm mb-2 block">Start Date</label>
                                <input type="date" id="startDate" name="startDate" value={taskInfo.startDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm"/>
                            </div>
                            <div className="mb-2">
                                <label htmlFor="timelineEndDate" className="text-sm mb-2 block"> End Date </label>
                                <input type="date" id="timelineEndDate" name="timelineEndDate" value={taskInfo.timelineEndDate} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm"/>
                            </div>

                            <div className="mb-2">
                                <label htmlFor="status" className="text-sm mb-2 block">Status</label>
                                <select id="status" name="status" value={taskInfo.status} onChange={handleInputChange} className="w-full px-3 py-2 border rounded-md focus:outline-none text-sm">
                                    <option value="pending">Pending</option>
                                    <option value="in progress">In Progress</option>
                                    <option value="completed">Completed</option>
                                </select>
                            </div>

                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 text-sm" onClick={() => setTaskModel(false)} >Cancel</button>
                                <button className="px-4 py-2 bg-[#EA580C] text-white rounded-md text-sm" onClick={handleSubmit}>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }


        </div>
    )
}

export default Schedule