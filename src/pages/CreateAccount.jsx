import React from 'react';
import { Link } from 'react-router-dom';
import { IoMailOutline, IoLockClosedOutline, IoPersonOutline } from 'react-icons/io5';

const CreateAccount = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-eshiksha-dark text-white p-4">
            <div className="w-full max-w-md bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl border-4 border-eshiksha-orange">
                <h1 className="text-3xl font-bold text-center text-eshiksha-orange mb-2">
                    Start Learning Today
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Create your free e-Shiksha account in seconds.
                </p>

                <form className="space-y-6">
                    {/* Name Input */}
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                            Full Name
                        </label>
                        <div className="relative">
                            <IoPersonOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                id="name"
                                name="name"
                                placeholder="John Doe"
                                required
                                className="w-full p-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white"
                            />
                        </div>
                    </div>

                    {/* Email Input */}
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                            Email Address
                        </label>
                        <div className="relative">
                            <IoMailOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="email"
                                id="email"
                                name="email"
                                placeholder="name@example.com"
                                required
                                className="w-full p-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white"
                            />
                        </div>
                    </div>

                    {/* Password Input */}
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                            Choose Password
                        </label>
                        <div className="relative">
                            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="Minimum 8 characters"
                                required
                                className="w-full p-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white"
                            />
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-eshiksha-orange text-white p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4 shadow-lg shadow-eshiksha-orange/30"
                    >
                        Create My Account
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-gray-400">
                    Already have an account?{' '}
                    <Link to="/signin" className="text-eshiksha-orange font-semibold hover:underline">
                        Sign In
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default CreateAccount;