import React from 'react';
import { IoCheckmarkCircle } from 'react-icons/io5';

const Pricing = () => {
    const pricingPlans = [
        { name: 'Basic Access', price: 'Free', features: ['All Core Courses', 'Course Q&A', 'Community Access'], isPopular: false },
        { name: 'Pro Developer', price: '₹29/mo', features: ['Everything in Basic', 'Exclusive Pro Batches', 'Downloadable Resources', 'Priority Support'], isPopular: true },
        { name: 'Enterprise', price: 'Contact Us', features: ['All Pro Features', 'Team Management Dashboard', 'Custom Batches', 'Dedicated Account Manager'], isPopular: false },
    ];

    return (
        <main className="bg-eshiksha-dark text-white">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
                <h1 className="text-4xl sm:text-5xl font-extrabold mb-4 text-white">
                    Simple, Transparent <span className="text-eshiksha-orange">Pricing</span>
                </h1>
                <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-16">
                    Choose the plan that fits your learning style and career goals.
                </p>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                    {pricingPlans.map((plan) => (
                        <div 
                            key={plan.name}
                            className={`p-8 rounded-xl shadow-2xl transition-all duration-300 ${
                                plan.isPopular 
                                    ? 'bg-gray-700 border-4 border-eshiksha-orange transform scale-[1.03] shadow-eshiksha-orange/50' 
                                    : 'bg-gray-800 border-2 border-gray-700 hover:border-eshiksha-orange'
                            }`}
                        >
                            <h2 className="text-2xl font-bold mb-2 text-white">{plan.name}</h2>
                            {plan.isPopular && <p className="text-sm text-eshiksha-orange font-semibold mb-4">Most Popular</p>}
                            <p className="text-5xl font-extrabold mb-6 text-white">
                                {plan.price === 'Contact Us' ? (
                                    <span className="text-3xl mt-4">Contact Us</span>
                                ) : (
                                    <>
                                        {plan.price}
                                        {plan.price.includes('/mo') && <span className="text-lg font-normal text-gray-400"> / month</span>}
                                    </>
                                )}
                            </p>
                            
                            <ul className="space-y-3 text-left mb-8">
                                {plan.features.map((feature, index) => (
                                    <li key={index} className="flex items-start text-gray-300">
                                        <IoCheckmarkCircle className="text-eshiksha-orange text-xl mr-2 flex-shrink-0 mt-1" />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`w-full py-3 rounded-lg font-semibold transition-colors shadow-lg ${
                                plan.isPopular 
                                    ? 'bg-eshiksha-orange text-white hover:opacity-90 shadow-eshiksha-orange/30' 
                                    : 'border-2 border-white text-white hover:bg-white hover:text-eshiksha-dark'
                            }`}>
                                {plan.price === 'Free' ? 'Get Started' : plan.price === 'Contact Us' ? 'Request Demo' : 'Choose Plan'}
                            </button>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Pricing;