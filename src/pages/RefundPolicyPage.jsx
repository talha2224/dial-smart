import React from 'react';
import Navbar from '../components/landingpage/Navbar';
import Footer from '../components/landingpage/Footer';
import { Helmet } from 'react-helmet';

const RefundPolicyPage = () => {
    return (
        <>

            <Helmet>
                <title>Lead Dial - Refund Policy</title>
                <meta name="description" content="Learn about Lead Dial's refund policy, including eligibility criteria, refund process, and terms for AI-based solutions and services."/>
            </Helmet>

            <div className="px-4 sm:px-12">
                <Navbar />
            </div>

            <div className="px-4 sm:px-12 py-16 bg-gray-50">

                <div className="max-w-4xl mx-auto">
                    <h1 className="text-3xl font-bold text-center mb-6">Cancellation/Return/Refund Policy</h1>
                    <p className="mb-4">
                        Welcome to <strong>Lead Dial</strong>. We value our customers and aim to provide transparent and fair policies regarding cancellations, returns, and refunds. Please review the details below to understand how these situations are handled.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Cancellation Policy</h2>
                    <p className="mb-4">
                        Users can cancel their subscription or services under the following terms:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Cancellations must be made through your account settings or by contacting our support team at least 7 days before the next billing cycle.</li>
                        <li>Once a subscription is canceled, you will continue to have access until the end of the current billing period.</li>
                        <li>No partial refunds are provided for mid-cycle cancellations.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Return Policy</h2>
                    <p className="mb-4">
                        As <strong>Lead Dial</strong> is a digital SaaS product, there are no physical goods to return. However, if you encounter any issues with the service, please contact our support team for assistance.
                    </p>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Refund Policy</h2>
                    <p className="mb-4">
                        Refunds are handled on a case-by-case basis under the following guidelines:
                    </p>
                    <ul className="list-disc pl-6 mb-4">
                        <li>Refunds may be issued if the service is not accessible due to issues caused by <strong>Lead Dial</strong> and cannot be resolved within 7 business days.</li>
                        <li>No refunds are provided for user errors, such as incorrect subscription selections or failure to cancel before the renewal date.</li>
                        <li>If a refund is approved, it will be processed within 14 business days.</li>
                    </ul>

                    <h2 className="text-2xl font-semibold mt-6 mb-4">Contact Us</h2>
                    <p className="mb-4">
                        For any questions or concerns regarding cancellations, returns, or refunds, please contact us at{' '}
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

export default RefundPolicyPage;
