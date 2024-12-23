import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import Footer from '../components/landingpage/Footer';
import { Helmet } from 'react-helmet';

const Terms = () => {
    return (
        <>

            <Helmet>
                <title>Lead Dial - Terms and Conditions</title>
                <meta name="description" content="Explore Lead Dial's terms and conditions to understand the rules and guidelines for using our AI-based solutions for sales, lead generation, and customer support."/>
            </Helmet>
            {/* Navbar Section */}
            <div className='px-4 sm:px-12'>
                <Navbar />
            </div>

            {/* Terms Content */}
            <div className="px-4 sm:px-12 py-16 bg-gray-50">
                <div className="max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold text-center mb-8 text-gray-800">
                        Terms and Conditions
                    </h1>
                    <p className="text-lg text-gray-600 leading-relaxed mb-6">
                        Welcome to <span className="font-semibold text-gray-800">Lead Dial</span>. These Terms and Conditions govern your use of our platform,
                        including all associated services and features. By accessing or using our services, you agree to comply with these terms.
                    </p>

                    {/* Section: User Obligations */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            User Obligations
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Provide accurate and up-to-date information during registration and use.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Maintain the confidentiality of your account credentials and notify us of unauthorized use.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Use the platform in compliance with all applicable laws and regulations.</p>
                            </li>
                        </ul>
                    </section>

                    {/* Section: Prohibited Activities */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Prohibited Activities
                        </h2>
                        <ul className="space-y-3 text-gray-600">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Engaging in unauthorized access, hacking, or tampering with the platform.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Using the platform to distribute harmful or malicious software.</p>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-500 font-semibold">•</span>
                                <p>Uploading or sharing unlawful, offensive, or infringing content.</p>
                            </li>
                        </ul>
                    </section>

                    {/* Section: Intellectual Property */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Intellectual Property
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            All content, trademarks, logos, and materials available on Lead Dial are the intellectual property of Lead Dial or its licensors.
                            You may not reproduce, distribute, or create derivative works without prior authorization.
                        </p>
                    </section>

                    {/* Section: Limitation of Liability */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Limitation of Liability
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            Lead Dial and its affiliates are not liable for any indirect, incidental, or consequential damages arising from your use of the platform.
                            Our liability is limited to the maximum extent permitted by applicable law.
                        </p>
                    </section>

                    {/* Section: Termination */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Termination
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            We reserve the right to suspend or terminate your access to the platform if you violate these terms. Termination does not waive any
                            accrued rights or liabilities.
                        </p>
                    </section>

                    {/* Section: Governing Law */}
                    <section className="mb-10">
                        <h2 className="text-2xl font-bold text-gray-800 mb-4">
                            Governing Law
                        </h2>
                        <p className="text-gray-600 leading-relaxed">
                            These Terms and Conditions are governed by the laws of Delaware. Any disputes arising under these terms will be resolved in
                            accordance with these laws.
                        </p>
                    </section>

                    <p className="text-gray-600 leading-relaxed">
                        If you have any questions or concerns about these terms, feel free to reach out to us at
                        <a href="mailto:talhahaider074@gmail.com" className="text-blue-500 underline ml-1">talhahaider074@gmail.com</a>.
                    </p>
                </div>
            </div>

            {/* Footer Section */}
            <div className='mt-[-4rem]'> <Footer /></div>
        </>
    );
};

export default Terms;
