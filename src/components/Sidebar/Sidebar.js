import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';

function Sidebar() {

    const location = useLocation();
  return (
    <>
      <nav  id="sidebar" class="nav sidebar flex-column text-start">
          <div class="links">
              <Link class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/updated-portfolio-react/'})} style={{ textDecoration: 'none' }} to="/updated-portfolio-react/">
          <span >
            <label>●</label>
            <b>Home</b>
          </span>
        </Link>
        <Link class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/updated-portfolio-react/about'})} style={{ textDecoration: 'none' }} to="/updated-portfolio-react/about">
          <span >
            <label>●</label>
            <b>About</b>
          </span>
        </Link>
        <Link class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/updated-portfolio-react/work'})} style={{ textDecoration: 'none' }} to="/updated-portfolio-react/work">
          <span >
            <label>●</label>
            <b>Work</b>
          </span>
        </Link>
        <Link class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/updated-portfolio-react/contact'})} style={{ textDecoration: 'none' }} to="/updated-portfolio-react/contact">
          <span >
            <label>●</label>
            <b>Contact</b>
          </span>
        </Link>
          </div>
        
      </nav>
    </>
  );
}

export default Sidebar;
