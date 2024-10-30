import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <>
  <h1>Course Navigation Home Page</h1>
  <p>
    Use the links in the navigation bar or in this page to find courses with open registration.
  </p>
  <p>
    This is a link to the <Link to="/courses">Courses</Link> with open registration.
  </p>
  </>
  );
}

export default HomePage;

