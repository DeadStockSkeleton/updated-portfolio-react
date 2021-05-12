import { Link, useLocation } from "react-router-dom";
import cn from 'classnames';

function Sidebar() {

    const location = useLocation();
  return (
    <>
      <nav  id="sidebar" class="nav sidebar flex-column text-start">
          <div class="links">
              <Link style={{ textDecoration: 'none' }} to="/">
          <a href='/' class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/'})}>
            <label>●</label>
            <b>Home</b>
          </a>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/about">
          <a href='/about' class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/about'})}>
            <label>●</label>
            <b>About</b>
          </a>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/work">
          <a href='/work' class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/work'})}>
            <label>●</label>
            <b>Work</b>
          </a>
        </Link>
        <Link style={{ textDecoration: 'none' }} to="/contact">
          <a href='/contact' class={cn('link text-decoration-none', {'link active text-decoration-none': location.pathname === '/contact'})}>
            <label>●</label>
            <b>Contact</b>
          </a>
        </Link>
          </div>
        
      </nav>
    </>
  );
}

export default Sidebar;
