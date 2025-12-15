import React from 'react';
import { Link } from 'react-router-dom';
import { IoMailOutline, IoLockClosedOutline } from 'react-icons/io5';

const SignIn = () => {
    return (
        <main className="min-h-screen flex items-center justify-center bg-eshiksha-dark text-white p-4">
            <div className="w-full max-w-md bg-gray-800 p-8 sm:p-10 rounded-xl shadow-2xl border-t-4 border-eshiksha-orange">
                <h1 className="text-3xl font-bold text-center text-eshiksha-orange mb-2">
                    Welcome Back!
                </h1>
                <p className="text-center text-gray-400 mb-8">
                    Sign in to continue your learning journey.
                </p>

                <form className="space-y-6">
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
                            Password
                        </label>
                        <div className="relative">
                            <IoLockClosedOutline className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="password"
                                id="password"
                                name="password"
                                placeholder="********"
                                required
                                className="w-full p-3 pl-10 bg-gray-700 border border-gray-600 rounded-lg focus:ring-2 focus:ring-eshiksha-orange focus:border-eshiksha-orange text-white"
                            />
                        </div>
                        <div className="text-right mt-2">
                            <Link to="#" className="text-sm text-eshiksha-orange hover:underline">
                                Forgot Password?
                            </Link>
                        </div>
                    </div>

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full bg-eshiksha-orange text-white p-3 rounded-lg font-semibold hover:opacity-90 transition-opacity mt-4 shadow-lg shadow-eshiksha-orange/30"
                    >
                        Sign In
                    </button>
                </form>

                <div className="text-center mt-6 text-sm text-gray-400">
                    Don't have an account?{' '}
                    <Link to="/create-account" className="text-eshiksha-orange font-semibold hover:underline">
                        Create an Account
                    </Link>
                </div>
            </div>
        </main>
    );
};

export default SignIn;