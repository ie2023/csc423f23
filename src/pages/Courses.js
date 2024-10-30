import { Link }    from 'react-router-dom';
import { COURSES } from '../db/courses-db';


function Courses() {
    return (
    <>
    <h1>Courses with Open Registration</h1>
    <p>Here you can browse the courses with open registration</p>
    <ul>
      {COURSES.map((course) => (
        <li key={course.id}>
          <Link to={`/courses/${course.id}`}>{course.name}</Link>
        </li>
        ))}

    </ul>
    </>
    );
  }
  
  export default Courses;

  