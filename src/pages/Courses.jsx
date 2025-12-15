import React from 'react';
import CourseCard from '../components/CourseCard';


import courseImage1 from '../assets/c1.jpg'; 
import courseImage2 from '../assets/c2.jpg';
import courseImage3 from '../assets/c3.jpg'; 
import courseImage4 from '../assets/c4.jpg';
import courseImage5 from '../assets/c5.jpg';
import courseImage6 from '../assets/c6.jpg';
import courseImage7 from '../assets/c7.jpg';
import courseImage8 from '../assets/c8.jpg';


const courseImages = [
    courseImage1, courseImage2, courseImage3, courseImage4, 
    courseImage5, courseImage6, courseImage7, courseImage8
];


const fullCoursesData = [
    // Assigned specific instructor names
    { id: 1, title: 'Mastering React & Redux', description: 'Deep dive into modern React development, state management with Redux, and hooks for high performance.', instructor: 'Rohan kale' },
    { id: 2, title: 'Complete Tailwind CSS Guide', description: 'Learn utility-first CSS framework and build responsive, beautiful websites quickly.', instructor: 'parth kadam' },
    { id: 3, title: 'Advanced JavaScript Concepts', description: 'Explore async/await, promises, closures, and ES6+ features for professional development.', instructor: 'Amit gaikawad' },
    { id: 4, title: 'Web Development Fundamentals', description: 'Get started with HTML5, CSS3, and basic JavaScript to build your first website.', instructor: 'kunal kale' },
    { id: 5, title: 'Python for Data Science', description: 'A comprehensive guide to using Python libraries like Pandas and NumPy for data analysis.', instructor: 'saurabh deodhe' },
    { id: 6, title: 'Cloud Computing with AWS', description: 'Learn the fundamentals of AWS architecture, EC2, S3, and serverless computing.', instructor: 'salman khan' },
    { id: 7, title: 'UX/UI Design Principles', description: 'Master the art of creating intuitive and beautiful user experiences with Figma.', instructor: 'vivek oberoi' },
    { id: 8, title: 'Financial Modeling in Excel', description: 'Build robust financial models and valuations using advanced Excel techniques.', instructor: 'sanjay datta' },
];

const Courses = () => {
    return (
        <main className="bg-eshiksha-dark text-white">
            <section className="container mx-auto px-4 sm:px-6 lg:px-8 py-20"> 
                <h1 className="text-4xl sm:text-5xl font-extrabold text-center mb-4 text-white">
                    Our Full <span className="text-eshiksha-orange">Course Catalog</span>
                </h1>
                <p className="text-lg text-gray-400 text-center max-w-3xl mx-auto mb-16"> 
                    Browse hundreds of courses taught by industry experts, covering the latest technologies and skills.
                </p>

                {/* Course Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10"> {/* Increased gap for spacing */}
                    {fullCoursesData.map((course, index) => (
                        <CourseCard 
                            key={course.id} 
                            // CRITICAL: Passing all props separately to ensure 'instructor' override works
                            title={course.title}
                            description={course.description}
                            image={courseImages[index]} 
                            instructor={course.instructor} // Uses the specific Indian name defined above
                        />
                    ))}
                </div>
            </section>
        </main>
    );
};

export default Courses;