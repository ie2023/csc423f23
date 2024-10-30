
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import './App.css';

import HomePage          from './pages/HomePage'
import Courses          from './pages/Courses'
import NotFound404       from './pages/NotFound404'
import About             from './pages/About'
import Contact           from './pages/Contact'
import RootLayout        from "./pages/Root";
import CourseDetailPage from "./pages/CourseDetail";
import CourseSearch     from "./pages/CourseSearch";

const router = createBrowserRouter([
   { path: '/',
     element: <RootLayout />,
     errorElement: <NotFound404 />,
     children: [
      { path : '/', element: <HomePage />},
      { path : '/courses' , element: <Courses />},
      { path : '/search',    element: <CourseSearch />},
      { path : '/about',     element: <About />},
      { path : '/contact',   element: <Contact />},
      { path : '*',          element: <NotFound404 />},
      { path : '/courses/:courseID', element: <CourseDetailPage />}
     ]
    }
   
]);

function App() {
  return (
    <>
    <RouterProvider router={router} />
    
    </>
  );
}

// function NavBar() {
//   return (
//     <nav>
//       <ul>
//         <li>
//           <Link to="/">HomePage</Link>
//         </li>
//         <li>
//           <Link to="/products">Courses</Link>
//         </li>
//         <li>
//           <Link to="/about">About</Link>
//         </li>
//       </ul>
//     </nav>
//   );
// }

// function Home() {
//   return <h1>Home</h1>;
// }

// function Course() {
//   return <h1>Course</h1>;
// }

// function About() {
//   return <h1>About</h1>;
// }

// function NotFound() {
//   return <h1>Not Found</h1>;
// }

export default App;
