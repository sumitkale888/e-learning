import React from 'react';
import CourseCard from '../components/CourseCard';


import courseImage1 from '../assets/course1.jpg'; 
import courseImage2 from '../assets/course2.jpg';
import courseImage3 from '../assets/course3.jpg'; 
import courseImage4 from '../assets/course4.jpg'; 

import video1 from '../assets/video1.mp4'; 
import video2 from '../assets/video2.mp4';


const coursesData = [
    { 
        id: 1, 
        title: 'Mastering React ', 
        description: 'Deep dive into modern React development, state management with Redux, and hooks for high performance.', 
        instructor: 'Sumit kale',
        image: courseImage1 
    },
    { 
        id: 2, 
        title: 'Complete Tailwind CSS Guide', 
        description: 'Learn utility-first CSS framework and build responsive, beautiful websites quickly.', 
        instructor: 'Raam kadu',
        image: courseImage2 
    },
    { 
        id: 3, 
        title: 'Advanced JavaScript Concepts', 
        description: 'Explore async/await, promises, closures, and ES6+ features for professional development.', 
        instructor: 'Om Kadam',
        image: courseImage3 
    },
    { 
        id: 4, 
        title: 'Web Development Fundamentals', 
        description: 'Get started with HTML5, CSS3, and basic JavaScript to build your first website.', 
        instructor: 'Pushkar datkadhe',
         image: courseImage4

    },
];

const Home = () => {
    return (
        <main className="bg-eshiksha-dark text-white">
            
            {/* Hero Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-28 text-center">
                <h1 className="text-4xl sm:text-5xl lg:text-7xl font-extrabold mb-4 leading-tight">
                    Virtual <span className="text-eshiksha-orange">Skills</span> for <span className="text-white">Everyone</span>
                </h1>
                <p className="text-lg sm:text-xl text-gray-400 max-w-3xl mx-auto mb-16"> 
                    Your path to professional development and mastery starts here. Transform your career with e-Shiksha's cutting-edge courses.
                </p>
                
                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6 mb-24"> 
                    <button className="bg-eshiksha-orange text-white px-8 py-3 rounded-lg text-lg font-semibold hover:opacity-90 transition-opacity shadow-xl shadow-eshiksha-orange/40">
                        Start for Free
                    </button>
                    <button className="border-2 border-white text-white px-8 py-3 rounded-lg text-lg font-semibold hover:bg-white hover:text-eshiksha-dark transition-colors">
                        View Documentation
                    </button>
                </div>

             
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 max-w-4xl mx-auto">
                    
                    {/* Video Container 1 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96 border-2 border-eshiksha-orange/50">
                        <video
                            className="w-full h-full object-cover" 
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            src={video2}
                            title="Course Introduction Video"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>

                    {/* Video Container 2 */}
                    <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl h-64 sm:h-80 lg:h-96 border-2 border-eshiksha-orange/50">
                        <video
                            className="w-full h-full object-cover"
                            autoPlay 
                            loop 
                            muted 
                            playsInline
                            src={video1}
                            title="Student Success Story"
                        >
                            Your browser does not support the video tag.
                        </video>
                    </div>
                </div>
                
                
                <div className=""></div> 
            </section>

            {/* Courses Section */}
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-15">
                <h2 className="text-3xl sm:text-4xl font-bold text-center mb-16 text-white">
                    Featured <span className="text-eshiksha-orange">Courses</span>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
                    {/* Maps the course data and dynamically passes the image path */}
                    {coursesData.map(course => (
                        <CourseCard 
                            key={course.id} 
                            title={course.title}
                            description={course.description}
                            instructor={course.instructor}
                            image={course.image} 
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Home;