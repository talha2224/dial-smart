import React, { useState } from 'react'
import { Step, Stepper } from 'react-form-stepper';
import Logo from '../../assets/leadbot.png'
import { Link } from 'react-router-dom'

const StepperPage = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [companyDeatils, setCompanyDeatils] = useState({name: "",location: "",objective: "",description: "",goals: "",challenges: "",aiAssistance: "",toneStyle: "",language:"" });
    
    const inputStyle = 'w-[100%] h-[2.2rem] border border-[#DCDADB] bg-transparent text-black outline-none block rounded-md px-3 mt-2'
    const textAreaStyle = 'w-[100%] h-[15rem] border border-[#DCDADB] bg-transparent text-black outline-none block rounded-md p-3 mt-2'

    const handleNext = () => {
        setActiveStep((prevStep) => Math.min(prevStep + 1, 2));
    };

    const handleBack = () => {
        setActiveStep((prevStep) => Math.max(prevStep - 1, 0));
    };

    const handleSubmit =async()=>{

    }

    return (
        <div className='px-4 sm:px-12 py-7 w-screen h-screen'>

            <Link to={"/"} className='flex items-center gap-x-5 md:fixed top-2 left-3 w-[100%] px-3'>
                <img src={Logo} className='' />
                <p className='text-lg'>Dial Smart</p>
            </Link>

            <div className='flex justify-center items-center w-screen h-[95vh] md:mt-0 mt-6'>

                <div className='shadow-navShadow rounded-md p-5'>

                    <h1 className="text-[1.1rem] font-medium">Hi Annie 👋, Welcome to Dial Smart!</h1>
                    <h1 className="text-[1.1rem] font-medium">We need some basic information to get started.</h1>
                    <Stepper activeStep={activeStep} className='sm:w-[32rem]' styleConfig={{ activeBgColor: 'red', activeTextColor: '#fff', completedBgColor: '#008000', completedTextColor: '#fff', inactiveBgColor: '#E0E0E0', inactiveTextColor: '#757575', size: '2em', }} connectorStyleConfig={{ activeColor: '#008000', completedColor: '#8BC34A', disabledColor: '#E0E0E0', size: 2, }}>
                        <Step label="Business Details" />
                        <Step label="Operational Details" />
                        <Step label="Goals & Preferences" />
                    </Stepper>

                    {/*FIRST STEP*/}

                    {activeStep === 0 && (
                        <div className='mt-3'>
                            <p className="text-sm">Business Name</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="name" placeholder='LeadBot' className={inputStyle} />

                            <p className="text-sm mt-3">Business Location</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="location" placeholder='Australia' className={inputStyle} />

                            <p className="text-sm mt-3">Business Objectives</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="objective" placeholder='Increase sales' className={inputStyle} />

                            <p className="text-sm mt-3">Preffered Calling Lanuguage</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="language" placeholder='Spanish' className={inputStyle} />
                        </div>
                    )}

                    {/* SECOND STEP  */}

                    {activeStep === 1 && (
                        <div className='mt-3'>
                            <p className="text-sm mt-3">Business Description</p>
                            <textarea onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} name="description" placeholder='Describe your business' className={textAreaStyle} />
                        </div>
                    )}

                    {/* THIRD STEP  */}

                    {activeStep === 2 && (
                        <div className='mt-3'>
                            <p className="text-sm mt-3">What are your primary business goals?</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="goals" placeholder='Increase leads, Improve customer service' className={inputStyle} />

                            <p className="text-sm mt-3">What are the key challenges you're currently facing?</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="challenges" placeholder='Managing high call volume' className={inputStyle} />

                            <p className="text-sm mt-3">How would you like the AI assistant to assist you?</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="aiAssistance" placeholder='Answer customer inquiries, Schedule calls' className={inputStyle} />

                            <p className="text-sm mt-3">What tone and style would you prefer the AI to use during calls?</p>
                            <input onChange={(e) => { setCompanyDeatils({ ...companyDeatils, [e.target.name]: e.target.value }) }} type="text" name="toneStyle" placeholder='Friendly, Professional' className={inputStyle} />
                        </div>
                    )}

                    {/* STEPPER BUTTONS  */}
                    <div className='flex justify-end items-end mt-3 gap-x-4'>
                        <button className="bg-gray-300 px-4 py-2 rounded" onClick={handleBack} disabled={activeStep === 0}>Back</button>
                        {
                            activeStep!==2 ?
                            <button className="bg-[#EA580C] text-white px-4 py-2 rounded" onClick={handleNext} disabled={activeStep === 2}>Next</button>:
                            <button className="bg-[#EA580C] text-white px-4 py-2 rounded" onClick={handleSubmit}>Submit</button>

                        }
                    </div>

                </div>

            </div>

        </div>
    )
}

export default StepperPage;
