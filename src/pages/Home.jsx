import Home_about from "../components/about";
import Portofolio_stacks from "../components/projects";
import Navbar from "../components/common/Navbar";

function Home() {
    return (
        <body class="bg-gray-100 w-full">
            <Navbar />
            <Home_about />
            <Portofolio_stacks />
        </body>
    );
}

export default Home