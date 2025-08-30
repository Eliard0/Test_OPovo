import React from 'react';

const CourseCard = ({ imageUrl, imageAlt, title1, title2, description, additionalInfo }) => {
    return (
        <div className="w-full rounded-lg shadow-md overflow-hidden max-w-sm backgroundCardCourse flex flex-col h-full">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={imageAlt} />

            <div className="p-3 flex flex-col flex-1">
                <div className="flex mb-2 gap-2 flex-wrap">
                    <h3 className="font-semibold infoTitleCourse">{title1}</h3>
                    <h3 className="text-md font-medium infoTitleCourse">{title2}</h3>
                </div>

                <p className="text-white text-sm flex-1">
                    {description}
                </p>

                <p className="text-white text-xs mt-auto pt-16">
                    {additionalInfo}
                </p>
            </div>
        </div>
    );
};

export default CourseCard;