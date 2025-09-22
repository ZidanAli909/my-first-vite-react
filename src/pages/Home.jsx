import Navbar from "../components/common/Navbar";
import "./Home.css";

import zidanImg from "../assets/img/zidan/passphoto.webp";

// Components

function Home_about() {
  return (
    <div class="card card_about flex flex-row max-sm:flex-col">
      <img
        class="card_about_img drop-shadow-2xl/15"
        src={zidanImg}
        alt="Ahmad Zidan Ali"
      />
      <section class="card_about_details">
        <h1 class="text-3xl font-semibold">About Me</h1>
        <br />
        <p>Nama saya Ahmad Zidan Ali</p>
        <p>Saya mahasiswa Universitas Pembangunan Nasional Veteran Jakarta.</p>
        <p>Saya mengambil jurusan Teknik Informatika.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </div>
  );
}

// Main Component (Page)

function Home() {
  return (
    <body class="bg-gray-100 w-full">
      <Navbar />
      <h1 class="text-6xl text-center m-8">Welcome!</h1>
      <Home_about />
      <h2>Hello, world!</h2>
    </body>
  );
}

// Component exports
export default Home;
