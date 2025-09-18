import zidanImg from "../assets/img/zidan/passphoto.webp";
import "./common/global.css";
import "./about.css";

function Home_about() {
  return (
    <div class="card card_about flex flex-row max-sm:flex-col">
      <img
        class="card_about_img drop-shadow-2xl/15"
        src={zidanImg}
        alt="Ahmad Zidan Ali"
      />
      <section class="card_about_details">
        <h1 class="text-3xl font-semibold">Hello, world!</h1>
        <br />
        <p>Hello, world!</p>
        <p>
          Nama saya Ahmad Zidan Ali, dikenal dengan username AhmadZidanAli909
        </p>
        <p>Saya mahasiswa Universitas Pembangunan Nasional Veteran Jakarta.</p>
        <p>Saya mengambil jurusan Teknik Informatika.</p>
        <p>Lorem ipsum dolor sit amet.</p>
      </section>
    </div>
  );
}

export default Home_about;
