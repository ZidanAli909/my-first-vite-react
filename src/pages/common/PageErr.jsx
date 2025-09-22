import Navbar from "../../components/common/Navbar";

function Page404() {
    return (
        <body>
            <Navbar />
            <h1 class="text-6xl text-center m-8">404</h1>
            <p class="text-center mb-4">Halaman yang kamu cari tidak ditemukan. Mungkin salah ketik?</p>
        </body>
    );
}

export default Page404