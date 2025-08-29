import React from 'react';

const CourseCard = ({ imageUrl, imageAlt, title1, title2, description, additionalInfo }) => {
    return (
        <div className="rounded-lg shadow-md overflow-hidden max-w-sm backgroundCardCourse flex flex-col">
            <img className="w-full h-48 object-cover" src={imageUrl} alt={imageAlt} />

            <div className="p-3 flex-1 flex flex-col">
                <div className="flex mb-2 gap-4">
                    <h3 className="font-semibold infoTitleCourse p-2 items-center">{title1}</h3>
                    <h3 className="text-md font-medium infoTitleCourse p-2 items-center">{title2}</h3>
                </div>

                <p className="text-white text-sm mb-3 flex-1">
                    {description}
                </p>
                <div className=" flex-1 flex flex-col pt-20">
                <p className="text-white text-xs mt-auto">
                    {additionalInfo}
                </p>
                </div>
            </div>
        </div>
    );
};

export default CourseCard;
