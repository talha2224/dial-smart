import React from 'react'

const Pricing = () => {
    return (
        <div id='pricing' className='mt-[5rem] flex justify-center items-center flex-col'>

            <div className='flex justify-center items-center flex-col'>
                <h1 className='text-[1.3rem] lg:text-[1.6rem] font-semibold'>Choose the Right Plan for You</h1>
                <p className='text-[#454545] w-[100%] lg:w-[50%] text-start lg:text-center text-sm mt-4'>  Flexible pricing tailored to your needs. Whether you're a startup, a growing business, or an enterprise, we have the perfect plan to empower your call automation journey.</p>
            </div>

            <div className='flex justify-center lg:justify-start items-start mt-10 gap-x-8 flex-wrap'>
                {/* Basic Plan */}
                <div className="bg-white shadow-lg rounded-lg py-8 px-4 max-w-[21rem] min-w-[21rem] border-2 border-gray-300 mt-3 h-[38rem] relative">
                    <h3 className="text-xl font-semibold mb-4 text-center">Basic Plan</h3>
                    <p className="text-gray-600 text-center mb-6">
                        Ideal for individuals or startups looking to automate simple call workflows with essential features.
                    </p>
                    <p className="text-4xl font-bold text-center mb-6">$0.20<span className="text-lg">/minute</span></p>
                    <ul className="text-gray-600 space-y-2 mb-6">
                        <li>✅ 5 free call minutes for new users</li>
                        <li>✅ Basic call analytics</li>
                        <li>✅ Add 1 company and 1 user</li>
                        <li>✅ Single-language support</li>
                        <li>✅ Basic voice customization</li>
                        <li>❌ Less transcript customization</li>
                        <li>❌ Limited integrations</li>
                    </ul>
                    <button className="bg-[#EA580C] text-white py-2 px-4 rounded-md w-[90%] absolute bottom-4">Get Started</button>
                </div>

                {/* Pro Plan */}
                <div className="bg-white shadow-lg rounded-lg py-8 px-4 max-w-80 min-w-[21rem] border-2 border-gray-300 mt-3 h-[38rem] relative">
                    <h3 className="text-xl font-semibold mb-4 text-center">Pro Plan</h3>
                    <p className="text-gray-600 text-center mb-6">Perfect for small businesses scaling customer engagement with advanced features.</p>
                    <p className="text-4xl font-bold text-center mb-6">$0.23<span className="text-lg">/minute</span></p>
                    <ul className="text-gray-600 space-y-2 mb-6">
                        <li>✅ 8 free call minutes for new users</li>
                        <li>✅ Advanced analytics</li>
                        <li>✅ Add up to 3 companies & users</li>
                        <li>✅ Up to 3 languages support</li>
                        <li>✅ Enhanced voice customization</li>
                        <li>✅ Customizable call transcripts</li>
                        <li>✅ Basic CRM integration</li>
                    </ul>
                    <button className="bg-[#EA580C] text-white py-2 px-4 rounded-md w-[90%] absolute bottom-4">Get Started</button>
                </div>

                {/* Enterprise Plan */}
                <div className="bg-white shadow-lg rounded-lg py-8 px-4 max-w-[21rem] min-w-[21rem] border-2 border-gray-300 mt-3 h-[38rem] relative">
                    <h3 className="text-xl font-semibold mb-4 text-center">Enterprise Plan</h3>
                    <p className="text-gray-600 text-center mb-6">
                        Designed for enterprises needing high-volume call automation, AI-driven workflows, and premium support.
                    </p>
                    <p className="text-4xl font-bold text-center mb-6">$0.25<span className="text-lg">/minute</span></p>
                    <ul className="text-gray-600 space-y-2 mb-6">
                        <li>✅ 10 free call minutes for new users</li>
                        <li>✅ Premium analytics with insights</li>
                        <li>✅ Unlimited companies and users</li>
                        <li>✅ Multi-language support</li>
                        <li>✅ AI-driven custom workflows</li>
                        <li>✅ Fully customizable transcripts</li>
                        <li>✅ Premium CRM integrations</li>
                        <li>✅ Dedicated account manager</li>
                    </ul>
                    <button className="bg-[#EA580C] text-white py-2 px-4 rounded-md w-[90%] absolute bottom-4">Get Started</button>
                </div>
            </div>




        </div>
    )
}

export default Pricing