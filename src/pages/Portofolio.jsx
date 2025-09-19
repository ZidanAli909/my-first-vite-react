import Navbar from "../components/common/Navbar"
import './Portofolio.css';
// Logo
import img_html from '../assets/svg/logo/html-5.svg';
import img_css from '../assets/svg/logo/css-3.svg';
import img_js from '../assets/svg/logo/javascript.svg';
import img_react from '../assets/svg/logo/react.svg';
import img_express from '../assets/svg/logo/express-js.svg';
import img_android from '../assets/svg/logo/android-studio.svg';
import img_kotlin from '../assets/svg/logo/kotlin.svg';
import img_java from '../assets/svg/logo/java.svg';
// Logo

function Portofolio_stacks() {
    return (
        <div class="bg-gray-700 w-full text-white">
            <div class="p-8">
                <div class="flex justify-center items-center mb-4">
                    <h1 class="text-3xl font-semibold">Tech Stacks</h1>
                    <span class="material-symbols-outlined ml-4" style={{ fontSize: "48px" }}>stacks</span>
                </div>
                <p class="text-center">Check out my current stacks, plus this scrollable icons!</p>
            </div>
            <div class="techstacks_logo_contain">
                <img class="techstacks_logo" src={img_html} alt="Hypertext Markup Language" />
                <img class="techstacks_logo" src={img_css} alt="Cascading Style Sheets" />
                <img class="techstacks_logo" src={img_js} alt="JavaScript" />
                <img class="techstacks_logo" src={img_react} alt="React" />
                <img class="techstacks_logo" src={img_express} alt="express.js" />
                <img class="techstacks_logo" src={img_android} alt="Android Studio" />
                <img class="techstacks_logo" src={img_kotlin} alt="Kotlin" />
                <img class="techstacks_logo" src={img_java} alt="Java" />
            </div>
        </div>
    )
}

function Portofolio() {
    return (
        <body>
            <Navbar />
            <h1 class="text-6xl text-center m-8">Portofolio</h1>
            <p class="text-center mb-8">Lorem ipsum dolor sit amet.</p>
            <Portofolio_stacks />
        </body>
    )
}

export default Portofolio