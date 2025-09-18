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
          <span class="material-symbols-outlined">home</span>
          Home
        </a>
        <a href="#">
          <span class="material-symbols-outlined">work</span>
          Portofolio
        </a>
        <a href="#">
          <span class="material-symbols-outlined">image</span>
          Pictures
        </a>
        <a href="#">
          <span class="material-symbols-outlined">family_star</span>
          Fun Stuff
        </a>
        <a href="#">
          <span class="material-symbols-outlined">ballot</span>
          Survey
        </a>
      </nav>
    </div>
  );
}

export default navbar;
