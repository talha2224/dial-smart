import React from 'react'

const SyncPopup = ({setIsModalOpen,isModalOpen,setListId,listId}) => {

    const closeModal = () => setIsModalOpen(false);

    return (

        <>

            {
                isModalOpen && (
                    <div className="fixed top-0 left-0 w-screen h-screen inset-0 bg-black bg-opacity-50 flex justify-center items-center transition-opacity duration-300 ease-in-out z-50" onClick={closeModal}>
                        <div className="bg-white rounded-lg shadow-lg p-6 w-[90%] max-w-md transform scale-95 opacity-0 animate-fade-in" onClick={(e) => e.stopPropagation()}>
                            <h2 className="text-lg font-medium mb-4">Enter Hubspot List ID</h2>
                            <input type="number" value={listId} onChange={(e) => setListId(e.target.value)} placeholder="List ID" className="w-full px-3 py-2 border rounded-md focus:outline-none" />
                            <div className="mt-4 flex justify-end">
                                <button className="px-4 py-2 bg-gray-300 rounded-md mr-2 text-sm" onClick={closeModal}>Cancel</button>
                                <button className="px-4 py-2 bg-[#EA580C] text-white rounded-md text-sm" onClick={() => { console.log('List ID:', listId); closeModal(); }}>Submit</button>
                            </div>
                        </div>
                    </div>
                )
            }

        </>
    )
}

export default SyncPopup