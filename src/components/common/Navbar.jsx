import { Link } from "react-router";
import "./Navbar.css";
import "./global.css";

function Navbar() {
  return (
    <section>
      <div class="navbar">
        <div class="navbar-hero">
          <Link to="/">Zidan Garage</Link>
        </div>
        <nav class="navbar-nav">
          <Link class="navbar-navli" to="/">
            <span class="material-symbols-outlined filled">home</span>
            Home
          </Link>
          <Link class="navbar-navli" to="/portofolio">
            <span class="material-symbols-outlined filled">work</span>
            Portofolio
          </Link>
          <Link class="navbar-navli" to="/funstuff">
            <span class="material-symbols-outlined filled">family_star</span>
            Fun Stuff
          </Link>
          <Link class="navbar-navli" to="/survey">
            <span class="material-symbols-outlined filled">ballot</span>
            Survey
          </Link>
        </nav>
      </div>
      <div class="navbar-break">
        If you can see this, you're breaking this site. Seek help!
      </div>
    </section>
  );
}

export default Navbar;
