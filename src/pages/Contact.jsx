import React from 'react';
import { IoMailOutline, IoLocationOutline, IoCallOutline } from 'react-icons/io5';

const Contact = () => {
    return (
        <main className="bg-eshiksha-dark text-white">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-white">
                    Get in <span className="text-eshiksha-orange">Touch</span>
                </h1>
                <p className="text-lg text-gray-400 text-center max-w-2xl mx-auto mb-12">
                    Have questions about courses, partnerships, or support? We're here to help.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <div className="bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700">
                        <h2 className="text-2xl font-bold mb-6 text-white">Send Us a Message</h2>
                        <form className="space-y-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">Name</label>
                                <input type="text" id="name" name="name" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white" />
                            </div>
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">Email</label>
                                <input type="email" id="email" name="email" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white" />
                            </div>
                            <div>
                                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">Message</label>
                                <textarea id="message" name="message" rows="4" className="w-full p-3 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white"></textarea>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-eshiksha-orange text-white p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity shadow-lg shadow-eshiksha-orange/30"
                            >
                                Submit Inquiry
                            </button>
                        </form>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-8 bg-gray-800 p-8 rounded-xl shadow-2xl border border-gray-700 lg:mt-0 mt-12">
                        <h2 className="text-2xl font-bold mb-6 text-white">Our Details</h2>
                        <div className="flex items-start space-x-4">
                            <IoLocationOutline className="text-eshiksha-orange text-3xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Office Location</h3>
                                <p className="text-gray-400">koliwada , mubai pin-12344</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <IoMailOutline className="text-eshiksha-orange text-3xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Email Support</h3>
                                <p className="text-gray-400 hover:text-eshiksha-orange transition-colors">elon.musk@123.com</p>
                            </div>
                        </div>
                        <div className="flex items-start space-x-4">
                            <IoCallOutline className="text-eshiksha-orange text-3xl flex-shrink-0 mt-1" />
                            <div>
                                <h3 className="text-lg font-semibold text-white">Phone (General Inquiries)</h3>
                                <p className="text-gray-400 hover:text-eshiksha-orange transition-colors">+91 23432 23696</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Contact;