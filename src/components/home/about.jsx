import zidanImg from '../../assets/img/zidan/passphoto.webp'

function Home_about() {
    return (
        <div>
            <h1>Hello, world!</h1>
            <img src={zidanImg} alt="Ahmad Zidan Ali" />
            <section>
                <p>Halo! Nama saya Ahmad Zidan Ali</p>
                <p>Saya mahasiswa Universitas Pembangunan Nasional Veteran Jakarta</p>
                <p>Saya mengambil jurusan Teknik Informatika</p>
            </section>
        </div>
    );
}

export default Home_about