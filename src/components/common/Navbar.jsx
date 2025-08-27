import "./Navbar.css";

function navbar() {
  return (
    <div className="navbar">
      <div id="brand">
        <p>Zidan Garage</p>
      </div>
      <nav id="menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Portofolio</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </div>
  );
}

export default navbar;
