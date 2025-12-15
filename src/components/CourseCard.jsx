import React from 'react';


const CourseCard = ({ title = "Sample Course Title", description = "...", instructor = "Expert Instructor", image }) => {
    return (
        <div className="bg-gray-800 rounded-xl overflow-hidden shadow-2xl transition-all duration-300 
                    hover:shadow-eshiksha-orange/50 hover:border-2 hover:border-eshiksha-orange">
            <div className="h-48 overflow-hidden">
                <img 
                    src={image} // Uses the dynamic image prop
                    alt={title} 
                    className="w-full h-full object-cover" 
                />
            </div>

            <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{title}</h3>
                <p className="text-gray-400 mb-4 text-sm line-clamp-3">{description}</p>
                <div className="flex justify-between items-center text-sm">
                    <span className="text-eshiksha-orange font-medium">{instructor}</span>
                    <button className="bg-eshiksha-orange text-white px-4 py-1.5 rounded-full text-xs font-semibold hover:opacity-90 shadow-md shadow-eshiksha-orange/20">
                        Enroll Now
                    </button>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;