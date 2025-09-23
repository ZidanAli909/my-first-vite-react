import Navbar from "../components/common/Navbar";
import {lipsum} from "./common/Placeholder";
import "./Home.css";

import zidanImg from "/img/zidan/passphoto.webp";

// Components

function Home_welcome() {
  return (
    <section class="bg-blue-500 text-white w-full h-fit flex flex-row overflow-hidden">
      <div class="flex-1">
        <h1 class="text-6xl text-right m-8 text-shadow-md">Welcome!</h1>
        <p class="text-right m-8 mt-0 text-shadow-sm">Selamat datang di website saya! Saya Weezer!</p>
      </div>
      <div class="flex-1">
        <img class="drop-shadow-2xl" src={zidanImg} alt="Ahmad Zidan Ali" />
      </div>
    </section>
  );
}

// Main Component (Page)

function Home() {
  return (
    <body class="bg-gray-100 w-full">
      <Navbar />
      <Home_welcome />
      <section class="w-3xl max-md:w-full m-8 p-6 ml-auto mr-auto card">
        <h2 class="text-xl mb-2">Halo, nama saya Ahmad Zidan Ali!</h2>
        <p>{lipsum}</p>
      </section>
    </body>
  );
}

// Component exports
export default Home;
