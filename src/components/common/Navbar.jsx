import './Navbar.css';
import './global.css';

function navbar() {
  return (
    <div class="navbar">
      <div class="navbar-hero">
        <a href="#" class="current">Zidan Garage</a>
      </div>
      <nav class="navbar-nav">
        <a href="#" class="active">
          <span class="material-symbols-outlined filled">home</span>
          Home
        </a>
        <a href="#">
          <span class="material-symbols-outlined filled">work</span>
          Portofolio
        </a>
        <a href="#">
          <span class="material-symbols-outlined filled">image</span>
          Pictures
        </a>
        <a href="#">
          <span class="material-symbols-outlined filled">family_star</span>
          Fun Stuff
        </a>
        <a href="#">
          <span class="material-symbols-outlined filled">ballot</span>
          Survey
        </a>
      </nav>
    </div>
  );
}

export default navbar;
