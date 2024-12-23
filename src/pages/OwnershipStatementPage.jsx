import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import Footer from '../components/landingpage/Footer';
import { Helmet } from 'react-helmet';

const OwnershipStatementPage = () => {
    return (
        <>

            <Helmet>
                <title>Lead Dial - Ownership Statement</title>
                <meta name="description" content="Understand the ownership rights of Lead Dial, including intellectual property, trademarks, and copyrights for our AI-based solutions and services."/>
            </Helmet>


            <div className="px-4 sm:px-12">
                <Navbar />
            </div>

            <div className="px-4 sm:px-12 py-16 bg-gray-50">

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6">Ownership Statement</h1>
                    <p className="mb-4">
                        Welcome to <strong>Lead Dial</strong>. This Ownership Statement outlines the intellectual property rights and ownership of all materials, content, and services provided through our platform.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Intellectual Property</h2>
                    <p className="mb-4">
                        All content, features, and functionality available on the <strong>Lead Dial</strong> platform, including but not limited to:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Text, graphics, images, logos, icons, and designs.</li>
                        <li>Software, code, and technology used in the platform.</li>
                        <li>Trademarks, service marks, and trade names.</li>
                    </ul>
                    <p className="mb-4">
                        These are the sole property of <strong>Lead Dial</strong> or its licensors and are protected by applicable copyright, trademark, and intellectual property laws.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Use of Materials</h2>
                    <p className="mb-4">
                        You may not reproduce, distribute, modify, create derivative works of, publicly display, publicly perform, republish, download, store, or transmit any of the material on our platform without prior written permission from <strong>Lead Dial</strong>.
                    </p>
                    <p className="mb-4">
                        You may, however, use the platform and its materials for personal, non-commercial purposes as permitted by our <a href="/terms" className="text-blue-500 underline">Terms and Conditions</a>.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Third-Party Content</h2>
                    <p className="mb-4">
                        Any third-party content featured on <strong>Lead Dial</strong>, including but not limited to advertisements, partner integrations, or user-generated content, is the property of the respective owners. <strong>Lead Dial</strong> claims no ownership over such third-party content.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Violation of Ownership Rights</h2>
                    <p className="mb-4">
                        Unauthorized use of any materials or content on this platform may result in legal action. If you believe any content on the platform infringes your intellectual property rights, please contact us at{' '}
                        <a href="mailto:talhahaider074@gmail.com" className="text-blue-500 underline">
                            talhahaider074@gmail.com
                        </a>.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Changes to This Ownership Statement</h2>
                    <p className="mb-4">
                        <strong>Lead Dial</strong> reserves the right to update this Ownership Statement as necessary. Any changes will be reflected on this page and effective immediately upon posting.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
                    <p className="mb-4">
                        If you have any questions about this Ownership Statement, feel free to reach out at{' '}
                        <a href="mailto:talhahaider074@gmail.com" className="text-blue-500 underline">
                            talhahaider074@gmail.com
                        </a>.
                    </p>

                </div>
            </div>

            <div className='mt-[-4rem]'> <Footer /></div>
        </>
    );
};

export default OwnershipStatementPage;
