import { useParams } from 'react-router-dom';
import { COURSES }   from '../db/courses-db';



function CourseDetailPage() {
    const { courseID } = useParams();
    const course = COURSES.find(course => course.id == courseID);

    return (
        <>
        <h1>Course Details:</h1>
        <p>Name: {course.name}</p>
        <p>Description: {course.desc}</p>
        </>
    );
}

export default CourseDetailPage;


