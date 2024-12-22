import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import Footer from '../components/landingpage/Footer';

const Policy = () => {
    return (
        <>
            <div className='px-4 sm:px-12'>
                <Navbar />
            </div>


            <div className="px-4 sm:px-12 py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">Privacy Policy</h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">Welcome to <span className="font-semibold text-gray-800">Lead Dial</span>, your trusted AI-based solution for sales, lead generation, and customer support. We value your privacy and are committed to protecting your personal and business data. This Privacy Policy outlines how we collect, use, and safeguard your information.</p>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Information We Collect</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Account details: Name, email address, and password.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>HubSpot Integration: Contacts information (manually added or imported).</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Call interactions: AI-generated transcripts, call analytics, and performance data.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Usage data: Information about how you use our platform, including interaction logs.</p>
                            </li>
                        </ul>
                    </section>

                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">How We Use Your Information</h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Provide and enhance our services, such as AI-generated transcripts and call insights.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Enable seamless integration with tools like HubSpot and manual data imports.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Analyze call performance to help you improve customer interactions.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Facilitate team collaboration through shared access and chat functionalities.</p>
                            </li>
                        </ul>
                    </section>

                    {/* Section: Data Protection */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Data Protection</h2>
                        <p className="text-gray-600 leading-relaxed">We employ robust security measures to protect your data from unauthorized access, disclosure, or alteration. All sensitive data is encrypted and stored securely.</p>
                    </section>

                    {/* Section: Third-Party Integrations */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Third-Party Integrations</h2>
                        <p className="text-gray-600 leading-relaxed">Lead Dial integrates with third-party tools such as HubSpot. While we facilitate these connections, we recommend reviewing their privacy policies to understand how they handle your data.</p>
                    </section>

                    {/* Section: User Rights */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Your Rights</h2>
                        <p className="text-gray-600 leading-relaxed">As a user, you have the right to access, modify, or delete your data. For assistance, please contact our support team.</p>
                    </section>

                    {/* Section: Policy Updates */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">Changes to This Policy</h2>
                        <p className="text-gray-600 leading-relaxed">We may update this Privacy Policy from time to time. Please review it periodically to stay informed about how we are protecting your information.</p>
                    </section>

                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions or concerns regarding this policy, feel free to reach out to us at
                        <a href="mailto:talhahaider074@gmail.com" className="text-blue-500 underline ml-1">talhahaider074@gmail.com</a>.
                    </p>
                </div>
            </div>


            <div className='mt-[-4rem]'> <Footer /></div>

           
        </>
    );
};

export default Policy;
