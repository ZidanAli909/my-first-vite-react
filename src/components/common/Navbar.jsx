import './Navbar.css';

function navbar() {
  return (
    <div class="navbar">
      <div class="navbar-hero">
        <a href="#" class="current">Zidan Garage</a>
      </div>
      <nav class="navbar-nav">
        <a href="#" class="current">Home</a>
        <a href="#">Portofolio</a>
        <a href="#">Pictures</a>
        <a href="#">Fun Stuff</a>
        <a href="#">Survey</a>
      </nav>
    </div>
  );
}

export default navbar;
