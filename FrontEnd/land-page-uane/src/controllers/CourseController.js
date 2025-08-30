import { getCourses } from "../services/api";
import Course from "../models/Course";

export const fetchCourses = async () => {
    const coursesData = await getCourses();
    if(!coursesData) return null
    return coursesData.map(
        c => new Course(c.id, c.imageUrl, c.imageAlt, c.titleOne, c.titleTwo, c.description, c.additionalInfo)
    );
};
