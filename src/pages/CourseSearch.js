import { Link, useSearchParams } from 'react-router-dom';
import { COURSES } from '../db/courses-db';

  function CourseSearch() {
    const [searchParams, setSearchParams] = useSearchParams();

    let searchResults = [];

    // If user has entered search text, find the matches
    if (searchParams.get("course")) {
        searchResults = COURSES.filter(course => {
            const searchText = searchParams.get("course").toLocaleLowerCase();
            return course.name.toLocaleLowerCase().includes(searchText);
        })
    }

    return (
        <>
        <h1>Course Search</h1>
        <p>Here you can seach for specific courses. </p>
        <p>Notice how the URL changes as you type in the search box.</p>
        <input 
        type="search"
        placeholder='Search'
        value={searchParams.get("course") || ""}
        onChange={(e) => setSearchParams({ "course" : e.target.value})}
        />

        <ol>
            {searchResults.map(course => 
                <li key={course.id}>
                    <Link to={`/courses/${course.id}`}>
                        {course.name}
                    </Link>
                </li>)}
        </ol>
        </>
    );
  }

  export default CourseSearch;

  