import React from 'react';
const About = () => (
    <main className="bg-eshiksha-dark  text-white">
        <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20">
            <h1 className=" text-4xl sm:text-5xl font-extrabold  mb-4 text-eshiksha-orange text-center">About e-Shiksha</h1>
            <p className="text-lg text-gray-400 max-w-4xl mx-auto text-center mb-10">
                e-Shiksha is dedicated to building the future of online education. Our mission is to provide accessible, affordable, and high-quality learning resources to professionals worldwide.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center mt-12">
                <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-3">Our Mission</h3>
                    <p className="text-gray-400">To democratize knowledge by connecting learners with the world's best instructors and real-world projects.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-3">Our Vision</h3>
                    <p className="text-gray-400">To be the global leader in technical and professional skill development.</p>
                </div>
                <div className="p-6 bg-gray-800 rounded-xl shadow-xl border border-gray-700">
                    <h3 className="text-2xl font-bold text-white mb-3">Our Values</h3>
                    <p className="text-gray-400">Excellence, Accessibility, and Community-driven Learning.</p>
                </div>
            </div>
        </section>
    </main>
);
export default About;