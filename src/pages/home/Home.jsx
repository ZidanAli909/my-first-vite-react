import Home_about from "../../components/about";
import Portofolio_stacks from "../../components/projects";

function Home() {
    return (
        <div>
            <div class="navbar_break">If you can see this, you're breaking this site. Seek help!</div>
            <Home_about />
            <Portofolio_stacks />
        </div>
    );
}

export default Home