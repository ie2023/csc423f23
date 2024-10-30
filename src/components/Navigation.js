import {  Link } from "react-router-dom";
import classes from './Navigation.module.css';

function Navigation() {
    return (
      <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/courses">Courses</Link>
          </li>
          <li>
            <Link to='/search'>Course Search</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to='/contact'>Contact</Link>
          </li>
          
        </ul>
      </nav>
      </header>
    );
  }

  export default Navigation;